function setup() {
  let w = width;
  let h = height;

  createCanvas(windowWidth, windowHeight);
  background(0);

  rectMode(CORNER);

  for (let i = 0; i <= 10; i++) {
    for (let j = 0; j <= 10; j++) {
      fill(random(255));
      noStroke();
      rect(w * i, h * j, w * i, h * j);
    }
  }

  fill(255);
}

function draw() {}
