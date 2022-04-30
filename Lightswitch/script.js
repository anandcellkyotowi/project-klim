const lightBulb = document.querySelector('.bulb')
const backGround = document.querySelector('.container')
const info = document.querySelector('.infoish')
var LightOn = true

lightBulb.addEventListener("click", () => {
    if (LightOn) {
        backGround.style.backgroundColor = "rgb( 40, 40, 40)";
        info.style.marginLeft = "0%";
        LightOn = false;
        lightBulb.src = "lightoff.png";

    } else {
        backGround.style.backgroundColor = "#3D463A";
        info.style.marginLeft = "150%";
        LightOn = true;
        lightBulb.src = "lighton.png";
    }
});