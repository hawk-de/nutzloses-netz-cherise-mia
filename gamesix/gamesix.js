const grav = 9.81;
const JUMP_height = 9.0;
const GROUND_height = 20;

const width = 400;
const height = 600;

let SCROLL_SPEED = 4;
let count = 0;
let bg;

function setup() {
  bg = loadImage("gamesix/pixelskynew.png");
  createCanvas(width, height);
}

function getRndInteger(min, max) {
  // https://www.w3schools.com/js/js_random.asp
  return Math.floor(Math.random() * (max - min)) + min;
}

let bird = new Bird(width / 2, height / 2, 30);
let walls = new Walls(60, 150, 130);

function draw() {
  background(bg);
  fill("darkgreen");
  rect(0, height - GROUND_height, width, height);

  bird.draw();
  bird.update();
  bird.checkDeath(walls);

  walls.update();
  walls.drawwalls();

  fill(255);
  textSize(60);
  textAlign(CENTER);
  text(count, width / 2, height - height / 7);
}

function keyPressed() {
  if (keyCode == 32) {
    bird.flap();
  }
}

function mouseClicked() {
  bird.flap();
}
