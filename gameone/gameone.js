let img;

function preload () {

img =  loadImage("tiles/tile1.png");
}

function setup() {

    createCanvas(1000,1000);
}

function draw() {

    background(220);
    image(img,0,0)

}




