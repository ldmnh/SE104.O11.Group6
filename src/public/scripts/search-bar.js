$("#dateRange").daterangepicker();

// Khởi tạo date range picker và không có giá trị mặc định
$("#dateRange").daterangepicker({
  autoUpdateInput: false,
});

// Bắt sự kiện khi người dùng chọn ngày
$("#dateRange").on("apply.daterangepicker", function (ev, picker) {
  $(this).val(
    picker.startDate.format("DD/MM/YYYY") +
      " - " +
      picker.endDate.format("DD/MM/YYYY")
  );
});

// Bắt sự kiện khi người dùng xóa ngày
$("#dateRange").on("cancel.daterangepicker", function (ev, picker) {
  $(this).val("");
});
