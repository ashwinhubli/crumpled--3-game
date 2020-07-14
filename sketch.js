const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1D, pig1;
var backgroundImg,platform;
var bird, slingShot;
var polygon;
var hexagonimg;
function preload() {
    
     wallimg = loadImage("dustbingreen.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,400,1200,50);
    /*
 
*/

    ball = new Polygon(400,50);

    wall1 = new DustbinWall(950,320,10,100);
    wall2 = new DustbinWall(1050,320,10,100);
    wall3 = new DustbinWall(1000,375,90,10);

    slingshot = new SlingShot(ball.body,{x:200, y:50});
}

function draw(){
    background(255,255,0);
    Engine.update(engine);
    strokeWeight(4);
    
    
  // wall1.display();
  // wall2.display();
  // wall3.display();
   image(wallimg,950,275,100,100);
    ball.display();
ground.display();
    
    slingshot.display();
 }

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(ball.body);
    }
}