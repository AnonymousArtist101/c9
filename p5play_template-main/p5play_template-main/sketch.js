
var box;

function setup() {
  createCanvas(400,400);

box = createSprite(200, 200, 15, 15);

}

function draw() 
{
  background(30);

  if (keyDown("UP_ARROW")) {
    box.x = box.x + 5;
  }

  if (keyDown("DOWN_ARROW")) {
    box.x = box.x - 5;
  }

  if (keyDown("LEFT_ARROW")) {
    box.x = box.x + 5;
  }

  if (keyDown("RIGHT_ARROW")) {
    box.x = box.x - 5;
  }

  drawSprites();
}




