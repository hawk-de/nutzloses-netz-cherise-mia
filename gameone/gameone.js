let tiles = [];
let bubbles =[];

function preload () {

    for (let i = 1; i < 16; i++) {
tiles[i]= loadImage ("tiles/tile"+i+".png")
    }
}

function setup() {

    createCanvas(1000,1000);

    for (let i = 0; i< 10; i++) {
        let x = random(width);
        let y = random(height);
        let r = random(20,60);
        let tile = random(tiles);
        let b = new Bubble(x,y,r,pic);
        bubbles.push(b);
    }
}

function mousePressed() {

for (let i = 0; i< bubbles.length; i++) {
bubbles[i].cllicked(mouseX,mouseY);
}
}

function draw() {

    background(0);
    for(let i = 0; i < bubbles.length;i++) {
        bubbles[i].move();
        bubbles[i].show();
    }
}

class Bubble {

    constructor(x,y,r,img) {
            this.x =x;
            this.y =y;
            this.r =r;

            this.tile = img;
    }

clicked(px,py) {

    let d = dist(px,py, this.x,this,y);
    if(d<this.r) {
        this.tile = random(tiles)
   
    }
}

move() {
this.x = this.x + random(-2,2);
this.y = this.y + random(-2,2);
}

show() {
image(this.tile, this.x, this.y,this.r,this.r)


}
}



