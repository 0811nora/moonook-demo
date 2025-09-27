import './assets/scss/all.scss';
// import 'bootstrap/dist/js/bootstrap.min.js';


// ------ 登入登出狀態功能 --------

const userLogin = document.querySelector(".user-login");
const userRegister = document.querySelector(".user-register");
const goLoginBtn = document.querySelector(".go-login-btn");
const goRegisterBtn = document.querySelector(".go-register-btn");
const userIconBtn = document.querySelector(".userIcon-btn");
const userImgBtn = document.querySelector(".userImg-btn");
const confirmLogin = document.querySelector(".confirm-login");
const confirmRedister = document.querySelector(".confirm-redister");
const loginAlert = document.querySelector(".login-alert");
const redisterAlert = document.querySelector(".redister-alert");

const loginInput = document.getElementById("loginInput");
const loginPassword = document.getElementById("loginPassword");
const logoutBtn = document.getElementById("logoutBtn");

const registerName = document.getElementById("redisterName");
const registerTel = document.getElementById("redisterTel");
const registerAccount = document.getElementById("redisteraccount");
const registerPassword = document.getElementById("redisterPassword");
const registerPassword2 = document.getElementById("redisterPassword2");

let storedLoginState = JSON.parse(sessionStorage.getItem('loginState'));

if (storedLoginState === null) {
    storedLoginState = false;
    sessionStorage.setItem('loginState', JSON.stringify(storedLoginState));
}

checkloginState();

// 所有函數定義保持不變...
function showUserLogin() {
    if (userLogin) userLogin.classList.remove("d-none");
    console.log("顯示「會員登入」畫面");
}

function hideUserLogin() {
    if (userLogin) userLogin.classList.add("d-none");
    console.log("隱藏「會員登入」畫面");
}

function showUserRegister() {
    if (userRegister) {
        userRegister.classList.add("d-block");
        userRegister.classList.remove("d-none");
    }
    console.log("顯示「會員註冊」畫面");
}

function hideUserRegistern() {
    if (userRegister) {
        userRegister.classList.add("d-none");
        userRegister.classList.remove("d-block");
    }
    console.log("隱藏「會員註冊」畫面");
}

function showUserIconBtn() {
    if (userIconBtn) {
        userIconBtn.classList.remove("d-none");
        userIconBtn.classList.add("d-inline-block");
    }
}

function hideUserIconBtn() {
    if (userIconBtn) {
        userIconBtn.classList.add("d-none");
        userIconBtn.classList.remove("d-inline-block");
    }
}

function showUserImgBtn() {
    if (userImgBtn) {
        userImgBtn.classList.add("d-inline-block");
        userImgBtn.classList.remove("d-none");
    }
}

function hideUserImgBtn() {
    if (userImgBtn) {
        userImgBtn.classList.add("d-none");
        userImgBtn.classList.remove("d-inline-block");
    }
}

function showLoginAlert() {
    if (loginAlert) {
        loginAlert.classList.add("d-block");
        loginAlert.classList.remove("d-none");
    }
}

function hideLoginAlert() {
    if (loginAlert) {
        loginAlert.classList.remove("d-block");
        loginAlert.classList.add("d-none");
    }
}

function showredisterAlert() {
    if (redisterAlert) {
        redisterAlert.classList.add("d-block");
        redisterAlert.classList.remove("d-none");
    }
}

function hideredisterAlert() {
    if (redisterAlert) {
        redisterAlert.classList.remove("d-block");
        redisterAlert.classList.add("d-none");
    }
}

function clearInfo() {
    const registerIdArr = [registerName, registerTel, registerAccount, registerPassword, registerPassword2].filter(el => el);
    registerIdArr.forEach((input) => {
        input.value = "";
    })
    if (loginInput) loginInput.value = "";
    if (loginPassword) loginPassword.value = "";
    console.log("已清除填寫資料")
}

// 事件監聽器 - 加入存在檢查
if (goRegisterBtn) {
    goRegisterBtn.addEventListener("click", () => {
        hideUserLogin();
        showUserRegister();
        hideLoginAlert();
        console.log("切換到註冊頁");
    })
}

if (goLoginBtn) {
    goLoginBtn.addEventListener("click", () => {
        hideUserRegistern();
        showUserLogin();
        console.log("切換到登入頁");
    })
}

if (confirmLogin) {
    confirmLogin.addEventListener("click", () => {
        if (!loginInput || !loginPassword || loginInput.value === "" || loginPassword.value === "") {
            showLoginAlert();
            console.log("帳號密碼未輸入完整")
            return;
        } else {
            hideLoginAlert();
            storedLoginState = true;
            sessionStorage.setItem('loginState', JSON.stringify(storedLoginState));
            console.log(`目前登入狀態：${storedLoginState}`)
            checkloginState();
            clearInfo();

            const hiddenCloseBtn = document.getElementById('hiddenCloseBtn');
            if (hiddenCloseBtn) hiddenCloseBtn.click();
        }
    })
}

const registerIdArr = [registerName, registerTel, registerAccount, registerPassword, registerPassword2].filter(el => el);

if (confirmRedister) {
    confirmRedister.addEventListener("click", () => {
        const allFilled = registerIdArr.every(input => input && input.value !== "");

        if (!allFilled) {
            console.log("欄位未完整填寫")
            showredisterAlert();
        } else {
            storedLoginState = true;
            sessionStorage.setItem('loginState', JSON.stringify(storedLoginState));
            console.log(`目前登入狀態：${storedLoginState}`)
            hideredisterAlert();
            checkloginState();
            clearInfo();
            const hiddenCloseBtn = document.getElementById('hiddenCloseBtn');
            if (hiddenCloseBtn) hiddenCloseBtn.click();
        }
    })
}

if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
        storedLoginState = false;
        sessionStorage.setItem('loginState', JSON.stringify(storedLoginState));
        checkloginState();
        logoutAct();
    })
}

if (logoutBtnrwd) {
    logoutBtnrwd.addEventListener("click", () => {
        storedLoginState = false;
        sessionStorage.setItem('loginState', JSON.stringify(storedLoginState));
        checkloginState();
        logoutAct();
    })
}

function checkloginState() {
    let storedLoginState = JSON.parse(sessionStorage.getItem('loginState'));
    if (storedLoginState) {
        hideUserIconBtn();
        showUserImgBtn()
        console.log(`會員已登入，目前登入狀態：${storedLoginState}`);
    } else {
        showUserIconBtn();
        hideUserImgBtn()
        console.log(`會員已登出，目前登入狀態：${storedLoginState}`);
    }
}

function logoutAct() {
    window.location.href = "./index.html";
}


