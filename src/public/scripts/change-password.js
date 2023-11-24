// const profileBtn = document.querySelector(".profile-btn");
// const historyBtn = document.querySelector(".history-btn");
// const accountPaymentBtn = document.querySelector(".account-payment-btn");

// const redirect2profiletView = () => {
// 	window.location.href = "/account/information";
// };
// const redirect2HistoryView = () => {
// 	window.location.href = "/account/history";
// };

// const redirect2accountPaymentView = () => {
// 	window.location.href = "/account/card";
// };

// profileBtn?.addEventListener("click", redirect2profiletView);
// historyBtn?.addEventListener("click", redirect2HistoryView);
// accountPaymentBtn?.addEventListener("click", redirect2accountPaymentView);

// const logoutBtn = document.querySelector(".logout-btn");

// const redirect2LogOutView = () => {
// 	window.location.href = "/auth/login";
// };

// logoutBtn?.addEventListener("click", redirect2LogOutView);

// //
const change1 = document.querySelector("#change1");
const change2 = document.querySelector("#change2");

// console.log(change1, change2)

change2.style.display = "none";

const redirectChange1 = () => {
    change2.style.display = "none";
    change1.style.display = "block";
};

const redirectChange2 = () => {
    change2.style.display = "block";
    change1.style.display = "none";
};

const setBtn = document.querySelector(".set-btn");
setBtn.addEventListener("click", redirectChange2);

const cancelBtn = document.querySelector(".cancel-btn");
cancelBtn.addEventListener("click", redirectChange1);

// //Mat khau cu (cho BE)

// //Mat khau moi
// const confirmBtn = document.querySelector(".confirm-button");
// const modalSuccessChangePassword = document.querySelector(".modal-success");

// confirmBtn.addEventListener("click", () => {
// 	const newPassword = document.querySelector(".form__password").value;
// 	const isPasswordValid =
// 		newPassword.length >= 8 &&
// 		/[a-zA-Z]/.test(newPassword) &&
// 		/[0-9]/.test(newPassword);
// 	console.log("newpss", newPassword);
// 	console.log("log", isPasswordValid);
// 	const newConfirmPass = document.querySelector(
// 		".form__password-confirm"
// 	).value;
// 	if (!isPasswordValid || newPassword !== newConfirmPass) {
// 		//Nếu thông tin không hợp lệ, hiển thị thông báo lỗi
// 		const errorMessage = document.getElementById("error-message");
// 		errorMessage.innerText = "*";
// 		errorMessage.style.color = "red";
// 	} else {
// 		const errorMessage = document.getElementById("error-message");
// 		errorMessage.innerText = "Thành công!";
// 		errorMessage.style.color = "green";
// 		modalSuccessChangePassword.style.display = "block";
// 	}
// });

// // Xac nhan mat khau
// const confirmChangePassword = document.querySelector(
// 	".success-popup__close-btn"
// );

// closePopupBtn.addEventListener("click", () => {
// 	modalSuccess.style.display = "none";
// });

const checkFillForm = (slt) => {
    return slt.value?.trim() !== "";
}

const checkPass = pass => {
    return pass.length >= 8 &&
        /[a-zA-Z]/.test(pass) &&
        /[0-9]/.test(pass);
}

const checkPassAndPassConfirm = (pass, passConfirm) => {
    return pass == passConfirm;
}

const modalSuccessChangePassword = document.querySelector(".modal-success");


const submitBtn = change2.querySelector(".confirm-button");
// console.log(submitBtn);

errorMsg = change2.querySelector("#error-message");

submitBtn.addEventListener('click', () => {
    const oldPassForm = change2.querySelector("[name='oldPass']");
    const newPassForm = change2.querySelector("[name='newPass']");
    const newPassConfirmForm = change2.querySelector("[name='newPassConfirm']");

    if (!checkFillForm(oldPassForm)) {
        errorMsg.innerText = "Vui lòng nhập mật khẩu cũ!";
    } else if (!checkFillForm(newPassForm)) {
        errorMsg.innerText = "Vui lòng nhập mật khẩu mới!";
    } else if (!checkFillForm(newPassConfirmForm)) {
        errorMsg.innerText = "Vui lòng nhập mật khẩu xác nhận!";
    } else {

        const oldPass = oldPassForm.value?.trim();
        const newPass = newPassForm.value?.trim();
        const newPassConfirm = newPassConfirmForm.value?.trim();

        // console.log('oldPass', oldPass)
        // console.log('newPass', newPass);
        // console.log('newPassConfirm', newPassConfirm);

        if (!checkPass(newPass)) {
            errorMsg.innerText = "Mật khẩu mới phải ít nhất 8 ký tự, trong đó có cả chữ và số!";
        } else if (!checkPassAndPassConfirm(newPass, newPassConfirm)) {
            errorMsg.innerText = "Mật khẩu xác nhận không khớp!";
        } else {
            fetch('/auth/change-password', {
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    oldPass,
                    newPass,
                }),
                method: 'POST',
            }).then(res => res.json()
            ).then(data => {
                // console.log(data);
                if (data.status === 200) {
                    modalSuccessChangePassword.style.display = "block";
                } else if (data.status === 404) {
                    errorMsg.innerText = data.message;
                }
            }).catch(err => {
                console.log(err);
            })
        }
    }
})