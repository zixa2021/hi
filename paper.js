class Paper{
    constructor(){
        var options ={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.circle(200,450,20,options);
        this.radius = 20;
        World.add(world,this.body);

    }
    display(){
        var paperpos=this.body.position;		

			push()
			translate(paperpos.x, paperpos.y);
			ellipseMode(CENTER)
			strokeWeight(3);
			fill(255,0,255)
			ellipse(0,0,this.radius, this.radius);
			pop();
    }
}