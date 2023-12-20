const closePopupOtpBank = document.querySelector(".otp__button--submit1--bank");
const modalOtpBank = document.querySelector(".otp-bank-card");

closePopupOtpBank.addEventListener("click", () => {
    modalOtpBank.style.display = "none";
});

const closePopupOtp2Bank = document.querySelector(".otp__close-btn--bank");
closePopupOtp2Bank.addEventListener("click", () => {
    modalOtpBank.style.display = "none";
});

document.addEventListener('DOMContentLoaded', function () {
    const otpInputs = document.querySelectorAll('.otp__card-text');

    otpInputs.forEach(function (input, index) {
        input.addEventListener('input', function () {
            this.classList.remove('is-invalid');

            if (this.value !== '' && index < otpInputs.length - 1) {
                otpInputs[index + 1].focus();
            } else {
                this.classList.add('is-invalid');
            }
        });

        input.addEventListener('keydown', function (e) {
            if (e.key === 'Backspace' && index > 0 && this.value === '') {
                otpInputs[index - 1].focus();
            }
        });
    });
});
