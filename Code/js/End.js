class End{
  constructor(){
    this.button = createButton('Re-start');
    this.welcome = createElement('h2');
    this.info = createElement('h2');
    this.title = createElement('h2');
    
    }


endGame(){

  //text("The End",player1.x,player1.y);
  //theEnd=createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
  //theEnd.addImage("End",theEnd_img);
  image(theEnd_img,displayWidth/100,-displayHeight/10,displayWidth,displayHeight);
  }

  display(){
    this.button.position(displayWidth/2 + 20, displayHeight/2);
    this.life=5;
  

    this.button.mousePressed(()=>{
      //theEnd_img.visible=false;
      gameState=1;
    //  clear();
      //game.play();
     // game.start();


    });
    drawSprites();
  }
  
  }
  