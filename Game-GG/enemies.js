// 5,4 UPDATE!!


function spawnEnemies() {
    targets = []
    let angle = Math.random() * 360
    let color = 'yellow'
    let radius = 15
    targets.push(new Target(radius, angle, color))
}

function checkDeath() {
    targets.forEach((target, projectileIndex) => {
        enemies.forEach((enemy, index) => {
            let dist = Math.hypot(target.x - enemy.x, target.y - enemy.y)
            if (dist - enemy.radius - target.radius < 1) {
                setTimeout(() => {
                    enemies.splice(index, 1)
                    targets.splice(projectileIndex, 1)
                    spawnEnemies()
                    score += 69
                    scoreBoard.innerHTML = 'score: ' + score
                }, 0)
            }

            let dist2 = Math.hypot(earth.x - enemy.x, earth.y - enemy.y)
            if (dist2 - enemy.radius - earth.radius < 1) {
                setTimeout(() => {
                    enemies.splice(index, 1)
                }, 0)
            }
        })


    })


}