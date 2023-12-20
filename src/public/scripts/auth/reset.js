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
    const pass_confirm = $('#form__password-confirm').val()
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