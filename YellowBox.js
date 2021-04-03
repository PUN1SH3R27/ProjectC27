class Rectangle4 {
    constructor(x, y, width, height) {
      var options = {
          isStatic: false,
          'restitution':0,
          'friction':2,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options, {isStatic: false});
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
      
    }
    display(){
      var pos =this.body.position;
      push()
      translate(pos.x,pos.y);
      rotate(this.body.angle);
      rectMode(CENTER);
      fill("lightyellow");
      stroke("black")
      rect(0, 0, this.width, this.height);
      pop()
    }
  };