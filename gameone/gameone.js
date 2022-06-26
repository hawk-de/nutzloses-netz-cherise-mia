img = []


function preload() {

for ( let i = 0; i < 16; i++) {
img[i] =loadImage(`tiles/tile${i}.png`)
}

}

function setup() {
    createCanvas(1024, 1024);
    
  }
  
  function draw() {

let ya = 16

background(220);
noFill();
noStroke();


for (let x = -0.5; x < 16; x++) {image(random(img),x*64, -48 , 64, 64)}

    for (let x = 0; x < 16; x++) {image(random(img),x*64,-32, 64, 64)}

for (let x = -0.5; x < 16; x++) {image(random(img),x*64, -16 , 64, 64)}

    for (let x = 0; x < 16; x++) {image(random(img),x*64,0, 64, 64)}

for (let x = -0.5; x < 16; x++) {image(random(img),x*64, ya , 64, 64)}

    for (let x = 0; x < 16; x++) {image(random(img),x*64,ya*2, 64, 64)}

for (let x = -0.5; x < 16; x++) {image(random(img),x*64, ya*3 , 64, 64)}

    for (let x = 0; x < 16; x++) {image(random(img),x*64,ya*4, 64, 64);}

for (let x = -0.5; x < 16; x++) {image(random(img),x*64, ya*5 , 64, 64)}

    for (let x = 0; x < 16; x++) {image(random(img),x*64,ya*6, 64, 64)}

for (let x = -0.5; x < 16; x++) {image(random(img),x*64, ya*7 , 64, 64)}

    for (let x = 0; x < 16; x++) {image(random(img),x*64,ya*8, 64, 64)}

for (let x = -0.5; x < 16; x++) {image(random(img),x*64, ya*9 , 64, 64)}

    for (let x = 0; x < 16; x++) {image(random(img),x*64,ya*10, 64, 64)}

for (let x = -0.5; x < 16; x++) {image(random(img),x*64, ya*11 , 64, 64)}

    for (let x = 0; x < 16; x++) {image(random(img),x*64,ya*12, 64, 64)}

for (let x = -0.5; x < 16; x++) {image(random(img),x*64, ya*13 , 64, 64)}

    for (let x = 0; x < 16; x++) {image(random(img),x*64,ya*14, 64, 64)}

for (let x = -0.5; x < 16; x++) {image(random(img),x*64, ya*15 , 64, 64)}

    for (let x = 0; x < 16; x++) {image(random(img),x*64,ya*16, 64, 64)}

for (let x = -0.5; x < 16; x++) {image(random(img),x*64, ya*17 , 64, 64)}

    for (let x = 0; x < 16; x++) {image(random(img),x*64,ya*18, 64, 64);}

for (let x = -0.5; x < 16; x++) {image(random(img),x*64, ya*19 , 64, 64)}

    for (let x = 0; x < 16; x++) {image(random(img),x*64,ya*20, 64, 64);}

for (let x = -0.5; x < 16; x++) {image(random(img),x*64, ya*21 , 64, 64)}

    for (let x = 0; x < 16; x++) {image(random(img),x*64,ya*22, 64, 64)}

for (let x = -0.5; x < 16; x++) {image(random(img),x*64, ya*23 , 64, 64)}

    for (let x = 0; x < 16; x++) {image(random(img),x*64,ya*24, 64, 64)}

for (let x = -0.5; x < 16; x++) {image(random(img),x*64, ya*25 , 64, 64)}

    for (let x = 0; x < 16; x++) {image(random(img),x*64,ya*26, 64, 64)}

for (let x = -0.5; x < 16; x++) {image(random(img),x*64, ya*27 , 64, 64)}

    for (let x = 0; x < 16; x++) {image(random(img),x*64,ya*28, 64, 64);}

for (let x = -0.5; x < 16; x++) {image(random(img),x*64, ya*29 , 64, 64)}

    for (let x = 0; x < 16; x++) {image(random(img),x*64,ya*30, 64, 64)}

for (let x = -0.5; x < 16; x++) {image(random(img),x*64, ya*31 , 64, 64)}

    for (let x = 0; x < 16; x++) {image(random(img),x*64,ya*32, 64, 64)}

for (let x = -0.5; x < 16; x++) {image(random(img),x*64, ya*33 , 64, 64)}

    for (let x = 0; x < 16; x++) {image(random(img),x*64,ya*34, 64, 64)}

for (let x = -0.5; x < 16; x++) {image(random(img),x*64, ya*35 , 64, 64)}

    for (let x = 0; x < 16; x++) {image(random(img),x*64,ya*36, 64, 64)}

for (let x = -0.5; x < 16; x++) {image(random(img),x*64, ya*37 , 64, 64)}

    for (let x = 0; x < 16; x++) {image(random(img),x*64,ya*38, 64, 64);}

for (let x = -0.5; x < 16; x++) {image(random(img),x*64, ya*39 , 64, 64)}

    for (let x = 0; x < 16; x++) {image(random(img),x*64,ya*40, 64, 64)}

for (let x = -0.5; x < 16; x++) {image(random(img),x*64, ya*41 , 64, 64)}

    for (let x = 0; x < 16; x++) {image(random(img),x*64,ya*42, 64, 64)}

for (let x = -0.5; x < 16; x++) {image(random(img),x*64, ya*43 , 64, 64)}

    for (let x = 0; x < 16; x++) {image(random(img),x*64,ya*44, 64, 64)}

for (let x = -0.5; x < 16; x++) {image(random(img),x*64, ya*45 , 64, 64)}

    for (let x = 0; x < 16; x++) {image(random(img),x*64,ya*46, 64, 64)}

for (let x = -0.5; x < 16; x++) {image(random(img),x*64, ya*47 , 64, 64)}

    for (let x = 0; x < 16; x++) {image(random(img),x*64,ya*48, 64, 64);}

for (let x = -0.5; x < 16; x++) {image(random(img),x*64, ya*49 , 64, 64)}

    for (let x = 0; x < 16; x++) {image(random(img),x*64,ya*50, 64, 64)}

for (let x = -0.5; x < 16; x++) {image(random(img),x*64, ya*51 , 64, 64)}

    for (let x = 0; x < 16; x++) {image(random(img),x*64,ya*52, 64, 64)}

for (let x = -0.5; x < 16; x++) {image(random(img),x*64, ya*53 , 64, 64)}

    for (let x = 0; x < 16; x++) {image(random(img),x*64,ya*54, 64, 64)}

for (let x = -0.5; x < 16; x++) {image(random(img),x*64, ya*55 , 64, 64)}

    for (let x = 0; x < 16; x++) {image(random(img),x*64,ya*56, 64, 64)}

for (let x = -0.5; x < 16; x++) {image(random(img),x*64, ya*57 , 64, 64)}

    for (let x = 0; x < 16; x++) {image(random(img),x*64,ya*58, 64, 64);}

for (let x = -0.5; x < 16; x++) {image(random(img),x*64, ya*59 , 64, 64)}

    for (let x = 0; x < 16; x++) {image(random(img),x*64,ya*60, 64, 64)}

for (let x = -0.5; x < 16; x++) {image(random(img),x*64, ya*61 , 64, 64)}


stroke(255);

for (let x = 0; x<1024; x++){
        for (y =0; y<1024; y++) {

        } 
}





noLoop();

}