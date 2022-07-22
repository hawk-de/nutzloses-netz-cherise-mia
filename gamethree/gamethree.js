/// <reference path="./node_modules/@types/p5/lib/addons/p5.sound.d.ts" />
/// <reference path="./node_modules/@types/p5/global.d.ts" />
/// <reference path="./node_modules/@types/p5/literals.d.ts" />
/// <reference path="./node_modules/@types/p5/constants.d.ts" />

let counter =0
let buttons =[]
let startbutton
let malware
let texts = ['CLICK HERE','YOU LOSE','YOU FAILED','TRY AGAIN', 'ERROR 404', 'BAD REQUEST', 'WAS????']
let a=0

function setup(){
  frameRate(30)
createCanvas(1000,1000)
  startbutton = new Button ('CLICK HERE TO START', 95, 100,255,242,0)
  malware = new Button ('//pr3s$ >P< t0 pR1nT;',400, 100,0,242,255)
  for(let i=0;i<50;i++){
    let offsetX = random(-width/2,width/2)
    let offsetY= random(-width/2,width/2)
  let button = new Button(texts[int(random(texts.length))], offsetX,offsetY,random(255),random(255),random(255))
buttons.push(button)
  }
}
function mousePressed() {
  counter=counter+1


 

  if (counter===6){
  saveCanvas("TryAgain.png")
  counter=0
  }
}
function draw(){
//background(255)
rectMode(CORNER)

  if (counter<5){
   if(counter%2) {

    background("cyan")
    
  }else{ 
    background("magenta")
       }
  startbutton.display()

  }
else if (counter>=5){
  
  for(let button of buttons){

    let x = cos(a)*button.offsetX
    let y = tan(a)*button.offsetY
  button.setPosition(x,y)
button.display()

    console.log(frameCount)
  
  } 
malware.setPosition(50,100)
    malware.display()
}
  if(counter===2){
malware.setPosition(400,100)
    malware.display()

    
  
  
    }
  if(key==='P'){
    print()
  }
  text(a,150,50)
  a=a+0.01

}
