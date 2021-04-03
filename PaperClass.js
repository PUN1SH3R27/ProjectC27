class Paper {
    constructor(x, y, radius) {
      var options = {
          isStatic: false,
          'restitution':0.3,
          'friction':0.5,
          'density':3
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius= this.radius
      this.image= loadImage("clipart3208183.png")
      World.add(world, this.body);
      
    }
    display(){
      var pos =this.body.position;
      push()
      translate(pos.x,pos.y);
      ellipseMode(RADIUS);
      //fill("yellow");
      //stroke("black")
      ellipse(0,0,this.image, this.image);
      image(this.image, -16, -25, 30, 30);

      pop()
    }
  };

  
