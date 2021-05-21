var tom,tomImg,tomImg1;
var jerry,jerryImg,jerryImg1;
var path,pathImg;
function preload() {
    //load the images here
    pathImg=loadImage("garden.png");
    tomImg=loadImage("cat1.png");
    jerryImg=loadImage("mouse1.png");
    tomImg1=loadAnimation("cat2.png","cat3.png");
    jerryImg1=loadAnimation("mouse2.png","mouse3.png");
    tomImg2=loadAnimation("cat4.png");
    jerryImg2=loadAnimation("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
path=createSprite(500,400,1000,800);
path.addImage(pathImg);


tom=createSprite(800,600,20,20);
tom.addImage(tomImg);
tom.scale=0.2;

jerry=createSprite(100,600,20,20);
jerry.addImage(jerryImg);
jerry.scale=0.2;

tom.setCollider("circle",0,0,20);

}

function draw() {

    background("path");
    //Write condition here to evalute if tom and jerry collide
if(tom.isTouching(jerry)){

   tom. addAnimation("catrunning",tomImg2);
   tom.changeAnimation("catrunning");

   jerry.addAnimation("mouserunning",jerryImg2);
   jerry.changeAnimation("mouserunning");
   tom.collide(jerry);

}

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyDown("left")){
jerry.addAnimation("mouseTessing",jerryImg1)
jerry.changeAnimation("mouseTessing")
jerry.frameDelay=25;
}

if(keyCode === RIGHT_ARROW){
    tom.addAnimation("catTom",tomImg1);
    tom.changeAnimation("catTom");
    tom.frameDelay=20;
    tom.velocityX=-2;
}

}
