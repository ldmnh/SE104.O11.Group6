//Popup
const modalBtns = document.querySelectorAll(".logout-btn");
const modals = document.querySelectorAll(".popup");
const closeBtns = document.querySelectorAll(".close-btn");
const cancelBtns = document.querySelectorAll(".btn-cancel");

modalBtns.forEach((btn, index) => {
  btn.onclick = function () {
    modals[index].style.display = "block";
  }
});

// Đóng popup khi chọn dấu x
closeBtns.forEach((closeBtn, index) => {
  closeBtn.onclick = function () {
    modals[index].style.display = "none";
  }
});

// Đóng popup khi chọn nút hủy
cancelBtns.forEach((cancelBtn, index) => {
  cancelBtn.onclick = function () {
    modals[index].style.display = "none";
  }
});

// Đóng popup khi nhấp chuột vào bất kỳ khu vực nào trên màn hình
window.onclick = function (e) {
  modals.forEach((modal, index) => {
    if (e.target == modal) {
      modal.style.display = "none";
    }
  });
}

// Chuyển về trang đăng nhập
const logoutBtn = document.querySelector(".btn-logout");

const redirect2LogOutView = () => {
  window.location.href = "/auth/login";
};

logoutBtn.addEventListener("click", redirect2LogOutView);


const profileBtn = document.querySelector(".profile-btn");
const historyBtn = document.querySelector(".history-btn");
const changePasswordBtn = document.querySelector(".change-password-btn");

const redirect2profiletView = () => {
  window.location.href = "/account/information";
};
const redirect2HistoryView = () => {
  window.location.href = "/account/history";
};
const redirect2changePasswordView = () => {
  window.location.href = "/account/change-password";
};
profileBtn.addEventListener("click", redirect2profiletView);
historyBtn.addEventListener("click", redirect2HistoryView);
changePasswordBtn.addEventListener("click", redirect2changePasswordView);
addCreditAccountBtn.addEventListener("click", onClickAddCreditAccountBtn);

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

