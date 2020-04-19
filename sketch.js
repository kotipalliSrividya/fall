const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine, world;
var box;
function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  box= Bodies.rectangle(200,200,50,50);
  World.add(world,box);
}

function draw() {
  background(0,0,0);  
  
}