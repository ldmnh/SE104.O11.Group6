$(document).ready(function () {
    var submitButton = $(".button--submit");
    var inputAddress = $(".input_address");
    var dateRangeInput = $("#dateRange");

    // Khởi tạo date range picker và không có giá trị mặc định
    dateRangeInput.daterangepicker({
        autoUpdateInput: false,
    });

    // Bắt sự kiện khi người dùng chọn ngày
    dateRangeInput.on("apply.daterangepicker", function (ev, picker) {
        $(this).val(
            picker.startDate.format("MM/DD/YYYY") +
            " - " +
            picker.endDate.format("MM/DD/YYYY")
        );
        $('[name="checkin"]').val(picker.startDate.format("MM-DD-YYYY"));
        $('[name="checkout"]').val(picker.endDate.format("MM-DD-YYYY"));
    });

    // Bắt sự kiện khi người dùng xóa ngày
    dateRangeInput.on("cancel.daterangepicker", function (ev, picker) {
        $(this).val("");
        $('[name="checkin"]').val("");
        $('[name="checkout"]').val("");
    });

    // Thêm sự kiện click cho nút submit
    submitButton.on("click", function (event) {
        if (
            $('[name="checkin"]').val().trim() === "" ||
            $('[name="checkout"]').val().trim() === ""
        ) {
            event.preventDefault();
            alert("Vui lòng chọn ngày nhận và ngày trả phòng.");
        }
    });
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
        //Lấy tham chiếu đến phần tử .search-quality
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

const inputAddress = document.querySelector('input[name="location"]')

inputAddress.addEventListener("keyup", function () {
    const inputAddressValue = document.querySelector('input[name="location"]').value

    const searchKey = {
        searchKey: inputAddressValue
    }

    fetch('/hint_search', {
        method: 'POST',
        body: JSON.stringify(searchKey),
        headers: {
            'Content-Type': 'application/json',
        }
    }).then(
        res => res.json()
    ).then(back => {
        const location = document.getElementById('location');
        let options = Array.from(location.querySelectorAll('option'))
        options.forEach(opt => opt.remove())
        back.result.forEach(addressOption => {
            if (addressOption.city_name){
                let option = document.createElement('option');
                option.value = addressOption.city_name
                location.appendChild(option)
            }
        })
        back.result.forEach(addressOption => {
            if (addressOption.prov_name){
            let option = document.createElement('option');
            option.value = 'Tỉnh ' + addressOption.prov_name
            location.appendChild(option)
            }
        })
        console.log(back)
    })
})