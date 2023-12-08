const addBankAccountpopup = document.querySelector(".modal");
const onClickAddBankAccountBtn = () => {
    addBankAccountpopup.style.display = "block";
};

const addBankAccountBtn = document.querySelector(".add-bank-account-btn");
addBankAccountBtn.addEventListener("click", onClickAddBankAccountBtn);

// 
const addCreditAccountpopup = document.querySelector(".modal2");
const onClickAddCreditAccountBtn = () => {
    addCreditAccountpopup.style.display = "block";
};

const addCreditAccountBtn = document.querySelector(".add-credit-account-btn");
addCreditAccountBtn.addEventListener("click", onClickAddCreditAccountBtn);

// Nhan vao nut xoa
const deleteBtn = document.querySelectorAll(".delete-btn");
deleteBtn.forEach((item) => {
    item.addEventListener("click", () => {
        const parentForm = item.closest(".form__debit-detail-one");
        parentForm.classList.add("hidden");
    });
});

// Nhan vao nut xoa debit
const formDebits = document.querySelectorAll('.form-delete-debit')
formDebits.forEach((f, index) => {
    f.addEventListener('submit', e => {
        e.preventDefault();
    })
})

const deleteBtnDebit = document.querySelectorAll(".delete-debit");
deleteBtnDebit.forEach((item, index) => {
    item.addEventListener("click", () => {
        const modalOtpDelDebit = document.querySelector(".del-debit-card");
        modalOtpDelDebit.style.display = "block";

        const closePopupOtpDelDebit = document.querySelector(".otp__button--submit1--del-debit");
        closePopupOtpDelDebit.addEventListener("click", () => {
            modalOtpDelDebit.style.display = "none";
        });

        const closePopupOtp2DelDebit = document.querySelector(".otp__close-btn--del-debit");
        closePopupOtp2DelDebit.addEventListener("click", () => {
            modalOtpDelDebit.style.display = "none";
        });
        const conformBtnDebit = document.querySelector(".otp__button--submit2--del-debit");
        conformBtnDebit.addEventListener("click", () => {
            formDebits[index].submit();
        });
    });
});

// Nhan vao nut xoa bank
const formBanks = document.querySelectorAll('.form-delete-bank')
formBanks.forEach((f, index) => {
    f.addEventListener('submit', e => {
        e.preventDefault();
    })
})

const deleteBtnBank = document.querySelectorAll(".delete-bank");
deleteBtnBank.forEach((item, index) => {
    item.addEventListener("click", () => {
        const modalOtpDelBank = document.querySelector(".del-bank-card");
        modalOtpDelBank.style.display = "block";

        const closePopupOtpDelBank = document.querySelector(".otp__button--submit1--del-bank");
        closePopupOtpDelBank.addEventListener("click", () => {
            modalOtpDelBank.style.display = "none";
        });

        const closePopupOtp2DelBank = document.querySelector(".otp__close-btn--del-bank");
        closePopupOtp2DelBank.addEventListener("click", () => {
            modalOtpDelBank.style.display = "none";
        });

        const conformBtnBank = document.querySelector(".otp__button--submit2--del-bank");
        conformBtnBank.addEventListener("click", () => {
            formBanks[index].submit();
        });
    });
});

// Doi trang thai bank:
const defaultBtnBanks = document.querySelectorAll(".default-btn-bank");
defaultBtnBanks.forEach((btn) => {
    btn.addEventListener("click", () => {
        // Chuyển tất cả các nút về trạng thái "Thiết lập mặc định"
        defaultBtnBanks.forEach((otherBtn) => {
            otherBtn.classList.remove("filled-default");
            otherBtn.classList.add("unfilled-default");
            otherBtn.textContent = "Thiết lập mặc định";
        });

        // Chuyển nút được nhấn thành trạng thái "Mặc định"
        btn.classList.remove("unfilled-default");
        btn.classList.add("filled-default");
        btn.textContent = "Mặc định";
    });
});

//Doi trang thai debit:
const defaultBtnDebits = document.querySelectorAll(".default-btn-debit");
defaultBtnDebits.forEach((btn) => {
    btn.addEventListener("click", () => {
        // Chuyển tất cả các nút về trạng thái "Thiết lập mặc định"
        defaultBtnDebits.forEach((otherBtn) => {
            otherBtn.classList.remove("filled-default");
            otherBtn.classList.add("unfilled-default");
            otherBtn.textContent = "Thiết lập mặc định";
        });

        // Chuyển nút được nhấn thành trạng thái "Mặc định"
        btn.classList.remove("unfilled-default");
        btn.classList.add("filled-default");
        btn.textContent = "Mặc định";
    });
});