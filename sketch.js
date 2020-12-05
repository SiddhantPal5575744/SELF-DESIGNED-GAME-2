var Input,volcanoImg,titleImg,title
var gamestate="login";
var robot, robotImg,labImg,lab;
var mineImg,mine,teleportImg,teleport;
var teleportsound;
var g1,g2,b1,b2
var gImg1,gImg2,bImg1,bImg2;
var skyImg,sky;
var g1s,g2s,b1s,b2s;
var player;
 








function preload(){
volcanoImg=loadImage("Volcano.png");
titleImg=loadImage("Title.png");
robotImg=loadImage("Robot.png");
labImg=loadImage("lab.png");
mineImg=loadImage("MineEntrance.png");
teleportImg=loadImage("teleport2.png")
teleportsound=loadSound("teleport.mp3")

gImg1=loadImage("Girl1.png");
gImg2=loadImage("Girl2.png");
bImg1=loadImage("Boy1.png");
bImg2=loadImage("Boy2.png");

skyImg=loadImage("sky.png")



 }

 function setup(){
   textFont("cellestar");

     createCanvas(displayWidth,displayHeight);
   Input=new Form()

   g1s=createButton('select');
   g1s.position(displayWidth/2-230,displayHeight/2+290);
   g1s.mousePressed(characterg1);
   g1s.hide();
  
   g2s=createButton('select');
   g2s.position(displayWidth/2-130,displayHeight/2+290);
   g2s.mousePressed(characterg2);
   g2s.hide();
  
   b1s=createButton('select');
   b1s.position(displayWidth/2+170,displayHeight/2+290);
   b1s.mousePressed(characterb1);
   b1s.hide();
   
   b2s=createButton('select');
   b2s.position(displayWidth/2+270,displayHeight/2+290);
   b2s.mousePressed(characterb2);
   b2s.hide();
 


   
title=createSprite(displayWidth/2+50, 100);
title.addImage(titleImg);

teleport=createSprite(displayWidth/2, displayHeight/2,displayWidth.displayHeight);
teleport.addImage(teleportImg);
teleport.visible=false;
teleport.scale=1.5;

lab=createSprite(displayWidth/2,displayHeight/2);
lab.addImage(labImg);
lab.scale=2.4;


   
robot=createSprite(displayWidth/2-300, 550);
robot.addImage(robotImg);
robot.scale=2.2;

sky=createSprite(displayWidth/2,displayHeight/2-150);
sky.addImage(skyImg);
sky.visible=false;
sky.scale=4;

g1=createSprite(displayWidth/2-200,displayHeight/2+230);
g1.addImage(gImg1);
g1.visible=false;
g1.scale=0.3;

g2=createSprite(displayWidth/2-100,displayHeight/2+230);
g2.addImage(gImg2);
g2.visible=false;
g2.scale=0.3;

b1=createSprite(displayWidth/2+200,displayHeight/2+230);
b1.addImage(bImg1);
b1.visible=false;
b1.scale=0.3;


b2=createSprite(displayWidth/2+300,displayHeight/2+230);
b2.addImage(bImg2);
b2.visible=false;
b2.scale=0.3;

 player=createSprite(displayWidth/2-100, 550);
 player.visible=false;
 player.scale=0.4

 

 




 


   

 }

 function draw(){
   console.log(gamestate);

  if(gamestate==="login"){
    robot.visible=false;
    lab.visible=false;
    title.visible=true;

  }
 

if(gamestate==="lobby"){
   lab.visible=true;
   volcanoImg.visible=false;
 
    title.visible=false;
   robot.visible=true;
   


   if(keyDown('space')){
     gamestate="character pick";
   }
}

if(gamestate==="character pick"){
  sky.visible=true;
  g1.visible=true;
  g2.visible=true;
  b1.visible=true;
  b2.visible=true;
  lab.visible=false;
  robot.visible=false;
  g1s.show();
  g2s.show();
  b1s.show();
  b2s.show();
}
if(gamestate==="teleport"){
  teleport.visible=true;
  lab.visible=false;
  robot.visible=false;
   
  
   
 
   
   setTimeout(mineEntrance,4000);
   
  teleportsound.play();

  

}

if(gamestate==='mineEntrance'){
  mine=createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
  mine.addImage(mineImg);
  mine.scale=1.72;
  teleportsound.stop();
  teleport.visible=false;
  

  robot.visible=true;
  player.visible=true;

  robot.depth=mine.depth+1;
  player.depth=mine.depth+1;


  stroke("blue");
 textSize(25)
  text("Robot:  You might be wondering what just happened, we actually teleported at octradedalisis diamond mine which will the starting  point on our journey to the center of the earth I hope we will have a lot of fun! ",displayWidth/2-200,displayHeight/2);
  
}

 



Input.display();
title.display();
drawSprites();
 }


 function characterg1(){
   g1.visible=false;
   g2.visible=false;
   b1.visible=false;
   b2.visible=false;
   sky.visible=false;
   g1s.hide();
   g2s.hide();
   b1s.hide();
   b2s.hide();
   gamestate="teleport";
   player.addImage(gImg1);

   }

   function characterg2(){
    g1.visible=false;
    g2.visible=false;
    b1.visible=false;
    b2.visible=false;
    sky.visible=false;
    g1s.hide();
   g2s.hide();
   b1s.hide();
   b2s.hide();
    gamestate="teleport";
    player.addImage(gImg2);
 
    }

    function characterb1(){
      g1.visible=false;
      g2.visible=false;
      b1.visible=false;
      b2.visible=false;
      sky.visible=false;
      g1s.hide();
   g2s.hide();
   b1s.hide();
   b2s.hide();
      gamestate="teleport";
      player.addImage(bImg1);
   
      }

      function characterb2(){
        g1.visible=false;
        g2.visible=false;
        b1.visible=false;
        b2.visible=false;
        sky.visible=false;
        g1s.hide();
   g2s.hide();
   b1s.hide();
   b2s.hide();
        gamestate="teleport";
        player.addImage(bImg2);
     
        }

   function mineEntrance(){
    
      gamestate=  'mineEntrance';
     

  }

 