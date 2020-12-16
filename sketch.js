const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,ground,ball;

function setup(){
  createCanvas(700,700);
 engine =Engine.create();
 world= engine.world;
  

 var ground_options = {

   isStatic : true,
  
 }
 ground = Bodies.rectangle(20,600,800,20,ground_options);

 World.add(world,ground);

 var ball_options={

 restitution: 0.1
 }
 ball = Bodies.circle(180, 350, 40, ball_options);

 World.add(world, ball);
}


function draw(){
background(0);
Engine.update(engine);
rectMode(CENTER)
rect(ground.position.x,ground.position.y,800,20);

ellipseMode(RADIUS)
circle(ball.position.x, ball.position.y, 40);
}