//Popup
const modalBtns = document.querySelectorAll('.logout-btn')
const modals = document.querySelectorAll('.popup')
const closeBtns = document.querySelectorAll('.close-btn')
const cancelBtns = document.querySelectorAll('.btn-cancel')

modalBtns.forEach((btn, index) => {
    btn.onclick = function () {
        modals[index].style.display = 'block'
    }
})

// Đóng popup khi chọn dấu x
closeBtns.forEach((closeBtn, index) => {
    closeBtn.onclick = function () {
        modals[index].style.display = 'none'
    }
})

// Đóng popup khi chọn nút hủy
cancelBtns.forEach((cancelBtn, index) => {
    cancelBtn.onclick = function () {
        modals[index].style.display = 'none'
    }
})

// Đóng popup khi nhấp chuột vào bất kỳ khu vực nào trên màn hình
window.onclick = function (e) {
    modals.forEach((modal, index) => {
        if (e.target == modal) {
            modal.style.display = 'none'
        }
    })
}

// Chuyển về trang đăng nhập
const logoutBtn = document.querySelector('.btn-logout')

const redirect2LogOutView = () => {
    window.location.href = '/auth/login'
}

logoutBtn.addEventListener('click', redirect2LogOutView)

const profileBtn = document.querySelector('.profile-btn')
const accountPaymentBtn = document.querySelector('.account-payment-btn')
const changePasswordBtn = document.querySelector('.change-password-btn')

const redirect2profiletView = () => {
    window.location.href = '/account/information'
}

const redirect2accountPaymentView = () => {
    window.location.href = '/account/payment'
}

const redirect2changePasswordView = () => {
    window.location.href = '/account/change-password'
}
profileBtn.addEventListener('click', redirect2profiletView)
accountPaymentBtn.addEventListener('click', redirect2accountPaymentView)
changePasswordBtn.addEventListener('click', redirect2changePasswordView)

const logoutBtn = document.querySelector('.logoutBtn')

const redirect2LogOutView = () => {
    window.location.href = '/auth/logout'
}

logoutBtn.addEventListener('click', redirect2LogOutView)

// Lay nut danh gia va nut popup
const reviewpopup = document.querySelector('.modal')
const reviewBtns = document.querySelectorAll('.review-btn')

const onClickReviewBtn = () => {
    reviewpopup.style.display = 'block'
}

reviewBtns.forEach((reviewBtn) => {
    reviewBtn.addEventListener('click', onClickReviewBtn)
})

// //Khi nhấn vào nút xem chi tiết: detail-btn
// const detailBtns = document.querySelectorAll('.detail-btn')
// const redirect2OrderConfirmView = () => {
//   window.location.href = '/order-confirm'
// }
// detailBtns.forEach((detailBtn) => {
//   detailBtn.addEventListener('click', redirect2OrderConfirmView)
// })
