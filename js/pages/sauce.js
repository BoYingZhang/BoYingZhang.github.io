document.addEventListener("DOMContentLoaded", function () {
  const sauceButtons = document.querySelectorAll(".sauce-btn");
  const nextSauceBtn = document.querySelector(".next-saucebtn");
  const nextSauceImg = nextSauceBtn.querySelector(".nextsauce-image");

  // 初始狀態：下一步按鈕 disabled
  nextSauceBtn.classList.add("disabled");
  nextSauceImg.src = nextSauceImg.dataset.disable;

  let activeSauce = null;

  // 醬料按鈕事件
  sauceButtons.forEach((btn) => {
    const img = btn.querySelector(".sauce-image");

    // 滑鼠進入：hover
    btn.addEventListener("mouseenter", function () {
      if (
        !btn.classList.contains("active") &&
        !btn.classList.contains("disabled")
      ) {
        img.src = img.dataset.hover;
      }
    });

    // 滑鼠離開：回 default
    btn.addEventListener("mouseleave", function () {
      if (!btn.classList.contains("active")) {
        img.src = img.dataset.default;
      }
    });

    // 點擊選擇醬料
    btn.addEventListener("click", function () {
      // 如果按鈕 disabled 且不是 active → 不動
      if (
        btn.classList.contains("disabled") &&
        !btn.classList.contains("active")
      )
        return;

      // 點擊同一個 active 按鈕 → 取消選擇
      if (btn.classList.contains("active")) {
        btn.classList.remove("active");
        img.src = img.dataset.default;
        activeSauce = null;

        // 下一步按鈕變回 disabled
        nextSauceBtn.classList.add("disabled");
        nextSauceImg.src = nextSauceImg.dataset.disable;
        nextSauceBtn.classList.remove("active"); // 移除 active 狀態

        // 取消選擇時，其他按鈕也回 default
        sauceButtons.forEach((b) => {
          if (b !== btn) {
            b.classList.remove("disabled", "active");
            b.querySelector(".sauce-image").src =
              b.querySelector(".sauce-image").dataset.default;
          }
        });

        return;
      }

      // 點擊新的按鈕 → 其他按鈕 disabled
      sauceButtons.forEach((b) => {
        if (b !== btn) {
          b.classList.remove("active");
          b.classList.add("disabled");
          b.querySelector(".sauce-image").src =
            b.querySelector(".sauce-image").dataset.disable;
        }
      });

      // 設定當前按鈕 active
      btn.classList.add("active");
      btn.classList.remove("disabled");
      img.src = img.dataset.active;
      activeSauce = btn;

      // 下一步按鈕變 default（啟用狀態）
      nextSauceBtn.classList.remove("disabled");
      nextSauceImg.src = nextSauceImg.dataset.default;
      nextSauceBtn.classList.remove("active"); // 確保不是 active 狀態
    });
  });

  // ========================
  // 下一步按鈕處理 - 只保留點擊事件，讓 CSS 控制 hover
  // ========================
  if (nextSauceBtn) {
    // 滑鼠進入：hover（只在不是 disabled 且不是 active 時）
    nextSauceBtn.addEventListener("mouseenter", function () {
      if (
        !nextSauceBtn.classList.contains("disabled") &&
        !nextSauceBtn.classList.contains("active")
      ) {
        nextSauceImg.src = nextSauceImg.dataset.hover;
      }
    });

    // 滑鼠離開：回 default（只在不是 active 時）
    nextSauceBtn.addEventListener("mouseleave", function () {
      if (
        !nextSauceBtn.classList.contains("active") &&
        !nextSauceBtn.classList.contains("disabled")
      ) {
        nextSauceImg.src = nextSauceImg.dataset.default;
      }
    });

    // 點擊：active 並跳轉
    nextSauceBtn.addEventListener("click", function () {
      if (nextSauceBtn.classList.contains("disabled")) return;

      // 設定 active 狀態
      nextSauceBtn.classList.add("active");
      nextSauceImg.src = nextSauceImg.dataset.active;

      // 短暫延遲讓使用者看到 active 狀態
      setTimeout(() => {
        // 跳轉到漢堡頁面（根據你的要求修改路徑）
        window.location.href = "../pages/hamburger.html";
      }, 200);
    });
  }
});

// ========================
// 對話框圖片輪播（不干擾按鈕）
// ========================
const dialogImages = document.querySelectorAll(".dialog-image");
let dialogIndex = 0;

if (dialogImages.length > 0) {
  // 先讓第一張顯示
  dialogImages[0].classList.add("active");

  // 設定輪播間隔
  setInterval(() => {
    dialogImages[dialogIndex].classList.remove("active");
    dialogIndex = (dialogIndex + 1) % dialogImages.length;
    dialogImages[dialogIndex].classList.add("active");
  }, 3000); // 每 3 秒切換，可自行調整
}