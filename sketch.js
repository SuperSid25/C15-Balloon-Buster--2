var bow , arrow,  scene;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

var score=0;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}



function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
      

 redB = new Group();
 greenB = new Group();
 blueB = new Group();
 pinkB = new Group();
 arrowGroup = new Group();
 
}

function draw() {
 background(0);
  // moving ground
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
    
  }

  if (arrowGroup.isTouching(redB)){
    redB.destroyEach();
    arrowGroup.destroyEach();
      score=score+1;
  }
    
  if (arrowGroup.isTouching(greenB)){
    greenB.destroyEach();
    arrowGroup.destroyEach();
      score=score+1;
  }

  if (arrowGroup.isTouching(blueB)){
    blueB.destroyEach();
    arrowGroup.destroyEach();
      score=score+1;
  }

  if (arrowGroup.isTouching(pinkB)){
    pinkB.destroyEach();
    arrowGroup.destroyEach();
      score=score+1;
  }
   
  //creating continous enemies
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }  
  drawSprites();
  text("Score: "+ score, 300,50);
}


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrowGroup.add(arrow);

}

function redBalloon() {
  var red_balloon = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red_balloon.addImage(red_balloonImage);
  red_balloon.velocityX = 3;
  red_balloon.lifetime = 150;
  red_balloon.scale = 0.1;
  redB.add(red_balloon);
  
}

function blueBalloon() {
  var blue_balloon = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue_balloon.addImage(blue_balloonImage);
  blue_balloon.velocityX = 3;
  blue_balloon.lifetime = 150;
  blue_balloon.scale = 0.1;
  blueB.add(blue_balloon);
}

function greenBalloon() {
  var green_balloon = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green_balloon.addImage(green_balloonImage);
  green_balloon.velocityX = 3;
  green_balloon.lifetime = 150;
  green_balloon.scale = 0.1;
  greenB.add(green_balloon);
}

function pinkBalloon() {
  var pink_balloon = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink_balloon.addImage(pink_balloonImage);
  pink_balloon.velocityX = 3;
  pink_balloon.lifetime = 150;
  pink_balloon.scale = 0.1;
  pinkB.add(pink_balloon);
}
