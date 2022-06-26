class Tile {
  constructor(x, y, img) {
    this.x = x;
    this.y = y;
    this.tiles = img;
    this.r = 64;
  }

  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }

  clicked(px, py) {
    if (px > this.x && px < this.x + 64 && py > this.y && py < this.y + 64) {
      this.tiles = random(this.img);
    }
  }

  show() {
    stroke(255);
    strokeWeight(4);
    noFill();
    image(this.tiles, this.x, this.y, 64, 64);
  }

  //   bounding() {
  //     ellipseMode(CORNER);
  //     stroke(255);
  //     strokeWeight(1);
  //     noFill();

  //     ellipse(this.x, this.y + 32, 64, 16);
  //   }
}
