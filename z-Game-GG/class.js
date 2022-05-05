class Enemy {
  constructor(x, y, radius, color, velocity, rotation) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.velocity = velocity;
    this.rotation = rotation;
  }
  draw() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
  }
  update() {
    this.draw();
    this.x = this.x + this.velocity.x;
    this.y = this.y + this.velocity.y;
  }
}

class Shooter {}

class ViewFinder {
  constructor(x, y, radius, color, w, h, draw) {
    this.x = x;
    this.y = y;
    this.image = new Image();
    this.image.src = "ship2.png";
    this.color = color;
    this.r = r;
    this.width = w;
    this.height = h;
    this.dx = this.r * Math.cos(angle);
    this.dy = this.r * Math.sin(angle);
    this.acc = draw;
  }
  draw(context) {
    context.beginPath();
    context.drawImage(
      this.image,
      this.x + this.dx - this.width / 2,
      this.y + this.dy - this.height / 2,
      this.width,
      this.height
    );
    context.fillStyle = this.color;
    context.fill();
  }
  update(context) {
    this.dx = this.r * Math.cos(angle);
    this.dy = this.r * Math.sin(angle);
    if (this.acc) this.draw(context);
  }
}
class Earth {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius + 60;
    this.image = new Image();
    this.image.src = "R.jpg";
    this.radius2 = radius;
    this.color = color;
  }
  draw() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
  }
  update() {
    this.draw();
  }
}

class Planet {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.height = h;
    this.width = w;
    this.image = new Image();
    this.image.src = "earth.png";
  }
  draw() {
    c.drawImage(
      this.image,
      this.x - this.width / 2,
      this.y - this.height / 2,
      this.width,
      this.height
    );
  }
}

class Target {
  constructor(radius, angle, color) {
    this.radius = radius;
    this.angle = angle;
    this.color = color;
    this.distance = 92;
    this.x = Math.cos(angle) * this.distance;
    this.y = Math.sin(angle) * this.distance;
    this.x += canvas.width / 2;
    this.y += canvas.height / 2;
  }
  draw(context) {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    context.fillStyle = this.color;
    context.fill();
  }
}
