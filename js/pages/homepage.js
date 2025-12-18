document.addEventListener('DOMContentLoaded', function() {
    const planetBtn = document.getElementById('planet-btn');
    const startBtn = document.getElementById('start-btn');
    const audio = document.getElementById('home-bgm');
    const musicBtn = document.getElementById('music-control-btn');
    
    // 清除 NPC 音樂的進度
    sessionStorage.removeItem('npc_bgm_time');
    
    // 防止重複點擊的旗標
    let isNavigating = false;
    let isStarting = false;
    
    // 設定跳轉的目標網頁路徑
    const planetBtnTargetUrl = 'pages/info.html';  // 星球按鈕跳轉到 info 頁面
    const startBtnTargetUrl = 'pages/npc.html';     // 開始按鈕跳轉到 npc 頁面

    // ========== 音樂控制功能 ==========
    function initializeMusicControl() {
        // 恢復播放狀態 (默認播放)
        const isPlaying = sessionStorage.getItem('bgm_status') !== 'false';
        
        function updateMusicState(playing) {
            if (playing) {
                // 嘗試播放音樂
                const playPromise = audio.play();
                if (playPromise !== undefined) {
                    playPromise.catch(error => {
                        console.log("音樂播放被阻止或發生錯誤:", error);
                        updateMusicState(false);
                    });
                }
                musicBtn.classList.remove('muted');
            } else {
                audio.pause();
                musicBtn.classList.add('muted');
            }
            // 保存播放狀態到 sessionStorage
            sessionStorage.setItem('bgm_status', playing);
        }

        // 初始化音樂狀態
        if (isPlaying) {
            // 嘗試自動播放
            const playPromise = audio.play();
            if (playPromise !== undefined) {
                playPromise.catch(() => updateMusicState(false));
            }
            musicBtn.classList.remove('muted');
        } else {
            updateMusicState(false);
        }

        // 音樂控制按鈕點擊事件
        musicBtn.addEventListener('click', () => {
            const isCurrentlyPlaying = !audio.paused;
            updateMusicState(!isCurrentlyPlaying);
        });

        // 添加音頻事件監聽器以便除錯
        audio.addEventListener('error', function(e) {
            console.error('音頻加載錯誤:', e);
            console.log('音頻路徑:', audio.src);
        });

        audio.addEventListener('canplaythrough', function() {
            console.log('音頻已加載完成，可以播放');
        });
    }

    // ========== 星球按鈕點擊事件 ==========
    planetBtn.addEventListener('click', function() {
        if (isNavigating) return;
        
        isNavigating = true;
        
        // 1. 添加 class 觸發 CSS 的轉場動畫
        this.classList.add('active');
        
        console.log('啟動星球按鈕轉場動畫...');

        // 2. 設定延遲，等待動畫跑完後再跳轉
        setTimeout(() => {
            console.log(`跳轉至 ${planetBtnTargetUrl}`);
            window.location.href = planetBtnTargetUrl;
        }, 800);
    });

    // ========== 開始按鈕點擊事件 ==========
    startBtn.addEventListener('click', function() {
        if (isStarting) return;
        
        isStarting = true;
        
        // 添加點擊動畫效果
        this.classList.add('clicked');
        
        console.log('開始按鈕被點擊，準備跳轉...');

        // 設定延遲，等待動畫跑完後再跳轉
        setTimeout(() => {
            console.log(`跳轉至 ${startBtnTargetUrl}`);
            window.location.href = startBtnTargetUrl;
        }, 300); // 較短的動畫時間
    });

    // ========== 鍵盤輔助功能 (Accessibility) ==========
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            // 如果焦點在星球按鈕上
            if (document.activeElement === planetBtn) {
                planetBtn.click();
            }
            // 如果焦點在開始按鈕上
            else if (document.activeElement === startBtn) {
                startBtn.click();
            }
        }
        
        // 添加 ESC 鍵控制音樂 (選配功能)
        if (e.key === 'Escape') {
            const isCurrentlyPlaying = !audio.paused;
            if (isCurrentlyPlaying) {
                audio.pause();
                musicBtn.classList.add('muted');
                sessionStorage.setItem('bgm_status', false);
            } else {
                audio.play().catch(e => console.log("播放失敗:", e));
                musicBtn.classList.remove('muted');
                sessionStorage.setItem('bgm_status', true);
            }
        }
    });

    // ========== 頁面可見性 API (切換分頁時暫停音樂) ==========
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            // 頁面隱藏時保存播放時間
            sessionStorage.setItem('home_bgm_time', audio.currentTime);
            audio.pause();
        } else {
            // 頁面恢復時恢復播放
            const savedTime = sessionStorage.getItem('home_bgm_time');
            const isPlaying = sessionStorage.getItem('bgm_status') !== 'false';
            
            if (savedTime) {
                audio.currentTime = parseFloat(savedTime);
            }
            
            if (isPlaying && !audio.paused) {
                audio.play().catch(e => console.log("恢復播放失敗:", e));
            }
        }
    });

    // ========== 初始化音樂控制 ==========
    initializeMusicControl();
    
    // ========== 頁面載入完成後的自動對焦 (選配) ==========
    setTimeout(() => {
        // 可以選擇將焦點設在開始按鈕上
        // startBtn.focus();
    }, 1000);

    // ========== 控制台日誌 (開發用) ==========
    console.log('首頁載入完成');
    console.log('星球按鈕目標:', planetBtnTargetUrl);
    console.log('開始按鈕目標:', startBtnTargetUrl);
    console.log('音樂狀態:', sessionStorage.getItem('bgm_status'));
});