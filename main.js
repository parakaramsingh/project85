//Create a reference for canvas 
canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
greencar_width=75;
greencar_height=100;
greencar_x=5;
greencar_y=225;
//Give specific height and width to the car image

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.

function add() {
background_imgTag=new Image();
background_imgTag.onload=uploadBackground
background_imgTag.src=background_image;
greencar_imgTag=new Image();
greencar_imgTag.onload=uploadgreencar;
greencar_imgTag.src=greencar_image;
	//upload car, and background images on the canvas.
}

function uploadBackground() {
	//Define function ‘uploadBackground’
ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);

}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
ctx.drawImage(greencar_imgTag,greencar_x,greencar_y,greencar_width,greencar_height);
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}
function up()
{
    if(greencar_y >=0)
    {
        greencar_y= greencar_y-10;
        console.log("when up arrow is presed,x="+greencar_x+"|y="+greencar_y);
        uploadBackground();
        uploadgreencar();
    }
}
function down()
{
    if(greencar_y <=500)
    {
        greencar_y= greencar_y+10;
        console.log("when down arrow is presed,x="+greencar_x+"|y="+greencar_y);
        uploadBackground();
        uploadgreencar();
    }
}
function left()
{
    if(greencar_x >=0)
    {
        greencar_x= greencar_x-10;
        console.log("when up arrow is presed,x="+greencar_x+"|y="+greencar_y);
        uploadBackground();
        uploadgreencar();
    }
}
function right()
{
    if(greencar_x <=700)
    {
        greencar_x= greencar_x+10;
        console.log("when right arrow is presed,x="+greencar_x+"|y="+greencar_y);
        uploadBackground();
        uploadgreencar();
    }
}


