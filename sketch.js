var fighter,fighter2,fighteri,fighter2i,lake;
var form1;

function Preload(params){
    fighter1=loadAnimation("ken_idle_final_g.gif")
    fighter2=loadImage("fighter2.jpg");
    fighter2i=loadImage("fighteropp.jpg")
    lake=loadImage("lake.jpg")

}
function setup(params){
   createCanvas(1200,600);
   if(gameState===1){
   fighter=createSprite(200,20010,10);
   fighter.addAnimation("check", fighteri);
   fighter.scale=0.65;
   fighter2=createSprite(500,200,10,10);
   fighter2.addImage(fighter2i);
   lake=createSprite(800,800,400,500);
   lake.addImage(lakei);
   lake.scale=2;
   }
   form1=newForm();
   
}
    
functon draw(){
 background(255)
 drawSprites()
 
 form1.display()
 if(gameState===1){
     
 }
 if(keyDown("r")){
     fighter2.x=fighter2.x=3
 }
fighter2.bounceOff(fighter);
form1.display;

}


