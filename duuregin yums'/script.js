const lightBulb = document.querySelector("#bulb");
const backGround = document.querySelector(".container");
const button = document.querySelector(".back");
const hiddenDiv = document.querySelector(".hidden");
const hiddenDiv2 = document.querySelector(".hidden2");
const box = document.querySelector(".box");

var LightOn = true;

lightBulb.src = "lighton.png";

lightBulb.addEventListener("click", () => {
  if (LightOn) {
    backGround.style.backgroundColor = "rgb( 40, 40, 40)";
    LightOn = false;
    lightBulb.src = "lightoff.png";
    hiddenDiv.style.left = "60%";
    box.style.top = "780px";
    hiddenDiv2.style.right = "57%";
  } else {
    backGround.style.backgroundColor = "#3D463A";
    LightOn = true;
    lightBulb.src = "lighton.png";
    hiddenDiv.style.left = "100%";
    box.style.top = "497px";
    hiddenDiv2.style.right = "120%";
  }
});
