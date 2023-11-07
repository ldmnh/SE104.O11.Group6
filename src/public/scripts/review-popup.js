// Lấy tham chiếu đến các phần tử DOM
const minusButton = document.querySelector(".minus");
const plusButton = document.querySelector(".plus");

// Thêm sự kiện cho nút -
minusButton.addEventListener('click', () => {
    // Khai báo và lấy tham chiếu đến trường nhập số lượng phòng
    const roomQuantity = document.getElementById('room__quantity')
    const currentValue = Number(roomQuantity.value);
    if (currentValue > 0) {
        roomQuantity.value = currentValue - 1;
    }

})

// Thêm sự kiện cho nút +
plusButton.addEventListener('click', () => {
    // Khai báo và lấy tham chiếu đến trường nhập số lượng phòng
    const roomQuantity = document.getElementById('room__quantity')
    const currentValue = Number(roomQuantity.value);

    if (currentValue < 10) {
        roomQuantity.value = currentValue + 1;
    }
})

const closePopupBtn = document.querySelector(".close-popup");
const modal = document.querySelector(".modal");

closePopupBtn.addEventListener("click", () => {
    console.log("aaa");
    modal.style.display = "none";
})

const closeBtn = document.querySelector(".closeBtn");
closeBtn.addEventListener("click", () => {
    console.log("aaa");
    modal.style.display = "none";
})


