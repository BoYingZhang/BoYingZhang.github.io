// 星球按鈕交互功能
document.addEventListener('DOMContentLoaded', function() {
    const planetBtn = document.getElementById('planet-btn');
    
    // 是否處於 active 狀態
    let isActive = false;
    
    // 點擊事件：切換到 active 狀態（進入分頁）
    planetBtn.addEventListener('click', function() {
        if (!isActive) {
            // 切換到 active 狀態
            isActive = true;
            this.classList.add('active');
            
            // 移除 hover 效果相關監聽
            this.classList.add('no-transition');
            
            // 模擬進入分頁後的跳轉（可替換為實際連結）
            setTimeout(() => {
                // 這裡可以替換為實際的頁面跳轉
                window.location.href = './other page/0.1_info/index.html';
                
                // 或者顯示訊息
                console.log('進入星球分頁！');
                
                // 可選：3秒後恢復到 default 狀態
                // setTimeout(() => {
                //     this.classList.remove('active');
                //     this.classList.remove('no-transition');
                //     isActive = false;
                // }, 3000);
            }, 800); // 等待動畫結束
        }
    });
    
    // 添加 hover 效果增強
    planetBtn.addEventListener('mouseenter', function() {
        if (!isActive) {
            // 懸停時添加一些額外效果
            this.style.transition = 'all 0.3s ease';
        }
    });
    
    planetBtn.addEventListener('mouseleave', function() {
        if (!isActive) {
            // 滑鼠離開時恢復
            this.style.transition = 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
        }
    });
    
    // 鍵盤快捷鍵：A 鍵觸發 active 狀態
    document.addEventListener('keydown', function(e) {
        if ((e.key === 'a' || e.key === 'A') && !isActive) {
            planetBtn.click(); // 模擬點擊
        }
        
        // R 鍵重置狀態（如果允許）
        if ((e.key === 'r' || e.key === 'R') && isActive) {
            planetBtn.classList.remove('active');
            planetBtn.classList.remove('no-transition');
            isActive = false;
        }
    });
    
    // 觸控設備優化
    planetBtn.addEventListener('touchstart', function(e) {
        if (!isActive) {
            // 觸摸時立即觸發 hover 效果
            this.classList.add('touch-hover');
        }
        e.preventDefault();
    }, { passive: false });
    
    planetBtn.addEventListener('touchend', function(e) {
        this.classList.remove('touch-hover');
        e.preventDefault();
    }, { passive: false });
});
