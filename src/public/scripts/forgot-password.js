// // Hàm kiểm tra tính hợp lệ của toàn bộ form và cập nhật trạng thái của nút 'Gửi'
// function checkFormValidity() {
//     const email = document.getElementById('form__email').value
//     const sendButton = document.getElementById('send-button')
//     const isValid = email

//     if (isValid) {
//         sendButton.style.backgroundColor = 'orange'
//         sendButton.disabled = false
//     } else {
//         sendButton.style.backgroundColor = 'gray'
//         sendButton.disabled = true
//     }

//     return isValid // Trả về giá trị kiểm tra
// }

// // Lấy hết các input trong form và lắng nghe sự kiện input trên mỗi input
// const formInputs = document.querySelectorAll('#forgotPassword-form input')
// formInputs.forEach(input => {
//     input.addEventListener('input', checkFormValidity)
// })

// // Gọi hàm kiểm tra ban đầu
// checkFormValidity()

// // Khai báo và lấy tham chiếu đến nút 'Gửi'
// const sendButton = document.getElementById('send-button')

// // Thêm sự kiện click cho nút 'Gửi'
// sendButton.addEventListener('click', function (event) {
//     // Ngăn chặn hành vi mặc định của nút 'Gửi' (ngăn gửi biểu mẫu)
//     event.preventDefault()

//     // Lấy giá trị email
//     const email = document.getElementById('form__email').value
//     // Kiểm tra tính hợp lệ của email => phần này backend làm lại
//     const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

//     if (!isEmailValid) {
//         document.getElementById('form__email').classList.add('is-invalid') // Thêm lớp CSS is-invalid
//     } else {
//         document.getElementById('form__email').classList.remove('is-invalid') // Xóa lớp CSS is-invalid
//     }


//     // Kiểm tra tính hợp lệ tổng thể của thông tin
//     if (!isEmailValid) {
//         // Nếu thông tin không hợp lệ, hiển thị thông báo lỗi
//         const errorMessage = document.getElementById('error-message')
//         errorMessage.innerText = 'Email không tồn tại'
//         errorMessage.style.color = 'red'
//     }

//     // Chỉ để test xem thực hiện thành công chưa, không để vào code final (BE sửa hoặc xóa đoạn code này)
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
    const email = $('#form__email').val()
    console.log(email)
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
                    $('#error-message').text('Thành công!')
                    $('#error-message').css('color', 'green')

                    setTimeout(() => {
                        window.location.href = '/auth/reset'
                    }, 5000)
                } else {
                    $('#error-message').text('Email không tồn tại')
                    $('#error-message').css('color', 'red')
                }
            })
        }
    })
})

