const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Events = Matter.Events;

var sphere1 = [];
var cone1= [];
var rand;


function setup(){

  var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

  stand1 = new Stand(600,200,1200,10);
   

}




function draw(){
background(255);
Engine.update(engine);
stand1.display();
rand = Math.round(random(1,2));
  if(frameCount%200 === 0){
  if(rand ===1 ){
    sphere1.push(new Sphere(200,10));
  }
  if(rand === 2){
    cone1.push(new Cone(200,10));
  }

}

    for(var i=1; i< sphere1.length; i++){
      sphere1[i].display();
    }
    
    for(var j=1; j< cone1.length; j++){
      cone1[j].display();
    }
    
    
    
}


function mouseDragged(){
  for(var i=1; i< 2; i++){
    Matter.Body.setPosition(sphere1[i].body, {x: mouseX, y: mouseY});
  }





  
}