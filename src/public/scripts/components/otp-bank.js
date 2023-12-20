const closePopupOtpBank = document.querySelector(".otp__button--submit1--bank");
const modalOtpBank = document.querySelector(".otp-bank-card");

closePopupOtpBank.addEventListener("click", () => {
    modalOtpBank.style.display = "none";
});

const closePopupOtp2Bank = document.querySelector(".otp__close-btn--bank");
closePopupOtp2Bank.addEventListener("click", () => {
    modalOtpBank.style.display = "none";
});


const form_bank = document.querySelector('.account')

form_bank.addEventListener('submit', e => {
    e.preventDefault();
})

document.addEventListener('DOMContentLoaded', () => {
    const continueBtnBank = document.querySelector(".otp__button--submit2--bank");
    continueBtnBank.addEventListener("click", () => {
        form_bank.submit();
    });
})
