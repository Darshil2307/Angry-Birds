class Slingshot
{
    constuctor(bodyA, bodyB)
    {
        var options=
        {
          bodyA: bodyA,
          bodyB: bodyB,
          stiffness: 0.2,
          length: 10  
        }
     //   this.pointB = pointB;
      this.slingshot = Constraint.create(options);
      World.add(world,this.slingshot);
    }
   display()
   {
       var pointA = this.slingshot.bodyA.position;
       var pointB = this.slingshot.bodyB.position;
      strokeWeight(3);
      line(pointA.x,pointA.y,pointB.x,pointB.y)  
   }
}