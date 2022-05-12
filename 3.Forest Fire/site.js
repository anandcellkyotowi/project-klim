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

function myFunction() {
  // ciggar.style.width = 150 + "px";
  // ciggar.style.backgroundColor = "rgb(92, 92, 92)";
  text.innerHTML =
    "Уур амьсгалын өөрчлөлт, ойн доройтол, хуваагдал нь дэлхий даяар түймэрт өртөмтгий нөхцөл байдлыг бий болгоод байна. Илүү халуун, хуурай нөхцөлд хүнээс эсвэл аянга цахилгаанаар гал авалцдаг гал нь илүү том талбайд, илүү халуун температурт шатах магадлал өндөр байдаг.";
  button.style.opacity = 0;
  text.style.opacity = 1;
  ciggar.classList.remove("burn");
  backG.classList.remove("pageani");
  backG.style.backgroundColor = "rgb(255, 124, 48)";
  smoke.style.opacity = 0;
}
