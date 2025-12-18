// 2 秒後自動淡出提示文字
window.addEventListener("DOMContentLoaded", () => {
  const hint = document.getElementById("introHint");

  setTimeout(() => {
    hint.classList.add("hide");
    // 淡出後從畫面拿掉
    setTimeout(() => {
      hint.remove();
    }, 800);
  }, 2000);

  // 🌟 預載所有圖片（這一段就能讓亮一下完全消失）
  images.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
});

// 所有圖片
const images = [
  "../assets/images/hambergur_eating/1.png",
  "../assets/images/hambergur_eating/2.png",
  "../assets/images/hambergur_eating/3.png",
  "../assets/images/hambergur_eating/4.png",
  "../assets/images/hambergur_eating/5.png",
  "../assets/images/hambergur_eating/6.png",
  "../assets/images/hambergur_eating/7.png",
];

let currentIndex = 0;
const btn = document.getElementById("imageBtn");

// 初始圖片
btn.style.backgroundImage = `url(${images[currentIndex]})`;

btn.addEventListener("click", () => {
  currentIndex++;

  // 點最後一張圖片直接跳轉
  if (currentIndex >= images.length) {
    window.location.href = "../pages/final.html"; // 跳转到 final.html
    return;
  }

  // 換下一張圖
  btn.style.backgroundImage = `url(${images[currentIndex]})`;
});