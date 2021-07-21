
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,bin1,bin2,bin3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ball= new Paper();
    bin1=new Dustbin(400,450,30,100);
    bin2=new Dustbin(600,450,30,100);
    bin3=new Dustbin(500,510,230,30);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball.display();
  bin1.display();
  bin2.display();
  bin3.display();
  drawSprites();
 
}
function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
  }
}



