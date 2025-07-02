window.addEventListener("load", function () {
  // 변수 생성
  const ticketPos = document.querySelector(".sw_ticket .swiper-wrapper");
  const btPos = document.querySelector(".ticket_button_list");
  // 데이터 부르기
  async function getData() {
    try {
      const res = await fetch("/apis/ticket.json");
      const result = await res.json();
      // html 코드 작성
      makeHtml(result);
    } catch (error) {
      console.log(error);
    }
  }
  // 실행
  getData();

  function makeHtml(data) {
    // 카테고리 버튼 만들기
    let btHtml = "";
    data.forEach((item) => {
      btHtml += `<li><button>${item.카테고리}</button></li>`;
    });
    btPos.innerHTML = btHtml;

    let focusIndex = 0;
    const btList = document.querySelectorAll(".ticket_button_list li button");
    btList[focusIndex].classList.add("ticket_focus");

    // 슬라이드 그리는 함수
    function drawSlides(index) {
      let html = "";
      const items = data[index].데이터;

      items.forEach((item) => {
        html += `
        <div class="swiper-slide">
          <a href="${item.링크}" class="ticket_slide_item">
            <div class="ticket_image">
              <img src="${item.이미지}" alt="${item.alt}" />
              <div class="ticket_rank">${item.랭크}</div>
            </div>
            <div class="ticket_info">
              <p class="ticket_item_title">${item.타이틀}</p>
              <p class="ticket_place">${item.장소}</p>
              <p class="ticket_day">${item.날짜}</p>
              <div class="ticket_option">`;

        item.옵션.forEach((opt) => {
          html += `<span class="ticket_${opt.스타일}">${opt.텍스트}</span>`;
        });

        html += `
              </div>
            </div>
          </a>
        </div>`;
      });

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

      ticketPos.innerHTML = html;

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
    }

    // 버튼 클릭 이벤트
    btList.forEach((item, index) => {
      item.addEventListener("click", () => {
        focusIndex = index;
        resetBts();
        item.classList.add("ticket_focus");
        drawSlides(focusIndex);
      });
    });

    function resetBts() {
      btList.forEach((item) => item.classList.remove("ticket_focus"));
    }

    // 초기 실행
    drawSlides(focusIndex);
  }
});
