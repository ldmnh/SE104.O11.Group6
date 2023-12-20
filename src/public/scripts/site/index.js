const findOutNow = document.querySelectorAll(".find-out-now");

findOutNow.forEach((item) => {
    item.addEventListener("click", () => {
        window.location.href = "/search/2";
    });
});
