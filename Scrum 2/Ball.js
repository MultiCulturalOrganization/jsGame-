/*
Surin Rao  Mar 30 2016 Scrum 2 Atari
Super helpful: http://cheatsheetworld.com/programming/html5-canvas-cheat-sheet/
*/

//-------------------------------Variables -------------------------------------
/*
These are my global variables, I also created the colours
*/
var ColRay = ["#cc0000", "#ff9900", "#ffff00", "#009933", "#0000ff", "#4b0082"];
//							 red0-		orange1-		yellow2-	green3-			blue4-		indigo5
//googled the colours, put into an array to be more efficient
var white = "#ffffff";
var pink = "#ff0066";


var canvas = document.getElementById("myCanvas"); //this is the canvas
var ctx = canvas.getContext("2d");
var PaddleHeight = 8; //paddle height
var PaddleWidth = 100; //width
var StartingX = (canvas.width-PaddleWidth)/2; //where the paddle starts
var StartingY = 592;
var Right = false; //will it move
var Left = false;
var PaddleDisplacement = 5; //how much the paddle will move
var BallRadius = 10; //ball size
var BallX = 400; //ball starting coords
var BallY = 500;
var BallDisplacementX = 3; //how much the balls x coord will change
var BallDisplacementY = -2; //y coord change
var score=0;
var drawseven = true;

//----------------------Drawing the Ball----------------------------------------
/*
This is where I draw the ball, with its properties
*/
function Ball() {
	ctx.fillStyle = white;
	ctx.beginPath();
	ctx.arc(BallX, BallY, BallRadius, 0, Math.PI * 2, true);
	ctx.fill();
	ctx.closePath();
	BallX += BallDisplacementX;
	BallY += BallDisplacementY;
}//Ball
//------------------Colliding with Outer Box------------------------------------
/*
This is for when the Ball hits the outside walls and the top
*/
function BoxCollision() {
	if(BallX+BallDisplacementX >1130 || BallX+ BallDisplacementX+ BallRadius <0) {
		BallDisplacementX = -1.05*BallDisplacementX;
		BallDisplacementY = 1.05*BallDisplacementY;
	}

	if (BallY + BallDisplacementY - BallRadius < 0) {
		BallDisplacementY = -1.05*BallDisplacementY;
	}

}//BoxCollision

//----------------Colliding with the Paddle-------------------------------------
/*
This is when the ball hits teh paddle, and if it misses then G.O.
*/
function PaddleCollision() {

	if (BallY + BallDisplacementY > 589) {
		if(BallX > StartingX && BallX < StartingX + 100) {
			BallDisplacementY = -0.95*BallDisplacementY;
			BallDisplacementX = 12 * ((BallX-(StartingX+PaddleWidth/2))/PaddleWidth);
		} //nested
	}//if

	if(BallY > 600) {
		alert("GAME OVER");
		location.reload(); //this reloads the page, got from:  https://goo.gl/mGVKNJ
	}//if
}//PaddleCollision
Ball();
BoxCollision();
PaddleCollision();
