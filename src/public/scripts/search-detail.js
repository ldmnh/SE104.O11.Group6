// Lấy danh sách tất cả các thành phần comment__filter__item
const filterItems = document.querySelectorAll(".comment__filter__item")
const radios = document.querySelectorAll(".sort")

// Lặp qua từng thành phần và thêm sự kiện click
filterItems.forEach((item) => {
	item.addEventListener("click", () => {
		// Đặt lại màu nền, màu chữ và font weight của tất cả các thành phần về trạng thái gốc
		filterItems.forEach((originalItem) => {
			originalItem.style.backgroundColor = "" // Đặt lại màu nền
			originalItem.style.color = "" // Đặt lại màu chữ
			originalItem.style.fontWeight = "" // Đặt lại font weight
		})

		// Thiết lập màu nền, màu chữ và font weight của thành phần hiện tại
		item.style.backgroundColor = "orange" // Màu cam
		item.style.color = "white" // Màu trắng
		item.style.fontWeight = "500" // Font weight 500
	})
})

let dropdownButtons = document.querySelectorAll(".dropdown-button")
document.body.addEventListener("click", function (event) {
	let target = event.target
	if (target.classList.contains("dropdown-button")) {
		let dropdownContent = target.nextElementSibling
		if (dropdownContent.style.display === "block") {
			dropdownContent.style.display = "none"
		} else {
			// Đóng rồi mới mở cái mới
			closeAllDropdowns()
			dropdownContent.style.display = "block"
		}
	} else if (!target.classList.contains("dropdown-content")) {
		// Đóng hết khi bấm ra ngoài
		closeAllDropdowns()
	}
})

// Đóng hết
function closeAllDropdowns() {
	let dropdownContents = document.querySelectorAll(".dropdown-content")
	dropdownContents.forEach(function (content) {
		content.style.display = "none"
	})
}

// Định dạng tiền
function toCurrency(money) {
	let currency = money.toFixed(0).replace(/./g, function (c, i, a) {
		return i > 0 && c !== "," && (a.length - i) % 3 === 0 ? "." + c : c
	})
	return currency
}

// Tính tổng giá tiền
function changeTotal(event) {
	const current = event.currentTarget
	if (Number(current.value) > Number(current.max))
		current.value = current.max
	else if (Number(current.value) < Number(current.min))
		current.value = current.min

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
}

const quantityInputs = document.querySelectorAll('.quantity_input')
console.log(quantityInputs)
quantityInputs.forEach(input => input.addEventListener('change', changeTotal))

// Chặn sự kiện submit
const bookingSubmit = document.querySelector('.room-list__submit-button')
bookingSubmit.addEventListener('click', (event) => {
	event.preventDefault()
	const totalStr = document.querySelector('.total-price').textContent
	const totalPrice = Number(totalStr.replaceAll('.', ''))
	if (totalPrice > 0) {
		const bookingForm = document.getElementById('booking-form')
		bookingForm.submit()
	}
})

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


// // Mặc định chọn bộ lọc theo 'Số điểm'
// const defaultSelectedItem = document.getElementById("filter__item-rating");
// defaultSelectedItem.click();

filterSortData();
function filterSortData() {
  const rating_point = getSort("rating");
  const rating_datetime = getSort("time-sort");
  const acco_id = document.getElementById('acco_id').value;

  $.ajax({
    url: "/search/:acco_id/commentsfiltersort" + window.location.search,
    method: "GET",
    data: {
      acco_id,
      rating_point,
      rating_datetime
    },

    success: function (results) {
      const filterSort = document.getElementById("filter-sort");
      filterSort.innerHTML = "";
      let html = "";
      if (results.message == "Đã tìm thành công") {
        const accoComments = results.data;
        accoComments.forEach(function (rating) {
            html = `<div class="comment-wrapper">
               <div class="comment-wrapper__profile">
                <img src="/imgs/user/${rating.au_user_avt_url}" alt="avatar" />
                <p>${rating.au_user_full_name}</p>
            </div>
            <p class="comment-wrapper__comment">
                ${rating.rating_context}
            </p>
            <div class="comment-wrapper__point-day">
                <span class="comment-wrapper__point">${rating.rating_point}</span>
                <span>${rating.rating_datetime_format}</span>
            </div>
        </div>
        `;
          const newDiv = document.createElement("div");
          newDiv.classList.add("filter-sort-class");
          newDiv.innerHTML = html;
          filterSort.appendChild(newDiv);
        });
      } else {
        // searchContent.innerHTML = `Không tìm thấy nhận xét`;
        const errDiv = document.createElement("div");
        const filterSort = document.getElementById("filter-sort");
        filterSort.innerHTML = "";
        errDiv.textContent = "Không tìm thấy nhận xét";
        filterSort.appendChild(errDiv);
      }
    },
    error: function(results){  
      alert('server error')     
}  
  });
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
  if (target.classList.contains("sort")) {
    filterSortData();
  }
});
