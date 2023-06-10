let angle = 0;
let anchorX = 0;
let anchorY = 0;
const heightLimit = 150;
const numberOfLayers = 75;
const incrementSize = heightLimit / numberOfLayers;

const draw = (p5) => {
  p5.frameRate(30);
  p5.textAlign(p5.CENTER, p5.CENTER);
  p5.textStyle(p5.ITALIC);
  p5.textSize(64 * 3);
  p5.strokeWeight(5);

  p5.translate(p5.width / 2, p5.height / 2);
  p5.background("#1b1b1b");

  let waveHeight = p5.map(p5.sin(angle), -1, 1, 0, heightLimit);

  for (
    let layerHeight = 0;
    layerHeight <= waveHeight;
    layerHeight += incrementSize
  ) {
    let textX;
    let textY;

    if (!anchorX || dontFollow) {
      textX = 0;
    } else if (anchorX > 0) {
      textX = p5.map(layerHeight, 0, heightLimit, 0, anchorX);
    } else {
      textX = p5.map(-layerHeight, -heightLimit, 0, anchorX, 0);
    }

    if (!anchorY || dontFollow) {
      textY = 0 - layerHeight;
    } else if (anchorY > 0) {
      textY = p5.map(layerHeight, 0, heightLimit, 0, anchorY);
    } else {
      textY = map(-layerHeight, -heightLimit, 0, anchorY, 0);
    }

    p5.push();

    const isLastStep = layerHeight + incrementSize > waveHeight;

    if (isLastStep) {
      p5.stroke("white");
      p5.fill("white");
    } else {
      const opacity = p5.map(layerHeight, 0, heightLimit, 0.25, 1);

      p5.stroke(`rgba(255, 255, 255, ${opacity})`);
    }

    p5.text("echo", textX, textY);

    p5.pop();
  }

  angle += 0.1;
};

export default draw;
