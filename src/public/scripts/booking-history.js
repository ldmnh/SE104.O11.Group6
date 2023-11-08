const profileBtn = document.querySelector(".profile-btn");
const accountPaymentBtn = document.querySelector(".account-payment-btn");
const changePasswordBtn = document.querySelector(".change-password-btn");

const redirect2profiletView = () => {
  window.location.href = "http://127.0.0.1:3000/account";
};

const redirect2accountPaymentView = () => {
  window.location.href = "http://127.0.0.1:3000/account/payment";
};

const redirect2changePasswordView = () => {
  window.location.href = "http://127.0.0.1:3000/account/change-password";
};
profileBtn.addEventListener("click", redirect2profiletView);
accountPaymentBtn.addEventListener("click", redirect2accountPaymentView);
changePasswordBtn.addEventListener("click", redirect2changePasswordView);

const logoutBtn = document.querySelector(".logout-btn");

const redirect2LogOutView = () => {
  window.location.href = "http://127.0.0.1:3000/register";
};

logoutBtn.addEventListener("click", redirect2LogOutView);

// Lay nut danh gia va nut popup
const reviewpopup = document.querySelector(".modal");
const reviewBtns = document.querySelectorAll(".review-btn");

const onClickReviewBtn = () => {
  reviewpopup.style.display = "block";
};

reviewBtns.forEach((reviewBtn) => {
  reviewBtn.addEventListener("click", onClickReviewBtn);
});

//Khi nhấn vào nút xem chi tiết: detail-btn
const detailBtns = document.querySelectorAll(".detail-btn");
const redirect2OrderConfirmView = () => {
  window.location.href = "http://127.0.0.1:3000/order-confirm";
};
detailBtns.forEach((detailBtn) => {
  detailBtn.addEventListener("click", redirect2OrderConfirmView);
});
