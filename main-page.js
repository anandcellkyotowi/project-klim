const items = document.getElementsByClassName('item');
const topBar = document.getElementById('top-bar');
const menuButton = document.querySelector('.menu-bar')
const menu = document.querySelector('#menu')
var menuActive = true

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

function changeColorDark() {
    document.body.style.backgroundImage = "url('background1.png')";
    document.body.style.backgroundColor = 'black';
    document.getElementById('light-mode').style.display = 'none';
    document.getElementById('dark-mode').style.display = 'block';
    const kolor = document.getElementsByClassName('kolor');
    Array.from(kolor).forEach(item => {
        item.style.color = 'white';
    });


}

function changeColorLight() {
    document.body.style.backgroundImage = "url('background.jpg')";
    document.body.style.backgroundColor = 'white';
    document.getElementById('dark-mode').style.display = 'none';
    document.getElementById('light-mode').style.display = 'block';
    const kolor = document.getElementsByClassName('kolor');
    Array.from(kolor).forEach(item => {
        item.style.color = 'black';
    });
    document.getElementsByClassName('kolors').style.color = 'black';

}

function growBox1() {
    document.getElementById("first").style.width = 280 + 'px';
    document.getElementById("first").style.height = 430 + 'px';
}

function noGrowBox1() {
    document.getElementById("first").style.width = 250 + 'px';
    document.getElementById("first").style.height = 400 + 'px';
}

function growBox2() {
    document.getElementById("second").style.width = 280 + 'px';
    document.getElementById("second").style.height = 430 + 'px';
}

function noGrowBox2() {
    document.getElementById("second").style.width = 250 + 'px';
    document.getElementById("second").style.height = 400 + 'px';
}

function growBox3() {
    document.getElementById("third").style.width = 280 + 'px';
    document.getElementById("third").style.height = 430 + 'px';
}

function noGrowBox3() {
    document.getElementById("third").style.width = 250 + 'px';
    document.getElementById("third").style.height = 400 + 'px';
}

function growBox4() {
    document.getElementById("fourth").style.width = 280 + 'px';
    document.getElementById("fourth").style.height = 430 + 'px';
}

function noGrowBox4() {
    document.getElementById("fourth").style.width = 250 + 'px';
    document.getElementById("fourth").style.height = 400 + 'px';
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

menuButton.addEventListener('click', () => {
    if (menuActive) {
        menuActive = false
        menu.style.opacity = '0%'
    } else if (!menuActive) {
        menuActive = true
        menu.style.opacity = '100%'
    }
})