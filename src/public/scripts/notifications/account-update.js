const updateBtn = document.querySelector('.btn-update')
const promoBtn = document.querySelector('.btn-promo')

const redirect2updateView = () => {
    window.location.href = '/notifications/account-update'
}

const redirect2promoView = () => {
    window.location.href = '/notifications/promotion'
}

updateBtn.addEventListener('click', redirect2updateView)
promoBtn.addEventListener('click', redirect2promoView)

const modalBtns = document.querySelectorAll('.popup-btn')
const modals = document.querySelectorAll('.popup')
const closeBtns = document.querySelectorAll('.close-btn')
const notiItems = document.querySelectorAll('.noti-item__block')
const markAllReadButton = document.querySelector('.btn--outlined')
const popupVisible = new Array(modals.length).fill(false)
const form = document.querySelectorAll('.noti-item__main')
const btnReadAll = document.querySelector('.btn-read-all')

form.forEach((f, index) => {
    f.addEventListener('submit', e => {
        //Ngăn chặn việc gửi form nếu có bất kỳ trường nào không hợp lệ
        e.preventDefault()
    })
})

// Lặp qua từng nút và gán sự kiện hiển thị pop-up, đánh dấu đã đọc cho thông báo đó
modalBtns.forEach((btn, index) => {
    btn.onclick = function () {
        modals[index].style.display = 'block'
        popupVisible[index] = true
        notiItems[index].style.backgroundColor = 'white'

        const noti_id = document.querySelector(`input[name = "noti ${index}"]`).value;

        fetch("/notifications/account-update", {
            method: 'POST',
            body: JSON.stringify({
                noti_id: noti_id
            }),
            headers: {
                "Content-Type": "application/json",
            },
        })
    }
})

// Lặp qua từng nút đóng và gán sự kiện đóng pop-up tương ứng
closeBtns.forEach((closeBtn, index) => {
    closeBtn.onclick = function () {
        modals[index].style.display = 'none'
        popupVisible[index] = fals
    }
})

// Gán sự kiện đóng khi nhấp chuột vào bất kỳ khu vực nào trên màn hình
window.onclick = function (e) {
    modals.forEach((modal, index) => {
        if (e.target == modal) {
            modal.style.display = 'none'
            popupVisible[index] = false
        }
    })
}

// Đánh dấu đã đọc tất cả
btnReadAll.addEventListener("click", () => {
    fetch("/notifications/read-all", {
        method: "POST",
        body: JSON.stringify({
            noti_type: 1
        }),
        headers: {
            "Content-Type": "application/json",
        },
    })

    notiItems.forEach((item) => {
        item.style.background = "white";
    })
})