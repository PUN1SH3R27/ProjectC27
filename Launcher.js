class Launcher {
    constructor(FirstBody,pointB){
        var options= {
    bodyA: FirstBody,
    pointB: pointB,
    length:40,
    stiffness:0.7
    }
    this.slingshot= Matter.Constraint.create(options)
    this.pointB= pointB
    World.add(world,this.slingshot)
    
    }
    display(){
        if(this.slingshot.bodyA) {
        var pointA = this.slingshot.bodyA.position
       // var pointB= this.slingshot.bodyB.position
       push()
       stroke("#00FFFF")
       strokeWeight("4")
    line( pointA.x, pointA.y, this.pointB.x, this.pointB.y  )
    pop()
        }
    
    }
    
    fly() {
    
    this.slingshot.bodyA = null
    
    }
    
    }
    
    