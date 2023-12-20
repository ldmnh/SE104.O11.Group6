checkFormValidity()

// Hàm kiểm tra tính hợp lệ của mật khẩu
function isPasswordValid(password) {
    const re = /^[a-zA-Z0-9]+$/
    return password.length >= 8 && re.test(password)
}

// Hàm kiểm tra tính hợp lệ của toàn bộ form và cập nhật trạng thái của nút 'Đăng ký'
// Kiểm tra người dùng đã nhập hết các trường chưa
function checkFormValidity() {
    const firstName = document.getElementById('form__first-name').value
    const lastName = document.getElementById('form__last-name').value
    const email = document.getElementById('form__email').value
    const password = document.getElementById('form__password').value
    const confirmPass = document.getElementById('form__password-confirm').value
    const registerButton = document.getElementById('register-button')

    const isValid = firstName && lastName && email && password && confirmPass

    if (isValid) {
        registerButton.style.backgroundColor = 'orange'
        registerButton.disabled = false
    } else {
        registerButton.style.backgroundColor = 'gray'
        registerButton.disabled = true
    }

    return firstName && lastName && email && password && confirmPass // Trả về giá trị kiểm tra
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

// Lắng nghe sự kiện click cho biểu tượng 'eye1' và 'eye2'
document.getElementById('eye-open-psw').addEventListener('click', function () {
    showHidePassword('form__password', 'eye-open-psw')
})

document.getElementById('eye-open-cpsw').addEventListener('click', function () {
    showHidePassword('form__password-confirm', 'eye-open-cpsw')
})

// Lấy hết các input trong form và lắng nghe sự kiện input trên mỗi input
const formInputs = document.querySelectorAll('#register-form input')
formInputs.forEach(input => {
    input.addEventListener('input', checkFormValidity)
})

// Gọi hàm kiểm tra ban đầu
checkFormValidity()

const form = document.getElementById('register-form')
const firstName = document.getElementById('form__first-name')
const lastName = document.getElementById('form__last-name')
const email = document.getElementById('form__email')
const password = document.getElementById('form__password')
const passwordConfirm = document.getElementById('form__password-confirm')

form.addEventListener('submit', e => {
    // Ngăn chặn việc gửi form nếu có bất kỳ trường nào không hợp lệ
    e.preventDefault()

    // Kiểm tra dữ liệu nhập vào
    validateInput()
})

const setError = (element, message) => {
    const inputControl = element.parentElement
    const errorDisplay = inputControl.querySelector('.error')

    errorDisplay.innerText = message
    inputControl.classList.add('error')
    inputControl.classList.remove('error')
}

const setSuccess = element => {
    const inputControl = element.parentElement
    const errorDisplay = inputControl.querySelector('.error')

    errorDisplay.innerText = ''
    inputControl.classList.add('success')
    inputControl.classList.remove('error')
}

const isValidEmail = email => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return re.test(String(email.trim()).toLowerCase())
}

function validateInput() {
    // Lấy giá trị của các trường thông tin
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const passwordConfirmValue = passwordConfirm.value.trim()

    // Kiểm tra giá trị của các trường thông tin
    let isAllValid = true

    if (!isValidEmail(emailValue)) {
        setError(email, 'Địa chỉ email không đúng định dạng!')
        document.getElementById('form__email').classList.add('is-invalid') // Thêm lớp CSS is-invalid
        isAllValid = false
    } else {
        document.getElementById('form__email').classList.remove('is-invalid')
        setSuccess(email)
    }

    if (!isPasswordValid(passwordValue) || !isPasswordValid(passwordConfirmValue)) {
        setError(password, 'Mật khẩu phải ít nhất 8 ký tự, trong đó có cả chữ và số, không bao gồm dấu cách và ký tự đặc biệt!')
        setError(passwordConfirm, 'Mật khẩu phải ít nhất 8 ký tự, trong đó có cả chữ và số, không bao gồm dấu cách và ký tự đặc biệt!')
        document.getElementById('form__password').classList.add('is-invalid')
        document.getElementById('form__password-confirm').classList.add('is-invalid')
        isAllValid = false
    } else if (passwordConfirmValue !== passwordValue) {
        setError(password, 'Mật khẩu không khớp!')
        setError(passwordConfirm, 'Mật khẩu không khớp!')
        document.getElementById('form__password').classList.add('is-invalid')
        document.getElementById('form__password-confirm').classList.add('is-invalid')
        isAllValid = false
    } else {
        document.getElementById('form__password').classList.remove('is-invalid')
        document.getElementById('form__password-confirm').classList.remove('is-invalid')
        setSuccess(password)
        setSuccess(passwordConfirm)
    }

    // Nếu tất cả các trường thông tin hợp lệ, thì gửi form
    if (isAllValid) {
        const register = {
            au_user_last_name: lastName.value.trim(),
            au_user_first_name: firstName.value.trim(),
            au_user_email: email.value.trim(),
            au_user_pass: password.value.trim()
        }

        fetch('/auth/register', {
            method: 'POST',
            body: JSON.stringify(register),
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(res => res.json())
            .then(back => {
                if (back.status === 'error') {
                    setError(email, back.message)
                    document.getElementById('form__email').classList.add('is-invalid')
                    isAllValid = false
                } else if (back.status === 'success') {
                    if (isAllValid) {
                        // form.submit()
                        window.location.href = '/auth/login'
                    }
                }
            }).catch(function (err) {
                console.error(err)
            })
    }
}
