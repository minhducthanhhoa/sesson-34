// Lấy tham chiếu đến các phần tử trong DOM
const inputUserElement = document.getElementById("inputUser");
const editItemElement = document.getElementById("editItem");
const userListElement = document.getElementById("userList");
editItemElement.classList.add("mau-xanh");
const editUserElement = document.getElementById("edit-user");
editUserElement.classList.add("mau-xanh");

// Sự kiện khi nút "Edit Item" được nhấn
editItemElement.addEventListener("click", function() {
  const userInput = inputUserElement.value;  // Lấy giá trị từ ô input

  // Chỉnh sửa tên người dùng trong danh sách
  const activeUser = userListElement.querySelector(".user-item.active");
  if (activeUser) {
    const userNameElement = activeUser.querySelector(".user-name");
    userNameElement.textContent = userInput;
  }
});

// Sự kiện khi nút "Edit" trên danh sách tên người dùng được nhấn
userListElement.addEventListener("click", function(event) {
  const targetElement = event.target;  // Phần tử mà sự kiện được kích hoạt

  if (targetElement.classList.contains("edit-user")) {
    // Xóa lớp "active" khỏi tất cả các phần tử
    const activeUsers = userListElement.querySelectorAll(".user-item.active");
    activeUsers.forEach(function(user) {
      user.classList.remove("active");
    });

    // Thêm lớp "active" vào phần tử được nhấn
    const userItem = targetElement.parentNode;
    userItem.classList.add("active");

    // Hiển thị tên người dùng lên ô input
    const userNameElement = userItem.querySelector(".user-name");
    inputUserElement.value = userNameElement.textContent;
  }
});