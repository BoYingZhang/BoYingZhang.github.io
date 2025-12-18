document.addEventListener('DOMContentLoaded', function() {
    const emotionButtons = document.querySelectorAll('.emotion-btn');
    const maxSelection = 2;
    let selectedEmotions = [];
    let gifSyncTimeout = null;
    
    // 對話框相關變數
    let currentDialogue = 1;
    let dialogueInterval = null;
    
    // 下一步按鈕相關
    let nextButton = null;
    
    console.log('情緒按鈕初始化，找到按鈕:', emotionButtons.length);
    console.log('最大可選擇數量:', maxSelection);

    // 初始化所有按鈕為 default 狀態
    function initializeButtons() {
        emotionButtons.forEach(btn => {
            btn.classList.remove('active', 'disable', 'hover');
        });
        selectedEmotions = [];
        
        // 如果有下一步按鈕，初始化為禁用狀態
        if (nextButton) {
            nextButton.disabled = true;
        }
        
        // 更新容器類別
        updateContainerClass();
    }
    
    // 同步 GIF 動畫
    function syncGifAnimation(button) {
        const gifElement = button.querySelector('.default-state');
        if (gifElement && gifElement.src.includes('.gif')) {
            const originalSrc = gifElement.src;
            gifElement.src = '';
            
            setTimeout(() => {
                gifElement.src = originalSrc;
            }, 50);
            
            if (gifSyncTimeout) {
                clearTimeout(gifSyncTimeout);
            }
            
            gifSyncTimeout = setTimeout(() => {
                emotionButtons.forEach(btn => {
                    if (!btn.classList.contains('active') && !btn.classList.contains('disable')) {
                        const gif = btn.querySelector('.default-state');
                        if (gif && gif.src.includes('.gif')) {
                            const src = gif.src;
                            gif.src = '';
                            setTimeout(() => {
                                gif.src = src;
                            }, 10);
                        }
                    }
                });
            }, 100);
        }
    }
    
    // 更新下一步按鈕狀態
    function updateNextButtonState() {
        if (!nextButton) return;
        
        if (selectedEmotions.length === maxSelection) {
            // 啟用按鈕
            nextButton.disabled = false;
            console.log('Next button enabled');
        } else {
            // 禁用按鈕
            nextButton.disabled = true;
            console.log('Next button disabled');
        }
    }
    
    // 處理下一步按鈕點擊
    function handleNextButtonClick() {
        if (selectedEmotions.length !== maxSelection) {
            console.log('請選擇2個情緒才能繼續');
            return;
        }
        
        console.log('前往下一步，已選擇的情緒:', selectedEmotions);
        
        // 儲存選擇的情緒到 localStorage
        localStorage.setItem('selectedEmotions', JSON.stringify(selectedEmotions));
        
        // 跳轉到下一個頁面
        window.location.href = '../pages/sauce.html';
    }
    
    // 處理情緒按鈕點擊
    emotionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const emotion = this.dataset.emotion;
            console.log('點擊按鈕:', emotion, '已選擇:', selectedEmotions);
            
            const index = selectedEmotions.indexOf(emotion);
            
            if (index !== -1) {
                selectedEmotions.splice(index, 1);
                this.classList.remove('active');
                console.log('取消選擇:', emotion);
                
                setTimeout(() => {
                    syncGifAnimation(this);
                }, 100);
            } else {
                if (selectedEmotions.length < maxSelection) {
                    selectedEmotions.push(emotion);
                    this.classList.add('active');
                    console.log('選擇:', emotion);
                } else {
                    console.log('已達最大選擇數量 (2個)');
                    showMaxSelectionMessage();
                    return;
                }
            }
            
            updateButtonStates();
        });
        
        button.addEventListener('mouseenter', function() {
            if (!this.classList.contains('active') && !this.classList.contains('disable')) {
                this.classList.add('hover');
            }
        });
        
        button.addEventListener('mouseleave', function() {
            this.classList.remove('hover');
        });
    });
    
    // 更新所有按鈕狀態
    function updateButtonStates() {
        emotionButtons.forEach(btn => {
            const emotion = btn.dataset.emotion;
            
            if (selectedEmotions.includes(emotion)) {
                btn.classList.add('active');
                btn.classList.remove('disable', 'hover');
            } else if (selectedEmotions.length >= maxSelection) {
                btn.classList.add('disable');
                btn.classList.remove('active', 'hover');
            } else {
                btn.classList.remove('active', 'disable', 'hover');
            }
        });
        
        console.log('當前選擇的情緒:', selectedEmotions);
        console.log('已選擇數量:', selectedEmotions.length, '/', maxSelection);
        
        // 更新下一步按鈕狀態
        updateNextButtonState();
        
        updateContainerClass();
    }
    
    // 更新容器類別
    function updateContainerClass() {
        const container = document.querySelector('.emotion-container');
        if (container) {
            if (selectedEmotions.length >= maxSelection) {
                container.classList.add('max-selected');
            } else {
                container.classList.remove('max-selected');
            }
        }
    }
    
    // 顯示已達最大選擇數量的訊息
    function showMaxSelectionMessage() {
        console.log('已達最大選擇數量');
        // 如果需要視覺回饋，可以在這裡添加動畫效果
    }
    
    // 初始化 GIF 同步
    function initializeGifSync() {
        setTimeout(() => {
            emotionButtons.forEach(btn => {
                const gifElement = btn.querySelector('.default-state');
                if (gifElement && gifElement.src.includes('.gif')) {
                    const originalSrc = gifElement.src;
                    gifElement.src = '';
                    setTimeout(() => {
                        gifElement.src = originalSrc;
                    }, Math.random() * 300);
                }
            });
        }, 1000);
    }
    
    // 對話框輪播相關功能
    function initDialogueRotation() {
        const rotationInterval = 3000;
        dialogueInterval = setInterval(rotateDialogue, rotationInterval);
        showDialogue(1);
    }
    
    function rotateDialogue() {
        hideDialogue(currentDialogue);
        currentDialogue = currentDialogue === 1 ? 2 : 1;
        showDialogue(currentDialogue);
    }
    
    function showDialogue(dialogueNumber) {
        const dialogue = document.querySelector(`.dialogue-${dialogueNumber}`);
        if (dialogue) {
            dialogue.classList.add('show');
            console.log(`顯示對話框 ${dialogueNumber}`);
        }
    }
    
    function hideDialogue(dialogueNumber) {
        const dialogue = document.querySelector(`.dialogue-${dialogueNumber}`);
        if (dialogue) {
            dialogue.classList.remove('show');
        }
    }
    
    // 初始化下一步按鈕
    function initNextButton() {
        nextButton = document.getElementById('nextButton');
        if (nextButton) {
            nextButton.addEventListener('click', handleNextButtonClick);
            updateNextButtonState();
        }
    }
    
    // 主初始化
    function initialize() {
        initializeButtons();
        initializeGifSync();
        initDialogueRotation();
        initNextButton();
    }
    
    // 執行初始化
    initialize();
    
    // 頁面卸載時清理計時器
    window.addEventListener('beforeunload', function() {
        if (dialogueInterval) {
            clearInterval(dialogueInterval);
        }
        if (gifSyncTimeout) {
            clearTimeout(gifSyncTimeout);
        }
    });
});