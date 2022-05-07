var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");
document.addEventListener("mousemove", function (e) {
  cursor.style.cssText = cursor2.style.cssText =
    "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});

var ciggar = document.getElementById("ciggar");
var button = document.getElementById("button");
var text = document.getElementById("info");

function myFunction() {
  ciggar.style.width = 150 + "px";
  button.style.opacity = 0;
  text.style.opacity = 1;
  ciggar.style.backgroundColor = "rgb(92, 92, 92)";
}
