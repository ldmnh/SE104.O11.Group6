document.addEventListener("DOMContentLoaded", function () {
  const clickableItems = document.querySelectorAll(".clickable");
  clickableItems.forEach(function (item) {
    item.addEventListener("click", function () {
      if (this.classList.contains("active")) {
        this.classList.remove("active");
      } else {
        this.classList.add("active");
      }
    });
  });
});

//Khi nhấn vào thêm tài khoản ngân hàng mới:

const addBankAccountBtn = document.querySelector(".addBankAccountBtn");

const redirect2AccountPage = () => {
  window.location.href = "/account/card";
};

addBankAccountBtn.addEventListener("click", redirect2AccountPage);

//Khi nhấn vào thêm thẻ tín dụng mới:

const addCreditCardBtn = document.querySelector(".addCreditCardBtn");

const redirect2AccountPagee = () => {
  window.location.href = "/account/card";
};

addCreditCardBtn.addEventListener("click", redirect2AccountPagee);

// Nhan vao nut xoa
const deleteBtn = document.querySelectorAll(".delete-btn");
const modalCard = document.querySelector(".form__debit-detail-one");
deleteBtn.forEach((item) => {
  item.addEventListener("click", () => {
    modalCard.style.opacity = 0;
  });
});
