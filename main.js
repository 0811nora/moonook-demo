import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";

console.log("Hello world");

document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");

  // loader最短顯示時間
  const minDisplayTime = 2000;

  // 取得頁面內容載入完成的時間點
  const loadStartTime = performance.now();

  window.onload = () => {
    // 取得頁面內容載入結束的時間點
    const loadEndTime = performance.now();

    // 計算頁面實際載入所花費的時間
    const actualLoadTime = loadEndTime - loadStartTime;

    // 計算 loader 還需要顯示多久才能達到最短時間
    const remainingTime = Math.max(0, minDisplayTime - actualLoadTime);

    // 等待剩餘時間或立即隱藏
    setTimeout(() => {
      // 增加過渡效果，讓隱藏更平滑
      loader.style.opacity = "0";

      // 在過渡效果結束後，移除或隱藏 loader
      setTimeout(() => {
        loader.style.display = "none";
      }, 500); // 這裡的時間應與 CSS 的 transition 時間一致
    }, remainingTime);
  };
});
