var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gm1 = createSprite(100,100,50,50)
  gm1.shapeColor = "yellow";

  gm2 = createSprite(400,100,50,50)
  gm2.shapeColor = "yellow";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (isTouching(movingRect,gm2)) {
    movingRect.shapeColor = "red";
    gm2.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    gm2.shapeColor = "green";
  }
  drawSprites();
}

