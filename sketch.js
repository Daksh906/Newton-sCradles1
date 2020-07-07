const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	

	roof1 = new Roof(400,10,800,20);
	bob1 = new Bob(200,200,30);
	bob2 = new Bob(220,200,30);
	bob3 = new Bob(240,200,30);
	bob4 = new Bob(260,200,30);
	bob5 = new Bob(280,200,30);
  rope1 = new Rope(bob1.body,roof1.body,-100,0);
  rope2 = new Rope(bob2.body,roof1.body,-50,0);
  rope3 = new Rope(bob3.body,roof1.body,0,0);
  rope4 = new Rope(bob4.body,roof1.body,50,0);
  rope5 = new Rope(bob5.body,roof1.body,100,0);
  
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  roof1.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}



