window.addEventListener("DOMContentLoaded", function () {
  const liveData = [
    {
      id: 1,
      link: "#",
      image:
        "https://common-live-vod.interparkcdn.net/data/image/20250218/14/153/20250218044810.jpg",
      alt: "",
    },
    {
      id: 2,
      link: "#",
      image:
        "https://common-live-vod.interparkcdn.net/data/image/20250609/14/96/20250609151841.png",
      alt: "",
    },
    {
      id: 3,
      link: "#",
      image:
        "https://common-live-vod.interparkcdn.net/data/image/20250410/14/96/20250410063525.png",
      alt: "",
    },
    {
      id: 4,
      link: "#",
      image: "https://common-live-vod.interparkcdn.net/data/image/20250610/14/159/20250610045200.png",
      alt: "",
    },
    
  ];

  const liveTotal = liveData.length;
  const livePos = document.querySelector("live_banner .swiper-wrapper");

  let htmlTag = "";

  for (let i = 0; i < liveTotal; i++) {
    htmlTag =
      htmlTag +
      `
    <div class="swiper-slide">
        <a href="${liveData[i].link}" class="live_slide_item">
            <img src="${liveData[i].image}" alt="${liveData[i].alt}" />
        </a>
    </div>
    `;
  }

  const swiper = new Swiper(".live_banner", {
    slidesPerView: 4,
    spaceBetween: 25,
    loop: false,
    speed: 500,
    navigation: {
      nextEl: ".live_slide_next",
      prevEl: ".live_slide_prev",
    },

    breakpoints: {
      760: {
        slidesPerView: 2,
        spaceBetween: 25,
      },
    },
     
  });
  console.log(htmlTag);
  livePos.innerHTML = htmlTag;
  
});

