const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, platform;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16;

function setup() {
  createCanvas(800,800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400, 700, 900, 5);

  platform = new Ground(400, 650, 300, 5);

  fill(11, 247, 237);
  block1 = new Block(340, 620, 20, 30);
  block2 = new Block(360, 620, 20, 30);
  block3 = new Block(380, 620, 20, 30);
  block4 = new Block(400, 620, 20, 30);
  block5 = new Block(420, 620, 20, 30); 
  block6 = new Block(440, 620, 20, 30);
  block7 = new Block(460, 620, 20, 30);
  block8 = new Block(360, 590, 20, 30);
  block9 = new Block(380, 590, 20, 30);
  block10 = new Block(400, 590, 20, 30);
  block11 = new Block(420, 590, 20, 30);
  block12 = new Block(440, 590, 20, 30);
  block13 = new Block(400, 560, 20, 30);
  block14 = new Block(380, 560, 20, 30);
  block15 = new Block(420, 560, 20, 30);
  block16 = new Block(400, 530, 20, 30);

}

function draw() {
  background(223, 207, 243);

  Engine.update(engine);

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();

  platform.display();
 
  ground.display();

 
}
