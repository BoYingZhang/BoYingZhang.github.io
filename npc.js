document.addEventListener('DOMContentLoaded', function() {
    initSlideshow('server', 12, 1000);
    initSlideshow('hamburger', 6, 1000);
    initDialogueSystem();
});

function initSlideshow(type, totalSlides, interval) {
    const slides = document.querySelectorAll(`.${type}-slideshow .slide`);
    let currentSlide = 0;
    
    slides[currentSlide].classList.add('active');
    
    setInterval(() => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % totalSlides;
        slides[currentSlide].classList.add('active');
    }, interval);
}

// 對話系統相關變數
const serverDialogs = [1, 2, 4, 6, 7, 8];
const hamburgerDialogs = [3, 5, 9];
let currentDialog = 1;
const totalDialogs = 9;

function initDialogueSystem() {
    const dialogImage = document.getElementById('dialogImage');
    const prevArea = document.getElementById('prevArea');
    const nextArea = document.getElementById('nextArea');
    const dialogImageWrapper = document.getElementById('dialogImageWrapper');
    const startBtn = document.getElementById('start-btn');
    
    // 初始狀態隱藏開始按鈕
    startBtn.classList.remove('active');
    
    // 更新點擊區域的顯示狀態
    updateClickAreas();
    
    // 左側點擊區域事件 - 上一句
    prevArea.addEventListener('click', (e) => {
        e.stopPropagation(); // 防止事件冒泡
        if (currentDialog > 1) {
            currentDialog--;
            updateDialog();
        }
    });
    
    // 右側點擊區域事件 - 下一句
    nextArea.addEventListener('click', (e) => {
        e.stopPropagation(); // 防止事件冒泡
        if (currentDialog < totalDialogs) {
            currentDialog++;
            updateDialog();
        }
    });
    
    // 整個對話圖片區域也可以點擊（右側區域）
    dialogImageWrapper.addEventListener('click', (e) => {
        // 計算點擊位置相對於圖片的百分比
        const rect = dialogImageWrapper.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const width = rect.width;
        const clickPercent = clickX / width * 100;
        
        // 左側50%為上一句，右側50%為下一句
        if (clickPercent <= 50 && currentDialog > 1) {
            currentDialog--;
            updateDialog();
        } else if (clickPercent > 50 && currentDialog < totalDialogs) {
            currentDialog++;
            updateDialog();
        }
    });
    
    function updateDialog() {
        // 更新圖片
        dialogImage.src = `img/dialogue/dialogue_${currentDialog}.png`;
        dialogImage.alt = `對話 ${currentDialog}`;
        
        // 播放音效
        playDialogSound();
        
        // 更新點擊區域狀態
        updateClickAreas();
        
        // 檢查是否到達最後一句對話
        if (currentDialog === totalDialogs) {
            // 顯示開始按鈕
            setTimeout(() => {
                startBtn.classList.add('active');
                console.log('對話結束，顯示開始點餐按鈕');
            }, 500); // 稍微延遲顯示，讓用戶看到最後一句對話
        } else {
            // 隱藏開始按鈕
            startBtn.classList.remove('active');
        }
    }
    
    function playDialogSound() {
        const serverAudio = document.getElementById('serverAudio');
        const hamburgerAudio = document.getElementById('hamburgerAudio');
        
        serverAudio.pause();
        hamburgerAudio.pause();
        serverAudio.currentTime = 0;
        hamburgerAudio.currentTime = 0;
        
        if (serverDialogs.includes(currentDialog)) {
            serverAudio.play().catch(e => console.log("音效播放失敗:", e));
        } else if (hamburgerDialogs.includes(currentDialog)) {
            hamburgerAudio.play().catch(e => console.log("音效播放失敗:", e));
        }
    }
    
    function updateClickAreas() {
        // 根據當前對話狀態調整點擊區域的透明度
        const prevArea = document.getElementById('prevArea');
        const nextArea = document.getElementById('nextArea');
        const startBtn = document.getElementById('start-btn');
        
        // 如果在第一句，左側區域變半透明
        if (currentDialog === 1) {
            prevArea.style.opacity = "0.3";
            prevArea.style.cursor = "not-allowed";
        } else {
            prevArea.style.opacity = "1";
            prevArea.style.cursor = "pointer";
        }
        
        // 如果在最後一句，右側區域變半透明
        if (currentDialog === totalDialogs) {
            nextArea.style.opacity = "0.3";
            nextArea.style.cursor = "not-allowed";
        } else {
            nextArea.style.opacity = "1";
            nextArea.style.cursor = "pointer";
        }
    }
    
    // 初始化播放第一句音效
    playDialogSound();
    
    // 如果直接訪問頁面且已是最後一句，顯示開始按鈕
    if (currentDialog === totalDialogs) {
        startBtn.classList.add('active');
    }
}