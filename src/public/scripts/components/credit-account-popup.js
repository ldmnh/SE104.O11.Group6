const closePopupBtn2 = document.querySelector(".closeIcon2");
const modal2 = document.querySelector(".modal2");

closePopupBtn2.addEventListener("click", () => {
    modal2.style.display = "none";
});

const closeBtn2 = document.querySelector(".credit-button--submit1");
closeBtn2.addEventListener("click", () => {
    modal2.style.display = "none";
});

const doneOtp = document.querySelector(".otp-bank-card");
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('credit-js');

    form.addEventListener('submit', function (event) {
        event.preventDefault()
        // Lấy giá trị của các input
        const debitNum = form.elements['debit_num'].value;
        const endDate = form.elements['debit_end_date'].value;
        const ccv = form.elements['debit_CCV'].value;
        const debitName = form.elements['debit_name'].value;
        const debitAddress = form.elements['debit_address'].value;
        const debitPostal = form.elements['debit_postal'].value;

        // Kiểm tra xem có input nào có giá trị rỗng không
        if (!debitNum || endDate === '' || !ccv || !debitName || !debitAddress || !debitPostal) {
            form.elements['debit_num'].classList.add("is-invalid");
            form.elements['debit_end_date'].classList.add("is-invalid");
            form.elements['debit_CCV'].classList.add("is-invalid");
            form.elements['debit_name'].classList.add("is-invalid");
            form.elements['debit_address'].classList.add("is-invalid");
            form.elements['debit_postal'].classList.add("is-invalid");

            form.elements['debit_num'].addEventListener("input", function () {
                this.classList.remove('is-invalid');
            });

            form.elements['debit_end_date'].addEventListener("input", function () {
                this.classList.remove('is-invalid');
            });

            form.elements['debit_CCV'].addEventListener("input", function () {
                this.classList.remove('is-invalid');
            });

            form.elements['debit_name'].addEventListener("input", function () {
                this.classList.remove('is-invalid');
            });

            form.elements['debit_address'].addEventListener("input", function () {
                this.classList.remove('is-invalid');
            });

            form.elements['debit_postal'].addEventListener("input", function () {
                this.classList.remove('is-invalid');
            });
        }
        else {
            modal2.style.display = "none";
            doneOtp.style.display = "block";
            const otpFormCredit = document.querySelector('.otp__card-credit');
            form.addEventListener('submit', e => {
                e.preventDefault();
            })


            otpFormCredit.addEventListener('submit', function (e) {
                e.preventDefault()
                // Lấy ra tất cả các input trong form
                const otpInputs = otpFormCredit.querySelectorAll('.otp__card-credit input');

                let isAllValid = true;
                // Kiểm tra từng input
                for (let i = 0; i < otpInputs.length; i++) {
                    const inputValue = otpInputs[i].value;

                    // Kiểm tra nếu input rỗng 
                    if (inputValue == "") {
                        isAllValid = false
                        otpInputs[i].classList.add('is-invalid');
                    }
                }

                if (isAllValid) {
                    form.submit()
                }

            });
        }
    });
});