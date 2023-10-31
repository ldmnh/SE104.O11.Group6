//  Khai báo và lấy tham chiếu đến nút + -
const minusButton = document.getElementById('room__minus')
const plusButton = document.getElementById('room__plus')

// Thêm sự kiện cho nút -
minusButton.addEventListener('click', () => {
    // Khai báo và lấy tham chiếu đến trường nhập số lượng phòng
    const roomQuantity = document.getElementById('room__quantity')
    roomQuantity.value = Number(roomQuantity.value) - 1
})

// Thêm sự kiện cho nút +
plusButton.addEventListener('click', () => {
    // Khai báo và lấy tham chiếu đến trường nhập số lượng phòng
    const roomQuantity = document.getElementById('room__quantity')
    roomQuantity.value = Number(roomQuantity.value) + 1
})