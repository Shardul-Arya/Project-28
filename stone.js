class stone{
	constructor(x,y)
	{
		var options={
			isStatic:false,
			restitution :0,
            friction :1,
            density:1.2
			}
		this.x=x;
		this.y=y;
		this.r=30;
		this.image=loadImage("images/stone.png")
		this.body=Bodies.circle(this.x, this.y, 30, options)
		World.add(world, this.body);
	}

	display()
	{
		var stonePos=this.body.position;	
		push()
		translate(stonePos.x, stonePos.y);
		// rectMode(CENTER);
		rotate(this.body.angle)
		fill(255,0,255)
		imageMode(CENTER);
		ellipseMode(CENTER);
		image(this.image, 0,0,60, 60)
		pop()
 }
}