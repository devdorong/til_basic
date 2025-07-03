window.addEventListener("load", () => {
  //변수 생성
  const livePos = document.querySelector(".sw_live .swiper-wrapper");

  //데이터
  async function getData() {
    try {
      const res = await fetch("/apis/live.json");
      const result = await res.json();
      // html 작성
      makeHtml(result);
    } catch (error) {
      console.log(error);
    }
  }

  let html = "";
  function makeHtml(data) {
    for (let i = 0; i < data.length; i++) {
      const obj = data[i];
      let tag = "";
      if (obj.live) {
        const isReplay = obj.방송 === "라이브 다시보기";
        tag = `
        <div class="swiper-slide">
          <a href="#" class="live_slide_item">  
            <div class="live_image${isReplay ? " replay" : ""}">  
              <img
                src="${obj.이미지}"
                alt="${obj.alt}"
              />      
            </div>
            <div class="live_info">
              <div class="live_state">
                <span class="live_wait">${obj.방송}</span>
              </div>
              <p class="live_item_title">
                ${obj.타이틀}
              </p>
              <div class="live_day">
                <div class="live_day_date">${obj.날짜}</div>
                <div class="live_day_time">${obj.시간}</div>
              </div>
              `;

        if (obj.디테일이미지.length > 0) {
          tag += `
            <div class="live_detail">
              <div class="live_detail_image">
                <img
                  src="${obj.디테일이미지[0]}"
                  alt="${obj.디테일alt}"
                />
              </div>
              <p class="live_detail_title">
                ${obj.디테일타이틀}
              </p>
            </div>
            `;
        }
        tag += `

            </div>
          </a>
        </div>
    `;
      } else {
        tag += `
          
        <div class="swiper-slide">
          <a href="#" class="live_slide_item">
            <div class="unlive_image">
              <img src="images/live_99.jpg" alt="방송대기" />
            </div>
            <div class="unlive_info">
              <div class="unlive_info_logo"><img src="images/live_logo.svg" alt=""></div>
              <div class="unlive_info_title">방송준비중입니다.</div>
              <div class="unlive_info_button">편성표 바로가기</div>
            </div>
          </a>
        </div>
        `;
      }

      html = html + tag;
    }
    livePos.innerHTML = html;
  }

  // swiper 만들기 실행
  new Swiper(".sw_live", {
    slidesPerView: 3,
    spaceBetween: 10,
    slidesPerGroup: 1,
    navigation: {
      nextEl: ".live_slide_next",
      prevEl: ".live_slide_prev",
    },

    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 23,
        slidesPerGroup: 3,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 20,
        slidesPerGroup: 4,
      },
    },
  });

  getData();
});
