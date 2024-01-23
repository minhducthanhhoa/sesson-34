// Lấy tham chiếu đến phần tử nút bấm trong DOM
const nutBamElement = document.getElementById("nutBam");
nutBamElement.classList.add("mau-xanh");

// Sự kiện khi nút bấm được nhấn
nutBamElement.addEventListener("click", function() {
  alert("Xin chào");
});