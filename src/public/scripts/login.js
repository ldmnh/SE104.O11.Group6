// Hàm kiểm tra tính hợp lệ của toàn bộ form và cập nhật trạng thái của nút "Đăng nhập"
checkFormValidity();
function checkFormValidity() {
    const email = document.getElementById('form__email').value;
    const password = document.getElementById('form__password').value;
    const loginButton = document.getElementById('login-button');
    const isValid = email && password;

    if (isValid) {
        loginButton.style.backgroundColor = 'orange';
        loginButton.disabled = false;
    } else {
        loginButton.style.backgroundColor = 'gray';
        loginButton.disabled = true;
    }

    return isValid; // Trả về giá trị kiểm tra
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
// Lắng nghe sự kiện click cho biểu tượng "eye-open"
document.getElementById('eye-open').addEventListener('click', function () {
    showHidePassword('form__password', 'eye-open');
    // checkFormValidity();
});

// Lấy hết các input trong form và lắng nghe sự kiện input trên mỗi input
const formInputs = document.querySelectorAll('#login-form input');
formInputs.forEach(input => {
    input.addEventListener('input', checkFormValidity);
});

// // Gọi hàm kiểm tra ban đầu
// checkFormValidity();

// // Khai báo và lấy tham chiếu đến nút "Đăng nhập"
// const loginButton = document.getElementById('login-button');

// Thêm sự kiện click cho nút "Đăng nhập"
// loginButton.addEventListener('click', function (event) {
//     // Ngăn chặn hành vi mặc định của nút "Đăng ký" (ngăn gửi biểu mẫu)
//     event.preventDefault();


//     // Lấy giá trị email
//     const email = document.getElementById('form__email').value;
//     // Kiểm tra tính hợp lệ của email
//     const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

//     if (!isEmailValid) {
//         document.getElementById('form__email').classList.add('is-invalid'); // Thêm lớp CSS is-invalid
//     } else {
//         document.getElementById('form__email').classList.remove('is-invalid'); // Xóa lớp CSS is-invalid
//     }

//     // Lấy giá trị mật khẩu và xác nhận mật khẩu
//     const password = document.getElementById('form__password').value;

//     // Kiểm tra tính hợp lệ của mật khẩu và xác nhận mật khẩu
//     const isPasswordValid = password.length >= 8 && /[a-zA-Z]/.test(password) && /[0-9]/.test(password);

//     if (!isPasswordValid) {
//         document.getElementById('form__password').classList.add('is-invalid'); // Thêm lớp CSS is-invalid
//     } else {
//         document.getElementById('form__password').classList.remove('is-invalid'); // Xóa lớp CSS is-invalid
//     }

//     // Kiểm tra tính hợp lệ tổng thể của thông tin
//     if (!isPasswordValid) {
//         // Nếu thông tin không hợp lệ, hiển thị thông báo lỗi

    // const errorMessage = document.getElementById('error-message');
    // errorMessage.innerText = 'Thông tin không hợp lệ';
    // errorMessage.style.color = 'red';


    // Chỉ để test xem thực hiện thành công chưa, không để vào code final (vì đăng ký thành công sẽ điều hướng về trang đăng nhập)
//     else {
//         const errorMessage = document.getElementById('error-message');
//         errorMessage.innerText = 'Thành công!';
//         errorMessage.style.color = 'green';
//     }
// });


