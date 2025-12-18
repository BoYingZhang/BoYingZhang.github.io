document.addEventListener('DOMContentLoaded', function() {
    // 食材順序陣列 (從下層到上層飛入)
    const ingredients = [
        { element: document.querySelector('.bread-bottom'), delay: 0 },
        { element: document.querySelector('.meat'), delay: 800 },
        { element: document.querySelector('.lettuce'), delay: 1600 },
        { element: document.querySelector('.tomato'), delay: 2400 },
        { element: document.querySelector('.sauce'), delay: 3200 },
        { element: document.querySelector('.bread-top'), delay: 4000 }
    ];
    
    // 對話框元素
    const dialogue1 = document.querySelector('.dialogue-1');
    const dialogue2 = document.querySelector('.dialogue-2');
    
    // 獲取下一步按鈕
    const nextButton = document.getElementById('nextButton');
    
    let timeouts = [];
    let dialogueInterval;
    let isDialogue1Active = true; // 追蹤當前顯示的對話框
    
    // 開始對話框輪播
    function startDialogueRotation() {
        // 先隱藏兩個對話框
        dialogue1.classList.remove('show');
        dialogue2.classList.remove('show');
        
        // 先顯示第一個對話框
        dialogue1.classList.add('show');
        isDialogue1Active = true;
        
        // 清除之前的interval（如果有的話）
        if (dialogueInterval) {
            clearInterval(dialogueInterval);
        }
        
        // 設定輪播間隔
        dialogueInterval = setInterval(() => {
            if (isDialogue1Active) {
                // 切換到對話框2
                dialogue1.classList.remove('show');
                dialogue2.classList.add('show');
                isDialogue1Active = false;
            } else {
                // 切換到對話框1
                dialogue2.classList.remove('show');
                dialogue1.classList.add('show');
                isDialogue1Active = true;
            }
        }, 2000); // 每2秒輪換一次
    }
    
    // 停止對話框輪播
    function stopDialogueRotation() {
        if (dialogueInterval) {
            clearInterval(dialogueInterval);
            dialogueInterval = null;
        }
    }
    
    // 啟用下一步按鈕
    function enableNextButton() {
        nextButton.disabled = false;
        console.log('下一步按鈕已啟用');
    }
    
    // 禁用下一步按鈕
    function disableNextButton() {
        nextButton.disabled = true;
        console.log('下一步按鈕已禁用');
    }
    
    // 開始動畫
    function startAnimation() {
        // 首先禁用下一步按鈕
        disableNextButton();
        
        // 清除所有食材的動畫類別
        ingredients.forEach(item => {
            item.element.classList.remove('assembled', 'floating');
        });
        
        // 清除之前的timeout
        timeouts.forEach(timeout => clearTimeout(timeout));
        timeouts = [];
        
        // 停止並重置對話框輪播
        stopDialogueRotation();
        dialogue1.classList.remove('float');
        dialogue2.classList.remove('float');
        
        // 開始對話框輪播（漢堡組裝時就開始）
        setTimeout(() => {
            startDialogueRotation();
        }, 500);
        
        // 依序動畫每個食材 (從底層開始飛入)
        ingredients.forEach((item, index) => {
            const timeout = setTimeout(() => {
                // 飛入並組裝
                item.element.classList.add('assembled');
                
                // 檢查是否是最後一個食材（上層麵包）
                if (item.element.classList.contains('bread-top')) {
                    // 最後一個食材飛入後，等待1秒，然後開始浮動動畫
                    setTimeout(() => {
                        // 食材浮動
                        ingredients.forEach(ing => {
                            ing.element.classList.add('floating');
                        });
                        
                        // 對話框也開始浮動動畫
                        dialogue1.classList.add('float');
                        dialogue2.classList.add('float');
                        
                        // 所有動畫完成後，啟用下一步按鈕
                        enableNextButton();
                        
                    }, 1000); // 等待1秒後開始浮動動畫
                }
            }, item.delay);
            
            timeouts.push(timeout);
        });
    }
    
    // 重置對話框狀態
    function resetDialogues() {
        stopDialogueRotation();
        dialogue1.classList.remove('show', 'float');
        dialogue2.classList.remove('show', 'float');
        isDialogue1Active = true;
    }
    
    // 為下一步按鈕添加點擊事件（作為示例）
    nextButton.addEventListener('click', function() {
        if (!this.disabled) {
            console.log('.next-btn');
            window.location.href = '../6.0 eatting/eatting.html';
        }
    });
    
    // 開始第一次動畫
    setTimeout(startAnimation, 500);
    
    // 點擊畫面重新開始動畫
    document.addEventListener('click', () => {
        resetDialogues();
        startAnimation();
    });
});