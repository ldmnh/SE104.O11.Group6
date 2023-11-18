// Lay nut danh gia va nut popup
const reviewpopup = document.querySelector(".modal-review");
const reviewBtns = document.querySelectorAll(".review-btn");

const onClickReviewBtn = () => {
    reviewpopup.style.display = "block";
};

reviewBtns.forEach((reviewBtn) => {
    reviewBtn.addEventListener("click", onClickReviewBtn);
});

const cancelPopup = document.querySelector('.modal');
document.getElementById('cancelBtn').addEventListener('click', function () {
    cancelPopup.style.display = 'block';
})
