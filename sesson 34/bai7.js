// Lấy tham chiếu đến các phần tử trong DOM
const bangDuLieuElement = document.getElementById("bangDuLieu");
const nutThemElement = document.getElementById("nutThem");
nutThemElement.classList.add("mau-xanh");

// Sự kiện khi nút thêm được nhấn
nutThemElement.addEventListener("click", function() {
  const newRow = document.createElement("tr");  // Tạo hàng mới

  // Tạo 3 ô mới và gán nội dung cho mỗi ô
  const cell1 = document.createElement("td");
  cell1.textContent = "cell 1 row 2";
  newRow.appendChild(cell1);

  const cell2 = document.createElement("td");
  cell2.textContent = "cell 2 row 2";
  newRow.appendChild(cell2);

  const cell3 = document.createElement("td");
  cell3.textContent = "cell 3 row 2";
  newRow.appendChild(cell3);

  bangDuLieuElement.appendChild(newRow);  // Thêm hàng mới vào bảng
});