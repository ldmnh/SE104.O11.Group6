const closePopupOtp = document.querySelector(".otp__button--submit1");
const modalOtp = document.querySelector(".modal-otp");

closePopupOtp.addEventListener("click", () => {
    modalOtp.style.display = "none";
});

const closePopupOtp2 = document.querySelector(".otp__close-btn");
closePopupOtp2.addEventListener("click", () => {
    modalOtp.style.display = "none";
});

const currentPart = window.location.pathname;
const continueBtn = document.querySelector(".otp__button--submit2");
continueBtn.addEventListener("click", () => {
    let nextPart;
    if (currentPart.includes("/booking/payment")) {
        nextPart = "booking/success";
    } else if (currentPart === "/account/card") {
        nextPart = "account/card-fill";
    } else if (currentPart === "/account/card-fill") {
        nextPart = "account/card-fill";
    } else {
        nextPart = "fallback";
    }

    const nextURL = `/${nextPart}`;

    window.location.href = nextURL;
});
