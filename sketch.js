var car,wall;
var speed,weight;
var wall,thickness;
var bullet,speed,weight;



function setup() {
  createCanvas(1600, 400);
  
speed=random(223, 321);
weight=random(30, 52);
thickness=random(22, 83);

car = createSprite(50, 200, 50, 50);
car.velocityX = speed;
wall = createSprite(1200, 200, 60, height/2)
color("110f0f");


}





function draw() {
  background(200, 200,200);  
   if(wall.x-car.x <(car.width+wall.width)/2)
{
car.velocityX=0;
var deformation=0.5 * weight * speed * speed/22509;
if(deformation>180)
{
car.shapeColor = "red"
}
if(deformation<180 && deformation>100)
{
  car.shapeColor = "yellow"
}
if(deformation<100)
{
  car.shapeColor = "green"
}
  function hasCollided(lbullet, lwall)
  {
    bulletRightEdge=lbullet.x +lbullet.width;
    wallLeftEdge=lwall.x;
    if(bulletRightEdge>=wallLeftEdge)
    {
         return true;
    }
    return false;
    if(hasCollided(bullet, wall))
    {
      bullet.velocityX=0;
      var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);

      if(damage>10)
      {
        wall.shapeColor = "red";
      }

      if(damage<10)
      {
        wall.shapeColor = "green";
      }
    }
  }
  
  
}
  drawSprites();
}