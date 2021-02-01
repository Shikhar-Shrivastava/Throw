
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);	
	mango2=new mango(1000,50,30);
	mango3=new mango(1200,200,30);
	mango4=new mango(950,250,30);
	mango5=new mango(1050,220,30);

	
    

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	stone = new Rock(230,400)
	throww = new Thrower(stone.body,{x:230,y:410})
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
  stone.display();
  groundObject.display();
  
	dc(stone,mango1)
	dc(stone,mango2)
	dc(stone,mango3)
	dc(stone,mango4)
	dc(stone,mango5)

}
function mouseDragged(){
    Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    throww.fly()
}
function dc(stoneO,mango){
	Spos = stoneO.body.position
	Mpos = mango.body.position

	var distance = dist(Spos.x,Spos.y,Mpos.x,Mpos.y)
	if(distance<=mango.r + stoneO.r){
		Matter.Body.setStatic(mango.body,false)
	}
}
function keyPressed(){
	if(keyCode === 32){

		throww.attach(stone)

	}
}