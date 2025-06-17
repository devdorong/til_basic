window.addEventListener("load", function () {
  //데이터
  const liveApiData = [
    {
      id: 1,
      링크: "#",
      이미지:
        "	https://common-live-vod.interparkcdn.net/data/image/20250612/14/151/20250612011101.jpg",
      alt: "라이브",
      방송: "방송임박", // "라이브" , "라이브 다시보기",
      타이틀:
        "[푸꾸옥 자유여행] 5성급 노보텔 vs 4성급 빈홀리데이 피에스타! 30만원대~ 🏝 프라이빗 렌터카+객실당 망고 1kg",
      날짜: "",
      시간: "",
      디테일이미지:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/151/20250612014205.jpg",
      디테일alt: "상세정보",
      디테일타이틀: "[기획전] 푸꾸옥 자유여행 혜택 보기",
      live: true,
    },
    {
      id: 2,
      링크: "#",
      이미지:
        "https://common-live-vod.interparkcdn.net/data/image/20250610/14/153/20250610023358.jpeg",
      alt: "라이브",
      방송: "방송예정",
      타이틀: "[휘닉스 브랜드 호텔&리조트] 여름맞이 평창&제주 특가",
      날짜: "06월 17일 (화)",
      시간: "19:00",
      디테일이미지: "",
      디테일alt: "",
      디테일타이틀: "",

      live: true,
    },
    {
      id: 3,
      링크: "#",
      이미지:
        "https://common-live-vod.interparkcdn.net/data/image/20250617/14/96/20250617021040.png",
      alt: "라이브",
      방송: "방송예정",
      타이틀:
        "[싱가포르항공] 월드 클래스 서비스 항공사 싱가포르/허니문/호주 노선 특가👑",
      날짜: "06월 18일 (수)",
      시간: "11:00",
      디테일이미지: "",
      디테일alt: "상세정보",
      디테일타이틀: "",
      live: true,
    },
    {
      id: 4,
      링크: "#",
      이미지:
        "	https://common-live-vod.interparkcdn.net/data/image/20250611/14/159/20250611064830.png",
      alt: "라이브",
      방송: "방송예정",
      타이틀:
        "[몬드리안 이태원&테이크호텔 서울광명&인제 스피디움] 도심 호캉스&강원 숲캉스 특집!",
      날짜: "06월 19일 (목)",
      시간: "19:00",
      디테일이미지: "",
      디테일alt: "상세정보",
      디테일타이틀: "",
      live: true,
    },
    {
      id: 5,
      링크: "#",
      이미지:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/160/20250612044328.png",
      alt: "라이브",
      방송: "라이브 다시보기",
      타이틀:
        "[월요라이브] 뮤지컬 '차미' - 이재림, 박새힘, 황순종, 서동진 배우 출연",
      날짜: "",
      시간: "",
      디테일이미지:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/160/20250612044459.png",
      디테일alt: "상세정보",
      디테일타이틀: "월요라이브 자세히보기!",
      live: true,
    },
    {
      id: 6,
      링크: "#",
      이미지:
        "https://common-live-vod.interparkcdn.net/data/image/20250612/14/159/20250612081529.png",
      alt: "라이브",
      방송: "라이브 다시보기",
      타이틀: "[라마다 호텔] 해운대/여수/자은도/거제 4지점 라이브 특가 🎊",
      날짜: "",
      시간: "",
      디테일이미지:
        "https://common-live-vod.interparkcdn.net/data/image/20250613/14/159/20250613020241.png",
      디테일alt: "상세정보",
      디테일타이틀: "라마다 스위츠 거제 호텔",
      // 할인율 : 84%, 가격 : 71,100원
      // <span></span> 사용
      live: true,
    },
    {
      id: 7,
      링크: "#",
      이미지:
        "https://common-live-vod.interparkcdn.net/data/image/20250410/14/96/20250410063525.png",
      alt: "라이브",
      방송: "라이브 다시보기",
      타이틀:
        "[진에어] 선착순 쿠폰! 전 노선 위탁수하물 15KG 포함 라이브 특가💚",
      날짜: "",
      시간: "",
      디테일이미지:
        "https://common-live-vod.interparkcdn.net/data/image/20250610/14/152/20250610092726.png",
      디테일alt: "상세정보",
      디테일타이틀: "[쿠폰 기획전] 진에어 라이브 특가",
      live: true,
    },
    {
      id: 8,
      링크: "#",
      이미지:
        "https://common-live-vod.interparkcdn.net/data/image/20250609/14/96/20250609151841.png",
      alt: "라이브",
      방송: "라이브 다시보기",
      타이틀: "[리솜리조트] 여름을 빛낼 가장 특별한 여정 힐링 특가",
      날짜: "",
      시간: "",
      디테일이미지:
        "https://common-live-vod.interparkcdn.net/data/image/20250610/14/152/20250610092726.png",
      디테일alt: "상세정보",
      디테일타이틀: "스플라스 리솜(덕산)",
      //  할인율 : 67%, 가격 : 125,280원,
      live: true,
    },
    {
      id: 9,
      링크: "#",
      이미지:
        "	https://common-live-vod.interparkcdn.net/data/image/20250409/14/159/20250409080454.jpg",
      alt: "라이브",
      방송: "라이브 다시보기",
      타이틀:
        "[이스타항공] 부산 ↔ 푸꾸옥 국적사 단독 신규취항! 27개 노선, 왕복 8만원대부터 🎈",
      날짜: "",
      시간: "",
      디테일이미지:
        "https://common-live-vod.interparkcdn.net/data/image/20250325/14/152/20250325045420.png",
      디테일alt: "상세정보",
      디테일타이틀: "[쿠폰/전노선] 이스타항공 기획전",
      live: true,
    },
    {
      id: 10,
      링크: "",
      이미지: "",
      alt: "",
      방송: "",
      타이틀: "",
      날짜: "",
      시간: "",
      디테일이미지: "",
      디테일alt: "",
      디테일타이틀: "",
      live: false,
    },
    {
      id: 11,
      링크: "#",
      이미지: "",
      alt: "",
      방송: "",
      타이틀: "",
      날짜: "",
      시간: "",
      디테일이미지: "",
      디테일alt: "",
      디테일타이틀: "",
      live: false,
    },
    {
      id: 12,
      링크: "",
      이미지: "",
      alt: "",
      방송: "",
      타이틀: "",
      날짜: "",
      시간: "",
      디테일이미지: "",
      디테일alt: "",
      디테일타이틀: "",
      live: false,
    },
  ];

  //html 연동
  const livePos = document.querySelector(".sw_live .swiper-wrapper");

  html = "";
  for (let i = 0; i < liveApiData.length; i++) {
    let tag = "";
    if (liveApiData[i].live) {
      const isReplay = liveApiData[i].방송 === "라이브 다시보기";
      tag = `
      <div class="swiper-slide">
        <a href="#" class="live_slide_item">  
          <div class="live_image${isReplay ? " replay" : ""}">
            <img
              src="${liveApiData[i].이미지}"
              alt="${liveApiData[i].alt}"
            />      
          </div>
          <div class="live_info">
            <div class="live_state">
              <span class="live_wait">${liveApiData[i].방송}</span>
            </div>
            <p class="live_item_title">
              ${liveApiData[i].타이틀}
            </p>
            <div class="live_day">
              <div class="live_day_date">${liveApiData[i].날짜}</div>
              <div class="live_day_time">${liveApiData[i].시간}</div>
            </div>
            <div class="live_detail">
              <div class="live_detail_image">
                <img
                  src="${liveApiData[i].디테일이미지}"
                  alt="${liveApiData[i].디테일alt}"
                />
              </div>
              <p class="live_detail_title">
                ${liveApiData[i].디테일타이틀}
              </p>
            </div>
          </div>
        </a>
      </div>
  `;
    } else {
      tag += `
        
      <div class="swiper-slide">
          <a href="#" class="live_slide_item">
            <div class="live_image">
              <img
              src="images/live_99.jpg"
              alt="방송대기"
              />   
            </div>
            <div class="unlive_lifo">
              <div class="unlive_image">
              <img src="images/live_logo.svg" alt="unlive_logo" />
              </div>
              <div class="unlive_title">
              방송준비중입니다.
              </div>
              <div class="unlive_more">
                <a href="#" class="unlive_more_bt">
                  편성표 바로가기
                </a>
              </div>
            </div>
          </a>
        </div>
      `;
    }

    html = html + tag;
  }

  console.log("만들어진 태그 : ", html);
  livePos.innerHTML = html;

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
});
