// // Hàm kiểm tra tính hợp lệ của toàn bộ form và cập nhật trạng thái của nút 'Xác nhận'
// function checkFormValidity() {
//     const password = document.getElementById('form__password').value
//     const confirmPass = document.getElementById('form__password-confirm').value
//     const confirmButton = document.getElementById('confirm-button')

//     const isValid = password && confirmPass

//     if (isValid) {
//         confirmButton.style.backgroundColor = 'orange'
//         confirmButton.disabled = false
//     } else {
//         confirmButton.style.backgroundColor = 'gray'
//         confirmButton.disabled = true
//     }
//     return isValid // Trả về giá trị kiểm tra
// }

// function showHidePassword(inputId, iconId) {
//     const input = document.getElementById(inputId)
//     const icon = document.getElementById(iconId)

//     if (input.type === 'password') {
//         input.type = 'text'
//         icon.innerText = 'visibility_off'
//     } else {
//         input.type = 'password'
//         icon.innerText = 'visibility'
//     }
// }
// // Lắng nghe sự kiện click cho biểu tượng 'eye1' và 'eye2'
// document.getElementById('eye-open-psw').addEventListener('click', function () {
//     showHidePassword('form__password', 'eye-open-psw')
//     checkFormValidity()
// })

// document.getElementById('eye-open-cpsw').addEventListener('click', function () {
//     showHidePassword('form__password-confirm', 'eye-open-cpsw')
//     checkFormValidity()
// })
// // Lấy hết các input trong form và lắng nghe sự kiện input trên mỗi input
// const formInputs = document.querySelectorAll('#resetPassword-form input')
// formInputs.forEach(input => {
//     input.addEventListener('input', checkFormValidity)
// })

// // Gọi hàm kiểm tra ban đầu
// checkFormValidity()

// // Khai báo và lấy tham chiếu đến nút 'Xác nhận'
// const registerButton = document.getElementById('confirm-button')

// // Thêm sự kiện click cho nút 'Xác nhận'
// registerButton.addEventListener('click', function (event) {
//     // Ngăn chặn hành vi mặc định của nút 'Xác nhận' (ngăn gửi biểu mẫu)
//     event.preventDefault()

//     // Lấy giá trị mật khẩu và xác nhận mật khẩu
//     const password = document.getElementById('form__password').value
//     const confirmPass = document.getElementById('form__password-confirm').value

//     // Kiểm tra tính hợp lệ của mật khẩu và xác nhận mật khẩu
//     const isPasswordValid = password.length >= 8 && /[a-zA-Z]/.test(password) && /[0-9]/.test(password)

//     if (!isPasswordValid || password !== confirmPass) {
//         document.getElementById('form__password').classList.add('is-invalid') // Thêm lớp CSS is-invalid
//         document.getElementById('form__password-confirm').classList.add('is-invalid') // Thêm lớp CSS is-invalid
//     } else {
//         document.getElementById('form__password').classList.remove('is-invalid') // Xóa lớp CSS is-invalid
//         document.getElementById('form__password-confirm').classList.remove('is-invalid') // Xóa lớp CSS is-invalid
//     }

//     // Kiểm tra tính hợp lệ tổng thể của thông tin
//     if (!isPasswordValid || password !== confirmPass) {
//         // Nếu thông tin không hợp lệ, hiển thị thông báo lỗi
//         const errorMessage = document.getElementById('error-message')
//         errorMessage.innerText = 'Thông tin không hợp lệ'
//         errorMessage.style.color = 'red'
//     }

//     // Chỉ để test xem thực hiện thành công chưa, không để vào code final (vì đăng ký thành công sẽ điều hướng về trang đăng nhập)
//     else {
//         const errorMessage = document.getElementById('error-message')
//         errorMessage.innerText = 'Thành công!'
//         errorMessage.style.color = 'green'
//     }
// })


const setStatusSubmitBtn = (isDisable) => {
    const form__submit = $('.form__submit')

    if (isDisable) {
        form__submit.css('background-color', 'gray')
        form__submit.prop('disabled', true)
    } else {
        form__submit.css('background-color', 'orange')
        form__submit.prop('disabled', false)
    }
}

const handleStatusSubmitBtn = () => {
    const pass = $('#form__password').val()
    console.log(pass)
    const pass_confirm = $('#form__password-confirm').val()
    console.log(pass_confirm)
    setStatusSubmitBtn(pass === '' || pass_confirm === '')
}

const isValidPass = pass => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return regex.test(pass);
}

handleStatusSubmitBtn()

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

$(window).on('load', () => {
    console.log($('[id^=form__pass]'))
    $('[id^=form__pass]').on('input', () => { handleStatusSubmitBtn() })

    $('#resetPasswordPost').on('submit', (event) => {
        event.preventDefault()

        console.log('submit')

        const password = $('#form__password').val()
        const pass_confirm = $('#form__password-confirm').val()

        if (!isValidPass(password)) {
            $('[id^=form__pass]').addClass('is-invalid')
            $('#error-message').text('Mật khẩu phải có ít nhất 8 ký tự, bao gồm chữ và số')
            $('#error-message').css('color', 'red')
            return;
        } else if (password !== pass_confirm) {
            $('[id^=form__pass]').addClass('is-invalid')
            $('#error-message').text('Mật khẩu mới không khớp với mật khẩu xác nhận')
            $('#error-message').css('color', 'red')
            return;
        } else {
            $('[id^=form__pass]').removeClass('is-invalid')

            fetch('/auth/reset', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ password })
            }).then(async res => {
                return { status: res.status, data: await res.json() }
            }).then(data => {
                console.log(data.status)
                console.log(data.data)

                if (data.status == 200) {
                    $('#error-message').text('Đặt lại mật khẩu thành công!')
                    $('#error-message').css('color', 'green')

                    setTimeout(() => {
                        window.location.href = '/auth/login'
                    }, 2000)
                } else {
                    $('#error-message').text('Email không tồn tại')
                    $('#error-message').css('color', 'red')
                }
            })
        }
    })
})