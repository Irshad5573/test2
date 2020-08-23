var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;

var end

var homeScreen;
var player;
var player1;
var player_img;
var player1_img;
var player2_img,player3,player4;

var game;

var socialDistancing_image;
var socialDistancing;

var road_img;
var road1_img;
var gamePlayer_img;

var gardenEntrence;
var gardenf;
var gardenf1;
var garden_img;
var gardenEntrence_img;

var cons_img;

var virus;
var virus_img;

var life1,life2,life3,life4,life5;
var life1_img,life2_img,life3_img,life4_img,life5_img;

var theEnd,theEnd_img;





var energyDrink,gloves,mask,sanitizer,tonic;
/*var pH;

if(World.frameCount % 60 === 0) {
  pH = createSprite(400,365,10,40);
  pH.velocityX = - (6 + 3*count/100);

  var rand = randomNumber(1,6);
    pH.setAnimation("pH" + rand);*/



function preload(){


  cons_img=loadImage("images/freance.png");

  life1_img=loadImage("images/life.png");
  life2_img=loadImage("images/life.png");
  life3_img=loadImage("images/life.png");
  life4_img=loadImage("images/life.png");
  life5_img=loadImage("images/life.png");

  road1_img=loadImage("images/Road.jpeg");
  road_img=loadImage("images/Road.jpeg");

  player_img=loadImage("images/player.png");

  player1_img = loadImage("images/player1.png");
  player2_img = loadImage("images/player2.png");
  player3 = loadImage("images/player3.png");
  player4 = loadImage("images/player4.png");

  gardenEntrence = loadAnimation("images/garden.png");
  gamePlayer_img=loadImage("images/player.png");

  enemy_img = loadImage("images/enemy.png");
  sd_image = loadImage("images/sd.png");

  gardenEntrence_img=loadImage("images/garden.png");
  virus_img=loadImage("images/virus1.png");
  
  garden_img=loadImage("images/garden_img.png");

  theEnd_img=loadImage("images/theEnd.png");
}

function setup(){
  
  
  gardenEntrence = createSprite(155,-2712.5,200,400);
  gardenf = createSprite(380,-800,10,99999999999999);
  gardenf1 = createSprite(380,-5160,10,999999999999);

  //gardenf.visible=false;
  //gardenf1.visible=false;
  

  canvas = createCanvas(displayWidth-30, displayHeight-50);
  end=new End();
  game = new Game();
  game.start();
}


function draw(){
 
  
  player1.collide(gardenf);
  player1.collide(gardenf1);
  
  
  if(gameState == 10){
    end.endGame();
  }

  if(gameState == 1){
    
    clear();
    game.play();
  }
  if(gameState == 2){
    game.end();
  }
}
