var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 500
canvas.height = 500

var cx = canvas.width / 2;
var cy = canvas.height / 2;
var rectWidth = 50;
var rectHeight = 60;
var y = 250
var x = 420
var rotation = 0;
var direction = 'none'
var Ship = new Image()
const enemies = []
Ship.src = 'ship2.png'

requestAnimationFrame(animate);

function spawnEnemies() {
    const radius = 5
    const angle = Math.atan2(canvas.height / 2 - y, canvas.width / 2 - x)
    const velocity = {
        x: Math.cos(angle) * 2,
        y: Math.sin(angle) * 2
    }
    enemies.push(new Enemy(170, 0, radius, 'rgb(0, 94, 255)', velocity, rotation))
}

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.fillStyle = "blue"
    ctx.arc(cx, cy, 75, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(rotation);
    ctx.drawImage(Ship, -rectWidth / 2 + 170, -rectHeight / 2, rectWidth, rectHeight)

    enemies.forEach((enemy) => {
        enemy.update()
    })
    ctx.restore();
    if (direction == 'right')
        rotation -= (Math.PI / 180);
    if (direction == 'left')
        rotation += (Math.PI / 180);
}

addEventListener('keydown', (event) => {
    if (event.key == 'a' || event.key == 'ArrowLeft') {
        direction = 'right'
    } else if (event.key == 'd' || event.key == 'ArrowRight') {
        direction = 'left'
    }
    if (event.key == ' ') {
        spawnEnemies()
    }
})
addEventListener('keyup', (event) => {
    if (event.key == 'a' || event.key == 'ArrowRight') {
        direction = 'none'
    } else if (event.key == 'd' || event.key == 'ArrowLeft') {
        direction = 'none'
    }
})