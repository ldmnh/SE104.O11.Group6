const closePopupBtn2 = document.querySelector('.closeIcon2')
const modal2 = document.querySelector('.modal2')

closePopupBtn2.addEventListener('click', () => {
    console.log('aaa')
    modal2.style.display = 'none'
})

const closeBtn2 = document.querySelector('.credit-button--submit1')
closeBtn2.addEventListener('click', () => {
    console.log('aaa')
    modal2.style.display = 'none'
})

//Khi nhấn nút Hoàn thành
const doneCreditBtn = document.querySelector('.credit-button--submit2')
const popupOtpCredit = document.querySelector('.modal-otp')
doneCreditBtn.addEventListener('click', () => {
    modal2.style.display = 'none'
    popupOtpCredit.style.display = 'block'
})
