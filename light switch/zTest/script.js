const lightBulb = document.querySelector('.axe')
const backGround = document.querySelector('.container')
const shit = document.querySelector('.infoish')
const touch = document.querySelector('.touch')
const title = document.querySelector(".title")
var LightOn = true

lightBulb.addEventListener("click", () => {
    if (LightOn) {
        backGround.style.backgroundColor = "rgb( 40, 40, 40)";
        shit.style.opacity = "100%"
        touch.style.opacity = "0%"
        shit.style.marginLeft = '0'
        title.style.backgroundColor = "rgb( 40, 40, 40)"
        title.style.boxShadow = "0 20px 30px 0 #232325"
        LightOn = false;
        lightBulb.src = "lightoff.png";

    } else {
        backGround.style.backgroundColor = "#3D463A";
        LightOn = true;
        shit.style.opacity = "0%"
        touch.style.opacity = "100%"
        title.style.backgroundColor = "#3D463A"
        title.style.boxShadow = "0 20px 30px 0 #191919"
        lightBulb.src = "lighton.png";
    }
});

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll", reveal);


reveal();
var cursor = document.querySelector('.cursor');
var cursor2 = document.querySelector('.cursor2');
document.addEventListener('mousemove', function(e) {
    cursor.style.cssText = cursor2.style.cssText = 'left: ' + e.clientX + 'px; top: ' + e.clientY + 'px;';
})