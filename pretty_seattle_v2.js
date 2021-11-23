
var pickAColor = document.getElementById("pick_a_color")
var square = document.getElementById("drawing_seattle");
var myCanvas = square.getContext("2d");
var mouseState = false;
var xi;
var yi;

myCanvas.fillStyle='#FBF9D8';
myCanvas.fillRect(0,0,square.width,square.height);

square.addEventListener("mousedown", startDrawingMouse);
square.addEventListener("mousemove",moveMouse);
square.addEventListener("mouseup", stopMouse);

function startDrawingMouse(evento){
		mouseState = true;
		xi = evento.layerX;
		yi = evento.layerY;
}

function moveMouse(evento){
	var xf = evento.layerX;
	var yf = evento.layerY;
	if(mouseState){
		drawingLine(pickAColor.value, xi, yi, xf, yf, myCanvas);
		xi = xf;
    	yi = yf;
	}
}

function stopMouse(){
	mouseState = false;
}

function drawingLine(color, x1, y1, x2, y2, canvas){
	canvas.beginPath();
	canvas.strokeStyle = color;
	canvas.lineWidth = "3"
	canvas.moveTo(x1,y1);
	canvas.lineTo(x2,y2);
	canvas.stroke();
	canvas.closePath();
}

document.getElementById('clear').addEventListener('click', function() {
          myCanvas.clearRect(0, 0, square.width, square.height);
          myCanvas.fillStyle='#FBF9D8';
			myCanvas.fillRect(0,0,square.width,square.height);
        }, false);




