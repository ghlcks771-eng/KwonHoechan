(function () {
  const app = document.getElementById("app");

  // 브라우저가 뒤로/앞으로가기 시 "그 히스토리 항목이 만들어졌을 때의 스크롤 위치"로
  // 자동 복원하는 기능이 있는데, 이게 라이트박스 안에서 나중에 이동한 위치를 무시하고
  // 처음 열었을 때 위치로 되돌려버림 - 꺼두고 스크롤은 전부 직접 제어함
  if ("scrollRestoration" in history) {
    try { history.scrollRestoration = "manual"; } catch (e) {}
  }

  // ============================================================
  // 언어 상태 / 번역 헬퍼
  // ============================================================
  let currentLang = (function () {
    try { return localStorage.getItem("lang") || "ko"; } catch (e) { return "ko"; }
  })();

  function t(field) {
    if (field == null) return "";
    if (typeof field === "string") return field;
    return field[currentLang] || field.ko || field.en || "";
  }

  function ui(key) {
    const dict = UI[currentLang] || UI.ko;
    return dict[key] !== undefined ? dict[key] : UI.ko[key];
  }

  function applyStaticI18n() {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      el.textContent = ui(el.getAttribute("data-i18n"));
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const val = ui(el.getAttribute("data-i18n-aria"));
      el.setAttribute("aria-label", val);
      el.setAttribute("title", val);
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      el.setAttribute("placeholder", ui(el.getAttribute("data-i18n-placeholder")));
    });
    document.documentElement.lang = currentLang === "ko" ? "ko" : "en";
  }

  // ============================================================
  // 트리 유틸 (Works/Text 공용)
  // ============================================================
  function findFirstWork(node) {
    if (node.works && node.works.length) return WORKS[node.works[0]] || null;
    if (node.children) {
      for (const child of node.children) {
        const found = findFirstWork(child);
        if (found) return found;
      }
    }
    return null;
  }

  function catPreviewItem(href, title, node) {
    const w = findFirstWork(node);
    const thumbSrc = w && (w.thumb || w.image);
    const inner = thumbSrc
      ? `<img src="${thumbSrc}" alt="${title}" loading="lazy" />`
      : `<span class="placeholder-mark">${ui("placeholderNoImage")}</span>`;
    const style = thumbSrc ? "" : placeholderStyle(0);
    return `
      <li class="cat-item">
        <a href="${href}" class="cat-item-link">
          <span class="cat-preview" style="${thumbSrc ? "" : `aspect-ratio:4/5;${style}`}">${inner}</span>
          <span class="cat-item-title">${title}</span>
        </a>
      </li>`;
  }

  function findNode(nodes, id) {
    return (nodes || []).find((n) => n.id === id);
  }

  function resolveTreePath(tree, segments) {
    let nodes = tree, trail = [], node = null;
    for (const seg of segments) {
      node = findNode(nodes, seg);
      if (!node) return { trail, node: null };
      trail.push(node);
      nodes = node.children || [];
    }
    return { trail, node };
  }

  function findLeafPath(tree, leafKey, targetId) {
    function walk(nodes, trail) {
      for (const node of nodes) {
        if (node.children) {
          const found = walk(node.children, trail.concat(node.id));
          if (found) return found;
        } else if (node[leafKey] && node[leafKey].includes(targetId)) {
          return trail.concat(node.id);
        }
      }
      return null;
    }
    return walk(tree, []);
  }

  function breadcrumbHtml(trail, base, label) {
    const crumbs = [`<a href="#/${base}" class="breadcrumb-root">${label}</a>`];
    let acc = [];
    trail.forEach((node) => {
      acc.push(node.id);
      crumbs.push(`<a href="#/${base}/${acc.join("/")}">${t(node.title)}</a>`);
    });
    return `<nav class="breadcrumb">${crumbs.join('<span class="crumb-sep"> &gt; </span>')}</nav>`;
  }

  // ============================================================
  // 페이지네이션
  // ============================================================
  // 작품이 카테고리 안에서 몇 번째 페이지(30개씩)에 있는지 계산해서, 그 페이지로
  // 바로 이동하는 링크를 만들 때 씀 (기본 1페이지로만 가던 것 대신)
  const WORKS_PER_PAGE = 30;

  function findWorkPageInfo(workId) {
    const path = findLeafPath(WORK_CATEGORIES, "works", workId);
    if (!path) return null;
    const { trail } = resolveTreePath(WORK_CATEGORIES, path);
    const leaf = trail[trail.length - 1];
    if (!leaf || !leaf.works) return null;
    const idx = leaf.works.indexOf(workId);
    if (idx === -1) return null;
    const page = Math.floor(idx / WORKS_PER_PAGE) + 1;
    return { path, page };
  }

  function workGalleryHref(workId) {
    const info = findWorkPageInfo(workId);
    if (!info) return "#/works";
    const pageSeg = info.page > 1 ? `/page-${info.page}` : "";
    return `#/works/${info.path.join("/")}${pageSeg}`;
  }

  // 작품 목록 그리드로 이동한 뒤, 해당 작품 카드로 스크롤(+옵션으로 자동 라이트박스 오픈)
  let pendingWorkFocus = null;

  // 모바일 갤러리 핀치로 고른 열 개수(1~5) - localStorage에 저장해서, 언어 설정처럼
  // 페이지를 이동하거나 사이트를 나갔다 다시 들어와도(브라우저를 껐다 켜도) 기억함
  let savedGalleryColumns = (function () {
    try {
      const saved = Number(localStorage.getItem("galleryCols"));
      return saved >= 1 && saved <= 5 ? saved : null;
    } catch (e) { return null; }
  })();

  function applySavedGalleryColumns() {
    if (!savedGalleryColumns || savedGalleryColumns <= 1) return;
    document.querySelectorAll(".grid.grid-fullbleed").forEach((grid) => {
      grid.style.gridTemplateColumns = `repeat(${savedGalleryColumns}, 1fr)`;
      grid.style.gap = `${Math.max(6, 28 - (savedGalleryColumns - 1) * 5)}px`;
      grid.classList.toggle("grid-compact", savedGalleryColumns >= 2);
    });
  }

  function armWorkFocus(workId, openLightbox, flashHighlight) {
    pendingWorkFocus = { workId, openLightbox: !!openLightbox, flashHighlight: !!flashHighlight };
  }

  function applyPendingWorkFocus() {
    if (!pendingWorkFocus) return;
    const { workId, openLightbox, flashHighlight } = pendingWorkFocus;
    pendingWorkFocus = null;
    const card = app.querySelector(`.card[data-work="${cssEscapeAttr(workId)}"]`);
    if (!card) return;
    scrollElementToCenter(card);
    if (openLightbox) { card.click(); return; }
    if (flashHighlight) {
      const frame = card.querySelector(".frame") || card;
      flashHighlightEl(frame);
    }
  }

  // scrollIntoView({block:"center"})는 페이지가 짧아서 스크롤할 여지가 애매하게 부족할 때
  // (뷰포트보다 살짝만 더 긴 경우 등) 브라우저마다 계산이 이상해지는 경우가 있어서,
  // 대신 현재 스크롤 위치 + 요소의 화면상 위치로 직접 목표 스크롤 값을 계산함
  function scrollElementToCenter(el, smooth) {
    const rect = el.getBoundingClientRect();
    const targetY = window.scrollY + rect.top - (window.innerHeight / 2 - rect.height / 2);
    window.scrollTo({ top: Math.max(0, targetY), behavior: smooth ? "smooth" : "auto" });
  }

  // 즉시 나타났다가 충분히 머문 뒤 서서히 사라지는 강조 효과(각주 인용 강조와 동일한 방식)
  // 각주 목록 항목(li)은 flex로 늘어나 있어서 그대로 강조하면 가로로 넓게 퍼짐 -
  // 안쪽의 글자 범위만큼만 감싼 요소가 있으면 그쪽을 강조 대상으로 씀
  function flashHighlightFootnoteTarget(el) {
    return el.querySelector(".footnote-text-mark") || el;
  }

  function flashHighlightEl(el, holdMs) {
    el.classList.add("flash-highlight");
    setTimeout(() => {
      el.classList.add("flash-highlight-fade");
      setTimeout(() => el.classList.remove("flash-highlight", "flash-highlight-fade"), 1000);
    }, holdMs != null ? holdMs : 120);
  }

  function cssEscapeAttr(value) {
    return window.CSS && CSS.escape ? CSS.escape(value) : String(value).replace(/["\\]/g, "\\$&");
  }

  // 글 상세로 이동한 뒤, 해당 작품을 인용한 위치(문장)로 스크롤 + 화면 가운데 정렬 + 잠깐 강조
  let pendingPostFocus = null;

  function armPostFocus(workId) {
    pendingPostFocus = { workId };
  }

  let pendingPostTitleHighlight = false;

  let pendingBodySearchHighlight = null; // { postId, query }

  function armBodySearchHighlight(postId, query) {
    pendingBodySearchHighlight = { postId, query };
  }

  function armPostTitleHighlight() {
    pendingPostTitleHighlight = true;
  }

  function applyPendingPostTitleHighlight() {
    if (!pendingPostTitleHighlight) return;
    pendingPostTitleHighlight = false;
    const titleEl = app.querySelector(".post-title, .detail-title");
    if (titleEl) flashHighlightEl(titleEl);
  }

  function applyPendingPostFocus() {
    if (!pendingPostFocus) return;
    const { workId } = pendingPostFocus;
    pendingPostFocus = null;
    const el = app.querySelector(`#work-mention-${cssEscapeAttr(workId)}`);
    if (!el) return;
    scrollElementToCenter(el);
    flashHighlightEl(el, 1200);
  }

  function extractPage(segments) {
    const last = segments[segments.length - 1];
    const m = last && /^page-(\d+)$/.exec(last);
    if (m) return { page: parseInt(m[1], 10), rest: segments.slice(0, -1) };
    return { page: 1, rest: segments };
  }

  function paginate(items, page, perPage) {
    const totalPages = Math.max(1, Math.ceil(items.length / perPage));
    const p = Math.min(Math.max(1, page || 1), totalPages);
    const start = (p - 1) * perPage;
    return { pageItems: items.slice(start, start + perPage), page: p, totalPages };
  }

  function pagerHtml(baseHash, page, totalPages) {
    if (totalPages <= 1) return "";
    const prev = page > 1
      ? `<a href="${baseHash}/page-${page - 1}" class="pager-arrow" aria-label="prev">‹</a>`
      : `<span class="pager-disabled pager-arrow">‹</span>`;
    const next = page < totalPages
      ? `<a href="${baseHash}/page-${page + 1}" class="pager-arrow" aria-label="next">›</a>`
      : `<span class="pager-disabled pager-arrow">›</span>`;

    // 현재 페이지 주변 + 처음/끝 페이지만 보여주고 나머지는 생략(...)
    const windowSize = 2;
    const shownPages = [];
    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= page - windowSize && i <= page + windowSize)) {
        shownPages.push(i);
      }
    }
    let numbers = "";
    let prevShown = 0;
    shownPages.forEach((p) => {
      if (prevShown && p - prevShown > 1) numbers += `<span class="pager-ellipsis">…</span>`;
      numbers += (p === page)
        ? `<span class="pager-current">${p}</span>`
        : `<a href="${baseHash}/page-${p}">${p}</a>`;
      prevShown = p;
    });

    return `<nav class="pager">${prev}${numbers}${next}</nav>`;
  }

  // ============================================================
  // 텍스트 렌더 유틸
  // ============================================================
  function escapeHtml(str) {
    return String(str == null ? "" : str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  function escapeRegExp(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  // 검색 매칭/표시용으로 서식 기호(**볼드**, -*이탤릭*-, __밑줄__, [링크](주소))를 제거한
  // 순수 텍스트를 만듦 - 이걸 안 하면 별표가 연속된 검색어 매칭을 깨뜨리고,
  // 결과 화면에도 기호가 그대로 노출돼버림
  function stripFormatting(text) {
    return (text || "")
      .replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, "$1")
      .replace(/\*\*([\s\S]*?)\*\*/g, "$1")
      .replace(/-\*([\s\S]*?)\*-/g, "$1")
      .replace(/__([\s\S]*?)__/g, "$1");
  }

  // \n을 <br>로 바꿈 (뒤따르던 공백은 renderBodyWithFootnotes 시작부에서 이미 보존 처리됨)
  function nlToBr(html) {
    return html.replace(/\n/g, "<br>");
  }

  function renderInline(text) {
    const escaped = escapeHtml(text);
    let html = escaped.replace(
      /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener" class="inline-link">$1</a>'
    );
    // 볼드체: **글자** -> 굵게. 이탤릭보다 먼저 처리해야 겹치지 않음
    html = html.replace(/\*\*([\s\S]*?)\*\*/g, "<strong>$1</strong>");
    // 이탤릭: -*글자*- -> 기울임체 (기사 등에서 흔한 단순 *강조*와 안 헷갈리게 앞뒤 하이픈 필요)
    html = html.replace(/-\*([\s\S]*?)\*-/g, "<em>$1</em>");
    // 밑줄: __글자__ -> 밑줄 (밑줄 두 개, 흔한 단순 _글자_ 표기와 안 헷갈리게)
    html = html.replace(/__([\s\S]*?)__/g, "<u>$1</u>");
    return html;
  }

  // 문단 앞에 [center]/[left]/[right]를 쓰면 그 문단만 정렬이 바뀜(표시는 지워짐).
  // 아무 표시가 없으면 기존 그대로 양쪽정렬(justify) 유지
  function extractAlignment(paragraph) {
    const m = /^\[(center|left|right)\]\s*/i.exec(paragraph);
    if (!m) return { text: paragraph, align: null };
    return { text: paragraph.slice(m[0].length), align: m[1].toLowerCase() };
  }

  // 줄바꿈 2개 이상을 문단 구분으로 삼되, 그 개수(구분자 자체)도 캡처해서 세어둠 -
  // 2개(기본 문단 간격)를 넘는 만큼은 문단 위쪽에 여백을 추가로 줌(빈 줄을 더 넣은 만큼 벌어짐)
  function splitParagraphsWithFormatting(text) {
    const parts = (text || "").split(/(\n{2,})/);
    const paragraphs = [];
    let pendingBreaks = 0;
    let trailingBreaks = 0; // 맨 끝에 문단 없이 줄바꿈만 남는 경우를 위해 기록해둠
    parts.forEach((part, i) => {
      if (i % 2 === 1) { pendingBreaks = Math.max(0, part.length - 2); return; } // 기본 2개는 문단 구분용, 그 이상만 추가 줄바꿈으로 남김
      if (!part.trim()) { trailingBreaks = pendingBreaks; return; }
      paragraphs.push({ text: part, leadingBreaks: pendingBreaks });
      pendingBreaks = 0;
      trailingBreaks = 0;
    });
    // 글이 줄바꿈들로 끝나서 그 뒤에 붙을 문단이 없는 경우, 버리지 않고 마지막 문단
    // 뒤쪽에 그만큼 줄바꿈을 붙여줌
    if (trailingBreaks > 0 && paragraphs.length) {
      paragraphs[paragraphs.length - 1].trailingBreaks = trailingBreaks;
    }
    return paragraphs;
  }

  function renderParagraphsHtml(text) {
    return splitParagraphsWithFormatting(text).map(({ text: p, leadingBreaks, trailingBreaks }) => {
      const { text: content, align } = extractAlignment(p);
      const alignClass = align ? ` class="align-${align}"` : "";
      // 문단 안에서 쓴 단순 줄바꿈(\n 하나)도 그대로 <br>로 보이게 함 (뒤따르는 공백도 보존)
      const withBreaks = nlToBr(renderInline(content));
      const leadingBr = leadingBreaks ? "<br>".repeat(leadingBreaks) : "";
      const trailingBr = trailingBreaks ? "<br>&nbsp;".repeat(trailingBreaks) : "";
      return `<p${alignClass}>${leadingBr}${withBreaks}${trailingBr}</p>`;
    }).join("");
  }

  function renderParagraphs(text) {
    return renderParagraphsHtml(text);
  }

  // 각주 시스템 - 본문에 -[^각주 내용]- 이렇게 쓰면 그 자리에 작은 위첨자 번호가 자동으로 붙고,
  // 등장 순서대로 번호가 매겨지면서 글 맨 끝에 각주 목록이 자동으로 생성됨
  // (아래아한글의 "각주" 기능과 같은 개념 - 번호를 직접 안 세도 됨)
  // 사이트 전체에서 유일한(중복 없는) 작품 제목만 자동 링크 대상으로 삼음
  // ("무제"처럼 여러 작품이 같은 제목을 쓰면 어느 작품인지 알 수 없으므로 제외)
  function buildUniqueTitleMap() {
    const counts = {};
    const idByTitle = {};
    Object.keys(WORKS).forEach((id) => {
      const title = t(WORKS[id].title).trim();
      if (!title) return;
      counts[title] = (counts[title] || 0) + 1;
      idByTitle[title] = id;
    });
    const unique = {};
    Object.keys(counts).forEach((title) => {
      if (counts[title] === 1) unique[title] = idByTitle[title];
    });
    return unique;
  }

  // 특정 작품을 인용(제목이 언급)한 글들을 찾음 - "글 찾아보기" 링크용
  function findPostsMentioningWork(workId) {
    const w = WORKS[workId];
    if (!w) return [];
    const title = t(w.title).trim();
    if (!title) return [];
    const titleMap = buildUniqueTitleMap();
    if (titleMap[title] !== workId) return []; // 유일한 제목이 아니면 애초에 자동 링크 대상이 아니었음
    return Object.keys(POSTS).filter((postId) => (t(POSTS[postId].body) || "").includes(title));
  }

  // 글이 Text 카테고리 트리에서 어디에 속하는지(그 카테고리 제목) 찾음 - 같은 작품을
  // 인용한 글이 여러 개일 때 "카테고리·글 제목"으로 구분해서 보여줄 때 씀
  function findPostCategoryTitle(postId) {
    let result = null;
    const walk = (nodes) => {
      (nodes || []).forEach((node) => {
        if (result) return;
        if ((node.posts || []).includes(postId)) { result = t(node.title); return; }
        if (node.children) walk(node.children);
      });
    };
    walk(TEXT_CATEGORIES);
    return result;
  }

  // 본문에서 유일한 작품 제목이 처음 등장하는 곳 하나만 링크로 치환(같은 글에서 반복 언급은 링크 안 함)
  function autoLinkWorkTitles(text, mentions) {
    const titleMap = buildUniqueTitleMap();
    const titles = Object.keys(titleMap).sort((a, b) => b.length - a.length); // 긴 제목부터(짧은 제목이 부분 포함될 때 우선순위)
    const usedWorkIds = new Set();
    let result = text;
    titles.forEach((title) => {
      if (!title) return;
      const workId = titleMap[title];
      if (usedWorkIds.has(workId)) return;
      const idx = result.indexOf(title);
      if (idx === -1) return;
      usedWorkIds.add(workId);
      mentions.push({ title, workId });
      const token = `@@WM${mentions.length}@@`;
      result = result.slice(0, idx) + token + result.slice(idx + title.length);
    });
    return result;
  }

  function renderBodyWithFootnotes(text, highlightQuery) {
    const footnotes = [];
    const mentions = [];
    // 두 가지를 미리 처리해둠(가장 앞단에서 한 번에):
    // 1) \n 뒤에 오는 공백 - 브라우저가 "줄 시작 공백"으로 보고 없애버림
    // 2) 스페이스바를 연달아 여러 번 누른 경우 - 브라우저가 몇 칸이든 화면엔 1칸으로 뭉개버림
    // 둘 다 안 없어지는 공백(\u00A0)으로 바꿔서 실제 입력한 그대로 보존되게 함
    // (마지막 한 칸은 일반 스페이스로 남겨둬서 그 자리에서 자연스럽게 줄바꿈도 가능하게 함)
    let workingText = (text || "")
      .replace(/ {2,}/g, (m) => "\u00A0".repeat(m.length - 1) + " ")
      .replace(/\n /g, "\n\u00A0");

    // 검색 강조: 각주/링크 처리 전에 원본 텍스트에서 매치 위치를 찾아 특수 토큰으로 감싸둠
    // (각주 안의 매치는 여기서 다루지 않음 - findSearchMatchLocation으로 미리 구분해서
    //  그 경우엔 각주 목록 쪽에 자연히 강조되도록 별도 처리함)
    if (highlightQuery) {
      const lowerText = workingText.toLowerCase();
      const idx = lowerText.indexOf(highlightQuery.toLowerCase());
      if (idx !== -1) {
        const matched = workingText.slice(idx, idx + highlightQuery.length);
        workingText = workingText.slice(0, idx) + "@@SM_START@@" + matched + "@@SM_END@@" + workingText.slice(idx + highlightQuery.length);
      }
    }

    // 1단계: -[^내용]-을 실제 각주 내용은 따로 빼두고, 자리엔 임시 표시(플레이스홀더)만 남김
    // (플레이스홀더 상태로 escapeHtml/링크 처리를 통과시켜야 태그가 이스케이프되지 않음)
    let withPlaceholders = workingText.replace(/-\[\^([\s\S]*?)\]-/g, (match, content) => {
      footnotes.push(content.trim());
      return `@@FN${footnotes.length}@@`;
    });

    // 1.5단계: 유일한 작품 제목도 같은 방식으로 플레이스홀더 처리
    withPlaceholders = autoLinkWorkTitles(withPlaceholders, mentions);

    let bodyHtml = renderParagraphsHtml(withPlaceholders);

    // 2단계: 플레이스홀더를 실제 위첨자 각주 번호 링크로 치환
    bodyHtml = bodyHtml.replace(/@@FN(\d+)@@/g, (match, num) =>
      `<sup class="footnote-ref"><span class="footnote-jump" data-jump-to="fn-${num}" id="fnref-${num}" role="link" tabindex="0">${num})</span></sup>`
    );

    // 2.5단계: 작품 제목 플레이스홀더를 실제 미리보기 링크로 치환
    bodyHtml = bodyHtml.replace(/@@WM(\d+)@@/g, (match, num) => {
      const mention = mentions[Number(num) - 1];
      if (!mention) return "";
      const w = WORKS[mention.workId];
      if (!w) return escapeHtml(mention.title);
      const href = workGalleryHref(mention.workId);
      const thumbSrc = w.thumb || w.image || "";
      return `<a href="${href}" id="work-mention-${escapeHtml(mention.workId)}" class="work-mention" data-work-id="${escapeHtml(mention.workId)}" data-preview-src="${escapeHtml(thumbSrc)}">${escapeHtml(mention.title)}</a>`;
    });

    // 2.7단계: 검색어 매치 토큰을 실제 강조 태그로 치환
    bodyHtml = bodyHtml.replace(/@@SM_START@@([\s\S]*?)@@SM_END@@/, '<mark id="search-match" class="search-match-highlight">$1</mark>');

    if (footnotes.length) {
      const items = footnotes.map((content, i) => {
        const num = i + 1;
        return `
          <li id="fn-${num}">
            <span class="footnote-num footnote-jump" data-jump-to="fnref-${num}" role="link" tabindex="0" aria-label="본문으로">${num})</span>
            <span class="footnote-text"><span class="footnote-text-mark">${nlToBr(renderInline(content))}</span></span>
          </li>`;
      }).join("");
      bodyHtml += `<ol class="footnote-list">${items}</ol>`;
    }

    return bodyHtml;
  }

  // 검색어가 본문 어디에 있는지(일반 본문 vs 각주 안) 미리 확인 - 각주 안이면 그 각주로
  // 바로 스크롤하면 되고, 일반 본문이면 renderBodyWithFootnotes에 강조를 맡김
  function findFootnoteSpans(text) {
    const spans = [];
    const re = /-\[\^([\s\S]*?)\]-/g;
    let m, order = 0;
    while ((m = re.exec(text))) {
      order++;
      spans.push({ order, contentStart: m.index + 3, contentEnd: m.index + m[0].length - 2 });
    }
    return spans;
  }

  function findSearchMatchLocation(text, query) {
    if (!text || !query) return null;
    const idx = text.toLowerCase().indexOf(query.toLowerCase());
    if (idx === -1) return null;
    const inSpan = findFootnoteSpans(text).find((s) => idx >= s.contentStart && idx < s.contentEnd);
    if (inSpan) return { footnoteOrder: inSpan.order };
    return { inBody: true };
  }

  function highlight(text, query) {
    const escaped = escapeHtml(text || "");
    if (!query) return escaped;
    const re = new RegExp(escapeRegExp(escapeHtml(query)), "gi");
    return escaped.replace(re, (m) => `<mark class="hl">${m}</mark>`);
  }

  function snippet(text, query, radius) {
    radius = radius || 40;
    const raw = text || "";
    const idx = raw.toLowerCase().indexOf(query.toLowerCase());
    if (idx === -1) return escapeHtml(raw).slice(0, 90);
    const start = Math.max(0, idx - radius);
    const end = Math.min(raw.length, idx + query.length + radius);
    let snip = raw.slice(start, end);
    if (start > 0) snip = "…" + snip;
    if (end < raw.length) snip = snip + "…";
    return highlight(snip, query);
  }

  // ============================================================
  // 이미지 카드 유틸
  // ============================================================
  function placeholderStyle(seed) {
    const angle = (seed * 37) % 180;
    return `background: repeating-linear-gradient(${angle}deg, var(--paper) 0px, var(--paper) 10px, var(--line) 10px, var(--line) 11px);`;
  }

  function thumbCard(id, work, index, globalIndex) {
    if (!work) {
      console.warn(`[artist-site] WORKS에 없는 id를 참조하고 있습니다: "${id}" (오타 확인 필요)`);
      return "";
    }
    const title = t(work.title);
    const thumbSrc = work.thumb || work.image;
    const inner = thumbSrc
      ? `<img src="${thumbSrc}" alt="${title}" loading="lazy" />`
      : `<span class="placeholder-mark">${ui("placeholderNoImage")}</span>`;
    // 실제 이미지가 있으면 원본 비율 그대로(스타일 없음), 없으면 자리표시자용 고정 비율
    const style = thumbSrc ? "" : `aspect-ratio:4/5;${placeholderStyle(index)}`;
    const gIndex = globalIndex != null ? globalIndex : index;
    return `
      <figure class="card" data-work="${id}" data-work-index="${gIndex}" tabindex="0" role="button" aria-label="${escapeHtml(title)}, ${work.year} — ${ui("viewLarger")}">
        <div class="frame" style="${style}">${inner}</div>
        <figcaption class="cap"><span>${title}</span><span class="cap-year">${work.year}</span></figcaption>
      </figure>`;
  }

  function attachThumbHandlers(root, context, fullList, source) {
    const cards = Array.from(root.querySelectorAll(".card[data-work]"));
    const list = fullList || cards.map((c) => c.dataset.work);
    cards.forEach((card) => {
      const explicitIndex = card.dataset.workIndex != null ? Number(card.dataset.workIndex) : null;
      card.addEventListener("click", () => {
        scrollElementToCenter(card);
        openWorkLightbox(card.dataset.work, context, list, source, explicitIndex);
      });
    });
  }

  // 전시를 시간순(오래된 것부터)으로 정렬 - 같은 연도에 여러 전시가 있으면 서문 글의
  // 날짜(POSTS의 date 필드)로 세부 정렬함. 서문이 없거나 날짜가 없으면 그 해 1월 1일로 취급
  function getExhibitionEssayDate(ex) {
    const essayId = (ex.essayPostIds || [])[0];
    const post = essayId ? POSTS[essayId] : null;
    return (post && post.date) || `${ex.year}-01-01`;
  }

  function exhibitionChronoSort(a, b) {
    const yearDiff = Number(a.year) - Number(b.year);
    if (yearDiff !== 0) return yearDiff;
    return getExhibitionEssayDate(a).localeCompare(getExhibitionEssayDate(b));
  }

  function findExhibitionsCitingPost(postId) {
    return EXHIBITIONS.filter((ex) =>
      (ex.essayPostIds || []).includes(postId) || (ex.criticPostIds || []).includes(postId)
    ).slice().sort(exhibitionChronoSort);
  }

  function postRefCard(postId) {
    const p = POSTS[postId];
    if (!p) return "";
    const author = renderInline(t(p.author));
    const meta = author ? `${p.date} · ${author}` : p.date;
    return `
      <li class="ref-item">
        <a href="#/text/post/${postId}">
          <span class="ref-title">${renderInline(t(p.title))}</span>
          <span class="ref-meta">${meta}</span>
        </a>
      </li>`;
  }

  // ============================================================
  // 렌더: CV (홈)
  // ============================================================
  function renderCV() {
    const profile = `
      <div class="cv-profile">
        <p class="cv-profile-line">${t(PROFILE.birth)}</p>
        ${PROFILE.education.map((e) => `<p class="cv-profile-line">${t(e)}</p>`).join("")}
      </div>`;

    const groups = CV_GROUPS;

    const sections = groups.map((g) => {
      const items = EXHIBITIONS.filter((ex) => ex.type === g.id);
      if (!items.length) return "";
      const rows = items.map((ex, i) => {
        // 바로 앞 항목과 연도가 다르면(=연도가 바뀌는 지점) 살짝 위쪽 여백을 줌
        const yearBreak = i > 0 && items[i - 1].year !== ex.year;
        return `
        <li class="cv-item${yearBreak ? " cv-year-break" : ""}">
          <a href="#/exhibition/${ex.id}" class="cv-link">
            <span class="cv-line"><span class="cv-year-col">${ex.year}</span><span class="cv-rest-col">${t(ex.title)}, ${t(ex.venue)}${ex.city ? `, ${t(ex.city)}` : ""}</span></span>
          </a>
        </li>`;
      }).join("");
      return `<h2 class="cv-group-label">${t(g.label)}</h2><ul class="cv-list">${rows}</ul>`;
    }).join("");

    app.innerHTML = `
      <section class="cv-page">
        <div class="wrap">
          ${profile}
          <p class="cv-intro">${ui("cvIntro")}</p>
          ${sections}
        </div>
      </section>`;
  }

  // ============================================================
  // 렌더: 전시 상세
  // ============================================================
  function installCard(img, i) {
    const thumbSrc = img.thumb || img.image;
    const caption = t(img.caption);
    const inner = thumbSrc
      ? `<img src="${thumbSrc}" alt="${caption}" loading="lazy" />`
      : `<span class="placeholder-mark">${ui("placeholderNoImage")}</span>`;
    const style = thumbSrc ? "" : `aspect-ratio:3/2;${placeholderStyle(i)}`;
    return `
      <figure class="card" data-install="${i}" tabindex="0" role="button" aria-label="${escapeHtml(caption)} — ${ui("viewLarger")}">
        <div class="frame" style="${style}">${inner}</div>
        <figcaption class="cap"><span>${caption}</span></figcaption>
      </figure>`;
  }

  const EXHIBITION_PREVIEW_COUNT = 5;

  function renderExhibition(id) {
    const ex = EXHIBITIONS.find((e) => e.id === id);
    if (!ex) return renderNotFound();

    const allInstalls = ex.installationImages || [];
    const allWorks = ex.works || [];
    const previewInstalls = allInstalls.slice(0, EXHIBITION_PREVIEW_COUNT);
    const previewWorks = allWorks.slice(0, EXHIBITION_PREVIEW_COUNT);

    const installsHtml = previewInstalls.map((img, i) => installCard(img, i)).join("");
    const worksHtml = previewWorks.map((wid, i) => thumbCard(wid, WORKS[wid], i)).join("");
    const essay = (ex.essayPostIds || []).map(postRefCard).join("");
    const critiques = (ex.criticPostIds || []).map(postRefCard).join("");

    const installsMore = allInstalls.length > EXHIBITION_PREVIEW_COUNT
      ? `<a href="#/exhibition/${id}/installs" class="gallery-more">${ui("more")} (${allInstalls.length})</a>` : "";
    const worksMore = allWorks.length > EXHIBITION_PREVIEW_COUNT
      ? `<a href="#/exhibition/${id}/works" class="gallery-more">${ui("more")} (${allWorks.length})</a>` : "";

    app.innerHTML = `
      <section class="detail-page">
        <div class="wrap">
          <a href="#/" class="back-link">${ui("backToCV")}</a>
          <p class="section-label detail-year">${ex.year}</p>
          <h1 class="detail-title">${t(ex.title)}</h1>
          <p class="detail-venue">${t(ex.venue)}</p>

          ${essay ? `<h2 class="subhead">${ui("essayLabel")}</h2><ul class="ref-list">${essay}</ul>` : ""}
          ${installsHtml ? `<h2 class="subhead">${ui("installLabel")}</h2>` : ""}
        </div>
        ${installsHtml ? `<div class="grid grid-fullbleed">${installsHtml}</div>` : ""}
        ${installsMore ? `<div class="wrap">${installsMore}</div>` : ""}
        <div class="wrap">
          ${worksHtml ? `<h2 class="subhead">${ui("worksSectionLabel")}</h2>` : ""}
        </div>
        ${worksHtml ? `<div class="grid grid-fullbleed">${worksHtml}</div>` : ""}
        ${worksMore ? `<div class="wrap">${worksMore}</div>` : ""}
        <div class="wrap">
          ${critiques ? `<h2 class="subhead">${ui("critiqueLabel")}</h2><ul class="ref-list">${critiques}</ul>` : ""}
        </div>
      </section>`;

    if (installsHtml || worksHtml) document.body.classList.add("gallery-page");
    attachThumbHandlers(app, "exhibition", allWorks, { type: "exhibition", exhibitionId: ex.id, kind: "works" });
    app.querySelectorAll(".card[data-install]").forEach((card) => {
      const idx = Number(card.dataset.install);
      card.addEventListener("click", () => {
        scrollElementToCenter(card);
        openInstallLightbox(idx, allInstalls, { type: "exhibition", exhibitionId: ex.id, kind: "installs" });
      });
    });
    applyPendingKeyboardEdgeFocus();
    applyPendingPostTitleHighlight();
    applySavedGalleryColumns();
  }

  // 전시 전경/작업 전체보기 - Works 갤러리와 동일하게 30개씩 페이지네이션
  function renderExhibitionGallery(id, kind, page) {
    const ex = EXHIBITIONS.find((e) => e.id === id);
    if (!ex) return renderNotFound();

    const all = kind === "installs" ? (ex.installationImages || []) : (ex.works || []);
    // 미리보기(5개)보다 많을 때만 더보기 페이지가 의미 있음 - 아니면 개요 페이지로 돌려보냄
    if (all.length <= EXHIBITION_PREVIEW_COUNT) {
      location.hash = `#/exhibition/${id}`;
      return;
    }
    const label = kind === "installs" ? ui("installLabel") : ui("worksSectionLabel");
    const { pageItems, page: curPage, totalPages } = paginate(all, page, 30);
    const offset = (curPage - 1) * 30;

    const itemsHtml = kind === "installs"
      ? pageItems.map((img, i) => installCard(img, offset + i)).join("")
      : pageItems.map((wid, i) => thumbCard(wid, WORKS[wid], i, offset + i)).join("");

    const baseHash = `#/exhibition/${id}/${kind}`;

    app.innerHTML = `
      <section class="detail-page">
        <div class="wrap">
          <a href="#/exhibition/${id}" class="back-link">← ${t(ex.title)}</a>
          <h1 class="detail-title">${label}</h1>
        </div>
        <div class="gallery-swipe-unit">
          <div class="grid grid-fullbleed">${itemsHtml}</div>
          <div class="wrap"><div class="bleed-pager">${pagerHtml(baseHash, curPage, totalPages)}</div></div>
        </div>
      </section>`;

    document.body.classList.add("gallery-page");
    const gallerySource = { type: "exhibition", exhibitionId: id, kind };
    if (kind === "works") {
      attachThumbHandlers(app, "exhibition", all, gallerySource);
    } else {
      app.querySelectorAll(".card[data-install]").forEach((card) => {
        const globalIdx = Number(card.dataset.install);
        card.addEventListener("click", () => {
          scrollElementToCenter(card);
          openInstallLightbox(globalIdx, all, gallerySource);
        });
      });
    }
    applyPendingLightboxSync();
    applyPendingKeyboardEdgeFocus();
    applyPendingGalleryEnterAnimation();
    applySavedGalleryColumns();
  }

  // ============================================================
  // 렌더: Works
  // ============================================================
  function renderWorksIndex() {
    const items = WORK_CATEGORIES.map((c) => catPreviewItem(`#/works/${c.id}`, t(c.title), c)).join("");
    app.innerHTML = `
      <section class="list-page">
        <div class="wrap">
          <p class="section-label">${ui("worksLabel")}</p>
          <ul class="cat-list cat-list-preview">${items}</ul>
        </div>
      </section>`;
  }

  function renderWorksCategory(rawSegments) {
    const { page, rest: segments } = extractPage(rawSegments);
    const { trail, node } = resolveTreePath(WORK_CATEGORIES, segments);
    if (!node) return renderNotFound();

    let innerBody = "";
    let bleedGrid = "";
    let pagerStr = "";

    if (node.children && node.children.length) {
      innerBody = `<ul class="cat-list cat-list-preview">${node.children.map((c) =>
        catPreviewItem(`#/works/${segments.concat(c.id).join("/")}`, t(c.title), c)
      ).join("")}</ul>`;
    } else {
      const all = node.works || [];
      const { pageItems, page: curPage, totalPages } = paginate(all, page, 30);
      const workOffset = (curPage - 1) * 30;
      if (pageItems.length) {
        const items = pageItems.map((wid, i) => thumbCard(wid, WORKS[wid], i, workOffset + i)).join("");
        bleedGrid = `<div class="grid grid-fullbleed">${items}</div>`;
        document.body.classList.add("gallery-page");
      } else {
        innerBody = `<p class='empty'>${ui("emptyWorks")}</p>`;
      }
      const baseHash = `#/works/${segments.join("/")}`;
      pagerStr = pagerHtml(baseHash, curPage, totalPages);
    }

    app.innerHTML = `
      <section class="list-page">
        <div class="wrap">
          ${breadcrumbHtml(trail.slice(0, -1), "works", ui("worksLabel"))}
          <h1 class="detail-title">${t(node.title)}</h1>
          ${innerBody}
        </div>
        ${bleedGrid ? `<div class="gallery-swipe-unit">${bleedGrid}${pagerStr ? `<div class="wrap"><div class="bleed-pager">${pagerStr}</div></div>` : ""}</div>` : ""}
      </section>`;

    attachThumbHandlers(app, "category", node.works || [], { type: "works", path: segments });
    applyPendingWorkFocus();
    applyPendingLightboxSync();
    applyPendingKeyboardEdgeFocus();
    applyPendingGalleryEnterAnimation();
    applySavedGalleryColumns();
  }

  // ============================================================
  // 렌더: Text
  // ============================================================
  function renderTextIndex() {
    const items = TEXT_CATEGORIES.map((c) => `
      <li class="cat-item"><a href="#/text/${c.id}">${t(c.title)}</a></li>`).join("");
    app.innerHTML = `
      <section class="list-page">
        <div class="wrap">
          <p class="section-label">${ui("textLabel")}</p>
          <ul class="cat-list">${items}</ul>
        </div>
      </section>`;
  }

  function renderTextCategory(rawSegments) {
    const { page, rest: segments } = extractPage(rawSegments);
    const { trail, node } = resolveTreePath(TEXT_CATEGORIES, segments);
    if (!node) return renderNotFound();

    let body;
    if (node.children && node.children.length) {
      body = `<ul class="cat-list">${node.children.map((c) => `
        <li class="cat-item"><a href="#/text/${segments.concat(c.id).join("/")}">${t(c.title)}</a></li>`).join("")}</ul>`;
    } else {
      const all = (node.posts || [])
        .slice()
        .sort((a, b) => (POSTS[b] && POSTS[b].date || "").localeCompare(POSTS[a] && POSTS[a].date || ""));
      const { pageItems, page: curPage, totalPages } = paginate(all, page, 10);
      const rows = pageItems.map((pid) => {
        const p = POSTS[pid];
        if (!p) return "";
        const author = renderInline(t(p.author));
        const meta = author ? `${p.date} · ${author}` : p.date;
        return `
          <li class="text-item">
            <a href="#/text/post/${pid}">
              <span class="text-item-title">${renderInline(t(p.title))}</span>
              <span class="text-item-excerpt">${renderInline(t(p.excerpt))}</span>
              <span class="text-item-meta">${meta}</span>
            </a>
          </li>`;
      }).join("");
      const baseHash = `#/text/${segments.join("/")}`;
      body = `<ul class="text-list">${rows || `<li class='empty'>${ui("emptyText")}</li>`}</ul>${pagerHtml(baseHash, curPage, totalPages)}`;
    }

    app.innerHTML = `
      <section class="list-page">
        <div class="wrap">
          ${breadcrumbHtml(trail.slice(0, -1), "text", ui("textLabel"))}
          <h1 class="detail-title">${t(node.title)}</h1>
          ${body}
        </div>
      </section>`;
  }

  function renderPost(postId) {
    const post = POSTS[postId];
    if (!post) return renderNotFound();

    const path = findLeafPath(TEXT_CATEGORIES, "posts", postId) || [];
    const { trail, node } = resolveTreePath(TEXT_CATEGORIES, path);

    // 같은 카테고리 안에서 이 글의 앞/뒤 글을 찾음 - 맨 아래 위/아래 이동 칸에 씀
    // 목록 페이지(renderTextCategory)와 똑같은 정렬 기준(날짜 내림차순)을 써야, 화면에
    // 보이는 순서랑 이전/다음 이동 순서가 일치함 - 정렬 안 된 원본 배열 순서를 쓰면
    // 화면상 순서랑 어긋나서 엉뚱한 글에서 다음/이전이 없는 것처럼 보임
    const siblingPosts = ((node && node.posts) || [])
      .slice()
      .sort((a, b) => (POSTS[b] && POSTS[b].date || "").localeCompare(POSTS[a] && POSTS[a].date || ""));
    const siblingIdx = siblingPosts.indexOf(postId);
    const prevPostId = siblingIdx > 0 ? siblingPosts[siblingIdx - 1] : null;
    const nextPostId = siblingIdx >= 0 && siblingIdx < siblingPosts.length - 1 ? siblingPosts[siblingIdx + 1] : null;

    const citingExhibitions = findExhibitionsCitingPost(postId);
    const exploreLinksHtml = citingExhibitions.length
      ? `<div class="post-explore-links">${citingExhibitions.map((ex) => `
          <a href="#/exhibition/${ex.id}">${ex.year} ${t(ex.title)}, ${t(ex.venue)}</a>`).join("")}</div>`
      : "";

    const rawBody = t(post.body);
    let bodyHighlightQuery = null;
    let footnoteHighlightOrder = null;
    if (pendingBodySearchHighlight && pendingBodySearchHighlight.postId === postId) {
      const loc = findSearchMatchLocation(rawBody, pendingBodySearchHighlight.query);
      if (loc && loc.footnoteOrder) footnoteHighlightOrder = loc.footnoteOrder;
      else if (loc && loc.inBody) bodyHighlightQuery = pendingBodySearchHighlight.query;
    }
    pendingBodySearchHighlight = null;

    // 위/아래 칸 HTML - 없는 쪽(맨 처음/맨 마지막 글)은 빈 칸으로 자리만 유지
    const siblingNavHtml = (siblingPosts.length > 1) ? `
      <nav class="post-sibling-nav">
        ${prevPostId ? `
          <a href="#/text/post/${prevPostId}" class="post-sibling-link post-sibling-prev">
            <span class="post-sibling-dir">${ui("postSiblingPrev")}</span>
            <span class="post-sibling-title">${renderInline(t(POSTS[prevPostId].title))}</span>
          </a>` : `<span class="post-sibling-link post-sibling-empty"></span>`}
        ${nextPostId ? `
          <a href="#/text/post/${nextPostId}" class="post-sibling-link post-sibling-next">
            <span class="post-sibling-dir">${ui("postSiblingNext")}</span>
            <span class="post-sibling-title">${renderInline(t(POSTS[nextPostId].title))}</span>
          </a>` : `<span class="post-sibling-link post-sibling-empty"></span>`}
      </nav>` : "";

    app.innerHTML = `
      <section class="detail-page">
        <div class="wrap narrow">
          ${breadcrumbHtml(trail, "text", ui("textLabel"))}
          ${exploreLinksHtml}
          <h1 class="post-title">${renderInline(t(post.title))}</h1>
          <p class="post-meta">${t(post.author) ? `${post.date} · ${renderInline(t(post.author))}` : post.date}</p>
          <div class="statement">${renderBodyWithFootnotes(rawBody, bodyHighlightQuery)}</div>
          ${siblingNavHtml}
        </div>
      </section>`;

    applyPendingPostFocus();
    applyPendingPostTitleHighlight();
    if (footnoteHighlightOrder) {
      const fnEl = app.querySelector(`#fn-${footnoteHighlightOrder}`);
      if (fnEl) { scrollElementToCenter(fnEl); flashHighlightEl(flashHighlightFootnoteTarget(fnEl), 1200); }
    } else if (bodyHighlightQuery) {
      const markEl = app.querySelector("#search-match");
      if (markEl) { scrollElementToCenter(markEl); flashHighlightEl(markEl, 1200); }
    }
  }

  // ============================================================
  // 검색
  // ============================================================
  function searchWorks(query) {
    const q = query.toLowerCase();
    const results = [];
    function walk(nodes, pathTitles, pathIds) {
      nodes.forEach((node) => {
        if (node.children) {
          walk(node.children, pathTitles.concat(t(node.title)), pathIds.concat(node.id));
        } else if (node.works) {
          const fullTitles = pathTitles.concat(t(node.title));
          const fullIds = pathIds.concat(node.id);
          node.works.forEach((wid) => {
            const w = WORKS[wid];
            if (!w) return;
            const title = t(w.title);
            const medium = t(w.medium);
            const note = t(w.note);
            const year = w.year || "";
            const size = w.size || "";
            const titleMatch = title.toLowerCase().includes(q);
            const fieldOrder = [["year", year], ["medium", medium], ["size", size], ["note", note]];
            let matched = null;
            for (const [key, val] of fieldOrder) {
              if (val && val.toLowerCase().includes(q)) { matched = { key, val }; break; }
            }
            if (titleMatch || matched) {
              results.push({
                id: wid, title, titleMatch, matched,
                pathTitles: fullTitles, categoryHref: `#/works/${fullIds.join("/")}`
              });
            }
          });
        }
      });
    }
    walk(WORK_CATEGORIES, [], []);
    return results;
  }

  function searchText(query) {
    const q = query.toLowerCase();
    const results = [];
    function walk(nodes, pathTitles) {
      nodes.forEach((node) => {
        if (node.children) {
          walk(node.children, pathTitles.concat(t(node.title)));
        } else if (node.posts) {
          const fullTitles = pathTitles.concat(t(node.title));
          node.posts.forEach((pid) => {
            const p = POSTS[pid];
            if (!p) return;
            const title = stripFormatting(t(p.title));
            const author = stripFormatting(t(p.author));
            const date = p.date || "";
            const excerpt = stripFormatting(t(p.excerpt));
            const body = stripFormatting(t(p.body));
            const titleMatch = title.toLowerCase().includes(q);
            const fieldOrder = [["author", author], ["date", date], ["excerpt", excerpt], ["body", body]];
            let matched = null;
            for (const [key, val] of fieldOrder) {
              if (val && val.toLowerCase().includes(q)) { matched = { key, val }; break; }
            }
            if (titleMatch || matched) {
              results.push({ id: pid, title, titleMatch, matched, pathTitles: fullTitles });
            }
          });
        }
      });
    }
    walk(TEXT_CATEGORIES, []);
    return results;
  }

  function searchExhibitions(query) {
    const q = query.toLowerCase();
    const results = [];
    EXHIBITIONS.forEach((ex) => {
      const title = t(ex.title);
      const venue = t(ex.venue);
      const year = ex.year || "";
      const yearMatch = year.toLowerCase().includes(q);
      const venueMatch = venue.toLowerCase().includes(q);
      const titleMatch = title.toLowerCase().includes(q);
      if (yearMatch || venueMatch || titleMatch) {
        results.push({ id: ex.id, year, venue, title, yearMatch, venueMatch, titleMatch });
      }
    });
    return results;
  }

  function chainHtml(parts) {
    return parts.filter((p) => p).join('<span class="search-sep"> &gt; </span>');
  }

  function renderWorkResultRow(r, query) {
    const parts = r.pathTitles.map((p) => escapeHtml(p));
    parts.push(`<span class="search-leaf">${r.titleMatch ? highlight(r.title, query) : escapeHtml(r.title)}</span>`);
    if (r.matched) {
      parts.push(r.matched.key === "note" ? snippet(r.matched.val, query) : highlight(r.matched.val, query));
    }
    const w = WORKS[r.id];
    const thumbSrc = w && (w.thumb || w.image);
    const thumbHtml = thumbSrc
      ? `<span class="search-thumb"><img src="${thumbSrc}" alt="${escapeHtml(r.title)}" loading="lazy" /></span>`
      : `<span class="search-thumb search-thumb-empty"></span>`;
    return `
      <li class="search-item search-item-work">
        <a href="${workGalleryHref(r.id)}" class="search-work-link" data-work-id="${escapeHtml(r.id)}">
          <span class="search-path">${chainHtml(parts)}</span>
          ${thumbHtml}
        </a>
      </li>`;
  }

  function renderTextResultRow(r, query) {
    const parts = r.pathTitles.map((p) => escapeHtml(p));
    parts.push(`<span class="search-leaf">${r.titleMatch ? highlight(r.title, query) : escapeHtml(r.title)}</span>`);
    if (r.matched) {
      parts.push(r.matched.key === "body" ? snippet(r.matched.val, query) : highlight(r.matched.val, query));
    }
    const matchKey = r.matched ? r.matched.key : (r.titleMatch ? "title" : "");
    return `
      <li class="search-item">
        <a href="#/text/post/${r.id}" class="search-post-link" data-post-id="${escapeHtml(r.id)}" data-match-key="${matchKey}" data-query="${escapeHtml(query)}">
          <span class="search-path">${chainHtml(parts)}</span>
        </a>
      </li>`;
  }

  function renderExResultRow(r, query) {
    const yearHtml = r.yearMatch ? highlight(r.year, query) : escapeHtml(r.year);
    const venueHtml = r.venueMatch ? highlight(r.venue, query) : escapeHtml(r.venue);
    const titleHtml = `<span class="search-leaf">${r.titleMatch ? highlight(r.title, query) : escapeHtml(r.title)}</span>`;
    return `
      <li class="search-item">
        <a href="#/exhibition/${r.id}" class="search-ex-link">
          <span class="search-path">${chainHtml([yearHtml, venueHtml, titleHtml])}</span>
        </a>
      </li>`;
  }

  function searchFormHtml(query) {
    const val = query || getSearchDraft();
    return `
      <div class="search-page-form">
        <form id="search-form" class="search-form" autocomplete="off">
          <input type="text" id="search-input" class="search-input" autocomplete="off" spellcheck="false" placeholder="${ui("searchPlaceholder")}" value="${escapeHtml(val)}" />
          <button type="submit" class="search-submit">${ui("searchButton")}</button>
        </form>
        <div class="recent-searches recent-searches-inline" id="page-recent-searches"></div>
      </div>`;
  }

  function attachSearchForm() {
    const form = document.getElementById("search-form");
    if (!form) return;
    const input = document.getElementById("search-input");
    const recentEl = document.getElementById("page-recent-searches");

    input.addEventListener("input", () => {
      setSearchDraft(input.value);
      resetRecentCursor();
      if (recentEl.classList.contains("open")) renderRecentSearches(recentEl, input.value);
    });

    input.addEventListener("focus", () => {
      resetRecentCursor();
      renderRecentSearches(recentEl, input.value);
      recentEl.classList.add("open");
    });
    input.addEventListener("blur", () => {
      setTimeout(() => {
        if (document.activeElement !== input && !recentEl.contains(document.activeElement)) {
          recentEl.classList.remove("open");
        }
      }, 150);
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const val = input.value.trim();
      if (!val) return;
      setSearchDraft("");
      recentEl.classList.remove("open");
      location.hash = `#/search/${encodeURIComponent(val)}`;
    });
  }

  function renderSearch(query, page, filterType) {
    if (!query) {
      app.innerHTML = `
        <section class="list-page">
          <div class="wrap narrow">
            <p class="section-label">Search</p>
            ${searchFormHtml("")}
            <p class="empty">${ui("searchEmpty")}</p>
          </div>
        </section>`;
      attachSearchForm();
      return;
    }

    addRecentSearch(query);

    const workResults = searchWorks(query);
    const textResults = searchText(query);
    const exResults = searchExhibitions(query);
    const total = workResults.length + textResults.length + exResults.length;
    const baseHash = `#/search/${encodeURIComponent(query)}`;

    if (total === 0) {
      app.innerHTML = `
        <section class="list-page">
          <div class="wrap narrow">
            <p class="section-label">Search</p>
            ${searchFormHtml(query)}
            <p class="empty">${ui("searchNone")(query)}</p>
          </div>
        </section>`;
      attachSearchForm();
      return;
    }

    const typeMap = {
      works: { results: workResults, render: renderWorkResultRow, label: ui("sectionWorks") },
      text: { results: textResults, render: renderTextResultRow, label: ui("sectionText") },
      exhibition: { results: exResults, render: renderExResultRow, label: ui("sectionExhibition") }
    };

    // 특정 타입만 펼쳐서 보는 화면 (다른 타입은 숨김, 자체 페이지네이션)
    if (filterType && typeMap[filterType]) {
      const { results, render, label } = typeMap[filterType];
      const perPage = filterType === "works" ? 20 : 30;
      const { pageItems, page: curPage, totalPages } = paginate(results, page, perPage);
      const rows = pageItems.map((r) => render(r, query)).join("");
      app.innerHTML = `
        <section class="list-page">
          <div class="wrap narrow">
            <p class="section-label">Search</p>
            ${searchFormHtml(query)}
            <a href="${baseHash}" class="back-link">${ui("backToAll")}</a>
            <h2 class="subhead">${label} (${results.length})</h2>
            <ul class="search-list">${rows}</ul>
            ${pagerHtml(`${baseHash}/${filterType}`, curPage, totalPages)}
          </div>
        </section>`;
      attachSearchForm();
      return;
    }

    // 결과가 있는 타입이 몇 개인지에 따라 분기
    const activeTypes = ["works", "text", "exhibition"].filter((key) => typeMap[key].results.length > 0);

    let sections;
    if (activeTypes.length <= 1) {
      // 결과 있는 타입이 하나뿐이면 컷 없이 전부 보여줌 (많으면 페이지네이션)
      sections = activeTypes.map((key) => {
        const { results, render, label } = typeMap[key];
        const { pageItems, page: curPage, totalPages } = paginate(results, page, 50);
        const rows = pageItems.map((r) => render(r, query)).join("");
        return `<h2 class="subhead">${label} (${results.length})</h2><ul class="search-list">${rows}</ul>${pagerHtml(`${baseHash}/${key}`, curPage, totalPages)}`;
      }).join("");
    } else {
      // 결과 있는 타입이 2개 이상이면 3개 컷 + 더보기
      sections = activeTypes.map((key) => {
        const { results, render, label } = typeMap[key];
        const rows = results.slice(0, 3).map((r) => render(r, query)).join("");
        const more = results.length > 3
          ? `<a href="${baseHash}/${key}" class="search-more">${ui("more")}</a>`
          : "";
        return `<h2 class="subhead">${label} (${results.length})</h2><ul class="search-list">${rows}</ul>${more}`;
      }).join("");
    }

    app.innerHTML = `
      <section class="list-page">
        <div class="wrap narrow">
          <p class="section-label">Search</p>
          ${searchFormHtml(query)}
          <p class="search-summary">${ui("searchResultsFor")(query, total)}</p>
          ${sections}
        </div>
      </section>`;
    attachSearchForm();
  }

  // ============================================================
  // 렌더: 최근 검색어 전체보기
  // ============================================================
  function renderRecentSearchesPage() {
    app.innerHTML = `
      <section class="list-page">
        <div class="wrap narrow">
          <p class="section-label">${ui("recentSearches")}</p>
          ${searchFormHtml("")}
          <div class="recent-page-actions">
            <button type="button" id="recent-clear-all">${ui("clearRecent")}</button>
          </div>
          <div id="recent-full-wrap"></div>
        </div>
      </section>`;
    attachSearchForm();

    function refresh() {
      const list = getRecentSearches();
      const wrap = document.getElementById("recent-full-wrap");
      if (!list.length) {
        wrap.innerHTML = `<p class="empty">${ui("recentSearchesEmpty")}</p>`;
        return;
      }
      wrap.innerHTML = `<ul class="recent-list recent-list-full">${list.map(({ q }) => `
        <li class="recent-item recent-item-full">
          <a href="#/search/${encodeURIComponent(q)}" class="recent-item-link">${escapeHtml(q)}</a>
          <button type="button" class="recent-item-remove" data-q="${escapeHtml(q)}" aria-label="remove">✕</button>
        </li>`).join("")}</ul>`;
      wrap.querySelectorAll(".recent-item-remove").forEach((btn) => {
        btn.addEventListener("click", (e) => {
          e.preventDefault();
          removeRecentSearch(btn.dataset.q);
          refresh();
        });
      });
    }
    refresh();

    document.getElementById("recent-clear-all").addEventListener("click", () => {
      clearRecentSearches();
      refresh();
    });
  }

  // ============================================================
  // 렌더: Contact / Not found
  // ============================================================
  function renderContact() {
    const rows = CONTACT.map((c, i) => {
      if (c.type === "copy") {
        return `<li><button type="button" class="contact-copy" data-copy="${escapeHtml(c.copyValue)}">${escapeHtml(c.label)}${c.value && c.value !== c.label ? `: ${escapeHtml(c.value)}` : ""}</button></li>`;
      }
      const external = !/^(mailto:|tel:)/.test(c.href || "");
      const attrs = external ? ' target="_blank" rel="noopener"' : "";
      return `<li><a href="${c.href}"${attrs}>${escapeHtml(c.label)}${c.value && c.value !== c.label ? `: ${escapeHtml(c.value)}` : ""}</a></li>`;
    }).join("");

    app.innerHTML = `
      <section class="list-page">
        <div class="wrap narrow">
          <p class="section-label">${ui("contactLabel")}</p>
          <ul class="contact-list">${rows}</ul>
        </div>
      </section>`;

    app.querySelectorAll(".contact-copy").forEach((btn) => {
      btn.addEventListener("click", async () => {
        await copyText(btn.dataset.copy);
        // 폰은 클립보드 복사 시 시스템이 자체적으로 알림을 띄워주므로, 중복되지 않게 컴퓨터에서만 토스트 표시
        if (!isTouchDevice()) showToast(ui("copied"));
      });
    });
  }

  function isTouchDevice() {
    return window.matchMedia("(pointer: coarse)").matches;
  }

  async function copyText(text) {
    try {
      await navigator.clipboard.writeText(text);
    } catch (e) {
      // 클립보드 API 사용 불가 시 폴백
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
  }

  let toastTimer = null;
  function showToast(message) {
    let toast = document.getElementById("toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "toast";
      toast.className = "toast";
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add("open");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("open"), 2000);
  }

  // ============================================================
  // 본문 중 작품 언급 링크 - 호버 후 0.4초 있다가 작은 썸네일 미리보기
  // (바로 뜨면 마우스 지나갈 때마다 번쩍거려서 성가시니 딜레이를 줌)
  // ============================================================
  let workPreviewEl = null;
  let workPreviewTimer = null;

  function getWorkPreviewEl() {
    if (workPreviewEl) return workPreviewEl;
    workPreviewEl = document.createElement("div");
    workPreviewEl.className = "work-preview";
    workPreviewEl.innerHTML = `<img alt="" />`;
    document.body.appendChild(workPreviewEl);
    return workPreviewEl;
  }

  function hideWorkPreview() {
    clearTimeout(workPreviewTimer);
    if (workPreviewEl) workPreviewEl.classList.remove("open");
  }

  document.addEventListener("mouseover", (e) => {
    const link = e.target.closest(".work-mention");
    if (!link) return;
    clearTimeout(workPreviewTimer);
    const cursorX = e.clientX;
    const cursorY = e.clientY;
    workPreviewTimer = setTimeout(() => {
      const src = link.dataset.previewSrc;
      if (!src) return;
      const popup = getWorkPreviewEl();
      popup.querySelector("img").src = src;

      // 마우스 커서 위치 기준으로 뜨게, 화면 밖으로 안 나가게 보정
      const maxLeft = window.innerWidth - 236;
      popup.style.left = `${Math.max(8, Math.min(maxLeft, cursorX + 12))}px`;
      // 기본은 커서 위쪽에 뜨게(단어 등장 다음에 서술이 이어지는 일반적인 흐름과 맞게) -
      // 위쪽 공간이 부족할 때만 아래쪽에 뜨도록(bottom/top 기준으로 앵커하면 실제 이미지
      // 높이를 몰라도 항상 화면 안에 들어옴)
      if (cursorY < 260) {
        popup.style.bottom = "";
        popup.style.top = `${cursorY + 16}px`;
      } else {
        popup.style.top = "";
        popup.style.bottom = `${window.innerHeight - cursorY + 16}px`;
      }
      popup.classList.add("open");
    }, 400);
  });

  document.addEventListener("mouseout", (e) => {
    const link = e.target.closest(".work-mention");
    if (!link) return;
    hideWorkPreview();
  });

  document.addEventListener("click", (e) => {
    const mention = e.target.closest(".work-mention");
    if (mention) {
      hideWorkPreview();
      if (mention.dataset.workId) armWorkFocus(mention.dataset.workId, true);
      return;
    }
    const searchWorkLink = e.target.closest(".search-work-link");
    if (searchWorkLink && searchWorkLink.dataset.workId) {
      armWorkFocus(searchWorkLink.dataset.workId, false, true);
      return;
    }
    const searchPostLink = e.target.closest(".search-post-link");
    if (searchPostLink) {
      if (searchPostLink.dataset.matchKey === "body" && searchPostLink.dataset.query) {
        armBodySearchHighlight(searchPostLink.dataset.postId, searchPostLink.dataset.query);
      }
      return;
    }

    // 각주 이동(본문↔각주 목록) - 라우터가 모든 #을 경로로 취급하므로 location.hash를 안 건드리고
    // 순수하게 스크롤만 함(실제 href 링크를 쓰면 404로 튐)
    const jumpEl = e.target.closest(".footnote-jump");
    if (jumpEl && jumpEl.dataset.jumpTo) {
      const target = document.getElementById(jumpEl.dataset.jumpTo);
      if (target) { scrollElementToCenter(target, true); flashHighlightEl(flashHighlightFootnoteTarget(target), 1200); }
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key !== "Enter" && e.key !== " ") return;
    const jumpEl = document.activeElement && document.activeElement.closest && document.activeElement.closest(".footnote-jump");
    if (jumpEl && jumpEl.dataset.jumpTo) {
      e.preventDefault();
      const target = document.getElementById(jumpEl.dataset.jumpTo);
      if (target) { scrollElementToCenter(target, true); flashHighlightEl(flashHighlightFootnoteTarget(target), 1200); }
    }
  });
  window.addEventListener("hashchange", hideWorkPreview);

  function renderNotFound() {
    app.innerHTML = `
      <section class="list-page">
        <div class="wrap">
          <p class="section-label">404</p>
          <p>${ui("notFound")} <a href="#/">${ui("backHome")}</a></p>
        </div>
      </section>`;
  }

  // ============================================================
  // 라이트박스 (줌/팬 + 문맥별 링크)
  // ============================================================
  const lightbox = document.getElementById("lightbox");
  const lbInner = document.getElementById("lb-inner");
  const lbImageWrap = document.getElementById("lb-image-wrap");
  const lbImage = document.getElementById("lb-image");
  const lbInfo = document.getElementById("lb-info");
  const lbCaptionLine = document.getElementById("lb-caption-line");

  // 캡션을 드래그로 선택해서 복사할 때, 굵게/기울임 등 서식 없이 순수 텍스트만 복사되도록
  lbCaptionLine.addEventListener("copy", (e) => {
    const selection = window.getSelection();
    if (!selection) return;
    e.clipboardData.setData("text/plain", selection.toString());
    e.preventDefault();
  });
  const lbNote = document.getElementById("lb-note");
  const lbLinks = document.getElementById("lb-links");
  const lbLinksTop = document.getElementById("lb-links-top");
  const lbClose = document.getElementById("lb-close");

  // 이미지 "프레임" 상태: fitWidth/fitHeight = 확대 안 된 기본 크기, scale = 배율,
  // imgWidth/imgHeight = 실제 렌더 크기, imgLeft/imgTop = 화면상 좌상단 좌표
  let fitWidth = 0, fitHeight = 0, scale = 1;
  let imgWidth = 0, imgHeight = 0, imgLeft = 0, imgTop = 0;
  let isDragging = false, dragMoved = false, dragStart = { x: 0, y: 0 };

  function computeFitSize(nw, nh) {
    nw = nw || lbImage.naturalWidth || 1200;
    nh = nh || lbImage.naturalHeight || 800;
    const maxW = window.innerWidth * 0.88;
    const maxH = window.innerHeight * 0.86;
    let w = maxW, h = (w * nh) / nw;
    if (h > maxH) { h = maxH; w = (h * nw) / nh; }
    return { w, h };
  }

  function applyImageBox() {
    lbImage.style.width = `${imgWidth}px`;
    lbImage.style.height = `${imgHeight}px`;
    lbImage.style.left = `${imgLeft}px`;
    lbImage.style.top = `${imgTop}px`;
  }

  function updateZoomState() {
    lightbox.classList.toggle("zoomed", scale > 1);
  }

  function initImageBox() {
    const { w, h } = computeFitSize();
    fitWidth = w; fitHeight = h; scale = 1;
    imgWidth = w; imgHeight = h;
    imgLeft = (window.innerWidth - w) / 2;
    imgTop = (window.innerHeight - h) / 2;
    lbImage.style.transition = "none";
    lbImage.style.transform = "";
    lbImage.style.opacity = "1";
    lbImagePeekNext.style.transition = "none";
    lbImagePeekNext.style.transform = "";
    lbImagePeekNext.style.display = "none";
    lbImagePeekPrev.style.transition = "none";
    lbImagePeekPrev.style.transform = "";
    lbImagePeekPrev.style.display = "none";
    lbImagePeekNext2.style.display = "none";
    inExtraPeekMode = false; // abcd 모드 종료
    lbImagePeekPrev2.style.display = "none";
    applyImageBox();
    updateZoomState();
  }

  function resetZoom() {
    if (lbImage.style.display === "none") return;
    // 이미지가 아직 로딩 전이면 여기선 아무 것도 안 함 - 그 경우는 항상 openLightboxRaw가
    // 자체적으로 새 이미지의 배치/줌 초기화까지 다 처리하므로 별도 처리 불필요
    if (lbImage.complete && lbImage.naturalWidth) initImageBox();
  }

  // (이미지 로딩 후 배치/보여주기는 이제 openLightboxRaw 안에서, 그 호출 전용 번호표로
  //  자체 완결됨 - 여기 있던 전역 load 리스너는 여러 이미지가 겹쳐 넘어갈 때 번호표가
  //  엉뚱한 이벤트에 소비되는 경합이 있어서 제거함)

  // 창 크기가 바뀌면(회전, 실제 창 크기 변경 등) 확대 상태를 초기화하고 가운데로 재배치
  // - 화면 밖으로 이미지가 나가버리는 것 방지.
  // 단, 모바일에서 스크롤/드래그할 때 주소창이 접혔다 펴지면서 세로 높이만 살짝 바뀌는
  // 것도 resize 이벤트로 잡히는데, 그때마다 초기화되면 확대한 채로 손가락으로 이동하다가
  // 갑자기 줌이 풀려버림 - 그래서 "폭"이 실제로 바뀐 경우에만(회전/진짜 리사이즈) 초기화함
  let lastKnownInnerWidth = window.innerWidth;
  window.addEventListener("resize", () => {
    if (window.innerWidth === lastKnownInnerWidth) return; // 세로 높이만 바뀐 경우(주소창 등) 무시
    lastKnownInnerWidth = window.innerWidth;
    if (lightbox.classList.contains("open")) initImageBox();
  });

  // 마우스가 이미지 밖에 있어도(화면 안이기만 하면) 휠 줌 동작 - 가장 가까운 이미지 경계 좌표를 기준으로 확대
  lightbox.addEventListener("wheel", (e) => {
    if (lbImage.style.display === "none" || !fitWidth) return;
    e.preventDefault();

    const ox = Math.min(Math.max(e.clientX, imgLeft), imgLeft + imgWidth);
    const oy = Math.min(Math.max(e.clientY, imgTop), imgTop + imgHeight);
    const fx = (ox - imgLeft) / imgWidth;
    const fy = (oy - imgTop) / imgHeight;

    const delta = e.deltaY < 0 ? 0.25 : -0.25;
    const newScale = Math.min(6, Math.max(1, scale + delta));
    if (newScale === scale) return;

    const newWidth = fitWidth * newScale;
    const newHeight = fitHeight * newScale;
    imgLeft = ox - fx * newWidth;
    imgTop = oy - fy * newHeight;
    imgWidth = newWidth;
    imgHeight = newHeight;
    scale = newScale;

    if (scale <= 1) {
      // 기본 크기로 돌아올 땐 가운데로 재정렬
      imgLeft = (window.innerWidth - fitWidth) / 2;
      imgTop = (window.innerHeight - fitHeight) / 2;
    }

    applyImageBox();
    updateZoomState();
  }, { passive: false });

  // 클릭(드래그 아님)하면 확대/축소 토글 - 클릭한 지점을 기준으로 확대
  const CLICK_ZOOM_SCALE = 2.2;

  lbImage.addEventListener("mousedown", (e) => {
    e.preventDefault();
    isDragging = true;
    dragMoved = false;
    dragStart = { x: e.clientX - imgLeft, y: e.clientY - imgTop };
  });

  window.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    const nx = e.clientX - dragStart.x;
    const ny = e.clientY - dragStart.y;
    if (Math.abs(nx - imgLeft) > 3 || Math.abs(ny - imgTop) > 3) dragMoved = true;
    if (scale > 1) {
      imgLeft = nx;
      imgTop = ny;
      applyImageBox();
      lightbox.classList.add("dragging");
    }
  });

  window.addEventListener("mouseup", () => {
    isDragging = false;
    lightbox.classList.remove("dragging");
  });

  lbImage.addEventListener("click", (e) => {
    if (dragMoved) { dragMoved = false; return; }
    if (touchWasSwipe) { touchWasSwipe = false; return; } // 스와이프 직후 합성된 클릭이면 무시
    if (!fitWidth) return;

    if (scale > 1) {
      // 확대된 상태 - 클릭하면 원래 크기로
      scale = 1;
      imgWidth = fitWidth; imgHeight = fitHeight;
      imgLeft = (window.innerWidth - fitWidth) / 2;
      imgTop = (window.innerHeight - fitHeight) / 2;
    } else {
      // 클릭한 지점을 기준으로 확대
      const fx = (e.clientX - imgLeft) / imgWidth;
      const fy = (e.clientY - imgTop) / imgHeight;
      scale = CLICK_ZOOM_SCALE;
      const newWidth = fitWidth * scale;
      const newHeight = fitHeight * scale;
      imgLeft = e.clientX - fx * newWidth;
      imgTop = e.clientY - fy * newHeight;
      imgWidth = newWidth;
      imgHeight = newHeight;
    }
    applyImageBox();
    updateZoomState();
  });

  // 화면 밖으로 완전히 벗어나지 않도록 이미지 위치를 보정
  function clampImagePosition() {
    if (imgWidth > window.innerWidth) {
      imgLeft = Math.min(0, Math.max(window.innerWidth - imgWidth, imgLeft));
    } else {
      imgLeft = (window.innerWidth - imgWidth) / 2;
    }
    if (imgHeight > window.innerHeight) {
      imgTop = Math.min(0, Math.max(window.innerHeight - imgHeight, imgTop));
    } else {
      imgTop = (window.innerHeight - imgHeight) / 2;
    }
  }

  function touchDistance(a, b) {
    const dx = a.clientX - b.clientX;
    const dy = a.clientY - b.clientY;
    return Math.sqrt(dx * dx + dy * dy);
  }

  const lbImagePeekPrev2 = document.getElementById("lb-image-peek-prev2");
  const lbImagePeekPrev = document.getElementById("lb-image-peek-prev");
  const lbImagePeekNext = document.getElementById("lb-image-peek-next");
  const lbImagePeekNext2 = document.getElementById("lb-image-peek-next2");

  // 대표 이미지 + subImages(부속 이미지 다발)를 하나의 목록으로 - subImages가 없으면
  // 대표 이미지 하나짜리 목록
  // 대표 이미지 + subImages(부속 이미지 다발)를 {image, thumb} 객체 배열로 반환.
  // subImages의 각 항목은 문자열("경로")로 쓰거나 {image, thumb} 객체로 써도 둘 다 지원됨
  function getWorkSubImages(workId) {
    const w = WORKS[workId];
    if (!w) return [];
    const normalize = (s) => (typeof s === "string" ? { image: s, thumb: null } : { image: s.image, thumb: s.thumb || null });
    return [{ image: w.image, thumb: w.thumb || null }, ...(w.subImages || []).map(normalize)];
  }

  function getItemImageEntry(item, subIndex) {
    if (!item) return { src: "", thumb: null };
    if (item.kind === "work") {
      const subs = getWorkSubImages(item.id);
      const entry = subs[subIndex || 0] || subs[0];
      return entry ? { src: entry.image, thumb: entry.thumb } : { src: "", thumb: null };
    }
    return { src: item.image || "", thumb: item.thumb || null };
  }

  function getItemImageSrc(item, subIndex) {
    return getItemImageEntry(item, subIndex).src;
  }

  // 스와이프 미리보기(peek) 이미지 전용 - next/prev 각각 독립적인 번호표로 관리해서,
  // 빠르게 여러 번 스와이프해도 오래된 배경 로딩이 나중에 엉뚱하게 덮어쓰지 않도록 함
  const peekLoadTokens = { next: 0, prev: 0, next2: 0, prev2: 0 };
  let inExtraPeekMode = false; // 스와이프 도중 잡아서 abcd 4장 구성이 된 상태인지 - 이 동안은 어느 것도 원본으로 안 바꾸고 thumb로만 유지함

  function setPeekImageSrc(el, key, src, thumb, dimsKnown, offset) {
    const myToken = ++peekLoadTokens[key];
    if (!src) {
      el.removeAttribute("src");
      el.classList.add("lb-image-placeholder");
      el.style.opacity = "1";
      return;
    }
    const initialSrc = (thumb && thumb !== src) ? thumb : src;
    // 새 이미지를 지정하기 직전에 무조건 한 번 비워둠(src 제거) - 안 그러면 새 이미지가
    // 다 로딩되기 전까지 브라우저가 "이전에 떠있던 이미지"를 그대로 붙잡고 계속 보여줌
    // (특히 조각 등 서브이미지처럼 thumb이 따로 없어서 원본을 바로 불러와야 하는 경우,
    // 로딩이 오래 걸려서 이 문제가 두드러짐) - 대신 로딩되는 동안 잠깐 비어 보이는 게
    // "엉뚱한 이전 이미지가 계속 보이는 것"보다 나음
    el.removeAttribute("src");
    el.classList.remove("lb-image-placeholder");

    if (dimsKnown) {
      // 캐시로 이미 정확한 크기를 알고 있음(대부분의 경우) - 크기는 호출하는 쪽에서
      // 이미 확정해뒀으므로 decode() 대기 없이 바로 보여줌. (급한 드래그/빠른 스와이프에서는
      // decode()가 끝나기 전에 커밋 애니메이션이 먼저 시작될 수 있어서, 매번 "숨겼다
      // 보여주기"를 걸면 오히려 늦게 팝업되는 것처럼 보일 수 있음)
      el.style.opacity = "1";
      el.src = initialSrc;
    } else {
      // 처음 보는 이미지라 크기를 몰라서 임시로 현재 이미지 크기를 빌려쓴 상태 - 진짜
      // 크기가 아닐 수 있으므로, 실제로 로드/디코딩된 뒤 진짜 치수로 다시 맞추고 나서 보여줌
      el.style.opacity = "0";
      el.src = initialSrc;
      const waitReady = el.decode
        ? el.decode()
        : new Promise((resolve) => { el.addEventListener("load", resolve, { once: true }); });
      waitReady.then(() => {
        if (peekLoadTokens[key] !== myToken) return; // 그 사이 새로 스와이프 시작됨 - 무시
        const fit = computeFitSize(el.naturalWidth, el.naturalHeight);
        el.style.width = `${fit.w}px`;
        el.style.height = `${fit.h}px`;
        el.style.top = `${(window.innerHeight - fit.h) / 2}px`;
        el.style.left = `${imgLeft + offset}px`;
        el.style.opacity = "1";
      }).catch(() => {
        if (peekLoadTokens[key] !== myToken) return;
        el.style.opacity = "1"; // 실패해도 최소한 안 보이는 채로 남지는 않게
      });
    }

    // peek(스와이프 중 양옆에 나타나는 미리보기)는 언제나 thumb만 보여주고, 드래그 도중
    // 원본으로 바꾸지 않음 - 메인 이미지로 승격된 뒤에야(기존 openLightboxRaw의
    // thumb->원본 전환 로직을 통해) 원본으로 자연스럽게 바뀜
  }

  // 지금 보고 있는 작품(work) 기준으로, 좌/우 한 스텝 이동했을 때의 결과를 계산함
  //  - { type: "sub", subIndex } : 같은 작품의 부속 이미지로 이동(그리드는 안 넘어감)
  //  - { type: "cross" } : 부속 이미지를 다 봤으니(혹은 애초에 없으니) 다음/이전 그리드
  //                        작품으로 넘어가야 함 - 기존 로직 그대로 처리
  function resolveSubStep(direction) {
    const item = lightboxItems[lightboxIndex];
    if (!item || item.kind !== "work") return { type: "cross" };
    const subs = getWorkSubImages(item.id);
    if (subs.length <= 1) return { type: "cross" };
    const nextSub = lightboxSubIndex + direction;
    if (nextSub < 0 || nextSub >= subs.length) return { type: "cross" };
    return { type: "sub", subIndex: nextSub };
  }

  // 다음/이전 그림의 실제 크기(가로세로 비율)를 미리 알아둬서, 스와이프 미리보기가
  // 처음부터 올바른 비율로 뜨게 함 (그렇지 않으면 확정 후 "작았다가 커지는" 것처럼 보임)
  const imageDimsCache = new Map();

  function preloadDims(src) {
    if (!src || imageDimsCache.has(src)) return;
    const probe = new Image();
    probe.onload = () => imageDimsCache.set(src, { w: probe.naturalWidth, h: probe.naturalHeight });
    probe.src = src;
  }

  function preloadNeighborDims() {
    if (lightboxItems.length < 2 && !(lightboxItems[lightboxIndex] && lightboxItems[lightboxIndex].kind === "work")) return;
    const nextStep = resolveSubStep(1);
    const prevStep = resolveSubStep(-1);
    if (nextStep.type === "sub") {
      preloadDims(getItemImageSrc(lightboxItems[lightboxIndex], nextStep.subIndex));
    } else if (lightboxItems.length > 1) {
      const nextIdx = (lightboxIndex + 1) % lightboxItems.length;
      preloadDims(getItemImageSrc(lightboxItems[nextIdx]));
      // 한 칸 더(두 칸째)도 미리 캐싱해둠 - 스와이프 중간에 잡아서 포커스가 한 칸
      // 넘어간 상태가 될 수 있는데, 그 너머 그림도 이미 캐싱돼있어야 바로 보임
      if (lightboxItems.length > 2) {
        const next2Idx = (lightboxIndex + 2) % lightboxItems.length;
        preloadDims(getItemImageSrc(lightboxItems[next2Idx]));
      }
    }
    if (prevStep.type === "sub") {
      preloadDims(getItemImageSrc(lightboxItems[lightboxIndex], prevStep.subIndex));
    } else if (lightboxItems.length > 1) {
      const prevIdx = (lightboxIndex - 1 + lightboxItems.length) % lightboxItems.length;
      preloadDims(getItemImageSrc(lightboxItems[prevIdx]));
      if (lightboxItems.length > 2) {
        const prev2Idx = (lightboxIndex - 2 + lightboxItems.length) % lightboxItems.length;
        preloadDims(getItemImageSrc(lightboxItems[prev2Idx]));
      }
    }
  }

  // 확대 안 된 상태 - 좌우로 스와이프하면 손가락을 따라 실시간으로 그림이 움직이고,
  // 양쪽(다음/이전)에 미리 그림을 대기시켜둬서 방향을 바꾸든 그대로 밀든 항상 그림이 있음.
  // 충분히 밀면 그대로 전환, 아니면 원래 짝끼리 같이 제자리로 복귀
  // 확대된 상태 - 한 손가락 드래그로 팬(화면 밖으로는 못 나가게 클램프)
  // 두 손가락 - 핀치로 확대/축소(마우스 휠과 동일한 방식, 프레임 자체가 커짐)
  // 리스너는 이미지 자체가 아니라 lb-image-wrap 전체(라이트박스 전체 영역)에 걸어서
  // 이미지 주변 여백에서 시작해도 동작함 (캡션 영역은 z-index가 더 높아 자연히 보호됨)
  let touchStartX = 0, touchStartY = 0, touchStartTime = 0, touchActive = false, touchSwiping = false;
  let swipeTouchId = null; // 스와이프 중인 손가락의 식별자 - 도중에 다른 손가락이 실수로 닿았다 떨어져도 헷갈리지 않도록
  let touchWasSwipe = false; // 스와이프 직후 브라우저가 합성해서 발생시킬 수 있는 click(확대 토글)을 무시하기 위한 표시
  let touchPanStartLeft = 0, touchPanStartTop = 0;
  let pinchStartDist = null, pinchStartScale = 1;
  let pinchMidX = 0, pinchMidY = 0;
  let pendingSwipeCommit = null; // { timer, run }
  let pinchWentBelowFit = false;
  let captionHidden = false; // 라이트박스를 끄거나 그림을 넘겨도 초기화되지 않는 전역 상태

  function setCaptionHidden(hidden) {
    captionHidden = hidden;
    lbInfo.classList.toggle("lb-info-hidden", captionHidden);
    // 천장 쪽 전시 목록(.lb-links-top)은 .lb-info 바깥의 별도 요소라 같이 안 숨겨지고
    // 있었음 - 다만 여기는 pointer-events:none을 쓰면 안 됨: 그 영역을 탭했을 때 터치가
    // 그대로 통과해서 바로 아래 배경(탭하면 라이트박스가 닫히는 영역)에 닿아버릴 수 있음.
    // 그래서 투명하게만(opacity) 만들고, 터치 자체는 이 영역이 계속 흡수하게 둔 채,
    // 링크가 실제로 눌려도 아무 반응 없도록 클릭 핸들러 쪽에서 따로 막음(아래 참고)
    lbLinksTop.style.opacity = captionHidden ? "0" : "";
  }
  let nextGap = 0, prevGap = 0;
  let nextFullSrc = "", prevFullSrc = ""; // 커밋 시점에 캐시를 미리 채우기 위해 원본(고화질) 주소를 기억해둠

  lbInner.addEventListener("touchstart", (e) => {
    if (e.touches.length === 2) {
      // 이미 스와이프 중이었다면, 손가락이 실수로 하나 더 닿은 것으로 보고 무시함 -
      // 안 그러면 스와이프 도중 다른 손가락이 살짝 스치기만 해도 갑자기 확대 모드로
      // 튀어버리는 버그가 생김(스와이프는 그대로 첫 번째 손가락 기준으로 계속 진행됨)
      if (touchSwiping) return;
      touchActive = false;
      pinchStartDist = touchDistance(e.touches[0], e.touches[1]);
      pinchStartScale = scale;
      pinchWentBelowFit = false;
      pinchMidX = (e.touches[0].clientX + e.touches[1].clientX) / 2;
      pinchMidY = (e.touches[0].clientY + e.touches[1].clientY) / 2;
      return;
    }
    if (e.touches.length !== 1) return;
    pinchStartDist = null;
    if (pendingSwipeCommit && pendingSwipeCommit.winner) {
      // 넘어가던 전환을 취소만 하면 화면이 잠깐 비어버림 - 대신 바로 완료시켜서
      // "잡아서 이어가는" 느낌으로, 다음 제스처는 항상 완성된 이미지에서 시작함.
      // 단, 뚝 끊고 정중앙에서 시작하면 부자연스러우므로, 그 순간 실제로 보이던 위치
      // (진행 중이던 애니메이션 값)를 먼저 읽어둠
      const computedTransform = getComputedStyle(pendingSwipeCommit.winner).transform;
      let capturedX = 0;
      if (computedTransform && computedTransform !== "none") {
        // matrix(a, b, c, d, tx, ty) 형태에서 tx(가로 이동값)만 뽑아냄
        const match = computedTransform.match(/matrix\(([^)]+)\)/);
        if (match) capturedX = parseFloat(match[1].split(",")[4]) || 0;
      }
      const capturedOffset = pendingSwipeCommit.offset + capturedX;
      const dir = pendingSwipeCommit.offset > 0 ? 1 : -1; // offset 부호로 원래 커밋 방향을 알아냄
      // winner가 처음 커밋 시작 시점엔 아직 로딩 전이라 캐시에 못 심었을 수 있음 -
      // 지금은 시간이 좀 지나서 로딩됐을 가능성이 높으므로 여기서 다시 시도함
      // (안 그러면 그 사이 잠깐 화면이 비어보이는 원인이 됨)
      if (pendingSwipeCommit.winner.naturalWidth && pendingSwipeCommit.winnerFullSrc) {
        imageDimsCache.set(pendingSwipeCommit.winnerFullSrc, {
          w: pendingSwipeCommit.winner.naturalWidth,
          h: pendingSwipeCommit.winner.naturalHeight
        });
      }
      clearTimeout(pendingSwipeCommit.timer);
      pendingGrabOffset = capturedOffset; // openLightboxRaw가 실제로 보여주는 순간에 이 값을 소비함
      pendingSwipeCommit.run();
      pendingSwipeCommit = null;
      touchStartX = e.touches[0].clientX - capturedOffset;
      // 새로 자리잡은 이미지를 기준으로 스와이프 준비(다음/이전 미리 대기)를 다시 해둠 -
      // 이러면 이어서 드래그하거나, 이대로 손을 떼도 일반적인 스와이프처럼 커밋/스냅백
      // 판정이 자연스럽게 이뤄짐(안 그러면 손을 떼도 그 자리에 계속 멈춰있게 됨)
      touchSwiping = true;
      setupSwipePeeks();
      // 원래 출발했던 지점 기준으로 반대쪽에 한 칸 더 준비해둠(abcd/bcde 구성)
      setupExtraPeek(dir);
      lbImage.style.transform = `translateX(${capturedOffset}px)`;
      if (lbImagePeekNext.style.display !== "none") lbImagePeekNext.style.transform = `translateX(${capturedOffset}px)`;
      if (lbImagePeekPrev.style.display !== "none") lbImagePeekPrev.style.transform = `translateX(${capturedOffset}px)`;
      if (lbImagePeekNext2.style.display !== "none") lbImagePeekNext2.style.transform = `translateX(${capturedOffset}px)`;
      if (lbImagePeekPrev2.style.display !== "none") lbImagePeekPrev2.style.transform = `translateX(${capturedOffset}px)`;
    } else if (pendingSwipeCommit) {
      // 스냅백(덜 밀어서 제자리로 돌아가는 중) 도중에 잡은 경우 - 확정 커밋과는 완전히
      // 별도로 처리. lbImage 자신이 지금 실제로 어디 있는지(진행 중이던 애니메이션 값)를
      // 읽어서 그 위치에서 그대로 이어받음
      const computedTransform = getComputedStyle(lbImage).transform;
      let capturedOffset = 0;
      if (computedTransform && computedTransform !== "none") {
        const match = computedTransform.match(/matrix\(([^)]+)\)/);
        if (match) capturedOffset = parseFloat(match[1].split(",")[4]) || 0;
      }
      clearTimeout(pendingSwipeCommit.timer);
      pendingSwipeCommit.run(); // finishSnapback - peek 정리만 함, lbImage는 안 건드림
      pendingSwipeCommit = null;
      lbImage.style.transition = "none";
      lbImage.style.transform = `translateX(${capturedOffset}px)`;
      touchStartX = e.touches[0].clientX - capturedOffset;
      touchSwiping = true;
      setupSwipePeeks();
      if (lbImagePeekNext.style.display !== "none") lbImagePeekNext.style.transform = `translateX(${capturedOffset}px)`;
      if (lbImagePeekPrev.style.display !== "none") lbImagePeekPrev.style.transform = `translateX(${capturedOffset}px)`;
    } else {
      touchStartX = e.touches[0].clientX;
      touchSwiping = false;
    }
    touchStartY = e.touches[0].clientY;
    touchStartTime = Date.now();
    touchPanStartLeft = imgLeft;
    touchPanStartTop = imgTop;
    touchActive = true;
    swipeTouchId = e.touches[0].identifier;
    lbImage.style.transition = "none";
  }, { passive: true });

  // 다음/이전 그림을 양쪽에 모두 미리 대기시켜둠(방향을 바꿔도 항상 그림이 있게) -
  // 스와이프가 처음 시작될 때뿐 아니라, 애니메이션 도중에 다시 잡아서 그 자리에서
  // 이어서 드래그하게 될 때도 새 "현재 그림" 기준으로 다시 준비해야 하므로 함수로 뺌
  function setupSwipePeeks() {
    // 현재 그림의 폭이 아니라 화면 경계 자체를 기준으로 간격을 계산함 - 예전엔 "현재
    // 그림 폭 + 24"였는데, 세로가 긴(그래서 폭이 좁은) 그림일 때는 이 정도 간격으로는
    // 화면 밖까지 안 밀려나서, 스와이프하지도 않았는데 옆 그림이 화면 안에 살짝 걸쳐
    // 보이는 문제가 있었음. 이제 next는 화면 오른쪽 끝을, prev는 (어떤 폭의 그림이 오든,
    // 그림이 가질 수 있는 최대 폭까지 감안해서) 화면 왼쪽 끝을 반드시 넘어서도록 계산함
    const maxPossibleImgWidth = window.innerWidth * 0.88; // computeFitSize의 최대 가로폭 기준과 동일
    nextGap = window.innerWidth - imgLeft;
    prevGap = imgLeft + maxPossibleImgWidth;

    if (!(lightboxItems.length > 1 || (lightboxItems[lightboxIndex] && lightboxItems[lightboxIndex].kind === "work"))) return;

    const nextStep = resolveSubStep(1);
    const prevStep = resolveSubStep(-1);
    const atExhibitionStart = lightboxSource && lightboxSource.type === "exhibition" && lightboxIndex === 0 && prevStep.type === "cross";

    let nextSrc = "", nextThumb = null;
    if (nextStep.type === "sub") {
      const entry = getItemImageEntry(lightboxItems[lightboxIndex], nextStep.subIndex);
      nextSrc = entry.src; nextThumb = entry.thumb;
    } else if (lightboxItems.length > 1) {
      const nextIndex = (lightboxIndex + 1) % lightboxItems.length;
      const entry = getItemImageEntry(lightboxItems[nextIndex]);
      nextSrc = entry.src; nextThumb = entry.thumb;
    }

    let prevSrc = "", prevThumb = null;
    const hasPrevIndex = prevStep.type === "sub" || (!atExhibitionStart && lightboxItems.length > 1);
    if (prevStep.type === "sub") {
      const entry = getItemImageEntry(lightboxItems[lightboxIndex], prevStep.subIndex);
      prevSrc = entry.src; prevThumb = entry.thumb;
    } else if (hasPrevIndex) {
      const prevIndex = (lightboxIndex - 1 + lightboxItems.length) % lightboxItems.length;
      const prevItem = lightboxItems[prevIndex];
      // 뒤로 가면서 부속 이미지 있는 작품으로 새로 들어가는 거면, 그 작품의 마지막
      // 부속 이미지를 미리 보여줘야 실제로 넘어갔을 때(자연스러운 방향)와 일치함
      if (prevItem && prevItem.kind === "work") {
        const prevSubs = getWorkSubImages(prevItem.id);
        const prevEntry = prevSubs[prevSubs.length - 1] || prevSubs[0];
        prevSrc = prevEntry ? prevEntry.image : "";
        prevThumb = prevEntry ? prevEntry.thumb : null;
      } else {
        const entry = getItemImageEntry(prevItem);
        prevSrc = entry.src; prevThumb = entry.thumb;
      }
    }

    nextFullSrc = nextSrc;
    prevFullSrc = prevSrc;

    [
      { el: lbImagePeekNext, key: "next", hasIndex: true, src: nextSrc, thumb: nextThumb, offset: nextGap },
      { el: lbImagePeekPrev, key: "prev", hasIndex: hasPrevIndex, src: prevSrc, thumb: prevThumb, offset: -prevGap }
    ].forEach(({ el, key, hasIndex, src, thumb, offset }) => {
      // 진짜로 갈 곳이 없는 경우(전시 경계 등)만 숨김 - 그 항목에 이미지가 없을 뿐인
      // 경우는 자리표시자로 계속 보이게 해서 그 방향 스와이프가 막히지 않도록 함
      if (!hasIndex) { el.style.display = "none"; return; }
      // 크기/위치를 먼저 확정 - src보다 반드시 먼저여야 함(안 그러면 크기가 정해지기 전
      // 잠깐 원본 픽셀 크기 그대로 작게 그려졌다가 커지는 것처럼 보일 수 있음)
      const dims = src ? imageDimsCache.get(src) : null;
      const fit = dims ? computeFitSize(dims.w, dims.h) : { w: imgWidth, h: imgHeight };
      el.style.width = `${fit.w}px`;
      el.style.height = `${fit.h}px`;
      el.style.top = `${(window.innerHeight - fit.h) / 2}px`;
      el.style.left = `${imgLeft + offset}px`;
      el.style.transition = "none";
      el.style.transform = "translateX(0px)";
      el.style.display = "";
      // 내용 지정 - 캐시로 이미 정확한 크기를 알고 있으면(대부분의 경우, 한 번이라도
      // 봤던 이미지) 바로 보여주고, 처음 보는 이미지라 크기를 모르는 채로 임시값을
      // 썼다면 실제로 로드된 뒤 진짜 치수로 다시 맞추고 보여줌
      setPeekImageSrc(el, key, src, thumb, !!dims, offset);
    });
  }

  // 스와이프 도중 잡아서 포커스가 넘어간 경우 전용 - 원래 출발했던 지점(C) 기준으로,
  // 진행 방향의 반대쪽에 한 칸 더 미리 준비해둠. 예를 들어 C에서 D 방향으로 가다가
  // 잡으면(포커스가 D가 됨) B까지, C에서 B 방향으로 가다가 잡으면(포커스가 B가 됨)
  // D까지 준비해서, 마음이 바뀌어 반대로 계속 이어가도 화면이 비지 않게 함
  function setupExtraPeek(dir) {
    inExtraPeekMode = true; // abcd 4장 구성 시작 - 모든 이미지가 thumb로만 유지되도록
    const el = dir > 0 ? lbImagePeekPrev2 : lbImagePeekNext2;
    const other = dir > 0 ? lbImagePeekNext2 : lbImagePeekPrev2;
    other.style.display = "none"; // 반대쪽은 이번엔 안 씀
    if (lightboxItems.length < 3) { el.style.display = "none"; return; }
    const idx = dir > 0
      ? (lightboxIndex - 2 + lightboxItems.length) % lightboxItems.length
      : (lightboxIndex + 2) % lightboxItems.length;
    const item = lightboxItems[idx];
    const entry = getItemImageEntry(item);
    if (!entry || !entry.src) { el.style.display = "none"; return; }
    const gapOffset = dir > 0 ? -(2 * prevGap) : (2 * nextGap);
    const dims = imageDimsCache.get(entry.src);
    const fit = dims ? computeFitSize(dims.w, dims.h) : { w: imgWidth, h: imgHeight };
    el.style.width = `${fit.w}px`;
    el.style.height = `${fit.h}px`;
    el.style.top = `${(window.innerHeight - fit.h) / 2}px`;
    el.style.left = `${imgLeft + gapOffset}px`;
    el.style.transition = "none";
    el.style.transform = "translateX(0px)";
    el.style.display = "";
    setPeekImageSrc(el, dir > 0 ? "prev2" : "next2", entry.src, entry.thumb, !!dims, gapOffset);
  }

  // 핀치(2손가락)와 스와이프(1손가락)를 별도 리스너로 분리함 - 핀치는 브라우저 자체
  // 확대 제스처를 막아야 해서 passive:false(+ preventDefault)가 필요하지만, 스와이프는
  // 그럴 필요가 없는데 같은 리스너에 묶여있으면 스와이프 쪽도 어쩔 수 없이 매 프레임
  // "이 코드가 다 끝날 때까지 기다렸다가 그릴지 결정"하는 부담을 같이 지게 됨 - 이게
  // 인앱 브라우저처럼 메인 스레드가 조금이라도 바쁠 때(이미지 디코딩 등) 버벅임으로
  // 이어질 수 있어서, 스와이프 쪽만 따로 빼서 passive:true로 되돌림
  lbInner.addEventListener("touchmove", (e) => {
    if (e.touches.length !== 2 || pinchStartDist == null) return;
    e.preventDefault(); // 브라우저(인앱 브라우저 포함) 자체 핀치/스크롤 제스처 개입 방지
    const cx = (e.touches[0].clientX + e.touches[1].clientX) / 2;
    const cy = (e.touches[0].clientY + e.touches[1].clientY) / 2;
    // 앵커(이미지 안에서 지금 중점이 가리키는 지점의 비율)는 매 프레임 갱신되는 이전
    // 중점 기준으로 계산 - 클램프 없이 그대로 써야 확대/축소와 두 손가락 이동(팬)이
    // 동시에 자연스럽게 반영됨(고정된 앵커에서만 계산하면 이동이 안 먹힘)
    const ax = (pinchMidX - imgLeft) / imgWidth;
    const ay = (pinchMidY - imgTop) / imgHeight;

    const newDist = touchDistance(e.touches[0], e.touches[1]);
    // 캡션 숨기기 제스처는 완전히 초기화된 상태(1배)에서 시작한 핀치에서만 인식함
    // - 이미 확대된 상태라면 1 밑으로는 못 내려가게(정상 줌 동작만 하게) 막음
    const minScale = pinchStartScale <= 1 ? 0.5 : 1;
    const newScale = Math.min(6, Math.max(minScale, pinchStartScale * (newDist / pinchStartDist)));
    const newWidth = fitWidth * newScale;
    const newHeight = fitHeight * newScale;
    imgLeft = cx - ax * newWidth;
    imgTop = cy - ay * newHeight;
    imgWidth = newWidth;
    imgHeight = newHeight;
    scale = newScale;
    pinchMidX = cx;
    pinchMidY = cy;
    if (scale < 0.92) pinchWentBelowFit = true;
    applyImageBox();
    updateZoomState();
  }, { passive: false });

  lbInner.addEventListener("touchmove", (e) => {
    if (e.touches.length === 2 && pinchStartDist != null) return; // 핀치는 위쪽 리스너가 전담

    // 스와이프 도중 손가락이 하나 더 닿아도(위에서 핀치로 전환하지 않고 무시했다면)
    // 계속 첫 번째 손가락 기준으로 스와이프가 이어지도록 함 - 정확히 1개일 때만
    // 허용하면, 실수로 스친 손가락 때문에 스와이프가 뚝 끊기는 문제가 생김
    if (!touchActive || e.touches.length < 1) return;
    const dx = e.touches[0].clientX - touchStartX;
    const dy = e.touches[0].clientY - touchStartY;

    if (scale > 1) {
      // 확대된 상태 - 팬(화면 밖으로 못 나가게)
      imgLeft = touchPanStartLeft + dx;
      imgTop = touchPanStartTop + dy;
      clampImagePosition();
      applyImageBox();
      return;
    }

    if (!touchSwiping) {
      // 아직 스와이프로 확정되기 전에만 각도를 따짐 - 대각선으로 애매하게 스와이프해도
      // 옆으로 안 넘어가도록, 가로가 세로보다 확실히 더 커야만(대략 수평 기준 30도 이내)
      // 좌우 스와이프로 인정함(기존 45도보다 까다로움). 한 번 스와이프로 확정된 뒤에는
      // 이 각도를 다시 안 따짐 - 안 그러면 천천히 드래그하다 손이 살짝 흔들려서(느릴수록
      // 이 비중이 커짐) 순간적으로 각도가 벗어날 때마다 업데이트가 씹혀서 화면이 멈췄다가
      // 나중에 쌓인 dx가 한꺼번에 반영되며 순간이동하는 것처럼 보이는 문제가 있었음
      if (Math.abs(dx) <= Math.abs(dy) * 1.73) return;
      touchSwiping = true;
      setupSwipePeeks();
    }

    lbImage.style.transform = `translateX(${dx}px)`;
    if (lbImagePeekNext.style.display !== "none") lbImagePeekNext.style.transform = `translateX(${dx}px)`;
    if (lbImagePeekPrev.style.display !== "none") lbImagePeekPrev.style.transform = `translateX(${dx}px)`;
    if (lbImagePeekNext2.style.display !== "none") lbImagePeekNext2.style.transform = `translateX(${dx}px)`;
    if (lbImagePeekPrev2.style.display !== "none") lbImagePeekPrev2.style.transform = `translateX(${dx}px)`;
  }, { passive: true });

  lbInner.addEventListener("touchend", (e) => {
    const wasPinching = pinchStartDist != null;

    // 두 손가락이 정확히 동시에 떨어지는 경우는 거의 없음 - 손가락이 2개 미만으로
    // 줄어드는 순간을 "핀치 종료"로 인식해야 함(정확히 0이 될 때까지 기다리면 놓침)
    if (wasPinching && e.touches.length < 2) {
      pinchStartDist = null;
      lbImage.style.transition = "width 0.2s ease, height 0.2s ease, left 0.2s ease, top 0.2s ease";
      if (pinchWentBelowFit && scale < 0.98) {
        // 축소한 채로 놓은 제스처 - 프레임을 원래 크기로 되돌리고 캡션/링크 표시 여부를 토글
        scale = 1;
        imgWidth = fitWidth;
        imgHeight = fitHeight;
        imgLeft = (window.innerWidth - fitWidth) / 2;
        imgTop = (window.innerHeight - fitHeight) / 2;
        applyImageBox();
        updateZoomState();
        setCaptionHidden(!captionHidden);
      } else if (scale <= 1.05) {
        // 축소했다가 다시 늘려서 취소했거나, 살짝 1 근처인 경우 - 토글 없이 중앙 재배치만
        scale = 1;
        imgWidth = fitWidth;
        imgHeight = fitHeight;
        imgLeft = (window.innerWidth - fitWidth) / 2;
        imgTop = (window.innerHeight - fitHeight) / 2;
        applyImageBox();
        updateZoomState();
      }
      pinchWentBelowFit = false;
      setTimeout(() => { lbImage.style.transition = ""; }, 210);
      return;
    }

    if (!touchActive) return;
    // 지금 떨어진 손가락이 실제로 스와이프 중이던 그 손가락인지 확인함 - 스와이프 도중
    // 실수로 닿았던 다른 손가락이 먼저 떨어진 거라면(식별자가 다름) 무시하고, 진짜
    // 스와이프하던 손가락은 여전히 화면에 남아있으므로 스와이프를 그대로 이어감
    const liftedTouch = e.changedTouches[0];
    if (swipeTouchId != null && liftedTouch && liftedTouch.identifier !== swipeTouchId) return;
    touchActive = false;
    lbImage.style.transition = "";

    if (scale > 1) return; // 팬은 그 자리에서 그대로 유지

    if (touchSwiping) {
      touchSwiping = false;
      touchWasSwipe = true; // 곧이어 브라우저가 합성해서 발생시킬 수 있는 click(확대 토글)을 무시하기 위한 표시
      setTimeout(() => { touchWasSwipe = false; }, 400); // 합성 클릭이 아예 안 오는 경우를 대비한 안전장치
      const touch = e.changedTouches[0];
      const dx = touch.clientX - touchStartX;
      const elapsed = Math.max(1, Date.now() - touchStartTime);
      const velocity = Math.abs(dx) / elapsed; // px/ms
      const hasNext = lbImagePeekNext.style.display !== "none";
      const hasPrev = lbImagePeekPrev.style.display !== "none";
      // 전시 첫 그림(부속 이미지 그룹의 첫 대표 이미지 기준)에서 더 이전으로 가는 경우,
      // 보여줄 미리보기 그림은 없지만(전시 개요 페이지로 돌아가는 거라) 유효한 목적지이므로 막으면 안 됨
      const atExhibitionStart = lightboxSource && lightboxSource.type === "exhibition" && lightboxIndex === 0
        && resolveSubStep(-1).type === "cross";
      const dirHasTarget = dx < 0 ? hasNext : (hasPrev || atExhibitionStart);
      // 작품과 작품 중간 경계선(그 방향 간격의 절반)을 넘었거나, 짧아도 빠르게 휙
      // 넘겼으면(속도) 커밋 - 그 경계 못 미치면 원래 그림으로 되돌아감
      const boundary = (dx < 0 ? nextGap : prevGap) / 2;
      const committed = (Math.abs(dx) > boundary || (Math.abs(dx) > 20 && velocity > 0.5)) && dirHasTarget;

      if (committed && dx > 0 && atExhibitionStart) {
        // 이건 새 그림으로 넘어가는 게 아니라 전시 개요 페이지로 돌아가는 것뿐 -
        // 같은 그림을 계속 보여주는 거니까 그림을 밀어냈다 다시 데려오는 대신,
        // 그냥 제자리로 돌아오면서 배경 페이지만 조용히 바뀌도록 함
        lbImage.style.transition = "transform 0.2s ease";
        lbImage.style.transform = "";
        [lbImagePeekNext, lbImagePeekPrev, lbImagePeekNext2, lbImagePeekPrev2].forEach((el) => {
          if (el.style.display === "none") return;
          el.style.transition = "transform 0.2s ease";
          el.style.transform = "translateX(0px)";
        });
        const finishReturn = () => {
          lbImagePeekNext.style.display = "none";
          lbImagePeekPrev.style.display = "none";
          lbImagePeekNext.style.transition = "";
          lbImagePeekPrev.style.transition = "";
          lbImagePeekNext2.style.display = "none";
          inExtraPeekMode = false; // abcd 모드 종료
          lbImagePeekPrev2.style.display = "none";
          lbImage.style.transition = "";
          tryExhibitionBackToOverview();
        };
        pendingSwipeCommit = {
          run: finishReturn,
          timer: setTimeout(() => {
            pendingSwipeCommit = null;
            finishReturn();
          }, 210)
        };
      } else if (committed) {
        // 충분히 밀었으면 - 실제로 움직인 방향으로 확정 (다음/이전은 방향에 따라 그때 결정)
        const dir = dx < 0 ? 1 : -1; // 1 = 다음 작품, -1 = 이전 작품
        const duration = 220;
        const winner = dir > 0 ? lbImagePeekNext : lbImagePeekPrev;
        const loser = dir > 0 ? lbImagePeekPrev : lbImagePeekNext;
        const winnerFullSrc = dir > 0 ? nextFullSrc : prevFullSrc;

        // winner(peek)는 스와이프하는 동안 이미 로드돼서 화면에 보이고 있던 실제 이미지임 -
        // 그 실제 치수를 여기서 캐시에 미리 심어두면, 곧이어 실행될 openLightboxRaw가
        // 100% 캐시 히트로 "투명화 없이 바로 배치"하는 빠른 경로를 확실히 타게 됨.
        // (모바일처럼 네트워크가 느려서 미리 준비해두는 preload가 못 따라잡았을 때 특히 중요함)
        if (winner.naturalWidth && winnerFullSrc) {
          imageDimsCache.set(winnerFullSrc, { w: winner.naturalWidth, h: winner.naturalHeight });
        }

        // winner 자신의 실제 치수(이미 로드된 thumb 기준, 원본과 비율은 동일)로 "이 그림이
        // 진짜로 있어야 할 화면 중앙 자리"를 계산함 - 예전엔 무조건 "예전 이미지가 있던
        // 자리"로 수렴하게 계산했는데, 세로가 긴(폭이 좁은) 이미지가 오면 그 자리가 실제
        // 중앙이 아니라서, 애니메이션이 끝난 뒤 진짜 중앙으로 한 번 더 순간이동하는 것처럼
        // 보였음. 이제 winner의 진짜 중앙 자리를 직접 목표로 잡아서 그런 문제가 없음
        const winnerFit = winner.naturalWidth ? computeFitSize(winner.naturalWidth, winner.naturalHeight) : { w: imgWidth, h: imgHeight };
        const winnerCorrectX = (window.innerWidth - winnerFit.w) / 2;
        const winnerOwnOffset = dir > 0 ? nextGap : -prevGap; // winner가 처음 배치될 때 쓴 offset(부호 포함)
        const uniformTarget = winnerCorrectX - (imgLeft + winnerOwnOffset);
        [lbImage, lbImagePeekNext, lbImagePeekPrev, lbImagePeekNext2, lbImagePeekPrev2].forEach((el) => {
          if (el !== lbImage && el.style.display === "none") return;
          el.style.transition = `transform ${duration}ms ease`;
          el.style.transform = `translateX(${uniformTarget}px)`;
        });
        loser.style.transition = "none";
        loser.style.display = "none";
        inExtraPeekMode = false; // abcd 모드 종료

        const finishCommit = () => {
          lbImagePeekNext.style.display = "none";
          lbImagePeekPrev.style.display = "none";
          lbImagePeekNext.style.transition = "";
          lbImagePeekPrev.style.transition = "";
          lbImagePeekNext2.style.display = "none";
          inExtraPeekMode = false; // abcd 모드 종료
          lbImagePeekPrev2.style.display = "none";
          lbImage.style.transition = "none";
          lbImage.style.transform = ""; // 남아있던 이동값 제거 - 다음 제스처가 항상 제자리에서 시작하도록
          stepLightboxHorizontal(dir); // 부속 이미지 그룹 안이면 그 안에서, 아니면 옆 작품으로
        };
        pendingSwipeCommit = {
          run: finishCommit,
          winner,
          winnerFullSrc,
          offset: dir > 0 ? nextGap : -prevGap,
          timer: setTimeout(() => {
            pendingSwipeCommit = null;
            finishCommit();
          }, duration + 30)
        };
      } else {
        // 덜 밀었으면 - 양쪽 다 같이 제자리로
        lbImage.style.transition = "transform 0.2s ease";
        lbImage.style.transform = "";
        [lbImagePeekNext, lbImagePeekPrev, lbImagePeekNext2, lbImagePeekPrev2].forEach((el) => {
          if (el.style.display === "none") return;
          el.style.transition = "transform 0.2s ease";
          el.style.transform = "translateX(0px)";
        });
        const finishSnapback = () => {
          lbImagePeekNext.style.display = "none";
          lbImagePeekPrev.style.display = "none";
          lbImagePeekNext.style.transition = "";
          lbImagePeekPrev.style.transition = "";
          lbImagePeekNext2.style.display = "none";
          lbImagePeekPrev2.style.display = "none";
          // abcd 모드였다면(원본 교체가 그동안 계속 억제돼있었음) - 이 경우는 원래
          // 이미지 그대로 머무는 거라 openLightboxRaw가 다시 안 불려서 원본 교체를
          // 재시도할 기회가 없음. 여기서 같은 이미지를 명시적으로 다시 열어서
          // 원본 교체를 새로 시작함
          if (inExtraPeekMode) openLightboxItem(lightboxItems[lightboxIndex]);
          inExtraPeekMode = false; // abcd 모드 종료
        };
        pendingSwipeCommit = {
          run: finishSnapback,
          timer: setTimeout(() => {
            pendingSwipeCommit = null;
            finishSnapback();
          }, 210)
        };
      }
    }
  });

  // 캡션이 애매한 길이(좁은 420px 폭엔 못 들어가지만, 조금만 더 넓히면 한 줄에 들어가는
  // 경우)일 때만 더 넓은 폭으로 전환함 - 진짜 긴 캡션은 원래대로 좁은 폭에서 여러 줄로 감쌈
  function adjustCaptionWidthMode() {
    lbInfo.classList.remove("lb-info-wide");
    const prevWhiteSpace = lbCaptionLine.style.whiteSpace;
    lbCaptionLine.style.whiteSpace = "nowrap"; // 줄바꿈 없이 자연스러운 폭을 재기 위해 잠깐 적용
    const naturalWidth = lbCaptionLine.scrollWidth;
    lbCaptionLine.style.whiteSpace = prevWhiteSpace;

    const narrowCap = 420;
    const wideCap = Math.min(700, window.innerWidth - 80);
    if (naturalWidth > narrowCap && naturalWidth <= wideCap) {
      lbInfo.classList.add("lb-info-wide");
    }
  }

  let lightboxImageLoadToken = 0; // 이 번호가 바뀌면(다른 이미지로 넘어가면) 이전 백그라운드 로딩은 무시됨
  let pendingGrabOffset = 0; // 스와이프 애니메이션 도중 다시 손을 댔을 때, 그 순간 위치에서 이어받기 위한 값

  let currentLightboxLinks = []; // 창 크기가 바뀔 때 다시 렌더링할 수 있도록 마지막으로 넘겨받은 링크 목록을 기억해둠

  function renderLightboxLinks(links) {
    currentLightboxLinks = links;
    const linkHtml = (l) => `<a href="${l.href}" class="lb-explore-link" data-kind="${l.kind || ""}" data-work-id="${l.workId || ""}">${l.label}</a>`;
    // "전시 찾아보기" 링크(kind 없음)만 위로 보낼 후보 - "연작/글 찾아보기"(kind 있음)는 그다음 우선순위
    const exhibitionLinks = links.filter((l) => !l.kind);
    const otherLinks = links.filter((l) => l.kind);

    const attachClicks = () => {
      [lbLinks, lbLinksTop].forEach((container) => {
        container.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => {
          if (captionHidden) return; // 숨겨진 상태에서는 눌려도 아무 반응 없음(터치 자체는 이 영역이 흡수함)
          if (a.dataset.kind === "work" && a.dataset.workId) armWorkFocus(a.dataset.workId, false);
          if (a.dataset.kind === "post" && a.dataset.workId) armPostFocus(a.dataset.workId);
          closeLightboxForNavigation();
        }));
      });
    };

    if (window.innerWidth > 650) {
      // 데스크톱에서는 항상 다 바닥 하나에
      lbLinksTop.innerHTML = "";
      lbLinks.innerHTML = links.map(linkHtml).join("");
      attachClicks();
      return;
    }

    // 좁은 화면(삼선 기준) - 일단 전부 바닥에 렌더링해서 실제 줄 수(긴 이름이면 2줄일
    // 수도 있음)를 측정한 다음, 캡션/노트까지 다 합쳐서 몇 줄인지 계산함. 스와이프
    // 도중 손가락이 실수로 닿을 수 있는 영역이 너무 커지는 걸 막는 게 목적이라,
    // 캡션/노트는 항상 짧고 위치도 안 바뀌니 옮기지 않고, 늘어나는 목록만 옮김
    lbLinksTop.innerHTML = "";
    lbLinks.innerHTML = links.map(linkHtml).join("");

    const countLines = (el) => {
      if (!el || !el.textContent || !el.textContent.trim() || el.style.display === "none") return 0;
      const lh = parseFloat(getComputedStyle(el).lineHeight) || 18;
      return Math.max(1, Math.round(el.getBoundingClientRect().height / lh));
    };

    const captionLines = countLines(lbCaptionLine);
    const noteLines = countLines(lbNote);
    const anchorEls = Array.from(lbLinks.querySelectorAll("a"));
    // 렌더링한 순서(전시 먼저, 글 찾아보기 다음)와 그대로 대응됨
    const exLineCounts = anchorEls.slice(0, exhibitionLinks.length).map(countLines);
    const otherLineCounts = anchorEls.slice(exhibitionLinks.length).map(countLines);

    let total = captionLines + noteLines
      + exLineCounts.reduce((a, b) => a + b, 0)
      + otherLineCounts.reduce((a, b) => a + b, 0);

    const movedToTop = [];
    // 5줄(총합) 넘으면, 전시찾아보기를 오래된 것부터 통째로(항목 단위로, 줄 중간에서
    // 안 자르고) 위로 보냄 - 다 보내도 부족하면 글찾아보기도 오래된 순으로 이어서 보냄
    let exIdx = 0;
    while (total > 5 && exIdx < exhibitionLinks.length) {
      total -= exLineCounts[exIdx];
      movedToTop.push(exhibitionLinks[exIdx]);
      exIdx++;
    }
    let otherIdx = 0;
    while (total > 5 && otherIdx < otherLinks.length) {
      total -= otherLineCounts[otherIdx];
      movedToTop.push(otherLinks[otherIdx]);
      otherIdx++;
    }

    if (movedToTop.length) {
      const remaining = exhibitionLinks.slice(exIdx).concat(otherLinks.slice(otherIdx));
      lbLinksTop.style.maxWidth = ""; // 기본(넓은) 폭으로 - 이제 좁히는 건 전체가 아니라 float 요소 하나로만 처리함
      lbLinksTop.innerHTML = movedToTop.map(linkHtml).join("");
      lbLinks.innerHTML = remaining.map(linkHtml).join("");
      // 닫기 버튼의 실제 위치를 재서, 딱 그 자리만큼만 투명하게 float시켜 놓음 - 그
      // 옆(닫기 버튼과 같은 높이)에 있는 글자 줄만 좁게 줄바꿈되고, 그 아래(버튼보다
      // 낮은 위치)의 줄부터는 다시 원래 너비 전체를 씀. 버튼의 클릭 범위 자체는 안 건드림
      const closeRect = lbClose.getBoundingClientRect();
      const topRect = lbLinksTop.getBoundingClientRect();
      const gapX = 16; // 왼쪽(글자가 버튼과 겹치지 않게) - 이 정도 여유는 필요함
      const gapY = 0;  // 아래쪽(버튼보다 낮아지면 바로 원래 너비로 채워도 됨) - 여백 없앰
      const spacerWidth = Math.max(0, topRect.right - (closeRect.left - gapX));
      const spacerHeight = Math.max(0, (closeRect.bottom + gapY) - topRect.top);
      if (spacerWidth > 0 && spacerHeight > 0) {
        lbLinksTop.innerHTML = `<div class="lb-top-avoid-spacer" style="width:${spacerWidth}px;height:${spacerHeight}px;"></div>` + lbLinksTop.innerHTML;
      }
    } else {
      lbLinksTop.style.maxWidth = "";
    }
    attachClicks();
  }

  // 라이트박스가 열려있는 동안 창 크기가 바뀌면(회전, 창 크기 조절 등) 목록을 다시 나눔 -
  // 안 그러면 좁은 화면일 때 천장으로 보냈던 항목들이, 넓은 화면으로 바뀌어도 그대로
  // 남아있다가 CSS가 숨겨버려서(650px 넘으면 안 보이게 돼있음) 그냥 사라져버림
  window.addEventListener("resize", () => {
    if (lightbox.classList.contains("open")) renderLightboxLinks(currentLightboxLinks);
  });

  function openLightboxRaw({ image, thumb, title, artist, meta, note, links }) {
    // 이미지 로딩(특히 캐시된 thumb는 거의 순식간에 load 이벤트가 발생함)이 시작되기 전에
    // "열려있음" 상태부터 먼저 확정해둠 - 순서가 반대면, load 리스너 안의 "라이트박스
    // 열려있나?" 체크가 아직 안 열린 것으로 보고 건너뛰어서 화면이 계속 투명한 채로 남음
    lightbox.classList.add("open");
    document.body.style.overflow = "hidden";
    document.body.classList.add("lightbox-active");

    resetZoom();
    const myLoadToken = ++lightboxImageLoadToken;

    // 이 호출(myLoadToken) 전용 "배치하고 보여주기" - 그 사이 다른 이미지로 넘어갔으면
    // (번호표가 안 맞으면) 무조건 무시함. load 이벤트나 별도 억제 플래그에 기대지 않고
    // 이 함수 안에서 모든 판단이 완결되도록 해서, 여러 이미지가 겹쳐 넘어갈 때도 안전함
    const revealWithDims = (w, h) => {
      if (lightboxImageLoadToken !== myLoadToken) return;
      const fit = computeFitSize(w, h);
      fitWidth = fit.w; fitHeight = fit.h; scale = 1;
      imgWidth = fit.w; imgHeight = fit.h;
      imgLeft = (window.innerWidth - fit.w) / 2;
      imgTop = (window.innerHeight - fit.h) / 2;
      lbImage.style.transition = "none";
      // 스와이프 애니메이션 도중 다시 손을 대서 그 위치를 이어받기로 했다면(pendingGrabOffset),
      // 정중앙(빈 문자열) 대신 그 위치로 대신 배치함 - 동기/비동기 경로 둘 다 여기서 처리되므로
      // 캐시 미스로 늦게 보여지는 경우에도 항상 정확히 반영됨
      lbImage.style.transform = pendingGrabOffset ? `translateX(${pendingGrabOffset}px)` : "";
      pendingGrabOffset = 0;
      lbImage.style.opacity = "1";
      lbImagePeekNext.style.display = "none";
      lbImagePeekPrev.style.display = "none";
      lbImagePeekNext2.style.display = "none";
      inExtraPeekMode = false; // abcd 모드 종료
      lbImagePeekPrev2.style.display = "none";
      applyImageBox();
      updateZoomState();
    };

    if (image) {
      // thumb이 있고 원본이랑 다르면, 이미 갖고 있는(빠른) thumb을 먼저 보여주고,
      // 원본은 백그라운드에서 조용히 미리 로드한 다음 다 되면 자연스럽게 덮어씀
      const initialSrc = (thumb && thumb !== image) ? thumb : image;
      lbImage.alt = title || "";
      lbImage.style.display = "";
      lbImage.classList.remove("lb-image-placeholder");
      // 새 이미지를 지정하기 직전에 무조건 한 번 비워둠(src 제거) - 안 그러면 로딩되는
      // 동안 이전 이미지가 그대로 붙잡혀 보임(조각 등 서브이미지처럼 thumb이 없어서
      // 원본을 바로 불러와야 하는 경우 특히 두드러짐)
      lbImage.removeAttribute("src");

      // 옆 그림으로 넘어갈 걸 대비해 미리 치수를 캐싱해두는 로직(preloadNeighborDims)이나,
      // 스와이프 커밋 시점에 미리 심어두는 캐시가 있어서, 대부분은 이미 캐시에 치수가 있음
      const cachedDims = imageDimsCache.get(image);
      if (cachedDims) {
        // 크기를 미리 알고 있음 - 투명화 없이 바로 배치하고 그 상태로 내용을 채움
        revealWithDims(cachedDims.w, cachedDims.h);
        lbImage.src = initialSrc;
      } else {
        // 크기를 모름 - 확정되기 전까지 원본 픽셀 크기로 잠깐 그려지는 것을 막기 위해
        // 숨겨두고, 이 함수 안에서 직접 "그릴 준비(디코딩) 끝남"을 기다렸다가 배치함
        lbImage.style.opacity = "0";
        lbImage.src = initialSrc;
        const waitReady = lbImage.decode
          ? lbImage.decode()
          : new Promise((resolve) => { lbImage.addEventListener("load", resolve, { once: true }); });
        waitReady
          .then(() => revealWithDims(lbImage.naturalWidth, lbImage.naturalHeight))
          .catch(() => revealWithDims(lbImage.naturalWidth || 1200, lbImage.naturalHeight || 800));
      }

      if (thumb && thumb !== image) {
        const fullRes = new Image();
        const swapToFullRes = () => {
          // 로딩되는 사이에 닫기/스와이프/키보드/뒤로가기 등으로 다른 이미지로 넘어갔으면
          // (번호가 달라졌으면) 조용히 무시 - 엉뚱한 화면에 잘못 덮어씌우는 것 방지
          if (lightboxImageLoadToken !== myLoadToken) return;
          // abcd 모드 도중이면 아직 원본으로 안 바꿈 - 모드가 끝나고 최종 이미지가
          // 정해지면, 그때 그 이미지에 대해 openLightboxRaw가 새로 실행되며 정상 처리됨
          if (inExtraPeekMode) return;
          // thumb를 보는 동안 사용자가 확대/이동해뒀을 수 있으므로, 원본으로 바뀔 때
          // 그 상태를 그대로 유지함(자리/배율을 리셋하지 않음) - 내용만 조용히 바뀜
          lbImage.src = image;
        };
        fullRes.src = image;
        if (fullRes.decode) {
          // decode()는 "다운로드"뿐 아니라 "실제로 화면에 그릴 준비"까지 끝난 걸 보장해줌 -
          // load 이벤트만 믿으면(특히 모바일에서) 디코딩 지연 때문에 바꿔치는 순간 살짝
          // 깜빡이거나 순간적으로 비었다가 나타날 수 있음
          fullRes.decode().then(swapToFullRes).catch(swapToFullRes);
        } else {
          fullRes.onload = swapToFullRes;
        }
      }
    } else {
      // 이미지가 없어도 display:none으로 숨기면 스와이프/팬 애니메이션이 화면에 안 보여서
      // "동작 안 하는 것"처럼 느껴짐 - 숨기지 않고 자리표시자 형태로 계속 보이게 함
      lbImage.removeAttribute("src");
      lbImage.alt = title || "";
      lbImage.style.display = "";
      lbImage.style.opacity = "1"; // 혹시 이전에 숨겨진 채였다면(opacity 0) 다시 보이게
      lbImage.classList.add("lb-image-placeholder");
      pendingGrabOffset = 0; // 여긴 revealWithDims를 안 거치므로 여기서 직접 정리
    }

    // 제목/작가/메타를 쉼표로 이어붙인 한 줄 캡션 - 드래그/터치로 선택·복사할 때
    // 줄바꿈 없이 "무제, 권회찬, 2024, 캔버스에 콩테, 유채, 72.7×60.6cm" 형태로 깔끔하게 뽑히도록
    const parts = [];
    if (title) parts.push(`<strong>${escapeHtml(title)}</strong>`);
    if (artist) parts.push(escapeHtml(artist));
    if (meta) parts.push(escapeHtml(meta));
    lbCaptionLine.innerHTML = parts.join(", ");
    adjustCaptionWidthMode();

    lbNote.innerHTML = note ? nlToBr(renderInline(note)) : "";
    lbNote.style.display = note ? "" : "none";

    renderLightboxLinks(links || []);

    if (!lightboxHistoryPushed) {
      history.pushState({ lightboxOpen: true }, "");
      lightboxHistoryPushed = true;
    }
    lightboxLastKnownHref = location.href;
  }

  let lightboxItems = []; // { kind: "work", id } 또는 { kind: "install", image, caption } 배열
  let lightboxIndex = -1;
  let lightboxContext = null;
  // 지금 보고 있는 작품(work)이 subImages(부속 이미지 다발)를 갖고 있을 때, 그중 몇 번째를
  // 보고 있는지 (0 = 대표 이미지, 1부터 = subImages[0], subImages[1]...)
  let lightboxSubIndex = 0;

  function openLightboxItem(item) {
    if (!item) return;
    preloadNeighborDims();
    if (item.kind === "work") {
      const w = WORKS[item.id];
      if (!w) return;
      const subs = getWorkSubImages(item.id);
      const currentEntry = subs[lightboxSubIndex] || subs[0] || { image: w.image, thumb: w.thumb || null };
      const currentSrc = currentEntry.image;
      const currentThumb = currentEntry.thumb;
      let links = [];
      if (lightboxContext === "exhibition") {
        links = [{ href: workGalleryHref(item.id), label: `${ui("exploreWork")}`, kind: "work", workId: item.id }];
      } else {
        const list2 = EXHIBITIONS
          .filter((ex) => (ex.works || []).includes(item.id))
          .slice()
          .sort(exhibitionChronoSort);
        links = list2.map((ex) => ({
          href: `#/exhibition/${ex.id}`,
          label: `${ex.year} ${t(ex.title)}, ${t(ex.venue)}`
        }));
      }

      // 이 작품을 인용한 글이 있으면 "글 찾아보기" 링크도 추가 - 여러 개면 어느 글인지
      // 구분해야 하므로(번호 대신) "카테고리·글 제목" 형식으로 보여줌
      // - 대표 이미지든 부속 이미지든 작품 id 기준이라 동일하게 뜸
      const citingPosts = findPostsMentioningWork(item.id);
      citingPosts.forEach((postId) => {
        const p = POSTS[postId];
        const catTitle = findPostCategoryTitle(postId);
        const label = citingPosts.length > 1
          ? `${catTitle ? `${catTitle} · ` : ""}${t(p.title)}`
          : ui("exploreWriting");
        links.push({
          href: `#/text/post/${postId}`,
          label,
          kind: "post",
          workId: item.id
        });
      });

      openLightboxRaw({
        image: currentSrc,
        thumb: currentThumb,
        title: t(w.title),
        artist: t(w.artist),
        meta: `${w.year}, ${t(w.medium)}, ${w.size}${subs.length > 1 ? ` — ${lightboxSubIndex + 1} / ${subs.length}` : ""}`,
        note: t(w.note),
        links
      });
    } else if (item.kind === "install") {
      openLightboxRaw({ image: item.image, thumb: item.thumb, title: item.caption || "", artist: "", meta: "", note: item.note || "", links: [] });
    }
  }

  let lightboxSource = null; // { type: "works", path: [...] } 또는 { type: "exhibition", exhibitionId, kind }

  function openWorkLightbox(id, context, list, source, explicitIndex) {
    if (list) {
      lightboxItems = list.map((wid) => ({ kind: "work", id: wid }));
      lightboxIndex = explicitIndex != null ? explicitIndex : list.indexOf(id);
      lightboxContext = context;
      lightboxSource = source || null;
    }
    lightboxSubIndex = 0; // 새로 여는 거니까 항상 대표 이미지부터
    openLightboxItem({ kind: "work", id });
  }

  function openInstallLightbox(index, images, source) {
    lightboxSubIndex = 0;
    lightboxItems = images.map((img) => ({ kind: "install", image: img.image, thumb: img.thumb, caption: t(img.caption), note: t(img.note) }));
    lightboxIndex = index;
    lightboxContext = "install";
    lightboxSource = source || null;
    openLightboxItem(lightboxItems[index]);
  }

  function findCurrentLightboxCard() {
    const item = lightboxItems[lightboxIndex];
    if (!item) return null;
    if (item.kind === "work") return app.querySelector(`.card[data-work-index="${lightboxIndex}"]`);
    if (item.kind === "install") return app.querySelector(`.card[data-install="${lightboxIndex}"]`);
    return null;
  }

  // 라이트박스로 보고 있는 그림이 바뀔 때마다, 배경(뒤에 깔린) 그리드도 그 위치로 조용히
  // 스크롤해둠 - 나중에 라이트박스를 닫았을 때 화면이 엉뚱한 곳(맨 처음)에 있지 않도록.
  // 해당 카드가 지금 페이지에 없으면(다른 페이지에 있으면) 그냥 건너뜀.
  function syncGridScrollToCurrent() {
    const card = findCurrentLightboxCard();
    if (card) {
      scrollElementToCenter(card);
      // 스크롤뿐 아니라 키보드 포커스도 계속 따라다니게 함 - 이러면 라이트박스를 어떻게
      // 닫든(X, 뒤로가기, 백스페이스) 그 순간의 카드가 이미 포커스돼있어서 따로 보정할 필요가 없음
      card.focus({ preventScroll: true });
    }
  }

  // 현재 보고 있는 그림이 속한 그리드의 실제 열 개수를 구함(그리드가 여러 개인 페이지에서도
  // 종류(work/install)에 맞는 그리드를 찾음) - 라이트박스 방향키를 그리드와 같은 방식으로 쓰기 위함
  function getRelevantGridColumnCount() {
    const item = lightboxItems[lightboxIndex];
    if (!item) return 1;
    const selector = item.kind === "work" ? ".card[data-work]" : ".card[data-install]";
    const grids = document.querySelectorAll(".grid.grid-fullbleed");
    for (const grid of grids) {
      if (grid.querySelector(selector)) {
        const cols = getComputedStyle(grid).gridTemplateColumns.split(" ").filter(Boolean);
        return cols.length || 1;
      }
    }
    return 1;
  }

  // 목표 인덱스가 지금 렌더된 페이지에 없으면(다른 페이지에 있으면), 라이트박스는
  // 열어둔 채로 배경만 그 페이지로 조용히 이동시킴 - 페이지가 뜨고 나면
  // pendingLightboxSync를 보고 스크롤 동기화를 마무리함
  let pendingLightboxSync = false;

  function crossPageLightboxNav(targetIndex) {
    if (!lightboxSource) return;
    const page = Math.floor(targetIndex / WORKS_PER_PAGE) + 1;
    const pageSeg = page > 1 ? `/page-${page}` : "";
    let href = null;
    if (lightboxSource.type === "works") {
      href = `#/works/${lightboxSource.path.join("/")}${pageSeg}`;
    } else if (lightboxSource.type === "exhibition") {
      href = `#/exhibition/${lightboxSource.exhibitionId}/${lightboxSource.kind}${pageSeg}`;
    }
    if (!href || location.hash === href) return;
    pendingLightboxSync = true;
    // location.hash에 직접 대입하면 히스토리 항목이 새로 쌓여서, 라이트박스 열 때 표시해둔
    // "뒤로가기=닫기" 히스토리 항목이 뒤로 밀려나 버림 - replaceState로 URL만 바꾸고
    // (hashchange가 안 일어나므로) route()를 직접 호출해서 배경 화면만 재렌더
    history.replaceState(history.state, "", href);
    route();
    lightboxLastKnownHref = location.href;
  }

  let lightboxSyncToken = 0;

  function applyPendingLightboxSync() {
    if (!pendingLightboxSync) return;
    pendingLightboxSync = false;
    if (!lightbox.classList.contains("open")) return;
    // 고정된 프레임 수를 추측하는 대신, 카드 위치(레이아웃)가 실제로 멈출 때까지 프레임마다
    // 확인하다가 안정되면 그때 스크롤함 - 이미지가 몇 개든 몇십 개든 항상 정확하게 맞음.
    // 토큰으로 이 대기를 식별해두고, 그 사이 더 최근 페이지 이동이 발생하면(토큰이 달라짐)
    // 예전 대기는 조용히 스스로 멈춰서 겹동작이 벌어지지 않게 함
    const myToken = ++lightboxSyncToken;
    waitForStableCardThenSync(myToken, null, 0, 0);
  }

  function waitForStableCardThenSync(token, lastKey, stableCount, frame) {
    if (token !== lightboxSyncToken) return; // 더 최근 페이지 이동에 의해 무효화됨
    frame++;
    const card = findCurrentLightboxCard();
    if (!card) {
      requestAnimationFrame(() => waitForStableCardThenSync(token, lastKey, stableCount, frame));
      return;
    }
    const rect = card.getBoundingClientRect();
    const key = `${rect.top},${rect.left},${rect.height}`;
    stableCount = key === lastKey ? stableCount + 1 : 0;
    if (stableCount >= 2) { // 두 프레임 연속 안 움직였으면 안정된 것으로 판단
      syncGridScrollToCurrent();
      return;
    }
    requestAnimationFrame(() => waitForStableCardThenSync(token, key, stableCount, frame));
  }

  // 인덱스로 이동 - 이미지는 페이지 전환 여부와 무관하게 즉시 바뀌고(라이트박스는 계속 열려있으니
  // 사용자는 페이지가 넘어가는 걸 보지 못함), 배경 카드가 지금 페이지에 없으면 자동으로 그 페이지로 이동
  function goToLightboxIndex(target) {
    if (target !== lightboxIndex) lightboxSubIndex = 0;
    lightboxIndex = target;
    openLightboxItem(lightboxItems[target]);
    if (findCurrentLightboxCard()) {
      syncGridScrollToCurrent();
    } else {
      crossPageLightboxNav(target);
    }
  }

  // 전시 더보기(또는 미리보기)의 첫 그림보다 더 이전으로 가려고 하면, 전체 목록을 순환하는
  // 대신 원래 전시 미리보기 페이지로 돌아가고, 지금 보던(첫) 그림은 그대로 라이트박스에 유지
  function tryExhibitionBackToOverview() {
    if (!(lightboxSource && lightboxSource.type === "exhibition" && lightboxIndex === 0)) return false;
    openLightboxItem(lightboxItems[0]);
    const href = `#/exhibition/${lightboxSource.exhibitionId}`;
    if (location.hash !== href) {
      history.replaceState(history.state, "", href);
      route();
    }
    lightboxLastKnownHref = location.href;
    syncGridScrollToCurrent();
    return true;
  }

  // 지금 화면에 실제로 렌더된 카드들이 대표하는 인덱스 범위(시작~끝)를 구함.
  // WORKS_PER_PAGE를 그냥 가정하면 전시 미리보기(5개만 보임)에서도 30개짜리 페이지로
  // 착각하게 되므로, 실제 DOM에 있는 카드 기준으로 정확히 구함
  function getCurrentPageIndexRange() {
    const item = lightboxItems[lightboxIndex];
    if (!item) return { start: 0, end: lightboxItems.length - 1 };
    const selector = item.kind === "work" ? ".card[data-work-index]" : ".card[data-install]";
    const attr = item.kind === "work" ? "workIndex" : "install";
    const cards = document.querySelectorAll(selector);
    let min = Infinity, max = -Infinity;
    cards.forEach((c) => {
      const idx = Number(c.dataset[attr]);
      if (!Number.isNaN(idx)) {
        if (idx < min) min = idx;
        if (idx > max) max = idx;
      }
    });
    if (!isFinite(min)) return { start: 0, end: lightboxItems.length - 1 };
    return { start: min, end: max };
  }

  function showLightboxAt(index) {
    if (!lightboxItems.length) return;
    if (index < 0 && tryExhibitionBackToOverview()) return;
    const wrapped = ((index % lightboxItems.length) + lightboxItems.length) % lightboxItems.length;
    goToLightboxIndex(wrapped);
  }

  // 좌/우(그리고 스와이프)로 한 스텝 이동 - 지금 작품이 부속 이미지 다발을 갖고 있으면
  // 먼저 그 안에서 이동하고, 다 봤을 때만(혹은 애초에 다발이 없으면) 옆 그리드 작품으로 넘어감.
  // 뒤로 가면서 부속 이미지 있는 작품으로 새로 들어가면, 자연스러운 방향이라 그 마지막
  // 부속 이미지에서 시작함(처음부터가 아니라)
  function stepLightboxHorizontal(direction) {
    const step = resolveSubStep(direction);
    if (step.type === "sub") {
      lightboxSubIndex = step.subIndex;
      openLightboxItem(lightboxItems[lightboxIndex]);
      syncGridScrollToCurrent();
      return;
    }
    const prevIndex = lightboxIndex;
    lightboxSubIndex = 0;
    showLightboxAt(lightboxIndex + direction);
    if (direction < 0 && lightboxIndex !== prevIndex) {
      const newItem = lightboxItems[lightboxIndex];
      if (newItem && newItem.kind === "work") {
        const subs = getWorkSubImages(newItem.id);
        if (subs.length > 1) {
          lightboxSubIndex = subs.length - 1;
          openLightboxItem(newItem);
        }
      }
    }
  }

  // 위/아래 화살표 전용 - 그리드처럼 한 줄 통째로 건너뛰되, 페이지 넘김은 좌/우·스와이프만의
  // 역할이므로 위/아래는 "지금 실제로 보이는 범위" 안에서만 움직임. 이미 그 범위의
  // 끝/처음이면 좌우와 같은 방식으로 다음/이전 페이지(혹은 전시 개요)로 넘어감
  function showLightboxByRow(direction) {
    if (!lightboxItems.length) return;
    if (direction < 0 && lightboxIndex === 0 && tryExhibitionBackToOverview()) return;

    const total = lightboxItems.length;
    const rowWidth = Math.max(1, getRelevantGridColumnCount());
    const range = getCurrentPageIndexRange();
    const pageStart = range.start, pageEnd = range.end;

    if (direction > 0 && lightboxIndex === pageEnd && lightboxIndex < total - 1) {
      goToLightboxIndex(lightboxIndex + 1);
      return;
    }
    if (direction < 0 && lightboxIndex === pageStart && lightboxIndex > 0) {
      goToLightboxIndex(lightboxIndex - 1);
      return;
    }

    // 진짜 마지막/처음 그림이면 좌우와 마찬가지로 순환
    if (direction > 0 && lightboxIndex === total - 1) {
      goToLightboxIndex(0);
      return;
    }
    if (direction < 0 && lightboxIndex === 0) {
      goToLightboxIndex(total - 1);
      return;
    }

    let target = lightboxIndex + direction * rowWidth;
    target = Math.max(pageStart, Math.min(pageEnd, target));
    goToLightboxIndex(target);
  }

  let lightboxHistoryPushed = false;
  let lightboxLastKnownHref = null;

  function closeLightbox() {
    if (lightboxHistoryPushed) {
      // replaceState로 표식만 지우면, 열 때 쌓아둔 히스토리 한 칸이 그대로 안 지워지고
      // 남아있어서 "열고 닫고"를 반복할 때마다 안 보이는 죽은 칸이 계속 쌓임 - 실제로
      // 한 칸 뒤로 가서(history.back()) 그 칸을 확실히 소비시키고, popstate 핸들러가
      // 이어서 닫기+위치 복원을 처리하도록 함(실제 뒤로가기 버튼과 동일한 경로로 통일)
      history.back();
      return;
    }
    lightboxLastKnownHref = null;
    doCloseLightbox();
  }

  function doCloseLightbox() {
    // 닫히는 라이트박스 안의 요소(닫기 버튼, 각주 이동 글자, 전시/글 찾아보기 링크 등)에
    // 초점이 남아있으면, 나중에 백스페이스를 눌러도 그 요소가 계속 초점을 쥐고 있어서
    // 뒤로가기가 조용히 씹히는 것처럼 보일 수 있음 - 닫을 때 확실히 풀어줌
    if (document.activeElement && lightbox.contains(document.activeElement)) {
      document.activeElement.blur();
    }
    lightbox.classList.remove("open");
    document.body.style.overflow = "";
    document.body.classList.remove("lightbox-active");
    // resetZoom()은 이미지가 완전히 로드된 상태에서만 리셋하는 조건이 있어서, 그 타이밍이
    // 애매하게 걸리면 확대/이동 상태가 그대로 남을 수 있음 - 닫을 때는 조건 없이 확실하게
    // scale과 남아있는 transform부터 지워둠
    scale = 1;
    lbImage.style.transition = "none";
    lbImage.style.transform = "";
    resetZoom();
  }

  // 링크를 눌러 다른 화면으로 이동할 때 쓰는 닫기 - history.back()을 쓰면
  // 링크의 해시 이동과 경합해서 이동이 취소되는 문제가 있어, 대신
  // 쌓아둔 히스토리 항목을 조용히 정리(replaceState)만 하고 실제 이동은 링크에 맡김
  function closeLightboxForNavigation() {
    if (lightboxHistoryPushed) {
      history.replaceState(null, "", location.href);
      lightboxHistoryPushed = false;
    }
    lightboxLastKnownHref = null;
    doCloseLightbox();
  }

  window.addEventListener("popstate", () => {
    if (lightbox.classList.contains("open")) {
      // 이 뒤로가기 때문에 뒤이어 발생할 hashchange에서, 스크롤 기억 기능(routeWithMemory)이
      // 끼어들어 지금 여기서 복원할 위치를 덮어써버리면 안 되므로 미리 억제해둠
      suppressRouteWithMemory = true;
      lightboxHistoryPushed = false;
      doCloseLightbox();
      // 뒤로가기는 라이트박스를 열기 전의 원래 위치로 점프해버리는데, 그 사이 스와이프/방향키로
      // 다른 페이지까지 이동했었다면 그 위치를 잃어버림 - 마지막으로 있던 위치로 다시 복원해서
      // 닫기 버튼(X)을 눌렀을 때와 동일하게 "제자리 유지"가 되도록 함
      if (lightboxLastKnownHref && location.href !== lightboxLastKnownHref) {
        // replaceState를 쓰면 뒤로가기로 이미 도착한 그 자리(예: 전시 미리보기) 자체를
        // 덮어써버려서, 그 기록이 통째로 사라져버림 - pushState로 그 위에 새 칸을 쌓아야
        // 지금 도착한 자리가 그대로 보존되고, 나중에 한 번 더 뒤로가기를 눌러도 정상적으로
        // 그 자리로 돌아갈 수 있음
        history.pushState(null, "", lightboxLastKnownHref);
        route();
      }
      // 브라우저의 자동 스크롤 복원(scrollRestoration)이 "라이트박스를 처음 열었을 때의
      // 스크롤 위치"로 되돌려버릴 수 있어서(같은 페이지 안에서 스와이프만 했어도 href가 안
      // 바뀌므로 위 분기를 안 타는 경우가 많음) - href가 같든 다르든 항상 직접 현재 그림
      // 위치로 다시 스크롤함
      requestAnimationFrame(() => {
        syncGridScrollToCurrent();
      });
      lightboxLastKnownHref = null;
      // hashchange는 이 popstate와 같은 틱에서 곧바로 뒤따라오므로, 다음 틱에 가서 해제
      setTimeout(() => { suppressRouteWithMemory = false; }, 0);
    }
  });

  lbClose.addEventListener("click", closeLightbox);
  let captionInteracting = false;
  function startCaptionInteracting() { captionInteracting = true; }
  function endCaptionInteracting() {
    setTimeout(() => { captionInteracting = false; }, 0);
  }
  lbInfo.addEventListener("mousedown", startCaptionInteracting);
  lbInfo.addEventListener("touchstart", startCaptionInteracting, { passive: true });
  window.addEventListener("mouseup", endCaptionInteracting);
  window.addEventListener("touchend", endCaptionInteracting);
  // 캡션을 드래그해서 텍스트를 선택한 뒤, 그 상태를 풀 목적으로 이미지 쪽을 새로
  // 누르면(마우스든 터치든) 즉시 풀리도록 - 지금 막 시작된 별도의 새 동작이므로
  // 이전 드래그의 잔여 상태에 영향받으면 안 됨
  lbImageWrap.addEventListener("mousedown", () => {
    captionInteracting = false;
    const sel = window.getSelection();
    if (sel) sel.removeAllRanges();
  });
  lbImageWrap.addEventListener("touchstart", () => {
    captionInteracting = false;
    const sel = window.getSelection();
    if (sel) sel.removeAllRanges();
  }, { passive: true });

  lbImageWrap.addEventListener("click", (e) => {
    if (captionInteracting) return;
    if (dragMoved) { dragMoved = false; return; } // 드래그였으면 무시(팬 동작)
    if (e.target !== lbImageWrap) return; // 이미지/텍스트 등 자식 요소는 각자의 클릭 핸들러가 처리
    closeLightbox();
  });

  // ============================================================
  // 언어 토글
  // ============================================================
  function setLang(lang) {
    if (lang !== "ko" && lang !== "en") return;
    if (currentLang === lang) return;
    currentLang = lang;
    try { localStorage.setItem("lang", currentLang); } catch (e) {}
    applyStaticI18n();
    // route()는 항상 화면을 꼭대기로 스크롤시키는데, 언어만 바꾸는 거라 지금 보던 위치를
    // 그대로 유지해야 함 - 스크롤 위치를 기억했다가 다시 복원
    const scrollY = window.scrollY;
    route();
    requestAnimationFrame(() => window.scrollTo(0, scrollY));
  }

  const langToggleBtn = document.getElementById("lang-toggle");
  langToggleBtn.addEventListener("click", () => {
    setLang(currentLang === "ko" ? "en" : "ko");
    closeMenu();
  });

  // ============================================================
  // 로컬 저장 유틸 (최근 검색어 / 검색창 임시 텍스트)
  // ============================================================
  function safeGet(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
  }
  function safeSet(key, value) {
    try { localStorage.setItem(key, value); } catch (e) {}
  }

  const RECENT_MAX_AGE_MS = 90 * 24 * 60 * 60 * 1000; // 3개월

  function getRecentSearches() {
    let raw;
    try { raw = JSON.parse(safeGet("recentSearches") || "[]"); } catch (e) { raw = []; }
    const now = Date.now();
    // 예전 버전(문자열만 저장)과의 호환을 위해 마이그레이션하면서 3개월 지난 항목은 걸러냄
    return raw
      .map((item) => (typeof item === "string") ? { q: item, ts: now } : item)
      .filter((item) => item && item.q && (now - item.ts) < RECENT_MAX_AGE_MS);
  }
  function addRecentSearch(q) {
    if (!q) return;
    const list = getRecentSearches().filter((x) => x.q !== q);
    list.unshift({ q, ts: Date.now() });
    safeSet("recentSearches", JSON.stringify(list)); // 개수 상한 없음
  }
  function removeRecentSearch(q) {
    safeSet("recentSearches", JSON.stringify(getRecentSearches().filter((x) => x.q !== q)));
  }
  function clearRecentSearches() { safeSet("recentSearches", "[]"); }

  function getSearchDraft() { return safeGet("searchDraft") || ""; }
  function setSearchDraft(v) { safeSet("searchDraft", v || ""); }

  // ============================================================
  // 검색 오버레이
  // ============================================================
  const searchOverlay = document.getElementById("search-overlay");
  const searchPanel = document.getElementById("search-panel");
  const overlaySearchForm = document.getElementById("overlay-search-form");
  const overlaySearchInput = document.getElementById("overlay-search-input");
  const recentSearchesEl = document.getElementById("recent-searches");
  const searchTrigger = document.getElementById("search-trigger");

  let recentCursorIndex = -1;

  function resetRecentCursor() {
    recentCursorIndex = -1;
    document.querySelectorAll(".recent-item.recent-cursor").forEach((el) => el.classList.remove("recent-cursor"));
  }

  const RECENT_VISIBLE = 5;

  // 지금 타이핑 중인 텍스트와 얼마나 가까운지로 최근 검색어 순위를 다시 매김
  // (완전일치 > 접두어일치 > 포함일치, 동점이면 최신순)
  function rankRecentSearches(query, list) {
    if (!query) return list;
    const q = query.toLowerCase();
    const scored = [];
    list.forEach((item) => {
      const ql = item.q.toLowerCase();
      let score = -1;
      if (ql === q) score = 0;
      else if (ql.startsWith(q)) score = 1;
      else if (ql.includes(q)) score = 2;
      if (score !== -1) scored.push({ item, score });
    });
    scored.sort((a, b) => a.score - b.score || b.item.ts - a.item.ts);
    return scored.map((x) => x.item);
  }

  function inputForRecentContainer(container) {
    return container === recentSearchesEl ? overlaySearchInput : document.getElementById("search-input");
  }

  function renderRecentSearches(container, query) {
    if (!container) return;
    const all = getRecentSearches();
    const ranked = rankRecentSearches(query, all);

    if (!ranked.length) {
      container.innerHTML = `<p class="recent-empty">${all.length && query ? ui("searchNone")(query) : ui("recentSearchesEmpty")}</p>`;
      return;
    }
    const shown = ranked.slice(0, RECENT_VISIBLE);
    const rows = shown.map(({ q }) => `
      <li class="recent-item">
        <a href="#/search/${encodeURIComponent(q)}" class="recent-item-link">${escapeHtml(q)}</a>
        <button type="button" class="recent-item-remove" data-q="${escapeHtml(q)}" aria-label="remove">✕</button>
      </li>`).join("");
    // 검색어를 타이핑 중일 땐 "더보기"를 굳이 보여주지 않음 (관련도순 미리보기 목적이라)
    const moreLink = (!query && all.length > RECENT_VISIBLE)
      ? `<a href="#/recent-searches" class="recent-more">${ui("more")}</a>`
      : "";
    container.innerHTML = `
      <div class="recent-head">
        <span class="recent-label">${ui("recentSearches")}</span>
        <button type="button" class="recent-clear">${ui("clearRecent")}</button>
      </div>
      <ul class="recent-list">${rows}</ul>
      ${moreLink}`;

    container.querySelectorAll(".recent-item-remove").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        removeRecentSearch(btn.dataset.q);
        resetRecentCursor();
        const input = inputForRecentContainer(container);
        renderRecentSearches(container, input ? input.value : "");
      });
    });
    container.querySelectorAll(".recent-item-link, .recent-more").forEach((a) => {
      a.addEventListener("click", () => closeSearchOverlay());
    });
    const clearBtn = container.querySelector(".recent-clear");
    if (clearBtn) clearBtn.addEventListener("click", () => {
      clearRecentSearches();
      resetRecentCursor();
      renderRecentSearches(container, "");
    });
  }

  function isSearchRoute() {
    return (location.hash.replace(/^#/, "").split("/").filter(Boolean)[0] || "") === "search";
  }

  function positionSearchPanel() {
    const rect = searchTrigger.getBoundingClientRect();
    const right = Math.max(16, window.innerWidth - rect.right);
    searchPanel.style.right = `${right}px`;
    searchPanel.style.top = `${rect.bottom + 14}px`;
  }

  function openSearchOverlay() {
    positionSearchPanel();
    overlaySearchInput.value = getSearchDraft();
    resetRecentCursor();
    renderRecentSearches(recentSearchesEl, overlaySearchInput.value);
    searchOverlay.classList.add("open");
    requestAnimationFrame(() => overlaySearchInput.focus());
  }

  function closeSearchOverlay() {
    searchOverlay.classList.remove("open");
    resetRecentCursor();
    // 포커스가 검색창에 남아있으면, 나중에 백스페이스를 눌러도 "빈 검색창에서 지우기"로
    // 처리돼서 뒤로가기가 조용히 씹히는 것처럼 보임 - 닫을 때 확실히 포커스를 풀어줌
    if (overlaySearchInput && document.activeElement === overlaySearchInput) overlaySearchInput.blur();
  }

  function isSearchOverlayOpen() {
    return searchOverlay.classList.contains("open");
  }

  function activateSearch() {
    if (isSearchRoute()) {
      const pageInput = document.getElementById("search-input");
      if (pageInput) { pageInput.focus(); return; }
    }
    openSearchOverlay();
  }

  window.addEventListener("resize", () => { if (isSearchOverlayOpen()) positionSearchPanel(); });

  // ============================================================
  // 삼선(햄버거) 메뉴 - 700px 미만에서 CV/Works/Text/Contact/English를 담는 드롭다운
  // ============================================================
  const menuTrigger = document.getElementById("menu-trigger");
  const siteNav = document.getElementById("site-nav");
  let menuHistoryPushed = false;

  function isMenuOpen() { return siteNav.classList.contains("open"); }
  function closeMenu() {
    siteNav.classList.remove("open");
    if (menuHistoryPushed) {
      menuHistoryPushed = false;
      history.replaceState(null, "", location.href);
    }
  }
  function openMenu() {
    siteNav.classList.add("open");
    if (!menuHistoryPushed) {
      history.pushState({ menuOpen: true }, "");
      menuHistoryPushed = true;
    }
  }
  // 메뉴가 열려있을 때 뒤로가기를 누르면, 페이지 이동 대신 메뉴만 닫히도록
  window.addEventListener("popstate", () => {
    if (isMenuOpen()) {
      menuHistoryPushed = false;
      siteNav.classList.remove("open");
    }
  });

  menuTrigger.addEventListener("click", () => {
    if (isMenuOpen()) closeMenu(); else { openMenu(); closeSearchOverlay(); }
  });

  siteNav.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeMenu));

  document.addEventListener("click", (e) => {
    if (!isMenuOpen()) return;
    if (siteNav.contains(e.target) || menuTrigger.contains(e.target)) return;
    closeMenu();
  });

  searchTrigger.addEventListener("click", () => {
    if (isSearchOverlayOpen()) closeSearchOverlay();
    else { openSearchOverlay(); closeMenu(); }
  });

  searchOverlay.addEventListener("click", (e) => {
    if (e.target === searchOverlay) closeSearchOverlay();
  });

  overlaySearchInput.addEventListener("input", () => {
    setSearchDraft(overlaySearchInput.value);
    resetRecentCursor();
    renderRecentSearches(recentSearchesEl, overlaySearchInput.value);
  });

  overlaySearchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const val = overlaySearchInput.value.trim();
    if (!val) return;
    setSearchDraft("");
    closeSearchOverlay();
    location.hash = `#/search/${encodeURIComponent(val)}`;
  });

  // 최근 검색어 목록에서 위/아래 화살표로 항목을 훑어볼 수 있게 함
  // (오버레이의 입력창, Search 페이지의 입력창 둘 다 지원)
  function getActiveRecentContext() {
    const active = document.activeElement;
    if (active === overlaySearchInput && isSearchOverlayOpen()) {
      return { input: overlaySearchInput, container: recentSearchesEl };
    }
    const pageInput = document.getElementById("search-input");
    if (pageInput && active === pageInput) {
      return { input: pageInput, container: document.getElementById("page-recent-searches") };
    }
    return null;
  }

  function handleRecentArrow(e) {
    if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return false;
    const ctx = getActiveRecentContext();
    if (!ctx || !ctx.container) return false;
    const items = Array.from(ctx.container.querySelectorAll(".recent-item-link"));
    if (!items.length) return false;

    e.preventDefault();
    if (e.key === "ArrowDown") {
      recentCursorIndex = Math.min(recentCursorIndex + 1, items.length - 1);
    } else {
      recentCursorIndex = Math.max(recentCursorIndex - 1, -1);
    }
    items.forEach((el, i) => {
      el.closest(".recent-item").classList.toggle("recent-cursor", i === recentCursorIndex);
    });
    ctx.input.value = recentCursorIndex === -1 ? getSearchDraft() : items[recentCursorIndex].textContent;
    return true;
  }

  // ============================================================
  // 단축키 안내 패널
  // ============================================================
  const shortcutsPanel = document.getElementById("shortcuts-panel");
  const shortcutsList = document.getElementById("shortcuts-list");
  const shortcutsClose = document.getElementById("shortcuts-close");

  function shortcutRow(keys, labelKey) {
    const keyHtml = keys.map((k) => `<kbd>${k}</kbd>`).join(" ");
    return `<li><span class="shortcut-keys">${keyHtml}</span><span>${ui(labelKey)}</span></li>`;
  }

  function renderShortcutsPanel() {
    shortcutsList.innerHTML = [
      shortcutRow(["/", "s"], "shortcutSearch"),
      shortcutRow(["w"], "shortcutWorks"),
      shortcutRow(["c"], "shortcutCV"),
      shortcutRow(["t"], "shortcutText"),
      shortcutRow(["n"], "shortcutContact"),
      shortcutRow(["e"], "shortcutEnglish"),
      shortcutRow(["k"], "shortcutKorean"),
      shortcutRow(["←", "→", "↑", "↓"], "shortcutNav"),
      shortcutRow(["Enter"], "shortcutEnter"),
      shortcutRow(["Backspace"], "shortcutBack"),
      shortcutRow(["Esc"], "shortcutEsc"),
      shortcutRow(["?"], "shortcutHelp")
    ].join("");
  }

  function isShortcutsPanelOpen() { return shortcutsPanel.classList.contains("open"); }
  function openShortcutsPanel() { renderShortcutsPanel(); shortcutsPanel.classList.add("open"); }
  function closeShortcutsPanel() { shortcutsPanel.classList.remove("open"); }
  function toggleShortcutsPanel() { isShortcutsPanelOpen() ? closeShortcutsPanel() : openShortcutsPanel(); }

  shortcutsClose.addEventListener("click", closeShortcutsPanel);
  shortcutsPanel.addEventListener("click", (e) => { if (e.target === shortcutsPanel) closeShortcutsPanel(); });

  // ============================================================
  // 방향키 커서 이동
  // 페이지에 있는 모든 이동 가능한 항목(리스트/그리드/참조카드 등)을
  // 한 번에 모아서, 실제 화면 좌표 기준으로 4방향 이동한다.
  // CV의 개인전/그룹전/비평처럼 서로 다른 목록이어도, 전시 상세의
  // 서문/전경/작업/평문처럼 리스트+그리드가 섞여 있어도 그대로 연결된다.
  // ============================================================
  function isTypingTarget(el) {
    if (!el) return false;
    const tag = el.tagName;
    return tag === "INPUT" || tag === "TEXTAREA" || el.isContentEditable;
  }

  const NAV_ITEM_SELECTOR = ".cv-link, .cat-item a, .text-item a, .ref-item a, .search-item a, .card[data-work], .card[data-install]";

  function collectNavItems() {
    return Array.from(app.querySelectorAll(NAV_ITEM_SELECTOR));
  }

  // 마우스로 항목에 올라가면 그 항목이 곧 "키보드로 선택된 상태"가 되도록 통일.
  // 호버 표시(캡션 등)는 네이티브 :hover 대신 JS가 직접 붙이고 떼는 .js-hover 클래스로
  // 관리함 - 네이티브 :hover는 마우스가 실제로 움직이기 전까진 브라우저가 즉시 안 풀어주는
  // 경우가 있어서(pointer-events만으로는 불안정), 방향키를 누르면 확실하게 꺼지도록 함
  let currentJsHoverEl = null;

  function clearJsHover() {
    if (currentJsHoverEl) {
      currentJsHoverEl.classList.remove("js-hover");
      currentJsHoverEl = null;
    }
  }

  document.addEventListener("mouseover", (e) => {
    // 방향키로 이동한 직후엔, 화면이 스크롤되면서 가만히 있는 마우스 커서 아래에 다른
    // 요소가 새로 오는 경우가 있는데, 이때도 mouseover가 발생해서 포커스를 다시
    // 뺏어가면 안 됨 - 마우스가 실제로 움직이기 전까진 호버로 포커스 이동 안 함
    if (document.body.classList.contains("keyboard-nav-active")) return;
    const el = e.target.closest(NAV_ITEM_SELECTOR);
    if (!el) return;
    if (currentJsHoverEl && currentJsHoverEl !== el) currentJsHoverEl.classList.remove("js-hover");
    el.classList.add("js-hover");
    currentJsHoverEl = el;
    if (el !== document.activeElement) el.focus({ preventScroll: true });
  });

  document.addEventListener("mouseout", (e) => {
    const el = e.target.closest(NAV_ITEM_SELECTOR);
    if (el && el === currentJsHoverEl && !el.contains(e.relatedTarget)) {
      clearJsHover();
      if (document.activeElement === el) el.blur();
    }
  });

  // 키보드로 이동하는 순간, 마우스가 가리키고 있던 요소의 호버 표시를 확실하게 끔
  document.addEventListener("mousemove", () => {
    document.body.classList.remove("keyboard-nav-active");
  });

  // 현재 아이템과 같은 "행"에 몇 개가 있는지 세어 그 지점의 실제 칸 너비를 구함
  // (1이면 세로 리스트, N이면 N칸짜리 그리드 행)
  // top이 아니라 세로 중심좌표로 비교 - 그림이 원본 비율 그대로라 높이가 제각각이고
  // align-items:center로 가운데 정렬돼있어서, top만 보면 같은 줄인데도 다르게 잡힐 수 있음
  function getRowWidthAt(items, index) {
    const el = items[index];
    // 그리드 안의 카드면 실제 CSS 열 개수를 그대로 사용 - 전시전경처럼 마지막 줄이 꽉 안 찬
    // 그리드에서도 정확한 "칸 너비"를 알 수 있어서, 위/아래 이동이 양방향으로 대칭적으로 동작함
    const grid = el.closest(".grid");
    if (grid) {
      const cols = getComputedStyle(grid).gridTemplateColumns.split(" ").filter(Boolean);
      if (cols.length) return Math.max(1, cols.length);
    }
    const rect = el.getBoundingClientRect();
    const centerY = Math.round(rect.top + rect.height / 2);
    let count = 0;
    for (const item of items) {
      const r = item.getBoundingClientRect();
      if (Math.round(r.top + r.height / 2) === centerY) count++;
    }
    return Math.max(1, count);
  }

  // 워드프로세서 방식: 오른쪽 끝이면 자연스럽게 다음 줄 첫 칸(= 순서상 다음 항목)으로,
  // 더 내려갈 줄이 없으면 맨 마지막 항목으로, 더 올라갈 줄이 없으면 맨 처음 항목으로
  function nextNavIndex(items, currentIndex, key) {
    const total = items.length;
    const rowWidth = getRowWidthAt(items, currentIndex);
    let target = currentIndex;
    if (key === "ArrowRight") target = currentIndex + 1;
    else if (key === "ArrowLeft") target = currentIndex - 1;
    else if (key === "ArrowDown") {
      target = currentIndex + rowWidth;
      if (target > total - 1) target = total - 1;
    } else if (key === "ArrowUp") {
      target = currentIndex - rowWidth;
      if (target < 0) target = 0;
    }
    target = Math.max(0, Math.min(total - 1, target));

    // 서로 다른 "컨테이너"(그리드 하나, 또는 목록 하나) 사이를 넘어갈 때는 산술 계산된
    // 위치가 아니라 "바로 다음/이전" 컨테이너의 첫 항목으로 진입하도록 함 - 산술 계산은
    // 중간 컨테이너(예: 작업)를 통째로 건너뛸 수 있어서, 계산된 위치가 아니라 한 칸씩
    // 순서대로 탐색해서 현재와 다른 컨테이너를 처음 만나는 지점을 찾음
    if (key === "ArrowDown" || key === "ArrowUp") {
      const currentEl = items[currentIndex];
      const currentContainer = currentEl.closest(".grid, ul");
      const targetEl = items[target];
      const targetContainer = targetEl && targetEl.closest(".grid, ul");
      if (target !== currentIndex && targetContainer && targetContainer !== currentContainer) {
        const direction = key === "ArrowDown" ? 1 : -1;
        let searchIndex = currentIndex;
        let nextContainer = null;
        while (true) {
          searchIndex += direction;
          if (searchIndex < 0 || searchIndex >= total) break;
          const c = items[searchIndex].closest(".grid, ul");
          if (c && c !== currentContainer) { nextContainer = c; break; }
        }
        if (nextContainer) {
          const firstInTarget = items.find((el) => nextContainer.contains(el));
          if (firstInTarget) return items.indexOf(firstInTarget);
        }
      }
    }

    return target;
  }

  // 갤러리(카드) 목록에서 페이지의 끝에 도달한 뒤 같은 방향으로 더 누르면, 다음/이전
  // 페이지로 이동하고 그 페이지의 첫/마지막 카드에 포커스를 예약해둠
  let pendingKeyboardEdgeFocus = null;

  function applyPendingKeyboardEdgeFocus() {
    if (!pendingKeyboardEdgeFocus) return;
    const info = typeof pendingKeyboardEdgeFocus === "string" ? { edge: pendingKeyboardEdgeFocus } : pendingKeyboardEdgeFocus;
    pendingKeyboardEdgeFocus = null;
    const selector = info.kind === "installs" ? ".card[data-install]"
      : info.kind === "works" ? ".card[data-work]"
      : ".card[data-work], .card[data-install]";
    const cards = Array.from(app.querySelectorAll(selector));
    if (!cards.length) return;
    let target;
    if (info.index != null) {
      target = cards.find((c) => {
        const idxAttr = c.dataset.workIndex != null ? c.dataset.workIndex : c.dataset.install;
        return Number(idxAttr) === info.index;
      }) || cards[0];
    } else {
      target = info.edge === "first" ? cards[0] : cards[cards.length - 1];
    }
    target.focus({ preventScroll: true });
    requestAnimationFrame(() => scrollElementToCenter(target));
  }

  // 지금 화면이 페이지네이션되는 갤러리(Works 카테고리 리프 또는 전시 더보기)인지,
  // 맞다면 기준 경로/현재 쪽/전체 쪽수를 계산 - 키보드 경계 이동과 스와이프 페이지 넘김이 공용으로 씀
  function getCurrentGalleryPageInfo() {
    const segments = location.hash.replace(/^#/, "").split("/").filter(Boolean);
    if (segments[0] === "works") {
      const { page, rest } = extractPage(segments.slice(1));
      const { node } = resolveTreePath(WORK_CATEGORIES, rest);
      if (node && node.works && node.works.length) {
        const totalPages = Math.max(1, Math.ceil(node.works.length / WORKS_PER_PAGE));
        return { baseHref: `#/works/${rest.join("/")}`, curPage: Math.min(Math.max(1, page || 1), totalPages), totalPages };
      }
    } else if (segments[0] === "exhibition" && (segments[2] === "installs" || segments[2] === "works")) {
      const ex = EXHIBITIONS.find((e) => e.id === segments[1]);
      if (ex) {
        const all = segments[2] === "installs" ? (ex.installationImages || []) : (ex.works || []);
        if (all.length) {
          const totalPages = Math.max(1, Math.ceil(all.length / WORKS_PER_PAGE));
          const { page } = extractPage(segments.slice(3));
          return {
            baseHref: `#/exhibition/${segments[1]}/${segments[2]}`,
            curPage: Math.min(Math.max(1, page || 1), totalPages),
            totalPages,
            exhibitionId: segments[1]
          };
        }
      }
    }
    return null;
  }

  function galleryPageHref(baseHref, page) {
    return page > 1 ? `${baseHref}/page-${page}` : baseHref;
  }

  let pendingGalleryEnterDir = null;

  function applyPendingGalleryEnterAnimation() {
    if (pendingGalleryEnterDir == null) return;
    const dir = pendingGalleryEnterDir;
    pendingGalleryEnterDir = null;
    const unit = document.querySelector(".gallery-swipe-unit");
    if (!unit) return;
    unit.style.transition = "none";
    unit.style.transform = `translateX(${dir * window.innerWidth}px)`;
    void unit.offsetWidth; // 강제 리플로우 - 트랜지션 없이 초기 위치를 먼저 확실히 반영시킴
    requestAnimationFrame(() => {
      unit.style.transition = "transform 0.2s ease";
      unit.style.transform = "";
      setTimeout(() => { unit.style.transition = ""; }, 220);
    });
  }

  // 갤러리 페이지 자체를 손가락으로 좌우로 밀어서 다음/이전 페이지로 넘어감(라이트박스는 안 켜져 있을 때만)
  // 그리드와 페이저를 각각 따로 옮기면 서로 위치/너비가 달라서 속도가 어긋나 보일 수 있으므로,
  // 렌더링 단계에서 둘을 .gallery-swipe-unit 하나로 묶어두고 이 컨테이너 하나만 옮김
  (function setupGallerySwipe() {
    let startX = 0, startY = 0, active = false, swiping = false, unit = null;
    // 전환이 확정된 순간부터 완전히 끝날 때까지는 새 터치를 아예 시작하지 못하게 막음
    // (도중에 터치하면 애니메이션이 끊기고 원래 화면으로 되돌아가 보이던 문제 방지)
    let transitioning = false;

    function getActiveUnit() {
      if (lightbox.classList.contains("open")) return null;
      if (!document.body.classList.contains("gallery-page")) return null;
      if (!getCurrentGalleryPageInfo()) return null; // 페이지네이션이 없는 화면(전시 미리보기 등)은 제외
      return document.querySelector(".gallery-swipe-unit");
    }

    let startTime = 0;

    document.addEventListener("touchstart", (e) => {
      if (transitioning) { active = false; return; }
      if (e.touches.length !== 1) { active = false; return; }
      unit = getActiveUnit();
      if (!unit) { active = false; return; }
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      startTime = Date.now();
      active = true;
      swiping = false;
    }, { passive: true });

    document.addEventListener("touchmove", (e) => {
      if (!active || e.touches.length !== 1 || !unit) return;
      const dx = e.touches[0].clientX - startX;
      const dy = e.touches[0].clientY - startY;
      if (!swiping) {
        // 아직 스와이프로 확정되기 전에만 각도를 따짐(대략 수평 기준 30도 이내) - 확정된
        // 뒤에는 다시 안 따짐(손 떨림 등으로 순간적으로 각도가 벗어날 때마다 업데이트가
        // 씹혀서 멈췄다가 나중에 한꺼번에 반영되며 순간이동하는 문제 방지)
        if (Math.abs(dx) <= Math.abs(dy) * 1.73) return;
        swiping = true;
      }
      unit.style.transition = "none";
      unit.style.transform = `translateX(${dx}px)`;
    }, { passive: true });

    document.addEventListener("touchend", (e) => {
      if (!active) return;
      active = false;
      if (!swiping || !unit) return;
      swiping = false;
      const touch = e.changedTouches[0];
      const dx = touch.clientX - startX;
      const elapsed = Math.max(1, Date.now() - startTime);
      const velocity = Math.abs(dx) / elapsed;
      const info = getCurrentGalleryPageInfo();
      // 충분히 밀었거나(거리), 짧아도 빠르게 휙 넘겼으면(속도) 커밋
      const committed = Math.abs(dx) > 70 || (Math.abs(dx) > 20 && velocity > 0.5);

      if (committed && info) {
        const dir = dx < 0 ? 1 : -1; // 1 = 다음 페이지, -1 = 이전 페이지
        const targetPage = info.curPage + dir;
        if (targetPage >= 1 && targetPage <= info.totalPages) {
          transitioning = true;
          unit.style.transition = "transform 0.2s ease";
          unit.style.transform = `translateX(${dir * -window.innerWidth}px)`;
          pendingGalleryEnterDir = dir;
          setTimeout(() => { location.hash = galleryPageHref(info.baseHref, targetPage); }, 190);
          setTimeout(() => { transitioning = false; }, 300); // 나가기+대기+들어오기가 실제로 끝나는 시점 기준
          return;
        }
        if (dir < 0 && info.curPage === 1 && info.exhibitionId) {
          // 더보기 첫 페이지에서 더 뒤로 밀면 전시 개요 페이지로 돌아감
          const kind = info.baseHref.split("/").pop();
          pendingKeyboardEdgeFocus = { edge: "first", kind };
          transitioning = true;
          unit.style.transition = "transform 0.2s ease";
          unit.style.transform = `translateX(${window.innerWidth}px)`;
          setTimeout(() => { location.hash = `#/exhibition/${info.exhibitionId}`; }, 190);
          setTimeout(() => { transitioning = false; }, 250);
          return;
        }
      }
      // 덜 밀었거나 더 갈 페이지가 없으면 제자리로
      unit.style.transition = "transform 0.2s ease";
      unit.style.transform = "";
    });
  })();

  // 더 갈 다음/이전 페이지가 없을 때(=이미 맨 끝) 좌/우로 한 번 더 누르면, 같은 페이지 안에서
  // 도는 게 아니라 진짜 1페이지 첫 그림 / 마지막 페이지 마지막 그림으로 순환
  function tryWrapAcrossPages(key) {
    const goingForward = key === "ArrowRight" || key === "ArrowDown";
    const goingBackward = key === "ArrowLeft" || key === "ArrowUp";
    if (!goingForward && !goingBackward) return false;
    const info = getCurrentGalleryPageInfo();
    if (!info || info.totalPages <= 1) return false;
    if (goingForward && info.curPage >= info.totalPages) {
      pendingKeyboardEdgeFocus = "first";
      location.hash = galleryPageHref(info.baseHref, 1);
      return true;
    }
    if (goingBackward && info.curPage <= 1) {
      pendingKeyboardEdgeFocus = "last";
      location.hash = galleryPageHref(info.baseHref, info.totalPages);
      return true;
    }
    return false;
  }

  function tryCrossPageKeyboardNav(key) {
    const goingForward = key === "ArrowRight" || key === "ArrowDown";
    const goingBackward = key === "ArrowLeft" || key === "ArrowUp";
    if (!goingForward && !goingBackward) return false;

    const info = getCurrentGalleryPageInfo();
    if (!info) return false;
    const { baseHref, curPage, totalPages, exhibitionId } = info;

    if (goingForward && curPage < totalPages) {
      pendingKeyboardEdgeFocus = "first";
      location.hash = galleryPageHref(baseHref, curPage + 1);
      return true;
    } else if (goingBackward && curPage > 1) {
      pendingKeyboardEdgeFocus = "last";
      location.hash = galleryPageHref(baseHref, curPage - 1);
      return true;
    } else if (goingBackward && curPage === 1 && exhibitionId && (key === "ArrowLeft" || key === "ArrowUp")) {
      // 더보기 첫 페이지에서 더 뒤로 가면, 전시 미리보기(개요) 페이지로 돌아감
      const segments = location.hash.replace(/^#/, "").split("/").filter(Boolean);
      pendingKeyboardEdgeFocus = { edge: "first", kind: segments[2] };
      location.hash = `#/exhibition/${exhibitionId}`;
      return true;
    }
    return false;
  }

  // 전시 미리보기 페이지에서, 전경/작업 섹션의 마지막 카드에서 우측을 누르면
  // 다음 항목(글 등)으로 순서상 이동하는 대신 더보기 페이지로 넘어감
  function tryExhibitionPreviewToMore(current, key) {
    if (key !== "ArrowRight") return false;
    const segments = location.hash.replace(/^#/, "").split("/").filter(Boolean);
    if (segments[0] !== "exhibition" || segments[2]) return false; // 더보기 자체가 아니라 개요 페이지여야 함
    const grid = current.closest(".grid");
    if (!grid) return false;
    const cardsInGrid = Array.from(grid.querySelectorAll(".card[data-work], .card[data-install]"));
    if (!cardsInGrid.length || current !== cardsInGrid[cardsInGrid.length - 1]) return false;
    const kind = current.hasAttribute("data-install") ? "installs" : "works";
    const ex = EXHIBITIONS.find((e) => e.id === segments[1]);
    const all = ex ? (kind === "installs" ? (ex.installationImages || []) : (ex.works || [])) : [];
    if (all.length <= EXHIBITION_PREVIEW_COUNT) return false; // 더 볼 게 없으면 이동 안 함
    pendingKeyboardEdgeFocus = { index: EXHIBITION_PREVIEW_COUNT, kind };
    location.hash = `#/exhibition/${segments[1]}/${kind}`;
    return true;
  }

  // 실제 브라우저 포커스(document.activeElement)는 마우스가 벗어나면 풀리지만(시각적으로
  // "선택 해제"되어 보이게 하려고 일부러 그렇게 함), 방향키를 눌렀을 때 "어디서부터
  // 이어갈지"는 별도로 기억해둠 - 그래야 마우스를 뗀 다음 방향키를 눌러도 처음(1번)으로
  // 리셋되지 않고, 마지막으로 가리켰던 위치를 기준으로 자연스럽게 이어감
  let lastKnownCursorItem = null;
  document.addEventListener("focusin", (e) => {
    const el = e.target.closest ? e.target.closest(NAV_ITEM_SELECTOR) : null;
    if (el) lastKnownCursorItem = el;
  });

  function handleNavArrow(key) {
    document.body.classList.add("keyboard-nav-active");
    clearJsHover();
    const items = collectNavItems();
    if (!items.length) return;
    let current = items.includes(document.activeElement) ? document.activeElement : null;
    if (!current && items.includes(lastKnownCursorItem)) current = lastKnownCursorItem;

    if (!current) {
      items[0].focus();
      scrollElementToCenter(items[0], true);
      return;
    }

    if (current.classList.contains("card") && tryExhibitionPreviewToMore(current, key)) return;

    const currentIndex = items.indexOf(current);
    const targetIndex = nextNavIndex(items, currentIndex, key);
    if (targetIndex !== currentIndex) {
      items[targetIndex].focus();
      scrollElementToCenter(items[targetIndex], true);
      return;
    }

    if (current.classList.contains("card") && tryCrossPageKeyboardNav(key)) return;
    if (current.classList.contains("card") && tryWrapAcrossPages(key)) return;

    // 더 이상 갈 곳(다음 페이지 등)이 없을 때만 맨 끝↔맨 처음으로 순환
    // (라이트박스의 마지막장→첫장 순환과 통일된 느낌)
    if (key === "ArrowRight" || key === "ArrowDown") {
      items[0].focus();
      scrollElementToCenter(items[0], true);
    } else if (key === "ArrowLeft" || key === "ArrowUp") {
      const last = items[items.length - 1];
      last.focus();
      scrollElementToCenter(last, true);
    }
  }

  // ============================================================
  // 전역 키보드 단축키
  // ============================================================
  window.addEventListener("keydown", (e) => {
    if (e.ctrlKey || e.metaKey || e.altKey) return;

    // Escape: 열려있는 오버레이/패널/라이트박스를 우선순위대로 닫음 (입력 중이어도 동작)
    if (e.key === "Escape") {
      if (isSearchOverlayOpen()) { closeSearchOverlay(); return; }
      if (isShortcutsPanelOpen()) { closeShortcutsPanel(); return; }
      if (isMenuOpen()) { closeMenu(); return; }
      const pageRecent = document.getElementById("page-recent-searches");
      if (pageRecent && pageRecent.classList.contains("open")) {
        pageRecent.classList.remove("open");
        resetRecentCursor();
        document.activeElement.blur();
        return;
      }
      if (lightbox.classList.contains("open")) { closeLightbox(); return; }
      if (!isTypingTarget(document.activeElement)) { history.back(); }
      return;
    }

    const typing = isTypingTarget(document.activeElement);

    // 라이트박스가 켜져있을 때는 Tab/Shift+Tab의 원래 동작(다음 포커스 대상으로 이동)을
    // 막고, 대신 부속 이미지 그룹은 건너뛰고 바로 다음/이전 그리드 작품(대표 이미지)으로
    // 이동하는 용도로 씀 - 지금 부속 이미지를 보고 있어도 대표 이미지에서 누른 것처럼 동작
    if (e.key === "Tab" && lightbox.classList.contains("open") && !typing) {
      e.preventDefault();
      showLightboxAt(lightboxIndex + (e.shiftKey ? -1 : 1));
      return;
    }

    // 방향키: 입력 중이면 최근 검색어 훑어보기, 라이트박스 열려있으면 이전/다음 작품,
    // 그 외엔 페이지 전체를 하나로 잇는 커서 이동
    if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(e.key)) {
      if (typing) { handleRecentArrow(e); return; }
      if (lightbox.classList.contains("open")) {
        if (e.key === "ArrowLeft") { e.preventDefault(); stepLightboxHorizontal(-1); }
        else if (e.key === "ArrowRight") { e.preventDefault(); stepLightboxHorizontal(1); }
        else if (e.key === "ArrowUp") { e.preventDefault(); showLightboxByRow(-1); }
        else if (e.key === "ArrowDown") { e.preventDefault(); showLightboxByRow(1); }
        return;
      }
      if (isSearchOverlayOpen()) return;
      e.preventDefault();
      handleNavArrow(e.key);
      return;
    }

    if (e.key === "Enter" && !typing) {
      if (lightbox.classList.contains("open")) return; // 라이트박스 안에서는 배경 카드를 다시 클릭하면 안 됨
      const el = document.activeElement;
      if (el && el.classList && el.classList.contains("card")) { e.preventDefault(); el.click(); }
      return;
    }

    if (e.key === "Backspace" && !typing) {
      if (lightbox.classList.contains("open")) { e.preventDefault(); closeLightbox(); return; }
      history.back();
      return;
    }

    if (typing) return;

    if (e.key === "?") { e.preventDefault(); toggleShortcutsPanel(); return; }
    if (e.key === "/" || e.key.toLowerCase() === "s") { e.preventDefault(); activateSearch(); return; }

    const k = e.key.toLowerCase();
    if (k === "w") { location.hash = "#/works"; return; }
    if (k === "c") { location.hash = "#/"; return; }
    if (k === "t") { location.hash = "#/text"; return; }
    if (k === "n") { location.hash = "#/contact"; return; }
    if (k === "e") { setLang("en"); return; }
    if (k === "k") { setLang("ko"); return; }
  });

  // ============================================================
  // 라우터
  // ============================================================
  // 페이지별로 "마지막으로 있던 스크롤 위치 + 키보드로 선택했던 항목"을 기억해뒀다가,
  // 같은 페이지로 다시 돌아오면 복원함(라이트박스는 DOM이 안 바뀌어서 이미 자연스럽게
  // 포커스가 유지되므로 별도 처리 불필요 - 이건 실제 페이지 이동/뒤로가기 케이스용)
  const pageState = new Map();
  let currentPageHash = location.hash || "#/";

  function getNavItemIdentifier(el) {
    if (!el) return null;
    if (el.tagName === "A" && el.getAttribute("href")) return "href:" + el.getAttribute("href");
    if (el.dataset && el.dataset.work != null) return "work:" + el.dataset.work + ":" + (el.dataset.workIndex || "");
    if (el.dataset && el.dataset.install != null) return "install:" + el.dataset.install;
    return null;
  }

  function findNavItemByIdentifier(id) {
    if (!id) return null;
    const items = collectNavItems();
    return items.find((el) => getNavItemIdentifier(el) === id) || null;
  }

  function saveCurrentPageState() {
    const items = collectNavItems();
    const focusEl = items.includes(document.activeElement) ? document.activeElement : null;
    pageState.set(currentPageHash, { scrollY: window.scrollY, focusId: getNavItemIdentifier(focusEl) });
  }

  function restorePageState() {
    const saved = pageState.get(currentPageHash);
    if (!saved) { window.scrollTo(0, 0); return; }
    requestAnimationFrame(() => {
      window.scrollTo(0, saved.scrollY);
      if (saved.focusId) {
        const el = findNavItemByIdentifier(saved.focusId);
        if (el) el.focus({ preventScroll: true });
      }
    });
  }

  function route() {
    routeInner();
  }

  // 실제 사용자가 페이지를 옮겨다닐 때만(해시 변경, 최초 로드) 스크롤/커서를 기억+복원함 -
  // 라이트박스가 내부적으로 배경 화면만 동기화하려고 route()를 직접 호출하는 경우엔
  // 이 기억 기능이 끼어들면 라이트박스 자체 스크롤 동기화랑 충돌하므로 거기엔 안 씀
  // 라이트박스가 자기 popstate 핸들러에서 이미 "정확한 위치로 복원"까지 다 처리 중인
  // 뒤로가기라면, 그 뒤에 따라오는 hashchange(같은 뒤로가기 때문에 같이 발생함)에서
  // 이 스크롤 기억 기능이 또 끼어들어 엉뚱한 페이지 상태로 덮어쓰면 안 되므로 억제함
  let suppressRouteWithMemory = false;

  function routeWithMemory() {
    if (suppressRouteWithMemory) return;
    // 검색 결과 클릭 등으로 이미 특정 위치로 스크롤/강조가 예약돼있으면, 그쪽이 우선이므로
    // 여기서 스크롤을 덮어쓰지 않음(routeInner가 이 예약들을 소비하기 전에 미리 확인해둠)
    const hasExplicitPending = !!(pendingWorkFocus || pendingPostFocus || pendingBodySearchHighlight || pendingPostTitleHighlight || pendingKeyboardEdgeFocus);
    saveCurrentPageState();
    currentPageHash = location.hash || "#/";
    route();
    if (!hasExplicitPending) restorePageState();
  }

  function routeInner() {
    const segments = location.hash.replace(/^#/, "").split("/").filter(Boolean);
    document.body.classList.remove("gallery-page");

    if (segments.length === 0) return renderCV();
    if (segments[0] === "works") {
      return segments.length === 1 ? renderWorksIndex() : renderWorksCategory(segments.slice(1));
    }
    if (segments[0] === "exhibition") {
      if (segments[2] === "installs" || segments[2] === "works") {
        const { page } = extractPage(segments.slice(3));
        return renderExhibitionGallery(segments[1], segments[2], page);
      }
      return renderExhibition(segments[1]);
    }
    if (segments[0] === "text") {
      if (segments.length === 1) return renderTextIndex();
      if (segments[1] === "post") return renderPost(segments[2]);
      return renderTextCategory(segments.slice(1));
    }
    if (segments[0] === "search") {
      const rest = segments.slice(1);
      const { page, rest: rest2 } = extractPage(rest);
      const query = rest2[0] ? decodeURIComponent(rest2[0]) : "";
      const filterType = rest2[1] || null;
      return renderSearch(query, page, filterType);
    }
    if (segments[0] === "recent-searches") return renderRecentSearchesPage();
    if (segments[0] === "contact") return renderContact();
    return renderNotFound();
  }

  // ============================================================
  // 모바일 갤러리 핀치 줌 - 두 손가락으로 오므리면 한 줄에 보이는 작품 수 증가(최대 5),
  // 벌리면 감소. Works 갤러리 화면에서만, 라이트박스가 닫혀있을 때만 동작.
  // ============================================================
  (function setupGalleryPinch() {
    let pinchStartDist = null;
    let pinchCols = null;
    let activeGrids = null;

    function getAllGalleryGrids() {
      return Array.from(document.querySelectorAll(".grid.grid-fullbleed"));
    }

    function currentColumnCount(grid) {
      const cols = getComputedStyle(grid).gridTemplateColumns.split(" ").filter(Boolean);
      return cols.length || 1;
    }

    function touchDist(a, b) {
      const dx = a.clientX - b.clientX;
      const dy = a.clientY - b.clientY;
      return Math.sqrt(dx * dx + dy * dy);
    }

    // FLIP 기법 - Web Animations API로 처리해서, 핀치 도중 연속으로 여러 번
    // 트리거돼도(진행 중이던 애니메이션을 확실히 취소하고 다시 시작) 끊기지 않고 항상 보이게 함
    function animateReflow(grid, changeFn) {
      const items = Array.from(grid.children);
      const first = items.map((el) => el.getBoundingClientRect());
      changeFn();
      const last = items.map((el) => el.getBoundingClientRect());
      items.forEach((el, i) => {
        const dx = first[i].left - last[i].left;
        const dy = first[i].top - last[i].top;
        const sx = last[i].width ? first[i].width / last[i].width : 1;
        const sy = last[i].height ? first[i].height / last[i].height : 1;
        if (Math.abs(dx) < 0.5 && Math.abs(dy) < 0.5 && Math.abs(sx - 1) < 0.01 && Math.abs(sy - 1) < 0.01) return;
        if (el._flipAnim) el._flipAnim.cancel();
        el.style.transformOrigin = "top left";
        el._flipAnim = el.animate(
          [
            { transform: `translate(${dx}px, ${dy}px) scale(${sx}, ${sy})` },
            { transform: "translate(0px, 0px) scale(1, 1)" }
          ],
          { duration: 320, easing: "ease" }
        );
      });
    }

    function applyColumns(grid, cols) {
      savedGalleryColumns = cols;
      try { localStorage.setItem("galleryCols", String(cols)); } catch (e) {}
      animateReflow(grid, () => {
        grid.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
        // 칸이 많아질수록(이미지가 작아질수록) 간격도 비례해서 좁아지게
        grid.style.gap = `${Math.max(6, 28 - (cols - 1) * 5)}px`;
        // 2열 이상이면 호버로 뜨는 제목/연도 캡션은 의미 없으니 그 공간까지 접어서 세로 간격도 맞춤
        grid.classList.toggle("grid-compact", cols >= 2);
      });
    }

    document.addEventListener("touchstart", (e) => {
      if (e.touches.length !== 2) { pinchStartDist = null; activeGrids = null; return; }
      // 그리드 안쪽일 필요 없이, 갤러리 페이지(전시/Works 갤러리)면 어디를 잡든 동작
      if (lightbox.classList.contains("open") || !document.body.classList.contains("gallery-page")) {
        pinchStartDist = null; activeGrids = null; return;
      }
      activeGrids = getAllGalleryGrids();
      if (!activeGrids.length) { pinchStartDist = null; activeGrids = null; return; }
      pinchStartDist = touchDist(e.touches[0], e.touches[1]);
      pinchCols = currentColumnCount(activeGrids[0]);
    }, { passive: true });

    document.addEventListener("touchmove", (e) => {
      if (pinchStartDist == null || !activeGrids || e.touches.length !== 2) return;
      const newDist = touchDist(e.touches[0], e.touches[1]);
      const ratio = newDist / pinchStartDist;

      // 오므리기(간격 좁아짐) - 한 줄에 더 많이(최대 5) / 벌리기 - 더 적게(최소 1)
      if (ratio < 0.82 && pinchCols < 5) {
        pinchCols += 1;
        activeGrids.forEach((g) => applyColumns(g, pinchCols));
        pinchStartDist = newDist;
      } else if (ratio > 1.22 && pinchCols > 1) {
        pinchCols -= 1;
        activeGrids.forEach((g) => applyColumns(g, pinchCols));
        pinchStartDist = newDist;
      }
    }, { passive: true });

    document.addEventListener("touchend", (e) => {
      if (e.touches.length < 2) { pinchStartDist = null; activeGrids = null; }
    });
  })();

  // ============================================================
  // 이미지 경로가 깨져있으면(404 등) 브라우저 기본 깨진 이미지 아이콘 대신
  // 자리표시자(해칭 패턴)로 자동 교체. error 이벤트는 버블링이 안 되므로
  // 캡처 단계에서 문서 전체를 감시함
  // ============================================================
  document.addEventListener("error", (e) => {
    const el = e.target;
    if (!el || el.tagName !== "IMG" || el.dataset.fallbackApplied) return;
    el.dataset.fallbackApplied = "1";

    const frame = el.closest(".frame");
    if (frame) {
      if (!frame.style.aspectRatio) frame.style.aspectRatio = "4 / 5";
      const mark = document.createElement("span");
      mark.className = "placeholder-mark";
      mark.textContent = ui("placeholderNoImage");
      el.replaceWith(mark);
      return;
    }
    // 그리드 카드 바깥(검색 썸네일, 작품 미리보기 팝업 등)은 그냥 조용히 숨김
    el.style.display = "none";
  }, true);

  // 짧은 라벨형 링크들의 터치 가능 범위를 오른쪽으로 넓힘 - 이미 왼쪽에 붙어있는 목록들이라
  // 왼쪽은 안 건드림. CSS에서 이 요소들을 전부 inline(콘텐츠 크기만큼만 잡히는 방식)으로
  // 통일해뒀기 때문에, 여기서는 "글자+이미지 크기" 기준으로 일관되게 확장이 적용됨
  const TAP_WIDEN_RIGHT_ONLY = ".cv-link, .cat-item-link, .cat-item a, .ref-item a, .text-item a, .contact-list a, .contact-list .contact-copy";
  // Contact 항목(메일, 인스타그램)은 왼쪽으로도 넓혀야 한다고 하셨으니 별도로 왼쪽도 처리
  const TAP_WIDEN_ALSO_LEFT = ".contact-list a, .contact-list .contact-copy";

  // 요소의 지정된 방향(side: "left" 또는 "right")에 눈에 안 보이는 클릭 영역을 붙이거나
  // 없애거나 크기를 갱신함 - 절대 위치라 일반적인 레이아웃 흐름에서 완전히 빠져있음,
  // 그래서 글자/박스 폭 계산에 전혀 영향을 안 주고(줄바꿈 걱정 없음) 순수하게 클릭
  // 가능한 영역만 늘어남
  function setTapExtend(el, side, width) {
    const cls = `tap-extend-${side}`;
    let extend = el.querySelector(`:scope > .${cls}`);
    if (width <= 0) { if (extend) extend.remove(); return; }
    if (getComputedStyle(el).position === "static") el.style.position = "relative";
    if (!extend) {
      extend = document.createElement("span");
      extend.className = cls;
      extend.setAttribute("aria-hidden", "true");
      extend.style.position = "absolute";
      extend.style.top = "0";
      extend.style.height = "100%";
      extend.style[side] = "100%"; // right쪽 확장이면 left:100%(오른쪽 바깥), left쪽 확장이면 right:100%(왼쪽 바깥)
      el.appendChild(extend);
    }
    extend.style.width = `${width}px`;
  }

  function applyMobileTapWidening() {
    const isMobile = window.innerWidth <= 650;
    const DEFAULT_EXTEND_CAP = 100; // "초상" 같은 짧은 라벨 기준으로 잡은 상한 - Text 목록처럼
    // 이미 폭이 넓은(요약까지 포함) 요소에 폭의 절반을 그대로 더하면 터무니없이 커지므로 제한함

    function rightExtendWidth(el, rect) {
      if (!isMobile) return Math.min(rect.width / 2, DEFAULT_EXTEND_CAP); // 기본(데스크톱 포함)
      // 삼선(모바일) 환경 - 그 페이지의 기본 우측 여백(.wrap의 padding)은 그대로 남기고,
      // 콘텐츠 영역 오른쪽 끝까지만 클릭 가능하게 확장 (wrap 테두리 자체가 아니라
      // 그 안쪽 패딩만큼 뺀 지점까지 - 안 그러면 화면 끝까지 가버림)
      const wrap = el.closest(".wrap");
      if (!wrap) return Math.max(0, window.innerWidth - rect.right);
      const wrapRect = wrap.getBoundingClientRect();
      const wrapPaddingRight = parseFloat(getComputedStyle(wrap).paddingRight) || 0;
      const targetRight = wrapRect.right - wrapPaddingRight;
      return Math.max(0, targetRight - rect.right);
    }

    document.querySelectorAll(TAP_WIDEN_RIGHT_ONLY).forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (!rect.width) return;
      setTapExtend(el, "left", rightExtendWidth(el, rect)); // left:100% 위치 -> 오른쪽으로 확장
    });

    document.querySelectorAll(TAP_WIDEN_ALSO_LEFT).forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (!rect.width) return;
      setTapExtend(el, "right", Math.min(rect.width / 2, DEFAULT_EXTEND_CAP)); // right:100% 위치 -> 왼쪽으로 확장
    });
  }

  new MutationObserver(() => applyMobileTapWidening()).observe(app, { childList: true, subtree: true });
  window.addEventListener("resize", applyMobileTapWidening);

  applyStaticI18n();
  // "전시 찾아보기" 링크(글 상세 페이지 상단, 그 글을 인용한 전시로 이동)를 누르면,
  // 그 전시 페이지의 "기억된 스크롤 위치" 자체를 미리 맨 위(0)로 덮어써둠 - 이러면
  // 그 뒤에 실행되는 정상적인 스크롤 복원 로직이 그대로 실행돼도 자연스럽게 맨
  // 위에서 시작하게 됨(별도로 그 로직을 우회/경합할 필요가 없음)
  document.addEventListener("click", (e) => {
    const link = e.target.closest(".post-explore-links a");
    if (link) pageState.set(link.getAttribute("href"), { scrollY: 0, focusId: null });
  });

  // 갤러리/카드형 썸네일(loading="lazy") 이미지가 완전히 다 불러와진 뒤에만 서서히
  // 나타나도록 함 - load 이벤트는 버블링이 안 되므로 캡처 단계에서 잡아야 함
  document.addEventListener("load", (e) => {
    if (e.target.tagName === "IMG" && e.target.hasAttribute("loading")) {
      e.target.classList.add("img-ready");
    }
  }, true);
  // 이미 브라우저 캐시에 있어서 load 이벤트가 우리가 감지하기도 전에 이미 끝나버린
  // 경우까지 보정함 - 화면에 새로 추가되는 이미지들을 계속 감시하다가, 이미 완료된
  // 상태(complete)면 즉시 표시 클래스를 붙여줌
  function markAlreadyLoadedThumbs(root) {
    (root || document).querySelectorAll('img[loading="lazy"]:not(.img-ready)').forEach((img) => {
      if (img.complete && img.naturalWidth) img.classList.add("img-ready");
    });
  }
  new MutationObserver(() => markAlreadyLoadedThumbs(app)).observe(app, { childList: true, subtree: true });
  markAlreadyLoadedThumbs();

  // 브라우저가 페이지를 완전히 새로 로드하는 대신, 얼려뒀던 상태를 그대로 복원하는
  // 경우(bfcache)가 있음 - 이때는 자바스크립트가 다시 실행되는 게 아니라서 captionHidden
  // 같은 변수들이 리셋 없이 그대로 남아있게 됨. 이 복원 시점을 감지해서 확실히 리셋함
  window.addEventListener("pageshow", (e) => {
    if (e.persisted) {
      setCaptionHidden(false);
    }
  });

  window.addEventListener("hashchange", routeWithMemory);
  window.addEventListener("DOMContentLoaded", route);
  route();
  applyMobileTapWidening();
})();
