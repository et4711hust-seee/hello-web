document.addEventListener('DOMContentLoaded', () => {
    // 1. Lấy các phần tử DOM cho tính năng chuyển phiên bản
    const btnBefore = document.getElementById('btnBefore');
    const btnAfter = document.getElementById('btnAfter');
    const versionBefore = document.getElementById('versionBefore');
    const versionAfter = document.getElementById('versionAfter');

    // Hàm chuyển đổi chế độ xem
    function showVersion(version) {
        if (version === 'before') {
            versionBefore.classList.remove('hidden');
            versionAfter.classList.add('hidden');
            btnBefore.classList.add('active');
            btnAfter.classList.remove('active');
        } else {
            versionAfter.classList.remove('hidden');
            versionBefore.classList.add('hidden');
            btnAfter.classList.add('active');
            btnBefore.classList.remove('active');
        }
    }

    // Gán sự kiện click chuyển phiên bản
    if (btnBefore && btnAfter) {
        btnBefore.addEventListener('click', () => showVersion('before'));
        btnAfter.addEventListener('click', () => showVersion('after'));
    }

    // 2. Xử lý bộ đếm cho bản Before
    let countBefore = 0;
    const oldCountButton = document.getElementById('oldCountButton');
    const oldResult = document.getElementById('oldResult');
    if (oldCountButton && oldResult) {
        oldCountButton.addEventListener('click', () => {
            countBefore++;
            oldResult.textContent = countBefore;
        });
    }

    // 3. Xử lý bộ đếm cho bản After
    let countAfter = 0;
    const newCountButton = document.getElementById('newCountButton');
    const newResult = document.getElementById('newResult');
    if (newCountButton && newResult) {
        newCountButton.addEventListener('click', () => {
            countAfter++;
            newResult.textContent = countAfter;
        });
    }
});