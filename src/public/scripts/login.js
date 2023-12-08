// Điều hướng nút đăng ký
const registerBtn = document.getElementById('btn-register')
const redirect2res = () => {
    window.location.href = '/auth/register'
}
registerBtn.addEventListener('click', redirect2res)

// Hàm kiểm tra tính hợp lệ của toàn bộ form và cập nhật trạng thái của nút 'Đăng nhập'
checkFormValidity()
function checkFormValidity() {
    const email = document.getElementById('form__email').value
    const password = document.getElementById('form__password').value
    const loginButton = document.getElementById('login-button')
    const isValid = email && password

    if (isValid) {
        loginButton.style.backgroundColor = 'orange'
        loginButton.disabled = false
    } else {
        loginButton.style.backgroundColor = 'gray'
        loginButton.disabled = true
    }

    return isValid // Trả về giá trị kiểm tra
}

function showHidePassword(inputId, iconId) {
    const input = document.getElementById(inputId)
    const icon = document.getElementById(iconId)

    if (input.type === 'password') {
        input.type = 'text'
        icon.innerText = 'visibility_off'
    } else {
        input.type = 'password'
        icon.innerText = 'visibility'
    }
}

// Lắng nghe sự kiện click cho biểu tượng 'eye-open'
document.getElementById('eye-open').addEventListener('click', function () {
    showHidePassword('form__password', 'eye-open')
    // checkFormValidity()
})

// Lấy hết các input trong form và lắng nghe sự kiện input trên mỗi input
const formInputs = document.querySelectorAll('#login-form input')
formInputs.forEach(input => {
    input.addEventListener('input', checkFormValidity)
})


const form = document.getElementById('login-form');
const email = document.getElementById('form__email');
const password = document.getElementById('form__password');

form.addEventListener('submit', e => {
    //Ngăn chặn việc gửi form nếu có bất kỳ trường nào không hợp lệ
    e.preventDefault();
    validateInput();
})

const setError = (element, message) => {
    const inputControl = element.parentElement.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.remove('success');
    inputControl.classList.add('error');
}

const setSuccess = element => {
    const inputControl = element.parentElement.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

function validateInput() {
    const login = {
        email: email.value.trim(),
        password: password.value.trim()
    };
    fetch('/auth/login', {
        method: "POST",
        body: JSON.stringify(login),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => res.json()).then(back => {
        if (back.status == "error") {
            setError(email, back.error);
            document.getElementById('form__email').classList.add('is-invalid');
            error.innerText = back.error
        }
        else if (back.status == "error1") {
            setError(password, back.error)
            document.getElementById('form__password').classList.add('is-invalid');
            success.innerText = back.success
        }
        else {
            window.location.href = '/';
        }
    })
}
// }











