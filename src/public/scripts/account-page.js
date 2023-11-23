// const editView = document.getElementById("edit-profile");
// const defaultView = document.getElementById("view-profile");

// const editBtn = document.querySelector(".form--submit2-default");
// const cancelBtn = document.querySelector(".form--submit1");
// const historyBtn = document.querySelector(".history-btn");
// const accountPaymentBtn = document.querySelector(".account-payment-btn");
// const changePasswordBtn = document.querySelector(".change-password-btn");

// editView.style.display = "none";

// const redirect2EditView = () => {
// 	defaultView.style.display = "none";
// 	editView.style.display = "block";
// };

// const redirect2EdefaultView = () => {
// 	defaultView.style.display = "block";
// 	editView.style.display = "none";
// };
// const redirect2HistoryView = () => {
// 	window.location.href = "/account/history";
// };

// const redirect2accountPaymentView = () => {
// 	window.location.href = "/account/card";
// };

// const redirect2changePasswordView = () => {
// 	window.location.href = "/account/change-password";
// };

// historyBtn.addEventListener("click", redirect2HistoryView);
// accountPaymentBtn.addEventListener("click", redirect2accountPaymentView);
// changePasswordBtn.addEventListener("click", redirect2changePasswordView);

// cancelBtn.addEventListener("click", redirect2EdefaultView);
// editBtn.addEventListener("click", redirect2EditView);

// const logoutBtn = document.querySelector(".logout-btn");

// const redirect2LogOutView = () => {
// 	window.location.href = "/auth/logout";
// };

// logoutBtn.addEventListener("click", redirect2LogOutView);

// //Khi người dùng nhấn Lưu
// const successPopup = document.querySelector(".modal-success");
// const saveBtn = document.querySelector("#save-btn");

// const redirect2SavePopupView = () => {
// 	successPopup.style.display = "block";
// };

// saveBtn.addEventListener("click", redirect2SavePopupView);

const editProfile = $("#edit-profile");
const viewProfile = $("#view-profile");

const showEditProfile = () => {
	editProfile[0].style.display = "block";
	viewProfile[0].style.display = "none";
}

const showViewProfile = () => {
	editProfile[0].style.display = "none";
	viewProfile[0].style.display = "block";
}

showViewProfile();

$('.form__btn--edit')[0].addEventListener('click', (event) => {
	event.preventDefault();
	showEditProfile();
});

$('.form__btn--cancel')[0].addEventListener('click', (event) => {
	event.preventDefault();
	showViewProfile();
});

const formBtn__save = $('.form__btn--save')[0];
formBtn__save.addEventListener('click', (event) => {
	event.preventDefault();
	form = $(formBtn__save.dataset.formId)[0];
	// console.log(form);
	// console.log(form.method);
	// console.log(form.action);
	form.submit();
	// fetch('/account/information', {
	// 	method: 'PUT',
	// 	body: new FormData(form)
	// }
	// ).then(async res => {
	// 	return {
	// 		statusCode: res.status,
	// 		data: await res.json()
	// 	};
	// }
	// ).then(({ statusCode, data }) => {
	// 	console.log(statusCode, data)
	// 	if (statusCode == 200) {
	// 		alert(data.message);
	// 		// showViewProfile();
	// 	} else {
	// 		alert(data.message);
	// 	}
	// 	// if (data.status == 'error') {
	// 	// 	// success.style.display = 'none'
	// 	// 	// error.style.display = 'block'
	// 	// 	// setError(PhoneNumber, data.error)
	// 	// 	// error.innerText = data.error
	// 	// 	alert(data.error);
	// 	// } else {
	// 	// 	// success.style.display = 'block'
	// 	// 	// error.style.display = 'none'
	// 	// 	// success.innerText = data.success
	// 	// 	alert(data.success);
	// 	// 	showViewProfile();
	// 	// }
	// });

});

