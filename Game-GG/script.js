const canvas = document.getElementById('canvas');
const c = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 600;

let angle = 0;
var current = 'none'
var enemies = []
var reloaded = 'true'
const r = 200;
const speed = 0.02



/* -------------------------------------------------------------------------- */
/*                                   Animate                                  */
/* -------------------------------------------------------------------------- */

let animationId;

function reload() {
    setTimeout(() => {
        reloaded = true
    }, 150)
}

function spawnEnemies() {
    let x = player.x + player.dx
    let y = player.y + player.dy
    let color = 'magenta'
    const angle = Math.atan2(canvas.height / 2 - y, canvas.width / 2 - x)
    const velocity = {
        x: Math.cos(angle) * 10,
        y: Math.sin(angle) * 10
    }
    enemies.push(new Enemy(x, y, 5, color, velocity))
}

function animate() {
    player = new ViewFinder(canvas.width / 2, canvas.height / 2, 30, 'white', 50, 66);
    earth = new Earth(canvas.width / 2, canvas.height / 2, 30, 'white', 50, 50);
    animationId = requestAnimationFrame(animate);
    c.fillStyle = 'rgba(0, 0, 0, 0.5)';
    c.fillRect(0, 0, canvas.width, canvas.height);
    // calculate velocity
    if (current == 'left')
        angle -= speed;
    if (current == 'right')
        angle += speed;
    // c.translate(viewFinder.x + viewFinder.dx, viewFinder.y + viewFinder.dy)
    // c.rotate(angle)
    player.update();
    earth.update();
    // c.restore()
    enemies.forEach((enemy) => {
        enemy.update()
    })
}
animate()

addEventListener('keydown', (rrrr) => {
    switch (rrrr.key) {
        case 'ArrowLeft':
            current = 'left'
            break
        case 'ArrowRight':
            current = 'right'
            break
        case ' ':
            if (reloaded) {
                spawnEnemies()
                reloaded = false
                reload()
            }
            break
    }
})