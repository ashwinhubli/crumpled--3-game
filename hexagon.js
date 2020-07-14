class Polygon extends BaseClass {
  constructor(x,y){
    super(x,y,70,70);

    //this.image = loadImage("sprites/bird.png");
     this.body = Bodies.circle(50,200,20);
     World.add(world,this.body);
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
     super.display();
  }
}