const profileBtn = document.querySelector(".profile-btn");
const historyBtn = document.querySelector(".history-btn");
const accountPaymentBtn = document.querySelector(".account-payment-btn");

const redirect2profiletView = () => {
  window.location.href = "/account/information";
};
const redirect2HistoryView = () => {
  window.location.href = "/account/history";
};

const redirect2accountPaymentView = () => {
  window.location.href = "/account/card";
};

profileBtn.addEventListener("click", redirect2profiletView);
historyBtn.addEventListener("click", redirect2HistoryView);
accountPaymentBtn.addEventListener("click", redirect2accountPaymentView);

const logoutBtn = document.querySelector(".logout-btn");

const redirect2LogOutView = () => {
  window.location.href = "/auth/login";
};

logoutBtn.addEventListener("click", redirect2LogOutView);

//
const change1 = document.querySelector("#change1");
const change2 = document.querySelector("#change2");

change2.style.display = "none";

const redirectChange1 = () => {
  change2.style.display = "none";
  change1.style.display = "block";
};

const redirectChange2 = () => {
  change2.style.display = "block";
  change1.style.display = "none";
};

const setBtn = document.querySelector(".set-btn");
setBtn.addEventListener("click", redirectChange2);

const cancelBtn = document.querySelector(".cancel-btn");
cancelBtn.addEventListener("click", redirectChange1);

//Mat khau cu (cho BE)

//Mat khau moi
const confirmBtn = document.querySelector(".confirm-button");
const modalSuccessChangePassword = document.querySelector(".modal-success");

confirmBtn.addEventListener("click", () => {
  const newPassword = document.querySelector(".form__password").value;
  const isPasswordValid =
    newPassword.length >= 8 &&
    /[a-zA-Z]/.test(newPassword) &&
    /[0-9]/.test(newPassword);
  console.log("newpss", newPassword);
  console.log("log", isPasswordValid);
  const newConfirmPass = document.querySelector(
    ".form__password-confirm"
  ).value;
  if (!isPasswordValid || newPassword !== newConfirmPass) {
    //Nếu thông tin không hợp lệ, hiển thị thông báo lỗi
    const errorMessage = document.getElementById("error-message");
    errorMessage.innerText = "*";
    errorMessage.style.color = "red";
  } else {
    const errorMessage = document.getElementById("error-message");
    errorMessage.innerText = "Thành công!";
    errorMessage.style.color = "green";
    modalSuccessChangePassword.style.display = "block";
  }
});

// Xac nhan mat khau
const confirmChangePassword = document.querySelector(
  ".success-popup__close-btn"
);

closePopupBtn.addEventListener("click", () => {
  modalSuccess.style.display = "none";
});
