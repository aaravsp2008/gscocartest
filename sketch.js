//var
var car2,car1,car3;
var wall1,wall2,wall3;
var speed,weight;

//setup
function setup() {
  createCanvas(1600,400);

  //giving random value to speed and weight
   speed = random(50,90);
   weight = random(400,1500);

  // creating cars
   car1 = createSprite(50,200,50,10);
   car2 = createSprite(10,100,50,10);
   car3 = createSprite(90,90,50,10);
 
  // creating walls
   wall1 = createSprite(1500,200,60,height/2);
   wall2 = createSprite(1500,50,60,height/2);
   wall3 = createSprite(1500,20,60,height/2);

  //velocity of cars
   car1.velocityX = speed;
   car2.velocityX = speed;
   car3.velocityX = speed;
  //color for walls
   wall1.shapeColor = color(156,0,30);
   wall2.shapeColor = color(100,90,20);
   wall3.shapeColor = color(200,40,100);
}

function draw() {
  background(255,255,255); 
  if(wall1.x-car1.x < (car1.width+wall1.width)/2){
    car1.velocityX = 0;
    var deformation = 0.5*weight*speed*speed/22509;
    if(deformation>180){
    car1.shapeColor = color(255,0,0);
    }
 }
 
 if(wall2.x-car2.x < (car2.width+wall2.width)/2){
  car2.velocityX = 0;
  var deformation = 0.5*weight*speed*speed/22509;
  if(deformation>180){
  car2.shapeColor = color(0,255,0);
  }
}

if(wall3.x-car3.x < (car3.width+wall3.width)/2){
  car3.velocityX = 0;
  var deformation = 0.5*weight*speed*speed/22509;
  if(deformation>180){
  car3.shapeColor = color(0,0,255);
  }
}

 car1.display();
 car2.display();
 car3.display();

 wall1.display();
 wall2.display();
 wall3.display();

  drawSprites();
}