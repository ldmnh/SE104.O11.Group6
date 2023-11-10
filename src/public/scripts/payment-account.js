const profileBtn = document.querySelector(".profileBtn")
const historyBtn = document.querySelector(".historyBtn");
const changePasswordBtn = document.querySelector(".changePasswordBtn");

const redirect2profiletView = () => {
    window.location.href = "/account/information"
}
const redirect2HistoryView = () => {
    window.location.href = "/account/history";
}
const redirect2changePasswordView = () => {
    window.location.href = "/account/change-password"
}
profileBtn.addEventListener("click", redirect2profiletView)
historyBtn.addEventListener("click", redirect2HistoryView);
changePasswordBtn.addEventListener("click", redirect2changePasswordView);

const logoutBtn = document.querySelector('.logoutBtn')

const redirect2LogOutView = () => {
    window.location.href = "/auth/logout"
}

logoutBtn.addEventListener("click", redirect2LogOutView)


//
const addBankAccountpopup = document.querySelector('.modal');
const addBankAccountBtn = document.querySelector('.addBankAccountBtn');

const onClickAddBankAccountBtn = () => {
    addBankAccountpopup.style.display = 'block';
};
addBankAccountBtn.addEventListener('click', onClickAddBankAccountBtn);

//
const addCreditAccountpopup = document.querySelector('.modal2');
const addCreditAccountBtn = document.querySelector('.addCreditAccountBtn');
const onClickAddCreditAccountBtn = () => {
    addCreditAccountpopup.style.display = 'block';
};
addCreditAccountBtn.addEventListener('click', onClickAddCreditAccountBtn);
