var puck = {
  x: 300,
  y: 200,
  xSpeed: 3,
  ySpeed: 1
}

var edgeOffset = 20;

var player1 = {
  x: edgeOffset,
  y: 200,
  ht:50, //height of paddle
  wt: 10
}

var player2 = {
  x: 600 - edgeOffset - 10,
  y: 200,
  ht: 50,
  wt: 10
}

  
function setup() { 
  createCanvas(600, 400);
} 

function draw() { 
  background(0);
  
  //draw puck
  ellipse(puck.x, puck.y, 10);
  
  //move puck
  puck.x += puck.xSpeed;
  puck.y += puck.ySpeed;
  
  if (puck.x > width || puck.x < 0) {
    puck.xSpeed = -puck.xSpeed;
  }
  
  //draw paddles
  rect(player1.x, player1.y, player1.wt, player1.ht);
  rect(player2.x, player2.y, player2.wt, player2.ht);
  
  if (keyIsDown (69)) { //keycode for E
  	player1.y -= 3; //moves left paddle up
  	}
  if (keyIsDown (68)) { //keycode for D
    player1.y += 3; //moves left paddle down
  	}
  if (keyIsDown (73)) { //keycode for I
    player2.y -= 3; //moves right paddle up
  	}
  if (keyIsDown (75)) { //keycode for K
    player2.y += 3; //moves right paddle down
  	}
}
