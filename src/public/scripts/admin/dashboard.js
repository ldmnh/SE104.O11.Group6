const ctx = document.getElementById('chart').getContext('2d')

Chart.defaults.font.size = 14
Chart.defaults.font.family = 'Segoe UI'

fetch('/admin/dashboard/getchart')
    .then(res => res.json())
    .then(data => {
        let month = []
        let book = []
        let numsRating = []
        let avgRating = []
        for (ele of data.chart) {
            month.push(`Tháng ${ele['month']}`)
            book.push(ele['count_book']? ele['count_book']:0)
            numsRating.push(ele['count_rating'] ? ele['count_rating']:0)
            avgRating.push(ele['avg_rating'] ? ele['avg_rating']:0)
        }

        const chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: month,
                datasets: [{
                    label: 'Điểm đánh giá trung bình',
                    data: avgRating,
                    yAxisID: 'rating',
                    backgroundColor: 'rgba(254, 156, 11, 0.8)',
                    borderColor: 'rgba(254, 156, 11, 0.8)',
                }, {
                    label: 'Đơn đặt',
                    type: 'bar',
                    data: book,
                    yAxisID: 'booking',
                    backgroundColor: 'rgba(0, 161, 166, 0.6)',
                }, {
                    label: 'Lượt đánh giá',
                    type: 'bar',
                    data: numsRating,
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
    })