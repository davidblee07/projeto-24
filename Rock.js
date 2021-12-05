class Rock{
    constructor(x, y) {
      var options = {
        'density':12,
        'friction': 0.9,
        'restitution':0.8
      };
      
      this.body=Bodies.rectangle(x, y,50, 50, options)
      this.width = 80;
      this.height = 80;
      World.add(world, this.body);

  }
  display()
  {
          var rockpos=this.body.position;		
          push()
          translate(rockpos.x, rockpos.y);
          rectMode(CENTER)
          strokeWeight(4);
          stroke("black");
          fill("brown");
          rectMode(CENTER) 
          rect(0, 0, this.width, this.height);
          pop()
  }

}
  