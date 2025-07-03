window.addEventListener("DOMContentLoaded", () => {
  const bannerPos = document.querySelector(".sw_banner .swiper-wrapper");
  const banner = document.querySelector(".sw_banner");
  // 1. 데이터를 부르자
  async function getData() {
    try {
      const res = await fetch("/apis/banner.json");
      // const res = await fetch("https://nol.interpark.com/api/liveProduct");
      const result = await res.json();
      // 2 번 진행 시작
      makeHtml(result);
      const swiper = makeSlide();
    } catch (error) {
      console.log(error);
    }
  }

  // 실행하기
  getData();
  // 2. html 태그 만들기
  let html = "";
  function makeHtml(data) {
    for (let i = 0; i < data.length; i++) {
      const obj = data[i];
      const tag = `
      <div class="swiper-slide">
            <a href="${obj.link}" class="banner_slide_item">
                <img src="${obj.image}" alt="${obj.alt}" />
            </a>
        </div>
      `;
      html = html + tag;
      // console.log(tag);

      bannerPos.innerHTML = html;
    }
  }

  function makeSlide() {
    const swiper = new Swiper(".sw_banner", {
      slidesPerView: 1,
      spaceBetween: 25,
      loop: true,
      speed: 500,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".banner_slide_next",
        prevEl: ".banner_slide_prev",
      },
      pagination: {
        el: ".banner_slide_pg",
        clickable: true,
      },

      breakpoints: {
        760: {
          slidesPerView: 2,
          spaceBetween: 25,
        },
      },
    });
    return swiper;
  }

  const swiper = makeSlide();

  // 배너 영역에 마우스가 걸친다면
  banner.addEventListener("mouseenter", () => {
    swiper.autoplay.stop();
  });
  // 배너 영역에 마우스가 빠져나간다면
  banner.addEventListener("mouseleave", () => {
    swiper.autoplay.start();
  });
});
