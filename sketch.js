const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
var ground;
var engine,world;
var box, boxOptions;
var box1;
var box2;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
   ground1 = new Ground(200, 390, 400, 20);
   box1 = new Box(200, 300, 50, 50);
   box2 = new Box(240, 100, 50, 100);
}

function draw() {
  Engine.update(engine);
  background(0,0,0);
  ground1.display();
  box1.display();
  box2.display();
}
