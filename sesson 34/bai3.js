// Lấy tham chiếu đến các phần tử trong DOM
const nutBamElement = document.getElementById("nutBam");
nutBamElement.classList.add("mau-xanh");

// Sự kiện khi nút bấm được nhấn
nutBamElement.addEventListener("click", function() {
  const dongChuElement = document.getElementById("dongChu");
  dongChuElement.textContent = "Text after change";
});