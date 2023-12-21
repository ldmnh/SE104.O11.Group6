const overlay = document.querySelector(".overlay");
const listAccount = document.querySelector(".list-account");
const btn = document.querySelector("#flexRadioDefault2");

btn.addEventListener("click", () => {
    listAccount.style.display = "block";
    overlay.style.display = "block";
});
overlay.addEventListener("click", () => {
    listAccount.style.display = "none";
    overlay.style.display = "none";
});
//
const overlay2 = document.querySelector(".overlay2");
const listAccount2 = document.querySelector(".list-account2");
const btn2 = document.querySelector("#flexRadioDefault3");
btn2.addEventListener("click", () => {
    listAccount2.style.display = "block";
    overlay2.style.display = "block";
});
overlay2.addEventListener("click", () => {
    listAccount2.style.display = "none";
    overlay2.style.display = "none";
});
document.addEventListener("DOMContentLoaded", function () {
    const clickableItems = document.querySelectorAll(".clickable");

    clickableItems.forEach(function (item) {
        item.addEventListener("click", function () {
            // Remove "active" class from all clickable items
            clickableItems.forEach(function (item) {
                item.classList.remove("active");
            });

            // Add "active" class to the clicked item
            this.classList.add("active");
        });
    });
});

// Khi nhấn vào thêm tài khoản ngân hàng mới:
const addBankAccountBtn = document.querySelector(".addBankAccountBtn");
const redirect2AccountPage = () => {
    window.location.href = "/account/card";
};

addBankAccountBtn.addEventListener("click", redirect2AccountPage);

// Khi nhấn vào thêm thẻ tín dụng mới:
const addCreditCardBtn = document.querySelector(".addCreditCardBtn");
const redirect2AccountPagee = () => {
    window.location.href = "/account/card";
};

addCreditCardBtn.addEventListener("click", redirect2AccountPagee);

// Khi nhấn đổi lựa chọn của bạn:
const changeChoiceClick = document.querySelector(".change-choice");
changeChoiceClick.addEventListener("click", () => {
    window.location.href = "/search/detail";
});

// Khi nhấn chính sách bảo mật
const privacyPolicys = document.querySelectorAll(".privacy-policy");
privacyPolicys.forEach((privacyPolicy) => {
    privacyPolicy.addEventListener("click", () => {
        window.location.href = "/privacy-policy";
    });
});

// Khi nhấn điều khoản
const termUses = document.querySelectorAll(".term-use");
termUses.forEach((termUse) => {
    termUse.addEventListener("click", () => {
        window.location.href = "/terms-of-use";
    });
});

// Khi nhấn Kiểm tra lại thông tin
const checkInfo = document.querySelector(".check-info-booking");
checkInfo.addEventListener("click", () => {
    window.location.href = "/booking/information";
});
