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
//---------------------------------- Bricks-------------------------------------
/*
Used this idea for the link game we made a while ago
I expanded on the algo Charlie made after the link test and applied it here
The Row Colour change I had trouble with because
I had it in the other for loop which was why the colours didn't change
*/
function Bricks() {

	for(var i=0; i< 6; i++) {
		ctx.fillStyle = ColRay[i]; //put the fill here
		for(var j=0;j<16;j++) {
			ctx.beginPath();
			ctx.rect((j * 76) + 1,100+(i * 19) + 2, 75, 18);
			ctx.fill();
			ctx.closePath();
		}//j
	}//i

	if(drawseven == true){
		BricksRow7();
	}//if

   function BricksRow7() {
    ctx.beginPath();
    ctx.rect(1, 216, 1138, 18);
  	ctx.fillStyle = white;
    ctx.fill();
  	ctx.closePath();
   }//row7

	if(BallX >0 &&BallX < 1140) {
		if(BallY + BallDisplacementY == 236) {
			if(drawseven = true) {
				BallDisplacementY = -BallDisplacementY;
				drawseven = false;

			}//if drawseven
				score+=100;
		}//if Y
	}//if X

}//Bricks()
Bricks();
