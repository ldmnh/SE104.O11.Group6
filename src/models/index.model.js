const index = function () {}

// Hàm xử lý datetỉm ---> Thứ x, ngày x tháng x năm x
index.toXDDMMYYY = function (datetime = new Date()) {
    let book_day = ''
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

    return (day + ', ngày ' + datetime.getDate() + ' tháng ' + datetime.getMonth() + ' năm ' + datetime.getYear())
}

// Hàm xử lý datetỉm ---> giờ:phút
index.toHHMM = function (datetime = new Date()) {
    let hour = ''
    switch (datetime.getHours()) {
        case 0:
            hour = '00'
            break;

        case 1:
            hour = '01'
            break;

        case 2:
            hour = '02'
            break;

        case 3:
            hour = '03'
            break;

        case 4:
            hour = '04'
            break;

        case 5:
            hour = '05'
            break;

        case 6:
            hour = '06'
            break;

        case 7:
            hour = '07'
            break;

        case 8:
            hour = '08'
            break;

        case 8:
            hour = '09'
            break;

        default:
            hour = datetime.getHours()
            break;
    }

    let minute = ''
    switch (datetime.getMinutes()) {
        case 0:
             minute = '00'
            break;

        case 1:
             minute = '01'
            break;

        case 2:
             minute = '02'
            break;

        case 3:
             minute = '03'
            break;

        case 4:
             minute = '04'
            break;

        case 5:
             minute = '05'
            break;

        case 6:
             minute = '06'
            break;

        case 7:
             minute = '07'
            break;

        case 8:
             minute = '08'
            break;

        case 8:
             minute = '09'
            break;

        default:
             minute = datetime.getMinutes()
            break;
    }

    return (hour + ':' + minute)
}

module.exports = index;