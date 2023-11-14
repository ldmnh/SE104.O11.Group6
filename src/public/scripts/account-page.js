//Popup
const modalBtns = document.querySelectorAll('.logout-btn')
const modals = document.querySelectorAll('.popup')
const closeBtns = document.querySelectorAll('.close-btn')
const cancelBtns = document.querySelectorAll('.btn-cancel')

modalBtns.forEach((btn, index) => {
	btn.onclick = function () {
		modals[index].style.display = 'block'
	}
})

// Đóng popup khi chọn dấu x
closeBtns.forEach((closeBtn, index) => {
	closeBtn.onclick = function () {
		modals[index].style.display = 'none'
	}
})

// Đóng popup khi chọn nút hủy
cancelBtns.forEach((cancelBtn, index) => {
	cancelBtn.onclick = function () {
		modals[index].style.display = 'none'
	}
})

// Đóng popup khi nhấp chuột vào bất kỳ khu vực nào trên màn hình
window.onclick = function (e) {
	modals.forEach((modal, index) => {
		if (e.target == modal) {
			modal.style.display = 'none'
		}
	})
}

// Chuyển về trang đăng nhập
const logoutBtn = document.querySelector('.btn-logout')

const redirect2LogOutView = () => {
	window.location.href = '/auth/login'
}

logoutBtn.addEventListener('click', redirect2LogOutView)

console.log('aaaaaa')

const editView = document.getElementById('edit-profile')
const defaultView = document.getElementById('view-profile')

const editBtn = document.querySelector('.form--submit2-default')
const cancelBtn = document.querySelector('.form--submit1')
const historyBtn = document.querySelector('.history-btn')
const accountPaymentBtn = document.querySelector('.account-payment-btn')
const changePasswordBtn = document.querySelector('.change-password-btn')

editView.style.display = 'none'

const redirect2EditView = () => {
	defaultView.style.display = 'none'
	editView.style.display = 'block'
}

const redirect2EdefaultView = () => {
	defaultView.style.display = 'block'
	editView.style.display = 'none'
}

const redirect2HistoryView = () => {
	window.location.href = "/account/history";
	window.location.href = '/account/history'
}
window.location.href = '/account/history'
}

const redirect2accountPaymentView = () => {
	window.location.href = '/account/card'
}

const redirect2changePasswordView = () => {
	window.location.href = "/account/change-password"
}
window.location.href = '/account/change-password'
}

historyBtn.addEventListener('click', redirect2HistoryView)
accountPaymentBtn.addEventListener('click', redirect2accountPaymentView)
changePasswordBtn.addEventListener('click', redirect2changePasswordView)

cancelBtn.addEventListener("click", redirect2EdefaultView);
editBtn.addEventListener("click", redirect2EditView);

const logoutBtn = document.querySelector(".logout-btn");

const redirect2LogOutView = () => {
	window.location.href = "/auth/logout"
}

logoutBtn.addEventListener("click", redirect2LogOutView);
cancelBtn.addEventListener('click', redirect2EdefaultView)
editBtn.addEventListener('click', redirect2EditView)

//Khi người dùng nhấn Lưu
const successPopup = document.querySelector('.modal-success')
const saveBtn = document.querySelector('#save-btn')

const redirect2SavePopupView = () => {
	successPopup.style.display = 'block'
}

saveBtn.addEventListener('click', redirect2SavePopupView)
const redirect2LogOutView = () => {
	window.location.href = '/auth/logout'
}
