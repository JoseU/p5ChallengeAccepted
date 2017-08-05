var actStrokeCap = "ROUND";
var actRandomSeed = 0;
var tileCount = 25;


function setup() {

  canvas = createCanvas(550, 550);
  smooth();

}

function draw() {

  var alfa = map(mouseY, 0, height, 255, 70);
  var colours = [color(68, 165, 237, alfa), color(86, 182, 194, alfa), color(36, 129, 138, alfa), color(191, 138, 207, alfa)];
  var colorLeft = colours[0];
  var colorRight = colours[1];

  var sizeRect = pow(mouseX, map(mouseX, 0, width, 0.5, 1.1));

  background(color("#e8e8e8"));
  noFill();
  strokeCap(actStrokeCap);
  randomSeed(actRandomSeed);
  noStroke();
  rectMode(CORNER);

  for (var gridY = 0; gridY < tileCount; gridY++) {

    for (var gridX = 0; gridX < tileCount; gridX++) {

      var posX = width / tileCount * gridX;
      var posY = height / tileCount * gridY;
      var toggle = parseInt(random(0, 2));
      if (toggle == 0) {
        stroke(colorRight);
        strokeWeight(mouseX/ (sizeRect*2));

        ellipse(posX , posY + height / tileCount, sizeRect + width / tileCount, sizeRect);
      }
      if (toggle == 1) {
        stroke(colorLeft);

        strokeWeight(mouseY/ (sizeRect*2));

        ellipse(posY + width / tileCount, posX , sizeRect, sizeRect + height / tileCount);
      }


    }
  }


  if (mouseIsPressed) {
    actRandomSeed = parseInt(random(100000));
  }
}
