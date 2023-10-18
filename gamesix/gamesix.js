const grav = 9.81;
const JUMP_height = 9.0;
const ground_height = 20;

const width = 400;
const height = 600;

let SCROLL_SPEED = 4;
let count = 0;

let img;
let player;
let bricks;
let grass;

function preload() {
  img = loadImage("pixelskynew.png");
  player = loadImage("birdplayer2.png");
  bricks = loadImage("brikpik.jpg");
}

function setup() {
  createCanvas(width, height);
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

let bird = new Bird(width / 2, height / 2,30);
let walls = new Walls(60, 150, 150);

function draw() {
  background(img);

  noStroke();
  fill("green");
  rect(0, height - ground_height, width, height);

  bird.draw();
  bird.update();
  bird.checkDeath(walls);

  walls.update();
  walls.drawwalls();

  fill(255);
  textSize(60);
  textAlign(CENTER);
  text(count, width * 0.1, height * 0.1);
}

function keyPressed() {
  if (keyCode == 32) {
    bird.flap();
  }
}

function mouseClicked() {
  bird.flap();
}
