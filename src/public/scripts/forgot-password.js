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
    const email = $('#form__email').val()
    setStatusSubmitBtn(email === '')
}

const isValidEmail = email => {
    const regex = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

handleStatusSubmitBtn()

$(window).on('load', () => {
    $('#form__email').on('input', () => { handleStatusSubmitBtn() })

    $('#forgotPasswordPost').on('submit', (event) => {
        event.preventDefault()

        const email = $('#form__email').val()
        if (!isValidEmail(email)) {
            $('#form__email').addClass('is-invalid')
            return;
        } else {
            $('#form__email').removeClass('is-invalid')

            fetch('/auth/forgot', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email })
            }).then(async res => {
                return { status: res.status, data: await res.json() }
            }).then(data => {
                if (data.status == 200) {
                    $('#error-message').text('Đã gửi liên kết đặt lại mật khẩu đến email của bạn!')
                    $('#error-message').css('color', 'green')
                    $('#form__email').removeClass('is-invalid')

                    setTimeout(() => {
                        window.location.href = '/auth/reset'
                    }, 5000)
                } else {
                    $('#error-message').text('Email không tồn tại!')
                    $('#error-message').css('color', 'red')
                    $('#form__email').addClass('is-invalid')
                }
            })
        }
    })
})

