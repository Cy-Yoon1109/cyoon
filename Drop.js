//My custom function_DROP
function Drop(x,y){
  this.x=ship.x;
  this.y=ship.y-70;
  this.r=8;
  this.toDelete = false;



  this.show = function(){
    fill(random(0,255));
    strokeWeight(1);
    stroke(0);
    ellipseMode(CENTER);
    ellipse(this.x, this.y, this.r*2, this.r*2);
  }

  this.hits = function(flower){
    var d = dist(this.x, this.y, flower.x, flower.y);
    if(d < this.r + flower.r){
      return true;
    }else{
      return false;
    }
  }

  this.move = function(flower){
    this.y = this.y-5;
  }

  this.evaporate = function(){
      this.toDelete = true;
  }
}
