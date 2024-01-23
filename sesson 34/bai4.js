// Lấy tham chiếu đến các phần tử trong DOM
const dongChuElement = document.getElementById("dongChu");
const nutBamElement = document.getElementById("nutBam");
nutBamElement.classList.add("mau-xanh");

// Sự kiện khi nút bấm được nhấn
nutBamElement.addEventListener("click", function() {
  dongChuElement.classList.add("mau-do");
});