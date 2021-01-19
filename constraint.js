class constraint{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 10
        }
        this.pointB = pointB
        this.constraint1 = Constraint.create(options);
        World.add(world, this.constraint1);
    }

    fly() {
        this.constraint1.bodyA=null;
    }

    attach() {
        this.constraint1.bodyA=stone1.body
    }

    display(){
        if(this.constraint1.bodyA){
            var pointA = this.constraint1.bodyA.position;
            var pointB = this.pointB
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
        
    }
}