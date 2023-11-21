function redirectToPage(help) {
	if (help == "Bạn quên mật khẩu?") {
		window.location.href = "/auth/forgot";
	} else if (help == "Bạn cần sự trợ giúp?") {
		window.location.href = "https://student.uit.edu.vn/";
	}
	// Add more conditions as needed
}

const logoClickHst = document.querySelector(".logo-click-hst");
logoClickHst.addEventListener("click", () => {
	window.location.href = "/";
});