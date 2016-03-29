
/*
Surin Rao  Apr 2 2016 Scrum 4 Atari
Super helpful: http://cheatsheetworld.com/programming/html5-canvas-cheat-sheet/
*/

//-------------------------------Variables -------------------------------------
/*
These are my global variables, I also created the colours
*/

var green = "#009933"; //googled the colours
var red = "#cc0000";
var blue = "#0000ff";
var orange = "#ff9900";
var purple = "#660066";
var white = "#ffffff";
var yellow ="#ffff00";
var pink = "#ff0066";
var indigo = "#4b0082"

var canvas = document.getElementById("myCanvas"); //this is the canvas
var ctx = canvas.getContext("2d");
var PaddleHeight = 12; //paddle height
var PaddleWidth = 100; //width
var StartingX = (canvas.width-PaddleWidth)/2; //where the paddle starts
var Right = false; //will it move
var Left = false;
var Displacement = 5; //how much it will move
var BallRadius = 10; //ball size
var BallX = 500;
var BallY = 400;
var BallDisplacementX = 3;
var BallDisplacementY = -2;

var brickWidth = 75;
var brickHeight = 20;
var brickRowCount = 15;
var brickColumnCount = 5;
var brickPadding = 5;
var brickOffsetTop = 100;
var brickOffsetLeft = 0;


var myArray = [blue,green,purple,red,orange]; //0,1,2,3,4


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

//------------------------------Make Paddle-------------------------------------
/*
THis is creating the actual paddle
*/
function Paddle() {
    ctx.beginPath();
    ctx.rect(StartingX, canvas.height-PaddleHeight, PaddleWidth, PaddleHeight);
    ctx.fillStyle = pink;
    ctx.fill();
    ctx.closePath();
}//Paddle

//------------------------------KeyPressed/Released-----------------------------
/*
I got the boolean Right and Left idea from this website:
I had a different way of doing it, but this makes the paddle move smoother,
My way was less smooth, but the paddle still moved:
(if... StartingX += Displacement) was my way but too choppy
*/

function KeyPressed(e) {
    if(e.keyCode == 39) {
        Right = true; //if the right arrow is pressed, sets it true
    }//if
    else if(e.keyCode == 37) {
        Left = true;
    }//else if
}//Pressed

function KeyReleased(e) {
    if(e.keyCode == 39) {
        Right = false; //if Released then false again
    }//if
    else if(e.keyCode == 37) {
        Left = false;
    }//else if
}//Released


//----------------------Drawing the Ball----------------------------------------

function Ball() {
	ctx.fillStyle = white;
	ctx.beginPath();
	ctx.arc(BallX, BallY, BallRadius, 0, Math.PI * 2, true);
	ctx.fill();
	ctx.closePath();
	BallX += BallDisplacementX;
	BallY += BallDisplacementY;
}//Ball

//------------------------Collision---------------------------------------------
/*
When the ball its a brick play this sound:
When the ball hits the paddle play this sound:
*/






//---------------------------------- Bricks-------------------------------------
/*
Used this idea for the link game we made a while ago
I then added a loop in each function for bricks so it would draw it multiple
times, Giving the illusion that it takes multiple hits to destroy a block,
(hopefully it works) I had  this as one big loop, but then I couldn't get the
colours to change per row, because it would just paint the bricks
*/


var brickRowCount = 5;
var brickColumnCount = 15;
var bricks = [];
for(var c=0; c<brickColumnCount; c++) {
    bricks[c] = [];
    for(var r=0; r<brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0 };
    }
}
function drawBricks() {
    for(var c=0; c<brickColumnCount; c++) {

        for(var r=0; r<brickRowCount; r++) {
            var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
            var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
            bricks[c][r].x = brickX;

            bricks[c][r].y = brickY;

            ctx.beginPath();
            ctx.rect(brickX, brickY, brickWidth, brickHeight);
						ctx.fillStyle;

            ctx.fill();
            ctx.closePath();
        }
    }
}



function Bricks() {


/*

		for(var i=0; i <1200; i+=80) {


				ctx.beginPath();
				for(k=100; k<=225; k+=25) {

				ctx.fill();
				ctx.rect(i, k, 75, 20);

				ctx.fillStyle = purple;
				ctx.closePath();

		}//i
	}//k
*/

    for(var i=0; i<1200; i +=76) {

        BricksRow1();
        BricksRow2();
        BricksRow3();
        BricksRow4();
        BricksRow5();
        BricksRow6();
			  BricksRow7();

    } // for loop i

    function BricksRow1() {
        for(var TimesHit =0; TimesHit < 4; TimesHit++) {
            for(var k=100; k< 120; k +=20) {
                ctx.beginPath();
                ctx.rect(i, k,  75, 18);
                ctx.fillStyle = red;
                ctx.fill();
                ctx.closePath();
            } //for loop
        }//times hit
    } //row1

    function BricksRow2() {
        for(var TimesHit =0; TimesHit < 3; TimesHit++) {
            for(var k=120; k< 149; k +=20) {
                ctx.beginPath();
                ctx.rect(i, k, 75, 18);
                ctx.fillStyle = orange;
                ctx.fill();
                ctx.closePath();
            }//for
        }//times hit
    }//row2

    function BricksRow3() {
        for(var TimesHit =0; TimesHit < 2; TimesHit++) {
            for(var k=140; k< 160; k +=20) {
                ctx.beginPath();
                ctx.rect(i, k, 75, 18);
                ctx.fillStyle = yellow;
                ctx.fill();
                ctx.closePath();
            }//for k
        }//times hit
     }//row3

    function BricksRow4() {
         for(var TimesHit =0; TimesHit < 2; TimesHit++) {
            for(var k=160; k< 180; k +=20) {
                ctx.beginPath();
                ctx.rect(i, k, 75, 18);
                ctx.fillStyle = green;
                ctx.fill();
                ctx.closePath();
            }//for k
        }//times hit
     }//row4

     function BricksRow5() {
            for(var k=180; k< 200; k +=20) {
                ctx.beginPath();
                ctx.rect(i, k, 75, 18);
                ctx.fillStyle = blue;
                ctx.fill();
             		ctx.closePath();
            }//for k
     }//row5
		 function BricksRow6() {
                ctx.beginPath();
                ctx.rect(i, 200, 75, 18);
                ctx.fillStyle = indigo;
                ctx.fill();
             		ctx.closePath();

     }//row6

     function BricksRow7() {
            ctx.beginPath();
            ctx.rect(532.5, 350, 75, 18);
            ctx.fillStyle = white;
            ctx.fill();
            ctx.closePath();
     }//row7

}//Bricks()

//------------------Colliding with Outer Box------------------------------------
function BoxCollision() {
	if (BallX + BallDisplacementX > 1140 || BallX + BallDisplacementX < 0) {
		BallDisplacementX = -BallDisplacementX;
	}

	if (BallY + BallDisplacementY < 0) {
		BallDisplacementY = -BallDisplacementY;
	}

}//BoxCollision

//----------------Colliding with the Paddle-------------------------------------
function PaddleCollision() {
	if (BallY + BallDisplacementY > 582) {
		if (BallX > StartingX && BallX < StartingX + PaddleWidth) {
				BallDisplacementY = -0.85*BallDisplacementY;
		} //nested
	}//if
}//PaddleCollision

//---------------------------Moving the Paddle----------------------------------
/*
This is when the key is pressed, it makes the varible true,
then if its true then the paddle will move
*/

function Move() {

    if(Right == true) {
				if(StartingX < 1040) {
        	StartingX += Displacement;
    		} //if
		}//else if right

    else if(Left == true) {
				if(StartingX > 0) { //nested if statement
					StartingX -= Displacement;

    		} //if
		}//else if left

} //Move

function clear() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}

//---------------------------Draw everything all functions----------------------
function collisionDetection() {

			if(BallY + BallDisplacementY==218 ) {
			BallDisplacementY = -2*BallDisplacementY;

		}
}
function draw() {

		clear();

	 	Background(); //sequential so need to draw this first
    Paddle();
		BoxCollision();
		PaddleCollision();
    Bricks();
collisionDetection();

		Ball(); //sequential

    Move();






		if(BallY > 600) {
			alert("GAME OVER");
			location.reload(); //this reloads the page http://www.w3schools.com/jsref/met_loc_reload.asp

		}

}//draw



window.addEventListener("keydown", KeyPressed,true);
window.addEventListener("keyup", KeyReleased,true);
setInterval(draw,15);
