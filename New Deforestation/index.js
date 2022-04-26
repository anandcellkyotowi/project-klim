const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");

const changeImage = () => {
  if (innerWidth <= 670) {
    img1.src = "ll.jpeg";
    img2.src = "forest1.png";
  } else {
    img1.src = "pp.jpeg";
    img2.src = "gg.jpeg";
  }
};

changeImage();

window.addEventListener("resize", changeImage);

function backFunc() {
  var my_url = "../main-page2.html";
  window.location.replace(my_url);
}
var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");

document.addEventListener("mousemove", function (e) {
  cursor.style.cssText = cursor2.style.cssText =
    "left: " + e.clientX + "px; top: " + e.clientY + "px;";
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
