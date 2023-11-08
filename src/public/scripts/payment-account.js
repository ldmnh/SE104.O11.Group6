const profileBtn = document.querySelector(".profile-btn");
const historyBtn = document.querySelector(".history-btn");
const changePasswordBtn = document.querySelector(".change-password-btn");

const redirect2profiletView = () => {
  window.location.href = "http://127.0.0.1:3000/account";
};
const redirect2HistoryView = () => {
  window.location.href = "http://127.0.0.1:3000/account/booking-history";
};
const redirect2changePasswordView = () => {
  window.location.href = "http://127.0.0.1:3000/account/change-password";
};
profileBtn.addEventListener("click", redirect2profiletView);
historyBtn.addEventListener("click", redirect2HistoryView);
changePasswordBtn.addEventListener("click", redirect2changePasswordView);

const logoutBtn = document.querySelector(".logout-btn");

const redirect2LogOutView = () => {
  window.location.href = "http://127.0.0.1:3000/register";
};

logoutBtn.addEventListener("click", redirect2LogOutView);

//
const addBankAccountpopup = document.querySelector(".modal");
const addBankAccountBtn = document.querySelector(".add-bank-account-btn");

const onClickAddBankAccountBtn = () => {
  addBankAccountpopup.style.display = "block";
};
addBankAccountBtn.addEventListener("click", onClickAddBankAccountBtn);

//
const addCreditAccountpopup = document.querySelector(".modal2");
const addCreditAccountBtn = document.querySelector(".add-credit-account-btn");
const onClickAddCreditAccountBtn = () => {
  addCreditAccountpopup.style.display = "block";
};
addCreditAccountBtn.addEventListener("click", onClickAddCreditAccountBtn);
