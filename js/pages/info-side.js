// 副菜情緒資料
const sideDishEmotions = [
    {
        id: 'info_expect',
        name: '期待黃瓜',
        nutrition: '清爽提神：提供對未來的希望與動力，是讓生活保持新鮮感的清脆口感。',
        risk: '易腐爛質：期望越高，一旦落空，崩場的速度越快，留下苦澀的爛泥與巨大的失落感。',
        story: '綠色的預言家：他總是第一個被端上桌，承諾著即將到來的美味。他的脆度是動力來源，但他也必須面對如果「主菜」不如預期時，自身所承受的巨大壓力。',
        suggestion: '保持期待但要接受可能的落空，彈性調整期望值'
    },
    {
        id: 'info_tired',
        name: '疲累菇菇',
        nutrition: '停機信號：身體的強制提醒，迫使系統關機、修復與積蓄能量，是深度療癒的前奏。',
        risk: '陰影霉菌：若長時間未能處理，會在陰暗處生長為倦怠（Burnout），使人徹底失去活力與興趣。',
        story: '謙卑的休息者：他總是在角落，吸收著大地深處的濕氣。他提醒我們，成長並非永無止境，有時蹲下、休息，才能讓養分充分吸收。',
        suggestion: '適當休息，避免發展為倦怠，建立規律作息'
    },
    {
        id: 'info_disappoint',
        name: '失望橄欖',
        nutrition: '苦澀教訓：提供了現實的風味，教導我們接受不完美與限制，是調整策略的必要過程。',
        risk: '陳年酸度：若持續發酵，會變成怨懟的酸液，對所有事物都抱持悲觀與不信任的預期。',
        story: '帶著核的智者：他的外表不起眼，味道帶有難以承受的苦澀。但只有經歷過他的味道，才知道什麼是真正的「不如預期」，才能從中取出堅硬的「核心經驗」。',
        suggestion: '接納現實，從中學習，轉化為成長的動力'
    },
    {
        id: 'info_free',
        name: '自在生菜',
        nutrition: '輕盈基底：提供無負擔的自由感，讓心靈輕盈，能輕鬆適應新環境與新思維。',
        risk: '虛浮缺乏：過於輕飄，可能導致缺乏份量感，讓人覺得生活空泛，無法承擔重大的責任與挑戰。',
        story: '隨風搖擺的舞者：她是盤子裡最輕鬆的元素，柔軟且富有彈性。她的哲學是「順其自然」，但這也意味著她很容易被一陣風吹走，失去她的存在感。',
        suggestion: '保持輕鬆但要有核心原則，平衡自由與責任'
    },
    {
        id: 'info_satisfy',
        name: '滿足洋蔥',
        nutrition: '層次芬芳：讓身心沉浸在成就與充實感中，細細品味努力的成果。',
        risk: '刺鼻刺激：錯誤或過度的滿足感，可能導致安於現狀、停滯不前，甚至因為自滿而讓別人流淚。',
        story: '自足的環形結構：他一層一層地包覆著自己，內心充滿了豐富的滋味。他教會我們欣賞擁有的，但如果沒有持續地剝開下一層，他將無法帶來新的風味。',
        suggestion: '享受成就但不自滿，持續追求進步'
    },
    {
        id: 'info_thankful',
        name: '感謝起司',
        nutrition: '乳脂黏著劑：促進關係的深度連結與親密，將各種經驗粘合在一起，增加幸福感的濃度。',
        risk: '過度發酵：變成虛假的迎合與奉承，失去了真誠的香氣，變得甜膩而令人反感。',
        story: '萬能的融合劑：他可以搭配任何主菜，讓一切變得更美味。他的存在提醒我們去珍惜擁有的東西，但他必須保持真誠，否則只會成為一種負擔。',
        suggestion: '真誠表達感激，避免形式化的感謝'
    },
    {
        id: 'info_irritable',
        name: '躁肉丸',
        nutrition: '高密度能量塊：提供短時間內高效解決問題的集中精力，是突破僵局的集中爆發點。',
        risk: '難以冷靜：結構過於緊密，一旦啟動難以停止，導致思緒飛轉，引起失眠與心悸，無法進入平靜狀態。',
        story: '彈跳不停的球：他充滿了未消化的精力，總是在盤子上滾來滾去。他可以快速地完成任務，但他無法靜止，一旦被放下來，就會開始無意識地亂跳。',
        suggestion: '有效運用精力，學會適時放鬆'
    },
    {
        id: 'info_lonely',
        name: '孤單薯條',
        nutrition: '鹽分提味：凸顯對社群連結的強烈渴求，促使個體主動尋求有意義的人際互動。',
        risk: '過量空虛：帶有過多的空洞感，如果不搭配「番茄醬」（連結），只會讓人感到乾燥、無味和巨大的內心空虛。',
        story: '獨立的金色棒子：他們總是一大群出現，但每個個體都互不相連、彼此獨立。他們渴望被分享和陪伴，但當他們被遺忘在角落時，只會迅速冷卻變硬。',
        suggestion: '主動建立連結，參與社群活動'
    },
    {
        id: 'info_worried',
        name: '不安番茄',
        nutrition: '微酸警報：溫和的直覺式預警，促使我們在行動前檢查細節，排除隱藏的危險。',
        risk: '酸性逆流：長時間的輕微不安會造成腸胃的持續痙攣，導致無法確定問題，只是持續地消化不良。',
        story: '晃動的探測儀：他的內心充滿了汁液，輕微的晃動都能讓他感覺不穩。他總覺得周遭環境不夠安全，所以會不斷地滾動，尋找一個完美的著陸點。',
        suggestion: '傾聽直覺但要理性分析，避免過度擔憂'
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
    const emotion = sideDishEmotions[index];
    
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
        // 更新圖片（注意資料夾為 side dish）
        const img = document.getElementById('emotion-img');
        if(img) {
            img.src = `img/side dish/${emotion.id}.png`;
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
    currentIndex = (currentIndex - 1 + sideDishEmotions.length) % sideDishEmotions.length;
    loadEmotion(currentIndex);
}

// 下一個情緒
function nextEmotion() {
    currentIndex = (currentIndex + 1) % sideDishEmotions.length;
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
    const basePath = '../assets/images/button/back/'; 
    
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