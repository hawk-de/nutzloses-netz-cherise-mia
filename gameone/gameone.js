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

let ya = 64


background(220);
noFill();


for (let x = -0.5; x < 16; x++) {rect(x*64, -48 , 64, 64)}

        for (let x = 0; x < 16; x++) {rect(x*64,0, 64, 64);}

for (let x = -0.5; x < 16; x++) {rect(x*64, 16 , 64, 64)}

        for (let x = 0; x < 16; x++) {rect(x*64,ya,64, 64);}

for (let x = -0.5; x < 16; x++) {image(random(img),x*64, 16+ya , 64, 64)}
  
        for (let x = 0; x < 16; x++) {image(random(img),x*64, ya*2,64, 64);}

for (let x = -0.5; x < 16; x++) {rect(x*64, 16+ya*2 , 64, 64)}
                
        for (let x = 0; x < 16; x++) {rect(x*64,ya*3,64,64);}
          
for (let x = -0.5; x < 16; x++) {rect(x*64, 16+ya*3 , 64, 64)} 

        for (let x = 0; x < 16; x++) {rect(x*64,ya*4,64,64);}
           
for (let x = -0.5; x < 16; x++) {rect(x*64, 16+ya*4 , 64, 64)}        

        for (let x = 0; x < 16; x++) {rect(x*64,ya*5,64,64);}
                
for (let x = -0.5; x < 16; x++) {rect(x*64, 16+ya*5 , 64, 64)}    
                
        for (let x = 0; x < 16; x++) {rect(x*64,ya*6,64,64);}

for (let x = -0.5; x < 16; x++) {rect(x*64, 16+ya*6 , 64, 64)}               
                
        for (let x = 0; x < 16; x++) {rect(x*64,ya*7,64,64);}
                
for (let x = -0.5; x < 16; x++) {rect(x*64, 16+ya*7 , 64, 64)} 
                
        for (let x = 0; x < 16; x++) {rect(x*64,ya*8,64,64);}
                
for (let x = -0.5; x < 16; x++) {rect(x*64, 16+ya*8 , 64, 64)}       
                
        for (let x = 0; x < 16; x++) {rect(x*64,ya*9,64,64);}
                
for (let x = -0.5; x < 16; x++) {rect(x*64, 16+ya*9 , 64, 64)}   
                
        for (let x = 0; x < 16; x++) {rect(x*64,ya*10,64,64);}
                
for (let x = -0.5; x < 16; x++) {rect(x*64, 16+ya*10 , 64, 64)}   
                
        for (let x = 0; x < 16; x++) {rect(x*64,ya*11,64,64);} 
                
for (let x = -0.5; x < 16; x++) {rect(x*64, 16+ya*11 , 64, 64)}    
                
        for (let x = 0; x < 16; x++) {rect(x*64,ya*12,64,64);}
                
for (let x = -0.5; x < 16; x++) {rect(x*64, 16+ya*12 , 64, 64)}     
                
        for (let x = 0; x < 16; x++) {rect(x*64,ya*13,64,64);}
                
for (let x = -0.5; x < 16; x++) {rect(x*64, 16+ya*13 , 64, 64)}      
                
        for (let x = 0; x < 16; x++) {rect(x*64,ya*14,64,64);}        
                
for (let x = -0.5; x < 16; x++) {rect(x*64, 16+ya*14 , 64, 64)}        
                
        for (let x = 0; x < 16; x++) {rect(x*64,ya*15,64,64);}      

for (let x = -0.5; x < 16; x++) {rect(x*64, 16+ya*15 , 64, 64)}



noLoop();

    // for (let x = -0.5; x < 16; x++) {
    //     for (let y = -0.75; y < 16; y++){
    //     rect(x*64, y*64, 64, 64);
    //     }
    //   }
}