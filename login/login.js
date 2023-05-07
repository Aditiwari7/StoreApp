const currUser = {};
var userdata = JSON.parse(localStorage.getItem("files"));
var loginEmail = document.getElementById("loginemail");
var loginPswd = document.getElementById("loginpswd");
var error = document.getElementById("error-msg");
// in the navbar section when you click on signup it will take to signup page
const currentUser = {};
var mySignUpData = JSON.parse(localStorage.getItem("files"));
var loginemail = document.getElementById("loginemail");
var loginpassword = document.getElementById("loginpassword");
var error = document.getElementById("error");




document.getElementById('signup').addEventListener('click',()=>{
    window.location.href = '../signup/signup.html';
})

// getting stored data from local storage
console.log("currentUser", mySignUpData);

loginbtn.addEventListener("click", validationOfLogin);
function validationOfLogin() {
  mySignUpData.map((data) => {
    // console.log(data.password);
    if(loginemail.value == '' || loginpassword.value == ''){
        error.innerHTML = "Please fill the details";
        error.style.display = "block";
        return false;
    }

    if ( data.email == loginemail.value ){
        if(data.password == loginpassword.value){
            currentUser.token = generateToken();
            window.localStorage.setItem('currentUser', (JSON.stringify(currentUser)));
            alert('Logged in successfully!!!')
            window.location.href = "../shop/index.html";


        }
        else{
            error.innerHTML = "Please fill the correct password";
            error.style.display = "block";
            return false;
        }
      
    } else {
            error.innerHTML = "Please fill the correct email";
            error.style.display = "block";
            return false;
    }

   
  });
}
if (window.localStorage.getItem('currentUser')) {
    window.location.href = '../shop/index.html';
}

function generateToken() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charsLength = chars.length;
    let randomStr = String(Math.random()).slice(2, 18);
    let token = "";
    randomStr.split("").forEach(digit => {
        token += chars.charAt(parseInt(digit, 10) % charsLength)
    });
    return token;
}
document.getElementById('signup').addEventListener('click',()=>{
    window.location.href = "../signup/signup.html";
})

//get stored data from local storage
console.log("currUser", userdata);

login-btn.addEventListener("click", function() {
    userdata.map((data) => {
        if(loginEmail.value == '' || loginPswd.value == ''){
            error.innerHTML = "Please fill the details";
            error.style.display = "block";
            return false;
        }

        if(data.email == loginEmail.value){
            if(data.password == loginPswd.value){
                currUser.token = generrateToken();
                window.localStorage.setItem('currUser', (JSON.stringify(currUser)));
                alert('Logged In Successfully')
                window.location.herf = "../shop/shop.html";
            }
            else{
                error.innerHTML = "Please fill the correct password";
                error.style.display = "block";
                return false;
            }
        }
        else{
            error.innerHTML = "Please fill the correct email";
            error.style.display = "block";
            return false;
        }
    });
})

if(window.localStorage.getItem('currUser')){
    window.location.herf = '../shop/shop.html'
}

function generrateToken() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charsLength = chars.length;
    let randomStr = String(Math.random()).slice(2, 18);
    let token = "";
    randomStr.split("").forEach(digit => {
        token += chars.charAt(parseInt(digit, 10) % charsLength)
    });
    return token;
}