window.addEventListener("load", function () {
  const focusName = "ticket_focus";
  const bts = document.querySelectorAll(".ticket_button_list li button");

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
