class Bob{
    constructor(x, y, width, height,options) {
        var options = {
            isStatic:true,
            'friction':0.5,
            'density':1.7
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        translate(this.body.position.x, this.body.position.y);
      }
}