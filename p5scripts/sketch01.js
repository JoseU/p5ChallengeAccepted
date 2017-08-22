// Pallete colours

// color: #7a7979; gris
// color: #44A5ED; azul
// color: #BF8ACF; morado
// color: #56b6c2; turquesa
// color: #D8B7AD; rosado
// color: #9f4848; rojo
// color: #31B0BD; turquesa 2
// color: #3b3b3b; gris
  var alfa =100;

function setup() {
  var canvas = createCanvas(550, 550);
  canvas.parent('sketchHolder01');
  smooth();
}

function draw() {

  var offsetWeight = 0;

  var colours = [color(49, 176, 189, alfa), color(68, 165, 237, alfa), color(36, 129, 138, alfa)];


  stroke(49);
  strokeCap(ROUND);
  noFill();
  background(color("#e8e8e8"));
  translate(width / 2, height / 2);

  var circleResolution = map(mouseY, 0, height, 80, 2);
  var radius = mouseX - width / 2;
  var angle = TWO_PI / circleResolution;


strokeCap(PROJECT);

  beginShape();



  for (var i = 0; i < circleResolution; i++) {
    alfa = map(mouseY, 0, height, 40, 220)+offsetWeight;


    stroke(colours[i % 3]);
    var x = cos(angle * i) * radius;
    var y = sin(angle * i) * radius;
    offsetWeight = pow(i, 0.81803398874988);

    var offsetWeight2 = (offsetWeight * 2) * -1;
    offsetWeight2 = offsetWeight2 + offsetWeight;

      strokeWeight(( radius / 30)- offsetWeight2*1.5);
    line(0, 0, x, y);
  //  vertex(x, y);
  }
  endShape(CLOSE);




}
