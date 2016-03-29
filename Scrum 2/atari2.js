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

//------------------------------Make Background---------------------------------
/*
This is the background on the canvas,
*/
function Background() {
	ctx.beginPath();
	ctx.rect(0, 0, 1140, 600);
	ctx.fillStyle = "black";
	ctx.fill();
}//Background


//------------------------Collision---------------------------------------------
/*
When the ball its a brick play this sound:
When the ball hits the paddle play this sound:
*/







//---------------------Clearing ------------------------------------------------
/*
This is for clearing teh canvas so we don't have any "residue" (ball stays)
*/
function clear() {
	ctx.clearRect(0, 0, 1140, 600);
}//clear

//---------------------------Draw the Score on the Canvas-----------------------
/*
This will draw the score in the top left of the canvas in pink size 20
got from http://goo.gl/rTL3Yo
*/
function Score() {
	ctx.font = "20px Arial";
	 ctx.fillStyle = pink;
	 ctx.fillText("Score: "+score, 0, 20);

}

//---------------------------Draw everything all functions----------------------
/*
This is drawing everything
*/
function draw() {

		clear();


		Score();
		if(score==1000){
 		 alert("WIn")
		 location.reload();
 	 }
}//draw
draw();


setInterval(draw,8);
