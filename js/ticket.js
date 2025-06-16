window.addEventListener("load", function () {
  const focusName = "ticket_focus";
  const bts = document.querySelectorAll(".ticket_button_list li button");

  //데이터
  const ticketApiData = [
    {
      링크: "#",
      이미지:
        "	https://ticketimage.interpark.com/Play/image/large/25/25006845_p.gif",
      alt: "포스터",
      랭크: 1,
      타이틀: "뮤지컬 〈등등곡〉",
      장소: "예스24스테이지 1관",
      날짜: "2025.06.24 - 2025.09.14",
      옵션: "",
    },
    {
      링크: "#",
      이미지:
        "https://ticketimage.interpark.com/Play/image/large/25/25004150_p.gif",
      alt: "포스터",
      랭크: 2,
      타이틀: "뮤지컬 〈사랑은 비를 타고 〉 30주년 공연",
      장소: "백암아트홀",
      날짜: "2025.04.29 - 2025.07.13",
      옵션: `<span class="ticket_blue">좌석우위</span>`,
    },
    {
      링크: "#",
      이미지:
        "https://ticketimage.interpark.com/Play/image/large/25/25007077_p.gif",
      alt: "포스터",
      랭크: 3,
      타이틀: "뮤지컬 〈플레임즈〉",
      장소: "SH아트홀",
      날짜: "2025.06.26 - 2025.09.14",
      옵션: `<span class="ticket_red">단독판매</span>`,
    },
    {
      링크: "#",
      이미지:
        "https://ticketimage.interpark.com/Play/image/large/P0/P0004249_p.gif",
      alt: "포스터",
      랭크: 4,
      타이틀: "뮤지컬 〈팬텀〉 10주년 기념 공연",
      장소: "세종문화회관 대극장",
      날짜: "2025.05.31 - 2025.08.11",
      옵션: "",
    },
    {
      링크: "#",
      이미지:
        "https://ticketimage.interpark.com/Play/image/large/25/25008211_p.gif",
      alt: "포스터",
      랭크: 5,
      타이틀: "［NOL 스페셜 스테이지］ 뮤지컬 〈팬텀〉 10주년 기념 공연",
      장소: "세종문화회관 대극장",
      날짜: "2025.07.12 - 2025.07.17",
      옵션: `<span class="ticket_red">단독판매</span>`,
    },
    {
      링크: "#",
      이미지:
        "https://ticketimage.interpark.com/Play/image/large/25/25005742_p.gif",
      alt: "포스터",
      랭크: 6,
      타이틀: "뮤지컬 〈머피〉",
      장소: "예그린씨어터",
      날짜: "2025.06.03 - 2025.08.24",
      옵션: "",
    },
    {
      링크: "#",
      이미지:
        "https://ticketimage.interpark.com/Play/image/large/25/25005777_p.gif",
      alt: "포스터",
      랭크: 7,
      타이틀: "뮤지컬 〈위키드〉 내한 공연(WICKED The Musical)",
      장소: "블루스퀘어 신한카드홀",
      날짜: "2025.07.12 - 2025.10.26",
      옵션: `<span class="ticket_blue">좌석우위</span>`,
    },
  ];
  //html 연동
  const ticketPos = document.querySelector(".sw_ticket .swiper-wrapper");

  // <span class="ticket_red">단독판매</span>
  // <span class="ticket_blue">좌석우위</span>

  html = "";
  for (let i = 0; i < ticketApiData.length; i++) {
    let tag = `
      <div class="swiper-slide">
                    <a href="${ticketApiData[i].링크}" class="ticket_slide_item">
                      <div class="ticket_image">
                        <img
                          src="${ticketApiData[i].이미지}"
                          alt="${ticketApiData[i].alt}"
                        />
                        <div class="ticket_rank">${ticketApiData[i].랭크}</div>
                      </div>
                      <div class="ticket_info">
                        <p class="ticket_item_title">${ticketApiData[i].타이틀}
                        </p>
                        <p class="ticket_place">${ticketApiData[i].장소}
                        </p>
                        <p class="ticket_day">${ticketApiData[i].날짜}</p>
                        <div class="ticket_option">
                        ${ticketApiData[i].옵션}
                        </div>
                      </div>
                    </a>
                  </div>
      `;
    html = html + tag;
  }
  // tag += `
    
  // `;

  console.log("만들어진 태그 : ", html);
  ticketPos.innerHTML = html;

  bts.forEach(function (item) {
    item.addEventListener("click", function () {
      removeFocus();

      item.classList.add("ticket_focus");
    });
  });
  function removeFocus() {
    bts.forEach(function (item) {
      item.classList.remove(focusName);
    });
  }

  // swiper 만들기 실행
  new Swiper(".sw_ticket", {
    slidesPerView: 4,
    spaceBetween: 10,
    slidesPerGroup: 1,
    navigation: {
      nextEl: ".ticket_slide_next",
      prevEl: ".ticket_slide_prev",
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,

        slidesPerGroup: 3,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 20,

        slidesPerGroup: 4,
      },
    },
  });
});

// let html = `
// <div class="swiper-slide">
//                 <a href="#" class="ticket_slide_item">
//                   <div class="ticket_image">
//                     <img
//                       src="https://ticketimage.interpark.com/Play/image/large/L0/L0000123_p.gif"
//                       alt="포스터"
//                     />
//                     <div class="ticket_rank">1</div>
//                   </div>
//                   <div class="ticket_info">
//                     <p class="ticket_item_title">
//                       뮤지컬 〈맘마미아!〉뮤지컬 〈맘마미아!〉뮤지컬
//                       〈맘마미아!〉
//                     </p>
//                     <p class="ticket_place">
//                       LG아트센터 서울 LG SIGNATURE 홀
//                     </p>
//                     <p class="ticket_day">2025.07.26 - 2025.10.25</p>
//                     <div class="ticket_option">
//                       <span class="ticket_red">단독판매</span>
//                       <span class="ticket_blue">좌석우위</span>
//                     </div>
//                   </div>
//                 </a>
//               </div>
// `

// window.addEventListener("load", function () {
//   const focusName = "ticket_focus";
//   const bts = document.querySelectorAll(".ticket_button_list li button");
//   bts.forEach(function (item) {
//     item.addEventListener("click", function () {
//       removeFocus();
//       item.classList.add("ticket_focus");
//     });
//   });

//   // 버튼에서 포커스 제거하는 기능
//   function removeFocus() {
//     bts.forEach(function (item) {
//       item.classList.remove(focusName);
//     });
//   }

//   const ticketDataArr = [
//     {
//       id: 1,
//       image:
//         "https://ticketimage.interpark.com/Play/image/large/25/25008376_p.gif",
//       info: "〈슬립노모어 서울〉 (Sleep No More Seoul)",
//       location: "매키탄 호텔 (The McKithan Hotel)",
//       date: "2025.07.24 - 2025.08.09",
//     },
//     {
//       id: 2,
//       image:
//         "https://ticketimage.interpark.com/Play/image/large/L0/L0000123_p.gif",
//       info: "〈슬립노모어 서울〉 (Sleep No More Seoul)",
//       location: "매키탄 호텔 (The McKithan Hotel)",
//       date: "2025.07.24 - 2025.08.09",
//     },
//     {
//       id: 3,
//       image:
//         "	https://ticketimage.interpark.com/Play/image/large/P0/P0004249_p.gif",
//       info: "〈슬립노모어 서울〉 (Sleep No More Seoul)",
//       location: "매키탄 호텔 (The McKithan Hotel)",
//       date: "2025.07.24 - 2025.08.09",
//     },
//     {
//       id: 4,
//       image:
//         "https://ticketimage.interpark.com/Play/image/large/25/25005777_p.gif",
//       info: "〈슬립노모어 서울〉 (Sleep No More Seoul)",
//       location: "매키탄 호텔 (The McKithan Hotel)",
//       date: "2025.07.24 - 2025.08.09",
//     },
//     {
//       id: 5,
//       image:
//         "https://ticketimage.interpark.com/Play/image/large/25/25008279_p.gif",
//       info: "〈슬립노모어 서울〉 (Sleep No More Seoul)",
//       location: "매키탄 호텔 (The McKithan Hotel)",
//       date: "2025.07.24 - 2025.08.09",
//     },
//     {
//       id: 6,
//       image:
//         "https://ticketimage.interpark.com/Play/image/large/25/25008305_p.gif",
//       info: "〈슬립노모어 서울〉 (Sleep No More Seoul)",
//       location: "매키탄 호텔 (The McKithan Hotel)",
//       date: "2025.07.24 - 2025.08.09",
//     },
//     {
//       id: 7,
//       image:
//         "https://ticketimage.interpark.com/Play/image/large/25/25003119_p.gif",
//       info: "〈슬립노모어 서울〉 (Sleep No More Seoul)",
//       location: "매키탄 호텔 (The McKithan Hotel)",
//       date: "2025.07.24 - 2025.08.09",
//     },
//     {
//       id: 8,
//       image:
//         "https://nol.interpark.com/_next/static/media/btn_moreProduct.31dedf7e.svg",
//       info: "〈슬립노모어 서울〉 (Sleep No More Seoul)",
//       location: "매키탄 호텔 (The McKithan Hotel)",
//       date: "2025.07.24 - 2025.08.09",
//     },
//   ];
//   const swTicketPos = document.querySelector(".sw_ticket .swiper-wrapper");
//   let htmlTag = "";

//   for (let i = 0; i < ticketDataArr.length; i++) {
//     const tag = `
//     <div class="swiper-slide">
//                     <a href="#" class="ticket_item" style="background-color: skyblue">
//                     <div class = "ticket_item_image">
//                     <img src="${ticketDataArr[i].image}"alt=""/>
//                     </div>
//                     <div class="ticket_info">
//                     <p class="ticket_item_info">${ticketDataArr[i].info}</p>
//                     <p class="ticket_item_location">${ticketDataArr[i].location}</p>
//                     <p class="ticket_item_date">${ticketDataArr[i].date}</p>
//                     </div>
//                     ${i}
//                     </a>
//                   </div>`;
//     htmlTag = htmlTag + tag;
//   }

//   swTicketPos.innerHTML = htmlTag;

//   // swiper 만들기 실행
//   new Swiper(".sw_ticket", {
//     navigation: {
//       nextEl: ".ticket_slide_next",
//       prevEl: ".ticket_slide_prev",
//     },
//     slidesPerView: 8,
//     spaceBetween: 7,
//     slidesPerGroup: 1,

//     breakpoints: {
//       1024: {
//         slidesPerView: 3,
//         spaceBetween: 24,
//         slidesPerGroup: 3,
//       },
//       1280: {
//         slidesPerView: 4,
//         spaceBetween: 27,
//         slidesPerGroup: 4,
//       },
//     },
//   });
// });
