class Enemy {
    constructor(x, y, radius, color, velocity, rotation) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.velocity = velocity
        this.rotation = rotation
    }
    draw() {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        c.fillStyle = this.color
        c.fill()
    }
    update() {
        this.draw()
        this.x = this.x + this.velocity.x
        this.y = this.y + this.velocity.y
    }
}

class ViewFinder {
    constructor(x, y, radius, color, w, h) {
        this.x = x;
        this.y = y;
        this.radius = radius + 30;
        this.image = new Image()
        this.image.src = 'ship2.png'
        this.radius2 = radius;
        this.color = color
        this.r = r;
        this.angle = angle;
        this.width = w
        this.height = h
        this.dx = this.r * Math.cos(this.angle);
        this.dy = this.r * Math.sin(this.angle);

    }
    draw() {
        //point 1
        //point 2
        c.beginPath();
        c.drawImage(this.image, (this.x + this.dx) - (this.width / 2), (this.y + this.dy) - (this.height / 2), this.width, this.height);
        c.fillStyle = this.color;
        c.fill();
    }
    update() {
        this.draw();
    }

}
class Earth {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius + 30;
        this.image = new Image()
        this.image.src = 'R.jpg'
        this.radius2 = radius;

    }
    draw() {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        c.fillStyle = this.color;
        c.fill();
    }
    update() {
        this.draw();
    }

}