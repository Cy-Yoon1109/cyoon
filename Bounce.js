//My Custom Function_Bounce

function Bounce(){
  this.option = function(){
  fill(random(0,255))
  strokeWeight(3)
  stroke(0);
  ellipseMode(CENTER);
  ellipse(x,y,mouseX)
}
}
