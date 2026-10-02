<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>So Sánh Phiên Bản Web | Before & After</title>
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <!-- ==========================================
         THANH ĐIỀU HƯỚNG CHUYỂN PHIÊN BẢN (SWITCHER)
         ========================================== -->
    <header class="version-bar">
        <div class="version-bar__container">
            <span class="version-bar__label">Chế độ xem:</span>
            <div class="version-bar__buttons">
                <button id="btnBefore" class="v-btn" type="button">
                    ⏮️ Bản Ban Đầu (Before)
                </button>
                <button id="btnAfter" class="v-btn v-btn--active" type="button">
                    ✨ Bản Nâng Cấp (After)
                </button>
            </div>
        </div>
    </header>

    <!-- CONTAINER CHÍNH CHỨA 2 PHIÊN BẢN -->
    <main class="main-content">

        <!-- --------------------------------------
             1. PHIÊN BẢN CŨ (BEFORE - BAN ĐẦU)
             -------------------------------------- -->
        <div id="versionBefore" class="version-view version-view--hidden">
            <div class="old-card">
                <h1>Xin chào Web</h1>
                <p>Đây là trang web đầu tiên của học phần</p>
                <button id="oldCountButton" type="button">Bấm vào đây</button>
                <p>Bạn đã bấm <span id="oldResult">0</span> lần</p>
            </div>
            
            <div class="tech-note">
                💡 <strong>Đặc điểm bản Before:</strong> Sử dụng HTML/CSS cơ bản, không có cấu trúc Semantic chuẩn, CSS trực tiếp đơn giản, chưa tối ưu giao diện UI/UX.
            </div>
        </div>

        <!-- --------------------------------------
             2. PHIÊN BẢN MỚI (AFTER - NÂNG CẤP)
             -------------------------------------- -->
        <div id="versionAfter" class="version-view">
            <article class="card">
                <header class="card__header">
                    <h1 class="card__title">Trang Web đầu tiên</h1>
                    <p class="card__subtitle">Học HTML, CSS và JAVASCRIPT bằng thực hành</p>
                </header>

                <section class="card__body">
                    <button id="newCountButton" class="btn btn--primary" type="button" aria-label="Bấm để tăng số lần đếm">
                        Bấm vào đây
                    </button>
                </section>

                <footer class="card__footer">
                    <p class="counter-text">
                        Bạn đã bấm <strong id="newResult" class="counter-text__number">0</strong> lần
                    </p>
                </footer>
            </article>

            <div class="tech-note tech-note--pro">
                🚀 <strong>Đặc điểm bản After:</strong> Sử dụng HTML5 Semantic chuẩn, CSS BEM, CSS Custom Properties (Biến), hiệu ứng chuyển động mượt, hỗ trợ đọc màn hình (Accessibility).
            </div>
        </div>

    </main>

    <script src="script.js" defer></script>
</body>
</html>