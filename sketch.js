var balloon,balloonImg
var bg
var database
var height;

function preload (){

balloonImg=loadImage("sprites/ba.png")
bg=loadImage("sprites/bg2.png")

}


function setup() {
 
  createCanvas(700,600);
  database=firebase.database();
  balloon=createSprite(400, 200, 50, 50);
  balloon.addImage("balloon",balloonImg);
  var balloonposition=database.ref('balloon/height');
balloonposition.on("value",readHeight,showError);

}





function draw() {
  background(bg); 
  
  if(keyDown(LEFT_ARROW)){
    UpdateHeight(-1,0);
}
else if(keyDown(RIGHT_ARROW)){
    UpdateHeight(1,0);
}
else if(keyDown(UP_ARROW)){
  UpdateHeight(0,-1);
  balloon.scale=balloon.scale-0.008;
}
else if(keyDown(DOWN_ARROW)){
    UpdateHeight(0,+1);
    balloon.scale=balloon.scale+0.008;
}
drawSprites();


drawSprites();
  stroke(255,0,0)
  fill("orange")
  textSize(30)
  text("USE ARROWS TO MOVE THE HOT AIR BALLOON",50,30)
  
}

function UpdateHeight(x,y){
  database.ref('balloon/height').set({
  'x': height.x + x ,
  'y': height.y + y
  })
  }

function readHeight(data){
  height = data.val();
  balloon.x = height.x
  balloon.y = height.y
  }
  
  function showError(){
  
    console.log("ERROR IN A DATABASE")
  
  }