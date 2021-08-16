var ship,ship1
var sea,sea1
   function preload(){
    ship_running = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
    seaImage = loadImage("sea.png")
    shipImage = loadImage("ship-1.png")
    shipImage = loadImage("ship-2.png")
    shipImage = loadImage("ship-3.png")
    shipImage = loadImage("ship-4.png")
    seaImage=loadAnimation("sea.png")
  }
  
  function setup(){
    createCanvas(600,500);
    
    // creating trex
    ship = createSprite(50,200,20,50);
    ship.addAnimation("running", ship_running);
   
    
    edges = createEdgeSprites();
    
    //adding scale and position to trex
    ship.scale = 0.5;
    sea=createSprite(600,600,500,500)
  sea.addAnimation("running",sea);
  edges=createEdgeSprites();
  
  ship.scale=0.25;
  sea.scale=0.5;
    ship.x = 90;
    ship.y=300;
  }

function draw(){
  //set background color 
  background("blue");
  if(keyDown("enter")){
  ship.velocityx= 5;
  } 
 if(keyDown("left")){
  ship.velocityx=-5;

}
  if(keyDown("space")){
    ship.velocityx = 0;
  }
  if(sea.x < 0){
 sea.x = sea.width/2;
}
  //stop ship from falling down
  ship.collide(edges[3])
  drawSprites();
}

