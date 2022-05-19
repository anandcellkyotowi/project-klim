var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");
document.addEventListener("mousemove", function (e) {
  cursor.style.cssText = cursor2.style.cssText =
    "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});

var ciggar = document.getElementById("ciggar");
var button = document.getElementById("button");
var text = document.getElementById("info");
var backG = document.getElementById("backG");
var smoke = document.getElementById("smoke");
var texT = document.getElementById("text2");
var fire = false;

function myFunction() {
  fire = true;
  if (fire == true) {
    button.innerHTML = "Тамхи унтарлаа";
    button.style.backgroundColor = "rgb(255, 195, 55)";
    texT.style.display = "grid";
    text.innerHTML = "";
    text.style.opacity = 1;
    ciggar.classList.remove("burn");
    text.classList.remove("info");
    texT.classList.add("info");
    backG.style.transition = "all 1s";
    backG.style.animation = "none";
    backG.style.backgroundColor = "rgb(255, 124, 48)";
    smoke.style.opacity = 0;
    fire = false;
  }
}
