
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var plane;

function setup() {
	createCanvas(1360, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    plane=new Plane(600,600,2000,50);
	hammerh= new Hammer(300,300,100,50,PI/500);
	sand1= new Sand(250,100,10);
	sand2= new Sand(250,150,10);
	sand3= new Sand(1260,40,10);
	sand4= new Sand(1290,0,10);
	sand5= new Sand(200,60,10);
	sand6= new Sand(220,10,10);
	sand7= new Sand(270,70,10);
	sand8= new Sand(330,77,10);
	sand9= new Sand(380,20,10);
	sand10= new Sand(400,5,10);
	sand11= new Sand(450,1,10);
	sand12= new Sand(500,9,10);
	sand13= new Sand(550,90,10);
	sand14= new Sand(600,100,10);
	sand15= new Sand(700,130,10);
	stone1= new Stone(250,100,20,25);
	stone2= new Stone(350,300,20,25);
	stone3= new Stone(450,200,20,25);
	stone4= new Stone(100,200,20,25);
	stone5= new Stone(500,200,20,25);
	stone6= new Stone(610,107,20,25);
	stone7= new Stone(600,100,20,25);
	stone8= new Stone(250,100,20,25);
	stone9= new Stone(1050,160,20,25);
	rubber1= new Rubber(900,170,50);
	rubber2= new Rubber(300,160,50);
	rubber3= new Rubber(200,30,55);
	rubber4= new Rubber(700,160,50);
	rubber5= new Rubber(1000,50,50);
	iron1= new Iron(1000,150,50,100,PI/-350);
	iron2= new Iron(200,159,50,100,PI/500);
	iron3= new Iron(730,250,50,100,PI/700);




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(80,190,260);

  plane.display()
  hammerh.display()
  sand1.display()
  sand2.display()
  sand3.display()
  sand4.display()
  sand5.display()
  sand6.display()
  sand7.display()
  sand8.display()
  sand9.display()
  sand10.display()
  sand11.display()
  sand12.display()
  sand13.display()
  sand14.display()
  sand15.display()
  stone1.display()
  stone2.display()
  stone3.display()
  stone4.display()
  stone5.display()
  stone6.display()
  stone7.display()
  stone8.display()
  stone9.display()
  rubber1.display()
  rubber2.display()
  rubber3.display()
  rubber4.display()
  rubber5.display()
  iron1.display()
  iron2.display()
  iron3.display()


  drawSprites();
 
}



