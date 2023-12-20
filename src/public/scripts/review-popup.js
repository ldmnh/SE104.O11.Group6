// Lấy tham chiếu đến các phần tử DOM
const minusButtons = document.querySelectorAll(".minus");
const plusButtons = document.querySelectorAll(".plus");
const roomQuantityInputs = document.querySelectorAll("#room__quantity");

// Thêm sự kiện cho nút -
minusButtons.forEach((minusButton, index) => {
	minusButton.addEventListener("click", () => {
		// Get the current value of the corresponding room quantity input
		const currentValue = Number(roomQuantityInputs[index].value);

		// Ensure the value is greater than 0 before decrementing
		if (currentValue > 0) {
			roomQuantityInputs[index].value = currentValue - 1;
		}
	});
});


// Thêm sự kiện cho nút +
plusButtons.forEach((plusButton, index) => {
	plusButton.addEventListener("click", () => {
		// Get the current value of the corresponding room quantity input
		const currentValue = Number(roomQuantityInputs[index].value);

		// Ensure the value is less than 10 before incrementing
		if (currentValue < 10) {
			roomQuantityInputs[index].value = currentValue + 1;
		}
	});
});

const closePPopupBtn = document.querySelectorAll(".close-popup");
const modalReview = document.querySelectorAll(".modal__review-popup");

closePPopupBtn.forEach((item) => {
	item.addEventListener("click", () => {
		modalReview.forEach((itemModal) => {
			itemModal.style.display = "none";
		})
	});
})

const closeBtnReview = document.querySelectorAll(".closeBtn");
closeBtnReview.forEach((item) => {
	item.addEventListener("click", () => {
		console.log("aaa");
		modalReview.forEach((itemModal) => {
			itemModal.style.display = "none";
		})
	});
})
