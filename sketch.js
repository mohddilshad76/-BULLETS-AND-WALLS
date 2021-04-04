var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1500,400);
 bullet = createSprite(250, 200, 50, 50);
  wall = createSprite(1200,200, thickness, height/2);

bullet.velocityX = 5;

speed = random(223,321);
weight = random(30,52);

thickness = random(22,83);

}

function draw() {
  background("pink");  

  if(wall.x-bullet.x < (bullet.width+wall.width)/2);
  {
    bullet.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22509;
if(deformation>180)
  {
    bullet.shapeColor = ("white");
    wall.shapecolor = ("yellow");
  }

  if(deformation<180 && deformation>180)
  {
    bullet.shapeColor = ("white");
    wall.shapeColor = ("green");
  }
if(deformation<100);
{
  bullet.shapeColor = ("white")
  wall.shapeColor = ("red")
}
  }

  if(hasCollided(bullet,wall))
  {
    bullet.velocityX = 0;
    var damage = 0.5 * speed * speed/thickness * thickness * thickness);

    if(damage>10)
    {
      wall.shapeColor = color (green);
    }

    if(damage>10)
    {
      wall.shapeColor = color(red);
    }
  }
   
  drawSprites();
}

 function hasCollided(lbullet,lwall);
 {
   bulletRightEdge = lbullet.x + lbullet.width;
   wallLeftEdge = lwall.x;
   if(bulletRightEdge>=wallLeftEdge)
 {
   return true;
 }
 return false;
}