// Lấy tham chiếu đến các phần tử trong DOM
const bangDuLieuElement = document.getElementById("bangDuLieu");

// Sự kiện khi nút "Xóa" được nhấn
bangDuLieuElement.addEventListener("click", function(event) {
  const targetElement = event.target;  // Phần tử mà sự kiện được kích hoạt

  if (targetElement.classList.contains("xoaHang")) {
    const row = targetElement.parentNode;  // Hàng chứa nút "Xóa"
    row.parentNode.removeChild(row);  // Xóa hàng khỏi bảng
  }
});