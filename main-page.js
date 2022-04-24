const items = document.getElementsByClassName('item');
const topBar = document.getElementById('top-bar');
topBar.addEventListener('animationstart', () => {
    topBar.classList.remove('hidden');
});

Array.from(items).forEach(item => {
    item.addEventListener('animationstart', () => {
        item.classList.remove('hidden');
    })
});

var cursor = document.querySelector('.cursor');
var cursor2 = document.querySelector('.cursor2');
document.addEventListener('mousemove', function(e) {
    cursor.style.cssText = cursor2.style.cssText = 'left: ' + e.clientX + 'px; top: ' + e.clientY + 'px;';
})

function growBox1() {
    document.getElementById("first").style.width = 330 + 'px';
    document.getElementById("first").style.height = 330 + 'px';
    document.getElementById('first1').src = './Main Page img/air-hover.png';
}

function noGrowBox1() {
    document.getElementById("first").style.width = 300 + 'px';
    document.getElementById("first").style.height = 300 + 'px';
}

function growBox2() {
    document.getElementById("second").style.width = 330 + 'px';
    document.getElementById("second").style.height = 330 + 'px';
}

function noGrowBox2() {
    document.getElementById("second").style.width = 300 + 'px';
    document.getElementById("second").style.height = 300 + 'px';
}

function growBox3() {
    document.getElementById("third").style.width = 330 + 'px';
    document.getElementById("third").style.height = 330 + 'px';
}

function noGrowBox3() {
    document.getElementById("third").style.width = 300 + 'px';
    document.getElementById("third").style.height = 300 + 'px';
}

function growBox4() {
    document.getElementById("fourth").style.width = 330 + 'px';
    document.getElementById("fourth").style.height = 330 + 'px';
}

function noGrowBox4() {
    document.getElementById("fourth").style.width = 300 + 'px';
    document.getElementById("fourth").style.height = 300 + 'px';
}
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