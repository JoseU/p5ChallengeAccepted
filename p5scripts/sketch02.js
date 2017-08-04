// Pallete colours

// color: #7a7979; gris
// color: #44A5ED; azul
// color: #BF8ACF; morado
// color: #56b6c2; turquesa
// color: #D8B7AD; rosado
// color: #9f4848; rojo
// color: #31B0BD; turquesa 2
// color: #3b3b3b; gris

var actStrokeCap = "ROUND";
var actRandomSeed = 0;
var tileCount = 25;


var alfa = 40;



function setup() {
  var canvas = createCanvas(550, 550);
  canvas.parent('sketchHolder02');
  smooth();

}

function draw() {

  alfa = map(mouseY, 0, height, 255, 20);
  var colours = [color(49, 176, 189, alfa), color(68, 165, 237, alfa), color(36, 129, 138, alfa), color(191, 138, 207, alfa)];



  var colorLeft = colours[0];
  var colorRight = colours[1];

  background(color("#e8e8e8"));
  smooth();
  noFill();
  strokeCap(actStrokeCap);
  randomSeed(actRandomSeed);
  noStroke();

  translate(-25, -25);

  var sizeRect = map(mouseX, 0, width, 0, width / 10)





  for (var gridY = 0; gridY < tileCount; gridY++) {

    for (var gridX = 0; gridX < tileCount; gridX++) {

      var posX = width / tileCount * gridX;
      var posY = height / tileCount * gridY;

      var toggle = parseInt(random(0, 2));



      if (toggle == 0) {
        fill(colorLeft);
        strokeWeight(mouseX / 50);

        rect(posX + width / tileCount, posY + height / tileCount, sizeRect, sizeRect);
      }
      if (toggle == 1) {
        fill(colorRight);
        strokeWeight(mouseY / 50);

        rect(posY + width / tileCount, posX + height / tileCount, sizeRect, sizeRect);
      }


    }
  }


  if (mouseIsPressed) {
    actRandomSeed = parseInt(random(100000));
  }
}

function keyTyped() {
  if (key === '1') {
    actStrokeCap = ROUND;
  };

  if (key === '2') {
    actStrokeCap = SQUARE;
  };
  if (key === '3') {
    actStrokeCap = PROJECT;
  };
  if (key === '4') {
    strokeWeight(mouseX || mouseY / 40);
  }
}
