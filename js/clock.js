function isLoggedIn() {
    const name = localStorage.getItem("name");
    return name !== null;
}

function getPadString(target, character, num) {
    return String(target).padStart(num, character);
}

function setTime() {
    const clock = document.querySelector("#clock");
    const now = new Date();
    const hh = getPadString(now.getHours(), "0", 2);
    const mm = getPadString(now.getMinutes(), "0", 2);
    const ss = getPadString(now.getSeconds(), "0", 2);

    clock.innerText = `현재 시간: ${hh}시 ${mm}분 ${ss}초`;
}

function attachClock() {
    setTime();
    setInterval(setTime, 1000);
}
document.addEventListener("DOMContentLoaded", (event) => {
    if (isLoggedIn()) {
        attachClock();
    } else {
        const loginForm = document.querySelector("#name_field");
        loginForm.addEventListener("submit", (event) => {
            event.preventDefault();
            attachClock();
        });
    }
});
