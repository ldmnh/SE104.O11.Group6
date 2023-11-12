const ctx = document.getElementById('chart').getContext('2d')

Chart.defaults.font.size = 14
Chart.defaults.font.family = 'Segoe UI'

const chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'],
        datasets: [{
            label: 'Điểm đánh giá trung bình',
            data: [3.4, 3.6, 3.8, 4, 3.1, 3.8, 4.0, 4.6, 4.7, 4.1, 4.3, 4.2],
            yAxisID: 'rating',
            backgroundColor: 'rgba(254, 156, 11, 0.8)',
            borderColor: 'rgba(254, 156, 11, 0.8)',
        }, {
            label: 'Đơn đặt',
            type: 'bar',
            data: [267, 489, 301, 456, 789, 557, 1113, 789, 869, 1011, 802, 910],
            yAxisID: 'booking',
            backgroundColor: 'rgba(0, 161, 166, 0.6)',
        }, {
            label: 'Lượt đánh giá',
            type: 'bar',
            data: [204, 476, 250, 403, 665, 453, 976, 530, 482, 807, 741, 619],
            yAxisID: 'booking',
            backgroundColor: 'rgba(255, 99, 132, 0.6)',
        },]
    },
    options: {
        scales: {
            rating: {
                beginAtZero: true,
                type: 'linear',
                position: 'right',
            },
            booking: {
                beginAtZero: true,
                type: 'linear',
                position: 'left',
            }
        }
    }
})