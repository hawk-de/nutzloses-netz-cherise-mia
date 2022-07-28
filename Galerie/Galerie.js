let buildcity;
let cltostart;
let dreitiles;
let empty;
let error;
let flattervogel;
let moretiles;
let ptoprint;
let raster12;
let Startseite;
let story;
let storybaum;
let tiles;
let tilestiles;
let tilestilestiles;
let tschüssi;
let twotiles;

function preload() {
  buildcity = loadImage("buildcity.JPG");
  cltostart = loadImage("cltostart.JPG");
  dreitiles = loadImage("dreitiles.jpeg");
  empty = loadImage("empty.jpeg");
  error = loadImage("error.JPG");
  flattervogel = loadImage("flattervogel.JPG");
  moretiles = loadImage("moretiles.jpeg");
  ptoprint = loadImage("ptoprint.JPG");
  raster12 = loadImage("raster12.jpeg");
  Startseite = loadImage("Startseite.JPG");
  story = loadImage("story.JPG");
  storybaum = loadImage("storybaum.jpeg");
  tiles = loadImage("tiles.jpeg");
  tilestiles = loadImage("tilestiles.jpeg");
  tilestilestiles = loadImage("tilestilestiles.jpeg");
  tschüssi = loadImage("tschüssi.JPG");
  twotiles = loadImage("twotiles.jpeg");
}

function setup() {
  createCanvas(1500, 10000);

  img(buildcity, 0, 0, 1000, 1000);
}
