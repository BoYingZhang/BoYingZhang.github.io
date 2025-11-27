document.addEventListener('DOMContentLoaded', function() {
    const emotionButtons = document.querySelectorAll('.emotion-btn');
    let activeEmotion = null;
    
    console.log('情緒按鈕初始化，找到按鈕:', emotionButtons.length);

    // === 提示語輪播功能 ===
    const tipMessages = document.querySelectorAll('.tip-message');
    let currentTipIndex = 0;
    const tipInterval = 3000; // 3秒切換

    function startTipsRotation() {
        // 先隱藏所有提示語
        tipMessages.forEach(tip => tip.classList.remove('active'));
        
        // 顯示第一個提示語
        if (tipMessages.length > 0) {
            tipMessages[currentTipIndex].classList.add('active');
        }
        
        // 設定輪播間隔
        setInterval(() => {
            // 隱藏當前提示語
            tipMessages[currentTipIndex].classList.remove('active');
            
            // 計算下一個提示語索引
            currentTipIndex = (currentTipIndex + 1) % tipMessages.length;
            
            // 顯示下一個提示語
            tipMessages[currentTipIndex].classList.add('active');
        }, tipInterval);
    }

    // === 原有的情緒按鈕功能 ===
    
    // 初始化所有按鈕為 default 狀態
    function initializeButtons() {
        emotionButtons.forEach(btn => {
            btn.classList.remove('active', 'disable', 'hover');
        });
    }
    
    // 處理情緒按鈕點擊
    emotionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const emotion = this.dataset.emotion;
            console.log('點擊按鈕:', emotion);
            
            // 如果點擊的是當前已激活的按鈕，則恢復初始狀態
            if (activeEmotion === emotion) {
                resetToDefault();
                activeEmotion = null;
            } else {
                // 設置新的激活狀態
                setActiveEmotion(emotion);
                activeEmotion = emotion;
            }
        });
        
        // 滑鼠移入效果
        button.addEventListener('mouseenter', function() {
            if (!this.classList.contains('active') && !this.classList.contains('disable')) {
                this.classList.add('hover');
            }
        });
        
        // 滑鼠移出效果
        button.addEventListener('mouseleave', function() {
            this.classList.remove('hover');
        });
    });
    
    // 設置激活的情緒
    function setActiveEmotion(emotion) {
        emotionButtons.forEach(btn => {
            if (btn.dataset.emotion === emotion) {
                btn.classList.add('active');
                btn.classList.remove('disable', 'hover');
            } else {
                btn.classList.add('disable');
                btn.classList.remove('active', 'hover');
            }
        });
    }
    
    // 重置所有按鈕為 default 狀態
    function resetToDefault() {
        emotionButtons.forEach(btn => {
            btn.classList.remove('active', 'disable', 'hover');
        });
    }
    
    // === 初始化所有功能 ===
    initializeButtons();
    startTipsRotation(); // 啟動提示語輪播
});
