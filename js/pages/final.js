const sentences = [
  "每一層配料，都是今天的你。",
  "不論味道怎麼混，都是獨一無二的組合。",
  "有些日子要加辣，有些日子只需要一點奶油",
  "今天的味道，也值得被好好吃下來",
  "就算今天煎焦了，明天還能重新翻面。",
  "每一口都是再理解自己一點點。",
  "情緒混在一起，也能成為好吃的味道。",
  "這是你的漢堡，你可以自由加料，也可以選擇少放一點。",
  "不完美的漢堡，仍然能帶來溫飽。",
  "吃完這一口，明天又是新的食譜。",
  "今天的味道不一定完美，但依然值得被記住。",
];

const sentenceElement = document.getElementById("sentence");
const animationElement = document.getElementById("animation");
const homeBtnDiv = document.querySelector(".homeBtn");
const homeBtn = homeBtnDiv ? homeBtnDiv.querySelector("img") : null;

// ㄅ堡動畫
function showAnimation() {
  if (!animationElement) return null;
  const animationChars = ["ㄅ", "堡", "ㄅ", "堡", "ㄅ", "堡"];
  let count = 0;
  const interval = setInterval(() => {
    if (animationElement) {
      animationElement.textContent =
        animationChars[count % animationChars.length];
    }
    count++;
  }, 100);
  return interval;
}

// 隨機句子
function getRandomSentence() {
  const randomIndex = Math.floor(Math.random() * sentences.length);
  return sentences[randomIndex];
}

// 顯示句子動畫
function displaySentence(sentence) {
  if (!sentenceElement) return;
  sentenceElement.classList.remove("show");
  setTimeout(() => {
    if (sentenceElement) {
      sentenceElement.textContent = sentence;
      sentenceElement.classList.add("show");
    }
  }, 300);
}

// 網頁一進入就生成句子
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const randomSentence = getRandomSentence();
    displaySentence(randomSentence);

    // 顯示回首頁按鈕
    if (homeBtnDiv) {
      homeBtnDiv.style.display = "block";
    }
  }, 800);
});

// 回首頁按鈕效果
if (homeBtn) {
  homeBtn.addEventListener("mouseenter", () => {
    homeBtn.src = homeBtn.dataset.hover;
  });

  homeBtn.addEventListener("mouseleave", () => {
    homeBtn.src = homeBtn.dataset.default;
  });

  homeBtn.addEventListener("mousedown", () => {
    homeBtn.src = homeBtn.dataset.active;
  });

  homeBtn.addEventListener("mouseup", () => {
    homeBtn.src = homeBtn.dataset.default;
    window.location.href = "../index.html"; // 回首頁
  });
}
