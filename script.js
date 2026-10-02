// Kiểm tra xem đã tải file script chưa
console.log("Đã tải file script.jss");

// 1.  Tìm các phần tử trong trang web
const countButton = document.querySelector("#countButton");
const result = document.querySelector("#result");

// 2. Tạo biến lưu số lần bấm
let count = 0;

// 3. Xử lý mỗi lần người dùng bấm nút
countButton.addEventListener("click", function(){
    count = count + 1;

    console.log("số lần bấm: ", count);

    // Cập nhật nội dung hiển thị
    // result.textContent = 'Bạn đã bấm ${count} lần.';
    result.textContent = "Bạn đã bấm " + count + " lần";
});

