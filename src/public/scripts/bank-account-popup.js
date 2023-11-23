const closeePopupBtn = document.querySelector(".closeIcon");
const modal = document.querySelector(".modal");

closeePopupBtn.addEventListener("click", () => {
	console.log("aaa");
	modal.style.display = "none";
});

const closeeBtn = document.querySelector(".form-button--submit1");
closeeBtn.addEventListener("click", () => {
	console.log("aaa");
	modal.style.display = "none";
});

//Khi nhấn nút hoàn thành
const doneClosePopup = document.querySelector(".form-button--submit2");
const doneBankOtp = document.querySelector(".otp-bank-card");
doneClosePopup.addEventListener("click", () => {
	modal.style.display = "none";
	doneBankOtp.style.display = "block";
});
