class Bird {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.vely = 0;
  }

  draw() {
    fill("yellow");
    image(player,this.x, this.y, this.size);
  }

  update() {
    this.y += this.vely;
    this.vely = lerp(this.vely, grav, 0.05);
    this.y = Math.max(
      this.size / 2,
      Math.min(this.y, height - ground_height - this.size / 2)
    );
  }

  flap() {
    this.vely = -JUMP_height;
  }

  checkDeath(walls) {
    for (let wall of walls.walls_list) {
      if (
        this.x + this.size / 2 > wall.x &&
        wall.height &&
        this.x - this.size / 2 < wall.x + walls.width
      ) {
        if (
          this.y - this.size / 2 <= wall.height ||
          this.y + this.size / 2 >= wall.height + walls.gap
        ) {
          window.location.reload();
        }
      }
      if (
        this.x - this.size / 2 > wall.x + walls.width &&
        wall.countd == false
      ) {
        count += 1;
        wall.countd = true;
      }
    }
  }
}
