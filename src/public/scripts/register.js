// alert("js nhung duoc roi")
// Hàm kiểm tra tính hợp lệ của mật khẩu
function isPasswordValid(password) {
    return password.length >= 8 && /[a-zA-Z]/.test(password) && /[0-9]/.test(password);
}

// Hàm kiểm tra tính hợp lệ của toàn bộ form và cập nhật trạng thái của nút "Đăng ký"
function checkFormValidity() {
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPass = document.getElementById('confirm-password').value;
    const registerButton = document.getElementById('register-button');

    const isValid = firstName && lastName && email && isPasswordValid(password) && password === confirmPass;
    registerButton.style.backgroundColor = isValid ? 'orange' : 'gray';
    registerButton.disabled = !isValid;
}

// Lấy hết mấy cái input trong form rồi duyệt qua từng cái để check
const formInputs = document.querySelectorAll('#register-form input');
formInputs.forEach(input => {
    input.addEventListener('input', checkFormValidity);
});

function showHidePassword(inputId, iconId) {
    const input = document.getElementById(inputId);
    const icon = document.getElementById(iconId);

    if (input.type === 'password') {
        input.type = 'text';
        icon.innerText = 'visibility';
    } else {
        input.type = 'password';
        icon.innerText = 'visibility_off';
    }
}
// Lắng nghe sự kiện click cho biểu tượng "eye1" và "eye2"
document.getElementById('eye1').addEventListener('click', function () {
    showHidePassword('password', 'eye1');
    checkFormValidity();
});

document.getElementById('eye2').addEventListener('click', function () {
    showHidePassword('confirm-password', 'eye2');
    checkFormValidity();
});


// Muốn gắn onclick thì dùng này 
// onclick="togglePasswordVisibility('password', 'eye1')"
// onclick="togglePasswordVisibility('confirm-password', 'eye2')"

// Gọi hàm kiểm tra ban đầu
checkFormValidity();