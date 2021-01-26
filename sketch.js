var moving_rect,fixed_rect;


function setup() {
  createCanvas(800,400);
  moving_rect = createSprite(400, 200, 80,30);
  moving_rect.shapeColor = "yellow";
  
  fixed_rect = createSprite(200,200,50,80);
  fixed_rect.shapeColor = "yellow";
}

function draw() {
  background(255,255,255);  
  moving_rect.x = mouseX;
  moving_rect.y = mouseY;
  console.log(moving_rect.x-fixed_rect.x);

  if(moving_rect.x - fixed_rect.x < moving_rect.width/2 + fixed_rect.width/2
    && fixed_rect.x - moving_rect.x < fixed_rect.width/2 + moving_rect.width/2 
    && moving_rect.y - fixed_rect.y < moving_rect.height/2 + fixed_rect.height/2
    && fixed_rect.y - moving_rect.y < fixed_rect.height/2 + moving_rect.height/2) {
    moving_rect.shapeColor = "blue";
    fixed_rect.shapeColor = "blue";
  } else {
    moving_rect.shapeColor = "yellow";
    fixed_rect.shapeColor = "yellow";
  }

  drawSprites();

}