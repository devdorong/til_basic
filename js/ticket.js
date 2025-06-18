window.addEventListener("load", function () {
  //데이터
  const ticketApiData = [
    {
      카테고리: "뮤지컬",
      데이터: [
        {
          링크: "#",
          이미지:
            "	https://ticketimage.interpark.com/Play/image/large/25/25006845_p.gif",
          alt: "등등곡",
          랭크: 1,
          타이틀: "뮤지컬 〈등등곡〉",
          장소: "예스24스테이지 1관",
          날짜: "2025.06.24 - 2025.09.14",
          옵션: [
            { 스타일: "red", 텍스트: "단독판매" },
            { 스타일: "blue", 텍스트: "좌석우위" },
          ],
        },
        {
          링크: "#",
          이미지:
            "https://ticketimage.interpark.com/Play/image/large/25/25004150_p.gif",
          alt: "사랑은 비를 타고 ",
          랭크: 2,
          타이틀: "뮤지컬 〈사랑은 비를 타고 〉 30주년 공연",
          장소: "백암아트홀",
          날짜: "2025.04.29 - 2025.07.13",
          옵션: [{ 스타일: "blue", 텍스트: "좌석우위" }],
          // [{스타일 : "red", 옵션: "단독판매"}, {스타일 : "blue"}, 옵션 : "좌석우위"]
        },
        {
          링크: "#",
          이미지:
            "https://ticketimage.interpark.com/Play/image/large/25/25007077_p.gif",
          alt: "플레임즈",
          랭크: 3,
          타이틀: "뮤지컬 〈플레임즈〉",
          장소: "SH아트홀",
          날짜: "2025.06.26 - 2025.09.14",
          옵션: [{ 스타일: "red", 텍스트: "단독판매" }],
        },
        {
          링크: "#",
          이미지:
            "https://ticketimage.interpark.com/Play/image/large/P0/P0004249_p.gif",
          alt: "팬텀",
          랭크: 4,
          타이틀: "뮤지컬 〈팬텀〉 10주년 기념 공연",
          장소: "세종문화회관 대극장",
          날짜: "2025.05.31 - 2025.08.11",
          옵션: [],
        },
        {
          링크: "#",
          이미지:
            "https://ticketimage.interpark.com/Play/image/large/25/25008211_p.gif",
          alt: "팬텀",
          랭크: 5,
          타이틀: "［NOL 스페셜 스테이지］ 뮤지컬 〈팬텀〉 10주년 기념 공연",
          장소: "세종문화회관 대극장",
          날짜: "2025.07.12 - 2025.07.17",
          옵션: [{ 스타일: "red", 텍스트: "단독판매" }],
        },
        {
          링크: "#",
          이미지:
            "https://ticketimage.interpark.com/Play/image/large/25/25005742_p.gif",
          alt: "머피",
          랭크: 6,
          타이틀: "뮤지컬 〈머피〉",
          장소: "예그린씨어터",
          날짜: "2025.06.03 - 2025.08.24",
          옵션: [],
        },
        {
          링크: "#",
          이미지:
            "https://ticketimage.interpark.com/Play/image/large/25/25005777_p.gif",
          alt: "위키드",
          랭크: 7,
          타이틀: "뮤지컬 〈위키드〉 내한 공연(WICKED The Musical)",
          장소: "블루스퀘어 신한카드홀",
          날짜: "2025.07.12 - 2025.10.26",
          옵션: [{ 스타일: "blue", 텍스트: "좌석우위" }],
        },
      ],
    },
    {
      카테고리: "콘서트",
      데이터: [],
    },
    {
      카테고리: "스포츠",
      데이터: [],
    },
    {
      카테고리: "전시/행사",
      데이터: [],
    },
    {
      카테고리: "클래식/무용",
      데이터: [],
    },
    {
      카테고리: "아동/가족",
      데이터: [],
    },
    {
      카테고리: "연극",
      데이터: [],
    },
    {
      카테고리: "레저/캠핑",
      데이터: [],
    },
  ];

  // 카테고리 html 태그 만들기
  let btHtml = `
  
  `;
  for (let i = 0; i < ticketApiData.length; i++) {
    const tag = `
    <li><button>${ticketApiData[i].카테고리}</button></li>
    `;
    btHtml = btHtml + tag;
  }
  // 카테고리 버튼 출력장소 및 출력하기
  const btPos = document.querySelector(".ticket_button_list");
  btPos.innerHTML = btHtml;

  // 포커스 스타일 추가하기
  // 아래 숫자가 포커스 된 카테고리의 순서 이다.
  let focusIndex = 0;
  const btList = document.querySelectorAll(".ticket_button_list li button");
  // focusIndex 번호의 button 태그에 클래스 추가
  btList[focusIndex].classList.add("ticket_focus");

  btList.forEach(function (item, index) {
    item.addEventListener("click", function () {
      focusIndex = index;
      resetBts();
      btList[focusIndex].classList.add("ticket_focus");

      // item.classList.add("ticket_focus");
    });
  });
  function resetBts() {
    btList.forEach(function (item) {
      item.classList.remove("ticket_focus");
      //     item.classList.remove("ticket_focus");
    });
  }

  //html 연동
  const ticketPos = document.querySelector(".sw_ticket .swiper-wrapper");

  // <span class="ticket_red">단독판매</span>
  // <span class="ticket_blue">좌석우위</span>
  let html = ``;

  html = ``;
  for (let i = 0; i < ticketApiData[focusIndex].데이터.length; i++) {
    let tag = `
      <div class="swiper-slide">
        <a href="${ticketApiData[focusIndex].데이터[i].링크}" class="ticket_slide_item">
          <div class="ticket_image">
            <img
              src="${ticketApiData[focusIndex].데이터[i].이미지}"
              alt="${ticketApiData[focusIndex].데이터[i].alt}"
            />
            <div class="ticket_rank">${ticketApiData[focusIndex].데이터[i].랭크}</div>
          </div>
          <div class="ticket_info">
            <p class="ticket_item_title">${ticketApiData[focusIndex].데이터[i].타이틀}
            </p>
            <p class="ticket_place">${ticketApiData[focusIndex].데이터[i].장소}
            </p>
            <p class="ticket_day">${ticketApiData[focusIndex].데이터[i].날짜}</p>
            <div class="ticket_option">
            `;

    for (let j = 0; j < ticketApiData[focusIndex].데이터[i].옵션.length; j++) {
      tag += ` <span class="ticket_${ticketApiData[focusIndex].데이터[i].옵션[j].스타일}">${ticketApiData[focusIndex].데이터[i].옵션[j].텍스트}</span>`;

      // if (ticketApiData[i].옵션[j] == "단독판매") {
      //   tag += ` <span class="ticket_red">${ticketApiData[i].옵션[j]}</span>`;
      // } else if (ticketApiData[i].옵션[j] == "좌석우위") {
      //   tag += `<span class="ticket_blue">${ticketApiData[i].옵션[j]}</span>`;
      // }
    }

    tag += `
            </div>
          </div>
        </a>
      </div>
      `;
    html = html + tag;
  }
  html += `
      <div class="swiper-slide">
        <div class = "poster_all">
          <a href="#">
            <button>
            <img src="images/btn_moreProduct.31dedf7e.svg" alt="" />
            </button>
            <span>전체보기</span>
          </a>
        </div>
      </div>
    
  `;
  console.log("만들어진 태그 : ", html);
  ticketPos.innerHTML = html;

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

  