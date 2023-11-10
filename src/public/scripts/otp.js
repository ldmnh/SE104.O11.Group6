const closePopupOtp = document.querySelector(".otp__button--submit1");
const modalOtp = document.querySelector(".modal-otp");

closePopupOtp.addEventListener("click", () => {
  modalOtp.style.display = "none";
});

const closePopupOtp2 = document.querySelector(".otp__close-btn");
closePopupOtp2.addEventListener("click", () => {
  modalOtp.style.display = "none";
});

const continueBtn = document.querySelector(".otp__button--submit2");
console.log(continueBtn, "hihi");
continueBtn.addEventListener("click", () => {
  window.location.href = "/account/card-fill";
});
