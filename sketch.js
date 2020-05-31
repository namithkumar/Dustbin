var ground1;
var paper1;
var bin1;
var log1,log2, log3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	ground1 = new Grd(600,680,1200,20);
	paper1 = new Paper(100, 550, 70);

	log1 = createSprite(600, 670, 220, 10);
	log2 = createSprite(485, 595, 10, 155);
	log3 = createSprite(715, 595, 10, 155);

	log1.shapeColor = color("blue");
	log2.shapeColor = color("blue");
	log3.shapeColor = color("blue");

	bin1 = new Bin(600, 595, 235, 150);

	Engine.run(engine);
}

function draw() 
{
	background("yellow");
	rectMode(CENTER);
	
	Engine.update(engine);

	
	ground1.display();
	paper1.display();
	bin1.display();
	
	paper1collide(bin1,paper1);

	drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paper1.body, paper1.body.position, {x:590,y:-2600});
	}
}

function paper1collide(object1,object2)
{
	//if (object2.x >= object1.x)
	if((object1.y - object2.y) === (object1.height/2 + object2.height/2));
	{
		object2.visible = false;
		//background(0);
	}
	

}


