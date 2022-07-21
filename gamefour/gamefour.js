let x = 0;
let speed = 3;
let holepos = 50;

let circleY = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(4);
  noFill();

  rect(x, 50, 60, 60);

  if (x > width || x < 0) {
    speed = speed * -1;
  }
  x = x + speed;

  rect(holepos, height - 100, 60, 60);

  circle(holepos, circleY, 25);

  circleY++;

  if (circleY > height - 100) {
    circleY = 0;
  }
}
