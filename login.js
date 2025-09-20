import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';




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



const userLoginPage = document.getElementById("userLoginPage");


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

// 顯示「會員登入」畫面
function showUserLogin(){
    userLogin.classList.remove("d-none");
    console.log("顯示「會員登入」畫面");
}

// 隱藏「會員登入」畫面
function hideUserLogin(){
    userLogin.classList.add("d-none");
    console.log("隱藏「會員登入」畫面");

}

// 顯示「會員註冊」畫面
function showUserRegister(){
    userRegister.classList.add("d-block");
    userRegister.classList.remove("d-none");
    console.log("顯示「會員註冊」畫面");

}

// 隱藏「會員註冊」畫面
function hideUserRegistern(){
    userRegister.classList.add("d-none");
    userRegister.classList.remove("d-block");
    console.log("隱藏「會員註冊」畫面");
}

// 顯示「登入icon」畫面
function showUserIconBtn(){
    userIconBtn.classList.remove("d-none");
    userIconBtn.classList.add("d-inline-block");

}

// 隱藏「登入icon」畫面
function hideUserIconBtn(){
    userIconBtn.classList.add("d-none");
    userIconBtn.classList.remove("d-inline-block");
}

// 顯示「登入img」畫面
function showUserImgBtn(){
    userImgBtn.classList.add("d-inline-block");
    userImgBtn.classList.remove("d-none");
}

// 隱藏「登入img」畫面
function hideUserImgBtn(){
    userImgBtn.classList.add("d-none");
    userImgBtn.classList.remove("d-inline-block");
}


// 顯示「登入未輸入資料」的告警
function showLoginAlert(){
    loginAlert.classList.add("d-block");
    loginAlert.classList.remove("d-none");
}

// 隱藏「登入未輸入資料」的告警
function hideLoginAlert(){
    loginAlert.classList.remove("d-block");
    loginAlert.classList.add("d-none");
}

// 顯示「註冊未輸入資料」的告警
function showredisterAlert(){
    redisterAlert.classList.add("d-block");
    redisterAlert.classList.remove("d-none");
}

// 隱藏「註冊未輸入資料」的告警
function hideredisterAlert(){
    redisterAlert.classList.remove("d-block");
    redisterAlert.classList.add("d-none");
}

function clearInfo(){
    registerIdArr.forEach((input)=>{
        input.value = "";
    })
    loginInput.value = "";
    loginPassword.value = "";
    console.log("已清除填寫資料")
}




// 按下「加入會員按鈕」執行
goRegisterBtn.addEventListener("click",()=>{
    hideUserLogin();
    showUserRegister();
    hideLoginAlert();
    console.log("切換到註冊頁");
})

// 按下「會員登入按鈕」執行
goLoginBtn.addEventListener("click",()=>{
    hideUserRegistern();
    showUserLogin();
    console.log("切換到登入頁");

})




// 按下「登入按鈕」執行
confirmLogin.addEventListener("click",()=>{
    if( loginInput.value === "" || loginPassword.value === ""){
        showLoginAlert();
        console.log("帳號密碼未輸入完整")
        return;
    }else{
        
        hideLoginAlert();
        // loginState = true;
        storedLoginState = true;
        sessionStorage.setItem('loginState', JSON.stringify(storedLoginState));
        console.log(`目前登入狀態：${storedLoginState}`)
        checkloginState();
        clearInfo();

        document.getElementById('hiddenCloseBtn').click();
    }
        
})

const registerIdArr = [registerName, registerTel, registerAccount, registerPassword, registerPassword2];

// 按下「註冊按鈕」執行
confirmRedister.addEventListener("click",()=>{

    const allFilled = registerIdArr.every(input => input.value !== "");
    
    if(!allFilled){
        console.log("欄位未完整填寫")
        showredisterAlert();
    }else{
        // loginState = true;
        storedLoginState = true;
        sessionStorage.setItem('loginState', JSON.stringify(storedLoginState));
        console.log(`目前登入狀態：${storedLoginState}`)
        hideredisterAlert();
        checkloginState();
        clearInfo();
        document.getElementById('hiddenCloseBtn').click();
    }
})


logoutBtn.addEventListener("click",()=>{
    // loginState = false;
    storedLoginState = false;
    sessionStorage.setItem('loginState', JSON.stringify(storedLoginState));

    checkloginState();
    logoutAct();
})

// 確認當前登入狀態，來顯示頭像
function checkloginState(){
    let storedLoginState = JSON.parse(sessionStorage.getItem('loginState'));
    if(storedLoginState){
        hideUserIconBtn();
        showUserImgBtn()
        console.log(`會員已登入，目前登入狀態：${storedLoginState}`);

        
    }else{
        showUserIconBtn();
        hideUserImgBtn()
        console.log(`會員已登出，目前登入狀態：${storedLoginState}`);
    }
}

// 登出以後跳回首頁
function logoutAct(){
    window.location.href = "./index.html"; 
}


