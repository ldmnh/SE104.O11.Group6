// Hàm kiểm tra tính hợp lệ của toàn bộ form và cập nhật trạng thái của nút 'Đăng nhập'
checkFormValidity()

function checkFormValidity() {
    const admin_login = document.getElementById('form__name').value
    const password = document.getElementById('form__password').value
    const loginButton = document.getElementById('login-button')
    const isValid = admin_login && password

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
const admin_name = document.getElementById('form__name');
const admin_password = document.getElementById('form__password');

form.addEventListener('submit', e => {
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
        admin_login: admin_name.value.trim(),
        admin_password: admin_password.value.trim()
    };

    fetch('/admin/login', {
        method: "POST",
        body: JSON.stringify(login),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => res.json()).then(back => {
        if (back.status == "noFoundName") {
            setError(admin_name, back.message);
            document.getElementById('form__name').classList.add('is-invalid');
            document.getElementById('form__password').classList.remove('is-invalid');
            setSuccess(admin_password)
        } else if (back.status == "notMatchPass") {
            setError(admin_password, back.message)
            document.getElementById('form__name').classList.remove('is-invalid');
            document.getElementById('form__password').classList.add('is-invalid');
            setSuccess(admin_name)
        } else {
            window.location.href = '/admin/dashboard';
        }
    })
}
// }