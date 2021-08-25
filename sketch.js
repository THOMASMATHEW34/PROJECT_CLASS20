var bg,bgImg;
var sleep,sleepImg;
var brush,brushImg;
var gym,gymImg;
var eat,eatImg;
var drink,drinkImg
var move,moveImg;
var astronaut;
var bath,bathImg;
var edges=createEdgeSprites();

function preload() {
  bgImg = loadImage("iss.png");
  sleepImg = loadAnimation("sleep.png");
  brushImg = loadAnimation("brush.png")
  gymImg = loadAnimation("gym1.png","gym2.png");
  eatImg = loadAnimation("eat1.png","eat2.png");
  drinkImg = loadAnimation("drink1.png","drink2.png");
  moveImg = loadAnimation("move.png","move.png","move1.png","move1.png");
  bathImg = loadAnimation("bath1.png","bath2.png");
 
}

function setup() {
  createCanvas(1200,700);
  createSprite(400, 200, 50, 50);
  bg = createSprite(500,300);
  bg.addImage(bgImg);
  bg.scale = 0.2;

  astronaut = createSprite(520,400);
  astronaut.addAnimation("sleeping",sleepImg);
  astronaut.scale=0.1

  
}

function draw() {
  background(255,255,255);  
  text("INSTRUCTIONS",150,200);
  text("UP_ARROW-BRUSHING",150,220);
  text("DOWN_ARROW-GYMMING",150,240);
  text("LEFT_ARROW-EATING",150,250);
  text("RIGHT_ARROW-BATHING",150,260);
  text("M-MOVING",150,250);
  
  edges = createEdgeSprites();
  astronaut.bounceOff(edges[0]);
  astronaut.bounceOff(edges[1]);
  astronaut.bounceOff(edges[2]);
  astronaut.bounceOff(edges[3]);


  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing",brushImg);
    astronaut.changeAnimation("brushing");
    astronaut.y = 400;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming",gymImg);
    astronaut.changeAnimation("gymming");
    astronaut.y = 400;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating",eatImg);
    astronaut.changeAnimation("eating");
    astronaut.y = 400;
    astronaut.velocityX =1;
    astronaut.velocityY =-1;
   
  }
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing",bathImg);
    astronaut.changeAnimation("bathing")
    astronaut.y = 400;   
  }

  if(keyDown("M")){
    astronaut.addAnimation("moving",moveImg);
    astronaut.changeAnimation("moving")
    astronaut.y = 400;
    astronaut.velocityX =1;
    astronaut.velocityY =-1;
    
  }
  
  drawSprites();
}