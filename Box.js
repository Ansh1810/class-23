class Box{
constructor(x,y,width,height){
 var boxOptions = {restitution:0.8}
 this.box = Bodies.rectangle(x, y, width, height, boxOptions);
 this.width = width;
 this.height = height;

    World.add(world,this.box);    
}
display(){
    var pos = this.box.position;
    push();
    translate(pos.x, pos.y);
   rotate(this.box.angle)
    rectMode(CENTER);

    rect(0,0, this.width, this.height);
    pop();

}

}