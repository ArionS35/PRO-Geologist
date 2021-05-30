class Stone{
    constructor(x,y,width,height){
                var option={
                    'restitution' : 0.8,
                    'friction': 1.0,
                    'density': 0.1
                }
                this.body=Bodies.rectangle(x,y,width,height,option);
                this.shapeColor='red';
                World.add(world,this.body);
                
                this.width=width;
                this.height=height;
            }
    
            display(){
                var pos=this.body.position;
                var angle=this.body.angle;
                push();
                translate(pos.x,pos.y);
                rotate(angle);
                fill (rgb(40,0,0))
                rectMode(CENTER);
                rect(0,0,this.width,this.height);
                pop();
            }
        
        }