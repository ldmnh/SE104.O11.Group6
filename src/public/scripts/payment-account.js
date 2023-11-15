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

const logoutBtn = document.querySelector(".logout-btn");

const redirect2LogOutView = () => {
	window.location.href = "/auth/login";
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

// Nhan vao nut xoa
const deleteBtn = document.querySelectorAll(".delete-btn");
deleteBtn.forEach((item) => {
	item.addEventListener("click", () => {
		const parentForm = item.closest(".form__debit-detail-one");
		parentForm.classList.add("hidden");
	});
});

//Doi trang thai:
const defaultBtns = document.querySelectorAll(".default-btn");

defaultBtns.forEach((btn) => {
	btn.addEventListener("click", () => {
		// Chuyển tất cả các nút về trạng thái "Thiết lập mặc định"
		defaultBtns.forEach((otherBtn) => {
			otherBtn.classList.remove("filled-default");
			otherBtn.classList.add("unfilled-default");
			otherBtn.textContent = "Thiết lập mặc định";
		});

		// Chuyển nút được nhấn thành trạng thái "Mặc định"
		btn.classList.remove("unfilled-default");
		btn.classList.add("filled-default");
		btn.textContent = "Mặc định";
	});
});