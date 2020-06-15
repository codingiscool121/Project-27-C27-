
var bobObject1,bobObject2,bobObject3,bobObject4;
var rope1,rope2,rope3,rope4,roof;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(800, 700);

  bobDiameter = 40;
	engine = Engine.create();
	world = engine.world;
   startbobpositionX = width/2;
   startbobpositionY = height/4+500;
	 bobObject1 = new bob(startbobpositionX-bobDiameter*2,startbobpositionY,bobDiameter);
   bobObject2 = new bob(startbobpositionX-bobDiameter,startbobpositionY,bobDiameter);
   bobObject3 = new bob(startbobpositionX,startbobpositionY,bobDiameter);
   bobObject4 = new bob(startbobpositionX+bobDiameter*2,startbobpositionY,bobDiameter);
   bobObject5 = new bob(startbobpositionX+bobDiameter*2,startbobpositionY,bobDiameter);
   roof = new Roof(width/2,height/2,width/3,20);
   rope2 = new Rope(bobObject1.body,roof.body,-bobDiameter*2,0);
   rope1 = new Rope(bobObject2.body,roof.body,-bobDiameter*1,0);
   rope5 = new Rope(bobObject3.body,roof.body,0,0);
   rope4 = new Rope(bobObject4.body,roof.body,bobDiameter*1,0);
   rope3 = new Rope(bobObject5.body,roof.body,bobDiameter*2,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  
  drawSprites();
 
}


function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-80,y:-55},bobObject5.body,bobObject5.body.position,{x:-80,y:-55});
  }
}

