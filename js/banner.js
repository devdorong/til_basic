window.addEventListener("DOMContentLoaded", () => {
  // 가짜 데이터(Dummy 데이터 또는 Mock 데이터)
  const apiData = [
    {
      id: 1,
      link: "#",
      image: "images/s1.png",
      alt: "도쿄 타워 슈퍼 위크",
    },
    {
      id: 2,
      link: "#",
      image: "images/s2.png",
      alt: "2025 여름맞이 숙박세일 페스타",
    },
    {
      id: 3,
      link: "#",
      image: "images/s3.png",
      alt: "6월 해외여행 혜택 모음",
    },
    {
      id: 4,
      link: "#",
      image: "images/s4.png",
      alt: "나의 세계를 놀랍게 NOL",
    },
    {
      id: 5,
      link: "#",
      image: "images/s5.png",
      alt: "인터파크TV_목요일",
    },
    {
      id: 6,
      link: "#",
      image: "images/s6.png",
      alt: "6월 티켓 혜택 모음",
    },
  ];
  // 슬라이드 갯수
  const total = apiData.length;
  // 슬라이드 배치장소
  const bannerPos = document.querySelector(".sw_banner .swiper-wrapper");
  const banner = document.querySelector(".sw_banner");
  // html 태그 만들기
  const tag = `
    <div class="swiper-slide">
        <a href="#" class="banner_slide_item">
            <img src="images/s2.png" alt="이미지" />
        </a>
    </div>
    `;

  // 6개 만들기
  let htmlTag = "";

  // html 태그 만드는 기능
  function makeHtml() {
    for (let i = 0; i < total; i++) {
      htmlTag =
        htmlTag +
        `
    <div class="swiper-slide">
        <a href="${apiData[i].link}" class="banner_slide_item">
            <img src="${apiData[i].image}" alt="${apiData[i].alt}" />
        </a>
    </div>
    `;
    }
    // html 장소에 배치하기
    bannerPos.innerHTML = htmlTag;
  }

  // console.log(htmlTag);

  // 슬라이드 만들기
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

  makeHtml();
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
