// Xử lý sự kiện khi nút "Đăng nhập" được nhấn
const buttonSignin = document.querySelector(".button-signin");
buttonSignin.addEventListener("click", function () {
    // Thêm mã JavaScript để xử lý sự kiện khi nút "Đăng nhập" được nhấn
    // Ví dụ: Hiển thị một cửa sổ đăng nhập
    alert("Nút Đăng nhập đã được nhấn.");
});

// Xử lý sự kiện khi nút "Đăng ký" được nhấn
const buttonSignup = document.querySelector(".button-signup");
buttonSignup.addEventListener("click", function () {
    // Thêm mã JavaScript để xử lý sự kiện khi nút "Đăng ký" được nhấn
    // Ví dụ: Hiển thị một cửa sổ đăng ký
    alert("Nút Đăng ký đã được nhấn.");
});

// Xử lý sự kiện khi thẻ input "Nơi muốn đến" được click
const inputDestination = document.querySelector(".input_address[placeholder='Nơi muốn đến']");
inputDestination.addEventListener("click", function () {
    // Thêm mã JavaScript để xử lý sự kiện khi thẻ input "Nơi muốn đến" được click
    // Hiện tại mã này không làm gì cả, để cho phép người dùng nhập nội dung.
});

// Xử lý sự kiện khi thay đổi nội dung trong thẻ input "Nơi muốn đến"
inputDestination.addEventListener("input", function () {
    // Thêm mã JavaScript để xử lý sự kiện khi nhập nội dung trong thẻ input "Nơi muốn đến"
    const inputValue = inputDestination.value;
    // Ví dụ: Hiển thị nội dung trong console
    console.log("Đã nhập: " + inputValue);
});

// Xử lý sự kiện khi nút "Tìm kiếm" được nhấn
const buttonSearch = document.querySelector(".button--submit");
buttonSearch.addEventListener("click", function () {
    // Thêm mã JavaScript để xử lý sự kiện khi nút "Tìm kiếm" được nhấn
    // Ví dụ: Thực hiện tìm kiếm dựa trên thông tin đã nhập
    alert("Nút Tìm kiếm đã được nhấn.");
});