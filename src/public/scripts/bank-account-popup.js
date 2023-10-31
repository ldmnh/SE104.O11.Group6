   
const closePopupBtn = document.querySelector(".closeIcon");
const modal = document.querySelector(".modal");

closePopupBtn.addEventListener("click", () => {
  console.log("aaa");
  modal.style.display = "none";
})

const closeBtn = document.querySelector(".closeBtn");
closeBtn.addEventListener("click", () => {
  console.log("aaa");
  modal.style.display = "none";
})

