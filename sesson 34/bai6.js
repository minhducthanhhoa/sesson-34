// Lấy tham chiếu đến các phần tử trong DOM
const danhSachElement = document.getElementById("danhSach");
const inputValueElement = document.getElementById("inputValue");
const nutThemElement = document.getElementById("nutThem");
nutThemElement.classList.add("mau-xanh");

// Sự kiện khi nút thêm được nhấn
nutThemElement.addEventListener("click", function() {
  const giaTri = inputValueElement.value;  // Lấy giá trị từ ô input

  if (giaTri !== "") {
    const listItem = document.createElement("li");  // Tạo phần tử li mới
    listItem.textContent = giaTri;  // Gán giá trị vào nội dung của phần tử li

    danhSachElement.appendChild(listItem);  // Thêm phần tử li vào danh sách

    inputValueElement.value = "";  // Xóa giá trị trong ô input
  }
});