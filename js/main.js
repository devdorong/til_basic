window.addEventListener("DOMContentLoaded",  () => {
  //main
  const main = document.querySelector(".main");

  window.addEventListener("scroll",  () => {
    // 스크롤바의 최상단
    const scY = window.scrollY;
    if (scY > 68) {
      main.classList.add("main_scroll");
    } else {
      main.classList.remove("main_scroll");
    }
  });
});
