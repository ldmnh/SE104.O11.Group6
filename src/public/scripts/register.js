// Hàm kiểm tra tính hợp lệ của mật khẩu
function isPasswordValid(password) {
    return password.length >= 8 && /[a-zA-Z]/.test(password) && /[0-9]/.test(password);
}

// Hàm kiểm tra tính hợp lệ của toàn bộ form và cập nhật trạng thái của nút "Đăng ký"
function checkFormValidity() {
    const firstName = document.getElementById('form__first-name').value;
    const lastName = document.getElementById('form__last-name').value;
    const email = document.getElementById('form__email').value;
    const password = document.getElementById('form__password').value;
    const confirmPass = document.getElementById('form__password-confirm').value;
    const registerButton = document.getElementById('register-button');

    const isValid = firstName && lastName && email && password && confirmPass;

    if (isValid) {
        registerButton.style.backgroundColor = 'orange';
        registerButton.disabled = false;
    } else {
        registerButton.style.backgroundColor = 'gray';
        registerButton.disabled = true;
    }

    return firstName && lastName && email && isPasswordValid(password) && password === confirmPass; // Trả về giá trị kiểm tra
}

function showHidePassword(inputId, iconId) {
    const input = document.getElementById(inputId);
    const icon = document.getElementById(iconId);

    if (input.type === 'password') {
        input.type = 'text';
        icon.innerText = 'visibility_off';
    } else {
        input.type = 'password';
        icon.innerText = 'visibility';
    }
}
// Lắng nghe sự kiện click cho biểu tượng "eye1" và "eye2"
document.getElementById('eye-open-psw').addEventListener('click', function () {
    showHidePassword('form__password', 'eye-open-psw');
    checkFormValidity();
});

document.getElementById('eye-open-cpsw').addEventListener('click', function () {
    showHidePassword('form__password-confirm', 'eye-open-cpsw');
    checkFormValidity();
});
// Lấy hết các input trong form và lắng nghe sự kiện input trên mỗi input
const formInputs = document.querySelectorAll('#register-form input');
formInputs.forEach(input => {
    input.addEventListener('input', checkFormValidity);
});

// Gọi hàm kiểm tra ban đầu
checkFormValidity();

// Khai báo và lấy tham chiếu đến nút "Đăng ký"
const registerButton = document.getElementById('register-button');

// Thêm sự kiện click cho nút "Đăng ký"
registerButton.addEventListener('click', function (event) {
    // Ngăn chặn hành vi mặc định của nút "Đăng ký" (ngăn gửi biểu mẫu)
    event.preventDefault();

    // Lấy giá trị email
    const email = document.getElementById('form__email').value;
    // Kiểm tra tính hợp lệ của email
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!isEmailValid) {
        document.getElementById('form__email').classList.add('is-invalid'); // Thêm lớp CSS is-invalid
    } else {
        document.getElementById('form__email').classList.remove('is-invalid'); // Xóa lớp CSS is-invalid
    }

    // Lấy giá trị mật khẩu và xác nhận mật khẩu
    const password = document.getElementById('form__password').value;
    const confirmPass = document.getElementById('form__password-confirm').value;

    // Kiểm tra tính hợp lệ của mật khẩu và xác nhận mật khẩu
    const isPasswordValid = password.length >= 8 && /[a-zA-Z]/.test(password) && /[0-9]/.test(password);

    if (!isPasswordValid || password !== confirmPass) {
        document.getElementById('form__password').classList.add('is-invalid'); // Thêm lớp CSS is-invalid
        document.getElementById('form__password-confirm').classList.add('is-invalid'); // Thêm lớp CSS is-invalid
    } else {
        document.getElementById('form__password').classList.remove('is-invalid'); // Xóa lớp CSS is-invalid
        document.getElementById('form__password-confirm').classList.remove('is-invalid'); // Xóa lớp CSS is-invalid
    }

    // Kiểm tra tính hợp lệ tổng thể của thông tin
    if (!isPasswordValid || password !== confirmPass) {
        // Nếu thông tin không hợp lệ, hiển thị thông báo lỗi
        const errorMessage = document.getElementById('error-message');
        errorMessage.innerText = 'Thông tin không hợp lệ';
        errorMessage.style.color = 'red';
    }

    // Chỉ để test xem thực hiện thành công chưa, không để vào code final (vì đăng ký thành công sẽ điều hướng về trang đăng nhập)
    else {
        const errorMessage = document.getElementById('error-message');
        errorMessage.innerText = 'Thành công!';
        errorMessage.style.color = 'green';
    }
});


