 class Dustbin
{
	constructor(x,y,width,height)
	{
		var options ={
			
			isStatic:true
		}
		this.body=Bodies.rectangle(x,y,width,height,options);
		this.width = width;
		this.height=height;
		//this.angle = angle;
		//.Body.setAngle(this.body,angle);
		World.add(world,this.body);
	}
	display()
	{
		var pos=this.body.position;
		//var angle = this.body.angle;
		//push ();
		//translate(pos.x,pos.y);
		//rotate (angle);
		fill (255);
		rectMode (CENTER);
		rect(pos.x,pos.y,this.width,this.height);
		//pop ();	
	}

}