// primer sketch
function setup() {
  var canvas = createCanvas(400, 600);
  canvas.parent('sketchHolder01');

  background(51);
  noStroke();

}

function draw() {
  drawTarget(mouseX, height*0.4, 200, 4);
  drawTarget(width*0.5, height*0.5, 300, 10);
  drawTarget(width*0.75, height*0.3, 120, 6);
}

function drawTarget(xloc, yloc, size, num) {
  var grayvalues = 255/num;
  var steps = size/num;
  for (var i = 0; i < num; i++) {
    fill(i*grayvalues);
    ellipse(xloc, yloc, size - i*steps, size - i*steps);
  }
}
