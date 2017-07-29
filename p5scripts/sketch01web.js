// primer sketch
function setup() {
  createCanvas(400, 600);
  background(51);
  noStroke();

}

function draw() {
  background(255,12);

push();
  rotate((320/mouseX)*TWO_PI);
  drawTarget(mouseX, mouseY, 200, mouseY*4);
  resetMatrix();

}

function drawTarget(xloc, yloc, size, num) {
  var grayvalues = 255/num;
  var steps = size/num;
  for (var i = 0; i < num; i++) {
    fill(i*grayvalues, i*40);

    rect(xloc, yloc, size - i*steps, size - i*steps);
  }
}
