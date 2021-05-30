class Rubber {
    constructor(x,y,radius){

        var options= {
            'restitution':0.3,
            'density':1,
            'friction':5
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius= radius
        World.add(world, this.body);

    }

    display(){
        push ()
        var pos =this.body.position;
        rectMode(CENTER);
        fill(rgb(200,150,20));
        circle(pos.x, pos.y, this.radius*2);
        pop ()
      }

}