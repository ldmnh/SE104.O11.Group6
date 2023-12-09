const change1 = document.querySelector("#change1");
const change2 = document.querySelector("#change2");

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

errorMsg = change2.querySelector("#error-message");

submitBtn.addEventListener('click', () => {
    const oldPassForm = change2.querySelector("[name='oldPass']");
    const newPassForm = change2.querySelector("[name='newPass']");
    const newPassConfirmForm = change2.querySelector("[name='newPassConfirm']");

    if (!checkFillForm(oldPassForm)) {
        errorMsg.innerText = "Vui lòng nhập mật khẩu cũ!";
        oldPassForm.classList.add('error-div')
        newPassForm.classList.remove('error-div')
        newPassConfirmForm.classList.remove('error-div')
    } else if (!checkFillForm(newPassForm)) {
        errorMsg.innerText = "Vui lòng nhập mật khẩu mới!";
        oldPassForm.classList.remove('error-div')
        newPassForm.classList.add('error-div')
        newPassConfirmForm.classList.remove('error-div')
    } else if (!checkFillForm(newPassConfirmForm)) {
        errorMsg.innerText = "Vui lòng nhập xác nhận mật khẩu!";
        oldPassForm.classList.remove('error-div')
        newPassForm.classList.remove('error-div')
        newPassConfirmForm.classList.add('error-div')
    } else {

        const oldPass = oldPassForm.value?.trim();
        const newPass = newPassForm.value?.trim();
        const newPassConfirm = newPassConfirmForm.value?.trim();

        if (!checkPass(newPass)) {
            errorMsg.innerText = "Mật khẩu mới phải ít nhất 8 ký tự, trong đó có cả chữ và số!";
            oldPassForm.classList.remove('error-div')
            newPassForm.classList.add('error-div')
            newPassConfirmForm.classList.remove('error-div')
        } else if (!checkPassAndPassConfirm(newPass, newPassConfirm)) {
            errorMsg.innerText = "Mật khẩu xác nhận không khớp!";
            oldPassForm.classList.remove('error-div')
            newPassForm.classList.add('error-div')
            newPassConfirmForm.classList.add('error-div')
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
                if (data.status === 200) {
                    modalSuccessChangePassword.style.display = "block";
                } else if (data.status === 404) {
                    errorMsg.innerText = data.message;
                    oldPassForm.classList.add('error-div')
                    newPassForm.classList.remove('error-div')
                    newPassConfirmForm.classList.remove('error-div')
                }
            }).catch(err => {
                console.error(err);
            })
        }
    }
})