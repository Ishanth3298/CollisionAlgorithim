var frect
var moverect

function setup() {
  createCanvas(1200, 800);
  frect = createSprite(200,200, 50, 80);
  frect.shapeColor = "MediumSpringGreen";

  moverect = createSprite(400,200, 80, 50);
  moverect.shapeColor = "MediumSpringGreen";
}

function draw() {
  background("red");

  moverect.x = World.mouseX;
  moverect.y = World.mouseY;

  if (moverect.x-frect.x < frect.width/2 + moverect.width/2 &&
    frect.x-moverect.x < frect.width/2 + moverect.width/2 && 
    moverect.y-frect.y < frect.height/2 + moverect.height/2 &&
    frect.y-moverect.y < frect.height/2 + moverect.height/2) {
    moverect.shapeColor = "PaleTurquoise";
    frect.shapeColor = "PaleTurquoise";
  }

  else {
    moverect.shapeColor = "MediumSpringGreen";
    frect.shapeColor = "MediumSpringGreen";
  }

  drawSprites();
}