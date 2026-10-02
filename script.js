/**
 * Quản lý tính năng Bộ đếm (Counter App)
 */
document.addEventListener('DOMContentLoaded', () => {
    // 1. Khai báo trạng thái ứng dụng (State)
    const state = {
        count: 0
    };

    // 2. Truy vấn các phần tử DOM
    const countButton = document.getElementById('countButton');
    const resultDisplay = document.getElementById('result');

    // Kiểm tra an toàn xem phần tử DOM có tồn tại hay không
    if (!countButton || !resultDisplay) {
        console.error('Không tìm thấy các phần tử DOM cần thiết.');
        return;
    }

    /**
     * Cập nhật giao diện khi State thay đổi
     */
    const render = () => {
        resultDisplay.textContent = state.count;
    };

    /**
     * Xử lý sự kiện khi bấm nút
     */
    const handleIncrement = () => {
        state.count += 1;
        render();
    };

    // 3. Đăng ký sự kiện
    countButton.addEventListener('click', handleIncrement);
});