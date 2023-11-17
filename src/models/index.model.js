const index = function () {}

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

    let year = datetime.getYear() + 1900
    return (day + ', ngày ' + datetime.getDate() + ' tháng ' + datetime.getMonth() + ' năm ' + year)
}

// Hàm xử lý datetime ---> DD tháng MM năm YYYY
index.toDDMMYYYY = function (datetime) {
    let date = datetime.getDate()
    if (date < 10) {
        date = "0" + datetime.getDate();
    }
    let year = datetime.getYear() + 1900
    return (datetime.getDate() + ' tháng ' + datetime.getMonth() + ' năm ' + year)
}

// Hàm xử lý datetime ---> DD tháng MM HH:MM
index.toDDMMYYYYHHMM = function (datetime) {
    let date = datetime.getDate()
    if (date < 10) {
        date = "0" + datetime.getDate();
    }
    let year = datetime.getYear() + 1900
    return (datetime.getDate() + ' tháng ' + datetime.getMonth() + ' năm ' + year + ' ' + index.toHHMM(datetime))
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
   let currency = money.toFixed(0).replace(/./g, function(c, i, a) {
        return i > 0 && c !== "," && (a.length - i) % 3 === 0 ? "." + c : c;
      });
    return currency;
}

module.exports = index;