const form = document.getElementById('cancel-form');
const closePopupBtn = document.querySelector(".closeIcon");
closePopupBtn.addEventListener("click", () => {
    modal.style.display = "none";
})

const closeBtn = document.querySelector(".closeBtn");
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
})
form.addEventListener('submit', (e) => {
    e.preventDefault()
    Cancel()
})
function Cancel() {
    const selectedOption = document.querySelector(`input[name="option"]:checked`)
    const selectedValue = {
        option: selectedOption.value
    }

    fetch('/booking/cancellation', {
        method: "POST",
        body: JSON.stringify(selectedValue),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => res.json()).then(back => {
        if (back.message == 'Thành công') {
            window.location.href = '/booking/cancellation'
        }
    })
}
