// useEffect : JSX 완성되면
// HTML 완성되면
window.addEventListener("DOMContentLoaded", () => {
  // 1. 백엔드 데이터 가져오기
  // 전역변수 생성
  let originData;

  async function getData() {
    try {
      const res = await fetch("/apis/ticket.json");
      // 실제 결과 확인
      const result = await res.json();
      // 전역에서 사용하도록 보관함.
      originData = result;
      // console.log(result);
      makeCategoryHtml();
      makeSlideHtml();
    } catch (error) {
      console.log(error);
    }
  }

  // 2. html 생성
  // 2.1. 카테고리 버튼 생성
  function makeCategoryHtml() {
    let cateHtml = "";
    for (let i = 0; i < originData.length; i++) {
      const obj = originData[i]; // obj 자리에 {카테고리}
      const tag = `<li><button>${obj.카테고리}</button></li>`;
      cateHtml = cateHtml + tag;
    }

    const where = document.querySelector(".ticket_button_list");
    where.innerHTML = cateHtml;
    makeBtnInit();
  }
  // 2.2. 슬라이드 html 태그 생성
  let showIndex = 0; // 보여주어야 할 배열의 인덱스 보관
  function makeSlideHtml() {
    let html = "";

    // 현재 배열의 몇번째 데이터를 보여주어야 하는가?
    const showData = originData[showIndex].데이터;
    for (let i = 0; i < showData.length; i++) {
      const obj = showData[i];
      // 임시 태그
      let tag = `
    <div class="swiper-slide">
      <a href="${obj.링크}" class="ticket_slide_item">
        <div class="ticket_image">
          <img
            src="${obj.이미지}"
            alt="${obj.alt}"
          />
          <div class="ticket_rank">${obj.랭크}</div>
        </div>

        <div class="ticket_info">
          <p class="ticket_item_title">
            ${obj.타이틀}
          </p>
          <p class="ticket_place">
            ${obj.장소}
          </p>
          <p class="ticket_day">${obj.날짜}</p>
          <div class="ticket_option">`;

      // console.log(obj.옵션.length);
      for (let j = 0; j < obj.옵션.length; j++) {
        tag =
          tag +
          `<span class="ticket_${obj.옵션[j].스타일}">${obj.옵션[j].텍스트}</span>`;
      }

      tag =
        tag +
        `</div>
        </div>
      </a>
    </div> 
    `;
      html = html + tag;
    }
    html += `
      <div class="swiper-slide">
        <div class="poster_all">
          <a href="#">
            <button>
              <img src="images/btn_moreProduct.31dedf7e.svg" alt="" />
            </button>
            <span>전체보기</span>
          </a>
        </div>
      </div>`;

    const ticketPos = document.querySelector(".sw_ticket .swiper-wrapper");
    ticketPos.innerHTML = html;

    makeSlide();
  }
  // 3 Swiper 를 만들기
  let swiperTicket;
  function makeSlide() {
    if (swiperTicket) {
      swiperTicket.destroy();
    }
    // swiper 만들기 실행
    swiperTicket = new Swiper(".sw_ticket", {
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
  }
  // 4. 카테고리 버튼 선택시 다시 슬라이드 html 태그 생성
  //  2.2 과정, 2.3 과정을 다시 진행

  // 5. 버튼 포커스 기능
  // 기능은 1번만 등록하기
  function makeBtnInit() {
    const btList = document.querySelectorAll(".ticket_button_list li button");
    btList[showIndex].classList.add("ticket_focus");
    btList.forEach((item, index) => {
      item.addEventListener("click", () => {
        resetFocus();

        showIndex = index;
        item.classList.add("ticket_focus");
        makeSlideHtml();
      });
    });
  }
  // 6. 포커스 해제 기능
  function resetFocus() {
    const btList = document.querySelectorAll(".ticket_button_list li button");
    btList.forEach((item) => {
      item.classList.remove("ticket_focus");
    });
  }

  getData();
});

// window.addEventListener("load", function () {
//   // 변수 생성
//   const ticketPos = document.querySelector(".sw_ticket .swiper-wrapper");
//   const btPos = document.querySelector(".ticket_button_list");
//   // 데이터 부르기
//   const TICKET_DATA_JSON = [
//     "ticket.json",
//     "ticket.json",
//     "ticket.json",
//     "ticket.json",
//     "ticket.json",
//   ];
//   async function getData(file) {
//     try {
//       console.log("새로 불러올 데이터: ", file);
//       const res = await fetch(`/apis/${file}`);
//       const result = await res.json();
//       // html 코드 작성
//       makeHtml(result);
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   // 실행
//   getData("ticket.json");

//   function makeHtml(data) {
//     // 카테고리 버튼 만들기
//     let btHtml = "";
//     data.forEach((item) => {
//       btHtml += `<li><button>${item.카테고리}</button></li>`;
//     });
//     btPos.innerHTML = btHtml;

//     let focusIndex = 0;
//     const btList = document.querySelectorAll(".ticket_button_list li button");
//     btList[focusIndex].classList.add("ticket_focus");

//     // 슬라이드 그리는 함수
//     function drawSlides(index) {
//       let html = "";
//       const items = data[index].데이터;

//       items.forEach((item) => {
//         html += `
//         <div class="swiper-slide">
//           <a href="${item.링크}" class="ticket_slide_item">
//             <div class="ticket_image">
//               <img src="${item.이미지}" alt="${item.alt}" />
//               <div class="ticket_rank">${item.랭크}</div>
//             </div>
//             <div class="ticket_info">
//               <p class="ticket_item_title">${item.타이틀}</p>
//               <p class="ticket_place">${item.장소}</p>
//               <p class="ticket_day">${item.날짜}</p>
//               <div class="ticket_option">`;

//         item.옵션.forEach((opt) => {
//           html += `<span class="ticket_${opt.스타일}">${opt.텍스트}</span>`;
//         });

//         html += `
//               </div>
//             </div>
//           </a>
//         </div>`;
//       });

//       html += `
//       <div class="swiper-slide">
//         <div class="poster_all">
//           <a href="#">
//             <button>
//               <img src="images/btn_moreProduct.31dedf7e.svg" alt="" />
//             </button>
//             <span>전체보기</span>
//           </a>
//         </div>
//       </div>`;

//       ticketPos.innerHTML = html;

//       new Swiper(".sw_ticket", {
//         slidesPerView: 4,
//         spaceBetween: 10,
//         slidesPerGroup: 1,
//         navigation: {
//           nextEl: ".ticket_slide_next",
//           prevEl: ".ticket_slide_prev",
//         },
//         breakpoints: {
//           1024: {
//             slidesPerView: 3,
//             spaceBetween: 20,
//             slidesPerGroup: 3,
//           },
//           1280: {
//             slidesPerView: 4,
//             spaceBetween: 20,
//             slidesPerGroup: 4,
//           },
//         },
//       });
//     }

//     // 버튼 클릭 이벤트
//     btList.forEach((item, index) => {
//       item.addEventListener("click", () => {
//         focusIndex = index;
//         resetBts();
//         item.classList.add("ticket_focus");
//         drawSlides(TICKET_DATA_JSON[focusIndex]);
//       });
//     });

//     function resetBts() {
//       btList.forEach((item) => item.classList.remove("ticket_focus"));
//     }

//     // 초기 실행
//     drawSlides(focusIndex);
//   }
// });
