  // Lấy tham chiếu đến các phần tử DOM
      const minusButton = document.querySelector(".minus");
      const plusButton = document.querySelector(".plus");
      const numberDisplay = document.querySelector(".number");

      // Khởi tạo biến đếm
      let count = 0;

      // Gắn sự kiện click cho nút "+" (plus)
      plusButton.addEventListener("click", function () {
        if (count < 10) {
          count++;
          numberDisplay.textContent = count;
        }
      });

      // Gắn sự kiện click cho nút "-" (minus) (giảm giá trị)
      minusButton.addEventListener("click", function () {
        if (count > 0) {
          count--;
          numberDisplay.textContent = count;
        }
      });