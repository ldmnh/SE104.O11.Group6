$("#dateRange").daterangepicker();

// Khởi tạo date range picker và không có giá trị mặc định
$("#dateRange").daterangepicker({
	autoUpdateInput: false,
});

// Bắt sự kiện khi người dùng chọn ngày
$("#dateRange").on("apply.daterangepicker", function (ev, picker) {
	$(this).val(
		picker.startDate.format("MM/DD/YYYY") +
		" - " +
		picker.endDate.format("MM/DD/YYYY")
	);
	$('[name="checkin"]').val(picker.startDate.format("MM-DD-YYYY"));
	$('[name="checkout"]').val(picker.endDate.format("MM-DD-YYYY"));
});

// Bắt sự kiện khi người dùng xóa ngày
$("#dateRange").on("cancel.daterangepicker", function (ev, picker) {
	$(this).val("");
});

//Nút tăng giảm số lượng

const plusButtons = document.querySelectorAll(".plus");
const minusButtons = document.querySelectorAll(".minus");

// Thêm sự kiện cho nút +
plusButtons.forEach((plusButton) => {
	plusButton.addEventListener("click", () => {
		// Khai báo và lấy tham chiếu đến trường nhập số lượng tương ứng
		const input = plusButton.parentElement.querySelector(".quantity");
		const currentValue = Number(input.value);

		if (currentValue < 100) {
			input.value = currentValue + 1;
			updateSelectedOptions();
		}
	});
});

// Thêm sự kiện cho nút -
minusButtons.forEach((minusButton) => {
	minusButton.addEventListener("click", () => {
		// Khai báo và lấy tham chiếu đến trường nhập số lượng tương ứng
		const input = minusButton.parentElement.querySelector(".quantity");
		const currentValue = Number(input.value);
		if (currentValue > 0) {
			input.value = currentValue - 1;
			updateSelectedOptions();
		}
	});
});

// Hàm cập nhật thông tin đã chọn
const selectedOptions = document.getElementById("selected-options");
function updateSelectedOptions() {
	const adults = document.getElementById("adult__quantity").value;
	const children = document.getElementById("child__quantity").value;
	const rooms = document.getElementById("room__quantity").value;

	selectedOptions.innerText = `${adults} người lớn - ${children} trẻ em - ${rooms} phòng`;
}

// Gọi hàm để cập nhật thông tin đã chọn khi trang web được tải
updateSelectedOptions();

// Sự kiện khi người dùng click vào phần tử .search-address
document
	.querySelector(".search-address--dropdown")
	.addEventListener("click", function () {
		// Lấy tham chiếu đến phần tử .search-quality
		const searchQuality = document.querySelector(".search-quality");

		// Kiểm tra xem .search-quality đang hiển thị hay không
		if (searchQuality.style.visibility === "visible") {
			searchQuality.style.visibility = "hidden";
			searchQuality.style.display = "none";
		} else {
			searchQuality.style.visibility = "visible";
			searchQuality.style.display = "block";
		}
	});

//Khi nhấn vào nút Tìm kiếm
var searchButton = document.querySelector(".button--submit");
const redirect2AccDetailView = () => {
	window.location.href = "/search/results";
};

searchButton.addEventListener("click", redirect2AccDetailView);