// primer sketch
function setup() {
  var canvas = createCanvas(400, 600);
  canvas.parent('sketchHolder01');

  background(51);
  noStroke();
  noLoop();
}

function draw() {

  fill(23);
  rect(random(29), 0, 10, 400);

}
