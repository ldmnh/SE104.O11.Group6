const closeePopupBtn = document.querySelector(".closeIcon");
const modal = document.querySelector(".modal");

closeePopupBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

const closeeBtn = document.querySelector(".form-button--submit1");
closeeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

const doneBankOtp = document.querySelector(".otp-bank-card");

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('account-js');

    form.addEventListener('submit', function (event) {
        event.preventDefault()
        // Lấy giá trị của các input
        const bankName = form.elements['bank_name'].value;
        const bankBranch = form.elements['bank_branch'].value;
        const bankNum = form.elements['bank_num'].value;
        const bankNamePers = form.elements['bank_name_pers'].value;

        // Kiểm tra xem có input nào có giá trị rỗng không
        if (!bankName || bankName === 'Chọn ngân hàng' || !bankBranch || !bankNum || !bankNamePers) {
            form.elements['bank_name'].classList.add("is-invalid")
            form.elements['bank_branch'].classList.add("is-invalid")
            form.elements['bank_num'].classList.add("is-invalid")
            form.elements['bank_name_pers'].classList.add("is-invalid")

            form.elements['bank_name'].addEventListener("input", function () {
                this.classList.remove('is-invalid');
            });
        
            form.elements['bank_branch'].addEventListener("input", function () {
                this.classList.remove('is-invalid');
            });
        
            form.elements['bank_num'].addEventListener("input", function () {
                this.classList.remove('is-invalid');
            });
        
            form.elements['bank_name_pers'].addEventListener("input", function () {
                this.classList.remove('is-invalid');
            });
        }
        else {
            modal.style.display = "none";
            doneBankOtp.style.display = "block";
            const otpForm = document.querySelector('.otp__card');
            form.addEventListener('submit', e => {
                e.preventDefault();
            })


            otpForm.addEventListener('submit', function (e) {
                e.preventDefault()
                // Lấy ra tất cả các input trong form
                const otpInputs = otpForm.querySelectorAll('.otp__card-input input');

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
