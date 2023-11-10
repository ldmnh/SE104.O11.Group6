console.log("aaaaaa");

const editView = document.getElementById("edit-profile");
const defaultView = document.getElementById("view-profile");

const editBtn = document.querySelector(".form--submit2-default");
const cancelBtn = document.querySelector(".form--submit1");
const historyBtn = document.querySelector(".history-btn");
const accountPaymentBtn = document.querySelector(".account-payment-btn");
const changePasswordBtn = document.querySelector(".change-password-btn");

editView.style.display = "none";

const redirect2EditView = () => {
  defaultView.style.display = "none";
  editView.style.display = "block";
};

const redirect2EdefaultView = () => {
  defaultView.style.display = "block";
  editView.style.display = "none";
};
const redirect2HistoryView = () => {
  window.location.href = "http://127.0.0.1:3000/account/history";
};

const redirect2accountPaymentView = () => {
  window.location.href = "http://127.0.0.1:3000/account/card";
};

const redirect2changePasswordView = () => {
  window.location.href = "http://127.0.0.1:3000/account/change-password";
};

historyBtn.addEventListener("click", redirect2HistoryView);
accountPaymentBtn.addEventListener("click", redirect2accountPaymentView);
changePasswordBtn.addEventListener("click", redirect2changePasswordView);

cancelBtn.addEventListener("click", redirect2EdefaultView);
editBtn.addEventListener("click", redirect2EditView);

const logoutBtn = document.querySelector(".logout-btn");

const redirect2LogOutView = () => {
  window.location.href = "http://127.0.0.1:3000/auth/register";
};

logoutBtn.addEventListener("click", redirect2LogOutView);

//Khi người dùng nhấn Lưu
const successPopup = document.querySelector(".modal-success");
const saveBtn = document.querySelector("#save-btn");

const redirect2SavePopupView = () => {
  successPopup.style.display = "block";
};

saveBtn.addEventListener("click", redirect2SavePopupView);
