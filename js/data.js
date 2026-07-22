// ============================================================
// 콘텐츠 데이터
// 사이트의 모든 실제 내용은 이 파일 하나에 있습니다.
//
// 이중언어 필드는 { ko: "...", en: "..." } 형태입니다.
// en을 비워두면(생략하거나 "") 영문 모드로 바꿔도 한글 그대로 표시됩니다
// (번역을 등록 안 한 항목은 안 바뀝니다).
// ============================================================

// ------------------------------------------------------------
// 0. 작가 프로필 (CV 상단에 표시)
// ------------------------------------------------------------
const PROFILE = {
  name: { ko: "권회찬", en: "Kwon Hoechan" },
  birth: { ko: "[1995년 3월 12일생]", en: "[Born March 12, 1995]" },
  education: [
    { ko: "[OO대학교 미술대학 회화과 졸업]", en: "[B.F.A. in Painting, OO University]" }
  ]
};

// ------------------------------------------------------------
// 1. 작품 원본 (id로 다른 곳에서 참조)
//
//    thumb/image = 이미지 경로 (언어 무관, 그대로 문자열)
//    title/medium/note = 이중언어
//    year/size = 언어 무관, 이미지 비율은 원본 크기를 자동으로 사용합니다
// ------------------------------------------------------------
const WORKS = {
  p01: {
    thumb: "", image: "images/p01.png", title: { ko: "무제", en: "Untitled" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2024",
    medium: { ko: "캔버스에 콩테, 유채", en: "Conté and oil on canvas" },
    size: "72.7 × 60.6 cm",
    note: { ko: "", en: "" }
  },
  p02: {
    thumb: "", image: "images/p01.png", title: { ko: "무제", en: "Untitled" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2024",
    medium: { ko: "캔버스에 콩테, 유채", en: "Conté and oil on canvas" },
    size: "72.7 × 60.6 cm",
    note: { ko: "", en: "" }
  },  p03: {
    thumb: "", image: "images/p01.png", title: { ko: "무제", en: "Untitled" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2024",
    medium: { ko: "캔버스에 콩테, 유채", en: "Conté and oil on canvas" },
    size: "72.7 × 60.6 cm",
    note: { ko: "", en: "" }
  },  p04: {
    thumb: "", image: "images/p01.png", title: { ko: "무제", en: "Untitled" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2024",
    medium: { ko: "캔버스에 콩테, 유채", en: "Conté and oil on canvas" },
    size: "72.7 × 60.6 cm",
    note: { ko: "", en: "" }
  },  p05: {
    thumb: "", image: "images/p01.png", title: { ko: "무제", en: "Untitled" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2024",
    medium: { ko: "캔버스에 콩테, 유채", en: "Conté and oil on canvas" },
    size: "72.7 × 60.6 cm",
    note: { ko: "", en: "" }
  },  p06: {
    thumb: "", image: "images/p01.png", title: { ko: "무제", en: "Untitled" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2024",
    medium: { ko: "캔버스에 콩테, 유채", en: "Conté and oil on canvas" },
    size: "72.7 × 60.6 cm",
    note: { ko: "", en: "" }
  },  p07: {
    thumb: "", image: "images/p01.png", title: { ko: "무제", en: "Untitled" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2024",
    medium: { ko: "캔버스에 콩테, 유채", en: "Conté and oil on canvas" },
    size: "72.7 × 60.6 cm",
    note: { ko: "", en: "" }
  },  p08: {
    thumb: "", image: "images/p01.png", title: { ko: "무제", en: "Untitled" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2024",
    medium: { ko: "캔버스에 콩테, 유채", en: "Conté and oil on canvas" },
    size: "72.7 × 60.6 cm",
    note: { ko: "", en: "" }
  },  p09: {
    thumb: "", image: "images/p01.png", title: { ko: "무제", en: "Untitled" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2024",
    medium: { ko: "캔버스에 콩테, 유채", en: "Conté and oil on canvas" },
    size: "72.7 × 60.6 cm",
    note: { ko: "", en: "" }
  },  p10: {
    thumb: "", image: "images/p01.png", title: { ko: "무제", en: "Untitled" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2024",
    medium: { ko: "캔버스에 콩테, 유채", en: "Conté and oil on canvas" },
    size: "72.7 × 60.6 cm",
    note: { ko: "", en: "" }
  },  p11: {
    thumb: "", image: "images/p01.png", title: { ko: "무제", en: "Untitled" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2024",
    medium: { ko: "캔버스에 콩테, 유채", en: "Conté and oil on canvas" },
    size: "72.7 × 60.6 cm",
    note: { ko: "", en: "" }
  },  p12: {
    thumb: "", image: "images/p01.png", title: { ko: "무제", en: "Untitled" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2024",
    medium: { ko: "캔버스에 콩테, 유채", en: "Conté and oil on canvas" },
    size: "72.7 × 60.6 cm",
    note: { ko: "", en: "" }
  },  p13: {
    thumb: "", image: "images/p01.png", title: { ko: "무제", en: "Untitled" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2024",
    medium: { ko: "캔버스에 콩테, 유채", en: "Conté and oil on canvas" },
    size: "72.7 × 60.6 cm",
    note: { ko: "", en: "" }
  },  p14: {
    thumb: "", image: "images/p01.png", title: { ko: "무제", en: "Untitled" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2024",
    medium: { ko: "캔버스에 콩테, 유채", en: "Conté and oil on canvas" },
    size: "72.7 × 60.6 cm",
    note: { ko: "", en: "" }
  },  p15: {
    thumb: "", image: "images/p01.png", title: { ko: "무제", en: "Untitled" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2024",
    medium: { ko: "캔버스에 콩테, 유채", en: "Conté and oil on canvas" },
    size: "72.7 × 60.6 cm",
    note: { ko: "", en: "" }
  },  p16: {
    thumb: "", image: "images/p01.png", title: { ko: "무제", en: "Untitled" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2024",
    medium: { ko: "캔버스에 콩테, 유채", en: "Conté and oil on canvas" },
    size: "72.7 × 60.6 cm",
    note: { ko: "", en: "" }
  },  p17: {
    thumb: "", image: "images/p01.png", title: { ko: "무제", en: "Untitled" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2024",
    medium: { ko: "캔버스에 콩테, 유채", en: "Conté and oil on canvas" },
    size: "72.7 × 60.6 cm",
    note: { ko: "", en: "" }
  },  p18: {
    thumb: "", image: "images/p01.png", title: { ko: "무제", en: "Untitled" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2024",
    medium: { ko: "캔버스에 콩테, 유채", en: "Conté and oil on canvas" },
    size: "72.7 × 60.6 cm",
    note: { ko: "", en: "" }
  },  p19: {
    thumb: "", image: "images/p01.png", title: { ko: "무제", en: "Untitled" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2024",
    medium: { ko: "캔버스에 콩테, 유채", en: "Conté and oil on canvas" },
    size: "72.7 × 60.6 cm",
    note: { ko: "", en: "" }
  },  p20: {
    thumb: "", image: "images/p01.png", title: { ko: "무제", en: "Untitled" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2024",
    medium: { ko: "캔버스에 콩테, 유채", en: "Conté and oil on canvas" },
    size: "72.7 × 60.6 cm",
    note: { ko: "", en: "" }
  },  p21: {
    thumb: "", image: "images/p01.png", title: { ko: "무제", en: "Untitled" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2024",
    medium: { ko: "캔버스에 콩테, 유채", en: "Conté and oil on canvas" },
    size: "72.7 × 60.6 cm",
    note: { ko: "", en: "" }
  },  p22: {
    thumb: "", image: "images/p01.png", title: { ko: "무제", en: "Untitled" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2024",
    medium: { ko: "캔버스에 콩테, 유채", en: "Conté and oil on canvas" },
    size: "72.7 × 60.6 cm",
    note: { ko: "", en: "" }
  },  p23: {
    thumb: "", image: "images/p01.png", title: { ko: "무제", en: "Untitled" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2024",
    medium: { ko: "캔버스에 콩테, 유채", en: "Conté and oil on canvas" },
    size: "72.7 × 60.6 cm",
    note: { ko: "", en: "" }
  },  p24: {
    thumb: "", image: "images/p01.png", title: { ko: "무제", en: "Untitled" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2024",
    medium: { ko: "캔버스에 콩테, 유채", en: "Conté and oil on canvas" },
    size: "72.7 × 60.6 cm",
    note: { ko: "", en: "" }
  },  p25: {
    thumb: "", image: "images/p01.png", title: { ko: "무제", en: "Untitled" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2024",
    medium: { ko: "캔버스에 콩테, 유채", en: "Conté and oil on canvas" },
    size: "72.7 × 60.6 cm",
    note: { ko: "", en: "" }
  },  p26: {
    thumb: "", image: "images/p01.png", title: { ko: "무제", en: "Untitled" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2024",
    medium: { ko: "캔버스에 콩테, 유채", en: "Conté and oil on canvas" },
    size: "72.7 × 60.6 cm",
    note: { ko: "", en: "" }
  },  p27: {
    thumb: "", image: "images/p01.png", title: { ko: "무제", en: "Untitled" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2024",
    medium: { ko: "캔버스에 콩테, 유채", en: "Conté and oil on canvas" },
    size: "72.7 × 60.6 cm",
    note: { ko: "", en: "" }
  },  p28: {
    thumb: "", image: "images/p01.png", title: { ko: "무제", en: "Untitled" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2024",
    medium: { ko: "캔버스에 콩테, 유채", en: "Conté and oil on canvas" },
    size: "72.7 × 60.6 cm",
    note: { ko: "", en: "" }
  },  p29: {
    thumb: "", image: "images/p01.png", title: { ko: "무제", en: "Untitled" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2024",
    medium: { ko: "캔버스에 콩테, 유채", en: "Conté and oil on canvas" },
    size: "72.7 × 60.6 cm",
    note: { ko: "", en: "" }
  },  p30: {
    thumb: "", image: "images/p01.png", title: { ko: "무제", en: "Untitled" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2024",
    medium: { ko: "캔버스에 콩테, 유채", en: "Conté and oil on canvas" },
    size: "72.7 × 60.6 cm",
    note: { ko: "", en: "" }
  },  p31: {
    thumb: "", image: "images/p01.png", title: { ko: "무제", en: "Untitled" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2024",
    medium: { ko: "캔버스에 콩테, 유채", en: "Conté and oil on canvas" },
    size: "72.7 × 60.6 cm",
    note: { ko: "", en: "" }
  },  p32: {
    thumb: "", image: "images/p01.png", title: { ko: "무제", en: "Untitled" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2024",
    medium: { ko: "캔버스에 콩테, 유채", en: "Conté and oil on canvas" },
    size: "72.7 × 60.6 cm",
    note: { ko: "", en: "" }
  },
    p33: {
    thumb: "", image: "images/p01.png", title: { ko: "무제", en: "Untitled" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2024",
    medium: { ko: "캔버스에 콩테, 유채", en: "Conté and oil on canvas" },
    size: "72.7 × 60.6 cm",
    note: { ko: "", en: "" }
  },
  l01: {
    thumb: "", image: "", title: { ko: "무제", en: "Untitled" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2024",
    medium: { ko: "캔버스에 콩테, 유채", en: "Conté and oil on canvas" },
    size: "90.9 × 60.6 cm",
    note: { ko: "", en: "" }
  },
  l02: {
    thumb: "", image: "", title: { ko: "무제", en: "Untitled" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2023",
    medium: { ko: "캔버스에 콩테, 유채", en: "Conté and oil on canvas" },
    size: "72.7 × 91 cm",
    note: { ko: "", en: "" }
  },
  o01: {
    thumb: "", image: "", title: { ko: "무제", en: "Untitled" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2024",
    medium: { ko: "캔버스에 콩테, 유채", en: "Conté and oil on canvas" },
    size: "60.6 × 72.7 cm",
    note: { ko: "타인의 초상 연작", en: "From the Portraits of Others series" }
  },
  c01: {
    thumb: "", image: "", title: { ko: "구성 I", en: "Composition I" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2025",
    medium: { ko: "캔버스에 콩테", en: "Conté on canvas" },
    size: "100 × 100 cm",
    note: { ko: "구조선 없이 제스처만으로 구성된 작업", en: "Built entirely from gesture, without structural lines" }
  },
  c02: {
    thumb: "", image: "", title: { ko: "구성 II", en: "Composition II" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2025",
    medium: { ko: "캔버스에 콩테", en: "Conté on canvas" },
    size: "80 × 112 cm",
    note: { ko: "", en: "" }
  },
  c03: {
    thumb: "", image: "", title: { ko: "구성 III", en: "Composition III" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2025",
    medium: { ko: "캔버스에 콩테", en: "Conté on canvas" },
    size: "91 × 65.1 cm",
    note: { ko: "", en: "" }
  }
};

// ------------------------------------------------------------
// 2. Works 카테고리 트리
//    - children 배열이 있으면 하위 카테고리 목록
//    - works 배열이 있으면 작품 썸네일 그리드 (WORKS의 id 나열)
//    - 더 깊게 나누려면 works 대신 children을 넣고 그 안에 또 노드 추가 (깊이 제한 없음)
// ------------------------------------------------------------
const WORK_CATEGORIES = [
  {
    id: "doodle-portrait",
    title: { ko: "낙서의 초상", en: "Portraits of Doodle" },
    children: [
      { id: "portrait", title: { ko: "초상", en: "Portrait" }, works: ["p01", "p02", "p03", "p04", "p05", "p06", "p07", "p08", "p09", "p10", "p11", "p12", "p13", "p14", "p15", "p16", "p17", "p18", "p19", "p20", "p21", "p22", "p23", "p24", "p25", "p26", "p27", "p28", "p29", "p30", "p31", "p32", "p33"] },
      { id: "landscape", title: { ko: "풍경", en: "Landscape" }, works: ["l01", "l02"] },
      { id: "others-portrait", title: { ko: "타인의 초상", en: "Portraits of Others" }, works: ["o01"] }
    ]
  },
  {
    id: "composition",
    title: { ko: "구성", en: "Composition" },
    works: ["c01", "c02", "c03"]
  }
];

// ------------------------------------------------------------
// 3. Text 카테고리 트리 (Works와 동일한 규칙)
//    - children이면 하위 카테고리, posts 배열이면 글 목록(POSTS의 id 나열)
// ------------------------------------------------------------
const TEXT_CATEGORIES = [
  {
    id: "mine",
    title: { ko: "내가 쓴 글", en: "Written by Me" },
    children: [
      { id: "mine-preface", title: { ko: "서문", en: "Preface" }, posts: ["post-01"] },
      { id: "mine-critique", title: { ko: "평문", en: "Critique" }, posts: [] },
      { id: "mine-book", title: { ko: "책", en: "Book" }, posts: [] }
    ]
  },
  {
    id: "others",
    title: { ko: "외부인 글", en: "Written by Others" },
    children: [
      { id: "others-preface", title: { ko: "서문", en: "Preface" }, posts: [] },
      { id: "others-critique", title: { ko: "평문", en: "Critique" }, posts: ["post-02"] }
    ]
  }
];

// ------------------------------------------------------------
// 4. 글 원본 (id로 다른 곳에서 참조)
//
//    body 안에서 [보일 텍스트](URL) 형식으로 쓰면 하이퍼링크가 됩니다.
//    body 안에서 [^각주로 넣을 내용] 형식으로 쓰면, 그 자리에 작은 번호가
//    자동으로 붙고 글 맨 끝에 각주 목록이 순서대로 자동 생성됩니다.
//    예: "이 개념은 벤야민에게서 왔다[^발터 벤야민, <기술복제시대의 예술작품>, 1935]."
//    번호를 직접 세거나 위치를 따로 관리할 필요 없이, 각주 내용만 그 자리에 적으면 됩니다.
//    문단 구분은 줄바꿈 두 번(빈 줄)로 합니다.
//    title/author/excerpt/body = 이중언어, date = 언어 무관
// ------------------------------------------------------------
const POSTS = {
  "post-01": {
    title: { ko: "[글 제목 — 예: 전시 서문]", en: "[Post title — e.g. Exhibition Preface]" },
    author: { ko: "권회찬", en: "Kwon Hoechan" },
    date: "2026-01-01",
    excerpt: { ko: "[한두 줄 요약]", en: "[One or two line summary]" },
    body: {
      ko: "[본문을 여기에 적으세요.]\n\n[문단을 나누려면 이렇게 빈 줄로 구분하세요.]",
      en: "[Write the body text here.]\n\n[Separate paragraphs with a blank line like this.]"
    }
  },
  "post-02": {
    title: { ko: "[글 제목 — 예: 평문]", en: "[Post title — e.g. Critique]" },
    author: { ko: "[필자명]", en: "[Author name]" },
    date: "2026-02-01",
    excerpt: { ko: "[한두 줄 요약]", en: "[One or two line summary]" },
    body: { ko: "[본문]", en: "[Body text]" }
  }
};

// ------------------------------------------------------------
// 5. CV / 전시 이력
//    type: "solo"(개인전) | "group"(그룹전) | "critic"(비평)
//    CV 목록 줄 순서: 연도, 전시명, 갤러리(venue), 지역(city)
//    city는 선택 항목 - 비워두거나 아예 빼도 그 부분만 자동으로 안 나옵니다.
//    essayPostIds : 서문으로 연결할 POSTS id 여러 개 ([] 이면 섹션 숨김, 여러 개면 1,2,3 번호 매김)
//    criticPostIds: 평문으로 연결할 POSTS id 여러 개 ([] 이면 섹션 숨김)
//    installationImages, works도 비워두면 해당 섹션이 자동으로 숨겨집니다.
// ------------------------------------------------------------
const EXHIBITIONS = [
  {
    id: "ex-2023-doodle",
    type: "solo",
    title: { ko: "낙서의 초상", en: "Portraits of Doodle" },
    year: "2023",
    venue: { ko: "에브리아트", en: "Every Art" },
    city: { ko: "서울", en: "Seoul" },
    essayPostIds: ["post-01"],
    criticPostIds: ["post-02"],
    installationImages: [
      { thumb: "", image: "", caption: { ko: "전시 전경 1", en: "Installation view 1" } },
      { thumb: "", image: "", caption: { ko: "전시 전경 2", en: "Installation view 2" } }
    ],
    works: ["p01","p01","p01","p01","p01","p01"]
  },
  {
    id: "ex-2025-composition",
    type: "group",
    title: { ko: "구성", en: "Composition" },
    year: "2025",
    venue: { ko: "[전시 장소]", en: "[Venue]" },
    city: { ko: "[지역]", en: "[City]" },
    essayPostIds: [],
    criticPostIds: [],
    installationImages: [
      { thumb: "", image: "", caption: { ko: "전시 전경 1", en: "Installation view 1" } }
    ],
    works: ["c01", "c02", "c03"]
  }
];

// ------------------------------------------------------------
// 6. Contact
//    목록에 항목을 추가/삭제하면 Contact 페이지에 그대로 반영됩니다.
//    type으로 클릭했을 때 동작 방식을 고를 수 있습니다:
//
//      "copy"   - 클릭하면 copyValue를 클립보드에 복사하고 안내 문구를 보여줌
//                 (링크를 안 열고 싶은 이메일 등에 적합)
//      "link"   - 클릭하면 href를 새 탭에서 엶 (인스타그램 등 외부 사이트용)
//      "mailto" - 클릭하면 메일 앱이 바로 열림 (href는 "mailto:주소" 형식)
//      "tel"    - 클릭하면 전화 앱이 바로 열림 (href는 "tel:번호" 형식)
//
//    예시로 이메일은 "copy", 인스타그램은 "link"로 넣어뒀습니다.
//    원하는 대로 type만 바꿔서 자유롭게 조합하면 됩니다.
// ------------------------------------------------------------
const CONTACT = [
  { label: "Email", value: "contact@example.com", type: "copy", copyValue: "contact@example.com" },
  { label: "Instagram", value: "Instagram", type: "link", href: "https://instagram.com/example" }
];

// ------------------------------------------------------------
// 7. 사이트 뼈대 문구 (한/영 전환 시 자동으로 바뀌는 고정 UI 텍스트)
// ------------------------------------------------------------
const UI = {
  ko: {
    navHome: "권회찬",
    navCV: "CV",
    navWorks: "Works",
    navText: "Texts",
    navSearch: "검색",
    navContact: "Contact",
    langToggle: "English",
    langToggleShort: "EN",
    footer: "© 2026 Kwon Hoechan. All works reserved.",

    cvLabel: "CV",
    cvIntro: "전시명을 클릭하시면 관련 전경과 자료를 확인하실 수 있습니다.",
    cvSolo: "개인전",
    cvGroup: "그룹전",
    cvCritic: "비평",

    worksLabel: "Works",
    textLabel: "Texts",
    contactLabel: "Contact",
    copied: "복사되었습니다",
    viewLarger: "크게 보기",

    backToCV: "← CV",
    installLabel: "전시 전경",
    worksSectionLabel: "작업",
    essayLabel: "서문",
    critiqueLabel: "글",

    exploreWork: "연작 찾아보기",
    exploreExhibition: "전시 찾아보기",
    exploreWriting: "글 찾아보기",

    placeholderNoImage: "이미지 없음",
    lbClose: "닫기 ✕",

    notFound: "페이지를 찾을 수 없습니다.",
    backHome: "CV로 돌아가기",
    emptyWorks: "아직 작품이 없습니다.",
    emptyText: "아직 글이 없습니다.",

    searchPlaceholder: "검색어를 입력하세요",
    searchButton: "검색",
    searchResultsFor: (q, n) => `'${q}'에 대한 검색결과가 총 '${n}'건 검색되었습니다.`,
    searchEmpty: "검색어를 입력해 주세요.",
    searchNone: (q) => `'${q}'에 대한 검색결과가 없습니다.`,
    more: "더보기",
    less: "접기",
    backToAll: "← 전체 검색결과",
    prevPage: "‹ 이전",
    nextPage: "다음 ›",

    sectionWorks: "Works",
    sectionText: "Texts",
    sectionExhibition: "Exhibition",

    recentSearches: "최근 검색어",
    recentSearchesEmpty: "최근 검색 기록이 없습니다.",
    clearRecent: "전체 지우기",

    shortcutsTitle: "단축키",
    shortcutSearch: "검색 열기",
    shortcutWorks: "Works로 이동",
    shortcutCV: "CV(홈)로 이동",
    shortcutText: "Text로 이동",
    shortcutContact: "Contact로 이동",
    shortcutEnglish: "영문으로 전환",
    shortcutKorean: "한글로 전환",
    shortcutBack: "뒤로 가기",
    shortcutNav: "작품 이전/다음, 목록 이동",
    shortcutEnter: "선택 항목 열기",
    shortcutEsc: "닫기",
    shortcutHelp: "이 안내 열기/닫기"
  },
  en: {
    navHome: "Kwon Hoechan",
    navCV: "CV",
    navWorks: "Works",
    navText: "Texts",
    navSearch: "Search",
    navContact: "Contact",
    langToggle: "한국어",
    langToggleShort: "KO",
    footer: "© 2026 Kwon Hoechan. All works reserved.",

    cvLabel: "CV",
    cvIntro: "Click an exhibition title to view its installation views and related material.",
    cvSolo: "Solo Exhibitions",
    cvGroup: "Group Exhibitions",
    cvCritic: "Critical Writing",

    worksLabel: "Works",
    textLabel: "Texts",
    contactLabel: "Contact",
    copied: "Copied to clipboard",
    viewLarger: "View larger",

    backToCV: "← CV",
    installLabel: "Installation Views",
    worksSectionLabel: "Works",
    essayLabel: "Preface",
    critiqueLabel: "Writing",

    exploreWork: "Explore series",
    exploreExhibition: "View exhibition",
    exploreWriting: "View writing",

    placeholderNoImage: "Image not available",
    lbClose: "Close ✕",

    notFound: "Page not found.",
    backHome: "Back to CV",
    emptyWorks: "No works yet.",
    emptyText: "No posts yet.",

    searchPlaceholder: "Enter a search term",
    searchButton: "Search",
    searchResultsFor: (q, n) => `${n} result(s) found for "${q}".`,
    searchEmpty: "Please enter a search term.",
    searchNone: (q) => `No results found for "${q}".`,
    more: "More",
    less: "Less",
    backToAll: "← All results",
    prevPage: "‹ Prev",
    nextPage: "Next ›",

    sectionWorks: "Works",
    sectionText: "Texts",
    sectionExhibition: "Exhibition",

    recentSearches: "Recent searches",
    recentSearchesEmpty: "No recent searches.",
    clearRecent: "Clear all",

    shortcutsTitle: "Keyboard shortcuts",
    shortcutSearch: "Open search",
    shortcutWorks: "Go to Works",
    shortcutCV: "Go to CV (home)",
    shortcutText: "Go to Text",
    shortcutContact: "Go to Contact",
    shortcutEnglish: "Switch to English",
    shortcutKorean: "Switch to Korean",
    shortcutBack: "Go back",
    shortcutNav: "Prev/next work, move through list",
    shortcutEnter: "Open selected item",
    shortcutEsc: "Close",
    shortcutHelp: "Toggle this panel"
  }
};
