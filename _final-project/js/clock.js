const statusbarClock = document.querySelector(".statusbar__clock");

function getTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    statusbarClock.innerText = `${hours < 10 ? `0${hours}` : hours}:` + `${minutes < 10 ? `0${minutes}` : minutes}`;
}

function showClock() {
    getTime();
    setInterval(getTime, 5000);
}

function init() {
    showClock();
}

init();
