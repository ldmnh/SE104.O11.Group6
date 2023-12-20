const closePopupOtpDebit = document.querySelector(".otp__button--submit1--debit");
const modalOtpDebit = document.querySelector(".otp-debit-card");

closePopupOtpDebit.addEventListener("click", () => {
	modalOtpDebit.style.display = "none";
});

const closePopupOtp2Debit = document.querySelector(".otp__close-btn--debit");
closePopupOtp2Debit.addEventListener("click", () => {
	modalOtpDebit.style.display = "none";
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