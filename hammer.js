class Hammer{
        constructor(x,y,width,height)
        {
            var option={
                'restitution' : 2.0,
                'friction': 1.0,
                'density': 500,
            }
            this.body=Bodies.rectangle(x,y,width,height,option);
            World.add(world,this.body);
            
            this.width=width;
            this.height=height;
        }
    
        display()
        {
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;
            var angle=this.body.angle;
            push();
            translate(this.body.position.x, this.body.position.y);
            rotate(angle);
            rectMode(CENTER);
            rect(0,0,this.width,this.height);
            pop();     
        }
    }