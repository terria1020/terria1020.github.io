function wellDone(pos) {
    const weather = document.querySelector("#location_weather");
    const temp = document.querySelector("#temp");

    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;

    const API_KEY = "85e1fa6906e3d3a1820da52878b7b5e5";

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            weather.innerText = `지역: ${data.name}, 날씨: ${data.weather[0].main}`;
            temp.innerText = `현재 온도: ${data.main.temp}°C, 체감 온도: ${data.main.feels_like}°C`;
        });
}

function notWork() {
    const weather = document.querySelector("#location_weather");
    weather.innerText = "[!] can't loaded your pos.";
}

document.addEventListener("DOMContentLoaded", (event) => {
    navigator.geolocation.getCurrentPosition(wellDone, notWork);
});
