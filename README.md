# Emo Burger 🍔

一個情緒探索主題的互動式漢堡製作遊戲，透過選擇不同配料來理解和表達自己的情緒。

## 🎮 遊戲介紹

Emo Burger 是一個創意十足的情緒表達遊戲。玩家透過組合不同的漢堡配料（主菜、配菜、醬料），將情緒具象化。每一個選擇都代表著對自己情緒狀態的理解和接納。

## 📁 專案結構

```
BoYingZhang.github.io/
└── emoburger/
    ├── index.html              # 首頁
    ├── README.md               # 本檔案
    ├── .gitignore
    ├── pages/                  # 遊戲頁面
    │   ├── info.html          # 遊戲信息頁面
    │   ├── info-main.html     # 主菜信息
    │   ├── info-side.html     # 配菜信息
    │   ├── npc.html           # NPC 互動頁面
    │   ├── main-dish.html     # 主菜選擇
    │   ├── side-dish.html     # 配菜選擇
    │   ├── sauce.html         # 醬料選擇
    │   ├── hamburger.html     # 漢堡組合展示
    │   ├── eating.html        # 進食動畫
    │   └── final.html         # 最終情緒反思頁面
    ├── css/
    │   └── pages/             # 各頁面樣式
    │       ├── homepage.css
    │       ├── info.css
    │       ├── npc.css
    │       ├── main-dish.css
    │       ├── side-dish.css
    │       ├── sauce.css
    │       ├── hamburger.css
    │       ├── eating.css
    │       └── final.css
    ├── js/
    │   └── pages/             # 各頁面邏輯
    │       ├── homepage.js
    │       ├── info-main.js
    │       ├── info-side.js
    │       ├── npc.js
    │       ├── main-dish.js
    │       ├── side-dish.js
    │       ├── sauce.js
    │       ├── hamburger.js
    │       ├── eating.js
    │       └── final.js
    └── assets/                # 資源文件
        ├── images/            # 圖片素材
        │   ├── backgrounds/
        │   ├── buttons/
        │   ├── characters/
        │   ├── dialogue/
        │   ├── ingredients/
        │   └── ...
        └── audio/             # 背景音樂

```

## 🎯 遊戲流程

1. **首頁** (`index.html`)
   - 星球按鈕 → 查看遊戲信息
   - 開始按鈕 → 進入主遊戲

2. **NPC 互動** (`npc.html`)
   - 與角色進行對話交互
   - 了解遊戲背景故事

3. **情緒選擇** (`main-dish.html`)
   - 選擇代表你今天情緒的主菜
   - 支援多種情緒選項

4. **配菜搭配** (`side-dish.html`)
   - 選擇配菜搭配
   - 進一步定義情緒特徵

5. **醬料調味** (`sauce.html`)
   - 選擇醬料添加風味
   - 完成你的情緒組合

6. **漢堡展示** (`hamburger.html`)
   - 查看完整的漢堡組合
   - 視覺化你的情緒

7. **進食動畫** (`eating.html`)
   - 享受漢堡的過程
   - 情緒接納的視覺化表現

8. **最終反思** (`final.html`)
   - 獲得情緒反思句子
   - 完成一次完整的情緒體驗

## 🚀 如何開始

### 本地開發
1. 克隆此倉庫
   ```bash
   git clone https://github.com/BoYingZhang/BoYingZhang.github.io.git
   cd BoYingZhang.github.io/emoburger
   ```

2. 開啟本地伺服器（推薦）
   ```bash
   # 使用 Python 3
   python -m http.server 8000
   
   # 或使用 Python 2
   python -m SimpleHTTPServer 8000
   ```

3. 在瀏覽器中訪問
   ```
   http://localhost:8000
   ```

### 線上玩耍
直接訪問：[Emo Burger](https://BoYingZhang.github.io/emoburger/)

## 💻 技術棧

- **前端**: HTML5, CSS3, Vanilla JavaScript
- **動畫**: CSS 轉場和 JavaScript 動畫
- **存儲**: SessionStorage (暫存遊戲進度)
- **音樂**: HTML5 Audio API

## 🎨 功能特性

- ✨ 流暢的頁面轉場動畫
- 🎵 背景音樂和音效
- 📱 響應式設計支援
- 🎯 多層情緒選擇機制
- 💬 NPC 對話互動
- 📊 視覺化情緒展示
- 🎬 動畫化的進食過程
- 💭 個性化的情緒反思句子

## 🌐 瀏覽器支援

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📝 檔案說明

### HTML 檔案
- `index.html`: 應用程式入口
- `pages/*.html`: 各遊戲場景

### CSS 檔案
位於 `css/pages/` 目錄，定義各頁面樣式

### JavaScript 檔案
位於 `js/pages/` 目錄，包含各頁面的互動邏輯

### 資源文件
- `assets/images/`: 遊戲圖片素材
- `assets/audio/`: 背景音樂和音效

## 🔧 開發指南

### 新增頁面
1. 在 `pages/` 中建立新的 HTML 檔案
2. 在 `css/pages/` 中建立對應的 CSS 檔案
3. 在 `js/pages/` 中建立對應的 JavaScript 檔案
4. 在相應頁面中引入資源

### 修改樣式
編輯 `css/pages/` 中的對應 CSS 檔案

### 修改互動邏輯
編輯 `js/pages/` 中的對應 JavaScript 檔案

## 📦 部署

此專案使用 GitHub Pages 進行託管。每次推送到 `main` 分支時，會自動部署。

```bash
git add .
git commit -m "Your message"
git push origin main
```

## 🎓 學習資源

- [HTML5 文檔](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS3 教程](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JavaScript 指南](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [Web APIs](https://developer.mozilla.org/en-US/docs/Web/API)

## 📄 授權

此專案採用 MIT 授權。詳見 LICENSE 檔案。

## 👤 作者

**Bo Ying Zhang**
- GitHub: [@BoYingZhang](https://github.com/BoYingZhang)

## 💬 反饋與貢獻

歡迎提交 Issue 和 Pull Request！

---

**最後更新**: 2025年12月19日

Made with ❤️ for emotional exploration and self-understanding
