// plz read till the end
var car,wall,road;
var speed,weight;
var car_anime,rd,rb_anime,wall_anime;
var reset,reset_anime;
var hint,enter_anime,altoS;
var deformation;
var resultBoard;
var START = 1;
var PLAY = 3;
var END = 2;
var gameStage = START;

function preload(){
  car_anime= loadImage("alto.png")
rd= loadImage("road.jpg")
rb_anime= loadImage("result.png");
wall_anime = loadImage("wall.jpg");
reset_anime = loadImage("reset.jpg");
enter_anime = loadImage("enter.jpg");
altoS = loadImage("altoS.png");
}

function setup(){
  createCanvas(1500,400);
  car = createSprite(100,210,100,100);
  road = createSprite(600,200);
  road.addImage(rd)
  // car.debug=  true;
  road.scale = 5;
  
  car.scale= 0.5;
  // car.setCollider("rectangle",-330,0,400,180)
  car.addImage(car_anime);
  wall = createSprite(1530,200,40,height/2);
  wall.addImage(wall_anime);
  wall.debug = true;
  hint = createSprite(1040,40,50,50);
  hint.scale = 0.8;
  hint.addImage(enter_anime);
  speed = random(45,100);
  weight = random(400,1500);
 
}

function draw(){
  background(0)
  

  car.depth = wall.depth+2;
  if(keyDown("SPACE")){
    car.velocityX = speed;
    gameStage = PLAY;
  }
  camera.x = car.x-20;
  camera.width =  200;
  if(wall.x-car.x<(car.width+wall.width/1.1)){
   car.velocityX  = 0;
    deformation = 0.5*weight*speed*speed/22509;
   
    background("red")
 console.log(camera.x);
 if(keyDown("ENTER"))   {
  score();
gameStage = END;
 }
  }
  drawSprites();

  if(gameStage === START){
  textSize(40);
fill("white")
   text("Press `SPACE` to run",-60,350);
}

if(gameStage === END){
  textSize(30);
fill("black")

//the units are not rounded off so that the user can get the exact data
   text("Speed: "+ speed+" kmph",650,220);
   text("Deformation: "+ deformation+" radian",650,316);
   text("Weight: "+ weight+" Kgs",650,268);
   text("CAR Condition",1185,190);
   if(deformation<100){
   fill("green")
   rect(1250,210,80,80);
   textSize(35);
      fill("white")
      text("A+",1275,260);
      fill("white")
      text("Tourus",1600,280);
   }

   if(deformation<180 && deformation>100){
    fill("yellow")
    rect(1250,210,80,80);
    textSize(35);
      fill("white")
      text("B",1275,260);
      fill("white")
      text("Cyclap",1600,280);
    }

    if(deformation>180){
      fill("red")
      rect(1250,210,80,80);
      textSize(35);
      fill("white")
      text("D-",1275,260);
      fill("white")
      text("Zenia",1600,280);
      }
}
}
function score(){
  car.destroy();
  wall.destroy();
  hint.destroy();
background("black")
 resultBoard = createSprite(1000,200,800,200)
resultBoard.addImage(rb_anime)
resultBoard.scale = 0.7;
var demo = createSprite(1630,200);
demo.addImage(altoS);
}