window.addEventListener("DOMContentLoaded", function () {
    const closeBt = document.querySelector(".popup_close");
    const popup = document.querySelector(".popup");

    closeBt.addEventListener("click", function() {
        
        popup.style.display = "none"
    })
});

// window.addEventListener("DOMContentLoaded", function () {
//   const closeBt = this.document.querySelector(".popup_close");
//   const popup = this.document.querySelector(".popup");

//   closeBt.addEventListener("click", function () {
//     popup.style.display = "none";
//   });
// });