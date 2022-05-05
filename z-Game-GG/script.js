const canvas = document.getElementById("canvas");
const canvas2 = document.getElementById("canvas2");
const c = canvas.getContext("2d");
const c2 = canvas2.getContext("2d");

canvas.width = 600;
canvas.height = 600;
canvas2.width = 600;
canvas2.height = 600;
let angle = 0;
var current = "none";
var enemies = [];
var reloaded = "true";
const r = 200;
const speed = Math.PI / 150;
const scoreBoard = document.querySelector("#scoreBoard");
var score = 30;

var targets = new Array();

/* -------------------------------------------------------------------------- */
/*                                   Animate                                  */
/* -------------------------------------------------------------------------- */

let animationId;
const player2 = new ViewFinder(0, 0, 30, "white", 50, 66, true);

function reload() {
  setTimeout(() => {
    reloaded = true;
  }, 150);
}

const planet = new Planet(300, 300, 200, 200);

const player = new ViewFinder(
  canvas.width / 2,
  canvas.height / 2,
  30,
  "white",
  0,
  0,
  false
);

function shoot() {
  let x = player.x + player.dx / 1.19;
  let y = player.y + player.dy / 1.19;
  let color = "magenta";
  const angle = Math.atan2(canvas.height / 2 - y, canvas.width / 2 - x);
  const velocity = {
    x: Math.cos(angle) * 10,
    y: Math.sin(angle) * 10,
  };
  enemies.push(new Enemy(x, y, 5, color, velocity));
}

c2.translate(300, 300);

const earth = new Earth(
  canvas.width / 2,
  canvas.height / 2,
  30,
  "rgb(71, 178, 255)",
  50,
  50
);

function animate() {
  animationId = requestAnimationFrame(animate);
  c.fillStyle = "rgba(50, 50, 50, 0.5)";
  c2.fillStyle = "rgba(0, 0, 0, 0.5)";

  c.fillRect(0, 0, canvas.width, canvas.height);
  c2.clearRect(-300, -300, canvas.width, canvas.height);
  // calculate velocity
  if (current === "left") {
    angle -= speed;
    c2.rotate(-speed);
  }
  if (current === "right") {
    c2.rotate(speed);
    angle += speed;
  }

  player.update(c);
  player2.draw(c2);

  //   c2.rotate(Math.PI / 3);

  enemies.forEach((enemy) => {
    enemy.update();
  });
  targets.forEach((target) => {
    target.draw(c);
  });
  earth.draw();
  planet.draw();
  checkDeath();
  if (score < 10) {
    reset();
  }
}
animate();
spawnEnemies();

addEventListener("keydown", (rrrr) => {
  switch (rrrr.key) {
    case "ArrowLeft":
      current = "left";
      break;
    case "ArrowRight":
      current = "right";
      break;
    case " ":
      if (reloaded) {
        shoot();
        reloaded = false;
        reload();
      }
      break;
  }
});
addEventListener("keyup", (rrrr) => {
  switch (rrrr.key) {
    case "ArrowLeft":
      current = "none";
      break;
    case "ArrowRight":
      current = "none";
      break;
  }
});
