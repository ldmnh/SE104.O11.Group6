const closePopupOtpDebit = document.querySelector(".otp__button--submit1--debit");
const modalOtpDebit = document.querySelector(".otp-debit-card");

closePopupOtpDebit.addEventListener("click", () => {
	modalOtpDebit.style.display = "none";
});

const closePopupOtp2Debit = document.querySelector(".otp__close-btn--debit");
closePopupOtp2Debit.addEventListener("click", () => {
	modalOtpDebit.style.display = "none";
});

const form_debit = document.querySelector('.credit')

form_debit.addEventListener('submit', e => {
	//Ngăn chặn việc gửi form nếu có bất kỳ trường nào không hợp lệ
	e.preventDefault();
})

document.addEventListener('DOMContentLoaded', () => {
	const continueBtnDebit = document.querySelector(".otp__button--submit2--debit");
	continueBtnDebit.addEventListener("click", () => {
		form_debit.submit();
	});
})
