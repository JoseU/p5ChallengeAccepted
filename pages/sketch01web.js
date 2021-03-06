// primer sketch
function setup() {
  createCanvas(400, 600);
  background(51);
  noStroke();

}

function draw() {
  drawTarget(mouseX, mouseY, 200, 4);
  drawTarget(mouseX*0.5, mouseY*0.5, 300, 10);
  drawTarget(mouseX*0.75, mouseY*0.3, 120, 6);
}

function drawTarget(xloc, yloc, size, num) {
  var grayvalues = 255/num;
  var steps = size/num;
  for (var i = 0; i < num; i++) {
    fill(i*grayvalues, i*50);
    ellipse(xloc, yloc, size - i*steps, size - i*steps);
  }
}
