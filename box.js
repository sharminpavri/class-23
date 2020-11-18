class Box{
    constructor(x,y,width,height){
    var option={
      restitution:1  
    }
    this.body=Bodies.rectangle(x,y,width,height,option);
    this.height=height;
    this.width=width;
    World.add(world,this.body)
}
display(){
push();
rectMode(CENTER);
fill("white");
translate(this.body.position.x,this.body.position.y);
rotate(this.body.angle);
rect(0,0,this.width,this.height);
pop();

}
}