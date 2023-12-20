// Lấy danh sách tất cả các thành phần search-results__filter__item
const filterItems = document.querySelectorAll(".search-results__filter__item");
const radios = document.querySelectorAll(".sort");

// Lặp qua từng thành phần và thêm sự kiện click
filterItems.forEach((item) => {
    item.addEventListener("click", () => {
        // Đặt lại màu nền, màu chữ và font weight của tất cả các thành phần về trạng thái gốc
        filterItems.forEach((originalItem) => {
            originalItem.style.backgroundColor = ""; // Đặt lại màu nền
            originalItem.style.color = ""; // Đặt lại màu chữ
            originalItem.style.fontWeight = ""; // Đặt lại font weight
        });

        // Thiết lập màu nền, màu chữ và font weight của thành phần hiện tại
        item.style.backgroundColor = "orange"; // Màu cam
        item.style.color = "white"; // Màu trắng
        item.style.fontWeight = "500"; // Font weight 500
    });
});

let dropdownButtons = document.querySelectorAll(".dropdown-button");

document.body.addEventListener("click", function (event) {
    let target = event.target;
    if (target.classList.contains("dropdown-button")) {
        let dropdownContent = target.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            // Đóng rồi mới mở cái mới
            closeAllDropdowns();
            dropdownContent.style.display = "block";
        }
    } else if (!target.classList.contains("dropdown-content")) {
        // Đóng hết khi bấm ra ngoài
        closeAllDropdowns();
    }
});

// Đóng hết
function closeAllDropdowns() {
    let dropdownContents = document.querySelectorAll(".dropdown-content");
    dropdownContents.forEach(function (content) {
        content.style.display = "none";
    });
}

// Mặc định chọn bộ lọc theo 'Giá'
const defaultSelectedItem = document.getElementById("filter__item-price");
defaultSelectedItem.click();

// Lấy các phần tử cần tương tác
const extendContent = document.getElementById("extend-content");
const toggleExtend = document.getElementById("toggle-extend");
const hiddenCheckboxes = document.querySelectorAll(".form-check.hidden");
let isExpanded = false;

// Lắng nghe sự kiện click trên nút 'Hiển thị tất cả' và 'Ấn bớt'
toggleExtend.addEventListener("click", function (e) {
    e.preventDefault();

    // Nếu đang ẩn, thì hiển thị tất cả
    if (!isExpanded) {
        hiddenCheckboxes.forEach((item) => {
            item.classList.remove("hidden");
        });

        // Thay đổi nội dung và biểu tượng của nút
        toggleExtend.textContent = "Ẩn bớt";
        extendContent.querySelector("span").textContent = "expand_less";

        isExpanded = true;
    } else {
        // Nếu đang hiển thị tất cả, thì ẩn bớt
        hiddenCheckboxes.forEach((item) => {
            item.classList.add("hidden");
        });

        // Thay đổi nội dung và biểu tượng của nút
        toggleExtend.textContent = "Hiển thị tất cả";
        extendContent.querySelector("span").textContent = "expand_more";

        isExpanded = false;
    }
});

// Trạng thái uncheck cho tất cả thẻ radio
function uncheckAll() {
    radios.forEach((radio) => {
        radio.checked = false;
    });
}

function selectRadio(optionId) {
    uncheckAll();
    var radio = document.getElementById(optionId);
    radio.checked = true;
}

filterSortData();
function filterSortData() {
    const acco_type = getFilter("acco-type");
    const rating_point = getFilter("rating-point");
    const bed_type = getFilter("bed-type");
    const acco_star = getFilter("acco-star");
    const acco_fea = getFilter("acco-fea");
    const price = getFilter("price");
    const cost = getSort("cost");
    const acco_star_sort = getSort("acco-star-sort");
    const count_rating = getSort("count-rating");

    $.ajax({
        url: "/search/resultsfiltersort" + window.location.search,
        method: "GET",
        data: {
            acco_type,
            rating_point,
            bed_type,
            acco_star,
            acco_fea,
            price,
            cost,
            acco_star_sort,
            count_rating,
        },

        success: function (results) {
            const filterSort = document.getElementById("filter-sort");
            const searchContent = document.getElementById("search__content");
            filterSort.innerHTML = "";
            let html = "";
            if (results.message == "Đã tìm thành công") {
                const accoData = results.data;
                let ratingText = "";
                accoData.forEach(function (result) {
                    if (result.room_avg_rating >= 9 && result.room_avg_rating <= 10)
                        ratingText = "Trên cả tuyệt vời";
                    else if (result.room_avg_rating >= 8 && result.room_avg_rating <= 10)
                        ratingText = "Xuất sắc";
                    else if (result.room_avg_rating >= 7 && result.room_avg_rating <= 10)
                        ratingText = "Rất tốt";
                    else if (result.room_avg_rating >= 6 && result.room_avg_rating <= 10)
                        ratingText = "Hài lòng";
                    else {
                        ratingText = "Phù hợp";
                    }
                    let iconRating = "";
                    for (let i = 0; i < result.acco_star; i++) {
                        iconRating += `<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1">star</span>`;
                    }
                    for (let i = 0; i < 5 - result.acco_star; i++) {
                        iconRating += `<span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 0">star</span>`;
                    }
                    if (result.room_discount) {
                        html = `
                            <div class="result-block">
                                <div class="result-block__tag-sale">
                                    <span class="material-symbols-outlined icon--filled">alarm</span>
                                    <p class="result-block__sale-content">Đặt chỗ cùng 2WAYS</p>
                                    <p class="result-block__sale-valid">Khuyến mãi có thời hạn</p>
                                </div>
                            
                                <div class="result-block__main-container">
                                    <div class="result-block__main">
                                        <img src="/imgs/branchs/apartment.png" alt="apartment" class="result-block__picture">
                                        <div class="result-block__content">
                                            <p class="result-block__name"> ${result.acco_name}</p>
                                            <div class="result-block__rate-star">${iconRating}</div>
                                            <div class="result-block__extensions">
                                                <a href="${result.acco_location_link}" target="blank" class="result-block__map">Xem trên bản đồ</a>
                                                <div class="result-block__details">
                                                    <span class="material-symbols-outlined icon--filled">beach_access</span>
                                                    <p class="result-block__details-content">Giáp biển</p>
                                                </div>
                                                <div class="result-block__details">
                                                    <p class="result-block__details-content">Cách trung tâm 3.1km</p>
                                                </div>
                                            </div>
                                            <div class="result-block__room-details">
                                                <p class="result-block__room-detais__content">${result.room_type} ${result.room_class} nhìn ra biển</p>
                                                <p>${result.room_double_bed ? `${result.room_double_bed} giường đôi` : `${result.room_single_bed} giường đơn`}</p>
                                                <div class="result-block__room-detais__cancel-policy">
                                                    <span class="material-symbols-outlined">check</span>
                                                    <p class="cancel-policy__content">Miễn phí hủy</p>
                                                </div>
                                                <div class="result-block__room-detais__cancel-policy">
                                                    <span class="material-symbols-outlined">check</span>
                                                    <p class="cancel-policy__content">Không cần thanh toán trước</p>
                                                    <p class="cancel-policy__sub-content">- thanh toán tại chỗ</p>
                                                </div>
                                                <p class="result-block__room-detais__hot-sale">Chỉ còn duy nhất 1 phòng có giá này trên trang!!!</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="result-block__infor">
                                        <div class="result-block__cus-rate">
                                            <div class="result-block__cus-rate__content">
                                                <p class="result-block__cus-rate__main-content">${ratingText}</p>
                                                <p class="result-block__cus-rate__sub-content">${result.room_count_rating} đánh giá</p>
                                            </div>
                                            <div class="result-block__cus-rate__point">
                                                <p>${result.room_avg_rating}</p>
                                            </div>
                                        </div>
                                        <div class="result-block__price">
                                            <p class="result-block__option">1 đêm, ${result.room_max_adult} người lớn</p>
                                            <p class="result-block__origin-price">VND ${result.room_cost_before_currency}</p>
                                            <p class="result-block__discount-price">VND ${result.room_cost_after_currency}</p>
                                            <label for="result-block__discount-price" class="result-block__label">Đã gồm thuế và phí</label>
                                            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                                <a href="/search/${result.acco_id}" id="select-button" type="submit" class="form__submit">Xem ngay</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `;
                        const prov_name = "2WAYS";
                        const resultCount = results.data.length;
                        searchContent.innerHTML = `${prov_name}: Tìm thấy ${resultCount} chỗ nghỉ`;
                    } else {
                        html = `
                            <div class="nresult-block__main-container">
                                <div class="nresult-block__main">
                                    <img src="/imgs/branchs/apartment.png" alt="apartment" class="nresult-block__picture">
                                    <div class="nresult-block__content">
                                        <p class="nresult-block__name">${result.acco_name}</p>
                                        <div class="nresult-block__rate-star">${iconRating}</div>
                                            <div class="nresult-block__extensions">
                                                <a href="${result.acco_location_link}" target="blank" class="nresult-block__map">Xem trên bản đồ</a>
                                                <div class="nresult-block__details">
                                                    <span class="material-symbols-outlined">beach_access</span>
                                                    <p class="nresult-block__details-content">Giáp biển</p>
                                                </div>
                                                <div class="nresult-block__details">
                                                    <p class="nresult-block__details-content">Cách trung tâm 3.1km</p>
                                                </div>
                                            </div>
                                            <div class="nresult-block__room-details">
                                                <p class="nresult-block__room-detais__content">${result.room_type} ${result.room_class} nhìn ra biển</p>
                                                <p>${result.room_double_bed ? `${result.room_double_bed} giường đôi` : `${result.room_single_bed} giường đơn`}</p>
                                                <div class="nresult-block__room-detais__cancel-policy">
                                                    <span class="material-symbols-outlined">check</span>
                                                    <p class="ncancel-policy__content">Miễn phí hủy</p>
                                                </div>
                                                <div class="nresult-block__room-detais__cancel-policy">
                                                    <span class="material-symbols-outlined">check</span>
                                                    <p class="ncancel-policy__content">Không cần thanh toán trước</p>
                                                    <p class="ncancel-policy__sub-content">- thanh toán tại chỗ</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="nresult-block__infor">
                                        <div class="nresult-block__cus-rate">
                                            <div class="nresult-block__cus-rate__content">
                                                <p class="nresult-block__cus-rate__main-content">${ratingText}</p>
                                                <p class="nresult-block__cus-rate__sub-content">${result.room_count_rating} đánh giá</p>
                                            </div>
                                            <div class="nresult-block__cus-rate__point">
                                                <p>${result.room_avg_rating}</p>
                                            </div>
                                        </div>
                                        <div class="nresult-block__price">
                                            <p class="nresult-block__option">1 đêm, ${result.room_max_adult} người lớn</p>
                                            <p class="nresult-block__origin-price">VND ${result.room_cost_before_currency}</p>
                                            <label for="nresult-block__origin-price" class="result-block__label">Đã gồm thuế và phí</label>
                                            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                                <a href="/search/${result.acco_id}" id="select-button" class="form__submit">Xem ngay</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `;
                    }

                    const newDiv = document.createElement("div");
                    newDiv.classList.add("filter-sort-class");
                    newDiv.innerHTML = html;
                    filterSort.appendChild(newDiv);
                });
            } else {
                searchContent.innerHTML = `Không tìm thấy chỗ nghỉ phù hợp`;
                const filterSort = document.getElementById("filter-sort");
                filterSort.innerHTML = "";
                const centerDiv = document.createElement("div");
                centerDiv.style.textAlign = "center";

                const imgElement = document.createElement("img");
                imgElement.src = "/imgs/nothing-here.png";
                imgElement.alt = "Not found";
                imgElement.width = 300;
                centerDiv.appendChild(imgElement);
                filterSort.appendChild(centerDiv);
            }
        },
    });
}

function getFilter(className) {
    let filter = [];
    let formCheckInput = document.querySelectorAll(
        `.${className}.form-check-input:checked`
    );
    formCheckInput.forEach((item) => {
        filter.push(item.value);
    });
    return filter;
}

function getSort(className) {
    let sortResult = [];
    let sort = document.querySelectorAll(`.${className}.sort:checked`);
    if (sort.length > 0) {
        sortResult = sort[0].value;
    }
    return sortResult;
}

document.addEventListener("click", function (e) {
    const target = e.target;
    if (target.classList.contains("form-check-input")) {
        filterSortData();
    }
    if (target.classList.contains("sort")) {
        filterSortData();
    }
});
