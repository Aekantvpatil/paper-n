
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1,ground1,dumper1,dumper2,dumper3,
dustbingreen_img;
function preload() {

dustbingreen_img= loadImage("dustbingreen.png")
}
function setup() {

	createCanvas(1500, 700);

	

	engine = Engine.create();
	world = engine.world;
	paper1=new paper(200,450,40)
	ground1=new ground(600,500,1800,20)

	//Create the Bodies Here.
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	boxPosition=width/2-100 
	boxY=610;
	boxleftSprite=createSprite(1050, 440, 20,100);
	 boxleftSprite.shapeColor=color(255,0,0);
	 boxLeftBody = Bodies.rectangle(1050,440, 20,100 , {isStatic:true} );
	  World.add(world, boxLeftBody);
	  boxBase=createSprite(1150, 480, 180,20);
	   boxBase.shapeColor=color(255,0,0);
	 boxBottomBody = Bodies.rectangle(1150, 480, 180,20 , {isStatic:true} );
	World.add(world, boxBottomBody);
	boxleftSprite=createSprite(1250,440,20,100);
	 boxleftSprite.shapeColor=color(255,0,0);
boxRightBody = Bodies.rectangle(1250,440,20,100,{isStatic:true});
World.add(world, boxRightBody);
image(dustbingreen_img,0,213/2,213,200)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
	paper1.display();
	ground1.display();

  drawSprites();
 
}

function keyPressed() {
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});
	}
}


