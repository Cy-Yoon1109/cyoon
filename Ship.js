//My custom function_SHIP
function Ship(){
  this.x = width/2;
  this.y = height-30
  // this.dir = 1;
  this.xdir = 0;
  this.ydir = 0;

  this.show = function(){
    fill('#00fa15');
    noStroke();
    rectMode(CENTER);
    rect(this.x, this.y, 20, 60);
  }

  this.setDir = function(dir){  //뭐지
    this.xdir = dir;
  }

  this.move = function(dir){
    this.x += this.xdir*5;
  }


  this.setyDir = function(dir){  //뭐지
    this.ydir = dir;
  }

  this.ymove = function(dir){
    this.y += this.ydir*5;
  }
}
