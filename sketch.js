const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;
    
    ground = new Ground(600,height,1200,20);

    pig1 = new Pig(800,450);
    box1 = new Box(700,450,70,70);
    box2 = new Box(900,450,70,70);
    log1 = new Log(800, 400, 320, PI/2);
    pig2 = new Pig(800,340);
    box3 = new Box(700,340,70,70);
    box4 = new Box(900,340,70,70);
    log2 = new Log(800, 280, 320, PI/2);
    box5 = new Box(800,230,70,70);
    log3 = new Log(740,230,130,PI/7);
    log4 = new Log(860,230,130,-PI/7);
    bird1 = new Bird(150,200, 50,50)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    pig1.display();
    ground.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird1.display();
}