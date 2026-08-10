const led = document.getElementById("led");
const btnGreen = document.getElementById("btnGreen");
const btnBlue = document.getElementById("btnBlue");

let intervalId = null;
let currentMode = null;

function setLedColor(colorClass) {
    led.classList.remove(
        "led-gray",
        "led-green",
        "led-blue"
    );
    led.classList.add(colorClass);
}

function stopOscillation() {
    if (intervalId !== null) {
        clearInterval(intervalId);
        intervalId = null;
    }
    currentMode = null;
    setLedColor("led-gray");
}

function startOscillation(mode, colorClass) {
    stopOscillation();
    currentMode = mode;

    let isColorActive = true;
    setLedColor(colorClass);

    intervalId = setInterval(() => {
        isColorActive = !isColorActive;
        setLedColor(isColorActive ? colorClass : "led-gray");
    }, 1000);
}

btnGreen.addEventListener("click", () => {
    if (currentMode === "green") {
        stopOscillation();
    } else {
        startOscillation("green", "led-green");
    }
});

btnBlue.addEventListener("click", () => {
    if (currentMode === "blue") {
        stopOscillation();
    } else {
        startOscillation("blue", "led-blue");
    }
});