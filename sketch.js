const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myengine ,myworld ,ground,ball;
function setup() {
  createCanvas(400,400);
  myengine = Engine.create();
  myworld=myengine.world;

  var options1={
    isStatic:true
  }

ground= Bodies.rectangle(200,390,200,20,options1);
  World.add(myworld,ground);
 
  var options2={
    restitution : 0.6
  }

  
 ball=Bodies.circle(200,100,20,options2) ;
 World.add(myworld,ball);



  

}

function draw() {
  background(0); 
Engine.update(myengine);
 rectMode(CENTER);
 fill ("green");
 rect(ground.position.x,ground.position.y,400,20);


 fill ("red")
 ellipseMode(RADIUS);
 ellipse(ball.position.x,ball.position.y,20,20);

 
}



  

