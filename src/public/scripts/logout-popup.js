document.addEventListener("DOMContentLoaded", function () {
    const logoutButton = document.getElementById("logoutButton");
    const popup = document.querySelector(".popup");
    const cancelButton = document.querySelector(".btn-cancel");
    const closeButton = document.querySelector(".close-btn");
    const confirmButton = document.querySelector(".btn-logout");

    // Sự kiện khi nhấn nút đăng xuất
    logoutButton.addEventListener("click", function () {
        popup.style.display = "block";
    });

    // Sự kiện khi nhấn nút "Hủy" trên popup
    cancelButton.addEventListener("click", function () {
        popup.style.display = "none";
    });

    closeButton.addEventListener("click", function () {
        popup.style.display = "none";
    });

    // Sự kiện khi nhấn nút "Đăng xuất" trên popup
    confirmButton.addEventListener("click", function () {
        // Gọi chức năng logout tại đây
        // Để gọi chức năng logout, bạn có thể sử dụng fetch hoặc AJAX
        // Hoặc đơn giản là chuyển hướng trang đến /auth/logout
        window.location.href = "/auth/logout";
    });
});