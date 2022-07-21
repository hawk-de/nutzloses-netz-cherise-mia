class Walls {
  constructor(width, frequency, gap) {
    this.width = width;
    this.frequency = frequency;
    this.gap = gap;

    this.walls_list = [
      {
        x: 500,
        height: getRndInteger(this.gap, height - GROUND_height - this.gap),
        countd: false,
      },
      {
        x: 500 + this.width + this.frequency,
        height: getRndInteger(this.gap, height - GROUND_height - this.gap),
        countd: false,
      },
    ];
  }

  update() {
    for (let wall of this.walls_list) {
      wall.x -= SCROLL_SPEED;
      if (wall.x + this.width <= 0) {
        wall.x = width;
        wall.height = getRndInteger(
          this.gap,
          height - GROUND_height - this.gap - this.gap
        );
        wall.countd = false;
      }
    }
  }

  drawwalls() {
    fill("darkred");
    for (let wall of this.walls_list) {
      rect(wall.x, 0, this.width, wall.height);
      rect(
        wall.x,
        height - GROUND_height,
        this.width,
        -height + wall.height + GROUND_height + this.gap
      );
    }
  }
}
