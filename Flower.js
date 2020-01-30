//My custom function_FLOWER
function Flower(x,y){
  this.x=x;
  this.y=y;
  this.r = 30;

  this.xdir=1;

  this.show = function(){
    fill('#fff64f');
    strokeWeight(1);
    stroke(0);
    ellipseMode(CENTER);
    ellipse(this.x, this.y, this.r*2, this.r*2);
  }

  this.move = function(){
    this.x = this.x+this.xdir;
    // this.y = this.x+this.ydir;
  }

  this.grow = function(){
    this.r = this.r +2;
  }

  this.shiftDown = function(){
    this.xdir *= -1 // *=는 뭔 의미?
    this.y += this.r;
  }
}
