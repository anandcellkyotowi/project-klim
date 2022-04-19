const lightBulb = document.querySelector("#on");
const backGround = document.querySelector(".container");
const hidden1 = document.querySelector(".hidden1");
const hidden2 = document.querySelector(".hidden2");
const hidden3 = document.querySelector(".hidden3");
const hidden4 = document.querySelector(".hidden4");
const box2 = document.querySelector(".box2");
const block1 = document.querySelector(".block1");
const block2 = document.querySelector(".block2");
const block3 = document.querySelector(".block3");
const block4 = document.querySelector(".block4");
const block5 = document.querySelector(".block5");
const block6 = document.querySelector(".block6");
const block7 = document.querySelector(".block7");
const block8 = document.querySelector(".block8");
const block9 = document.querySelector(".block9");
const block10 = document.querySelector(".block10");

var LightOn = true;

lightBulb.addEventListener("click", () => {
    if (LightOn) {
        backGround.style.backgroundColor = "rgb( 40, 40, 40)";
        LightOn = false;
        hidden1.style.right = "9%";
        hidden2.style.left = "10%";
        hidden3.style.left = "57%";
        hidden4.style.top = "110vh";
        box2.style.top = "75vh";
        lightBulb.src = "lightoff.png";
        block1.style.height = "320px";
        block2.style.height = "285px";
        block3.style.height = "260px";
        block4.style.height = "235px";
        block5.style.height = "210px";
        block6.style.height = "185px";
        block7.style.height = "160px";
        block8.style.height = "135px";
        block9.style.height = "110px";
        block10.style.height = "85px";
    } else {
        backGround.style.backgroundColor = "#3d463a";
        LightOn = true;
        hidden1.style.right = "-50%";
        hidden2.style.left = "-50%";
        hidden3.style.left = "10%";
        hidden4.style.top = "75vh";
        box2.style.top = "46vh";
        lightBulb.src = "lighton.png";
        block1.style.height = "0px";
        block2.style.height = "0px";
        block3.style.height = "0px";
        block4.style.height = "0px";
        block5.style.height = "0px";
        block6.style.height = "0px";
        block7.style.height = "0px";
        block8.style.height = "0px";
        block9.style.height = "0px";
        block10.style.height = "0px";
    }
});