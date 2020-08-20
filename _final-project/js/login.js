const logInBtn = document.querySelector(".welcome__btn"),
    logInInput = document.querySelector(".welcome__input");

const USER_LS = "username";

function saveUsername(event) {
    localStorage.setItem(USER_LS, logInInput.value);
}

function init() {
    logInBtn.addEventListener("click", saveUsername);
}

init();
