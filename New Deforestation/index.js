const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");

function aiaiaiaiai() {
  requestAnimationFrame(aiaiaiaiai);
  if (innerWidth <= 670) {
    img1.src = "ll.jpeg";
    img2.src = "forest1.png";
  } else {
    img1.src = "pp.jpeg";
    img2.src = "gg.jpeg";
  }
}
function backFunc() {
  var my_url = "../main-page2.html";
  setTimeout(() => {
    window.location.replace(my_url);
    console.log("yonfoo");
  }, 0);
}
aiaiaiaiai();
