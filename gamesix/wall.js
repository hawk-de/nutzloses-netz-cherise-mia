class Walls {
  constructor(width, frequency, gap) {
    this.width = width;
    this.frequency = frequency;
    this.gap = gap;

    this.walls_list = [
      {
        x: 500,
        height: getRndInteger(this.gap, height - ground_height - this.gap),
        countd: false,
      },
      {
        x: 500 + this.width + this.frequency,
        height: getRndInteger(this.gap, height - ground_height - this.gap),
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
          height - ground_height - this.gap - this.gap
        );
        wall.countd = false;
      }
    }
  }

  drawwalls() {
  
    for (let wall of this.walls_list) {
      image(bricks, wall.x, 0, this.width, wall.height);
      image(
        bricks,
        wall.x,
        height - ground_height,
        this.width,
        -height + wall.height + ground_height + this.gap
      );
    }
  }
}
