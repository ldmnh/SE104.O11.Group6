checkFormValidity()

// Hàm kiểm tra tính hợp lệ của mật khẩu
function isPasswordValid(password) {
	return password.length >= 8 && /[a-zA-Z]/.test(password) && /[0-9]/.test(password)
}
// // Hàm kiểm tra tính hợp lệ của toàn bộ form và cập nhật trạng thái của nút 'Đăng ký'
// // Kiểm tra người dùng đã nhập hết các trường chưa
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
	//Nhung sửa
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

// // Lấy hết các input trong form và lắng nghe sự kiện input trên mỗi input
const formInputs = document.querySelectorAll('#register-form input')
formInputs.forEach(input => {
	input.addEventListener('input', checkFormValidity)
})

// Gọi hàm kiểm tra ban đầu
checkFormValidity()

// // Khai báo và lấy tham chiếu đến nút 'Đăng ký'
// const registerButton = document.getElementById('register-button')

// // Thêm sự kiện click cho nút 'Đăng ký'
// registerButton.addEventListener('click', function (event) {
//     // Ngăn chặn hành vi mặc định của nút 'Đăng ký' (ngăn gửi biểu mẫu)
//     event.preventDefault()

//     // Lấy giá trị email
//     const email = document.getElementById('form__email').value
//     // Kiểm tra tính hợp lệ của email
//     const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

//     if (!isEmailValid) {
//         document.getElementById('form__email').classList.add('is-invalid') // Thêm lớp CSS is-invalid
//     } else {
//         document.getElementById('form__email').classList.remove('is-invalid') // Xóa lớp CSS is-invalid
//     }

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

//         const register = {
//             au_user_first_name: document.getElementById('form__first-name').value.trim(),
//             au_user_last_name: document.getElementById('form__last-name').value.trim(),
//             au_user_email: document.getElementById('form__email').value.trim(),
//             au_user_pass: document.getElementById('form__password').value.trim()
//         }
//         fetch('/api/register', {
//                 method: 'POST',
//                 body: JSON.stringify(register),
//                 headers: {
//                     'Content-Type': 'application/json'
//                 }
//             })
//             // .then(res => res.json())
//             // .then(back => {
//             //     if (data.status == 'error') {
//             //         // success.style.display = 'none'
//             //         // error.style.display = 'block'
//             //         setError(PhoneNumber, data.error)
//             //         // error.innerText = data.error
//             //     } else {
//             //         // success.style.display = 'block'
//             //         // error.style.display = 'none'
//             //         // success.innerText = data.success
//             //     }
//             // })

//         const errorMessage = document.getElementById('error-message') 
//         errorMessage.innerText = 'Thành công!'
//         errorMessage.style.color = 'green' 

//     }
// })

const form = document.getElementById('register-form')
const firstName = document.getElementById('form__first-name')
const lastName = document.getElementById('form__last-name')
const email = document.getElementById('form__email')
const password = document.getElementById('form__password')
const passwordConfirm = document.getElementById('form__password-confirm')

form.addEventListener('submit', e => {
	//Ngăn chặn việc gửi form nếu có bất kỳ trường nào không hợp lệ
	e.preventDefault()
	//Kiểm tra dữ liệu nhập vào
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
	const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
	return re.test(String(email).toLowerCase())
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
		setError(password, 'Mật khẩu phải ít nhất 8 ký tự, trong đó có cả chữ và số!')
		setError(passwordConfirm, 'Mật khẩu phải ít nhất 8 ký tự, trong đó có cả chữ và số!')
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
		// form.submit()

		const register = {
			au_user_last_name: lastName.value.trim(),
			au_user_first_name: firstName.value.trim(),
			au_user_email: email.value.trim(),
			au_user_pass: password.value.trim()
		}

		fetch('http://localhost:3000/auth/register', {
			method: 'POST',
			body: JSON.stringify(register),
			headers: {
				'Content-Type': 'application/json',
			}
		}).then(
			res => res.json()
		).then(back => {
			if (back.msg === 'error') {
				setError(email, back.message)
				document.getElementById('form__email').classList.add('is-invalid')
				isAllValid = false
			} else {
				if (isAllValid) {
					form.submit()
				}
			}
		}).catch(function (err) {
			console.log(err)
		})
	}
}
