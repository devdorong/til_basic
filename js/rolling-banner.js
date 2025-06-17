// 파일 로딩 완료시 실행
window.addEventListener("load", function () {
  // 배너 데이터
  const bannerApiData = [
    { uid: 1, link: "#", image: "images/rolling/b1.png", title: "배너1" },
    { uid: 2, link: "#", image: "images/rolling/b2.png", title: "배너2" },
    { uid: 3, link: "#", image: "images/rolling/b3.png", title: "배너3" },
    { uid: 4, link: "#", image: "images/rolling/b4.png", title: "배너4" },
    { uid: 5, link: "#", image: "images/rolling/b5.png", title: "배너5" },
  ];

  // html 태그의 속성의 값 바꾸기

  // html 선택하기
  const bannerAnchorTag = document.querySelector(".sale");
  const bannerImgTag = document.querySelector(".sale img");

  // 롤링 작동하기
  //   console.log("링크 주소 : ", bannerAnchorTag.href);
  //   console.log("이미지 경로 : ", bannerImgTag.src);
  //   console.log("이미지 alt : ", bannerImgTag.alt);

  //   bannerAnchorTag.href = bannerApiData[i].link;
  //   bannerImgTag.src = bannerApiData[i].image;
  //   bannerImgTag.alt = bannerApiData[i].title;

  // 알고리즘
  let startIndex = 0;
  let totalCount = bannerApiData.length;

  // 타이머 만들기
  let bannerTimer = setInterval(function () {
    startIndex = startIndex + 1;
    if (startIndex >= totalCount) {
      startIndex = 0;
    }
    bannerAnchorTag.href = bannerApiData[startIndex].link;
    bannerImgTag.src = bannerApiData[startIndex].image;
    bannerImgTag.alt = bannerApiData[startIndex].title;
  }, 1000);

  // 마우스 커서 배너 제어하기
//   const sale = document.querySelector(".sale");
  // 세일 영역에 마우스가 걸친다면
  bannerAnchorTag.addEventListener("mouseenter", function () {
    clearInterval(bannerTimer);
  });
  // 세일 영역에 마우스가 빠져나간다면
  bannerAnchorTag.addEventListener("mouseleave", function () {
    
    clearInterval(bannerTimer)
    bannerTimer = setInterval(function () {
      startIndex = startIndex + 1;
      if (startIndex >= totalCount) {
        startIndex = 0;
      }
      bannerAnchorTag.href = bannerApiData[startIndex].link;
      bannerImgTag.src = bannerApiData[startIndex].image;
      bannerImgTag.alt = bannerApiData[startIndex].title;
    }, 1000);
  });
});
