const index = function () { }


// Hàm xử lý datetỉme ---> Thứ x, ngày x tháng x năm x
index.toXDDMMYYYY = function (datetime) {
    let day = ''
    switch (datetime.getDay()) {
        case 0:
            day = 'Chủ nhật'
            break

        case 1:
            day = 'Thứ hai'
            break

        case 2:
            day = 'Thứ ba'
            break

        case 3:
            day = 'Thứ tư'
            break

        case 4:
            day = 'Thứ năm'
            break

        case 5:
            day = 'Thứ sáu'
            break

        case 6:
            day = 'Thứ bảy'
            break

    }

    let date = datetime.getDate()
    if (date < 10) {
        date = "0" + datetime.getDate();
    }

    let month = datetime.getMonth() + 1;
    if (month < 10) {
        month = "0" + month;
    }

    let year = datetime.getYear() + 1900
    return (day + ', ngày ' + date + ' tháng ' + month + ' năm ' + year)
}

// Hàm xử lý datetime ---> DD tháng MM năm YYYY
index.toDDthangMMnamYYYY = function (datetime) {
    let date = datetime.getDate()
    if (date < 10) {
        date = "0" + datetime.getDate();
    }
    let year = datetime.getYear() + 1900
    let month = datetime.getMonth() + 1;
    if (month < 10) {
        month = "0" + month
    }

    return (date + ' tháng ' + month + ' năm ' + year)
}

// Hàm xử lý datetime ---> DD/MM/YYYY
index.toDDMMYYYY = function (datetime) {
    let date = datetime.getDate()
    if (date < 10) {
        date = "0" + datetime.getDate()
    }
    let month = datetime.getMonth() + 1;
    if (month < 10) {
        month = "0" + month
    }
    let year = datetime.getYear() + 1900
    return (date + '/' + month + '/' + year)
}

// Hàm xử lý datetime ---> DD tháng MM HH:MM
index.toDDMMYYYYHHMM = function (datetime) {
    let date = datetime.getDate()
    if (date < 10) {
        date = "0" + datetime.getDate();
    }
    let month = datetime.getMonth() + 1;
    if (month < 10) {
        month = "0" + month
    }
    let year = datetime.getYear() + 1900
    return (date + ' tháng ' + month + ' năm ' + year + ' ' + index.toHHMM(datetime))
}

// Hàm xử lý datetime ---> giờ:phút
index.toHHMM = function (datetime) {
    let hour = datetime.getHours()
    if (hour < 10) {
        hour = "0" + datetime.getHours();
    }

    let minute = datetime.getMinutes()
    if (minute < 10) {
        minute = "0" + datetime.getMinutes();
    }

    return (hour + ':' + minute)
}

index.toCurrency = function (money) {
    let currency = money.toFixed(0).replace(/./g, function (c, i, a) {
        return i > 0 && c !== "," && (a.length - i) % 3 === 0 ? "." + c : c;
    });
    return currency;
}

index.bookStatus = function (book_status) {
    let book_status_mean = ''
    switch (book_status) {
        case -1:
            book_status_mean = 'Đã hủy'
            break

        case 0:
            book_status_mean = 'Chưa sử dụng'
            break

        case 1:
            book_status_mean = 'Đã sử dụng'
            break

        default:
            book_status_mean = 'Đang xử lý'
            break
    }
    return book_status_mean
}

index.bookIsPaid = function (book_is_paid) {
    let book_is_paid_mean = ''
    switch (book_is_paid) {
        case 0:
            book_is_paid_mean = 'Chưa thanh toán'
            break

        case 1:
            book_is_paid_mean = 'Đã thanh toán'
            break

        default:
            book_is_paid_mean = 'Đang xử lý'
            break
    }
    return book_is_paid_mean
}

index.feaIcon = function (fea_id) {
    let fea_icon = ''
    switch (fea_id) {

        case 1:
            fea_icon = 'beach_access'
            break;

        case 2:
            fea_icon = 'yard'
            break;

        case 3:
            fea_icon = 'local_parking'
            break;

        case 4:
            fea_icon = 'lock'
            break;

        case 5:
            fea_icon = 'elevator'
            break;

        case 6:
            fea_icon = 'pool'
            break;

        default:
            fea_icon = 'done'
            break;

    }
    return fea_icon
}

index.exteIcon = function (exte_id) {
    let exte_icon = ''
    switch (exte_id) {
        case 1:
            exte_icon = 'restaurant'
            break;

        case 2:
            exte_icon = 'wifi'
            break;

        case 3:
            exte_icon = 'smoke_free'
            break;

        case 4:
            exte_icon = 'pets'
            break;

        case 5:
            exte_icon = 'kitchen'
            break;

        case 6:
            exte_icon = 'shower'
            break;

        case 7:
            exte_icon = 'ac_unit'
            break;

        case 8:
            exte_icon = 'chair'
            break;

        case 9:
            exte_icon = 'bathtub'
            break;

        case 10:
            exte_icon = 'desktop_windows'
            break;

        default:
            exte_icon = 'done'
            break;

    }
    return exte_icon
}


module.exports = index;