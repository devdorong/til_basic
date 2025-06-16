console.log("header.js 코드 실행");


// html 의 태그구조를 모두 읽어들였다면 그때 찾아라.
// const    : 방하나 주기 (웹브라우저에 보관하겠다.)
// ↳ (불변, 상수 = 변하지 않는 값)
// let      : 방하나 주기 (웹브라우저에 보관하겠다.)
// ↳ (변수)
// var      : 방하나 주기 (웹브라우저에 보관하겠다.)
// ↳ (변수) , 사용안함 주의!
// const ~~~: 별명 추가
// ↳ 변수명  : 명사, 영어(소문자)
// = document.~~~()     : =를 기준으로 오른쪽에 있는것을 보관
// console.log(이름표)   : 이름표 있는것을 사용
window.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".header");
  //상단 영역
  const headerTop = document.querySelector(".header_top");
  // 로고
  const logo = document.querySelector(".logo");
  // 제품검색
  const search = document.querySelector(".search");
  // 세일제품
  const sale = document.querySelector(".sale");
  // 링크사이트목록
  const linkSite = document.querySelector(".link_site");
  // 메인메뉴 a 태그들 : 여러개
  const mainMenuA = document.querySelectorAll(".main_menu li a");
  // 멤버메뉴 a 태그들 : 여러개
  const memberMenuA = document.querySelectorAll(".member_menu li a");
  // 모바일 메뉴 참조
  const mobileHeader = document.querySelector(".mobile_header");


  const focusName = "focus";
  const lis = document.querySelectorAll(".main_menu li a");
  // 태그 등의 DOM 들을 모아둔 배열을 다룰때 추천 반복 문법
  lis.forEach(function (item) {
    item.addEventListener("click", function () {
      // 모든 버튼에서 tour_focus 클래스 제거
      removeFocus();
      // 클릭된 버튼은 tour_focus 클래스 추가
      item.classList.add("focus");
    });
  });

  // 버튼에서 포커스 제거하는 기능
  function removeFocus() {
    lis.forEach(function(item) {
        item.classList.remove(focusName);
    })
  }
  
  // 웹브라우저의 스크롤을 체크하겠다.
  window.addEventListener("scroll", function () {
    // 스크롤바의 최상단
    const scY = window.scrollY;
    if (scY > 70) {
        header.classList.add("header_fixed");
      headerTop.classList.add("header_top_scroll");
    //   console.log("스크롤되었다.");
      logo.classList.add("logo_hide");
      sale.classList.add("sale_hide");
      linkSite.classList.add("link_site_hide");
      search.classList.add("search_scroll");
      // 메인메뉴 class 추가
       mainMenuA.forEach(function (item) {
         item.classList.add("height_62");
       });
       // 멤버메뉴 class 추가
       memberMenuA.forEach(function (item) {
         item.classList.add("height_62");
       });
       mobileHeader.classList.add("mobile_scroll_line");
    } else {
        header.classList.remove("header_fixed");
      headerTop.classList.remove("header_top_scroll");
    //   console.log("스크롤 최상단!!!");
      logo.classList.remove("logo_hide");
      sale.classList.remove("sale_hide");
      linkSite.classList.remove("link_site_hide");
      search.classList.remove("search_scroll");
      
       mainMenuA.forEach(function (item) {
         item.classList.remove("height_62");
       });
       memberMenuA.forEach(function (item) {
         item.classList.remove("height_62");
       });
       mobileHeader.classList.remove("mobile_scroll_line");

    }
  });
});

// const nickname (X)
// const nickName (낙타표시법, 카멜케이스)
// const NickName (파스칼케이스)
// const NICKNAME (객체변수명)
// const nick_name (케밥케이스)
