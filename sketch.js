var bullet, wall;
var speed, weight;
var Damage, thickness;

function setup() {

  createCanvas(1200,400);

 

  bullet = createSprite(50, 200, 50, 50)
  wall = createSprite(1000,200, thickness, 200);

  speed = random(223, 321);
  weight = random(30 ,52);
  thickness = random(23, 83)

  bullet.velocityX = speed;
}

function draw() {
  background("black");

  Damage = (0.5 * weight * speed * speed)/(thickness * thickness * thickness);
  
  console.log(Damage);

  if(isTouching(bullet, wall)){

    bullet.velocityX = 0;

    if (Damage < 10) {
      wall.shapeColor = "green";
    }
    if (Damage > 10) {
      wall.shapeColor = "red";
    }

    
  }

  drawSprites();
}

function isTouching(a,b){
  if(a.x - b.x < a.width/2 + b.width/2 &&
    b.x - a.x < a.width/2 + b.width/2 &&
    a.y - b.y < a.width/2 + b.width/2 &&
      b.y - a.y < a.width/2 + b.width/2){

    return true;
  }
  else{
    return false;
  }

}