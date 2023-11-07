const profileBtn = document.querySelector(".profileBtn")
const accountPaymentBtn = document.querySelector(".accountPaymentBtn");
const changePasswordBtn = document.querySelector(".changePasswordBtn");

const redirect2profiletView = () => {
    window.location.href = "http://127.0.0.1:3000/account"
}

const redirect2accountPaymentView = () => {
    window.location.href = "http://127.0.0.1:3000/account/payment"
}

const redirect2changePasswordView = () => {
    window.location.href = "http://127.0.0.1:3000/account/change-password"
}
profileBtn.addEventListener("click", redirect2profiletView)
accountPaymentBtn.addEventListener("click", redirect2accountPaymentView);
changePasswordBtn.addEventListener("click", redirect2changePasswordView);

const logoutBtn = document.querySelector('.logoutBtn');

const redirect2LogOutView = () => {
    window.location.href = "http://127.0.0.1:3000/register"
};

logoutBtn.addEventListener("click", redirect2LogOutView);

// Lay nut danh gia va nut popup
const reviewpopup = document.querySelector('.modal');
const reviewBtns = document.querySelectorAll('.review-btn');

const onClickReviewBtn = () => {
    reviewpopup.style.display = 'block';
};

reviewBtns.forEach((reviewBtn) => {
    reviewBtn.addEventListener('click', onClickReviewBtn);
});

//Khi nhấn vào nút xem chi tiết: detail-btn
const detailBtns = document.querySelectorAll('.detail-btn');
const redirect2OrderConfirmView = () => {
    window.location.href = "http://127.0.0.1:3000/order-confirm";
}
detailBtns.forEach((detailBtn) => {
    detailBtn.addEventListener('click', redirect2OrderConfirmView);
})