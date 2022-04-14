const items = document.getElementsByClassName('item');

Array.from(items).forEach(item => {
    item.addEventListener('animationstart', () => {
        item.classList.remove('hidden');
    })
});

function growBox1() {
    document.getElementById("first").style.width = 400 + 'px';
    document.getElementById("first").style.height = 600 + 'px';
}

function noGrowBox1() {
    document.getElementById("first").style.width = 300 + 'px';
    document.getElementById("first").style.height = 500 + 'px';
}

function growBox2() {
    document.getElementById("second").style.width = 400 + 'px';
    document.getElementById("second").style.height = 600 + 'px';
}

function noGrowBox2() {
    document.getElementById("second").style.width = 300 + 'px';
    document.getElementById("second").style.height = 500 + 'px';
}

function growBox3() {
    document.getElementById("third").style.width = 400 + 'px';
    document.getElementById("third").style.height = 600 + 'px';
}

function noGrowBox3() {
    document.getElementById("third").style.width = 300 + 'px';
    document.getElementById("third").style.height = 500 + 'px';
}

function growBox4() {
    document.getElementById("fourth").style.width = 400 + 'px';
    document.getElementById("fourth").style.height = 600 + 'px';
}

function noGrowBox4() {
    document.getElementById("fourth").style.width = 300 + 'px';
    document.getElementById("fourth").style.height = 500 + 'px';
}