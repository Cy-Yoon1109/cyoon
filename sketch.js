//01302020_Assignment_Cyyoon

//var
var ship;
var flowers = [];
var drops = []; //왜 =[]를 붙이지?
var value =0;
var value2 =0;
var value3 =0;

function setup(){
  createCanvas(windowWidth,windowHeight);
  ship = new Ship();
  for (var i = 0; i < 6; i++) {
    flowers[i] = new Flower(i*160+160,20); // [i] 는 왜 붙는거?
  }
  // drop = new Drop(width/2, height/2); // 왜 이건 안쓰지?
}

function draw(){

  background(value,value2,value3);

  //Ship call up
  ship.show();
  ship.move();
  ship.ymove();


  //Flower call up

  var right = false;

  for (var i = 0; i < flowers.length; i++) {  //lenth가 어디?
    flowers[i].show(); //[i] 가 왜붙지?
    flowers[i].move();

    if (flowers[i].x > width || flowers[i].x < 0){
      right = true;
    }
  }

  if (right) {
    for (var i = 0; i < flowers.length; i++) {  //lenth가 어디?
      flowers[i].shiftDown(); //[i] 가 왜붙지?
  }
}

  //Drop Call up
  for (var i = 0; i < drops.length; i++) {  //lenth가 어디?
    drops[i].show(); //[i] 가 왜붙지?
    drops[i].move();

    for (var j = 0; j < flowers.length; j++) {
      if (drops[i].hits(flowers[j])) {
          flowers[j].grow();
          drops[i].evaporate();
      }
    }
  }

  for (var i = drops.length-1; i >= 0; i--) {
    if(drops[i].toDelete){
      drops.splice(i,1); // 왜 원이 무한 커짐하지 않게 하지?
    }
  }
}


//Key Function
function keyReleased(){
  if (key !=' ') {
      ship.setDir(0);
  }
}

function keyPressed(){
  if (key === ' ') {
    var drop = new Drop(ship.x, height/1.1);
    drops.push(drop); //push는 왜 붙지?
  }

  if(keyCode === RIGHT_ARROW){
    ship.setDir(1);
  }else if(keyCode === LEFT_ARROW){
    ship.setDir(-1);
  }
  if(keyCode === UP_ARROW){
    ship.setyDir(-1);
  }else if(keyCode === DOWN_ARROW){
    ship.setyDir(1);
  }
}

function mousePressed() {
  if (value === 0) {
    value = random(0,255);
    value2 = random(0,255);
    value3 = map(mouseX,0,width,0,255)


  } else {
    value = 0;
  }
}
