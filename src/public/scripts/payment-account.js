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


// Nhan vao nut xoa debit

const deleteBtnDebit = document.querySelectorAll(".delete-debit");
const formDebits = document.querySelectorAll('.form-delete-debit')
formDebits.forEach((f, index) => {
	f.addEventListener('submit', e => {
		e.preventDefault();
	})
})
deleteBtnDebit.forEach((item, index) => {
	item.addEventListener("click", () => {
		const closePopupOtpDelDebit = document.querySelector(".otp__button--submit1--del-debit");
		const modalOtpDelDebit = document.querySelector(".del-debit-card");
		modalOtpDelDebit.style.display = "block";

		closePopupOtpDelDebit.addEventListener("click", () => {
			modalOtpDelDebit.style.display = "none";
		});

		const closePopupOtp2DelDebit = document.querySelector(".otp__close-btn--del-debit");
		closePopupOtp2DelDebit.addEventListener("click", () => {
			modalOtpDelDebit.style.display = "none";
		});
		const conformBtnDebit = document.querySelector(".otp__button--submit2--del-debit");
		conformBtnDebit.addEventListener("click", () => {
			formDebits[index].submit();
		});

	});
});



// Nhan vao nut xoa bank
const deleteBtnBank = document.querySelectorAll(".delete-bank");
const formBanks = document.querySelectorAll('.form-delete-bank')
formBanks.forEach((f, index) => {
	f.addEventListener('submit', e => {
		e.preventDefault();
	})
})
deleteBtnBank.forEach((item, index) => {
	item.addEventListener("click", () => {
		const closePopupOtpDelBank = document.querySelector(".otp__button--submit1--del-bank");
		const modalOtpDelBank = document.querySelector(".del-bank-card");
		modalOtpDelBank.style.display = "block";

		closePopupOtpDelBank.addEventListener("click", () => {
			modalOtpDelBank.style.display = "none";
		});

		const closePopupOtp2DelBank = document.querySelector(".otp__close-btn--del-bank");
		closePopupOtp2DelBank.addEventListener("click", () => {
			modalOtpDelBank.style.display = "none";
		});
		const conformBtnBank = document.querySelector(".otp__button--submit2--del-bank");
		conformBtnBank.addEventListener("click", () => {
			formBanks[index].submit();
		});

	});
});

//Doi trang thai bank:
const defaultBtnBanks = document.querySelectorAll(".default-btn-bank");

defaultBtnBanks.forEach((btn) => {
	btn.addEventListener("click", () => {
		// Chuyển tất cả các nút về trạng thái "Thiết lập mặc định"
		defaultBtnBanks.forEach((otherBtn) => {
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


//Doi trang thai debit:
const defaultBtnDebits = document.querySelectorAll(".default-btn-debit");

defaultBtnDebits.forEach((btn) => {
	btn.addEventListener("click", () => {
		// Chuyển tất cả các nút về trạng thái "Thiết lập mặc định"
		defaultBtnDebits.forEach((otherBtn) => {
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