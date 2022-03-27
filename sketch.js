let ground;
let lander;
var lander_img;
var bg_img;
var meteor;
var meteor_img;
var Meteors;
var PLAY=1;
var END=0;
var gameState=1;


var vx = 0;
var g = 0.05;
var vy = 0;

function preload()
{
  lander_img = loadImage("normal.png");
  bg_img = loadImage("bg.png");
  meteor_img = loadImage("meteor.png");
}

function setup() {
  createCanvas(1000,700);
  frameRate(80);

  lander = createSprite(100,50,30,30);
  lander.addImage(lander_img);
  lander.scale = 0.1;

  Meteors = new Group;
  
score = 0

  rectMode(CENTER);
  textSize(15);
}

function draw(){
background(bg_img);

createEdgeSprites();
 
if(gameState===PLAY){


if (keyDown("UP_ARROW")) {
    
  lander.velocityX= 0;
  lander.velocityY= -4;
  
  }
  
  if (keyDown("DOWN_ARROW")) {
    
    lander.velocityX= 0;
    lander.velocityY= 4;
    
  }

  if(Meteors.isTouching(lander)){
    Meteors.destroyEach();
    score = score + 10;
  }

  if(score = 50){
     gameState = END;
  }

  Meteors.destroyEach();

  lander.x = 0;
  lander.y = 0;

  drawSprites();
}
}

function meteor(){
  var meteor = createSprite(0,Math.round(random(20,370)),100,100);
  meteor.addImage = (meteor_img);
  meteor.velocityX = 3;
  meteor.scale = 0.3;
}
  



