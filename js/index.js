// jshint esversion:10

// import { CountUp } from "./js/countUp.min.js";

// window.onload = function () {
//   var countUp = new CountUp("counter-1", 20000);
//   countUp.start();
// };
let logout = () => {
  console.log("logout");
}


let btnDisplay = () => {
  let btnDisplay = document.querySelector("#btn-navbar");
  let getUserData = localStorage.getItem("user");
  console.log(getUserData);
  if (getUserData !== null) {
    let logoutLink = document.createElement("button");
    logoutLink.className = "btn btn-outline-warning";
    // logoutLink.setAttribute("href", "./pages/Login/login.html");
    logoutLink.addEventListener("click", logout)
    logoutLink.innerHTML = "Logout";
    btnDisplay.appendChild(logoutLink)
  } else {
    let btnGroup = document.createElement("div");
    btnGroup.className = "btn-group";
    btnGroup.setAttribute("role", "group");
    let loginLink = document.createElement("a");
    loginLink.className = "btn btn-outline-info";
    loginLink.setAttribute("href", "./pages/Login/login.html");
    loginLink.innerHTML = "Login";
    let signupLink = document.createElement("a");
    signupLink.className = "btn btn-info";
    signupLink.setAttribute("href", "./pages/Register/register.html");
    signupLink.innerHTML = "Signup";
    btnDisplay.appendChild(btnGroup);
    btnGroup.appendChild(loginLink);
    btnGroup.appendChild(signupLink);
  }
};

btnDisplay();

// let logout = () => {

// }
