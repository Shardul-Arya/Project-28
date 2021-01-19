
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10;
var stone1, constraint1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(Math.round(random(900, 1200)),Math.round(random(70, 250)),Math.round(random(15, 30)));
	mango2=new mango(Math.round(random(900, 1200)),Math.round(random(70, 250)),Math.round(random(15, 30)));
	mango3=new mango(Math.round(random(900, 1200)),Math.round(random(70, 250)),Math.round(random(15, 30)));
	mango4=new mango(Math.round(random(900, 1200)),Math.round(random(70, 250)),Math.round(random(15, 30)));
	mango5=new mango(Math.round(random(900, 1200)),Math.round(random(70, 250)),Math.round(random(15, 30)));
	mango6=new mango(Math.round(random(900, 1200)),Math.round(random(70, 250)),Math.round(random(15, 30)));
	mango7=new mango(Math.round(random(900, 1200)),Math.round(random(70, 250)),Math.round(random(15, 30)));
	mango8=new mango(Math.round(random(900, 1200)),Math.round(random(70, 250)),Math.round(random(15, 30)));
	mango9=new mango(Math.round(random(900, 1200)),Math.round(random(70, 250)),Math.round(random(15, 30)));
	mango10=new mango(Math.round(random(900, 1200)),Math.round(random(70, 250)),Math.round(random(15, 30)));

	stone1 = new stone(240, 420);

	constraint1 = new constraint(stone1.body, {x:240, y:420});

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  
  treeObj.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

  stone1.display();

  constraint1.display();

  groundObject.display();

  detectCollision(stone1, mango1);
  detectCollision(stone1, mango2);
  detectCollision(stone1, mango3);
  detectCollision(stone1, mango4);
  detectCollision(stone1, mango5);
  detectCollision(stone1, mango6);
  detectCollision(stone1, mango7);
  detectCollision(stone1, mango8);
  detectCollision(stone1, mango9);
  detectCollision(stone1, mango10);
}

function mouseDragged() {
    Matter.Body.setPosition(stone1.body, {x:mouseX,y:mouseY});
}

function mouseReleased() {
    constraint1.fly();
}

function detectCollision(lstone, lmango) {
	mangoBodyPosition = lmango.body.position
	stoneBodyPosition = lstone.body.position

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);

	if(distance<=lmango.r+lstone.r) {
		Matter.Body.setStatic(lmango.body, false);
	}
}

function keyPressed() {
  if (keyCode === 32) {
    Matter.Body.setPosition(stone1.body, {x:240, y:420});
    constraint1.attach(stone1.body);
  }
}