class BaseClass{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.8,
            'friction':9.0,
            'density':0.1
        }
        this.body = Bodies.rectangle(x, y, width, height,angle, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("paper.png");
        World.add(world, this.body);
      }
      display(){
        push();
        var angle = this.body.angle;
        fill('red');
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}