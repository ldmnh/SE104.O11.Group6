// Lấy danh sách tất cả các thành phần comment__filter__item
const filterItems = document.querySelectorAll('.comment__filter__item')
const radios = document.querySelectorAll('.sort')

// Lặp qua từng thành phần và thêm sự kiện click
filterItems.forEach((item) => {
    item.addEventListener('click', () => {
        // Đặt lại màu nền, màu chữ và font weight của tất cả các thành phần về trạng thái gốc
        filterItems.forEach((originalItem) => {
            originalItem.style.backgroundColor = '' // Đặt lại màu nền
            originalItem.style.color = '' // Đặt lại màu chữ
            originalItem.style.fontWeight = '' // Đặt lại font weight
        })

        // Thiết lập màu nền, màu chữ và font weight của thành phần hiện tại
        item.style.backgroundColor = 'orange' // Màu cam
        item.style.color = 'white' // Màu trắng
        item.style.fontWeight = '500' // Font weight 500
    })
})

let dropdownButtons = document.querySelectorAll('.dropdown-button')
document.body.addEventListener('click', function (event) {
    let target = event.target
    if (target.classList.contains('dropdown-button')) {
        let dropdownContent = target.nextElementSibling
        if (dropdownContent.style.display === 'block') {
            dropdownContent.style.display = 'none'
        } else {
            // Đóng rồi mới mở cái mới
            closeAllDropdowns()
            dropdownContent.style.display = 'block'
        }
    } else if (!target.classList.contains('dropdown-content')) {
        // Đóng hết khi bấm ra ngoài
        closeAllDropdowns()
    }
})

// Đóng hết
function closeAllDropdowns() {
    let dropdownContents = document.querySelectorAll('.dropdown-content')
    dropdownContents.forEach(function (content) {
        content.style.display = 'none'
    })
}

// Định dạng tiền
function toCurrency(money) {
    let currency = money.toFixed(0).replace(/./g, function (c, i, a) {
        return i > 0 && c !== ',' && (a.length - i) % 3 === 0 ? '.' + c : c
    })
    return currency
}

// Thay đổi disabled của submit btn
const submitBtn = document.querySelector('.room-list__submit-button')
submitBtn.addEventListener('mouseover', enableBtn)
function enableBtn(event) {
    const totalStr = document.querySelector('.total-price').textContent
    const totalPrice = Number(totalStr.replaceAll('.', ''))

    if (totalPrice > 0)
        submitBtn.disabled = false
}

submitBtn.addEventListener('mouseout', disableBtn)
function disableBtn(event) {
    const totalStr = document.querySelector('.total-price').textContent
    const totalPrice = Number(totalStr.replaceAll('.', ''))

    if (totalPrice == 0)
        submitBtn.disabled = true
}

let submit = true
// Tính tổng giá tiền
function changeTotal(event) {
    const current = event.currentTarget
    const failModal = document.querySelector('.fail-modal')

    if (Number(current.value) > Number(current.max)) {
        current.value = current.max
        failModal.style.display = 'flex'
        submit = false
        setTimeout(() => failModal.style.display = 'none', 1000)
    }
    else if (Number(current.value) < Number(current.min)) {
        current.value = current.min
        failModal.style.display = 'flex'
        submit = false
        setTimeout(() => failModal.style.display = 'none', 1000)
    }

    let total = 0
    const quantityInputs = document.querySelectorAll('.quantity_input')
    quantityInputs.forEach(input => {
        let unitPriceStr = input.parentElement.parentElement.parentElement.querySelector('.room__price').textContent
        let unitPrice = Number(unitPriceStr.slice(4).replaceAll('.', ''))
        let quantity = Number(input.value)
        total += unitPrice * quantity
    })

    const totalElement = document.querySelector('.total-price')
    totalElement.innerHTML = toCurrency(total)

    if (total)
        enableBtn(event)
    else
        disableBtn(event)
}

const quantityInputs = document.querySelectorAll('.quantity_input')
quantityInputs.forEach(input => input.addEventListener('change', changeTotal))

// Chặn sự kiện submit
const bookingForm = document.querySelector('#booking-form')
bookingForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const totalStr = document.querySelector('.total-price').textContent
    const totalPrice = Number(totalStr.replaceAll('.', ''))

    if (totalPrice > 0 && submit)
        bookingForm.submit()

    submit = true
})

// Trạng thái uncheck cho tất cả thẻ radio
function uncheckAll() {
    radios.forEach((radio) => {
        radio.checked = false
    })
}

function selectRadio(optionId) {
    uncheckAll()
    var radio = document.getElementById(optionId)
    radio.checked = true
}


// Mặc định chọn bộ lọc theo 'Số điểm'
filterSortData()
function filterSortData() {
    const rating_point = getSort('rating')
    const rating_datetime = getSort('time-sort')
    const acco_id = document.getElementById('acco_id').value

    $.ajax({
        url: '/search/:acco_id/commentsfiltersort' + window.location.search,
        method: 'GET',
        data: {
            acco_id,
            rating_point,
            rating_datetime
        },

        success: function (results) {
            const filterSort = document.getElementById('filter-sort')
            filterSort.innerHTML = ''
            let html = ''
            if (results.message == 'Đã tìm thành công') {
                const accoComments = results.data
                accoComments.forEach(function (rating) {
                    html = `
                        <div class='comment-wrapper'>
                            <div class='comment-wrapper__profile'>
                                <img src='/imgs/user/${rating.au_user_avt_url}' alt='avatar' />
                                <p>${rating.au_user_full_name}</p>
                            </div>
                            <p class='comment-wrapper__comment'>
                                ${rating.rating_context}
                            </p>
                            <div class='comment-wrapper__point-day'>
                                <span class='comment-wrapper__point'>${rating.rating_point}</span>
                                <span>${rating.rating_datetime_format}</span>
                            </div>
                        </div>
                    `
                    const newDiv = document.createElement('div')
                    newDiv.classList.add('filter-sort-class')
                    newDiv.innerHTML = html
                    filterSort.appendChild(newDiv)
                })
            } else {
                // searchContent.innerHTML = `Không tìm thấy nhận xét`
                const errDiv = document.createElement('div')
                const filterSort = document.getElementById('filter-sort')
                filterSort.innerHTML = ''
                errDiv.textContent = 'Không tìm thấy nhận xét'
                filterSort.appendChild(errDiv)
            }
        },
        error: function (results) {
            alert('server error')
        }
    })
}

function getSort(className) {
    let sortResult = []
    let sort = document.querySelectorAll(`.${className}.sort:checked`)
    if (sort.length > 0) {
        sortResult = sort[0].value
    }
    return sortResult
}

document.addEventListener('click', function (e) {
    const target = e.target
    if (target.classList.contains('sort')) {
        filterSortData()
    }
})


const roomModalbtns = Array.from(document.querySelectorAll('.btn-room-modal'))
roomModalbtns.forEach(btn => {
    btn.addEventListener('click', function handleClick(event) {
        btn.removeEventListener('click', handleClick)

        let room_id = Number(btn.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.value)
        fetch('/search/roomDetails', {
            body: JSON.stringify({ room_id: room_id }),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(res => res.json())
            .then(data => {

                let roomArea = data.accoRoomDetails.room_area

                let roomImgs = data.accoRoomDetails.room_img
                let thumnails = ''
                roomImgs.slice(0, 4).forEach(img => {
                    thumnails += `<button onclick="currentSlide(event)" type="button"><img class="modal__thumnail" src="/imgs/room/${img.room_type_image_url}" alt=""></button>`
                })

                roomImgs.slice(4, roomImgs.length).forEach(img => {
                    thumnails += `<button onclick="currentSlide(event)" style="display: none" type="button"><img class="modal__thumnail" src="/imgs/room/${img.room_type_image_url}" alt=""></button>`
                })

                let roomSingleBed = data.accoRoomDetails.room_single_bed
                let singleBedDiv = ''
                if (roomSingleBed) {
                    singleBedDiv = `<div class="detail__item">
                                        <span class="material-symbols-outlined">single_bed</span>
                                        <p> ${roomSingleBed} giường đơn </p>
                                    </div>`
                }

                let roomDoubleBed = data.accoRoomDetails.room_double_bed
                let doubleBedDiv = ''
                if (roomDoubleBed) {
                    doubleBedDiv = `<div class="detail__item">
                                        <span class="material-symbols-outlined">single_bed</span>
                                        <p> ${roomDoubleBed} giường đơn </p>
                                    </div>`
                }

                let roomExte = data.accoRoomDetails.extension
                let exteLeft = ''
                roomExte.slice(0, parseInt(roomExte.length / 2)).forEach(exte => {
                    exteLeft += `<div class="detail__item">
                                    <span class="material-symbols-outlined">
                                        ${exte.exte_icon}
                                    </span>
                                    <p> ${exte.exte_name} </p>
                                </div>`
                })

                let exteRight = ''
                roomExte.slice(parseInt(roomExte.length / 2)).forEach(exte => {
                    exteRight += `<div class="detail__item">
                                    <span class="material-symbols-outlined">
                                        ${exte.exte_icon}
                                    </span>
                                    <p> ${exte.exte_name} </p>
                                </div>`
                })

                let roomMaxChild = data.accoRoomDetails.room_max_child
                let roomMaxChildDiv = ''
                if (roomMaxChild) {
                    roomMaxChildDiv = `<div class="detail__item">
                                            <span class="material-symbols-outlined">child_care</span>
                                            <p> ${roomMaxChild} trẻ em </p>
                                        </div>`
                }

                let roomMaxAdult = data.accoRoomDetails.room_max_adult

                let roomClass = data.accoRoomDetails.room_class

                let modal = `<div class="modal fade" id="room-detail" tabindex="-1" aria-hidden="true">
                                <div class="modal-dialog modal-xl modal-dialog-centered ">
                                        <div class="modal-content">
                                            <div class="modal__view">
                                                <h1>${roomClass}</h1>
                                                <div class="modal__view--big">
                                                    <button onclick="prevSlide(event)" type="button"><span class="material-symbols-outlined">chevron_left</span></button>
                                                    <img class="modal__slide" src="/imgs/room/${roomImgs[0].room_type_image_url}" alt="">
                                                    <button onclick="nextSlide(event)" type="button"><span class="material-symbols-outlined">chevron_right</span></button>
                                                </div>
                                                <div class="modal__view--small">
                                                    ${thumnails}
                                                </div>
                                            </div>
                                
                                            <div class="modal__detail detail">
                                                <div class="detail__feature feature">
                                                    <div class="feature__row">
                                                        <h2>Tiện nghi phòng</h2>
                                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div class="feature__row">
                                                        <div class="feature__col-left">
                                                            <div class="detail__item">
                                                                <span class="material-symbols-outlined">square_foot</span>
                                                                <p>${roomArea}m<sup>2</sup></p>
                                                            </div>
                                                            
                                                            ${singleBedDiv}
                                
                                                            ${doubleBedDiv}
                                
                                                            ${exteLeft}
                                                            
                                                        </div>
                                
                                                        <div class="feature__col-right">
                                                            <div class="detail__item">
                                                                <span class="material-symbols-outlined">boy</span>
                                                                <p> ${roomMaxAdult} người lớn</p>
                                                            </div>

                                                            ${roomMaxChildDiv}
                                                            
                                                            ${exteRight}

                                                            <div class="detail__item">
                                                                <span class="material-symbols-outlined">help</span>
                                                                <a href="/terms-of-use">Chính sách hủy phòng</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>`
                btn.addEventListener('click', handleClick)

                let roomModalElement = document.querySelector('#room-detail')

                if (roomModalElement) {
                    // If modal exists, remove it using Bootstrap's modal method
                    let existingModal = bootstrap.Modal.getInstance(roomModalElement)
                    existingModal.hide()

                    // When the modal is hidden, remove it from the DOM
                    roomModalElement.addEventListener('hidden.bs.modal', function () {
                        roomModalElement.remove()
                        // Insert the new modal
                        const footer = document.querySelector('footer')
                        footer.insertAdjacentHTML('afterend', modal)
                        let newRoomModalElement = document.querySelector('#room-detail')
                        let newRoomModal = new bootstrap.Modal(newRoomModalElement)
                        newRoomModal.show()
                    })
                } else {
                    // If modal doesn't exist, insert the new modal
                    const footer = document.querySelector('footer')
                    footer.insertAdjacentHTML('afterend', modal)
                    let newRoomModalElement = document.querySelector('#room-detail')
                    let newRoomModal = new bootstrap.Modal(newRoomModalElement)
                    newRoomModal.show()
                }
            })
    })
})