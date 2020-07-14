class Ball{
    constructor(x,y,radius){
     var options={
        isStatic:false,
        friction:0.5,
        density:2.2
     }
        //this.image = loadImage("paper.png")
         this.body = Bodies.circle(x,y,radius,options);
         this.radius = radius;
         World.add(world,this.body);
    }
  
  
  display(){
     push();
      fill('blue');
      ellipse(this.body.position.x,this.body.position.y,this.radius);

     pop();
  }
  
  }