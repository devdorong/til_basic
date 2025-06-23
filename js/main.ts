window.addEventListener("DOMContentLoaded", ():void => {
  //main
  const main: Element | null = document.querySelector(".main");

  window.addEventListener("scroll", ():void => {
    // 스크롤바의 최상단
    const scY:number = window.scrollY;
    if (scY > 68) {
      main!.classList.add("main_scroll");
    } else {
      main!.classList.remove("main_scroll");
    }
  });
});
