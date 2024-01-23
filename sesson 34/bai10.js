// sự khác biệt giữa ba thuộc tính này:

// innerText: Thuộc tính innerText chỉ trả về văn bản hiển thị trong phần tử và các phần tử con của nó. Nó loại bỏ các thẻ HTML và chỉ trả về văn bản thuần túy. Nếu bạn sử dụng innerText để đặt nội dung cho một phần tử, nội dung hiện có sẽ bị ghi đè.

// textContent: Thuộc tính textContent cũng trả về văn bản hiển thị trong phần tử và các phần tử con của nó, tương tự như innerText. Tuy nhiên, khác với innerText, textContent giữ nguyên cấu trúc văn bản, bao gồm cả các thẻ HTML. Điều này có nghĩa là nếu có các thẻ HTML như <b> hoặc <i> trong phần tử, chúng sẽ được trả về trong đầu ra của textContent.

// innerHTML: Thuộc tính innerHTML trả về hoặc đặt nội dung của phần tử bao gồm cả văn bản và các thẻ HTML. Nó cho phép bạn truy cập và thay đổi cả nội dung văn bản và cấu trúc HTML bên trong một phần tử. Khi bạn sử dụng innerHTML để đặt nội dung cho một phần tử, nội dung hiện có sẽ bị thay thế bởi nội dung mới.


const exampleDiv = document.getElementById("example-div");

    // Ví dụ sử dụng innerText
    console.log(exampleDiv.innerText);  // Output: "This is example text."

    // Ví dụ sử dụng textContent
    console.log(exampleDiv.textContent);  // Output: "This is example text."

    // Ví dụ sử dụng innerHTML
    console.log(exampleDiv.innerHTML);  // Output: "<p>This is <b>example</b> text.</p>"

    // Ví dụ sử dụng innerText để đặt nội dung
    exampleDiv.innerText = "New text using innerText";

    // Ví dụ sử dụng textContent để đặt nội dung
    exampleDiv.textContent = "New text using textContent";

    // Ví dụ sử dụng innerHTML để đặt nội dung
    exampleDiv.innerHTML = "<p>New <b>text</b> using innerHTML</p>";