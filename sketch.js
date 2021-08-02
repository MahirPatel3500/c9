var box;


function setup() {
  createCanvas(400,400);
  box=createSprite(200,200,20,20);
}

function draw() 
{
  
  if(keyDown(LEFT_ARROW)){
    background("blue");
  }
  if(keyDown(RIGHT_ARROW)){
    background("red");
  }
  if(keyDown(UP_ARROW)){
    background("yellow");
  }
  if(keyDown(DOWN_ARROW)){
    background("green")
  }
drawSprites();
}




