// primer sketch
function setup() {
  var canvas = createCanvas(400, 600);
  canvas.parent('sketchHolder01');

  background(51);
  noStroke();

}

function draw() {
  background(255,12);
  drawTarget(mouseX, mouseY*0.4, 200, 4);

}

function drawTarget(xloc, yloc, size, num) {
  var grayvalues = 255/num;
  var steps = size/num;
  for (var i = 0; i < num; i++) {
    fill(i*grayvalues, i*40);

    rect(xloc, yloc, size - i*steps, size - i*steps);
  }
}
