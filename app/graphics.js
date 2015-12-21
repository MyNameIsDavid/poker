//NOTE: It is advisory to pull in the graphics library first to make sure the functions are loaded when they are called

//Get the canvas and it's context
//NOTE: The canvas must have an id of 'canvas'
var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d");

//The function fill sets the color (duh) with which any following drawing actions will be drawn
function fill(r, g, b){
  context.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
}

//The function arc draws an arc with the currently selected color (can be used to draw circles)
//NOTE: All Angles are in radians, a startAngle of 0 starts the arc at the "3 o' clock" position
function arc(x, y, radius, startAngle, endAngle){
  context.beginPath();
  context.arc(x, y, radius,  startAngle, endAngle);
  context.fill();
}

//The function circle draws an arc in the shape of a circle with the currently selected color
function circle(x, y, radius){
  arc(x, y, radius, 0, Math.PI * 2);
}

//The function rect draws a rectangle at the specified coordinates in the currently selected color
function rect(x, y, width, height){
  context.fillRect(x, y, width, height);
}

//The function background sets the background for the canvas (it actually just draws a rectangle over the entire size of the canvas with the specified color)
//TODO: make this adjust to origin transformations
function background(r, g, b){
  fill(r, g, b);
  rect(0, 0, canvas.width, canvas.height);
}

//The function ellipse draws an ellipse with the currently selected color
//NOTE: All Angles are in radians, a startAngle of 0 starts the elipse at the "3 o' clock" position
function ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, antiClockwise){
  context.beginPath();
  context.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, antiClockwise);
  context.fill();
}

//The function image draws the specified image at the given coordinates
function image(img, x, y){
  context.drawImage(img, x , y);
}
