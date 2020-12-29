var frect
var moverect

var block

function setup() {
  createCanvas(1200, 800);
  frect = createSprite(200,200, 50, 80);
  frect.shapeColor = "MediumSpringGreen";

  moverect = createSprite(400,200, 80, 50);
  moverect.shapeColor = "MediumSpringGreen";

  block = createSprite(400,400, 80, 90)
  block.shapeColor = "black";
}

function draw() {
  background("red");

  moverect.x = World.mouseX;
  moverect.y = World.mouseY;


  if (isTouch(moverect, block)) {
    moverect.shapeColor = "PaleTurquoise";
    block.shapeColor = "PaleTurquoise";
  }
  else {
    moverect.shapeColor = "MediumSpringGreen";
    block.shapeColor = "black";
  }


  drawSprites();
}