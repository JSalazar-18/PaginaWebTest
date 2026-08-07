const led = document.getElementById("led");
const btnGreen = document.getElementById("btnGreen");
const btnBlue = document.getElementById("btnBlue");

function setLedColor(colorClass) {

    led.classList.remove(
        "led-gray",
        "led-green",
        "led-blue"
    );

    led.classList.add(colorClass);

}

btnGreen.addEventListener("click", () => {
    setLedColor("led-green");
});

btnBlue.addEventListener("click", () => {
    setLedColor("led-blue");
});