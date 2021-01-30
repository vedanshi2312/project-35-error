class hotAirBallon{
   
    constructor(x,y,r){
  
      var options={
  
      'restitution' :1,
      'friction' :1,
      'density' :1.4
  
      }
  
      this.x=x;
      this.y=y;
      this.body = Bodies.circle(x,y,r/2,options)
      World.add(world,this.body);
  
      this.image = loadImage("images/Hot Air Ballon -02.png");
      
    }  
      
      display(){
       
      var paperpos = this.body.position;
      push();
      translate (paperpos.x , paperpos.y);
      imageMode(CENTER)
      strokeWeight(3);
      fill("blue");
      scale (0.2);
      image (this.image,0,0,this.r,this.r);    
      pop();    
  
     
      
      }   
  
  
  }