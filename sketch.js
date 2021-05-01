var hr,min,sec;
var secAngle;
var hour 
function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
//hr = hour();
//min = minute();

//hour = createSprite(400,200,100,10)
angleMode(DEGREES)
}

function draw() {
  background("white"); 
  fill("darkblue") 
  textSize(30)
  text ("12", 190, 80)

  textSize(30)
  fill("darkblue")
  text ("3", 320, 205)

  textSize(30)
  fill("darkblue")
  text ("6", 200, 345)

  textSize(30)
  fill("darkblue")
  text ("9", 90, 205)
  textSize(30)
  fill("darkblue")
  text ("6", 200, 345)
  translate(200,200)
  rotate(-90)
  drawSprites();
  sec = second();
  secAngle = map(sec, 0, 60, 0, 360);
  
push()
  rotate(secAngle);
  stroke("lightblue");
  strokeWeight(7);
  line(0,0, 50, 0);
pop();
stroke("lightblue")
strokeWeight(8)
noFill()
arc(0, 0, 175, 175, 0, secAngle)

hr = hour()
hrAngle = map(hr%12, 0, 12, 0, 360);
push()
 rotate(hrAngle)
 stroke("darkblue")
 strokeWeight(7)
 line(0, 0, 75, 0)
 pop();
 stroke("darkblue")
 strokeWeight(8)
 noFill()
 arc(0, 0, 225, 225, 0, hrAngle)
 min = minute()
 minAngle = map(min, 0, 60, 0, 360)
 push()
 rotate(minAngle)
 stroke("blue")
 strokeWeight(7)
 line(0, 0, 65, 0)
 pop()
 stroke("blue")
 strokeWeight(8)
 noFill()
 arc(0, 0, 200, 200, 0, minAngle)
}
