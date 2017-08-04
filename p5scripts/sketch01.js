// Pallete colours

// color: #7a7979; gris
// color: #44A5ED; azul
// color: #BF8ACF; morado
// color: #56b6c2; turquesa
// color: #D8B7AD; rosado
// color: #9f4848; rojo
// color: #31B0BD; turquesa 2
// color: #3b3b3b; gris

function setup() {
  var canvas = createCanvas(550, 550);
  canvas.parent('sketchHolder01');
  smooth();
}

function draw() {

  var alfa = map(mouseX, 0, width, 70, 200);
  var colours = [color(49, 176, 189, alfa), color(68, 165, 237, alfa), color(36, 129, 138, alfa)];



  stroke(49);
  strokeCap(ROUND);
  noFill();
  background(color("#e8e8e8"));
  translate(width / 2, height / 2);

  var circleResolution = map(mouseY, 0, height, 2, 80);
  var radius = mouseX - width / 2 + 0.5;
  var angle = TWO_PI / circleResolution;


  strokeWeight(mouseX / 30);


  beginShape();
  for (var i = 0; i < circleResolution; i++) {
    stroke(colours[i % 3]);
    var x = cos(angle * i) * radius;
    var y = sin(angle * i) * radius;
    line(0, 0, x, y);
    vertex(x, y);
  }
  endShape(CLOSE);




}
