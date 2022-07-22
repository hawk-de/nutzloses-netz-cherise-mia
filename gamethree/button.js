class Button {
  constructor(words, offsetX, offsetY,c1,c2,c3){
    this.words = words
    this.offsetX = offsetX
    this.offsetY = offsetY
    this.x = this.offsetX
      this.y= this.offsetY
    
    this.c1= c1
    this.c2=c2
    this.c3=c3
  }


setPosition(x,y) {
  this.x=x
  this.y=y


}

display(){
fill(this.c1, this.c2, this.c3)
stroke('red');
strokeWeight(4);
rect(mouseX-this.x, mouseY-this.y, 255, 40);

  
fill('red');
noStroke();
textAlign(CENTER);
textSize(22)
textFont('Georgia')
text(this.words, mouseX-this.x, mouseY-this.y+10, 255, 55);

  }
}
