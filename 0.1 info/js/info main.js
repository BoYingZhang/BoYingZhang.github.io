// 主菜情緒資料
const mainDishEmotions = [
    {
        id: 'info_calm',
        name: '平靜火腿',
        nutrition: '恆定蛋白質：提供持久的內在穩定性與思緒清晰度，能有效降低壓力荷爾蒙，促進深度恢復。',
        risk: '防腐麻木：味道過於穩定單一，可能導致對環境變化的低敏感度，成為漠不關心，錯失重要警訊或缺乏行動的熱情。',
        story: '安定的煙燻師傅：他不追求熱鬧，只在時間的沉澱中慢火淬煉。他是日常的保障，但如果遇到需要立即反應的危機，他可能會因為步調太慢而錯失良機。',
        suggestion: '保持穩定但注意環境變化，適時調整反應速度'
    },
    {
        id: 'info_happy',
        name: '快樂脆雞',
        nutrition: '外層黃金甲：帶來即時的能量爆發與樂觀光環，是增強社交吸引力與免疫力的內啡肽發電機。',
        risk: '油膩上癮：過度追求即時快感，導致對平淡生活感到乏味，引發「快樂耐受性」下降，逃避深層的內省。',
        story: '閃耀的炸雞總監：他是宴會的中心，帶著酥脆的笑聲和誘人的香氣。他保證每個人都能瞬間開心，但他的內心肉質（深層自我）可能在油炸中變得乾燥，害怕失去那層光芒。',
        suggestion: '適度享受，避免過度追求即時快感，保持對深層情感的關注'
    },
    {
        id: 'info_angry',
        name: '憤怒豬排',
        nutrition: '骨骼硬度：提供堅實的個人界線與捍衛價值觀的爆發性動力，是打破僵局、追求正義的燃料。',
        risk: '烹調過硬：變成不可分解的怨恨，難以消化，長期會腐蝕身心（焦慮、高血壓），甚至演化成破壞性的暴力。',
        story: '帶著骨頭的戰士：他必須經過重擊和高溫才能呈現力量。他的邊緣很銳利，用於劃分「對」與「錯」的領域，但如果不適當控制熱度，他會焦化成無法挽回的破壞。',
        suggestion: '適當表達，避免變成不可分解的怨恨，學習冷靜溝通'
    },
    {
        id: 'info_pressure',
        name: '壓力大麥克',
        nutrition: '多層堆疊：挑戰帶來的效率與專注，逼迫系統處理複雜多任務，是潛能激發的催化劑。',
        risk: '消化不良：餡料過多，難以在短時間內分解，導致身心超載與胃部不適，引發慢性疲勞和焦慮。',
        story: '趕時間的行政主管：他被設計成能迅速滿足所有需求，漢堡、生菜、醬料堆疊了太多期望。他讓人在短時間內感覺「有在做事」，但很少有人能好好消化他帶來的巨大負擔。',
        suggestion: '適度壓力有助成長，但需避免過載，學會分解任務'
    },
    {
        id: 'info_sadness',
        name: '悲傷麥香魚',
        nutrition: '深海 Omega：帶來深層的情緒潤滑，引導回憶的內省，是同理心與自我療癒的溫和基底。',
        risk: '濕軟麵包：質地過於鬆軟易碎，導致情緒潰堤、沉溺於過去，無法支撐起新的希望，使人變得黏膩而失去行動力。',
        story: '雨天的漁夫：他總是在霧氣瀰漫的早上出現，柔軟且不易察覺。他的存在提醒我們，有些時候需要放慢腳步，感受那些被遺忘在深處的滋味。',
        suggestion: '適當釋放，但避免沉溺於過去，適時尋求支持'
    },
    {
        id: 'info_anxiety',
        name: '焦慮炸蝦',
        nutrition: '外殼警報：對潛在危險的高度敏感與警覺，促使個體提前準備與預防未來的威脅。',
        risk: '過度緊繃：裹粉（防禦機制）過厚，能量消耗過大，導致消化系統（思考）緊張，即使沒有威脅也持續保持緊繃狀態。',
        story: '隨時待命的弓手：他的身體總是緊繃成一個完美的弧度，準備隨時彈射逃離。他知道如何預見災難，但這種永久的準備狀態，讓他幾乎無法放鬆地享受任何一餐。',
        suggestion: '保持警覺但避免過度緊繃，學習放鬆技巧'
    }
];

let currentIndex = 0;

// 頁面載入完成後執行（整合版）
document.addEventListener('DOMContentLoaded', function() {
    // 1. 載入初始情緒
    loadEmotion(currentIndex);
    
    // 2. 設置左右切換按鈕
    setupEventListeners();
    
    // 3. 設置鍵盤導航
    setupKeyboardNavigation();
    
    // 4. 設置返回按鈕互動
    setupBackButton();
});

// 載入情緒資料（含淡入淡出效果）
function loadEmotion(index) {
    const emotion = mainDishEmotions[index];
    
    // 取得需要更新的元素
    const elementsToUpdate = [
        document.getElementById('nutrition-content'),
        document.getElementById('risk-content'),
        document.getElementById('story-content'),
        document.getElementById('suggestion-content'),
        document.getElementById('emotion-name'),
        document.getElementById('emotion-img')
    ];

    // 1. 淡出
    elementsToUpdate.forEach(el => {
        if(el) el.classList.add('fading');
    });

    // 2. 等待動畫後更新內容並淡入
    setTimeout(() => {
        // 更新圖片
        const img = document.getElementById('emotion-img');
        if(img) {
            img.src = `img/main dish/${emotion.id}.png`;
            img.alt = emotion.name;
        }
        
        // 更新文字
        document.getElementById('emotion-name').textContent = emotion.name;
        document.getElementById('nutrition-content').textContent = emotion.nutrition;
        document.getElementById('risk-content').textContent = emotion.risk;
        document.getElementById('story-content').textContent = emotion.story;
        document.getElementById('suggestion-content').textContent = emotion.suggestion;
        
        // 3. 移除淡出 class (顯示)
        elementsToUpdate.forEach(el => {
            if(el) el.classList.remove('fading');
        });
    }, 200); // 配合 CSS transition 時間
}

// 上一個情緒
function prevEmotion() {
    currentIndex = (currentIndex - 1 + mainDishEmotions.length) % mainDishEmotions.length;
    loadEmotion(currentIndex);
}

// 下一個情緒
function nextEmotion() {
    currentIndex = (currentIndex + 1) % mainDishEmotions.length;
    loadEmotion(currentIndex);
}

// 設置切換按鈕監聽器
function setupEventListeners() {
    const prevBtn = document.getElementById('prev-btn');
    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => this.style.transform = '', 100);
            prevEmotion();
        });
    }

    const nextBtn = document.getElementById('next-btn');
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => this.style.transform = '', 100);
            nextEmotion();
        });
    }
}

// 設置鍵盤導航
function setupKeyboardNavigation() {
    document.addEventListener('keydown', function(event) {
        switch(event.key) {
            case 'ArrowLeft':
            case 'a':
            case 'A':
                event.preventDefault();
                prevEmotion();
                break;
            case 'ArrowRight':
            case 'd':
            case 'D':
                event.preventDefault();
                nextEmotion();
                break;
            case 'Escape':
            case 'Backspace':
                // 嘗試點擊圖片按鈕，如果找不到則嘗試尋找連結
                const backBtn = document.getElementById('back-btn');
                if (backBtn) backBtn.parentElement.click(); 
                break;
        }
    });
}

// 設置返回按鈕互動效果
function setupBackButton() {
    const backBtn = document.getElementById('back-btn');
    // 修正圖片路徑，確保與 HTML 資料夾結構一致
    const basePath = './img/button/back/'; 
    
    if (backBtn) {
        backBtn.addEventListener('mouseenter', function() {
            this.src = basePath + 'btn_back_hover.png';
        });
        
        backBtn.addEventListener('mouseleave', function() {
            this.src = basePath + 'btn_back_default.png';
        });
        
        backBtn.addEventListener('mousedown', function() {
            this.src = basePath + 'btn_back_active.png';
        });
        
        backBtn.addEventListener('mouseup', function() {
            this.src = basePath + 'btn_back_hover.png';
        });
        
        backBtn.addEventListener('touchstart', function() {
            this.src = basePath + 'btn_back_active.png';
        });
        
        backBtn.addEventListener('touchend', function() {
            this.src = basePath + 'btn_back_default.png';
        });
    }
}