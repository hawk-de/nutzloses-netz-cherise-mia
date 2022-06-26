class Tile {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }

  show() {
    stroke(255);
    strokeWeight(4);
    noFill();
    image(random(img), this.x, this.y, 64, 64);
  }
}
