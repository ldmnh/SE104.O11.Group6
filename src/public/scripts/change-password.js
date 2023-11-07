const profileBtn = document.querySelector(".profileBtn")
const historyBtn = document.querySelector(".historyBtn");
const accountPaymentBtn = document.querySelector(".accountPaymentBtn");

const redirect2profiletView = () => {
    window.location.href = "http://127.0.0.1:3000/account"
}
const redirect2HistoryView = () => {
    window.location.href = "http://127.0.0.1:3000/account/booking-history";
}

const redirect2accountPaymentView = () => {
    window.location.href = "http://127.0.0.1:3000/account/payment"
}

profileBtn.addEventListener("click", redirect2profiletView)
historyBtn.addEventListener("click", redirect2HistoryView);
accountPaymentBtn.addEventListener("click", redirect2accountPaymentView);

const logoutBtn = document.querySelector('.logoutBtn')

const redirect2LogOutView = () => {
    window.location.href = "http://127.0.0.1:3000/register"
}

logoutBtn.addEventListener("click", redirect2LogOutView)



// 
const change1 = document.querySelector('#change1');
const change2 = document.querySelector('#change2');

change2.style.display = "none";

const redirectChange1 = () => {
    change2.style.display = "none";
    change1.style.display = "block";
};

const redirectChange2 = () => {
    change2.style.display = "block";
    change1.style.display = "none";
}

const setBtn = document.querySelector('.setBtn');
setBtn.addEventListener("click", redirectChange2)

const cancelBtn = document.querySelector('.cancelBtn');
cancelBtn.addEventListener("click", redirectChange1)

//Mat khau cu (cho BE)

//Mat khau moi
const confirmBtn = document.querySelector('.confirm-button');
confirmBtn.addEventListener("click", () => {
  const newPassword = document.querySelector('.form__password').value;
  const isPasswordValid = newPassword.length >= 8 && /[a-zA-Z]/.test(newPassword) && /[0-9]/.test(newPassword);
  console.log('newpss',newPassword);
  console.log('log', isPasswordValid);
  const newConfirmPass = document.querySelector('.form__password-confirm').value;
  if (!isPasswordValid || newPassword !== newConfirmPass) {
        //Nếu thông tin không hợp lệ, hiển thị thông báo lỗi
        const errorMessage = document.getElementById('error-message');
        errorMessage.innerText = '* Thông tin không hợp lệ';
        errorMessage.style.color = 'red';
  }
  else {
        const errorMessage = document.getElementById('error-message');
        errorMessage.innerText = 'Thành công!';
        errorMessage.style.color = 'green';
    }
})

// Xac nhan mat khau


