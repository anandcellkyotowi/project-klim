const items = document.getElementsByClassName('item');

Array.from(items).forEach(item => {
    item.addEventListener('animationstart', () => {
        item.classList.remove('hidden');
    })
});

function GrowBox() {
    document.getElementById("first").style.width = 600;
}