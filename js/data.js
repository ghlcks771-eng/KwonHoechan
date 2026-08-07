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
  birth: { ko: "1995년 11월 9일생", en: "Born Nobember 9, 1995" },
  education: [
    { ko: "2024 서울과학기술대학교 일반대학원 조형예술과 수료, 서울", en: "2024 Coursework Completed in Fine Arts, Graduate School, Seoul National University of Science and Technology, Seoul" },
    { ko: "2022 서울과학기술대학교 조형대학 조형예술학과 졸업, 서울", en: "2022 Bachelor of Fine Arts (BFA), Seoul National University of Science and Technology, Seoul" }
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
  a1: {
    thumb: "thumb/!a1.jpg", image: "images/a1.jpg", title: { ko: "자화상 1", en: "Self-Portrait 1" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2021",
    medium: { ko: "캔버스에 유채, 콩테", en: "oil and conte on canvas" },
    size: "160x130cm",
    note: { ko: "사진 촬영: 에브리아트", en: "Photo: Every Art" }
  },

  a4: {
    thumb: "thumb/!a4.jpg", image: "images/a4.jpg", title: { ko: "자화상 4", en: "Self-Portrait 4" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2022",
    medium: { ko: "캔버스에 유채, 콩테", en: "oil and conte on canvas" },
    size: "116×91cm",
    note: { ko: "", en: "" }
  },
  a5: {
    thumb: "thumb/!a5.jpg", image: "images/a5.jpg", title: { ko: "자화상 5", en: "Self-Portrait " }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2022",
    medium: { ko: "캔버스에 유채, 콩테", en: "oil and conte on canvas" },
    size: "116×91cm",
    note: { ko: "", en: "" }
  },
  a6: {
    thumb: "thumb/!a6.jpg", image: "images/a6.jpg", title: { ko: "자화상 6", en: "Self-Portrait 6" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2022",
    medium: { ko: "캔버스에 유채, 콩테", en: "oil and conte on canvas" },
    size: "116×91cm",
    note: { ko: "", en: "" }
  },
  a7: {
    thumb: "thumb/!a7.jpg", image: "images/a7.jpg", title: { ko: "자화상 7", en: "Self-Portrait 7" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2022",
    medium: { ko: "캔버스에 유채, 콩테", en: "oil and conte on canvas" },
    size: "90x72cm",
    note: { ko: "", en: "" }
  },
  a8: {
    thumb: "thumb/!a8.jpg", image: "images/a8.jpg", title: { ko: "자화상 8", en: "Self-Portrait 8" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2022",
    medium: { ko: "캔버스에 유채, 콩테", en: "oil and conte on canvas" },
    size: "90x72cm",
    note: { ko: "", en: "" }
  },
  a9: {
    thumb: "thumb/!a9.jpg", image: "images/a9.jpg", title: { ko: "자화상 9", en: "Self-Portrait 9" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2022",
    medium: { ko: "캔버스에 유채, 콩테", en: "oil and conte on canvas" },
    size: "90x72cm",
    note: { ko: "", en: "" }
  },
  a10: {
    thumb: "thumb/!a10.jpg", image: "images/a10.jpg", title: { ko: "자화상 10", en: "Self-Portrait 10" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2022",
    medium: { ko: "젯소 바른 캔버스에 유채, 콩테", en: "oil and conte on gesso coated canvas" },
    size: "116×72cm",
    note: { ko: "", en: "" }
  },
  a11: {
    thumb: "thumb/!a11.jpg", image: "images/a11.jpg", title: { ko: "자화상 11", en: "Self-Portrait 11" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2022",
    medium: { ko: "캔버스에 유채, 콩테", en: "oil and conte on canvas" },
    size: "116×72cm",
    note: { ko: "", en: "" }
  },
  a12: {
    thumb: "thumb/!a12.jpg", image: "images/a12.jpg", title: { ko: "자화상 12", en: "Self-Portrait 12" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2022",
    medium: { ko: "캔버스에 유채, 콩테", en: "oil and conte on canvas" },
    size: "116×72cm",
    note: { ko: "", en: "" }
  },
  a13: {
    thumb: "thumb/!a13.jpg", image: "images/a13.jpg", title: { ko: "자화상 13", en: "Self-Portrait 13" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2022",
    medium: { ko: "캔버스에 유채, 콩테", en: "oil and conte on canvas" },
    size: "130x97cm",
    note: { ko: "", en: "" }
  },
  a14: {
    thumb: "thumb/!a14.jpg", image: "images/a14.jpg", title: { ko: "자화상 14", en: "Self-Portrait 14" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2022",
    medium: { ko: "캔버스에 유채, 콩테", en: "oil and conte on canvas" },
    size: "130x97cm",
    note: { ko: "", en: "" }
  },
  a15: {
    thumb: "thumb/!a15.jpg", image: "images/a15.jpg", title: { ko: "자화상 15", en: "Self-Portrait 15" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2023",
    medium: { ko: "캔버스에 유채, 콩테", en: "oil and conte on canvas" },
    size: "130x97cm",
    note: { ko: "", en: "" }
  },
  a16: {
    thumb: "thumb/!a16.jpg", image: "images/a16.jpg", title: { ko: "자화상 16", en: "Self-Portrait 16" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2023",
    medium: { ko: "캔버스에 유채, 콩테", en: "oil and conte on canvas" },
    size: "112x145cm",
    note: { ko: "", en: "" }
  },
  a17: {
    thumb: "thumb/!a17.jpg", image: "images/a17.jpg", title: { ko: "자화상 17", en: "Self-Portrait 17" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2023",
    medium: { ko: "젯소 바른 캔버스에 유채, 콩테", en: "oil and conte on gesso coated canvas" },
    size: "116x91cm",
    note: { ko: "", en: "" }
  },
  a18: {
    thumb: "thumb/!a18.jpg", image: "images/a18.jpg", title: { ko: "자화상 18", en: "Self-Portrait 18" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2023",
    medium: { ko: "젯소 바른 캔버스에 유채, 콩테", en: "oil and conte on gesso coated canvas" },
    size: "116x91cm",
    note: { ko: "", en: "" }
  },
  a19: {
    thumb: "thumb/!a19.jpg", image: "images/a19.jpg", title: { ko: "자화상 19", en: "Self-Portrait 19" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2023",
    medium: { ko: "젯소 바른 캔버스에 유채, 콩테", en: "oil and conte on gesso coated canvas" },
    size: "116x91cm",
    note: { ko: "", en: "" }
  },
  a20: {
    thumb: "thumb/!a20.jpg", image: "images/a20.jpg", title: { ko: "자화상 20", en: "Self-Portrait 20" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2023",
    medium: { ko: "캔버스에 유채, 콩테", en: "oil and conte on canvas" },
    size: "116×72cm",
    note: { ko: "", en: "" }
  },
  a21: {
    thumb: "thumb/!a21.jpg", image: "images/a21.jpg", title: { ko: "자화상 21; 박서보(한지 배접하며 긁기)", en: "Self-Portrait 21; Park Seo-Bo(scratching while mounting hanji)" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2023",
    medium: { ko: "캔버스에 아크릴, 콩테, 한지", en: "acrylic, conte and Korean paper on canvas" },
    size: "41x32cm",
    note: { ko: "", en: "" }
  },
  a22: {
    thumb: "thumb/!a22.jpg", image: "images/a22.jpg", title: { ko: "자화상 22; 잭슨 폴록(드리핑)", en: "Self-Portrait 22; Jackson Pollock(dripping)" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2023",
    medium: { ko: "캔버스에 유채, 콩테", en: "enamel and conte on canvas" },
    size: "41x32cm",
    note: { ko: "", en: "" }
  },
  a23: {
    thumb: "thumb/!a23.jpg", image: "images/a23.jpg", title: { ko: "자화상 23; 게르하르트 리히터(채색 후 수평으로 스퀴징)", en: "Self-Portrait 23; Gerhard Richter(horizontal squeegeeing after painting)" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2023",
    medium: { ko: "캔버스에 유채, 콩테", en: "oil and conte on canvas" },
    size: "41x32cm",
    note: { ko: "", en: "" }
  },




  a25: {
    thumb: "thumb/!a25.jpg", image: "images/a25.jpg", title: { ko: "자화상 25", en: "Self-Portrait 25" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2023",
    medium: { ko: "캔버스에 유채, 콩테", en: "oil and conte on canvas" },
    size: "53x45cm",
    note: { ko: "", en: "" }
  },
  a26: {
    thumb: "thumb/!a26.jpg", image: "images/a26.jpg", title: { ko: "자화상 26", en: "Self-Portrait 26" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2023",
    medium: { ko: "캔버스에 유채, 콩테", en: "oil and conte on canvas" },
    size: "90x72cm",
    note: { ko: "", en: "" }
  },
a27: {
    thumb: "thumb/!a27.jpg", image: "images/a27.jpg", title: { ko: "자화상 27", en: "Self-Portrait 27" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2024",
    medium: { ko: "캔버스에 유채, 콩테", en: "oil and conte on canvas" },
    size: "116x91cm",
    note: { ko: "", en: "" }
  },
  a28: {
    thumb: "thumb/!a28.jpg", image: "images/a28.jpg", title: { ko: "자화상 28", en: "Self-Portrait 28" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2024",
    medium: { ko: "캔버스에 유채, 콩테", en: "oil and conte on canvas" },
    size: "33x24cm",
    note: { ko: "", en: "" }
  },



  
  a30: {
    thumb: "thumb/!a30.jpg", image: "images/a30.jpg", title: { ko: "자화상 30", en: "Self-Portrait 30" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2024",
    medium: { ko: "캔버스에 유채, 콩테", en: "oil and conte on canvas" },
    size: "35x27cm",
    note: { ko: "", en: "" }
  },
  a31: {
    thumb: "thumb/!a31.jpg", image: "images/a31.jpg", title: { ko: "자화상 31", en: "Self-Portrait 31" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2024",
    medium: { ko: "캔버스에 유채, 콩테", en: "oil and conte on canvas" },
    size: "22.7x16cm",
    note: { ko: "사진 촬영: 최철림", en: "Photo: Choi Chul-lim" }
  },
  a32: {
    thumb: "thumb/!a32.jpg", image: "images/a32.jpg", title: { ko: "자화상 32", en: "Self-Portrait 32" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2024",
    medium: { ko: "캔버스에 유채, 콩테", en: "oil and conte on canvas" },
    size: "22.7x16cm",
    note: { ko: "사진 촬영: 최철림", en: "Photo: Choi Chul-lim" }
  },
  a33: {
    thumb: "thumb/!a33.jpg", image: "images/a33.jpg", title: { ko: "자화상 33", en: "Self-Portrait 33" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2024",
    medium: { ko: "캔버스에 유채, 콩테", en: "oil and conte on canvas" },
    size: "22.7x16cm",
    note: { ko: "사진 촬영: 최철림", en: "Photo: Choi Chul-lim" }
  },
  a34: {
    thumb: "thumb/!a34.jpg", image: "images/a34.jpg", title: { ko: "자화상 34", en: "Self-Portrait 34" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2024",
    medium: { ko: "캔버스에 유채, 콩테", en: "oil and conte on canvas" },
    size: "22.7x16cm",
    note: { ko: "사진 촬영: 최철림", en: "Photo: Choi Chul-lim" }
  },
  a35: {
    thumb: "thumb/!a35.jpg", image: "images/a35.jpg", title: { ko: "자화상 35", en: "Self-Portrait 35" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2024",
    medium: { ko: "캔버스에 유채, 콩테", en: "oil and conte on canvas" },
    size: "22.7x16cm",
    note: { ko: "사진 촬영: 최철림", en: "Photo: Choi Chul-lim" }
  },
  a36: {
    thumb: "thumb/!a36.jpg", image: "images/a36.jpg", title: { ko: "자화상 36", en: "Self-Portrait 36" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2024",
    medium: { ko: "캔버스에 유채, 콩테", en: "oil and conte on canvas" },
    size: "22.7x16cm",
    note: { ko: "사진 촬영: 최철림", en: "Photo: Choi Chul-lim" }
  },
  a37: {
    thumb: "thumb/!a37.jpg", image: "images/a37.jpg", title: { ko: "자화상 37", en: "Self-Portrait 37; My Palette and Viscosity" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2026",
    medium: { ko: "캔버스에 크레파스, 유채, 린시드와 테레핀", en: "crayon, and oil with linseed oil and turpentine on canvas" },
    size: "116.5x91cm",
    note: { ko: "사진 촬영: 최철림", en: "Photo: Choi Chul-lim" }
  },









ab1: {
    thumb: "thumb/!ab1.jpg", image: "images/ab1.jpg", title: { ko: "풍경 1", en: "Landscape 1" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2021",
    medium: { ko: "캔버스에 유채, 콩테", en: "oil and conte on canvas" },
    size: "91x72cm",
    note: { ko: "", en: "" }
  },
ab3: {
    thumb: "thumb/!ab3.jpg", image: "images/ab3.jpg", title: { ko: "풍경 3", en: "Landscape 3" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2023",
    medium: { ko: "캔버스에 유채, 콩테", en: "oil and conte on canvas" },
    size: "72x60cm",
    note: { ko: "", en: "" }
  },
  ab4: {
    thumb: "thumb/!ab4.jpg", image: "images/ab4.jpg", title: { ko: "풍경 4", en: "Landscape 4" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2024",
    medium: { ko: "캔버스에 유채, 콩테", en: "oil and conte on canvas" },
    size: "91x91cm",
    note: { ko: "", en: "" }
  },






  ac1: {
    thumb: "thumb/!ac1.jpg", image: "images/ac1.jpg", title: { ko: "임지원의 초상", en: "Portrait of Lim Jiwon" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2021",
    medium: { ko: "캔버스에 유채, 콩테", en: "oil and conte on canvas" },
    size: "65x53cm",
    note: { ko: "사진 촬영: 최철림", en: "Photo: Choi Chul-lim" }
  },

  ac2: {
    thumb: "thumb/!ac2.jpg", image: "images/ac2.jpg", title: { ko: "강정민의 초상", en: "Portrait of Kang Jeongmin" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2021",
    medium: { ko: "캔버스에 유채, 콩테", en: "oil and conte on canvas" },
    size: "65x53cm",
    note: { ko: "사진 촬영: 최철림", en: "Photo: Choi Chul-lim" }
  },
  ac3: {
    thumb: "thumb/!ac3.jpg", image: "images/ac3.jpg", title: { ko: "김세욱의 초상", en: "Portrait of Kim Seuk" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2021",
    medium: { ko: "캔버스에 유채, 콩테", en: "oil and conte on canvas" },
    size: "65x53cm",
    note: { ko: "사진 촬영: 최철림", en: "Photo: Choi Chul-lim" }
  },
  ac4: {
    thumb: "thumb/!ac4.jpg", image: "images/ac4.jpg", title: { ko: "강혜민의 초상", en: "Portrait of Kang Hyemin" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2021",
    medium: { ko: "캔버스에 유채, 콩테", en: "oil and conte on canvas" },
    size: "65x53cm",
    note: { ko: "사진 촬영: 최철림", en: "Photo: Choi Chul-lim" }
  },
  ac5: {
    thumb: "thumb/!ac5.jpg", image: "images/ac5.jpg", title: { ko: "임효선의 초상", en: "Portrait of Lim Hyoseon" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2021",
    medium: { ko: "캔버스에 유채, 콩테", en: "oil and conte on canvas" },
    size: "65x53cm",
    note: { ko: "사진 촬영: 최철림", en: "Photo: Choi Chul-lim" }
  },
  ac6: {
    thumb: "thumb/!ac6.jpg", image: "images/ac6.jpg", title: { ko: "김민주의 초상", en: "Portrait of Kim Minju" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2021",
    medium: { ko: "캔버스에 유채, 콩테", en: "oil and conte on canvas" },
    size: "65x53cm",
    note: { ko: "사진 촬영: 최철림", en: "Photo: Choi Chul-lim" }
  },
  ac7: {
    thumb: "thumb/!ac7.jpg", image: "images/ac7.jpg", title: { ko: "김혜진의 초상", en: "Portrait of Kim Hyejin" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2021",
    medium: { ko: "캔버스에 유채, 콩테", en: "oil and conte on canvas" },
    size: "65x53cm",
    note: { ko: "사진 촬영: 최철림", en: "Photo: Choi Chul-lim" }
  },
  ac8: {
    thumb: "thumb/!ac8.jpg", image: "images/ac8.jpg", title: { ko: "이채영의 초상", en: "Portrait of Lee Chaeyoung" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2021",
    medium: { ko: "캔버스에 유채, 콩테", en: "oil and conte on canvas" },
    size: "65x53cm",
    note: { ko: "사진 촬영: 최철림", en: "Photo: Choi Chul-lim" }
  },
  ac9: {
    thumb: "thumb/!ac9.jpg", image: "images/ac9.jpg", title: { ko: "이성훈의 초상", en: "Portrait of Lee Sunghoon" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2021",
    medium: { ko: "캔버스에 유채, 콩테", en: "oil and conte on canvas" },
    size: "65x53cm",
    note: { ko: "사진 촬영: 최철림", en: "Photo: Choi Chul-lim" }
  },
  ac10: {
    thumb: "thumb/!ac10.jpg", image: "images/ac10.jpg", title: { ko: "김소영의 초상", en: "Portrait of Kim Soyoung" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2021",
    medium: { ko: "캔버스에 유채, 콩테", en: "oil and conte on canvas" },
    size: "65x53cm",
    note: { ko: "사진 촬영: 최철림", en: "Photo: Choi Chul-lim" }
  },
  ac11: {
    thumb: "thumb/!ac11.jpg", image: "images/ac11.jpg", title: { ko: "문수연의 초상", en: "Portrait of Mun Suyeon" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2021",
    medium: { ko: "캔버스에 유채, 콩테", en: "oil and conte on canvas" },
    size: "65x53cm",
    note: { ko: "사진 촬영: 최철림", en: "Photo: Choi Chul-lim" }
  },
  ac12: {
    thumb: "thumb/!ac12.jpg", image: "images/ac12.jpg", title: { ko: "김윤수의 초상", en: "Portrait of Kim Yoonsu" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2021",
    medium: { ko: "캔버스에 유채, 콩테", en: "oil and conte on canvas" },
    size: "65x53cm",
    note: { ko: "사진 촬영: 최철림", en: "Photo: Choi Chul-lim" }
  },
  ac13: {
    thumb: "thumb/!ac13.jpg", image: "images/ac13.jpg", title: { ko: "임가희의 초상", en: "Portrait of Lim Gahui" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2021",
    medium: { ko: "캔버스에 유채, 콩테", en: "oil and conte on canvas" },
    size: "65x53cm",
    note: { ko: "사진 촬영: 최철림", en: "Photo: Choi Chul-lim" }
  },
  ac14: {
    thumb: "thumb/!ac14.jpg", image: "images/ac14.jpg", title: { ko: "최소희의 초상", en: "Portrait of Choi Sohee" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2021",
    medium: { ko: "캔버스에 유채, 콩테", en: "oil and conte on canvas" },
    size: "65x53cm",
    note: { ko: "사진 촬영: 최철림", en: "Photo: Choi Chul-lim" }
  },
  ac15: {
    thumb: "thumb/!ac15.jpg", image: "images/ac15.jpg", title: { ko: "윤시연의 초상", en: "Portrait of Yun Siyeon" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2021",
    medium: { ko: "캔버스에 유채, 콩테", en: "oil and conte on canvas" },
    size: "65x53cm",
    note: { ko: "사진 촬영: 최철림", en: "Photo: Choi Chul-lim" }
  },
  ac16: {
    thumb: "thumb/!ac16.jpg", image: "images/ac16.jpg", title: { ko: "엄준호의 풍경", en: "Portrait of Eom Junho" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2023",
    medium: { ko: "캔버스에 유채, 콩테", en: "oil and conte on canvas" },
    size: "65x45cm",
    note: { ko: "사진 촬영: 최철림", en: "Photo: Choi Chul-lim" }
  },
  ac17: {
    thumb: "thumb/!ac17.jpg", image: "images/ac17.jpg", title: { ko: "정예진의 풍경", en: "Landscape of Jeong Yejin" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2023",
    medium: { ko: "캔버스에 유채, 콩테", en: "oil and conte on canvas" },
    size: "27x27cm",
    note: { ko: "사진 촬영: 최철림", en: "Photo: Choi Chul-lim" }
  },
  ac18: {
    thumb: "thumb/!ac18.jpg", image: "images/ac18.jpg", title: { ko: "최도현의 풍경", en: "Landscape of Choi Dohyun" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2023",
    medium: { ko: "캔버스에 유채, 콩테", en: "oil and conte on canvas" },
    size: "116x91cm",
    note: { ko: "사진 촬영: 최철림", en: "Photo: Choi Chul-lim" }
  },
  ac19: {
    thumb: "thumb/!ac19.jpg", image: "images/ac19.jpg", title: { ko: "박주원의 초상", en: "Portrait of Park Juwon" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2023",
    medium: { ko: "캔버스에 유채, 콩테", en: "oil and conte on canvas" },
    size: "72x60cm",
    note: { ko: "사진 촬영: 최철림", en: "Photo: Choi Chul-lim" }
  },
  ac20: {
    thumb: "thumb/!ac20.jpg", image: "images/ac20.jpg", title: { ko: "안재우의 풍경", en: "Landscape of An Jaewoo" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2023",
    medium: { ko: "캔버스에 유채, 콩테", en: "oil and conte on canvas" },
    size: "72x60cm",
    note: { ko: "사진 촬영: 최철림", en: "Photo: Choi Chul-lim" }
  },
  ac21: {
    thumb: "thumb/!ac21.jpg", image: "images/ac21.jpg", title: { ko: "손경배의 초상", en: "Portrait of Son Gyeongbae" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2024",
    medium: { ko: "캔버스에 유채, 콩테", en: "oil and conte on canvas" },
    size: "90x72cm",
    note: { ko: "사진 촬영: 최철림", en: "Photo: Choi Chul-lim" }
  },
  ac22: {
    thumb: "thumb/!ac22.jpg", image: "images/ac22.jpg", title: { ko: "박지승의 풍경", en: "Landscape of Park Jiseung" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2024",
    medium: { ko: "캔버스에 유채, 콩테", en: "oil and conte on canvas" },
    size: "35x27cm",
    note: { ko: "사진 촬영: 최철림", en: "Photo: Choi Chul-lim" }
  },
  ac23: {
    thumb: "thumb/!ac23.jpg", image: "images/ac23.jpg", title: { ko: "김상소의 초상", en: "Portrait of Kim Sangso" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2024",
    medium: { ko: "캔버스에 유채, 콩테", en: "oil and conte on canvas" },
    size: "72x61cm",
    note: { ko: "사진 촬영: 최철림", en: "Photo: Choi Chul-lim" }
  },
  ac24: {
    thumb: "thumb/!ac24.jpg", image: "images/ac24.jpg", title: { ko: "오태정의 초상", en: "Portrait of Oh Taejeong" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2024",
    medium: { ko: "캔버스에 유채, 콩테", en: "oil and conte on canvas" },
    size: "72x61cm",
    note: { ko: "사진 촬영: 최철림", en: "Photo: Choi Chul-lim" }
  },
  ac25: {
    thumb: "thumb/!ac25.jpg", image: "images/ac25.jpg", title: { ko: "엄준호의 초상", en: "Landscape of Eom Junho" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2025",
    medium: { ko: "캔버스에 유채, 콩테", en: "oil and conte on canvas" },
    size: "53x45cm",
    note: { ko: "사진 촬영: 최철림", en: "Photo: Choi Chul-lim" }
  },
  ac26: {
    thumb: "thumb/!ac26.jpg", image: "images/ac26.jpg", title: { ko: "김해리의 풍경", en: "Landscape of Kim Haeri" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2025",
    medium: { ko: "캔버스에 유채, 콩테", en: "oil and conte on canvas" },
    size: "23x16cm",
    note: { ko: "사진 촬영: 최철림", en: "Photo: Choi Chul-lim" }
  },
  ac27: {
    thumb: "thumb/!ac27.jpg", image: "images/ac27.jpg", title: { ko: "최서희의 초상", en: "Portrait of Choi Seohee" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2025",
    medium: { ko: "캔버스에 유채, 콩테", en: "oil and conte on canvas" },
    size: "37x45cm",
    note: { ko: "사진 촬영: 최철림", en: "Photo: Choi Chul-lim" }
  },
  ac28: {
    thumb: "thumb/!ac28.jpg", image: "images/ac28.jpg", title: { ko: "안종혁의 초상", en: "Portrait of An Jonghyuk" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2025",
    medium: { ko: "캔버스에 유채, 콩테", en: "oil and conte on canvas" },
    size: "72x117cm",
    note: { ko: "사진 촬영: 최철림", en: "Photo: Choi Chul-lim" }
  },
  ac29: {
    thumb: "thumb/!ac29.jpg", image: "images/ac29.jpg", title: { ko: "김유진의 풍경", en: "Landscape of Kim Yujin" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2025",
    medium: { ko: "캔버스에 유채, 콩테", en: "oil and conte on canvas" },
    size: "72x91cm",
    note: { ko: "사진 촬영: 최철림", en: "Photo: Choi Chul-lim" }
  },
  ac30: {
    thumb: "thumb/!ac30.jpg", image: "images/ac30.jpg", title: { ko: "이예지의 풍경", en: "Landscape of Lee Yeji," }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2025",
    medium: { ko: "캔버스에 유채, 콩테", en: "oil and conte on canvas" },
    size: "60x45cm",
    note: { ko: "사진 촬영: 최철림", en: "Photo: Choi Chul-lim" }
  },



  ad4: {
    thumb: "thumb/!ad4.jpg", image: "images/ad4.jpg", title: { ko: "풍경 조각 1", en: "Landscape Piece 1" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    subImages: [
      { thumb: "thumb/!ad4-1.jpg",image: "images/ad4-1.jpg" },
      { thumb: "thumb/!ad4-2.jpg",image: "images/ad4-2.jpg" },
      { thumb: "thumb/!ad4-3.jpg",image: "images/ad4-3.jpg" },
      { thumb: "thumb/!ad4-4.jpg",image: "images/ad4-4.jpg" },
      { thumb: "thumb/!ad4-5.jpg",image: "images/ad4-5.jpg" }
      ],
    year: "2025",
    medium: { ko: "천 접착제 코팅, 폴리에스터 실로 꿰맨 캔버스 위에 아크릴릭, 콩테", en: "acrylic and conte on canvas sewn with polyester thread and coated with textile adhesive" },
    size: "98(h)x27x17cm",
    note: { ko: "사진 촬영: 최철림", en: "Photo: Choi Chul-lim" }
  },
ad5: {
    thumb: "thumb/!ad5.jpg", image: "images/ad5.jpg", title: { ko: "풍경 조각 2", en: "Landscape Piece 2" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    subImages: [
      { thumb: "thumb/!ad5-1.jpg",image: "images/ad5-1.jpg" },
      { thumb: "thumb/!ad5-2.jpg",image: "images/ad5-2.jpg" },
      { thumb: "thumb/!ad5-3.jpg",image: "images/ad5-3.jpg" },
      { thumb: "thumb/!ad5-4.jpg",image: "images/ad5-4.jpg" },
      { thumb: "thumb/!ad5-5.jpg",image: "images/ad5-5.jpg" },
      { thumb: "thumb/!ad5-6.jpg",image: "images/ad5-6.jpg" }
    ],
    year: "2025",
    medium: { ko: "천 접착제 코팅, 폴리에스터 실로 꿰맨 캔버스 위에 아크릴릭, 콩테, 나무", en: "acrylic, conte on canvas sewn with polyester thread and coated with textile adhesive and wood" },
    size: "86(h)x124x27cm",
    note: { ko: "사진 촬영: 최철림", en: "Photo: Choi Chul-lim" }
  },
  ad6: {
    thumb: "thumb/!ad6.jpg", image: "images/ad6.jpg", title: { ko: "풍경 조각 3", en: "Landscape Piece 3" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    subImages: [
      { thumb: "thumb/!ad6-1.jpg",image: "images/ad6-1.jpg" },
      { thumb: "thumb/!ad6-2.jpg",image: "images/ad6-2.jpg" },
      { thumb: "thumb/!ad6-3.jpg",image: "images/ad6-3.jpg" },
      { thumb: "thumb/!ad6-4.jpg",image: "images/ad6-4.jpg" },
      { thumb: "thumb/!ad6-5.jpg",image: "images/ad6-5.jpg" },
      { thumb: "thumb/!ad6-6.jpg",image: "images/ad6-6.jpg" },
      { thumb: "thumb/!ad6-7.jpg",image: "images/ad6-7.jpg" }
      ],
    year: "2025",
    medium: { ko: "천 접착제 코팅, 폴리에스터 실로 꿰맨 캔버스 위에 아크릴릭", en: "acrylic and conte on canvas sewn with polyester thread and coated with textile adhesive" },
    size: "99(h)x47x33cm",
    note: { ko: "사진 촬영: 최철림", en: "Photo: Choi Chul-lim" }
  },









ae1: {
    thumb: "thumb/!ae1.jpg", image: "images/ae1.jpg", title: { ko: "뒤집힌 공간 1", en: "Upside-Down Space 1" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2024",
    medium: { ko: "캔버스에 유채, 콩테", en: "oil and conte on canvas" },
    size: "91.4x65cm",
    note: { ko: "사진 촬영: 최철림", en: "Photo: Choi Chul-lim" }
  },

ae2: {
    thumb: "thumb/!ae2.jpg", image: "images/ae2.jpg", title: { ko: "공간 1", en: "Space 1" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2024",
    medium: { ko: "캔버스에 유채, 콩테", en: "oil and conte on canvas" },
    size: "73x91.4cm",
    note: { ko: "사진 촬영: 최철림", en: "Photo: Choi Chul-lim" }
  },

ae3: {
    thumb: "thumb/!ae3.jpg", image: "images/ae3.jpg", title: { ko: "공간 2", en: "Space 2" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2024",
    medium: { ko: "캔버스에 유채, 콩테", en: "oil and conte on canvas" },
    size: "91.4x73cm",
    note: { ko: "사진 촬영: 최철림", en: "Photo: Choi Chul-lim" }
  },

ae4: {
    thumb: "thumb/!ae4.jpg", image: "images/ae4.jpg", title: { ko: "공간 3", en: "Space 3" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2024",
    medium: { ko: "캔버스에 유채, 콩테", en: "oil and conte on canvas" },
    size: "73x91.4cm",
    note: { ko: "사진 촬영: 최철림", en: "Photo: Choi Chul-lim" }
  },







  af1: {
    thumb: "thumb/!af1.jpg", image: "images/af1.jpg", title: { ko: "풍경 새김 1", en: "Landscape Carving 1" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2024",
    medium: { ko: "나무에 마커", en: "marker on wood" },
    size: "25x18cm",
    note: { ko: "", en: "" }
  },
  af2: {
    thumb: "thumb/!af2.jpg", image: "images/af2.jpg", title: { ko: "풍경 새김 2", en: "Landscape Carving 2" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2024",
    medium: { ko: "나무에 마커", en: "marker on wood" },
    size: "25x18cm",
    note: { ko: "", en: "" }
  },








bb1: {
    thumb: "thumb/!bb1.jpg", image: "images/bb1.jpg", title: { ko: "이서연의 언어 메모: 한 색상으로 대충 칠한 바탕, 바탕 붓질의 구조가 형상이 됨, 부분에서 전체로 확장, 얇고 가볍고 투명한 한 겹의 레이어로서 윤슬, 그 빛이 내려치는 감각, 여러 사진을 두고 눈을 왔다 갔다하며 환경 구성", en: "Language Notes on Lee Seoyeon: A roughly painted monochrome ground, the structure of the background brushwork becoming the image, expanding from the part to the whole, shimmering light as a thin, light, transparent single layer, the sensation of light pouring down, composing an environment while moving the gaze back and forth between multiple photographs" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2026",
    medium: { ko: "캔버스에 오일, 린시드와 테레핀", en: "oil with linseed oil and turpentine on canvas" },
    size: "65x50cm",
    note: { ko: "사진 촬영: 최철림", en: "Photo: Choi Chul-lim" }
  },
bb2: {
    thumb: "thumb/!bb2.jpg", image: "images/bb2.jpg", title: { ko: "최도현의 언어 메모: 하늘이 위, 땅이 아래인 고정관념을 나이프가 그으며 나누어 구조적 붓질인 기하적 꼴, 회화적 붓질은 의태어(탱글/흩날리는/질척/빠른/끊어지는), 크리피함, 제스처로 기하적 꼴을 휘저어 부숨, 찰나에 떠오르는 상, 영적인 사건 상상, 음울한 정서", en: "Language Notes on Choi Dohyun: Breaking the fixed idea of the sky above and the ground below by drawing with a palette knife, creating geometric forms through structural brushwork; painterly brushstrokes expressed through onomatopoeic qualities (springy / fluttering / viscous / fast / broken), creepiness, disrupting geometric forms through gestures, fleeting images that suddenly arise, imagining spiritual events, a sombre mood" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2026",
    medium: { ko: "캔버스에 오일, 린시드와 테레핀", en: "oil with linseed oil and turpentine on canvas" },
    size: "116.5x91cm",
    note: { ko: "사진 촬영: 최철림", en: "Photo: Choi Chul-lim" }
  },
bb3: {
    thumb: "thumb/!bb3.jpg", image: "images/bb3.jpg", title: { ko: "이수빈의 언어 메모: 바닥에 오일 도포하고 좋아하는 색상의 물감을 끌고 다님, 형상이 잡히면 부숨, 사람을 그리기 좋은 배경을 상상, 풍경 같기도 한 화면은 색채/궁창, 선은 숨 쉬듯 편안하지만 평안함이 싫으면 점묘, 너무 빠른 생각을 잡아주는 문장 필요, 점은 선을 긴 시간에 걸쳐 그리는 망설임", en: "Language Notes on Lee Subin: Applying oil to the surface and dragging paint in favourite colours, breaking the image once a form begins to emerge, imagining a background suitable for painting a person, a pictorial space resembling a landscape, a field of colour/firmament, lines breathing comfortably, but turning to pointillism when tranquillity becomes undesirable, a sentence needed to hold back thoughts moving too quickly, points as the hesitation of drawing a line over a long duration" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2026",
    medium: { ko: "캔버스에 오일, 린시드와 테레핀", en: "oil with linseed oil and turpentine on canvas" },
    size: "90.5x116.5cm",
    note: { ko: "사진 촬영: 최철림", en: "Photo: Choi Chul-lim" }
  },
bb4: {
    thumb: "thumb/!bb4.jpg", image: "images/bb4.jpg", title: { ko: "김자연의 언어 메모: 추상적 공간, 대지, 공기가 순환, 연못, 자연에 관한 유기적 이미지와 차가운 액정, 디지털 이미지 파편적으로 콜라주, 원본 디지털 이미지를 닮으려고 하되 세웠던 계획으로부터 벗어나기, 불편한 아날로그에서 행선지 변경", en: "Language Notes on Kim Jayeon: Abstract spaces, land, circulating air, ponds, organic imagery of nature, cold LCDs, fragmentary digital images collaged together, trying to resemble the original digital image while moving away from the initial plan, changing direction through the discomfort of the analogue" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2026",
    medium: { ko: "캔버스에 오일, 린시드와 테레핀", en: "oil with linseed oil and turpentine on canvas" },
    size: "60.3x72.5cm",
    note: { ko: "사진 촬영: 최철림", en: "Photo: Choi Chul-lim" }
  },
bb5: {
    thumb: "thumb/!bb5.jpg", image: "images/bb5.jpg", title: { ko: "손예인의 언어 메모: 레이어 쌓지 않고 한번에, 보슬보슬한 촉감, 작은 게 쌓여 사글사글한 노이즈, 바람처럼 살아있는 느낌, 사람이 지나간 동선이 배경이 되어 둘러쌈, 애니메이션의 장면장면, 크레오그라피, 일상적 안무, 동선, 움직임의 글쓰기, 배경이 만화 칸칸이 나뉜 것 같지만 사각형 아님", en: "Language Notes on Son Yein: No layering, painting all at once, a soft and powdery texture, small particles accumulating into a subtle noise, a feeling alive like the wind, the paths people have taken becoming the surrounding background, scenes from animation, choreography, everyday choreography, trajectories, writing through movement, a background that seems divided into comic panels, though not rectangular" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2026",
    medium: { ko: "캔버스에 오일, 린시드와 테레핀", en: "oil with linseed oil and turpentine on canvas" },
    size: "72.5x116.5cm",
    note: { ko: "사진 촬영: 최철림", en: "Photo: Choi Chul-lim" }
  },
bb6: {
    thumb: "thumb/!bb6.jpg", image: "images/bb6.jpg", title: { ko: "남서정의 언어 메모: 사진에 포착되지 않는 감각을 해체해서 쌓기, 오래된, 날아가는 새/분수에 비친 햇살/웃음소리/여름 볕/습도와 같은 물리과학적 작용, 동사형 결과, 동적인 변화, 다양한 속도와 시간성, 안 어울릴 것 같은 색 얹고 수습", en: "Language Notes on Nam Seojeong: Deconstructing and accumulating sensations that cannot be captured in photographs, old things, birds flying away/sunlight reflected in fountains/sounds of laughter/summer sunlight/humidity as physical and scientific phenomena, verb-like outcomes, dynamic changes, various speeds and temporalities, adding colours that seem incompatible and bringing them back into harmony" }, artist: { ko: "권회찬", en: "Kwon Hoechan" },
    year: "2026",
    medium: { ko: "캔버스에 오일, 린시드와 테레핀", en: "oil with linseed oil and turpentine on canvas" },
    size: "130x89cm",
    note: { ko: "사진 촬영: 최철림", en: "Photo: Choi Chul-lim" }
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
    id: "Homophonic",
    title: { ko: "", en: "Homophonic" },
    children: [
      { id: "portrait", title: { ko: "자화상", en: "Portrait" }, works: ["a37","a36","a35","a34","a33","a32","a31","a30","a28","a27","a26","a25","a23","a22","a21","a20","a19","a18","a17","a16","a15","a14","a13","a12","a11","a10","a9","a8","a7","a6","a5","a4","a1"] },
      { id: "landscape", title: { ko: "풍경", en: "Landscape" }, works: ["ab4", "ab3","ab1"] },
      { id: "others-portrait", title: { ko: "타인의 초상", en: "Portraits of Others" }, works: ["ac30","ac29","ac28","ac27","ac26","ac25","ac24","ac23","ac22","ac21","ac20","ac19","ac18","ac17","ac16","ac15","ac14","ac13","ac12","ac11","ac10","ac9","ac8","ac7","ac6","ac5","ac4","ac3","ac2","ac1"] },
      { id: "space", title: { ko: "공간", en: "Space" }, works: ["ae4","ae3","ae2", "ae1"] },
      { id: "piece", title: { ko: "조각", en: "Piece" }, works: ["ad6", "ad5", "ad4",] },
      { id: "carving", title: { ko: "새김", en: "Carving" }, works: ["af1","af2"] }
      

    ]
  },
  {
    id: "Polyphonic",
    title: { ko: "", en: "Polyphonic" },
    children: [
      { id: "composition", title: { ko: "구성", en: "Composition" }, works: [] },
      { id: "language-notes", title: { ko: "언어 메모", en: "Language Notes" }, works: ["bb6","bb5","bb4","bb3","bb2","bb1",] }
      
    ]
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
      { id: "mine-preface", title: { ko: "서문", en: "Preface" }, posts: ["zs1","zs2","zs3","zc1","zg7"] },
      { id: "mine-critique", title: { ko: "비평", en: "Critique" }, posts: [] }
    ]
  },
  {
    id: "others",
    title: { ko: "외부인 글", en: "Written by Others" },
    children: [
      { id: "others-preface", title: { ko: "서문", en: "Preface" }, posts: ["zg1","zg2","zg3","zg4","zg5","zg6","zg8","zg9","zg10","zp1"] },
      { id: "others-critique", title: { ko: "비평", en: "Critique" }, posts: ["zs1-1","zs3-1","zp1-1"] }
    ]
  }
];

// ------------------------------------------------------------
// 4. 글 원본 (id로 다른 곳에서 참조)
//
//    body 안에서 [보일 텍스트](URL) 형식으로 쓰면 하이퍼링크가 됩니다.
//    body 안에서 -[^각주로 넣을 내용]- 형식으로 쓰면, 그 자리에 작은 번호가
//    자동으로 붙고 글 맨 끝에 각주 목록이 순서대로 자동 생성됩니다.
//    예: "이 개념은 벤야민에게서 왔다[^발터 벤야민, <기술복제시대의 예술작품>, 1935]."
//    번호를 직접 세거나 위치를 따로 관리할 필요 없이, 각주 내용만 그 자리에 적으면 됩니다.
//
//    -*글자*-  처럼 별표로 감싸면 이탤릭체(기울임체)가 됩니다.
//    **글자** 는 볼드체가 됨
//    __글자__  는 밑줄
//    [글자](주소)  는 링크달기임
//
//    문단 앞에 [center], [left], [right] 를 쓰면 그 문단만 정렬이 바뀝니다
//    (표시 자체는 화면에 안 보임). 아무 표시가 없으면 원래대로 양쪽정렬(justify).
//    예: "[center]가운데로 정렬하고 싶은 문단입니다."
//
//    줄바꿈은 이렇게 자연스럽게 적용됩니다:
//      - \n 한 번  = 같은 문단 안에서 줄만 바뀜(문단 구분 아님)
//      - \n\n (빈 줄 한 번) = 새 문단(기본 문단 간격)
//      - \n\n\n, \n\n\n\n ... = 새 문단 + 빈 줄을 넣은 개수만큼 위에 여백이 더 벌어짐
//
//    title/author/excerpt/body = 이중언어, date = 언어 무관
//
//    ""를 사용할 경우 고장날 수 있으므로 “”를 사용할 것.
// ------------------------------------------------------------
const POSTS = {
  "zg1": {
    title: { ko: "TORQUE 2 / NEUTRAL STEER", en: "" },
    author: { ko: "노두용", en: "Noh duyong" },
    date: "2022-02-18",
    excerpt: { ko: "전시 서문", en: "Preface" },
    body: {
      ko: "-*“뉴트럴스티어(neutral steer)는 빠른 속도로 커브 길을 주행하는 차량의 핸들 조향 각도와 회전 반경이 완벽히 일치하는 상태를 의미한다. 하지만 노면의 컨디션, 타이어의 접지면적, 자동차의 속도 및 관성 등과 같이 조향에 직접적으로 영향을 끼치는 외부 요소들로 인해 뉴트럴 스티어는 차량의 이상적인 진행경로를 제시할 뿐, 실주행 상황에선 예측된 조향 값에 비해 차량의 회전반경이 작은 언더스티어(under steer)와 반대의 경우인 오버스티어(over steer)로 차량의 코너링을 설명한다.”*-\n\n실린더는 2022년 2월 18일부터 3월 6일까지 박예림, 왕호연, 권회찬의 <TORQUE 2/ NEUTRAL　STEER>를 개최한다. 공간의 연례프로그램 ‘TORQUE’의 두 번째 시리즈 <NEUTRAL STEER>는 이론적으로 존재하는 뉴트럴스티어와 실제 운전상황에 적용되는 언더스티어 및 오버스티어의 개념을 전시로 불러와 이를 세 작가의 여정에 대입하고, 그 이야기를 전개해나간다. 현실 속 다른 위상의 세 차량역학 용어들은 상상의 영역에 나란히 위치해 그들의 과거와 현재를 수식하고, 이 모습을 담고 있는 실린더는 전시가 만드는 가상의 트랙 위 거대한 임시차량이 된다.\n\n<NEUTRAL STEER>에 참여하는 박예림, 왕호연, 권회찬은 작년 12월, 작가로서 첫 발을 내딛는 각자의 졸업전시를 진행했다. 그들에게 학부과정은 작가가 되기 전 넘어야 할 최초의 산이었다. 세 작가는 저마다의 방법으로 등반을 위해 에너지를 조절하고 때로는 스퍼트를 올려가며, 험준한 오르막길을 지나왔다. 수년 전, 첫 여정이 시작된 봄을 지나 여러 해가 지난 뒤 맞이한 정상 부근의 마지막 언덕길, 그들은 눈이 내리기 시작한 고지의 정복을 목전에 두고 있었다. 온전한 성취에 대한 기대감이 이를 극복해냈고, 결국 등정에 성공했다. 그들은 정상에 하나의 이정표를 세우고, 잠시 숨을 고른 뒤, 다음 목적지를 설정했다. 그리고 누적된 위치에너지를 운동에너지로 전환해 속도감 있는 하산을 시작했다.\n\n가장 추운 겨울의 순간이 지나가도 여전히 오늘의 추위는 매섭다. 눈보라가 몰아치는 내리막 길, 도로 위에 쌓인 눈은 다시 하강하는 오도와 함께 얇디얇은 살얼음으로 변하고, 이는 서서히 그 세력을 확장하며 차량의 감속과 흔들림을 유발한다. 타이어는 중력의 도움을 받아 얼음이 자라나고 퍼지는 것을 눌러 없애보려 하지만 자연의 힘을 거스르기엔 역부족이다. 눈발은 더욱 더 거세지기 시작하고, 점점 줄어드는 마찰력은 차체가 좌우로 흔들리는 요잉(yowing)을 발생시킨다. 더 이상 타이어의 접지력 만으로는 차체를 제어할 수가 없다. 산의 출구이자 내리막의 끝을 앞에 두고 통제력을 상실한 차량은 결국 굽어진 도로의 방향으로 미끄러져 오버스티어와 함께 슬립을 일으킨다. 긴박한 순간, 차량에 탑승중인 레이서들은 기민하게 상황을 판단하고, 최적의 탈출경로를 고안한다. 그리고 다시 조향의 영역으로 돌아와 순간적인 판단으로 핸들을 반대로 감았다 푸는 카운터스티어(counter steer)를 통해 결빙과 제어상실의 순간에서 탈출하고 그들의 첫 번째 여정을 마무리한다.\n\n졸업전시와 그 뒤의 시간, 세 작가의 지난 여정은 산을 감싸고 있는 굽이 길을 오르내리며 발생한 언더스티어와 오버스티어처럼 의도와 달리 흘러간 순간의 연속이었을지도 모른다. 그러나 마침내 그들은 긴 호흡과 함께 여러 난관을 헤치며 하나의 코스를 완주하였고, 그 보상으로 누적된 경험의 수치가 입력된 트로피이자 그들을 뉴트럴스티어로 안내할 스티어링 휠을 부여받았다. 이 과정에서 그들이 트랙 위에 남긴 개별적 스키드마크는 길게 늘어뜨린 작업의 모습이며, 뉴트럴스티어를 지향했던 노력의 징표이기도 하다. 손길이 닿지 않는 생태계에 자리 잡은 것들이 서로 얽히며 남게 되는 흔적과 그것의 자리에 대한 이야기를 풀어가는 박예림, 우리와 관계를 맺고 있는 물질들의 기원과 그것들의 작용하는 여러 연금술의 순간들을 포착해 가소성을 부여하고 이를 기록하는 왕호연, 그리고 졸업전시를 함께 진행한 동료들의 낙서를 기어그이 매개로 전환하고, 이를 변곡점 삼아 가변적인 관계의 끈을 만들어내는 권회찬까지, 세 작ᄀᆞ로부터  출발한 타이어 자국은 각자의 산을 넘어 이곳 실린더까지 이어져 왔고, 이는 가시화된 시간의 흔적을 보여줌과 동시에 그들과 유사한 여정을 준비 중인 후행주자들에게 보내는 유형의 가이드라인 이 된다.\n\n겨울의 끝자락, 계절의 변화가 만든 담금질 끝에 다시 맞이한 봄의 초입, 세 작가는 지난날을 되돌아보며 그들의 랩타임을 체크하고, 최적화된 레코드라인을 찾기 위해 오늘도 그리드로 나선다. 그리고 이곳에서 2022년을 위한 본격적인 가속을 시작한다.\n\n[right]글 : 노두용\n\n\n\n\n토크 시리즈는 실린더의 연례 기획  프로그램 중 하나로, 매년 미술대학 졸업자들의 졸업 전시 종료와 맞물려 진행되는 신속한 성격의 전시이다. 토크의 전시자들은 갓 미술대학을 졸업한 예비 작가들이자, 아카데미의 끝과 미술계의 시작점 사이에서 도약을 준비 중인 스프린터, 혹은 그들의 잠재력을 폭발시키기 위해 RPM을 올리고 있는 드래그 레이서들이기도 하다.\n\n토크 전시에서 공간 실린더는 내연기관의 실린더로 대치되며, 토크 (돌림힘)의 일률은 실린더의 개수와 반비례하여 작동하기에 하나의 실린더는 보다 효율적인 토크를 낼 수 있다. 이에 실린더는 토크 전시를 통해 마치 고성능 자동차의 퍼포먼스처럼, 거대 출력이 지연되는 터보랙 (Turebo-Lag) 없이 런치컨트롤을 시행할 작가들의 출발선을 제공하고, 출발 이후 생겨날 그들의 작업 활동이 꺾이지 않는 플랫 토크의 형태로 관성을 지닌 채 계속 진행될 수 있길 기대한다.\n\n\n\n\n박예림 (b.1998)\n\n박예림은 일상의 주변부에서 채집한 물질들에 몸체를 부여하여 그들의 유약한 외관이 가공된 스펙터클로서 드러나는 풍경을 상상한다. 작가는 조각과 평면 사이의 상호 관계를 통해 원본의 신체구조와 표면을 재조합하여 독립적인 외피를 제작한다. 생태계의 깊숙한 곳, 은밀히 자리 잡은 존재들의 증폭된 신체는 외부 공간과 충돌하며 균열을 일으키고, 평형이 깨져버린 표면에서 발현된 감정과 남겨진 흔적들은 서로 뒤엉키며 작가가 선택한 물질에 대한 새로운 기억을 담는 형상을 제시한다.\n\n\n왕호연 (b.1996)\n\n왕호연은 시선의 방향을 내면으로 돌려 그 속에 떠오르는 장면을 길어 올린다. 심상의 질감에 의해 매체와 재료가 선택되고, 일상에서 관찰한 디테일을 상상력의 연료로 삼아 자신이 몰입하는 다양한 주제를 연출하는 데 사용한다. 작가는 작업을 연속되는 과정 속의 하나의 상태로 받아들이고, 우연적인 현상과 의도가 겹치는 순간을 채집하고 보존한다. 또한 기억과 이미지, 물질 간의 관계와 작가 자신을 모두 가소성의 영역에 두고 변수가 교차되는 지점을 탐구한다.\n\n\n권회찬 (b.1995)\n\n권회찬은 개별단위의 회화를 두 요소로 분류하여 이해한다. 하나는 평면 위에 드로잉으로서 녹아드는 작가의 제스처이고, 다른 하나는 표면 위에 실질적으로 모습을 드러내고 사용되는 재료의 물성이다. 이 두 요소 간ㅇ늬 충돌 및 결합 과정에서 발생하는 장면은 작가의 정념과 수행이 발현된 결과물로서, 결국 이는 견고히 결합된 하나의 ‘회화가 된다. 작가는 ’Portrait of Doodle‘ 시리즈에서 제공받은 타인의 낙서 위에 부가적인 선을 추가하고, 당사자와 분리된 작가의 제스처가 물성과 어떤 방식으로 관계를 맺고, 재조합되는지 탐구한다. 이처럼 작가는 재료와 물성, 제스처와 정신성의 관계와 같은 근대적 개념들을 고전적 양식에 대입하여 이를 오늘날의 방법으로 호출하고 해체함으로써 작가와 회화 사이의 대안적 관계를 모색한다.",
      en: ""
    }
  },
  
   "zg2": {
    title: { ko: "", en: "Nowon Young Artist Map" },
    author: { ko: "", en: "" },
    date: "2022-11-15",
    excerpt: { ko: "인터뷰", en: "Interview" },
    body: {
      ko: "__권회찬__\n\n주변 세계 혹은 정신적인 것을 회화 매체를 통해 구현하는 과정에서 작동되는 수많은 요소를 낙서와 같이 기본적인 그리기를 통해 평면에 실체화함으로써, 전통적 의미의 드로잉, 미디엄, 메소드와 제스처, 그리고 이를 엮는 작가 주제에 대해 탐구하고 있으며, 이는 작업자와 회화 사이의 대안적 관계를 모색해 온 고민을 반영한다.\n\n휘갈긴 낙서가 남긴 선들 사이의 공간에 자립을 가능하게 하는 보조선을 추가함으로써 낙서는 어느새 조형물이 되어 평면 속 가상 공간에 놓이게 된다. 이렇게 낙서로 시작한 구조적 조형물은 정신성의 초상이 되고, 이 초상이 실제 공간을 연상시키는 평면상의 공간과 어떠한 관계를 맺는지 역시 탐구의 대상이 된다.\n\n\n__Interview__\n\n**Q. 자기소개 부탁드립니다.**\n안녕하세요. 평면회화 작업을 하는 권회찬입니다. 현재 서울과학기술대학교 대학원 조형예술과에 재학중이고요. 아직은 개인전은 하지 않았습니다.\n\n**Q. 현재 진행중인 작업에 대해 설명해주세요.**\n제 작업은 사람의 필체에 그 사람의 정신성이 담겨있다는 통념에서 출발합니다. 이 통념에 따르면, 드로잉은 행위자에게 익숙한 조형요소나 습관 등을 반영하는 제스처를 통해 주체가 세계를 보는 방식과 태도를 드러냅니다. 그래서 제가 하는 작업은 계획적으로 통제된 화면 안에서 이러한 관념들이 실제로 작동하는지 보여주는 실험에 가깝다고 할 수 있습니다. 작업과정은 우선, 캔버스 위에 콩테로 낙서를 합니다. 그 낙서에는 제가 상상하고 있는 이미지와 제 헛손질, 강조점, 그리고 화면을 어떻게 구성하고자 하는지 등의 조형요소들이 직간접적으로 반영됩니다. 그 다음에는 그렇게 콩테로 그려진 낙서가 있는 평면에 가상의 공간을 설정하고 낙서가 그 안에서 홀로 설 수 있도록 선을 추가합니다. 그러면 2차원 내에서 부유하던 직선과 곡선이 평면 내에서 3차원의 입체로 변하면서 하나의 구조적 조형물로 실체화하게 됩니다. 저는 개인의 낙서에서 출발한 이 조형물을 행위자의 정념을 반영한 정신성의 초상으로 명명하였습니다. 이 전제를 바탕으로 지금까지 작업을 이어가고 있으며, 이번에 NYAM PROJECT에 참여하는 작업은 제가 그린 낙서로부터 파생된 5번째, 6번째 자화상입니다.\n\n**Q. 앞으로의 작품활동 계획은?**\n내년 3월 즈음에 개인전이 있을 예정입니다. 제 인스타그램 계정을 팔로우 해놓으시면 피드에서 전시관련 정보 접하실 수 있을 겁니다.\n\n**Q. 다른 작가들과 함께 노원구에서 해보고 싶은 문화예술관련 활동은?**\n아무래도 작가이다보니 전시가 가장 중요한 활동이 될 것 같습니다.\n\n**Q. 청년예술인을 위해 노원구에 생겼으면 하는 문화예술 공간 혹은 노원구에 바라는 정책이 있다면?**\n전시공간이 없지는 않을 겁니다. 다만 홍보가 좀 덜 된 느낌은 있습니다. 이런 문제를 해결하기 위해서라면 사람들을 끌어들일 만한 매력적인 전시프로그램을 기획하고 다양한 방식으로 홍보를 할 필요가 있다고 생각합니다. NYAM PROJECT도 그런 의미에서 중요한 기획인 것 같습니다.",
      en: ""
    }
  }, 
    


   "zg3": {
    title: { ko: "나의 회화적 순간", en: "My Painting Moment" },
    author: { ko: "양기찬", en: "Yang Kichan" },
    date: "2023-03-10",
    excerpt: { ko: "전시 서문", en: "Preface" },
    body: {
      ko: "          일전에, 시네마와는 다른 결의 러닝타임이 회화에서도 흐른다는 얘기를 진예리 작가에게 들은 적이 있었다. 비록 그 화면은 영상처럼 움직이지 않더라도, 들여다보지 않고는 찰나로만 목격할 수 없는 시간의 층위가 있다는 얘기가 흥미롭게 다가왔다. 보는 이에게는 순간적인 장면일지라도, 실제로 그 순간은 작가가 순간순간의 조형적 사유와 신중하면서도 과감한 획들로 층층이 쌓았을 표면일 테니 말이다. 그리고 이는 작가들마다 놓인 처지와 경험, 재료와 씨름하는 순간의 판단들에 따라 각기 다른 시간에 개별적으로 구현되어졌을 것이다. 이처럼 양식의 차이를 도래하는 창작의 과정은 회화가 단지 매체의 고유성만으로 규정하기도, 작가의 미학관만으로 특징 짓기 어렵다는 것을 상키 시켜준다. 왜냐하면 회화는 작가가 현존하는 순간들과 회화의 체계가 부딪히며 맞물릴 때, 독립적인 공간이자 존재로서 나타나기 때문이다. 이번 더 소소에서 진행되는 ‘나의 회화적 순간’展은 회화가 발생하고 완성되는 순간에 대한 자문으로부터 비롯되었다. 이와 같은 논의가 제기되었던 것은, 해당 전시의 참여작가들이 고정된 결과 값 보다는 창작 과정으로부터 회화의 형식을 발견하고 형성해 나가는 유사성이 있던 까닭이었다. 각자의 전략들에 따라 레퍼런스의 수집 및 작품 구상이 선행되었고, 그리는 방식들이 선택되었을 지라도, 그림은 예측에서 조금 빗기거나 벗어나 다른 모습으로 마무리되는 경우가 허다했다. 이들은 매순간의 그리기를 통해 회화의 흔적을 쫓으며, 화면 위를 유영하다 마주친 우연들을 나름 체계화함으로써 회화를 도출하는 순간을 맞이하였다.\n\n          권회찬 작가와 박정윤 작가, 그리고 진예리 작가는 이성적인 접근으로 그림을 출발하기 보다는, 즉흥적으로 내던진 몸짓에서부터 단계적인 그리기를 수행하는 편이다. 한 예로, ‘자화상’의 제목을 가진 권회찬 작가의 회화는 명암이 있는 환영적 공간에 사실적 인물이 아닌 출처가 불분명한 곡면의 조형물을 등장시키는데, 해당 조형물은 사실 작가가 자신의 낙서 위로 면들을 덧입혀 그린 허구적 모형이다. 작가는 무의미해 보이는 낙서에서도 사람마다의 의식과 무의식이 서로 버무려져, 각자의 고유한 제스처와 형태가 나타난다고 생각한다. 여기에 그는 본인 회화의 영점으로 설정한 명암법과 원근법을 응용함으로써 실재 같은 허상을 그리는데, 이와 같이 무의식과 의식을 넘나드는 그리기 방식을 통해 작가는 자신과 회화의 내부로부터 본인의 회화적 본질을 모색하고자 한다.\n\n          권회찬 작가의 그리기는 화면의 중앙에서부터 비롯된다면, 반대로 박정윤 작가는 화면의 경계에서부터 내부로 향하는 그리기를 보여준다. 작가는 평면적 오브제를 점유해야 할 재료가 아닌 대등한 존재로써 바라보는 경향이 있다. 규격화된 육면체의 면적이 몸짓의 제약처럼 다가왔다는 박정윤 작가는, 그것을 부정하는 대신 존중하고 포용하는 방식으로 화면의 제한을 극복하는 추상화를 선보인다. 제한된 화면 속에서 공간을 심층화 하고자, 작가는 선회하는 유기적 형상을 겹겹이 쌓아 시선의 흐름을 내부로 몰입시키며, 외부적으로는 안료의 물성과 돌출된 평면을 드러내어 회화의 입체성을 부각시킨다. 이 때문에 그녀의 회화에선 환영적 공간과 실재의 공간 사이를 넘나드는 공간의 확장성이 나타나게 된다.\n\n          앞선 두 작가는 회화의 내부에 집중하거나, 내부와 외부의 관계를 조율하는 몸짓이었다면 진예리 작가는 내부로부터 외부로 뻗쳐가는 몸짓을 구사한다. 작가는 본인의 회화를 비선형적인 내러티브로 설명하기도 하는데, 이는 타자와의 관계로부터 발생한 감정을 서사로 기록하며, 해당 이야기를 기반으로 본인의 감정을 회화적 제스처(gesture)로 재해석하기 때문이다. 이와 같이 감정을 가시화하는 몸짓에서부터 점층적으로 그려 나가다 보니, 그의 그림에선 신체성이 두드러질 수밖에 없다. 그 속에 나타난 몸짓의 흔적들은 불협화음처럼 서로 뒤엉키다가 화합을 이루며, 어느 순간에는 독자적인 시공간을 형성하기에 이른다. 이중에는 손, 눈과 같은 신체적 형상이 드러나는데, 이와 같은 단서는 감정이 증폭된 작가의 회화를 한층 더 지시성이 있는 서사적 회화로 돋보여준다.\n\n          이들과는 반대로, 본능적인 행위보다 계산적으로 작업을 진행하는 이도 있다. 아날로그보다 디지털 화면으로 세계를 마주하는 것이 익숙한 김상소 작가에게 디지털 이미지는 가상이 아닌 실재의 일부이다. 실제로 그의 회화 속에서 등장하는 모든 조형적 요소들은 디지털 이미지에서 추출된 정보들로, 그는 아카이빙 한 이미지 데이터들을 가지고 순차적으로 그리는 프로세스를 설정한다. 출발은 객관적인 데이터와 구체적인 계획으로부터 출발을 하였지만, 아이러니하게도 완성지점에 다다르면 여러 회화적 변수들로 인해 정보는 사라지고 회화만이 남게 된다. 다양한 장르의 이미지들을 절충하고 해체하며 누적하는 과정을 통해, 작가는 과잉된 이미지들을 회화 안에 수용하고 체계화할 수 있는 범위를 실험해 나간다.\n\n          어떤 작가들은 데이터 자료 이외에 삶의 밀접한 곳으로부터 회화의 소재를 발견하여 모으기도 한다. 자기 앞에 놓인 순간 순간의 상황과 사건들, 그리고 이미지들에 대해 드로잉으로 반응하는 조완준 작가는 이를 다시 회화 안에서 새로운 관계로 재조합 하는 것을 즐긴다. 작가에게 채택된 소재들은 그것의 정보보다는 평면적으로 번역된 존재로써 의미를 두며, 이들의 조형적인 구성을 통해 순간적인 상황과 임의적인 표면성을 드러낸다. 이러한 회화 속 대상을 미숙한 존재로 빗대는 작가는 그림을 어눌하게 표현하는 것을 고수하는 편인데, 이를 나타내고자 그는 붓터치를 의도적으로 뭉개거나 거칠게 표현하며, 대상의 특징과 형태를 단순화함으로써 회화적인 실체로 부각을 시킨다.\n\n          신재민 작가도 조완준 작가처럼 주변으로부터 수집하지만, 다른 점이 있다면 본인이 감각적으로 경험하고 교감한 존재들과 장소들을 이미지나 기호적으로 차용한다는 점이다. 산책과 여행 중에 기록한 스냅샷, 혹은 드로잉과 일기장 등, 작가는 그 속에 등장하는 대상들을 모아 관객이 자유롭게 모험할 수 있는 몽환적인 장소를 그려낸다. 유저의 선택에 따라 내러티브가 달라지는 게임의 오픈월드처럼, 작가가 그려낸 가상 세계와 가상 인물들은 고정된 서사를 가리키고 있지 않는다. 관객 각자의 시선이 향하는 방향과 순서에 따라, 그림 속의 이야기는 유추가 되고 관념 속에 상상이 되어진다. 이러한 것이 가능할 수 있는 것은 그의 그림 속 존재들은 서로에게 위계적이지 않기 때문이다. 무의미한 배경이자 주변부였을 대상들은 회화 속에 떠다니는 아바타로 변모하여, 서사를 유발시키는 기폭제로 역할을 수행해 나간다.\n\n          마지막으로, 정주원 작가는 사회적으로, 존재적으로 마주한 허무와 냉소의 순간을 회화적 상황으로 기록한다. 그의 회화 속에 등장하는 장면들은 어딘가 불안정하고 위태롭게 일렁이는 형상을 띠고 있는데, 이는 그가 백붓을 사용하지 않고 세필로만 점진적으로 그려 나가는 방식에서 비롯된 양상이다. 비록 얇은 붓 터치일지라도, 좁고 세밀했던 면들은 환영 속에서는 덩어리로 뭉쳐지고, 표면으로는 두터운 마티에르(matière)를 이루어 시각적 균형과 물리적인 안정감을 구축한다. 이와 같은 창작의 과정은 작가에게 있어 심리적 불안을 소거하는 일임과 동시에, 사회의 비극을 서사적인 상상화로 해석하는 사실 기반의 작업이기도 하다.\n\n          작가들마다 그리는 유형과 감각하는 순간들이 다르니, 그들이 스스로 발견한 회화의 양식들과 이론들은 독자성이 현저할 수밖에 없다. 이처럼 일곱 작가들의 창작 과정을 기반으로, 이번 전시에서는 회화의 특수성보다는 회화를 특수하게 만드는 현존의 순간들을 역추적해보는 취지에서 기획을 하게 되었다. 따라서 전시는 ‘회화는 무엇인가’가 아닌, ‘무엇이 회화를 가능하게 만드는가’에 대한 질문을 되묻는 자리다. 더불어, 7인의 다른 회화들이 충돌하면서도 조화를 이루는 역설의 공간에서, 뜻밖의 방문객들이 각자의 호흡, 발걸음, 그리고 시선의 흐름에 따라 자신들만의 회화적 순간을 향유할 것이라 기대해 본다.\n\n[right]양기찬",
      en: ""
    }
  }, 

     "zg4": {
    title: { ko: "자아(自我) 아래 기억, 자아(自我) 위 꿈", en: "Memory Beneath The Ego, Fantasy Above The Ego" },
    author: { ko: "심상용", en: "Shim Sangyong" },
    date: "2023-09-21",
    excerpt: { ko: "전시 서문", en: "Preface" },
    body: {
      ko: "심상용   서울대학교 미술관 관장\n\n\n 지난 전시 《예술사회학을 지나야 예술철학이 나온다 - 작가편》은 예술사회학의 한 진술에서 시작되었다. “예술에 사회학적 관점으로 접근하는 자체가 이미 전통적인 예술 개념에 즉각적인 위협이 된다.”(자네트 월프Janet Wolff) 왜 위협인가? “예술이 사회적인 것에 붙여진 신성의 이름표” 그리고 그 속에 모든 방증이 깃들어 있는 사회적인 것들의 황홀한 혼합이라는 실체가 폭로될 수 있기 때문이다 미술관들이 신전(神殿)의 역할을 방불케 하는 것에 의해, 시장이 파티 시간을 알리는 폭죽을 쏘아 올릴 때 실제로 사람들은 크게 미혹된다. 시몬 베유(Simone Weil)가 지적했든 “의식은 사회적인 것에 속는다.”\n 그렇기에 정화(淨化)를 위해서는 사회적인 것에 대해 깊이 반추해야 한다. 이번 《자아(自我) 아래 기억, 자아自我 위 꿈》전은 그 반추가 진행되는 의식 내부에 관한 일련의 보고서들이다. 의식(意識)은 자신이나 사물을 ‘깨어있는 인식’으로 마주하는 정신의 행위다. 이 깨어있는 인식에 기반할 때만 예술은 사회적인 것에 대한 제대로 된 정화의 선두로 나설 수 있따. 사회적인 것의 힘, 플라톤이 말한 ‘거대한 짐승’에 복종하는 이 시대의 예술에서 찾아보기 어려운 특성이다. 깨어있는 예술은 속이는 사회적인 것, 복종을 강요하는 사회적인 것에 본능적으로 저항한다. 그리고 “인간이 모든 것을 잃어버린 이 시대”의 요인들, 불확실하고, 모호하고, 위태롭고 아슬아슬한 측면을 지속적으로 감지해낸다.\n 보라. 이 긴장감을 불러일으키는 혼돈, 구성과 줄거리의 부재 속에서 시간과 비시간, 현실과 비현실을 오가는 조밀하거나 성긴 이야기, 기억(경험)과 꿈 사이의 추상적이고 복잡 미묘한 왕래, 기억은 시간의 함축이고 꿈은 잡을 수 없는 것들의 비유다. 푸르스트적인 ‘의식의 흐름’이 과거에서 현재로, 기억에서 몽환으로 종종 표류를 감수하면서 이어진다. “확실히 존재하는 것 혹은 절대로 존재할 수 없는 것”, 즉 진리와 영원 어느 하나라도―아니면 둘 다― 손에 쥐길 원하지만 그럴 수 없는 시대에 대한 감각적 고증의 방식이다. 적응할 수도, 혁명이라는 환상에 더는 매몰될 수도 없는 역사적 단계에 대한 것이기도 하고!(민중의 아편은 종교가 아니라 혁명입니다!)\n 표현과 도구: 원근법이 제거된 풍경들..., 형식주의는 더는 거론할 것조차 없다. 여기서 리얼리즘은 혁명이 아니라 혁명이라는 환상을 조소하는 용도고, 추상은 일상적 삶과 사소한 불행이나 행복을 위한 언어체계를 관용한다. 추상과 구상이라는 근대회화의 이항대립은 성립 불가능하다. 붓질은 미래를 향하도록 할 만큼은 아닌 상상력으로 운용된다. 초자연, 초현실에 이르지 않는, 다만 조야한 현실에 일정량의 타격은 분명히 가하는 비현실과 그것에 의해 지속적으로 손상되는 영원의 유사물로서 몽환 사이를 불안정하게 오가는 자아로 귀환하기!",
      en: ""
    }
  }, 

   "zg5": {
    title: { ko: "나를 생각하는", en: "Thinking Me" },
    author: { ko: "", en: "" },
    date: "2023-11-08",
    excerpt: { ko: "전시 서문", en: "Preface" },
    body: {
      ko: "인간의 자아와 정체성은 끝없이 유동적이며 다양한 측면을 지닌다. 타인과의 상호작용, 사회적 환경, 그리고 개인적인 경험을 통해 자아를 형성하고 발전시키며, 이 과정에서 끊임없이 스스로를 돌아보게 된다. 이번 전시 <나를 생각하는>에서는 강건, 권회찬, 정경빈 세 작가의 작품들을 통해 자아를 다루고 탐구하는 과정을 조명한다.\n\n강건 작가는 자아와 타자, 감정, 환경, 상상과 현실의 경계등과 같은 복잡하고 다층적인 주제를 비(非)완성과 형태의 상대성, 자아와 타자의 관계를 감각적이고 진솔하게 표현한다. 특히 작가는 실과 바늘, 양모와 투명 에폭시와 같은 연약한 재료를 화려한 색상으로 사용하는데, 이는 마치 자아의 연약함과 불안정성을 보여주는 듯 하다. 또한 그는 인체와 동물의 형상을 결합하거나, 인물의 모습을 왜곡하거나, 인물과 다른 존재를 함께 배치하는 등의 방법을 통해 자아의 다양한 가능성을 보여준다.\n\n권회찬 작가는 간단한 낙서행위로부터 복잡한 조형물을 창조하는 과정을 통해 자아와 예술, 그리고 창작의 본질에 대한 고민을 보여준다. 작가는 낙서를 단순한 재현이 아니라, 자신의 내면 세계와 태도를 표현하는 수단으로 바라본다. 작가는 낙서를 그린 다음, 이를 입체적으로 변형하고 명암을 사용하여 환경을 조성한다. 이러한 작업 과정을 통해 자신의 내면세계를 외부로 드러내고, 자아의 정체성과 의미에 대한 탐구를 이어나간다.\n\n정경빈 작가의 작업은 새로운 시작과 박탈, 그리고 자아와 대상의 경계 흐림을 통해 복잡한 내면세계와 개인적 경험을 표현한다. 그의 작업은 사물과 풍경을 있는 그대로 재현하기보다는 몸과 눈을 통해 경험한 장소와 기억을 작업에 반영하며, 이를 표현하기 위해 다층적인 시각적요소를 사용한다. 작가의 작품에서는 자아와 대상의 경계는 흐릿해진다. 그림의 주체로서의 자신과 관찰된 대상 사이에 간섭과 상호작용이 일어나며, 그로 인해 작품들은 전통적인 풍경화와 현실과 상상의 경계를 뛰어넘는 복잡한 관계를 형성한다.",
      en: ""
    }
  }, 
  
   "zg6": {
    title: { ko: "견고한 공중", en: "Solid Air" },
    author: { ko: "양기찬", en: "Yang Kichan" },
    date: "2023-11-22",
    excerpt: { ko: "전시 서문", en: "Preface" },
    body: {
      ko: "메시지로 읽힐 수 없는 일상의 자취, 혹은 사회 속에 소모된 기호나 부속들을 작품의 소재로 삼는 작가들이 있다. 이들은 통계 데이터나 누군가가 끄적였던 낙서, 삶의 터전에서 우연히 발견한 부산물 등, 지역의 현상이나 타자의 존재를 암시하는 일상의 흔적들을 작품의 시초로 활용한다. 그러나 그들이 창작한 형태와 이미지, 그리고 기호들은 구체적인 현실로 놓여있음에도, 명료한 정보/메시지를 매개하지 않기에 매체로써 본래 기능을 수행하지 않는 듯하다. 이는 채택된 소재들이 정체가 불분명한 찰나로부터 발전된 허구적 실체이기 때문일 것이다. 작가들은 자신들이 살아가는 영역에서 마주친 가변적 존재나 잔상에 체계를 부여하고 물질을 덧입혀, 현실로 재귀해 볼 몸 체를 갖추어 주었다. 이에 따라 행위의 실증으로써 제시되는 매체들은 존재의 유래보다 존재를 형성해 가는 과정과 태도가 주된 내용을 이룰 수밖에 없다. 텍스트로 보증된 테제에 의존하지 않고, 활동의 누적으로 독자적인 존재를 갖춘 매체들은 분명한 현전(現前)에도 불구하고 관객들에게 이성으로 점유될 수 없는 미지로 다가오기에 이른다.\n\n<견고한 공중>은 앞서 소개된 참여 작가들(권회찬, 양기찬, 이예주, 신대훈, 채수정)의 창작 경향을 토대로 작명 되었다. 당연하게도 물리적으로 유연하고 비어 있는 공중(空中)은 그 자체로는 견고할 수가 없을 것이다. 따라서 공중이 암시되기 위해서는 벽처럼 공간을 구획하는 물리적 장치 (혹은 껍질)가 구축될 필요가 있다. 한편, 공중(空中)과 동일한 발음의 공중(公衆)은 개개인의 이름 보다는 익명의 무리를 가리키는 군중을 의미한다. 앞선 설명처럼 두 단어가 가리키는 대상은 다르지만, 동음의 단어들은 개별성보다는 나머지 존재/공간을 아우르는 대명사처럼 통용되는 유사성이 있다. 이러한 사전적 정의들을 차용하여 이중의 의미를 내포한 <견고한 공중>은 중대한 가치로 여겨지지 않는 삶의 파편이 예술의 기초이자 내부를 이루는 역설적 상황을 펼쳐낸다. 굳건한 존재감을 갖추지 못한 일상의 잔상과 자취들로 독자적인 현실을 구현해 가는 방식은 누군가에게 사색적이거나 강박적인 수행으로 보일 수 있다. 그러나 존재성을 고유한 성질이 아닌 점층적 실현에 근간하는 이들의 예술은 존재의 의미를 둘러싼 당위성을 재고하도록 한다.\n\n이를 바탕으로 <견고한 공중> 展은 일상의 소멸로부터 거슬러서 매체로 변모된 현상들을 모아, 무관심하게 스쳐간 잔상의 정체를 짐작하고 추적해 볼 현장으로 조성되었다. 전시의 제목처럼 허무주의적 기제가 전시 제도의 발판으로 운용된 이번 전시는 존재의 의미보다 선행하는 무의미의 몸짓을 조명하며, 행위가 실존을 보증하는 생성의 존재론을 관객들이 반추할 수 있도록 한다.\n\n\n[right]글 양기찬\n\n\n\n권회찬\n작가에게 있어서 낙서는 행위자의 무의식 중에 스쳐 보았던 형상을 추적해 볼 수 있는 단서다. 그는 우발과 선택이 동시에 행해졌던 낙서 위로 면을 입히고, 그것이 놓일법한 공간을 상상하여, 2차원의 상(像)을 현실에 있을 법한 입체물로 그려낸다. 안팎 스페이스를 운영하는 두 대표의 낙서를 캔버스에 직접 받아서 제작한 회화 두 점은 전시공간의 성격에 대해 고민하는 대표들의 감각을 환기시키고 반영한다. 그러나 이들의 낙서로부터 추적하고자 한 형상은 그 출처가 불확실하여 보는 이에겐 여전히 만져지지 않는 이미지 속 신비로 남아있다. 비록 환영으로부터 온전히 해방될 수 없지만, 실체처럼 체감되는 허상은 회화의 몸체를 빌려 현 실 속에 자신의 존재를 스스로 증명하고자 한다.\n\n이예주\n도시의 사라져가는 존재들에 관심이 있는 작가는 공사장의 잔여물이나 길거리의 폐기물 등으로부터 형태를 참조하고 조각으로 복구한다. 하지만 원형이 소멸되었기에 작가가 회상하며 더듬어갈 수밖에 없는 형상은 파편들로 이루어진 덩어리처럼 형성이 된다. 기억에 의존하여 구축하는 과정과 어우러지게, 실제로 작가는 단단하면서도 깨지기 쉬운 석고를 주재료로 삼는다고 한다. 겉으로는 제자리에서 굳건히 서있는 듯 보이지만, 균형을 잃는 순간 산산조각이 날 수밖에 없는 조각은 선명하게 존재했으나 사회로부터 금세 망각되어진 존재들을 상기시킨다.\n\n신대훈\n작가는 인체의 형상이 재료의 물성과 매체의 차원에 따라서 어떻게 추상적으로 변형될 수 있는지를 탐색한다. 그는 본인, 혹은 이웃의 신체 외각을 조각의 도안처럼 삼아 재료의 고유한 성질을 자유롭게 표출해 왔다. 이러한 과정 때문에 그의 조각은 인체의 형상에 속박되면서도 동시에 일탈하려는 양가적 상태를 보여준다. 이번 전시에서 작가는 신체의 일부가 2차원으로 변환된 부조를 공개한다. 손금과 같이 몸의 작은 부분이었던 형태는 본래의 크기보다 확장되고 평면화 됨으로써, 닫혀 있던 몸의 형태가 공간 속에서 선과 면으로 개방되는 순간을 구현한다.\n\n채수정\n미술의 고유 체계가 아닌 사회 시스템 속 수치로부터 예술의 형식을 탐색하는 작가는 인구 이동과 동향, 그리고 매일의 기후 통계들을 수집하여 각 현상들의 관계를 추적해본다. 본래 수학에서는 단위를 생략하고 총괄적으로 계산하는 비약을 허용하지 않는다. 그러나 작가가 서로 다른 단위의 수치들을 엮어서 헤아리는 이유는 그에게 있어 단일 데이터 수치는 사회현상을 온전히 전하는 진실이 아니기 때문이다. 단위에 따라 나뉘어진 숫자 기호들은 현상을 해체하고 분류하는 체계로, 현상 그 자체를 매개하지 못하는 조각들에 불과하다. 작가는 이러한 분류된 정보들을 버무리고, 오로지 숫자만을 추출하여 추적될 수 없는 사회현상을 추상적 형상으로 산출한다.\n\n양기찬\n견고하게 세워진 전통 기념비의 형태와 달리, 그는 일상의 오브제와 소모품으로 임시방편의 상징물을 만들어왔다. 전시제도에 기생하지 않는 이상 기념성을 갖출 수 없는 그의 구조물은 전시 중에 허공을 매개하는 장치로 운용 되는데, 공백의 매체는 특정 인물보다 기념 받지 못한 이들의 부재를 암시하는 무대장치로써 마련되어진다. 이번 전시에서 작가는 시트지처럼 영구적이지 못할 일상의 소모품으로 허공을 매개하며 동시에 유영하는 장치를 제작했다. 시선 아래로 바닥에 놓인 하늘 조각, 전시장을 이전하거나 누군가의 손길이 닿을 때마다 형태가 접히다 펼쳐지는 먼지-별 조각 등, 현실에 닿을 수 없는 현상과 빈약한 존재를 오브제로 치환하여 낭만적이고 유머러스한 상황을 구현한다.",
      en: ""
    }
  }, 
     "zg7": {
    title: { ko: "뒷고기", en: "Leftover Meat Cuts" },
    author: { ko: "권회찬", en: "Kwon Hoechan" },
    date: "2024-07-05",
    excerpt: { ko: "전시 서문", en: "Preface" },
    body: {
      ko: "드로잉은 행위자가 구현하는 조형언어의 기본단위로서, 특별한 시선이 입력된 감각의 신체적 추적 행위이자, 다양한 양태로 해석되며 각기 다른 형식적 구성을 추동하는 창조적 의도이다. 행위자의 보는 경험은 두 작가의 작업 세계 안에서 드로잉 선이라는 인식의 결과물로 전환된다. 주황빛 콩테로 그려진 권회찬의 회화와 엉성한 드로잉 선이 생명력을 지닌 슴슴한 장승근의 회화는 드로잉 행위에 주안점을 둔 조형언어이다.\n 권회찬은 <자화상> 연작을 통해 드로잉과 행위자의 정신성 사이에 존재하는 모종의 관계성을 다뤄왔다. 캔버스에 콩테로 선을 휘갈긴 후, 구조가 되는 선을 추가하여 가상의 구조물을 조직하는 회화는 휘갈긴 선이 행위자의 정신성을 담는다는 전제를 바탕으로 제작되었다. <풍경> 연작은 자화상과 같은 논리로 제작되었고, 화면을 구성하는 방식에서 차이가 있다. 장승근은 일상의 사건들과 유약한 대상들을 드로잉으로 포착하여 세계와 관계 맺는 방식을 탐구해왔다. 드로잉 과정에서 도출된 느슨한 형상의 균열은 세계를 인식하는 감각의 교두보가 되어 회화적으로 재구성되었다. 이처럼 작가들에게는 전시가 반복됨에 따라 드러나는 일관된 주제가 있다. 작가를 이해하기 위한 틀은 마치 메뉴판처럼 전시장에, SNS에, 보도 자료에 각인된다. 이들의 작업에서 공통적으로 나타나는 특징인 드로잉 선의 강조는 각자의 작업에서 반복되는 일종의 메인메뉴로 볼 수 있다.\n 평범한 고기 한 근은 언제 먹어도 맛있지만, 때로는 색다른 경험을 해보고 싶을 때가 있는 법이다. 작가들이 작업을 선별하는 과정에서 누락시킨 특수부위에는 드로잉을 둘러싼 두 작가의 더 깊고 내밀한 관점이 담겨있다. 모든 예술행위의 근간이 되는 드로잉은 매체 이전의 상태이고, 선택한 매체와 결합하여 다른 겉모습을 한 채로 현실에 나타난다. 최종형태에 지대한 영향을 미치는 드로잉에 대한 접근 방식은 행위자의 견해 차이에 따라 천차만별로 달라진다. 이러한 드로잉의 성질은 드로잉과 윤곽선을 즐겨 사용하는 두 작가의 유사한 작업 특색이 무색하게 서로를 각기 다른 예술적 영역으로 진입하도록 이끌었다.\n 권회찬은 <자화상> 연작과 같은 논리의 연장선상에서 실험할 수 있는 신작과, <자화상> 연작이 착상하는 과정에서 만들어진 부산물을 가져왔다. 캔버스 천 위에 자화상을 그린 후 선을 따라 가위로 잘라내고, 접고, 구기고, 실로 연결하고 천 강화제, 레진 등으로 마감하여 세운 <자화상 조각(piece)>, <풍경>을 나무 판에 새긴 <나무를 위한 풍경> 연작 등의 신작뿐만 아니라, <자화상> 논리와 깊은 관련 없이 제작된 입체작업들과 드로잉 등을 뒷고기로 선보인다. 이는 특정 물성에 작가성을 의탁하는 작업이 지닌 경직성에 의구심을 품어왔던 작가의 관심사와 깊은 관련이 있다. 그동안 드로잉과 정신성의 관계를 다뤘던 형식은 뒷고기를 통해 드로잉과 매체 간의 관계 양상으로 확장된다.\n 장승근은 전시에 내보일 작업을 정제하는 과정에서 누락되는 날것의 감각을 뒷고기로 제시한다. 홀로 술을 마시며 드로잉 할 때 주기적으로 눈을 마주친 건너편의 아저씨를 그린 그림, 용변을 보는 도중 휴지를 가지러 가기 위해 엉거주춤 걸어가는 자신의 상황을 메신저로 작성하여 친구에게 보낸 내용을 다시 드로잉으로 그려낸 그림, 지인을 모델로 포착한 연작 등은 작가 주변의 정돈되지 않은 환경을 본연 그대로 담아낸다. 전시장 뒤편 벽장의 <한사람,한사람> 연작은 그림을 바라보지 않고 오로지 모델을 향한 시선과 손의 감각으로만 그려낸 블라인드 페인팅이다. 이는 여러 번 중첩한 선을 화면에 배치하는 기존 회화의 방법을 직관적으로 제시한 연작이다. 같은 자리에서 같은 사람을 두 번 그리는 과정에 나타나는 제스처의 차이는 그림을 그릴 때마다 변하는 그리는 순간의 마음가짐과 형태 감각을 유희하면서 대상을 깊이 음미하고자 하는 장승근의 태도를 반영한다.",
      en: ""
    }
  }, 
  
      "zg8": {
    title: { ko: "", en: "Liminal" },
    author: { ko: "임지윤", en: "Lim Jiyoon" },
    date: "2024-09-20",
    excerpt: { ko: "전시 서문", en: "Preface" },
    body: {
      ko: "모든 것은 이어져 있다는 신유물론의 관점에서 더 이상 이항 대립의 관계는 무의미하게 되었다. 너와 나의 경계, 사고와 행동의 경계, 삶과 죽음의 경계, 꿈과 현실의 경계. 이 모든 ‘경계적 상황’에서 어느 한쪽으로 치우친 것은 없다. 삶 속에서 우리는 끊임없이 경계적 상황에 놓인다. 이항 대립하는 각 요소들은 서로 분리되어 있는 것 같지만 밀접하게 연관되어 있다. 사람들은 각각의 개체로 존재하는 듯 하지만 서로 연결되어 있는, 상호작용을 하는 존재이다 .우리는 생각이 행동으로 이어지기도 하지만, 행동이 먼저 나가고 생각을 하곤 한다. 살면서 끊임없이 죽음에 대해 논하고, 죽음을 두려워하며 이를 우리와 가까이 한다. 꿈을 꾸고 난 후, 이를 기억하려고 애쓰며 무의식에 대한 의식적 고찰을 지속한다. 현실 속에서 우리가 가상과 실재를 넘나든다는 사실은 실존과 실존하지 않는 것의 경계에 대한고민으로 이어진다. 전시 <Liminal>에서 작품들은 존재와 비존재 사이를 왔다갔다하는, 가상과 현실의 경계적 상황에 놓인 신화와 같은 존재들이다. 좁고 모호하고 유동적인 경계적 상황을 잠시 정지시키고 확대하며 공간화하여 보여준다.\n\n4명의 작가들은 경계적 순간들에 대한 표현을 통해 모호함을 드러내며, 존재와 비존재 사이의 상호작용에 대한 고찰을 유도한다. 구유빈은 기억과 실재의 경계를 뒤섞는다. 기억을 되짚는 과정에서 생기는 변화들에 초점을 맞추고, 기억을 재구성하는 과정에서 생기는 새로운 이야기들을 담는다. 작가와 그 주변인들의 여러 기억과 시선이 서로 섞이며 작품에 드러난다. 주관적인 시선은 안개와 같은 흐린 형상을 통해, 다채로운 색채로 변주되어 표현된다. 권회찬은 낙서를 통해 공간을 설정하고 그 안에서 규칙을 정해 완성하는 방법을 확장시킨 연작을 선보인다. 캔버스 위에 휘갈긴 선에 면을 부여하는 선을 추가하고 배경을 설정해 완성하는 <자화상> 연작은 낙서의 행위를 통해 현실세계를 추상화하여 무의식과 의식의 경계를 허문다. 반면 신작 <공간> 연작은 <자화상> 연작에서 배경이 되는 공간을 주제로 한다. 기존의 낙서와 달리 소외된 틈이 없는 신작의 구성은 문턱 공간 등 평소에 눈에 띄지는 않던 경계가 보였을 때 느껴지는 위화감을 떠올리게 한다. 유지영은 낙서의 행위를 통해 과거와 현재의 경계를 융합한다. 즉흥적인 붓터치와 다양한 기법을 활용해서 화면을 어지럽힌다. 이러한 낙서의 뼈대는 추후에 새로운 붓터치로 덮이며 공간감과 원근감이 어우러지는 새로운 공간을 구성한다. 과거의 흔적으로부터 현실을 조화롭게 끌어들여 경계를 허무는 공간으로 캔버스를 재구성한다. 윤수진은 감정이 유발하는 신체적 반응을 작품을 통해 가시화한다. 예컨대 사랑의 감정은 사람을 들뜨게 하기도 하고 가라앉게 하기도 한다. 이번 전시에서는 사랑이 만들어내는 몸의 무게감을 표현한다. 감정이 주는 다채로운 움직임은 작품을 통해 은유된다. 무형으로 존재하는 감정은 작품이라는 몸을 얻는다. 즉, 작품은 무형과 형태의 경계에 있는 존재가 된다.\n\n해안가에 서 있어야 모래와 파도를 모두 느낄 수 있듯, 경계는 양 쪽의 상황을 모두 경험하기 위해 필수적으로 경험해야하는 공간이다. 경계의 공간은 즉 ‘리미널 스페이스(Liminal Space)’로, 변화를 상징한다. 이는 기존의 질서가 해체되고 새로운 가능성이 열리는 전환에 놓인 순간이다. 정해진 하나의 장소가 아닌, 변화의 과정에 있는 전이 공간을 의미한다. <Liminal>에서 회화의 공간은 리미널 스페이스가 되어 각자의 작품 세계만의 경계 사이에서 맴돈다. 경계에 서 있는 각 작품들은 모호함 안에 있다. 현실과 공산 가운데 어딘가에서 자신의 존재를 탐색한다.\n\n\n글. 임지윤",
      en: ""
    }
  }, 

        "zg9": {
    title: { ko: "", en: "Face and Three Gazes" },
    author: { ko: "", en: "" },
    date: "2024-11-07",
    excerpt: { ko: "전시 서문", en: "Preface" },
    body: {
      ko: "초상화는 인류 역사상 가장 오래된 미술의 소재이자 주제 중 하나로, 오랜 시간 동안 개인의 정체성과 내면세계를 표현하는 매체로서 중요한 역할을 해왔다. 시대에 따라 초상화는 다양한 방식으로 해석되고 발전해왔으며, 현대 미술에서도 그 의미와 가능성을 확장하는 시도들이 이루어지고 있다. 전시 <FACE AND THREE GAZES>는 이러한 흐름에 주목하여, 권회찬, 이영욱, 정중원 세 작가의 작품을 소개한다. 이들은 전통적인 초상화의 개념을 넘어, 자신만의 독특한 시각으로 초상화를 재해석하고 표현한다.\n 이영욱 작가는 디지털 기술을 활용하여 초상 이미지를 해체하고 재구성함으로써, 현대 사회의 정체성이 지닌 복잡성과 다면성을 탐구한다. 그의 작품에서 변형되고 파편화된 초상은 작품의 소재로, 관객에게 낯섦과 친숙함을 동시에 느끼게 하며 우리 시대의 모습을 반영한다.\n 권회찬 작가는 무의식적인 낙서에서 출발하여 자화상을 그리는 과정에서, 초상이 내면 세계를 표출하는 매체가 된다. 그의 작품에서 초상은 외형적 묘사를 넘어 작가의 정신적 상태와 심리를 반영하는 핵심 요소로 기능하며, 정신적 초상의 새로운 가능성을 제시한다.\n 정중원 작가는 하이퍼리얼리즘 기법으로 인물의 세밀한 특징을 포착함으로써, 개인의 고유성과 인간성을 탐구한다. 그의 작품에서 초상은 표정, 눈빛, 주름 등 얼굴의 미세한 요소들을 통해 개별적 존재의 본질을 드러내는 주요한 도구로 사용된다.\n <FACE AND THREE GAZES>전시는 세 작가가 초상이라는 공통된 소재를 바탕으로, 저마다 독특한 방식으로 현대 사회와 인간에 대한 예술적 통찰을 보여준다. 나아가 현대 미술에서 소재로서의 초상의 확장된 역할과 가치에 대한 새로운 담론을 형성하는 계기가 되길 기대한다.",
      en: ""
    }
  }, 
      "zg10": {
    title: { ko: "", en: "Borrowed Signals" },
    author: { ko: "", en: "" },
    date: "2026-05-12",
    excerpt: { ko: "전시 서문", en: "Preface" },
    body: {
      ko: "여기 거대한 안테나를 가진 라디오가 있다. 예민하고 개성 있는 안테나는 공중에 떠다니는 신호를 잡아 다른 소리로 풀어낸다. 전시 《Borrowed Signal》은 권회찬, 남다현, 박진우 세 작가의 그룹전이다. 이번 전시에서 세 작가의 작업은 모두 자기 바깥에서 시작된다. 누군가의 작품, 누군가의 언어, 어디선가 흘러 들어온 이미지나 사건이 작업의 단초가 되고, 그것이 작품이 되기까지의 과정 자체가 작품의 일부가 된다.\n 남다현의 〈Museum Dosi: CONCRETE〉는 안토니 곰리의 인체 조각을 종이 상자로 다시 만든 작품이다. 작가는 그 형태와 권위를 빌려온 채 갤러리 한가운데로 들고 온다. 자연 속에서 아이코닉하고 묵직했던 작업은 한없이 가벼워지고, 그 자리에 동시대의 물류와 소비, 유통에 대한 질문들을 품고 온다. 〈MEME〉 시리즈에서 작가는 같은 형태를 레고 블록과 나무 장난감, 건빵으로 작게 복제한다. 그 과정에서 하나의 형태가 서로 다른 맥락의 재료들로 끊임없이 재포맷팅(reformatting)된다.그 사이 건빵으로 사람의 형태를 만들고 있는 작가의 모습이 떠오른다. 그 작업의 시간이 꽤나 재미있었을 것 같다.\n 박진우의 〈Recursion〉 연작은 자기 조각을 사진으로 찍어 인공지능에 입력하는 데서 시작된다. 인공지능이 되돌려준 이미지를 다시 조각으로 , 그 조각을 또 인공지능에 입력한다. 작가는 이 과정을 되새김질이라 부른다. 동료 작가의 사라진 작업 ,인제 내린천에 소풍온 사람들의 풍경, 카드깡에서 다섯 번 연속 나온 또도가스 같은 사적인 장면들이 그 사이에 입력값으로 들어간다. 작가가 인공지능과 주고받으며 작업을 구현해가는 과정은 생성 이미지 시대의 새로운 대화가 되고, 그 사이에 빚어지는 조각들은 그 대화의 부산물로 남는다.\n 권회찬은 과거에 기획했던 전시에 초대했던 동료 작가들의 인터뷰 내용에서 그림의 소재를 얻는다. 서문을 쓰는 과정에서 나눈 대화는 수 페이지의 메모로 남았고, 그 메모에서 특징적인 키워드를 추출해내고 거기에 맞춰 그림을 그린다. 각 작품의 화풍과 색감이 다른데 그 차이는 관객으로 하여금 거꾸로 동료작가의 작업을 유추하고 상상하게 만든다. 마지막 한 점은 작가가 자유롭게 휘갈긴 선을 하나의 정신적 조형물로 만들어낸 자화상이다. 이번 작업에서 사용한 재료와 색을 자기 자화상에 그대로 적용했다. 다른 작가들의 신호를 받는 동안 자기 손에 묻은 색과 점도로 자기 자신을 그린 셈이다.\n 세 작가는 모두 자기 바깥에서 온 신호를 붙잡는다. 그러나 이 신호들은 작가의 손에 완전히 소유되지 않는다. 조각으로, 상자로, 그림으로 옮겨지는 동안 그것들은 조금씩 어긋나고, 가벼워지고, 농담처럼 번진다.",
      en: ""
    }
  }, 
  











  "zs1": {
    title: { ko: "낙서의 초상", en: "Portrait of Scribble" },
    author: { ko: "권회찬", en: "Kwon Hoechan" },
    date: "2023-03-08",
    excerpt: { ko: "전시 서문", en: "Preface" },
    body: {
      ko: "글 : 권회찬\n\n 에브리아트는 2023년 3월 8일(수)부터 31일(금)까지 나의 첫 개인전 ‘낙서의 초상’을 선보인다. 내 작업 방법론의 출발점이 될 낙서의 초상 연작은 개인의 낙서가 그 사람의 정신성을 반영하는 제스처이고, 그 낙서를 기반으로 형성된 결과물은 그 사람의 초상과 같다는 논리를 전제로 한다.\n 작업과정은 우선, 캔버스 위에 갈색 콩테로 낙서를 한다. 이때, 캔버스를 마주한 채로 낙서를 하기 때문에 캔버스의 크기와 모양, 내 신체적 조건, 사용되는 부위에 따라 발생하는 스케일, 그리고 화면을 구성하는 감각과 같은 조형요소 등이 개입한다. 그 다음에는 그렇게 콩테로 그려진 낙서가 있는 평면에 가상의 공간을 설정하고 낙서가 그 안에서 홀로 설 수 있도록 선을 추가한다. 그러면 2차원 내에서 부유하던 직선과 곡선이 평면 내에서 3차원의 입체로 변하면서 하나의 구조적 조형물로 나타나게 되는데, 나는 여기에 빛을 설정하고 내 머릿속에 상상되는 명암단계와 그림자를 조형물에 맞게 채색하여 그 조형물과 가상공간이 실제로 존재하는 것만 같은 환영을 연출한다.\n 명암을 구성하는 회화적 붓질은 낙서를 평면상의 실재처럼 존재할 수 있도록 치장하고 보호하는 나의 제스처이다. 즉, 제스처로 낙서를 둘러싸는 일련의 과정은 내가 그려온 무의미해보였던 낙서들도 실체를 가질 수 있다고 믿는 내 주장으로서의 세계를 구축하는 행위이다. 원래는 버려졌어야 할 가능성들이 나의 구축행위를 통해 확정된 방에 실제로 놓이게 되는 것이다. 그렇게 하나의 방이 완성되면, 개인의 낙서에서 출발한 평면 속의 조형물은 낙서 행위자의 정념이 투영된 정신성의 초상이 된다. 따라서 이 공간을 구성하는 11점의 회화는 나의 낙서로부터 탄생한 자화상의 군집이고, 이는 내 작업세계가 미술계에 진입했음을 선언하는 영점으로서 작동한다.\n\n\n권회찬(1995년생)은 서울과학기술대학교를 졸업하고 동대학원 조형예술과에 재학 중이다. 회화라는 매체 내에서 정신성이 어떤 방식으로 가시화될 수 있을지 고민한다. <TORQUE 2 / NEUTRAL STEER>(실린더, 2022), <Nowon Young Artist Map>(경춘선 숲길갤러리) 등의 단체전에 참여했고 현재 단체전 <나의 회화적 순간>(더 소소, 2023)이 진행중이다.",
      en: ""
    }
  },

  "zs2": {
    title: { ko: "", en: "Snapshot" },
    author: { ko: "권회찬", en: "Kwon Hoechan" },
    date: "2023-05-15",
    excerpt: { ko: "전시 서문", en: "Preface" },
    body: {
      ko: "나는 이전에 진행한 낙서의 초상 연작에서 개인의 낙서는 그 사람의 정신성을 반영하는 제스처이고, 그 그림을 기반으로 형성된 결과물은 그 사람의 초상과 같다는 작업 논리를 내세웠다. 이번 전시에서는 그 논리를 바탕으로 5일이라는 기간을 두고 관객들이 특정 시간 동안 전시장 벽면에 자유롭게 그림을 그리게 하였다. 그 과정에서 다음과 같은 제한 사항을 두었는데, 관객들은 좌대 위에 놓인 43개의 색연필 중에 하나만을 선택하고 그 색연필의 색상번호에 해당하는 명단 란에 본명을 작성해야만 했다. 그리고 채색이 완료된 그림 위를 비롯한 기물, 천장, 바닥 등에는 그림을 그릴 수 없으며, 채색, 명암 등의 면 처리 또한 금지되었다. 오후 6시가 되면 나는 갤러리를 닫고 그 그림들이 홀로 설 수 있도록 아크릴로 채색하여 구조화/실체화하는 작업을 진행하였다.\n\n 사람의 그리기 행위에는 행위자의 고유한 제스처 이외에도 그릴 때 처한 환경에 따라 다양한 정신상태가 반영되기도 한다. 화면의 스케일, 행위자의 노출 정도, 그림의 기록 여부, 룰에 대한 순응도, 이미 그려진 그림들에 대한 반응 등으로 인한 긴장상태에 따라 행위 순간의 정신성은 다양한 양태로 발산되는데, 이는 고스란히 그림의 결과물이 되어 나타난다. 720호의 하얀 벽면은 내가 그림을 그리더라도 시간이 지나면 스쳐 지나가듯 사라질 공적 장소로, 화면을 완성하고 영원히 남긴다는 압박으로부터 자유로운 독특한 캔버스이다. 이 평면은 터무니없이 넓다 보니 낙서 하나하나를 프로필로 남기기 위해 엄격한 규격을 따라야 한다는 일말의 기대조차 하지 못하게 만든다. 그렇게 완성의 압박 없이 그려진 가벼운 낙서들은 매일 새로 추가되는 속도에 맞춰 마치 스냅샷처럼 빠르게 완성된다. 즉, 한 공간 안에 파편적으로 흩어진 회화는 단순히 하나의 결과물이기 이전에 다양한 행위자들이 펼쳐낸 다양한 순간의 스냅샷인 셈이다. 이때, 관객은 하나의 색상만 사용할 수 있었고, 그 색상에 해당하는 명단 란에 이름을 적어야 했는데, 이는 어떤 사람이 그 색상으로 그림을 그렸는지 식별할 수 있는 지표로서 작동한다. 색상에 따라 사람이 구별되고, 그 사람이 누군지 특정 가능하게 하는 장치는 그림이 단순히 이미지에 머무는 것이 아니라 사람으로부터 나온 행위라는 사실을 환기시키며, 동시에 행위자가 어떤 제스처를 가지고 있는지, 어떤 성격의 사람일지, 어떤 태도로 낙서에 임했는지 상상하게끔 만든다. 그렇게 결과물들은 전시기간 동안 각 행위자들이 그림을 그렸던 순간의 정신성을 표상하게 된다.",
      en: ""
    }
  },

  "zs3": {
    title: { ko: "", en: "Cheese!" },
    author: { ko: "권회찬", en: "Kwon Hoechan" },
    date: "2025-11-25",
    excerpt: { ko: "전시 서문", en: "Preface" },
    body: {
      ko: "사진을 찍을 때 주는 ‘치즈!’라는 신호는 근래에는 찾아보기 힘든 사어(死語)에 가깝다. 사진을 막 찍는 게 가능해진 오늘날에는 찍는다고 대충 말하고 그냥 여러 번 찍거나 아예 말하지 않고 연사로 버튼을 누른다. 피사체들은 주어진 상황에 맞춰 자연스럽게 이런 저런 표정을 시도하고 자유롭게 연출할 수 있다. 그러나 사진을 보관하는 방대한 메모리가 없던 시절에는 한 장 한 장에 신중하고 조심스러울 수밖에 없었다. 나는 드물어진 사어만큼이나 빈번해진 교류 속에서 다시금 관계에 대해 질문한다. 치즈는 웃음을 지으라는 묘한 압박을 송신한다. 이는 사진에 담기는 피사체가 어떤 방향으로든 영향을 받게 만든다. 개인전 《Cheese!》에서 나의 회화는 참여자의 자유로운 낙서가 아니라 내가 제안한 미션을 수행하는 과정에서 나온 선을 주제로 한다. 행위자는 나의 의도를 추측하고 신중하게 답을 내놓는다.\n 나의 회화에서 스케치는 두 단계의 작업 과정을 거친다. 첫 번째 단계는 빈 캔버스에 콩테로 선을 휘갈겨 아무 그림이나 그린다. 두 번째는 그렇게 휘갈겨진 선의 꼭짓점을 전부 연결하는 구조선을 추가한다. 모든 선이 닫히게 되면 캔버스에는 특정한 조형물이 나타난다. 나는 줄곧 스케치의 첫 번째 단계를 타인에게 외주 맡겨왔다. 미션을 받아 빈 화면을 마주한 행위자의 응답방식은 다양하다. 무의식적으로 휘갈겨 그리기도 하고, 떠오른 이미지를 의식적으로 추가하기도 한다. 누군가는 자신의 드로잉을 그냥 덤덤히 그려주거나, 나를 시험할 목적으로 선을 엉키게 만들기도 한다. 수동적으로 계속 질문을 거듭하며 신중히 그리는 사람이 있는가 하면, 그냥 눈앞에 있는 대상을 슬쩍 그려 건넬 때도 있다. 이 모든 과정은 문제를 맞닥뜨린 행위자가 내게 말을 거는 대화이다. 캔버스에 그어진 선에는 행위자의 정신성이 담겨있다. 나는 여기에 빛을 설정하고 명암을 넣어 완성함으로써 행위자의 대화에 가상의 존재감을 부여한다. 그 그림의 제목에는 행위자의 이름이 붙는데, 스케치의 첫 번째 단계에 부여된 규칙에 따라 초상과 풍경으로 구분된다.\n 전시 공간은 총 세 구역으로 나뉜다. 가장 먼저 보이는 넓은 로비에는 내가 학부를 졸업한 이후에 교류한 사람들과 협업한 결과물이 전시된다. 타인과 소통하는 작업 방법이 어느 정도 익숙해진 상태에서 제작된 작업들이다. 캔버스 크기를 자유롭게 정하도록 했고, 대부분은 드로잉 북을 통해 낙서를 연습하는 시간을 가졌다. 오른쪽 벽을 타고 따라가면 학부 졸업전시 때 동급생들의 선을 받아서 그렸던 졸업 초상 연작이 배치되어 있다. 규칙을 타인에게 설명하는 과정에서 많은 시행착오를 겪은 작업들이다. 넓은 로비에서 왼쪽 입구로 들어가면 천장에 씨실 날실로 구성된 그리드 구조를 중심으로 풍경 조각(Piece)이 설치되어 있다.\n 풍경 조각은 캔버스 천에 낙서한 선을 바탕으로 스케치를 완성한 후, 각 부분을 잘라서 실로 연결한 입체 작업이다. 전시 공간으로 확장된 그림의 조각은 큐브 공간과 융합하며 관객을 향해 뻗어나간다. 실로 이루어진 그리드 사이사이에 놓인 노란 책자는 반대로 관객이 뻗어 들어오길 기다리는 나의 수신호이다. 책자에는 그 동안 미술제도 안에서 작업에 대해 말을 아껴왔던 내가 리서치한 자료와 참여자들에 대한 글, 그리고 비평가 a의 비평이 담겨 있다. 공간 안에 놓인 발판을 밟고 올라가 책자를 꺼내게 하는 구조는 그림 너머의 내밀한 영역을 단순 관람행위와 구별하는 수고스러운 장치이다. 물론 신호를 받은 관객이 책을 꺼내는 행위 자체는 받아들이는 사람에 따라 강제로 느껴질 수 있지만, 책을 꺼내들고 나서 내 이야기를 듣는 것은 자유이다. 타인과의 관계가 흔해질수록 쉽사리 재단하게 되는 오늘날, 나는 이러한 작업 구조 속에서 상호간의 교류를 통해 판단을 재고하는 문제에 대해 다룬다. 타인을 판단할 때, 일방적인 언어는 충만하기보단 오히려 공허로 가득 차있다. 그러나 타인에게 미치는 영향을 자각하는 관찰자의 언어는 타인이 메우는 그 공백 속에서 일시적이나마 실재적일 수 있다.",
      en: ""
    }
  },








   "zc1": {
    title: { ko: "빈 자리를 채우는 말", en: "Words Filling the Voids" },
    author: { ko: "권회찬", en: "Kwon Hoechan" },
    date: "2025-03-27",
    excerpt: { ko: "전시 서문", en: "Preface" },
    body: {
      ko: "그림이나 사례를 통해 이야기하는 방식을 삽화(illustration)라고 했을 때, 회화는 화가가 선택한 모티브가 필연적으로 존재하고, 임의적으로 구성된 현실의 모습을 담는다는 점에서 삽화적이다. 상투적인 의미로서 상상(想像)은 화가가 화면 안의 구성요소들을 단순히 위치시키는 과정에서도 발견할 수 있지만, 화가의 개입은 통상의 삽화와 달리 회화라는 매체 안에서 현실로부터 찾아낸 형상을 그저 재현하고 배치하는데 국한되지 않는다.\n 기호를 이루는 색상이 화폭에서 제멋대로 융합하는 비현실은 그림을 완성해나가는 과정에 투영되는 삶의 태도와 깊게 연루된다. 이는 공간을 뒤흔들고 깊이를 만들거나 허공에 띄우며, 무의식 속의 장면을 결합시키고 조명을 비추어 화면의 색상과 감촉을 뒤바꾸는 등의 회화적 조작을 통해 나타난다. 현실의 형상을 해체하는 붓질과 구성, 색채 감각을 통해 제안된 회화적 방법은 화가 개개인이 삶에서 느꼈던 신체의 불확실한 감각을 신경증적으로 추출해낸 상상적 기호이다. 이러한 표현은 보편적으로 인식되는 현실인 망막적 진실과는 분명히 동떨어져있다. 그러나 이들은 상상의 개입을 통해 회화가 형상을 재현해야 한다는 도구적 쓰임을 우회함으로써, 재현에서 나타나는 일상적인 기호를 회화적 구성과 붓질에 담긴 관념적 시각경험으로 대체한다.\n 참여 작가 7인은 삶을 경험하며 인식한 본인들의 생각, 의문, 기질 등을 기호화하여 회화의 한 형태로 끌어온다. 회화라는 매체의 제작행위를 경유하여 말하는 개인사를 맞닥뜨렸을 때, 기호적으로 읽을 만한 구체적 사건 등은 발견하기 어렵다. 그림에 나타난 간접적 진술을 통해 느낄 수 있는 것은 공기와 같은 가시성으로 다가와 말을 거는 회화적 수사(rhetoric)이다. 이러한 수사는 작가마다 다른 양상으로 나타나는 대화 소재인 모티브(motive)의 성격을 기준으로 분류해볼 수 있다.\n\n**김자연**의 모티브는 아이패드와 같은 디지털 인터페이스를 이용한 드로잉이나 그림에 참고할 이미지를 스크랩한 콜라주이다. 작가는 그렇게 만들어진 도안을 의도적으로 벗어남으로써 편리한 수단과 계획된 경로가 축소시키는 신체성에 대한 의문을 회화적으로 해소한다. 풍경에 표현된 제스처의 말려들어갈 것 같은 어긋남은 본래 붓질이 향했어야 할 경로를 그림 이전에 존재했던 계획된 초안으로부터 탈선시킨 결과이다. 작가를 둘러싼 무수히 많은 이미지 환경의 흐름을 거스르고자 하는 바람은 회화를 통해 재구축되어 정해진 계획 속에서 멋대로 진동하는 물질적 공간으로서 발언된다.\n **이서연**은 김자연과 유사하게 사진첩에 있는 구체적인 이미지나 눈에 들어오는 형상을 다루지만, 물감에 허우적대듯 화면 위를 유영하는 제스처를 통해 복잡한 시선 이동의 원리를 해석한다는 점에서 차이가 있다. 인간의 눈은 대상의 윤곽을 친절히 따라가며 순차적으로 형상을 인식하지 않는다. 불분명한 정보들을 조합하면서 시선이 꽂힌 지점을 기점으로 어수선한 방향성을 가지고 불규칙적으로 맴돈다. 캔버스의 어느 한 지점에 자의적인 붓질을 던져놓고 부분에서 화면 전체로 꼬리를 물고 순차적으로 확장시키는 작가의 회화적 방법은 대상을 국소적으로 파악하는 실제 시선의 방향성과 엇갈린다. 회화의 즉흥적인 제작과정과 물리적 시선 사이에서 벌어지는 혼잡한 움직임의 불일치는 작가가 규정한 회화적 진실의 단면 위에서 자율적으로 울렁이는 유희적 붓질로 나타난다.\n 남서정과 이수빈(a)은 모티브를 구체적 형상보다는 언어에서 취한다는 점에서 앞선 두 작가와 차이를 보인다. **남서정**은 움직임을 담고 있거나 오래되어 시간의 흔적을 느낄 수 있는 소재로부터 언어를 추출한다. 새가 날아오르는 시퀀스나 분수, 오래 신어서 떨어진 신발 끈 등과 같은 대상들의 물리적 성질은 2차원 평면에 삽입되면서 작가로 하여금 다양한 언어적 심상을 불러일으킨다. 원색적인 색감이 부유하는 대기를 터치로 그려나가는 손놀림과 궤적은 일상의 우주적 물리법칙을 언어적으로 상상하고 통제하는 과정에서 발생한다. 화면 위에 축적되어 충돌하는 동적 언어들의 색채에는 작가가 회화 매체를 다루면서 습득해온 조화의 감각이 동원된다. 대지를 밟고 서있는 인간이 전하는 수사의 공간은 피부와 맞닿는 현실과 시공간으로 확장되는 회화의 관계를 탐구하는 장이다.\n **이수빈(a)**은 일상 속에서 정신없이 떠오르는 언어들이나 무심코 벌인 붓질을 조형적 바탕으로 삼아왔다. 빠른 속도로 머리를 스쳐지나가는 파편화된 생각들은 회화의 기반이 되는 문장에 의해 정리된다. 형성된 문장은 이야기가 존재할 것 같은 배경을 캔버스에 그려내기 위한 단서이다. 그러나 그 문장은 작업이 진행되는 과정에서도 끊임없이 갱신되며, 이는 감정기복의 현상으로서 성찰의 대상이 된다. 확신에 차서 빠르고 긴 붓질로 그린 작가의 기존 그림들과 달리, 짧은 붓질을 통해 밑바탕을 덮거나 그림을 잘라내어 그림 위에 덧댄 형식실험은 산만하고 충동적인 스스로에 대한 의심이 담겨있다. 회화 내적으로 해결되지 않던 문제를 외부적 요인을 동원하여 해소하는 방식은 충동적이었던 과거의 모습을 은폐하고 즉흥성과는 다른 층위에서 회화를 재구성하기 위한 장치이다. 이렇듯 특정 소재로부터 심상을 추출하거나, 머릿속에서 끊임없이 떠오르는 생각을 정리하기 위해 동원되는 두 작가의 언어는 작업을 시작할 때 일차적으로 화면에 물감을 던져놓기 위한 모티브이다. 운동과 관련된 남서정의 언어는 공간으로 확장되는 궤적이 되고, 사물이나 공간과 관련된 이수빈(a)의 언어는 배경이 된다.\n 기억에 남아있는 구체적 형상을 해체하기도 한다. 평소에 인간의 동작을 주의 깊게 관찰해온 **손예인**은 연속동작에 겹겹이 쌓인 농축된 시간성을 회화 매체를 통해 풀어헤친다. 그림에 등장하는 단위로서 인간 형상은 작가가 하나의 동작으로 인식되는 움직임을 무수히 많은 양상으로 펼쳐놓은 모듈이다. 인간 기호의 안무는 이곳저곳을 배회하며 지나간 자리에 연속동작으로서의 흔적을 남긴다. 형상의 경계 밖에 그어진 스트로크의 왕복운동은 인간의 동작 하나하나에 머물고 있는 거친 배경이 회화 매체를 전제로 그어진 상상 속의 공간임을 환기시킨다. 작가는 각각의 동작들이 형성하는 경계를 인간의 신체성을 통과하는 회화적 방법을 통해 시끄럽게 펼쳐놓음으로써, 얽히고설킨 인간과 배경의 기호들을 경계가 모호한 흥미로운 노이즈로 빗대어 표현한다.\n **최도현**은 불현듯 떠오른 헤진 인상을 회화적으로 파괴하고 이 과정을 고전학문이나 문학, 신화와 같은 오래된 영적 알레고리와 엮어 풀이한다. 실제 삶에서 사람들과 어울려 지내다보면 상호간에 교류할 때 지켜야 할 통상적인 윤리가 있다. 이러한 제약은 일방적으로 영향을 미치면서도 영향은 받지 않고자 하는 이기심을 겉으로 표출하지 못하게 한다. 작가는 망실된 시체나 무생물과 같이 죽은 소재를 선택하고 파괴적 행위가 용인되는 캔버스 위에 배치한 후, 붓질을 이용해 질척거리고 만지작거림으로써 일방적인 충동을 해소한다. 작가에 의해 생명을 부여받은 죽은 소재는 생명력이 사라져 더 이상 흥분되지 않을 때까지 놀잇감의 역할을 다하게 된다. 배타적 폭력이 일어났던 흔적은 작가에겐 즐거운 시간을 보낸 추억으로서 영적 알레고리에 의해 기념되고 신비화된다.\n **이수빈(b)**은 일상의 경험에서 쏟아져 나오는 작은 뉘앙스, 행동, 표정, 반응 등의 섬세한 기억을 회화적 행위를 통해 해석하고 정리한다. 과거의 경험을 연상하는 과정에서 미분된 사고의 흐름은 기억과 연동되는 자극에 대한 작가의 감응으로서, 경험을 회화적으로 복기하는 붓질로 나타난다. 캔버스에 색채의 안개가 끼듯이 흩어지는 작은 단위의 붓질들은 열화(劣化)된 정서의 부스러기들이다. 이 농축된 심상은 회화를 통해 정리되는 과정을 거치며 점차 본래 기억의 형태를 잃어가게 된다. 시각경험으로 형질 전환되어 잘게 쪼개진 감각들이 화면에 축적된 회화에는 평소에 자신으로부터 한발자국 떨어져서 상황을 재정의하던 작가의 습성이 표현된다.\n\n 그림의 완성을 위해 화면의 빈자리를 채우는 일은 말하는 과정과 유사하게 다양한 이야깃거리나 현실의 법칙에 빗대어 묘사하는 수사를 동원한다. 이번 전시는 이러한 수사 자체를 탐구하는 과정이다. 작가들의 기억과 심상은 물질적인 매체에 의해 번역되어 전시장의 관객에게 보이지 않는 말을 건넨다. 수사적 표현은 직설적이고 무미건조하게 정보를 나열하는 어투와 비교했을 때, 세계와 관계하는 개인의 관점을 더 또렷하고 순수하게 드러낸다. 왜냐하면 신체적 감각을 예시하는 한 형태로서 수사는 일상적 기호를 직접 언급하지 않고, 청자로 하여금 화자의 순수하고 복합적인 감각에 능동적으로 말을 채우도록 유도하기 때문이다. 회화적 수사가 남긴 빈자리에 자신의 언어를 채운 청자는 회화가 알아볼 수 없게 불명확한 만큼이나 분명한 화가 내면의 색채를 감각할 수 있다.",
      en: ""
    }
  }, 






   "zp1": {
    title: { ko: "광물채집", en: "" },
    author: { ko: "이립", en: "Lee Rip" },
    date: "2025-09-06",
    excerpt: { ko: "전시 서문", en: "Preface" },
    body: {
      ko: "[right]이립 (작가, '가족의 물건' 워크숍/전시기획)\n\n\n≪광물채집≫은 워크숍 <광명시의 수집가들 (가족의 물건)>(7.28~9.1, 총 6회차)의 작업 과정을 모아 만든 전시입니다. 지금은 사용하지 않지만 버리지 못하는 '가족의 물건'을 소재로, 광명시에 거주하는 지역참여자와 다른 지역의 참여예술가가 함께 평면, 입체, 영상의 창작물을 선보입니다.\n\n집에 있는 물건은 용품의 기능을 넘어 가족의 기억을 담고 있습니다. 거실에 있는 가족 사진, 부엌에 있는 대용량 냄비와 그릇들, 현관에 있는 배드민턴 라켓과 셔틀콕 등 가족과 함께 사용한 물건들이 집에 있습니다. 그러나 시간이 지나면서 물건의 주인은 점차 희미해 갑니다. 그럼 '가족의 물건' 정리는 누가 어떻게 해야 할까요?\n\n가족과 함께 사용했던 물건을 정리하고 싶은 광명시의 시민들을 모집하여 <광명시의 수집가들(가족의 물건)> 약 6주간의 워크숍을 진행했습니다. 워크숍에서는 평면, 입체, 영화 매체로 나누어 글쓰기, 그리기, 만들기의 창작활동을 펼쳤습니다. 회차별로 예술인의 인솔에 따라 참여예술인과 지역참여자가 함께 동등한 조건에서 작업을 전개합니다.\n\n권회찬 작가가 인솔한 {평면}은 '가족의 물건'을 바라보며 각자의 어휘로 나열하고 그림으로 담아봅니다. 물건에 관한 과거의 기억, 사건, 감정으로 적힌 단어가 다른 사람의 시선에서는 어떻게 읽히고 그림으로 옮겨지는지 살펴보는 시간이었습니다. {입체}에서는 이립 작가의 인솔에 따라 '가족의 물건'의 생김새를 살피며, 가족과 함께 사용했던 의미와 가치에서 벗어나 물건의 모양에 집중합니다. 물건의 기억에서 다정하게 멀어지기 위해 면-선-점의 조형으로, 종이의 면을 칼의 선으로 접고 글루건의 점으로 찍어 입체로 세우는 작업을 전개합니다. 조한나 작가 시간에는 공동으로 {영화}작업을 창작했습니다. '가족의 물건'에 관련된 구체적인 사건과 기억, 감정을 공유하며, 실제와 허구를 넘나들며 서로의 집과 인물이 뒤섞어 하나의 이야기로 만들었습니다.\n\n본 프로젝트는 세상을 이해하는 도구로 시각예술의 조형활동을 전개하며, 참여자와 함께 예술적 가치를 발견하고 창작 활동을 공유합니다. 광명시를 시작으로, '가족의 물건'을 통해 지역을 연결해 보고자 합니다.",
      en: ""
    }
  }, 








  "zs3-1": {
    title: { ko: "해설하는 예술가의 딜레마", en: "The Dilemma of the Self-Explaining Artist" },
    author: { ko: "비평가 -*a*-", en: "Critic -*a*-" },
    date: "2025-11-25",
    excerpt: { ko: "《Cheese!》비평", en: "《Cheese!》 Critique" },
    body: {
      ko: "\n\n\n[center]관계의 미학?\n\n\n아니, 저기요. 잠깐만요. 이런 식으로 사람들을 기록하려는 이유가 도대체 뭔가요? 행위자와의 조율에 초점을 맞춰 설명하고 있는 그 트래킹(Tracking)이라는 것은 사실, 담론적 제도주의의 논리를 확장해서 전 세계적으로 한창 유행하다가 한물간 관계 미술의 회화 버전이 아닌가요? 실제로 니꼴라부리오(Nicolas Bourriaud)는 마르셀 뒤샹(Marcel Duchamp)의 예술 계수(Art Coefficient)-[^예술 계수는 1957년 4월 3일부터 6일까지 텍사스 휴스턴에서 열린 미국 예술 연맹 대회에서 마르셀 뒤샹이 한 연설에서 처음 사용된 용어이다. 뒤샹은 예술 계수를 “의도적으로 표현되지 않은 것과 의도치 않게 표현된 것 사이의 산술적 관계”라고 말한다.]-를 인용하면서 예술가가 생산하는 것은 미학적 대상 그 자체라기 보단, 이를 통해 만들어지는 인간과 세계 사이의 관계들이라고 말하기도 했죠. 기존의 아방가르드는 미술사적으로 가까운 의제로부터 문제의식이 뻗어나가는 근접성 기반의 예술적 실천들을 보여주는 데 그쳤다면, 관계의 미학은 궁극적으로 제도 내에서 발생하는 ‘작품의 장소로서 인간관계’를 하나의 개념으로 환원하는데 성공했어요.-[^니꼴라부리오, 현지연 역, 『관계의 미학』, 미진사, 2011, pp.76-78.]- 과거엔 모범생이었던 당신이 학부에 막 입학했을 때 『관계의 미학(Esthétique relationnelle)』이 미술 이론 수업의 마지막 챕터였던 점을 생각해 본다면, 작업을 시작하게 된 시기에 접한 최신 이론인 관계의 미학을 지금 시점에 회화의 형태로 부활시키고 싶어 하는 것이 아닌가요?\n\n 관계라는 용어는 정말 완벽하죠. 미술 역사 속에서 이론가들이 제도를 비평하기 시작한 이래 가장 완벽한 제도적 환원이에요. 이 순결한 용어 앞에서는 회화가 어쩌고, 조각이 어쩌고 하는 말 자체가 무의미해 보입니다. 부리오에겐 회화적 선택도 관계, 조각적 선택도 관계, 그러면 설치미술이나 미디어아트 같은 비교적 최근에 다뤄진 매체나 비평, 기획, 미술사와 미적 제반 같은 것들 다 제도적으로 관계였다는 말로 퉁치는 게 가능하니까요.-[^니꼴라부리오, 위의 책, pp.73-75.]- 펠릭스 곤잘레스-토레스(Felix Gonzalez Torres)가 종이 더미를 쌓아놓고 관객이 가져가도록 하고, 리크리트 티라바니자(Rirkrit Tiravanija)가 전시 오픈 날에 팟타이를 나눠주고, 바네사 비크로프트(Vanessa Beecroft)가 20여 명의 여자들에게 똑같은 옷을 입힌 후 관객들이 문에 난 구멍으로만 작업을 볼 수 있게 하고, 크리스틴 힐(Christine Hill)이 갤러리에서 체조 교실을 운영하는 등의 프로젝트들은 미술 제도 내부의 관계들을 가시화한 사회적 축소 모델(modéles réduits)로서 명명됐습니다. 권미원 선생님께서는 1980년대 그룹 매터리얼(Group Material), 게릴라 걸즈(Guerrilla Girls), 크리치스토프 보디츠코(Krzysztof Wodiczko) 등과 같은 작가들이 미술적 개입의 장소로 기존의 도시 형태를 택함으로써 탈-영토화시킨 익숙한 도시공간을 ‘담론적 장소’로 명명하셨죠.-[^권미원, 김민규·우정아·이영욱 역, 『장소 특정적 미술』, 현실문화연구, 2013/2021, p.113.]- 임근준 선생님이 말씀하셨던 바와 같이, 제도적 관계에서 장소가 소거된 채로 제시된 모델, 즉 관계적 작업들은 이러한 담론적 장소성을 다루는 예술들의 이상적 형태처럼 느껴지기도 했습니다. 관계란 말은 참으로 아름다운 단어입니다.\n\n 뿌리가 성장하고 뻗어나갈 때 새로운 뿌리 내리기를 도와주는 유기체를 레디컨트(Radicant)라고 합니다. 니꼴라부리오는 이 개념을 통해 다음과 같이 제안합니다. 우리 세기의 (얼터)모더니티는, “정체성에 다시 뿌리를 내리는 나쁜 해결책과 경제적 세계화로 판결되는 상상의 표준화 두 가지 모두 버리면서, 모든 근본주의에 대해 명확한 반대 입장에서 고안될 것”이며, “21세기 문화가 다수의 동시적 혹은 연속적인 재뿌리내리기”를 통해 그들의 근원을 지우는 임무를 수행하면 어떻겠냐고 말이죠. 이는 포스트모던 다문화주의가 강조하는 문화적, 윤리적, 지리적 뿌리에 소속된 개인이 스스로의 민족적 정체성에 뿌리박힌다는 점(enrootedness)을 지적하는 주장입니다. 포스트모더니즘의 근본주의가 오히려 표준화를 야기하고 있다는 점을 들춰낸 것이죠. 부리오에 따르면 탈식민주의에서 좌익 세력의 다문화주의는 하나의 멤버십처럼 취급됩니다. 이 다문화주의자들은 20세기 내내 반식민주의 싸움에서 사용된 ‘자유를 위한 투쟁’이라는 저항의 언어를 차용함으로써 모더니스트 이데올로기의 명맥을 유지하죠. 이에 저항하기 위해 정초된 개념이 독단적인 모더니즘의 대안으로 부리오가 소환하는 얼터-모던(Altermodern)입니다. 콩고 또는 라오스 미술가들이 재스퍼 존스나 마이크 켈리와 똑같은 이론적 공간에서 맞붙고, 같은 표준에 의해 평가될 수 있도록 각자의 성역으로부터 끌어내야 한다-[^니꼴라부리오, 박정애 역, 『레디컨트』, 미진사, 2013, pp.32-55.]-는 점이 포인트죠.\n\n 부리오가 말하는 얼터-모더니티는 현대의 작품들이 동일한 기준으로 평가되는 토론의 장소를 만들기 위한 개념어인데, 부리오가 개념을 정초하는 방식은 모더니즘이 개념을 환원하는 방식과 유사합니다. 그린버그 (Clement Greenberg)가 전통적인 회화의 공간성을 재현한 추상적 화면을 반/역-환영주의 예술로서 극단적인 배타성을 지닌 모더니즘 회화의 정수로 제시한 것처럼 말입니다.-[^클레멘트 그린버그, 조주연 역, 『예술과 문화』, 경성대학교 출판부, 2004/2023, pp.202-206.]- 부리오에게 ‘얼터-모던’과 ‘관계’라는 개념 쌍은 과거 ‘모더니즘 회화’와 ‘평면성’이라는 개념 쌍을 갱신하는 새로운 예술적 본질이었던 거죠. 모더니티가 남긴 투쟁을 넘어섬으로써만 모더니티를 유익하게 연장할 수 있다-[^니꼴라부리오, 『관계의미학』, p.107.]-고 이야기하기도 했으니까요. 상품의 양상을 띠고 있는 작가들의 신화화된 독창성을 비판하며 다양성이야 말로 최고의 속임수라고 말한 대목-[^니꼴라부리오, 위의 책, p.152.]-에서는 모더니즘과의 투쟁을 통해 그릇된 모더니티의 생명을 연장시키는 포스트모더니즘에 대한 환멸을 잘 보여주고 있는듯해요. 그래서 포스트모더니즘 일군의 학자들이 가장 싫어하는 방식으로 모더니티가 지닌 환원성을 수용한 것일지도 모르겠습니다.\n\n 부리오는 2024년 광주 비엔날레 총감독을 맡고 나서 엄청난 비판을 받았었죠. 손영옥 기자는 판소리가 메타포에 불과하다는 부리오의 답변을 받고 맥락과 무관하게 철저히 서구인의 시선에 의해 대상화하는 제국주의적 시선을 느꼈다고 말했습니다.-[^손영옥, 「[손영옥의 컬처 아이] ‘니콜라 부리오의 판소리’는 옳지 않다」, 『국민일보』, 2024.11.7, https://www.kmib.co.kr/article/view.asp?arcid=1730867074, (검색일자: 2025.9.23.)]- 사실, 니꼴라부리오를 잘 아는 사람한테는 그다지 새로운 내용이 아니었을 거예요. 부리오는 지역성과 근본주의를 정말 싫어했고, ‘그것’들을 ‘그것이 아닌 형태’로 어떤 방식으로든 환원해 내고 싶어 했거든요. 환원을 벗어나는 환원이라는 모순이죠. 부리오가 한국의 판소리나 스페인의 플라멩코나 상관없다고 응답했던 질의도 지역성과 정체성이라는 개념이 소통을 가로막을 것이라고 생각하는 부리오의 철학을 보여주는 대목인 거죠. 클레어 비숍(Claire Bishop)의 말처럼, 그는 철저히 형식주의자입니다. 결정적으로 부리오는 1935년 발터 벤야민(Walter Benjamin)의 아우라 상실 논의 이후로 모던 아트가 충분히 논의되지 않은 채 폐기된 것에 대해 아쉬움을 토로하기도 했죠. 부리오에겐 모더니티를 유익하게 연장하여 공동체를 활성화시키는 일이 개인의 해방보다도 훨씬 시급한 문제였습니다.-[^니꼴라부리오, 위의 책, pp.106-108.]- 그래서 이 이론을 통해 예술의 생산과 제작 과정, 교환의 게임 안에서 작품의 위치, 관객에게 부여한 지위, 혹은 역할, 예술가의 창조적 태도 등을 관계라는 효과적인 용어로 은유해 낸 겁니다.-[^니꼴라부리오, 위의 책, p.73, 관계라는 단어에 의해 수없이 많은 비판에 시달렸던 부리오는 이후 저서에서 관계라는 말을 많이 언급하지는 않게 되지만, 설치 작업에 침투하는 관객이라는 개념의 중요성은 늘 염두에 두고 있었다. (니꼴라부리오,『레디컨트』, p.158.)]-\n\n 부리오의 또 다른 특징은 어떤 기술도 예술에 있어 주제가 되지 못한다고 생각한다는 점입니다. 이 사람은 동시대 예술에 대한 기술의 영향력은 실재와 상상 사이를 기술이 한정 짓는 정도로만 작용한다고 말해요.-[^니꼴라부리오, 『관계의미학』, p.127.]- 새로운 도구가 제공한 가능성들이 기술의 확장된 범주를 보여줄 뿐이라는 거예요. 즉, 부리오는 단순히 새로운 기술을 사용했다는 이유만으로 작가를 고평가하지 않습니다. 완성된 오브제와 닫힌 총체성 위에서 실행되는 고전주의적 미감이 제공하는 완충장치를 보고 눈살을 찌푸리죠. 주체성을 주체로부터 탈영토화하고 몰아내야 한다고 말하는 것을 보면 알 수 있잖아요?-[^니꼴라부리오, 위의 책, p.160.]- 여기까지는 매체 개념이 폐기되어야 한다고까지 주장했던 데이비드 조슬릿(David Joselit)-[^데이비드 조슬릿, 이진실 역, 『예술 이후』, 현실문화연구, 2022, p.18.]- 역시 동의하는 내용일 겁니다. 전통적 매체 개념을 비판적으로 계승하여 모더니즘적 형식주의를 연장하는 로잘린드 크라우스(Rosalind Krauss)식 매체론에 대한 적당한 비판이기도 하죠. 문제는 이 관계 아저씨가 미술의 주제를 싹 다 관계로 환원해 버린다는 데에 있어요. 클레어 비숍은 관계의 미학을 매체에 대한 이해 없이 스펙터클을 동원하여 관객의 현전만을 발생시키는 설치미술의 계보라고 적시해버릴 정도였으니까요.-[^Claire Bishop, 「Antagonism and Relational Aesthetics」, 『October』, no.110, 2004, p.63.]- 누구나, 무엇이든 관계 속에 있다는 듯이 말하는 부리오의 입장은 십분 동의하지만, 그러한 미학적 성과가 무색하게도 관계 미술 작업들의 면면을 살펴보면 예술 제도에 관계와 관객이라는 항을 추가한 정도에 그친 듯해요.\n\n 부리오가 인용했던 작가들이 작업을 운영하는 방식을 보면, 관객이란 존재는 사회적 모델로서 제안된 작품 속의 부속이 되어 있는 경우가 많습니다. 관객이 암묵적 합의를 따르지 않겠다며 어뷰징을 시작하면 곤잘레스 토레스의 사탕을 봉투째 쓸어가는 사고가 나기에 작업 설계단계에서부터 그런 기행을 염두에 둘 수밖에 없을 겁니다. 말하자면 사회 모델을 재현하기 위한 관객은 예측 가능한 범주 안에서만 작동하는 톱니바퀴에 불과한 셈이죠. 티라바니자는 자신의 작업을 통해 비슷한 미술 애호가들의 만남이나 주선한다는 비아냥을 들어야 했죠.-[^Claire Bishop, 위의 글, pp.68-69.]- 실제로 클레어 비숍이 비판한 대로, 몇몇 관계의 미학 작가들의 작업은 그 관계가 누구를 위해, 무엇을 위해 생산되어야 하는지 탈색되어 제시된다는 문제가 있어요. 비숍은 에르네스토 라클라우(Ernesto Laclau)와 샹탈 무페(Chantal Mouffe)를 인용하며, 민주주의의 과제는 이상과 실용적 관리 사이의 긴장 속에서 균형을 유지하는 것이라고 말합니다. 여기서 타자는 나 자신의 자아 감각을 의문스러운 것으로 변질시키는 존재이기 때문에, 관계에 있어서 총체성이란 건 구성 불가능한 개념이라는 거예요.-[^Claire Bishop, 앞의 글, p.66.]- 그래서 비숍에게는 부리오가 주장하는 조화로운 공동체 모델이 허무맹랑해 보일 수밖에 없었던 거죠.\n\n 제가 한물갔다고 표현했던 것처럼, 국내에서는 관계의 미학에 대한 평가가 사실상 끝났다는 목소리가 지배적입니다. 최근에는 니꼴라부리오조차 관계에 대한 직접적인 이야기보다는 자본세 시대에 인간과 비인간의 상호작용에 대한 신유물론적 논의로 관심을 돌렸죠. 하지만 관계 미학 계열 작가들이 자신들에게 향한 비판을 어떤 방식으로 해소해 왔는지는 오늘의 기준으로 재논의해 볼 필요가 있어요. 관계의 미학이 처음 출판된 게 1998년이고, 비숍의 비판도 2004년에 쓰였으니까요. 비숍의 비판은 티라바니자 같이 관계성을 피상적으로 다뤘던 작가들에 국한되어있다는 한계가 있었습니다. 그런데 부리오가 언급한 관계 미학 계열 작가군에는 그런 작가들만 있는 게 아니거든요. 1998년 당시의 부리오에 따르면, 관계적 작업에 의해 형성되는 마이크로-커뮤니티(micro-communauté)는 미니멀 아트가 부각시키는 추상적인 신체적 현존을 넘어섭니다. 왜냐하면 관계적 작업에서 관람자의 기여는 몸 전체, 역사, 그리고 태도이기 때문이죠.-[^니꼴라부리오, 『관계의미학』, pp.105-106.]- 여기서 관객(the viewer)을 어떻게 해석하느냐에 따라 전혀 다른 차원의 이야기를 할 수 있어요. 그런데 부리오가 주로 들었던 사례들을 한 번 보세요. 티라바니자가 미술관에서 만든 친목 모임이나, 자신이 만든 작품 앞에 사람이 모이는 게 작업이라고 주장했던 리암 길릭(Liam Gillick) 등, 이외에도 부리오가 힘줘 강조하는 작가들의 작업은 하나같이 전시장에서 관객에 의해 완성되는 작업인 경우가 많았습니다. 이때, 미술관에서 벌어지는 소통이 동네 조기 축구회 경기에서 발생하는 관계와 구분되려면 소통에 대한 적절한 입장이 필요했습니다. 관계라는 게 도대체 무엇이고, 누구를 대상으로 한 소통이고, 그리고 궁극적으로 이게 왜 미술이어야 하는가에 대해 초점을 맞추지 못하는 부리오식 관계의 미학 사례는 미술이기를 포기함과 동시에 자기 존재 부정의 함정에 빠질 수밖에 없었습니다.\n\n 제가 봤을 때, 1998년의 부리오는 당시 관계 미학의 사례를 설명할 때, 자신이 밀고 있는 이론의 핵심적인 층위를 알지 못했던 것 같아요.-[^니꼴라부리오, 위의 책, pp.9-11.]- 관계의 미학의 진가는 전시 안에 있는 것이 아니라, 오히려 전시장 밖의 관계를 어떻게 전시장 안에서 잘 구성할 수 있느냐에 있거든요. 필립 파레노(Philippe Parreno)가 반응형 공간을 전시장 안에 작동시켜 구성해 냈을 때, 전시장의 요소들로 확장된 관계 미학에서의 관객 개념은 현장의 관객으로 하여금 미니멀리즘적 현존을 느끼게 함과 동시에 비인간 객체들도 개념적 관객으로 간주할 수 있다는 트렌디한 관점을 보여주었죠. 피에르 위그(Pierre Huyghe)는 생명이 다했다고 판단된 서사의 주인공을 새로운 협업의 형태로 재소환해 내는 방식으로 다양한 주체의 목소리를 가시화했습니다. 알리기에로 보에티(Alighiero Boetti)는 지도 제작 전통이 없었던 아프가니스탄의 방직공들에게 세계 지도 자수를 주문제작하여 예상할 수 없었던 협업의 결과를 만들어냈죠. 더글라스 고든(Douglas Gordon)은 히치콕의 <Psycho>와 같이 유명한 기존의 영상을 포스트-프로덕션의 방식으로 개입하여 관객이 영화를 마주하는 기억을 재구성해 냈습니다. 특히 이 사람들이 서로서로 협업하고, 때로 한스 울리히 오브리스트(Hans Ulrich Obrist)와 같은 기획자와 교류하거나, 기획자로서 실제로 전시를 구성해 내기도 했다는 점은 유독 특이했던 점이기도 하거든요. 너무도 유명한 안리(Annlee) 프로젝트가 대표적인 사례잖아요. 이 지면에서 다 다루기는 어렵겠지만, 초기 관계의 미학의 중요성은 오늘날 논의되고 있는 기획과 작업의 중간지대를 탐색하기 위한 개념에 가장 가까이 위치해있다는 점에 있어요. 2009년에 출판된 『레디컨트』에서 부리오는 그간 여러 논자들의 비판을 의식했는지, 나름의 해답을 내놓기도 했었죠. “미술가의 작품의 질은 그 혹은 그녀가 세상에 가진 관계의 풍요로움으로 결정”-[^니꼴라부리오, 『레디컨트』, p.225.]-되고, “미술 작품은 다른 작품이나 이미 존재하는 물체의 반복과 복제로 구성된 하나의 이벤트”-[^니꼴라부리오, 위의 책, p.236.]-이며, “조정자 없는 수평적인 협상의 공간”을 통해“번역을 실천하고 새로운 공통의 이해 능력을 가져올 토론을 조직”-[^니꼴라부리오, 위의 책, p.253.]-해야 한다고 말이죠. 그럼에도 작업으로서 관계의 미학에는 여전히 비숍의 비판이 유효한 측면이 있습니다. 내재적인 마찰이 없는 타협된 관계는 본디 불화를 일으켜야 마땅한 민주적 타자들의 존재를 은폐하게 되니까요.\n\n\n\n[center]개념적으로만 초상인 회화의 제 문제\n\n\n다시 처음으로 돌아오면, 사람들과 관계를 맺고 이에 대한 상징적 행위로서 선(Tracking)을 수집하는 당신 작업의 시스템은 부리오 식 관계의 모델은 아니지만 전시장 밖에서의 사회적 모델을 형성하죠. 사람과의 만남을 강조한다는 점에서 명백히 관계적인 태도를 지니고 계신데, 그렇다면 관계의 미학으로부터 연좌된 비판에서 자유로울 수 있겠습니까? 당신은 그 사람들과 도대체 왜 친해져야 했던 거죠? 당신은 친하지 않은 사람과 같이 작업하면 사이가 애매해지는 경우가 종종 있었다고 말했습니다. 그래서 요즘에는 함부로 제안을 안 하게 되었다고도 했는데, 이는 타인의 선을 받는 과정을 비즈니스 이상의 무언가로 여기고 있다는 뜻이 아닙니까? 생각해 보세요, 서울시립미술관 같은 곳에서 관객들과 소통한다며 관 차원에서 프로그램을 만들고 작가랑 관객이랑 만나게 해주는 건 진짜 만남이죠. 그런 프로그램들이 관계의 미학 군의 작가들의 만남과 다른 점은 작가의 작업으로서 은유된 사회적 모델이 아니라는 점에 있어요. 예술이라기보다는 기관의 기능수행의 성격이 강하죠. 당신의 작업에서 알리바이로서 제시되는 관계성은 관계의 미학과 닮았지만, 전시장에서 벌어지는 관계의 모델이 아니기에 부리오의 관계의 미학으로부터 멀어져요. 오히려 성격 자체만 두고 생각해 보면 미술 관계의 프로그램에 더 가깝죠. 그렇다면 그런 기관에서 주선하는 만남과 당신이 친해진 사람과 만들어가는 만남은 뭐가 다를까요? 당신과 친구들의 만남이 그림의 알리바이라고 했을 때, 우리는 그 만남을 어떻게 읽어야 하느냐는 거예요. 그 사람들에 대한 글을 쓰긴 하셨지만, 당신이 친구들과 만난 관계와 미술관에서 다양한 사람을 만나는 관계에서는 무슨 유의미한 차이가 있긴 있는 건가요? 그냥 만나서 놀았고, 그렸고, 좋았다. 끝인가요?\n\n 그렇다면 관계적 작업이라면 정치적 문제를 도외시해선 안 된다는 비숍의 비판은 어떻게 생각하시나요? 클레어 퐁텐(Claire Fontaine)과 같은 정치적 효용을 발생시키지 못한다면 관계의 미학에 늘 딸려 다니는 비판인 탈색된 정치성과 자본주의에의 귀속의 문제가 당신의 작업을 열심히 따라다닐 텐데 말이에요. 나는 요셉 보이스(Joseph Beuys)가 카셀 도큐멘타에서 사람들과 함께 7000그루의 떡갈나무를 심은 작업에 당신이 깊은 감명을 받았다는 사실을 알고 있어요. 그 작업 역시 관계의 미학과는 차이가 있죠. 보이스의 사회적 조각은 관계의 미학과 다르게 사람들과의 관계를 가시화하면서 모델을 제시하고 있지는 않으니까요.-[^니꼴라부리오, 『관계의 미학』, p.125.]- 대신에 이상적인 사회를 창조하고 실현하는데 있어서 모든 사람의 책임을 강조하잖아요. 세계를 바꾸는 예술이라고 하면서요. 하지만 탈색된 유토피아에 대한 막연한 동경이 통했던 그때와 지금은 또 다르죠. 신자유주의 발 국제적 연결과 지구촌의 허상이 얼마나 많은 문제를 야기했는지 우리는 잘 알고 있잖아요? 지금은 그런 아름다운 사회적 조각을 다듬을 시기는 아니에요. 비숍이 얘기한 것처럼 적어도 정치성을 가진 작업이라면 관객을 능동화하는 것이 바로 민주적인 행위라는 단순한 결론으로 나아가지는 말아야겠죠.-[^Claire Bishop, 앞의 글, p.79.]- 이런 문제들을 해소할 수 없다면 타인이 작업에 들어오는 컨셉에서 무슨 의미를 찾을 수 있겠나요? 안은미 작가처럼 관계적 역할을 수행하면서 하위 주체들과 소수자를 임파워함으로써 정치적 효용을 발생시킬 생각은 못하는 건가요? 당신의 만남에는 사회 변혁의 목소리를 내기 위한 에너지가 있나요?\n\n 당신 작업에서 문제가 되는 지점은 또 있어요. 위에서도 언급했듯이, 니꼴라부리오는 전통적 매체론을 모더니즘적 순수성의 생명 연장 장치로 보고 그러한 주체성의 도식을 탈피하고자 했던 인물입니다. 하지만 당신은 여전히 회화라는 매체를 놓지 못하고 있죠. 현재로서는 관계와 회화를 절충하고 있는 상태잖아요. 이러면 관계가 당신 작업에서 중요한 게 맞다고 볼 수가 있는 겁니까? 그냥 재료 아니에요? 저것들이 어딜 봐서 관계고 대화인지 모르겠어요. 내 눈에는 그림밖에 안 보여요. 입체파 풍의 초현실주의 조각 그림이요. 하지만 당신은 선과 회화에 행위자의 내면적인 이야기가 담겼다고 주장하죠. 레싱(Lessing)이 『라오콘(Laocoon: An Essay upon the Limits of Painting and Poetry)』에서 미술과 문학은 닮으려 애쓰지 말라고 한 이래로 형식 실험의 장이 된 회화 매체의 암묵적 룰을 어기면서 말이에요. 마치 문학과 회화가 구분되지 않던 중세 도상학 전통을 보란 듯이 복권시키려는 욕심을 부리는 사람 같아요. 물론 요즘 회화를 형식 차원에서만 고찰하지는 않습니다. 시는 그림과 같다(ut pictura poesis)는 호라티우스(Horatius)의 전근대적 원칙이 오늘날 작가들의 입을 통해서 이미 재등장하고 있기도 하니까요. 하지만 여전히 회화는 형식의 문제 주변에 계류하고 있잖아요? 그렇다고 당신의 그림에서 그런 문학성이 나타난다는 말은 또 아니에요. 사람들의 선을 받은 다음에 그것을 당신 입맛대로 재구성한 결과물에 무슨 이야기가 담기겠습니까. 말하자면 그림에 담긴 행위자의 선은 당신의 회화 내에서 서사를 발생시키지 못하잖아요. 그림에 담긴 도상이랄 것도 없고 그냥 이 사람이 참여했다는 알리바이 뿐이죠. 그게 답답해서 사람들에 대한 글을 쓰신 건 아닌가요? 당신의 그림은 혼자 말을 못하니까 해설할 글이 필요했던 거죠. 죄송스럽게도 당신 작업에서 코어는 그림일 수밖에 없어요. 글이 없어도 당신 그림은 그림이지만 그림이 없다면 그 글은 아무것도 아니니까요.\n\n 결국 회화 형식에 대한 탐구가 핵심이라는 말입니다. 하지만 당신은 작업의 태생적 한계에 붙들려 재료 연구에 전혀 공을 들이지 못하고 있죠. 당신은 캔버스에 수채화를 쓴다거나, 종이죽 혹은 나무같이 회화와 조각의 경계에 있는 지지체 위에 그린다거나, 특이한 미디엄 용제를 섞는다거나 자연의 재료를 주워 오는 등의 수고를 하고 있지 않습니다. 굳이 형식 실험을 했다고 하면 콩테를 사용했다는 특징이 있다고 말할 수 있겠네요. 행위자가 참여했다는 사실을 알리바이 삼아서 무언가 ‘존재한다’는 트롱프-뢰유적 거짓말(이 역시도 현실과 착각할 정도로 사실적이지는 않은)이 연출된 초현실적 공간의 전제조건으로서의 콩테 말이죠. 로잘린드 크라우스라면 그래도 포스트-미디엄 상황에서 기술적 지지체(Technical Support)를 창안한 것으로 이해해 줄 수도 있을 거예요. 회화와 낙서, 그리고 초상이라는 기술적 지지체가 전통 회화매체를 지시한다면서 말이죠. 물론 이마저도 무슨 MBTI마냥 성격을 분류하는 유형학적 장치로 회화를 이용했다는 점에서 영 구린 데가 있긴 하지만요. 다만, 나름 갖춰진 실험이라고 할 수 있는 캔버스 천을 잘라낸 입체 작업은 확장된 회화로 주목받긴 하겠군요.\n\n 타인이 들어올 수 있는 공백이라는 것도 그래요. 당신의 회화 자체만 놓고 보면 어떻죠? 초상과 풍경 연작은 타인이 참여함으로써 완성되죠. 애초에 그렇게 설계된 작업이잖아요. 하지만 콩테를 형식 실험이라고 하기에는 너무 안 예쁘지 않아요? 회화는 결국 보이는 게 중요한 법인데, 작업 개념을 위해 회화성을 희생시키는 회화 도구라니 너무 안타까워요. 타인을 끌어들인다는 기능을 빼면 당신의 회화에 남는 건 주황색 선으로 꽉꽉 막힌 답답한 화면뿐이잖아요. 특히 당신의 회화는 콩테가 나눠놓은 구획 하나하나가 회화성을 방해하기 때문에 제대로 된 회화적 회화도 아니에요. 회화가 아니라 장치죠. 모티브와 구성을 트래킹과 구조적 선으로 구분하는 시스템은 타인이 들어오기 용이한 공백을 만드는 데는 성공했을지 몰라도 당신 회화를 회화가 되지 못하게 막는 가장 큰 결함이기도 해요. 결국 타인의 힘을 빌리지 않으면 당신의 회화에 힘이 없는데 다른 사람이 참여하고 말고가 뭐가 중요할까요? 그 결함을 유지하면서까지 타인과의 교류를 작업으로 삼아야 하는 이유가 뭐죠?\n\n 주황색 선이라는 장치가 없었다면 당신은 구린 그림을 그렸을까요, 아니면 오히려 잘 그렸을까요? 억제기 역할을 하는 지금 그 장치, 당신은 그 장치에 잡아먹힌 거나 다름없어요. 그 선에서 벗어나지 않는다면 당신의 그림은 영원히 회화가 되지 못할 겁니다. 하지만 그게 쉬울까요? 장치를 벗어나서 존재하는 당신의 회화가 어떤 구린 모습일지 예측할 수가 없죠? 그동안 장치에 기대어 작업을 해온 태만의 업보라고 봐야합니다. 당신이 과연 실패 가능성을 감수하고서라도 그 주황색 선에서 벗어날 노력이라도 할 수 있을지 모르겠네요. 사실, 그렇게까지 매체, 관계 둘 다 놓치기 싫다면 딱 경계에 위치한 기술적 지지체를 창안해 내는 방법이 있긴 합니다. 전에 당신이 ‘사람의 선을 받아서 그것으로부터 완성된 그림을 초상이라고 명명’하는 현재의 규칙 말고도 다른 규칙들을 또 추가할 거라고 했잖아요? 그리고 사람과 사람의 대화에서 발생하는 오해, 작업에 대한 설명과 원본 작업 간에 발생하는 불일치 등, 언어와 실재의 어긋남에 대해 관심이 많다고도 했었죠. 이건 좋은 방향이에요. 그놈의 타인이 아니라 당신이 관심 있는 언어와 감각적 층위의 불일치에 집중한다는 점에서요. 그렇게 아예 형식매체와 사람으로부터 동시에 멀어지는 게 돌파구가 될 수도 있어요. 지금은 낙서와 콩테라는 규칙밖에 없으니 ‘콩테의 화가’밖에 못하는 거잖아요? 다 좋은데, 그걸 도대체 언제 보여줄 겁니까?\n\n 남에게 관심이 그렇게 많은 지점도 문제가 됩니다. 진릿값이 없는 개소리(Bullshit)-[^해리 G. 프랭크 퍼트, 이윤 역, 『개소리에 대하여』, 필로소픽, 2016/2025, p.38, 퍼트는 진리에 대한 관심에 연결되어 있지 않은 말이 개소리라고 말한다.(p.58.) 거짓말(lying)과 개소리가 다른 점은 거짓말은 상대로 하여금 허위를 사실로 믿게 하기 위함이지만, 개소리는 자기 말이 맞든 틀리든 진릿값은 전혀 중심 관심사가 아니라는 점에 있다. 이러한 성격은 단편적인 글쓰기(Fragmentary Writing)의 실천에 대해 역설하면서 ‘진실한 저자’의 허구성을 폭로한 블랑쇼(Blanchot)와 유사한 맥락을 공유한다. 물론 퍼트는 실재란 존재하지 않고 자기 자신만 확정적이라고 믿는 잘못된 회의주의를 비판하기 위해 개소리를 언급하지만,(pp.67-68.) 나는 반대로 개소리가 자기 자신에 대한 확신과 무관하게 이상한 소리를 늘어놓는다는 지점에서 무책임한 예술로서의 효용이 있다고 생각한다.]-를 하는 것은 작가의 특권입니다. 작가가 개소리를 해도 되는 이유는 그 개소리가 자신의 이야기이기 때문이죠. 자기 이야기가 부풀어 올라서 미술 제도 내에서 맥락화되면 그건 내가 남 이야기를 하지 않아도 보편적인 이야기로 확장될 수 있잖아요. 그런데 아시는지 모르시는지, 사실적시 명예훼손이 있는 나라에서는 그 개소리가 구체적인 누군가를 향한다면 분명 문제가 돼요. 초상 작업 과정에서 만났던 사람들에 관한 이야기들은 당신이 그들에 대해 내리는 판단 아닌가요? 물론 장-뤽 낭시(Jean-Luc Nancy)의 말을 빌려 타자와의 관계 속에서 함께-있음(Être-avec)을 목적으로 한다면 다르겠지만, 당신의 관계가 타자에 대한 존중과 함께 함인지 아니면 일방적인 재현이었는지 스스로도 확신할 수 있나요?-[^장-뤽 낭시, 박준상 역, 『무위의 공동체』, 그린비출판사, 2022/2024, pp.28-39, 낭시는 서구의 역사 깊숙이 내재한 정치적 공동체를 비판하고 순수한 집단적 전체성의 불가능성을 역설했다. 낭시에게 소통이란 사회적, 경제적, 기술적, 제도적 과제에서 벗어나 무위에 처하게 됨을 의미하므로,(pp.81-82.) 타인을 수집하는 권회찬의 작업을 판단하기 위해서는 그 절차가 정치적 동질성을 강요하는 행위인지 우선적으로 평가해야 할 것이다.]- 차라리 사람의 겉모습만 사진으로 남는 선별적 아카이브의 기록방식에 저항하기 위해 반-아카이브적 기록물을 만들고 있는 거라고 변명이라도 해보세요. 그러면 당신이 수집해서 그린 낙서의 초상은 그 사람들 삶에 당신이 낙서를 시킨 것이나 다름없으니까요. 그렇게 되면 당사자들 삶의 여백에서 아무런 의미 없는 낙서처럼 작동한다고 사람들이 착각할지도 모르죠. 대신, 당신은 미학적 목적을 달성하기 위해 타인을 도구로 이용했다는 딜레마에 빠지게 될 겁니다. 그러니까 이건 미봉책이에요. 결국 사람에 관한 이야기는 논란을 감수하면서까지 그 사람들 각자를 다루기보단 인간보편에 관한 이야기로 우회하는 것이 정석인데도 아직도 모르시는 것 같아요.\n\n 이런 것들보다 더 눈에 띄는 건 자신 있게 이런 글들을 쓰고 있는 당신이에요. 이런 글을 전시장에 비치된 책자의 형태로 보여줌으로써 당신은 작업을 함과 동시에 글을 쓸 줄 안다는 자신을 과시하고 싶었던 건 아닌가요? 요즘에는 인공지능이 잘 나와서 글 열심히 잘 써놔도 자랑거리도 안 돼요. 레퍼런스 찾으라고 시키면 사람보다 잘 찾는데, 예전에 AI 없이 글 쓰신 분들의 위용에 접근이나 할 수 있을 것 같습니까? 사진이 등장한 이후로 재현이 무의미해졌듯이, AI 이후 밀도 높은 글들이 우후죽순 쏟아져 나올 게 뻔하잖아요. 애매하게 그럴 바에는 좋은 이미지 챙기면서 침묵하는 게 나을 수도 있어요. 누가 뭐라 하든지 간에 그냥 조용히 혼자 작업하다가 위대한 관객을 만나 같이 위대해지는 성공한 작가의 역사적 패턴을 이해하지 못한 것일까요? 보들레르(Baudelaire)가 마네를 지지했던 것처럼, 할 포스터(Hal Foster)가 다니엘 뷔렌(Daniel Buren) 같은 작가들을 역사에 편입시킨 것처럼요.\n\n\n\n[center]쓸데없는 짓\n\n\n뒤샹의 예술 계수를 고려해 봤을 때, 자기 개인전에서 자기 작업에 대한 글을 이렇게까지 남발하는 게 이해가 안 가요. 막말로 조용히 있다가 이론가 선생님들한테 글 써달라고 요청하면 작품에 대해 아무런 설명이 없는 저점과 이론가 선생님께서 이야기를 붙여준 고점의 거리를 크게 벌려서 예술 계수를 높일 수도 있을 텐데 말이죠. 아무것도 의도하지 않은 척, 모호하게 모른 척하면 모든 게 의도치 않게 표현한 게 되면서 예술 계수를 무한히 확장시킬 수도 있었을 텐데, 작가가 본인 입으로 해설해 버림으로써 예술 작품의 공백이 품고 있던 가능성을 폐기해 버렸잖아요. 아니, 막말로 가만히 있었으면 누군가가 문인화의 수신과 사의 개념을 가지고 당신의 선과 수묵의 연관성, 그리고 탈-전통성을 연구했을 수도 있고(물론 현대 동양화는 먹과 종이라는 재료를 사용한다는 매체성과 전공이 무엇이냐 하는 전문성에 강하게 귀속되어 있기 때문에 동양화과가 아닌 당신에겐 턱도 없겠지만), 아니면 선불교의 불이(不二) 세계관으로 초상을 읽음으로써 행위자의 낙서와 당신이 합일(合一)의 조화를 이뤄냈다고 갖다 붙여주었을 수도 있죠. 같은 내용도 서구 스타일로 가면 그레이엄 하먼(Graham Harman) 식의 객체 어쩌고 하는 식으로, 당신과 행위자가 결합을 통해 제3의 객체로서의 그림을 탄생시켰다고 이야기해 줄 수도 있었을 거예요. 아니면 무의식 차원에서의 낙서에다가 루돌프 아른하임(Rudolf Arnheim) 식의 과학적 회화 분석의 잣대를 들이댔을 수도 있고, 조르주 모란디(Giorgio Morandi)와 유사하게 당신 회화에서 나타나는 반복되는 구도를 베허 부부(Bernd and Hilla Becher)의 유형학적 사진(Typological Photography)을 통해 읽거나, 예술 매체에서 필연적으로 발생하는 동어반복을 조셉 코수스(Joseph Kosuth)와 다른 차원에서 풀어낸 사례로 이야기해 줬을 수도 있잖아요? 초기 분석 철학적 논의와 또 묶는다면, 당신이 낙서를 다른 이들과 다르게 이해한 현상을 비트겐슈타인(Wittgenstein)의 상자 속 딱정벌레와 연결 지어 서술할 수도 있었겠죠. 또 당신은 미술의 교육적 측면을 늘 고려하고 계시니 타인의 참여와 경험에서 예술 실행의 질적 연구 방법을 도출했을 수도 있고, 뵐플린의 논의를 빌려 르네상스 회화의 선적인 특성을 통해 이후 바로크적 확장을 기대하는 글이라거나, 프랭크 스텔라(Frank Stella) 식으로, 회화 내의 ‘콩테 선이 나눠놓은 면’을 각각의 ‘캔버스로 인식한 색면 추상의 면’으로 읽음으로써 다른 가능성을 모색하는 시도가 가능했을지도 모르잖아요? 국내에서 엄청나게 유행했고, 지금까지도 진행형인 평면과 입체를 넘나드는 작업들 사이에서 당신의 풍경 조각 작업이 어떤 의미가 있을지 분석해 줄 수도 있었을 텐데 말이에요. 아니면 당신의 첫 개인전 때, 박연암 씨가 조르주 바타유(Georges Bataille)의 비속어를 당신의 낙서 개념과 연결시킴으로써 ‘고급언어=드로잉’과 ‘비속어=낙서’라는 대립 쌍을 통해 드로잉 개념을 확장시켰듯이, 사람들로부터 받은 선(Tracking)의 개념을 다른 측면에서 발견하는 글을 누가 써줄 수도 있었을 거잖아요. 뭐, 관계의 미학을 큐레이터들의 작업적 자아를 확장하는 개념으로 해석하고 당신의 작업을 큐레토리얼의 영역으로 재배치하는 모험을 하는 비평가가 혹시 있었을지 누가 아나요. 아니면 차라리 아예 트렌디하게 당신이 타인에게 낙서를 받고 그림을 그려주고, 행위자가 반응을 보여주는 과정을 피드백이 오가는 대화 구조로 상정해서 AI 언어 모델과의 유사성을 언급해 줄 수 있었을지도 모르겠네요. 낙서를 둘러싼 개념을 한 번 쭉 훑으면서 비밀로 하면 좋았을 것들도 싹 다 읊어버리고 관계의 미학을 굳이 언급하기까지 해서 당신이 얻는 게 도대체 뭔가요? 작가는 무릇 자기 작품의 핵심 개념을 모른 척해야 한다는 암묵적 룰도 파악 못하는 사람인 건가요? 편집과 교열도 제대로 거치지 않은 책자에다가 자기 손으로 다 이야기해 버렸으니 도대체 앞으로 누가 당신에 대해 글을 쓰려고 하겠어요?\n\n 그럼에도 저는 질문하는 거예요. 당신은 이 경합의 장에 시원하게 참전하는 것이 뭐가 그렇게 불만인가요? 그러면서도 그 경합의 장에서 승리한 작가에게 질투를 느끼지 않나요? 아예 독불장군처럼 멋대로 하는 것도 아니고 미술 제도의 눈에 들고는 싶어서 기웃거리기는 하는데 그렇다고 발을 푹 담그지도 않죠. 미술 제도가 스스로 신비주의를 둘러치고 대화를 거부하는 것같이 보이는 건, 그 대화가 사실은 그렇게 중요하지 않기 때문이 아닌가요? 대화와 달리 신비주의는 예술에 도움이 되죠. 쓸데없는 짓을 안 한다는 뜻이니까요. 작가가 재밌는 거 시도하고, 작업만 열심히 하고, 그러다가 선생님들 눈에 들어서 유명한 미술관에서 전시하면 게임 셋인데 왜 당신은 알량한 지식자랑 하고 싶어서 그렇게까지 미술이론 책을 붙들고 늘어지고 있는 건지 모르겠어요. ‘나 낙서 이만큼 알고 있다.’라는 당신의 글은 사실상 지식 자랑한 것 이상의 의미가 있나요? 레퍼런스는 충실히 참고하셔서 이것저것 나열해 놓으셨던데, 그 개념들의 추상적인 연결을 설명해 주는 논리적 근거를 충분히 제시했다고는 볼 수 없죠. 긴 호흡으로 써야 하는 내용들을 흐릿하게 압축하셨잖아요? 그냥 아는 거 다 던져놓은 아이디어 스케치에 불과한 글이에요. 그러니까 제가 당신의 글을 봤을 때 느낀 인상은 이론가도 하고 싶고 작가도 하고 싶으니 북 치고 장구 치고 다 하는데, 실상은 이론가도 아니고 작가도 아니라는 거죠. 그래도 당신 커리어의 궤적을 봤을 때, 이론가가 하고 싶은 작가 정도 포지션이겠네요.\n\n 그럼 좀 더 본질적인 질문을 드려볼게요. 당신이 미술 제도 주변에 그렇게 서성이는 건 제도의 인정이 그림 가격에 0 하나를 더 붙여준다는 속설을 의식한 건 아닌가요? 사실, 당신이 침 흘리며 비판하는 작가에 대한 제도의 ‘불순한 도움’-[^권회찬은 제도권에서 작업의 맥락을 풍부하게 만들기 위해 긍정적인 내용만을 담는 산업적 글쓰기에 의문을 품고 이를 예술가에 대한 불순한 도움이라고 이야기해 왔다.]-이란 건 미술계에서 인정받는 가치를 부여하는 행위, 데이비드 조슬릿에 따르면 통화가치죠?-[^데이비드 조슬릿, 앞의 책, p.76, 데이비드 조슬릿은 작품에 의미를 부여하는 행위를 컬렉터가 구매하기 위한, 그리고 미술관이 관람객들에게 팔기 위한 특정한 종류의 상품으로 작품을 변형시키면서 작품의 가치를 지식이란 통화로 가격을 매기는 또 다른 방식이라고 말한다.]- 그 서비스들이 당신이 아닌 다른 사람에게 가고 있기 때문에 배 아파서 그런 건 아닌가요? 물론 모든 미술이 수익으로 연결되진 않겠습니다만, 상품 가치를 이미 획득한 작가가 미술 제도 내부로 침투해 들어가는 일만큼 효과적인 경력이 있겠습니까? 별로 의미도 없는 레지던시 뺑뺑이를 도는 이유는 레지던시가 강력한 커리어가 되기 때문이라는 점을 생각해 보세요. 그리고 좀 오래됐지만, 24년 1월 8일 기준 생존 작가 중에 가장 비싼 작가는 제스퍼 존스예요. 그 뒤로 제프 쿤스, 호크니 등이 뒤따르는데, 전부 다 주요 미술관 소장선에 성공적으로 자신의 작품을 넣으신 작가분들이죠. 컬렉터들은 자기가 구매한 작품이 똥값이 되는 건 싫은 게 당연하니까 역사에 기록되어 앞으로도 가격이 유지될 작가를 찾는 것은 어찌 보면 당연하잖아요? 가장 비싼 10개의 작업 중에 8점이 평면, 2점이 설치인 점은 당신이 다루는 회화 역시 자본의 문제에서 자유롭지 않다는 의미기도 해요. 뭐, 미술 제도의 영향에서 아예 벗어나면 우리 눈앞에서 사라져 버리는 게 자명하니 계속 서성이는 건 알겠어요. 그래요, ‘우리는 작업과 전시를 통해 제도에 계속 말을 걸고 있는 게 아닐까?’라고 하셨죠. 그럼 그냥 조용히 있어도 되잖아요. 옆에서 조용히 사과나무를 심는 다른 작가들은 뭐 바보라서 말을 안 하는 걸까요? 이론가 선생님들께 작업의 성취를 인정받는 것이 지금 게임의 법칙인데 당신이 이렇게 먼저 튀어 나가 버리는 게 효과가 있을지 난 잘 모르겠어요. 혹시 본인이 게임 체인저일 거라는 호카게 되는 상상을 하고 계시는 건 아니겠죠?\n\n 작업이 좋으면 다 필요 없다고들 하죠. 그럼, 여기서 좋은 작업을 누가 선별하는지 한 번 생각을 해보세요. 나름의 합의(consensus)가 있잖아요? 뒤샹도 예술 계수라는 말을 만들었죠. 작업을 넘어서는 어떤 판단 기준이 있다는 건 너무나도 자명하지 않아요? 오늘날에는 정체성이나 정치 성향도 중요한 기준이죠. 좌파 계열 작가들이 자신의 정치 성향을 적극적으로 홍보하는 것과 반대로 그 분위기와 다른 의견을 가진 사람의 목소리는 무해한 관계들 속에서 패싱당하는 걸 보세요. 환경, 생태나 비인간, 소수자와 같이 인류가 직면한 윤리적 문제들 역시 마찬가지죠. 다들 말은 안 하지만, 그래도 너무나도 잘 알고들 있는 사실은, 예술에서 추구하는 정치적 방향성은 꽤나 절대적이라고 할 수 있어요. 물론 당신이 좌파가 아니라는 말은 아니에요. 다만, 오늘날 좌파들은 극좌로 치우치지 않은 당신 같은 좌파를 좌파라고 생각 해줄지 잘 모르겠습니다. 스펙터클 사회에서 상품이나 마찬가지인 예술은 창작 자체를 거부해야 한다고 주장했던 라울 바네겜(Raoul Vaneigem)과 같은 상황주의 인터내셔널 좌파들이 보면 우스워하긴 했겠지만요.\n\n 미술의 또 다른 판단 기준으로는 작가로서 궁금증을 유발하는 매력인 것 같아요. 보통 작업에 미쳐서 아무것도 신경 안 쓰고 자기 할 것만 조용히 잘하는 작가의 매력이 뛰어날 가능성이 평균적으로 더 높으니까요, 그러니까 어디 나서서 많이 안다고 까불지 말고, 내 작업이 좋은지 나쁜지, 작업에 무슨 이야기가 있는지 없는지 판단하는 문제를 아예 외주 맡겨버리면 될 텐데, 왜 안 그러시는지 이해가 안 가요. 유망하고 잘나가는 이론가로부터 정식으로 글을 받으면 그것 자체가 엄청난 홍보 효과가 되는데도요. 낙서 분석이나 트래킹 관련 글도 당신이 직접 쓰기보단 다른 우수한 이론하시는 선생님들께서 해주셨다면 더 의미가 있었을 거잖아요. 후기 구조주의자들의 이론과 작가의 작업을 겹쳐두는 게 오래된 트렌드이기도 하구요. 아니면 혹시 선생님들만큼 잘 안다는 오만한 생각을 하고 계신 건 아닌가요? 제가 글 맡기라는 게 모르니까 맡기라는 게 아니잖아요. 작가들이 본인의 작업을 정말 몰라서 공공기금 끌어다가 이론가 선생님들께 글을 써달라고 하는 것 같나요? 신비주의를 두르느라 다들 말은 안 하지만 다 알고 있을 거예요. 모른 척하는 거예요! 그게 유리하니까요. 그렇게 선생님들 사이에서 여기저기 언급되다가 김장언 선생님께서 말씀하신 알고리즘 큐레이션(Algorithm curation)-[^인터넷 환경에서 사용자 경험을 극대화하기 위해 정보, 콘텐츠를 선택 및 구성하여 사용자에게 제공해 주는 프로세스를 의미한다. 김장언 비평가는 스페이스 애프터 토크 「크리티컬 인사이트 Ⅳ: 비평의 작용과 반작용」에서 오늘날 작가를 선택할 때 씬에서의 노출도에 의존하는 큐레토리얼 실천을 설명하기 위해 주목 경제에 기반한 빅데이터 마케팅 용어 알고리즘 큐레이션을 차용하였다.]-에 간택되면 금상첨화죠.\n\n 미술 씬을 잘 관찰해보시면 주목받는 이론가 선생님들이 포켓몬처럼 데리고 다니는 젊은 작가들을 발견할 수 있어요. 그런 걸 보고도 느끼는 게 없으신가요? 그분들은 딱 이론가 선생님이 홀릴 만한 주제를 잘 잡아 다루고 있죠. 그것들을 기반으로 눈에 띄는 작업을 만들고 트래픽을 좀 올리면서 내실을 다진 사람들이잖아요. 물론 이론가 선생님과의 사적인 관계를 통해 전략적으로 승리비법을 쟁취한 사람들도 있습니다. 시장에서 눈에 띈 작가한테 알아서 이론을 찾아주시는 선생님도 많아요. 왜냐면 말이야 얼추 갖다 붙이면 되거든요. 때론 작가의 강력한 시장성이 이론가 선생님들께 매력이 되기도 한답니다. 물론 아무리 매력 있고 좋아하는 작가라도 붙일 말이 너무 없을 수도 있으니까, 그럴 경우에는 작가가 그런 작업을 하도록 이끌어주면 돼요. 그게 상생이죠. 도와주는 보람도 있고. 당신처럼 제도를 얄팍하게 비판하고 딱히 남들이 동참할 제대로 된 대안도 제시하지 못하면서 알아듣지도 못하겠는 이상한 소리로 불만을 늘어놔 봐야 소용없어요. 화려한 작업으로 시장에서 눈에 띄게 성공하든, 누구의 연인이 되든, 대중들이 좋아하는 요소를 저격해서 노출도를 무지막지하게 높이든, 누구나 뿅 갈만한 효과적이면서도 맛있는 즉석식품 같은 주제를 작업으로 다루든 간에, 어떤 방식으로든 이론가 선생님들을 끌어들인 사람들에 의해 예술적 성취가 결정되니까요.\n\n 더군다나 작가의 아이돌스러운 이미지 관리를 미덕으로 삼는 요즘에는 당신 같은 유의 담론 비판이 더더욱 의미가 없어요. 사실 이런 분위기는 미술계에서 원하는 작가상이 그만큼 단순해지고 있다는 의미이기도 합니다. 변별력이 없어지면 이래도 좋고 저래도 좋고, 결국 잘 팔리는 작가가 또 잘나가는 아이러니가 발생하죠. 하지만 이런들 어떠하고 저런들 어떠한가요. 그래서 안 하시게요? 시대가 이러니까 수많은 백조들이 제도권과 시장을 둘 다 잡는 예술적 성취를 위해 자신의 미학을 연출하고 포장하려고 발버둥을 치고 있는 것 아니겠어요? 그 위대한 성공을 위해 전력투구하고, 본인한테 도움이 안 되는 인스타그램 게시글 같은 건 다 지우면서까지 이미지를 관리하는 사람들이 시대의 총아가 되는 거라구요. 프로 정신 얼마나 좋습니까. 그러다가 기금 따는 데 성공하면 등용문인 선생님들께 인사드리고, 기금으로 일 드리며 강한 존경의 예를 표하시면 더 좋죠. 윗세대가 어려우면 유망하고 잘나가는 동 세대 젊은 이론가한테 비비세요. 그분들은 일이 많으면 인정받는 거라 당신의 DM에 기쁘게 응해줄 테니까요. 그렇게 어떤 방식으로든 눈에 든다면 당신에 대한 글이 노출되고, 그러다가 시대의 총아가 포함된 기획전에 초대되면 당신은 유명한 작가와 전시해서 좋고, 유명한 작가는 자신의 작업 맥락이 확장돼서 좋고, 기획자 선생님은 유명한 작가를 기획에 포함시켜서 좋고, 누이 좋고 매부 좋고 석삼이도 좋고 너구리도 좋고 얼마나 좋나요. 지금 잠깐 참고 공모나 열심히 넣으면서, 또 시류에 맞는 주제 좀 다루시다 보면 그런 날이 올 거고, 그 성취를 발판 삼아 훨씬 위대한 미래로 나아갈 수 있잖아요. 그런데 당신은 왜 그 당장을 못 참고 그렇게 말을 하고 싶어 안달인 건지 모르겠어요. 물론 지적인 예술가 이미지로 자기를 잘 포장하는 똑똑한 작가들도 있어요. 그런데 당신과 다른 점은, 그 사람들은 모호한 말을 이용해서 똑똑해 보일 수 있는 모범 답안을 통해 스스로를 잘 포장한다는 거고, 당신은 공개할 필요가 없는 손해될 이야기만 여기서 주구장창 하고 있다는 거죠. 그런 이야기는 어디 대단한 아트 잡지 같은 데서 인터뷰하면 그때 솔직하게 다 말하면 되잖아요. 작가는 그전까지는 묵묵히... 뭐 됐습니다. 알아서 하시겠죠. 그렇다고 산 입에 거미줄 치겠어요? 어떻게든 되겠죠.\n\n\n그래서, 지금 누구를 그렇게 기다리고 있나요?\n\n\n",
      en: ""
    }
  },

"zs1-1": {
    title: { ko: "낙서의 이미지즘", en: "" },
    author: { ko: "박연암", en: "Park Yeon-am" },
    date: "2023-03-08",
    excerpt: { ko: "《낙서의 초상》 비평", en: "《Portrait of Scribble》 Critique" },
    body: {
      ko: "[right]박연암\n\n권회찬의 회화에서 정형화 되어 있지 않은 이미지들은 낙서에서 비롯된다. 낙서는 그의 작업에서 핵심이 되는 요소로, 자신의 것이기도, 타자-[^'타자(the Other)’라는 개념은 타인에서 나아가, 확장된 의미에서의 ‘다른 존재들’을 지칭하기 위해 사용되었다. 이는 자아(자신)이 아닌 타인이 될 수도 있고, 더 넗은 의미에서는 인식의 저편에 있는 것, 우리의 경험으로는 도저히 파악 불가능한 것 등의 의미를 포괄하기 위함이다.]-의 것이기도 하다. 낙서라는 끄적임의 행위는 개인의 심층에서 일어나는 내면이 투사된 무의식의 표현이라 볼 수 있는데, 주목할 점은 그가 여기에 자의적 선을 첨가하여 의식을 투영하는 데에 있다. 그는 끄적여진 낙서를 기반으로 골조물과 같은 선을 추가하고 이에 명암을 더해 형상을 부여한다. 그리고 이 형상들을 ‘초상’이라고 부른다. 이러한 과정에는 리얼리티를 재현하는 회화의 전통적 기법이 여전히 사용되고 있지만 의도적 드로잉과 무의식적 행위인 낙서의 구분을 모호하게 한다는 점에 있어서 권회찬의 회화는 차이를 갖는다. 이는 “낙서는 정교하게 다듬어진 선들 이상으로 더 중요하다”라는 그의 언급에서 드러난다. 이처럼 그의 관심은 무의식에서 은연중에 표출되는 낙서라는 행위에 있으며, 이를 전통적 회화 기법과 결합하여 사용하는 이중적 작업방식을 취하고 있다.\n\n 권회찬의 첫 개인전인.낙서의 초상.은 인물화에 대해 다루고 있다. 이는 그가 정의하는 ‘초상’이 캔버스라는 한정된 공간 안에서 무의식이 작동하는 과정을 낙서로 추출하고, 이러한 무의식적 행위가 개인의 초상이 될 수 있다는 발상을 화두로 하는 것이다. 그의 회화에서 실재는 무의식이 자아낸 낙서(혹은 내면의 심상)로 치환되고, 표상된 이미지들은 실재의 재현에서 시각적 환영으로 대체된다. 여기서 시각적 환영이라 함은 작가가 낙서를 기반으로 부차적인 선을 가하여 만들어낸 형상을 가리킨다. 캔버스의 형상들이 무의식을 이미지화하고 있다는 점에서 그는 환영적 이미지에 대해 다루고 있다. 이는 평면성이라는 모더니즘 회화의 매체적 속성에 대한 문제로 보기보다는 회화의 환영적 속성 그 자체에 대한 사유의 과정에 초점을 둔 것으로 볼 수 있다.\n\n 권회찬의 회화에서 환영성은 무의식을 낙서로 표상하고, 이를 의식의 장으로 인식하는 과정이 퇴적되며 드러난다. 그는 내면의 끌림으로부터 행해진 자유로운 드로잉을 캔버스에 차용한 후, 이에 임의의 선을 추가함으로써 의식의 좌표를 형성한다. 이 두 가지 제스처가 엉킨 드로잉에 그는 “형태들이 자의적으로 구조를 갖추도록” 환영을 투여한다. 이것은 무의식을 의식의 장으로 옮겨오는 과정인 동시에, 의식과 무의식을 교차시켜 그 경계의 모호성을 모색하고자 한 그의 비약적 시도로 파악된다.\n\n 낙서라는 제스처(에 한정하여)는 조르주 바타유(Georges Bataille, 1897-1962)의 비정형에서 비속어(obscene words)에 대한 언급을 연상시킨다. 바타유는 비속어를 사용하여 비속어와 고급 언어를 대등하게 위치시켜 새로운 수행과 작동(operation)을 자아내고자 했다. 그에 의하면, 외설스러운 단어는 어떤 정의(definition)를 위해 사용되는 것이 아니라, 어떤 수행적 기능으로써 존재한다. 말하자면, 비속한 말들은 그 의미보다는 이것을 전달하는 행위(the very act of delivery) 자체가 자아내는 폭력성이 고급 언어와 비속어라는 이분법적 범주를 해체하는 데에 효과적이라 보는 것이다.-[^Rosalind Krauss and Yve-Alain Bois. Formless , London: MIT Press, 1997, p. 18.]- ‘낙서’라는 것은 그 자체로는 일상에서조차 특별한 의미를 부여받지 못하지만, 권회찬은 (그가 앞서 언급한 바와 같이) 작가의 정교한 드로잉과 낙서를 평행하게 대치시켜 드로잉의 근본적 의미의 전복을 꾀하고 있는 듯하다.",
      en: ""
    }
  },
     "zp1-1": {
    title: { ko: "수동적 소유에서 능동적 창작으로", en: "" },
    author: { ko: "김가은", en: "Kim Gaeun" },
    date: "2025-09-06",
    excerpt: { ko: "《광물채집》 비평", en: "《Gwangmul Chaejip》 Critique" },
    body: {
      ko: "누구에게나 시야에 희미하게 스치듯 존재하는 물건들이 있다. 에너지가 소진되어 처음부터 쓸모가 없었던 듯 무기력하게 자리를 차지하고 있는 것들이다. 때때로 눈길을 주기도 하지만 섣불리 다가가기는 어렵다. 누구의 것인지 모호하기에 어떻게 해야 할지 막막하기만 한 가족의 물건들이 어느 집에나 있다.\n  축적된 서사와 복잡한 감정을 떠안은 채 일종의 유물이 되어 버린 이러한 사물들은 낡은 것을 폐기하고 새롭고 효율적인 상품을 소비하게 만드는 현대의 자본주의 사회에서 우리의 마음 한 구석을 불편하게 점유한다. 그러나 가족의 물건을 버리는 것은 심적으로 부담이 되고, 소유자가 불분명하기 때문에 개인의 판단만으로 폐기를 결정하기 어려워진다. 우리는 이러한 사물들을 어떻게 바라보아야 할까.\n  사물은 사회적 맥락 속에서 의미와 가치가 새롭게 재구성될 가능성을 품고 있다. 인류학자 아르준 아파두라이(Arjun Appadurai)는 『사물의 사회적 생애(The Social Life of Things)』에서 사물을 사회적 행위 속에서 움직이는 존재(things-in-motion)로 바라본다. 비록 그의 논의가 경제적 가치를 지닌 상품에 맞춰져 있다 하더라도, 그것은 우리를 둘러싼 사물의 의미와 가치를 고정된 상태가 아닌 사회적 맥락 속에서 변화하는 것으로 다시 바라보게 한다. 이러한 관점에서, 가족의 물건을 버려야 하는 대상이 아니라 사회적 관계를 통해 의미와 가치를 새롭게 부여할 수 있는 사물로 바라볼 수 있게 되는 것이다.\n   워크숍 <광명시의 수집가들(가족의 물건)>은 이러한 전환을 실천적으로 보여준다. 이 워크숍은 사물이 지닌 의미를 탈맥락화하고 그 사물들을 조형적으로 재구성함으로써, 버려야 하는데 버리지 못하는 사물의 양가적 굴레를 풀어내는 과정이다. 참여자들은 더 이상 사용하지 않는 가족의 물건에 얽힌 기억, 서사, 감정 등을 함께 이야기하고, 사물이 지닌 조형성에 주목하거나 새로운 서사를 만들어 낸다. 사물의 이미지를 해체시키고 재조합함으로써 가족의 물건은 창작의 재료가 된다. 해체를 통해 사물의 본래의 의미를 분리시키고, 재조합이라는 조형적 행위를 수행함으로써 사물에 새로운 의미를 부여하는 재맥락화 과정을 거치는 것이다. 과거에만 머물러 있던 물건이 현재로 소환되어 새로운 생명력을 획득함으로써 사물에 대한 심적 불편함을 해소하는 계기가 된다. 이 과정에서 수동적 소유는 능동적 창작으로 전환된다. 사물이 지닌 의미와 가치가 새로운 맥락으로 옮겨지면서 비로소 개인은 해당 사물을 새롭게 바라볼 수 있게 된다. \n  지역 참여자들이 교류를 통해 창작자로서 자신의 이야기를 공유하고, 예술을 통해 일상 속 문제들을 해소하고자 시도하는 이러한 활동은 지역 기반 예술 프로젝트의 의의를 다시 생각하게 한다. 이는 개인의 영역이 공동체로 확장되는 것을 의미하는 동시에 예술이 지역 사회와의 네트워크를 형성하는 매개체로 기능한다는 것을 보여준다. 나아가 이러한 활동은 사회 문제를 다루는 새로운 미학적 태도를 제안하는 것이기도 하다.\n  《광물채집》은 버릴 수 없었던 가족의 물건이 창작 활동을 통해 예술작품으로 전환되어 개인과 지역 공동체를 연결시키고 관객에게 새로운 이야기를 전달하는 사물의 또 하나의 생애 과정을 보여준다.\n\n[right]2025년 9월 3일\n글. 김가은(김가은미술사무소 대표)",
      en: ""
    }
  }
  
 
};


// ------------------------------------------------------------
// 4.5. CV에서 전시를 묶어서 보여줄 구분 - 여기에 자유롭게 항목을 추가/이름 변경할 수 있습니다.
//      (예: 프로젝트, 스크리닝 등) - 아래 배열에 새 줄을 추가하고, EXHIBITIONS의 type 필드에
//      그 id를 그대로 쓰면 CV 페이지에 그 이름의 구분으로 자동으로 나타납니다.
//      해당하는 전시가 하나도 없는 구분은 화면에서 자동으로 숨겨집니다.
//      순서 = 이 배열에 적은 순서 그대로 CV 페이지에 위에서부터 나타납니다.
// ------------------------------------------------------------
const CV_GROUPS = [
  { id: "solo", label: { ko: "개인전", en: "Solo Exhibitions" } },
  { id: "group", label: { ko: "그룹전", en: "Group Exhibitions" } },
  { id: "curating", label: { ko: "기획", en: "Curating" } },
  { id: "project", label: { ko: "프로젝트", en: "Projects" } },
  // 필요하면 이렇게 새 구분을 추가하세요:
  // { id: "project", label: { ko: "프로젝트", en: "Projects" } },
  // { id: "screening", label: { ko: "스크리닝", en: "Screenings" } },
];

// ------------------------------------------------------------
// 5. CV / 전시 이력
//    type: 위 CV_GROUPS에 정의해둔 id 중 하나 (자유롭게 추가한 구분도 그대로 사용 가능)
//    CV 목록 줄 순서: 연도, 전시명, 갤러리(venue), 지역(city)
//    city는 선택 항목 - 비워두거나 아예 빼도 그 부분만 자동으로 안 나옵니다.
//    essayPostIds : 서문으로 연결할 POSTS id 여러 개 ([] 이면 섹션 숨김, 여러 개면 1,2,3 번호 매김)
//    criticPostIds: 비평으로 연결할 POSTS id 여러 개 ([] 이면 섹션 숨김)
//    installationImages, works도 비워두면 해당 섹션이 자동으로 숨겨집니다.
// ------------------------------------------------------------
const EXHIBITIONS = [
  {
    id: "2026every-solo",
    type: "solo",
    title: { ko: "", en: "Cheese!" },
    year: "2025",
    venue: { ko: "에브리아트", en: "Every Art" },
    city: { ko: "서울", en: "Seoul" },
    essayPostIds: ["zs3"],
    criticPostIds: ["zs3-1"],
    installationImages: [
      { thumb: "thumb/!zs3-0.jpg", image: "images/zs3-0.jpg", caption: { ko: "포스터", en: "Poster" }, note: { ko: "디자인: 김소이", en: "Design: Kim Soyi" } },
      { thumb: "thumb/!zs3-1.jpg", image: "images/zs3-1.jpg", caption: { ko: "전시 전경 1", en: "Installation view 1" }, note: { ko: "사진 촬영: 최철림", en: "Photo: Choi Chul-lim" } },
      { thumb: "thumb/!zs3-2.jpg", image: "images/zs3-2.jpg", caption: { ko: "전시 전경 2", en: "Installation view 2" }, note: { ko: "사진 촬영: 최철림", en: "Photo: Choi Chul-lim" } },
      { thumb: "thumb/!zs3-3.jpg", image: "images/zs3-3.jpg", caption: { ko: "전시 전경 3", en: "Installation view 3" }, note: { ko: "사진 촬영: 최철림", en: "Photo: Choi Chul-lim" } },
      { thumb: "thumb/!zs3-4.jpg", image: "images/zs3-4.jpg", caption: { ko: "전시 전경 4", en: "Installation view 4" }, note: { ko: "사진 촬영: 최철림", en: "Photo: Choi Chul-lim" } },
      { thumb: "thumb/!zs3-5.jpg", image: "images/zs3-5.jpg", caption: { ko: "전시 전경 5", en: "Installation view 5" }, note: { ko: "사진 촬영: 최철림", en: "Photo: Choi Chul-lim" } },
      { thumb: "thumb/!zs3-6.jpg", image: "images/zs3-6.jpg", caption: { ko: "전시 전경 6", en: "Installation view 6" }, note: { ko: "사진 촬영: 최철림", en: "Photo: Choi Chul-lim" } },
      { thumb: "thumb/!zs3-7.jpg", image: "images/zs3-7.jpg", caption: { ko: "전시 전경 7", en: "Installation view 7" }, note: { ko: "사진 촬영: 최철림", en: "Photo: Choi Chul-lim" } },
      { thumb: "thumb/!zs3-8.jpg", image: "images/zs3-8.jpg", caption: { ko: "전시 전경 8", en: "Installation view 8" }, note: { ko: "사진 촬영: 최철림", en: "Photo: Choi Chul-lim" } },
      { thumb: "thumb/!zs3-9.jpg", image: "images/zs3-9.jpg", caption: { ko: "전시 전경 9", en: "Installation view 9" }, note: { ko: "사진 촬영: 최철림", en: "Photo: Choi Chul-lim" } },
      { thumb: "thumb/!zs3-10.jpg", image: "images/zs3-10.jpg", caption: { ko: "전시 전경 10", en: "Installation view 10" }, note: { ko: "사진 촬영: 최철림", en: "Photo: Choi Chul-lim" } },
      { thumb: "thumb/!zs3-11.jpg", image: "images/zs3-11.jpg", caption: { ko: "전시 전경 11", en: "Installation view 11" }, note: { ko: "사진 촬영: 최철림", en: "Photo: Choi Chul-lim" } },
      { thumb: "thumb/!zs3-12.jpg", image: "images/zs3-12.jpg", caption: { ko: "전시 전경 12", en: "Installation view 12" }, note: { ko: "사진 촬영: 최철림", en: "Photo: Choi Chul-lim" } },
      { thumb: "thumb/!zs3-13.jpg", image: "images/zs3-13.jpg", caption: { ko: "전시 전경 13", en: "Installation view 13" }, note: { ko: "사진 촬영: 최철림", en: "Photo: Choi Chul-lim" } },
      { thumb: "thumb/!zs3-14.jpg", image: "images/zs3-14.jpg", caption: { ko: "전시 전경 14", en: "Installation view 14" }, note: { ko: "사진 촬영: 최철림", en: "Photo: Choi Chul-lim" } },  
      { thumb: "thumb/!zs3-15.jpg", image: "images/zs3-15.jpg", caption: { ko: "전시 전경 15", en: "Installation view 15" }, note: { ko: "사진 촬영: 최철림", en: "Photo: Choi Chul-lim" } }
    ],
    works: ["ac1","ac2","ac3","ac4","ac5","ac6","ac7","ac8","ac9","ac10","ac11","ac12","ac13","ac14","ac15","ac16","ac17","ac18","ac19","ac20","ac21","ac22","ac23","ac24","ac25","ac26","ac27","ac28","ac29","ac30","ad4","ad5","ad6"]
  },
  {
    id: "2023seoul-solo",
    type: "solo",
    title: { ko: "", en: "Snapshot" },
    year: "2023",
    venue: { ko: "서울과학기술대학교 다빈치관 720호", en: "Room 720, Davinci Hall, Seoul University of Science and Technology" },
    city: { ko: "서울", en: "Seoul" },
    essayPostIds: ["zs2"],
    criticPostIds: [""],
    installationImages: [
      { thumb: "thumb/!zs2-0.png", image: "images/zs2-0.png", caption: { ko: "포스터", en: "Poster" }, note: { ko: "레이아웃: 노혜지", en: "Layout: Noh Hyeji" } },
      { thumb: "thumb/!zs2-1.png", image: "images/zs2-1.png", caption: { ko: "지시문", en: "Instruction" }, note: { ko: "", en: "" } },
      { thumb: "thumb/!zs2-2.jpg", image: "images/zs2-2.jpg", caption: { ko: "참여자 명단", en: "participant list" }, note: { ko: "", en: "" } },
      { thumb: "thumb/!zs2-3.jpg", image: "images/zs2-3.jpg", caption: { ko: "전시 전경 3", en: "Installation view 3" }, note: { ko: "", en: "" } },
      { thumb: "thumb/!zs2-4.jpg", image: "images/zs2-4.jpg", caption: { ko: "전시 전경 4", en: "Installation view 4" }, note: { ko: "", en: "" } },
      { thumb: "thumb/!zs2-5.jpg", image: "images/zs2-5.jpg", caption: { ko: "전시 전경 5", en: "Installation view 5" }, note: { ko: "", en: "" } },
      { thumb: "thumb/!zs2-6.jpg", image: "images/zs2-6.jpg", caption: { ko: "전시 전경 6", en: "Installation view 6" }, note: { ko: "", en: "" } },
      { thumb: "thumb/!zs2-7.jpg", image: "images/zs2-7.jpg", caption: { ko: "전시 전경 7", en: "Installation view 7" }, note: { ko: "", en: "" } }
    ],
    works: []
  },  {
    id: "2025every-solo",
    type: "solo",
    title: { ko: "낙서의 초상", en: "Portraits of Scribble" },
    year: "2023",
    venue: { ko: "에브리아트", en: "Every Art" },
    city: { ko: "서울", en: "Seoul" },
    essayPostIds: ["zs1"],
    criticPostIds: ["zs1-1"],
    installationImages: [
      { thumb: "thumb/!zs1-0.jpg", image: "images/zs1-0.jpg", caption: { ko: "포스터", en: "Poster" }, note: { ko: "디자인: 문정주", en: "Moon Jungju" } },
      { thumb: "thumb/!zs1-1.jpg", image: "images/zs1-1.jpg", caption: { ko: "전시 전경 1", en: "Installation view 1" }, note: { ko: "사진 촬영: 에브리아트", en: "Photo: Every Art" } },
      { thumb: "thumb/!zs1-2.jpg", image: "images/zs1-2.jpg", caption: { ko: "전시 전경 2", en: "Installation view 2" }, note: { ko: "사진 촬영: 에브리아트", en: "Photo: Every Art" } },
      { thumb: "thumb/!zs1-3.jpg", image: "images/zs1-3.jpg", caption: { ko: "전시 전경 3", en: "Installation view 3" }, note: { ko: "사진 촬영: 에브리아트", en: "Photo: Every Art" } },
      { thumb: "thumb/!zs1-4.jpg", image: "images/zs1-4.jpg", caption: { ko: "전시 전경 4", en: "Installation view 4" }, note: { ko: "사진 촬영: 에브리아트", en: "Photo: Every Art" } },
      { thumb: "thumb/!zs1-5.jpg", image: "images/zs1-5.jpg", caption: { ko: "전시 전경 5", en: "Installation view 5" }, note: { ko: "사진 촬영: 에브리아트", en: "Photo: Every Art" } }
    ],
    works: ["a1","a4","a5","a6","a7","a8","a9","a13","a14","a15","a16"]
  },


  {
    id: "2026every-group",
    type: "group",
    title: { ko: "", en: "Borrowed Signals" },
    year: "2026",
    venue: { ko: "에브리아트", en: "Every Art" },
    city: { ko: "서울", en: "Seoul" },
    essayPostIds: ["zg10"],
    criticPostIds: [ ],
    installationImages: [
      { thumb: "thumb/!zg10-0.jpg", image: "images/zg10-0.jpg", caption: { ko: "포스터", en: "Poster" }, note: { ko: "디자인: 에브리아트", en: "Design: Every Art" } },
      { thumb: "thumb/!zg10-1.jpg", image: "images/zg10-1.jpg", caption: { ko: "전시 전경 1", en: "Installation view 1" }, note: { ko: "사진 촬영: 최철림", en: "Photo: Choi Chul-lim" } },
      { thumb: "thumb/!zg10-2.jpg", image: "images/zg10-2.jpg", caption: { ko: "전시 전경 2", en: "Installation view 2" }, note: { ko: "사진 촬영: 최철림", en: "Photo: Choi Chul-lim" } },
      { thumb: "thumb/!zg10-3.jpg", image: "images/zg10-3.jpg", caption: { ko: "전시 전경 3", en: "Installation view 3" }, note: { ko: "사진 촬영: 최철림", en: "Photo: Choi Chul-lim" } },
      { thumb: "thumb/!zg10-4.jpg", image: "images/zg10-4.jpg", caption: { ko: "전시 전경 4", en: "Installation view 4" }, note: { ko: "사진 촬영: 최철림", en: "Photo: Choi Chul-lim" } },
      { thumb: "thumb/!zg10-5.jpg", image: "images/zg10-5.jpg", caption: { ko: "전시 전경 5", en: "Installation view 5" }, note: { ko: "사진 촬영: 최철림", en: "Photo: Choi Chul-lim" } }
    ],
    works: ["bb1","bb2","bb3","bb4","bb5","bb6", "a37"]
  },





    {
    id: "2024every-group",
    type: "group",
    title: { ko: "", en: "Face and Three Gazes" },
    year: "2024",
    venue: { ko: "에브리아트", en: "Every Art" },
    city: { ko: "서울", en: "Seoul" },
    essayPostIds: ["zg9"],
    criticPostIds: [],
    installationImages: [
      { thumb: "thumb/!zg9-0.jpg", image: "images/zg9-0.jpg", caption: { ko: "포스터", en: "Poster" }, note: { ko: "디자인: 에브리아트", en: "Design: Every Art" } },
      { thumb: "thumb/!zg9-1.jpg", image: "images/zg9-1.jpg", caption: { ko: "전시 전경 1", en: "Installation view 1" }, note: { ko: "사진 촬영: 에브리아트", en: "Photo: Every Art" } },
      { thumb: "thumb/!zg9-2.jpg", image: "images/zg9-2.jpg", caption: { ko: "전시 전경 2", en: "Installation view 2" }, note: { ko: "사진 촬영: 에브리아트", en: "Photo: Every Art" } },
      { thumb: "thumb/!zg9-3.jpg", image: "images/zg9-3.jpg", caption: { ko: "전시 전경 3", en: "Installation view 3" }, note: { ko: "사진 촬영: 에브리아트", en: "Photo: Every Art" } },
      { thumb: "thumb/!zg9-4.jpg", image: "images/zg9-4.jpg", caption: { ko: "전시 전경 4", en: "Installation view 4" }, note: { ko: "사진 촬영: 에브리아트", en: "Photo: Every Art" } },
      { thumb: "thumb/!zg9-5.jpg", image: "images/zg9-5.jpg", caption: { ko: "전시 전경 5", en: "Installation view 5" }, note: { ko: "사진 촬영: 에브리아트", en: "Photo: Every Art" } }
    ],
    works: ["a1","ac21","ac23","ac24","ac9","ac11","ac15","ac16","ac18","ac22"]
  },

    {
    id: "2024dive-group",
    type: "group",
    title: { ko: "", en: "Liminal" },
    year: "2024",
    venue: { ko: "다이브 서울", en: "Dive Seoul" },
    city: { ko: "서울", en: "Seoul" },
    essayPostIds: ["zg8"],
    criticPostIds: [],
    installationImages: [
      { thumb: "thumb/!zg8-0.png", image: "images/zg8-0.png", caption: { ko: "포스터", en: "Poster" }, note: { ko: "디자인: 유지영", en: "Design: Yu Jiyoung" } },
      { thumb: "thumb/!zg8-1.jpg", image: "images/zg8-1.jpg", caption: { ko: "전시 전경 1", en: "Installation view 1" }, note: { ko: "사진 촬영: 최철림", en: "Photo: Choi Chul-lim" } },
      { thumb: "thumb/!zg8-2.jpg", image: "images/zg8-2.jpg", caption: { ko: "전시 전경 2", en: "Installation view 2" }, note: { ko: "사진 촬영: 최철림", en: "Photo: Choi Chul-lim" } },
      { thumb: "thumb/!zg8-3.jpg", image: "images/zg8-3.jpg", caption: { ko: "전시 전경 3", en: "Installation view 3" }, note: { ko: "사진 촬영: 최철림", en: "Photo: Choi Chul-lim" } },
      { thumb: "thumb/!zg8-4.jpg", image: "images/zg8-4.jpg", caption: { ko: "전시 전경 4", en: "Installation view 4" }, note: { ko: "사진 촬영: 최철림", en: "Photo: Choi Chul-lim" } },
      { thumb: "thumb/!zg8-5.jpg", image: "images/zg8-5.jpg", caption: { ko: "전시 전경 5", en: "Installation view 5" }, note: { ko: "사진 촬영: 최철림", en: "Photo: Choi Chul-lim" } },
      { thumb: "thumb/!zg8-6.jpg", image: "images/zg8-6.jpg", caption: { ko: "전시 전경 6", en: "Installation view 6" }, note: { ko: "사진 촬영: 최철림", en: "Photo: Choi Chul-lim" } }
    ],
    works: ["ae1","ae2","ae3","ae4","a31","a32","a33","a34","a35","a36"]
  },



    {
    id: "2024in-group",
    type: "group",
    title: { ko: "뒷고기", en: "Leftover Meat Cuts" },
    year: "2024",
    venue: { ko: "갤러리 인", en: "Gallery In" },
    city: { ko: "서울", en: "Seoul" },
    essayPostIds: ["zg7"],
    criticPostIds: [],
    installationImages: [
      { thumb: "thumb/!zg7-0.jpg", image: "images/zg7-0.jpg", caption: { ko: "포스터", en: "Poster" }, note: { ko: "", en: "" }  },
      { thumb: "thumb/!zg7-1.jpg", image: "images/zg7-1.jpg", caption: { ko: "전시 전경 1", en: "Installation view 1" }, note: { ko: "", en: "" } },
      { thumb: "thumb/!zg7-2.jpg", image: "images/zg7-2.jpg", caption: { ko: "전시 전경 2", en: "Installation view 2" }, note: { ko: "", en: "" } },
      { thumb: "thumb/!zg7-3.jpg", image: "images/zg7-3.jpg", caption: { ko: "전시 전경 3", en: "Installation view 3" }, note: { ko: "", en: "" } },
      { thumb: "thumb/!zg7-4.jpg", image: "images/zg7-4.jpg", caption: { ko: "전시 전경 4", en: "Installation view 4" }, note: { ko: "", en: "" } },
      { thumb: "thumb/!zg7-5.jpg", image: "images/zg7-5.jpg", caption: { ko: "전시 전경 5", en: "Installation view 5" }, note: { ko: "", en: "" } },
      { thumb: "thumb/!zg7-6.jpg", image: "images/zg7-6.jpg", caption: { ko: "전시 전경 6", en: "Installation view 6" }, note: { ko: "", en: "" } },
      { thumb: "thumb/!zg7-7.jpg", image: "images/zg7-7.jpg", caption: { ko: "전시 전경 7", en: "Installation view 7" }, note: { ko: "", en: "" } },
      { thumb: "thumb/!zg7-8.jpg", image: "images/zg7-8.jpg", caption: { ko: "전시 전경 8", en: "Installation view 8" }, note: { ko: "", en: "" } },
      { thumb: "thumb/!zg7-9.jpg", image: "images/zg7-9.jpg", caption: { ko: "전시 전경 9", en: "Installation view 9" }, note: { ko: "", en: "" } },
      { thumb: "thumb/!zg7-10.jpg", image: "images/zg7-10.jpg", caption: { ko: "전시 전경 10", en: "Installation view 10" }, note: { ko: "", en: "" } },
      { thumb: "thumb/!zg7-11.jpg", image: "images/zg7-11.jpg", caption: { ko: "전시 전경 11", en: "Installation view 11" }, note: { ko: "", en: "" } },
      { thumb: "thumb/!zg7-12.jpg", image: "images/zg7-12.jpg", caption: { ko: "전시 전경 12", en: "Installation view 12" }, note: { ko: "", en: "" } },
      { thumb: "thumb/!zg7-13.jpg", image: "images/zg7-13.jpg", caption: { ko: "전시 전경 13", en: "Installation view 13" }, note: { ko: "", en: "" } },
      { thumb: "thumb/!zg7-14.jpg", image: "images/zg7-14.jpg", caption: { ko: "전시 전경 14", en: "Installation view 14" }, note: { ko: "", en: "" } },
      { thumb: "thumb/!zg7-15.jpg", image: "images/zg7-15.jpg", caption: { ko: "전시 전경 15", en: "Installation view 15" }, note: { ko: "", en: "" } }
    ],
    works: ["a17","a28","a30","ab4"]
  },


    {
    id: "2023annpaak-group",
    type: "group",
    title: { ko: "견고한 공중", en: "Solid Air" },
    year: "2023",
    venue: { ko: "안팎 스페이스", en: "Annpaak space" },
    city: { ko: "서울", en: "Seoul" },
    essayPostIds: ["zg6"],
    criticPostIds: [],
    installationImages: [
      { thumb: "thumb/!zg6-0.png", image: "images/zg6-0.png", caption: { ko: "포스터", en: "Poster" }, note: { ko: "디자인: 김윤하", en: "Design: Kim Yunha" }   },
      { thumb: "thumb/!zg6-1.jpg", image: "images/zg6-1.jpg", caption: { ko: "전시 전경", en: "Installation view" }, note: { ko: "사진 촬영: 안팎 스페이스", en: "Photo: Annpaak Space" }   }
    ],
    works: ["ac19","ac20"]
  },

 
    {
    id: "2023every-group",
    type: "group",
    title: { ko: "나를 생각하는", en: "Thinking Me" },
    year: "2023",
    venue: { ko: "에브리아트", en: "Every Art" },
    city: { ko: "서울", en: "Seoul" },
    essayPostIds: ["zg5"],
    criticPostIds: [],
    installationImages: [
      { thumb: "thumb/!zg5-0.png", image: "images/zg5-0.png", caption: { ko: "포스터", en: "Poster" }, note: { ko: "디자인: 에브리아트", en: "Design: Every Art" } },
      { thumb: "thumb/!zg5-1.jpg", image: "images/zg5-1.jpg", caption: { ko: "전시 전경 1", en: "Installation view 1" }, note: { ko: "사진 촬영: 에브리아트", en: "Photo: Every Art" } },
      { thumb: "thumb/!zg5-2.jpg", image: "images/zg5-2.jpg", caption: { ko: "전시 전경 2", en: "Installation view 2" }, note: { ko: "사진 촬영: 에브리아트", en: "Photo: Every Art" } },
      { thumb: "thumb/!zg5-3.jpg", image: "images/zg5-3.jpg", caption: { ko: "전시 전경 3", en: "Installation view 3" }, note: { ko: "사진 촬영: 에브리아트", en: "Photo: Every Art" } },
      { thumb: "thumb/!zg5-4.jpg", image: "images/zg5-4.jpg", caption: { ko: "전시 전경 4", en: "Installation view 4" }, note: { ko: "사진 촬영: 에브리아트", en: "Photo: Every Art" } }
    ],
    works: ["a6","a7","a26","a25","ab1","ab3",]
  },

    {
    id: "2023seoul-group",
    type: "group",
    title: { ko:"자아(自我) 아래 기억, 자아(自我) 위 꿈", en: "Memory Beneath The Ego, Fantasy Above The Ego" },
    year: "2023",
    venue: { ko: "서울대학교 미술관", en: "Seoul National University Museum of Art" },
    city: { ko: "서울", en: "Seoul" },
    essayPostIds: ["zg4"],
    criticPostIds: [],
    installationImages: [
      { thumb: "thumb/!zg4-0.jpg", image: "images/zg4-0.jpg", caption: { ko: "포스터", en: "Poster" }, note: { ko: "디자인: 서울대학교 미술관", en: "Design: Museum of Art, Seoul National University" } },
      { thumb: "thumb/!zg4-1.jpg", image: "images/zg4-1.jpg", caption: { ko: "전시 전경 1", en: "Installation view 1" }, note: { ko: "", en: "" } },
      { thumb: "thumb/!zg4-2.jpg", image: "images/zg4-2.jpg", caption: { ko: "전시 전경 2", en: "Installation view 2" }, note: { ko: "사진 촬영: 서울대학교 미술관", en: "Photo: Museum of Art, Seoul National University" } },
      { thumb: "thumb/!zg4-3.jpg", image: "images/zg4-3.jpg", caption: { ko: "전시 전경 3", en: "Installation view 3" }, note: { ko: "사진 촬영: 서울대학교 미술관", en: "Photo: Museum of Art, Seoul National University" } },
      { thumb: "thumb/!zg4-4.jpg", image: "images/zg4-4.jpg", caption: { ko: "전시 전경 4", en: "Installation view 4" }, note: { ko: "사진 촬영: 권오열", en: "Photo: kwon oyeol" } }
    ],
    works: ["a1","a8","a10","a11","a13","a16", "a19","ac17"]
  },




   {
    id: "2023soso-group",
    type: "group",
    title: { ko: "나의 회화적 순간", en: "My Painting Moment" },
    year: "2023",
    venue: { ko: "더 소소", en: "The Soso" },
    city: { ko: "서울", en: "Seoul" },
    essayPostIds: ["zg3"],
    criticPostIds: [],
    installationImages: [
      { thumb: "thumb/!zg3-0.jpg", image: "images/zg3-0.jpg", caption: { ko: "포스터", en: "Poster" }, note: { ko: "디자인: 박정윤", en: "Design: Park Jungyoon" } },
      { thumb: "thumb/!zg3-1.jpg", image: "images/zg3-1.jpg", caption: { ko: "전시 전경 1", en: "Installation view 1" }, note: { ko: "사진 촬영: 더 소소", en: "Photo: The Soso" } },
      { thumb: "thumb/!zg3-2.jpg", image: "images/zg3-2.jpg", caption: { ko: "전시 전경 2", en: "Installation view 2" }, note: { ko: "사진 촬영: 더 소소", en: "Photo: The Soso" } }
    ],
    works: ["a17", "a18", "a19","ac1","ac7","ac9","ac8"]
  },



    {
    id: "2022gyeongchun-group",
    type: "group",
    title: { ko: "", en: "Nowon Young Artist Map" },
    year: "2022",
    venue: { ko: "경춘선 숲길 갤러리", en: "Gyeongchun Line Forest Gallery" },
    city: { ko: "서울", en: "Seoul" },
    essayPostIds: ["zg2"],
    criticPostIds: [],
    installationImages: [
      { thumb: "thumb/!zg2-0.jpg", image: "images/zg2-0.jpg", caption: { ko: "포스터", en: "Poster" }, note: { ko: "디자인: 울트라마린 컬렉티브", en: "Design: Ultramarine Collective" } },
      { thumb: "thumb/!zg2-1.jpg", image: "images/zg2-1.jpg", caption: { ko: "전시 전경 1", en: "Installation view 1" }, note: { ko: "사진 촬영: 울트라마린 컬렉티브", en: "Photo: Ultramarine Collective" } }
      
    ],
    works: ["a5", "a6"]
  },


    {
    id: "2022cylinder-group",
    type: "group",
    title: { ko: "", en: "TORQUE 2 / NEUTRAL STEER" },
    year: "2022",
    venue: { ko: "실린더", en: "Cylinder" },
    city: { ko: "서울", en: "Seoul" },
    essayPostIds: ["zg1"],
    criticPostIds: [],
    installationImages: [
      { thumb: "thumb/!zg1-0.jpg", image: "images/zg1-0.jpg", caption: { ko: "포스터", en: "Poster" }, note: { ko: "디자인: 실린더", en: "Design: Cylinder" } },
      { thumb: "thumb/!zg1-1.jpg", image: "images/zg1-1.jpg", caption: { ko: "전시 전경", en: "Installation view" }, note: { ko: "사진 촬영: 실린더", en: "Photo: Cylinder" } }
    ],
    works: ["a1", "ac1", "ac2"]
  },

      {
    id: "2025every-curating",
    type: "curating",
    title: { ko: "빈 자리를 채우는 말", en: "Words Filling the Voids" },
    year: "2025",
    venue: { ko: "에브리아트", en: "Every Art" },
    city: { ko: "서울", en: "Seoul" },
    essayPostIds: ["zc1"],
    criticPostIds: [],
    installationImages: [
      { thumb: "thumb/!zc1-0.jpg", image: "images/zc1-0.jpg", caption: { ko: "포스터", en: "Poster" }, note: { ko: "", en: "" } },
      { thumb: "thumb/!zc1-1.jpg", image: "images/zc1-1.jpg", caption: { ko: "전시 전경 1", en: "Installation view 1" }, note: { ko: "사진 촬영: 에브리아트", en: "Photo: Every Art" } },
      { thumb: "thumb/!zc1-2.jpg", image: "images/zc1-2.jpg", caption: { ko: "전시 전경 2", en: "Installation view 2" }, note: { ko: "사진 촬영: 정연재", en: "Photo: Chung Yeonjae" } },
      { thumb: "thumb/!zc1-3.jpg", image: "images/zc1-3.jpg", caption: { ko: "전시 전경 3", en: "Installation view 3" }, note: { ko: "사진 촬영: 정연재", en: "Photo: Chung Yeonjae" } },
      { thumb: "thumb/!zc1-4.jpg", image: "images/zc1-4.jpg", caption: { ko: "전시 전경 4", en: "Installation view 4" }, note: { ko: "사진 촬영: 정연재", en: "Photo: Chung Yeonjae" } },
      { thumb: "thumb/!zc1-5.jpg", image: "images/zc1-5.jpg", caption: { ko: "전시 전경 5", en: "Installation view 5" }, note: { ko: "사진 촬영: 에브리아트", en: "Photo: Every Art" } },
      { thumb: "thumb/!zc1-6.jpg", image: "images/zc1-6.jpg", caption: { ko: "전시 전경 6", en: "Installation view 6" }, note: { ko: "사진 촬영: 정연재", en: "Photo: Chung Yeonjae" } },
      { thumb: "thumb/!zc1-7.jpg", image: "images/zc1-7.jpg", caption: { ko: "전시 전경 7", en: "Installation view 7" }, note: { ko: "사진 촬영: 에브리아트", en: "Photo: Every Art" } },
      { thumb: "thumb/!zc1-8.jpg", image: "images/zc1-8.jpg", caption: { ko: "전시 전경 8", en: "Installation view 8" }, note: { ko: "사진 촬영: 에브리아트", en: "Photo: Every Art" } },
      { thumb: "thumb/!zc1-9.jpg", image: "images/zc1-9.jpg", caption: { ko: "전시 전경 9", en: "Installation view 9" }, note: { ko: "사진 촬영: 정연재", en: "Photo: Chung Yeonjae" } },
      { thumb: "thumb/!zc1-10.jpg", image: "images/zc1-10.jpg", caption: { ko: "전시 전경 10", en: "Installation view 10" }, note: { ko: "사진 촬영: 정연재", en: "Photo: Chung Yeonjae" } },
      { thumb: "thumb/!zc1-11.jpg", image: "images/zc1-11.jpg", caption: { ko: "전시 전경 11", en: "Installation view 11" }, note: { ko: "사진 촬영: 정연재", en: "Photo: Chung Yeonjae" } },
      { thumb: "thumb/!zc1-12.jpg", image: "images/zc1-12.jpg", caption: { ko: "전시 전경 12", en: "Installation view 12" }, note: { ko: "사진 촬영: 정연재", en: "Photo: Chung Yeonjae" } },
      { thumb: "thumb/!zc1-13.jpg", image: "images/zc1-13.jpg", caption: { ko: "전시 전경 13", en: "Installation view 13" }, note: { ko: "사진 촬영: 에브리아트", en: "Photo: Every Art" } },
      { thumb: "thumb/!zc1-14.jpg", image: "images/zc1-14.jpg", caption: { ko: "전시 전경 14", en: "Installation view 14" }, note: { ko: "", en: "" } },
      { thumb: "thumb/!zc1-15.jpg", image: "images/zc1-15.jpg", caption: { ko: "전시 전경 15", en: "Installation view 15" }, note: { ko: "사진 촬영: 정연재", en: "Photo: Chung Yeonjae" } },
      { thumb: "thumb/!zc1-16.jpg", image: "images/zc1-16.jpg", caption: { ko: "전시 전경 16", en: "Installation view 16" }, note: { ko: "사진 촬영: 에브리아트", en: "Photo: Every Art" } },
      { thumb: "thumb/!zc1-17.jpg", image: "images/zc1-17.jpg", caption: { ko: "전시 전경 17", en: "Installation view 17" }, note: { ko: "사진 촬영: 에브리아트", en: "Photo: Every Art" } },
      { thumb: "thumb/!zc1-18.jpg", image: "images/zc1-18.jpg", caption: { ko: "전시 전경 18", en: "Installation view 18" }, note: { ko: "사진 촬영: 에브리아트", en: "Photo: Every Art" } }
    ]
  },
    {
    id: "2025Gwangmyeong-project",
    type: "project",
    title: { ko: "광물채집", en: "Gwangmul Chaejip" },
    year: "2025",
    venue: { ko: "예술공간 광명시작", en: "Art Space Gwangmyeong Start" },
    city: { ko: "광명시", en: "Gwangmyeong City" },
    essayPostIds: ["zp1"],
    criticPostIds: ["zp1-1"],
    installationImages: [
      { thumb: "thumb/!zp1-0.jpg", image: "images/zp1-0.jpg", caption: { ko: "가족의 물건 포스터", en: "Family Objects Poster" }, note: { ko: "디자인: 이립", en: "Lee Rip" } },
      { thumb: "thumb/!zp1-01.jpg", image: "images/zp1-01.jpg", caption: { ko: "워크숍 과정", en: "In the workshop" }, note: { ko: "사진 촬영: 최태훈", en: "Photo: Choi Taehoon" } },
      { thumb: "thumb/!zp1-02.jpg", image: "images/zp1-02.jpg", caption: { ko: "광물채집 포스터", en: "Gwangmul Chaejip Poster" }, note: { ko: "디자인: 주민희", en: "Design: Ju Minhee" } },
      { thumb: "thumb/!zp1-1.jpg", image: "images/zp1-1.jpg", caption: { ko: "전시 전경 1", en: "Installation view 1" }, note: { ko: "사진 촬영: 김진솔", en: "Photo: Kim Jinsol" } },
      { thumb: "thumb/!zp1-2.jpg", image: "images/zp1-2.jpg", caption: { ko: "전시 전경 2", en: "Installation view 2" }, note: { ko: "사진 촬영: 김진솔", en: "Photo: Kim Jinsol" } },
      { thumb: "thumb/!zp1-3.jpg", image: "images/zp1-3.jpg", caption: { ko: "전시 전경 3", en: "Installation view 3" }, note: { ko: "사진 촬영: 김진솔", en: "Photo: Kim Jinsol" } },
      { thumb: "thumb/!zp1-4.jpg", image: "images/zp1-4.jpg", caption: { ko: "전시 전경 4", en: "Installation view 4" }, note: { ko: "사진 촬영: 김진솔", en: "Photo: Kim Jinsol" } },
      { thumb: "thumb/!zp1-5.jpg", image: "images/zp1-5.jpg", caption: { ko: "전시 전경 5", en: "Installation view 5" }, note: { ko: "사진 촬영: 김진솔", en: "Photo: Kim Jinsol" } },
      { thumb: "thumb/!zp1-6.jpg", image: "images/zp1-6.jpg", caption: { ko: "전시 전경 6", en: "Installation view 6" }, note: { ko: "사진 촬영: 김진솔", en: "Photo: Kim Jinsol" } },
      { thumb: "thumb/!zp1-7.jpg", image: "images/zp1-7.jpg", caption: { ko: "전시 전경 7", en: "Installation view 7" }, note: { ko: "사진 촬영: 김진솔", en: "Photo: Kim Jinsol" } },
      { thumb: "thumb/!zp1-8.jpg", image: "images/zp1-8.jpg", caption: { ko: "전시 전경 8", en: "Installation view 8" }, note: { ko: "사진 촬영: 김진솔", en: "Photo: Kim Jinsol" } },
      { thumb: "thumb/!zp1-9.jpg", image: "images/zp1-9.jpg", caption: { ko: "전시 전경 9", en: "Installation view 9" }, note: { ko: "사진 촬영: 김진솔", en: "Photo: Kim Jinsol" } },
      { thumb: "thumb/!zp1-10.jpg", image: "images/zp1-10.jpg", caption: { ko: "권회찬의 어휘(축구공)", en: "Kwon Hoechan's Vocabulary(Soccer Ball)" }, note: { ko: "사진 촬영: 김진솔", en: "Photo: Kim Jinsol" } },
      { thumb: "thumb/!zp1-11.jpg", image: "images/zp1-11.jpg", caption: { ko: "김서연의 어휘(결혼소품)", en: "Kim Seoyeon's Vocabulary(Wedding Accessories)" }, note: { ko: "사진 촬영: 김진솔", en: "Photo: Kim Jinsol" } },
      { thumb: "thumb/!zp1-12.jpg", image: "images/zp1-12.jpg", caption: { ko: "김수아의 어휘(주전자)", en: "Kim Sua's Vocabulary(Kettle)" }, note: { ko: "사진 촬영: 김진솔", en: "Photo: Kim Jinsol" } },
      { thumb: "thumb/!zp1-13.jpg", image: "images/zp1-13.jpg", caption: { ko: "송호근의 어휘(냄비)", en: "Song Hogeun's Vocabulary(Pot)" }, note: { ko: "사진 촬영: 김진솔", en: "Photo: Kim Jinsol" } },
      { thumb: "thumb/!zp1-14.jpg", image: "images/zp1-14.jpg", caption: { ko: "이립의 어휘(성경책)", en: "Lee Rip's Vocabulary(Bible)" }, note: { ko: "사진 촬영: 김진솔", en: "Photo: Kim Jinsol" } },
      { thumb: "thumb/!zp1-15.jpg", image: "images/zp1-15.jpg", caption: { ko: "조한나의 어휘(친환경 손전등)", en: "Cho Hanna's Vocabulary(Eco-friendly Flashlight)" }, note: { ko: "사진 촬영: 김진솔", en: "Photo: Kim Jinsol" } },
      { thumb: "thumb/!zp1-16.jpg", image: "images/zp1-16.jpg", caption: { ko: "주민희의 어휘(캠코더)", en: "Joo Minhee's Vocabulary(Camcorder)" }, note: { ko: "사진 촬영: 김진솔", en: "Photo: Kim Jinsol" } },
      { thumb: "thumb/!zp1-17.jpg", image: "images/zp1-17.jpg", caption: { ko: "전시 전경 10", en: "Installation view 17" }, note: { ko: "사진 촬영: 김진솔", en: "Photo: Kim Jinsol" } }
      



    ]
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
  { label: "Email", value: "kwhc@naver.com", type: "copy", copyValue: "kwhc@naver.com" },
  { label: "Instagram", value: "Instagram", type: "link", href: "https://instagram.com/Kwon_Hoechan" }
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
    cvIntro: "전시명을 클릭하시면 관련 자료를 확인하실 수 있습니다.",
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
    shortcutHelp: "이 안내 열기/닫기",

    postSiblingPrev: "이전 글",
    postSiblingNext: "다음 글"



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
    shortcutHelp: "Toggle this panel",

    postSiblingPrev: "Previous",
    postSiblingNext: "Next"


  }
};
