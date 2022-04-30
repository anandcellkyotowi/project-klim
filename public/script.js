const lightBulb = document.querySelector("#bulb");
const backGround = document.querySelector(".container");
const button = document.querySelector(".back");
const hiddenDiv = document.querySelector(".hidden");
const hiddenDiv2 = document.querySelector(".hidden2");
const hiddenDiv3 = document.querySelector(".hidden3");
const hiddenDiv4 = document.querySelector(".hidden4");
const box = document.querySelector(".box");
const box3 = document.querySelector(".box3");
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

lightBulb.src = "lighton.png";

lightBulb.addEventListener("click", () => {
    if (LightOn) {
        backGround.style.backgroundColor = "rgb( 40, 40, 40)";
        LightOn = false;
        lightBulb.src = "lightoff.png";
        hiddenDiv.style.left = "55%";
        hiddenDiv3.style.left = "55%";
        hiddenDiv4.style.top = "1250px";
        box.style.top = "850px";
        hiddenDiv2.style.right = "57%";
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
        backGround.style.backgroundColor = "#3D463A";
        LightOn = true;
        lightBulb.src = "lighton.png";
        hiddenDiv.style.left = "100%";
        box.style.top = "497px";
        hiddenDiv2.style.right = "120%";
        hiddenDiv3.style.left = "13%";
        hiddenDiv4.style.top = "850px";
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