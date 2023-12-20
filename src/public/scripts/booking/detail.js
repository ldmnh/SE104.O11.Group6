const isCheck1 = document.querySelector('.is-check-1').value
if (isCheck1 == '0') {
    const cancelPopup = document.querySelector(".cancel-modal");
    document.getElementById("cancel-btn")
        .addEventListener("click", function () {
            cancelPopup.style.display = "block";
        });
}

const formReviews = document.querySelectorAll(".form-review");
formReviews.forEach((f, index) => {
    f.addEventListener("submit", (e) => {
        e.preventDefault();
    });
});

const reviviewBtnPost = document.querySelectorAll(".review-btn-post");
reviviewBtnPost.forEach((item, index) => {
    item.addEventListener("click", () => {
        const reviewPopup = item.parentElement.querySelector(
            ".modal__review-popup"
        );
        reviewPopup.style.display = "block";

        //Khi người dùng nhấn đăng:
        const successVPopup = item.parentElement.querySelector(".modal-success");
        const postBtn = item.parentElement.querySelector(".post-btn");
        postBtn.addEventListener("click", () => {
            reviewPopup.style.display = "none";
            successVPopup.style.display = "block";

            const closePopupBtn = item.parentElement.querySelector(
                ".success-popup__close-btn"
            );
            const modalSuccess = item.parentElement.querySelector(".modal-success");

            closePopupBtn.addEventListener("click", () => {
                modalSuccess.style.display = "none";
                const data_rating = {
                    room_id: item.parentElement.querySelector(".room_id").value,
                    rating_point:
                        item.parentElement.querySelector("#room__quantity").value,
                    rating_context:
                        item.parentElement.querySelector(".input--detail").value,
                };

                fetch("/account/addReview", {
                    method: "POST",
                    body: JSON.stringify(data_rating),
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
            });
        });
    });
});
