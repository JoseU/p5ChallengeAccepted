// primer sketch
function setup() {
  var canvas = createCanvas(400, 600);
  canvas.parent('sketchHolder01');

  background(51);
  noStroke();

}

function draw() {
  drawTarget(winMouseX, winMouseY, 200, 4);
  drawTarget(winMouseX*0.5, winMouseY*0.5, 300, 10);
  drawTarget(winMouseX*0.75, winMouseY*0.3, 120, 6);
}

function drawTarget(xloc, yloc, size, num) {
  var grayvalues = 255/num;
  var steps = size/num;
  for (var i = 0; i < num; i++) {
    fill(i*grayvalues, i*50);
    ellipse(xloc, yloc, size - i*steps, size - i*steps);
  }
}
