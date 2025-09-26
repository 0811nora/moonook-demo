import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';
import './login.js';


console.log("Hello world");

// document.addEventListener("DOMContentLoaded", () => {
//   const loader = document.getElementById("loader");

//   // loader最短顯示時間
//   const minDisplayTime = 2000;

//   // 取得頁面內容載入完成的時間點
//   const loadStartTime = performance.now();

//   window.onload = () => {
//     // 取得頁面內容載入結束的時間點
//     const loadEndTime = performance.now();

//     // 計算頁面實際載入所花費的時間
//     const actualLoadTime = loadEndTime - loadStartTime;

//     // 計算 loader 還需要顯示多久才能達到最短時間
//     const remainingTime = Math.max(0, minDisplayTime - actualLoadTime);

//     // 等待剩餘時間或立即隱藏
//     setTimeout(() => {
//       // 增加過渡效果，讓隱藏更平滑
//       loader.style.opacity = "0";

//       // 在過渡效果結束後，移除或隱藏 loader
//       setTimeout(() => {
//         loader.style.display = "none";
//       }, 500); // 這裡的時間應與 CSS 的 transition 時間一致
//     }, remainingTime);
//   };
// });

document.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById("loader");
    
    if (!loader) {
        console.error("找不到 loader 元素");
        return;
    }

    // 可調整的時間設定
    const minDisplayTime = 1500;    //設定最少時間
    const maxDisplayTime = 2000;  // 最多顯示 3 秒

    console.log("Loading 開始");

    // 統一的隱藏 loader 函數
    function hideLoader() {
        if (loader && loader.style.display !== "none") {
            console.log("隱藏 loader");
            loader.style.opacity = "0";
            
            setTimeout(() => {
                loader.style.display = "none";
                console.log("Loader 已完全隱藏");
            }, 500);
        }
    }

    setTimeout(() => {
        console.log("強制關閉 loader (最大時間)");
        hideLoader();
    }, maxDisplayTime);



    setTimeout(() => {
        // 檢查頁面載入狀態
        if (document.readyState === 'complete') {
            console.log("頁面載入完成，隱藏 loader (最小時間)");
            hideLoader();
        } else {
            // 如果還沒載入完成，繼續等待
            const checkComplete = setInterval(() => {
                if (document.readyState === 'complete') {
                    console.log("頁面載入完成，隱藏 loader (檢查後)");
                    clearInterval(checkComplete);
                    hideLoader();
                }
            }, 100);
        }
    }, minDisplayTime);
});
