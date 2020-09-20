class Box{
  constructor(x,y,width,height){
    var options ={
      'density':0.2,
      'friction': 0.3,
      'restitution': 0.2
    }
    this.body=Bodies.rectangle(x,y,width,height,options);
    this.image=loadImage("sprites/wood1.png");
    this.width=width;
    this.height=height;
    World.add(world,this.body);
  }
  display(){
    push();
    translate(this.body.position.x,this.body.position.y);
    rotate(this.body.angle);
    imageMode(CENTER);
    image(this.image,0,0,this.width,this.height);
    pop();
  }
}