// Lấy danh sách tất cả các thành phần comment__filter__item
const filterItems = document.querySelectorAll(".comment__filter__item")
const radios = document.querySelectorAll(".sort")

// Lặp qua từng thành phần và thêm sự kiện click
filterItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Đặt lại màu nền, màu chữ và font weight của tất cả các thành phần về trạng thái gốc
    filterItems.forEach((originalItem) => {
      originalItem.style.backgroundColor = ""; // Đặt lại màu nền
      originalItem.style.color = ""; // Đặt lại màu chữ
      originalItem.style.fontWeight = ""; // Đặt lại font weight
    });

    // Thiết lập màu nền, màu chữ và font weight của thành phần hiện tại
    item.style.backgroundColor = "orange"; // Màu cam
    item.style.color = "white"; // Màu trắng
    item.style.fontWeight = "500"; // Font weight 500
  })
})

let dropdownButtons = document.querySelectorAll(".dropdown-button");
document.body.addEventListener("click", function (event) {
  let target = event.target;
  if (target.classList.contains("dropdown-button")) {
    let dropdownContent = target.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      // Đóng rồi mới mở cái mới
      closeAllDropdowns();
      dropdownContent.style.display = "block";
    }
  } else if (!target.classList.contains("dropdown-content")) {
    // Đóng hết khi bấm ra ngoài
    closeAllDropdowns();
  }
});

// Đóng hết
function closeAllDropdowns() {
  let dropdownContents = document.querySelectorAll(".dropdown-content");
  dropdownContents.forEach(function (content) {
    content.style.display = "none";
  });
}

// Mặc định chọn bộ lọc theo 'Số điểm'
const defaultSelectedItem = document.getElementById("filter__item-rating");
defaultSelectedItem.click();