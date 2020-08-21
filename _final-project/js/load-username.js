const username = document.querySelector(".username");

const USER_LS = "username";

function loadUsername() {
    username.innerHTML = localStorage.getItem(USER_LS);
}

loadUsername();
