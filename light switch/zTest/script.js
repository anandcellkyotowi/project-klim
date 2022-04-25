

const lightBulb = document.querySelector('.axe')
const backGround = document.querySelector('.container')
const shit = document.querySelector('.infoish')
var LightOn = true

lightBulb.addEventListener("click", () => {
    if (LightOn) {
        backGround.style.backgroundColor = "rgb( 40, 40, 40)";
        shit.style.marginLeft = '0'
        LightOn = false;
        lightBulb.src = "lightoff.png";

    } else {
        backGround.style.backgroundColor = "#3D463A";
        LightOn = true;
        shit.style.marginLeft = '-100%'
        lightBulb.src = "lighton.png";
    }
});