const lightBulb = document.querySelector("#on");
const backGround = document.querySelector(".container");
const hidden1 = document.querySelector(".hidden1");
const hidden2 = document.querySelector(".hidden2");
const hidden3 = document.querySelector(".hidden3");
const hidden4 = document.querySelector(".hidden4");
const box2 = document.querySelector(".box2");
const box1 = document.querySelector(".box1");
const diagram = document.querySelector(".diagram");
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

// function myFunctiontwo(y) {
//   if (y.matches) {
//     hidden1.style.top = "30vh";
//   } else {
//     // document.body.style.backgroundColor = "pink";
//   }
// }

// var y = window.matchMedia("(max-width: 1500px)");
// myFunctiontwo(y);
// y.addListener(myFunctiontwo);

lightBulb.addEventListener("click", () => {
  function myFunction(x) {
    if (x.matches) {
      if (LightOn) {
        backGround.style.backgroundColor = "rgb( 40, 40, 40)";
        LightOn = false;
        lightBulb.src = "lightoff.png";
        hidden1.style.top = "40vh";
        hidden1.style.width = "80%";
        hidden1.style.right = "7%";
        box1.style.top = "55vh";
        box1.style.right = "25%";
        hidden2.style.width = "80%";
        hidden2.style.top = "80vh";
        hidden2.style.left = "13%";
        box2.style.top = "95vh";
        box2.style.left = "30%";
        hidden3.style.top = "120vh";
        hidden3.style.width = "80%";
        hidden3.style.left = "13%";
        hidden4.style.top = "170vh";
        hidden4.style.width = "80%";
        hidden4.style.left = "13%";
        diagram.style.top = "135vh";
        diagram.style.left = "30%";
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
        lightBulb.src = "lighton.png";
        hidden1.style.top = "10vh";
        hidden1.style.width = "33%";
        hidden1.style.right = "-50%";
        box1.style.top = "45vh";
        box1.style.right = "25%";
        hidden2.style.width = "33%";
        hidden2.style.top = "80vh";
        hidden2.style.left = "-50%";
        box2.style.top = "75vh";
        box2.style.left = "30%";
        hidden3.style.top = "100vh";
        hidden3.style.width = "80%";
        hidden3.style.left = "10%";
        s;
        diagram.style.top = "110vh";
        diagram.style.left = "30%";
        hidden4.style.top = "150vh";
        hidden4.style.width = "80%";
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
    } else {
      if (LightOn) {
        backGround.style.backgroundColor = "rgb( 40, 40, 40)";
        LightOn = false;
        lightBulb.src = "lightoff.png";
        hidden1.style.right = "9%";
        hidden1.style.width = "33%";
        hidden2.style.left = "10%";
        hidden3.style.left = "57%";
        hidden4.style.top = "110vh";
        box2.style.top = "75vh";
        box1.style.right = "3%";
        box1.style.top = "46vh";
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
        lightBulb.src = "lighton.png";
        hidden1.style.right = "-50%";
        hidden1.style.top = "10vh";
        hidden1.style.width = "33%";
        hidden2.style.top = "48vh";
        hidden2.style.left = "-50%";
        hidden2.style.width = "33%";
        hidden3.style.top = "75vh";
        hidden3.style.width = "33%";
        hidden3.style.left = "10%";
        hidden4.style.top = "75vh";
        hidden4.style.width = "33%";
        hidden4.style.right = "10%";
        box1.style.top = "46vh";
        box1.style.right = "3%";
        box2.style.top = "46vh";
        box2.style.left = "3%";
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
    }
  }
  var x = window.matchMedia("(max-width: 700px)");
  myFunction(x);
  x.addListener(myFunction);
});

