// Khai báo mảng names chứa tên người dùng
var names = ["Nguyễn Văn A", "Vũ Thị B", "Nguyễn Minh C"];

// Lấy tham chiếu đến phần tử danh sách trong DOM
var danhSachElement = document.getElementById("danhSach");

// Lặp qua mảng names và tạo các phần tử danh sách
for (var i = 0; i < names.length; i++) {
  var listItem = document.createElement("li");  // Tạo phần tử li mới
  listItem.textContent = names[i];  // Gán tên vào nội dung của phần tử li

  danhSachElement.appendChild(listItem);  // Thêm phần tử li vào danh sách
}