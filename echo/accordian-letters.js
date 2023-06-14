let button = null;
let phrase = "echo";
let angle = 0;
let randomLetterSizePercent = null;
let randomHeightLimitPercent = null;

function setup(p5) {
  randomLetterSizePercent = p5.random(20, 150) / 100;
  randomHeightLimitPercent = p5.random(20, 60) / 100;
}

function draw(p5) {
  p5.background("#1b1b1b");
  p5.stroke("#ffffff");

  const letterSize = (p5.width / phrase.length) * randomLetterSizePercent;
  const phraseSize = letterSize * phrase.length;
  const heightLimit = p5.height * randomHeightLimitPercent;
  const numberOfLayers = 30;
  const incrementSize = heightLimit / numberOfLayers;

  function letterStack(char, index, letterSize) {
    let step = index;
    let waveHeight = p5.map(p5.sin(angle + step), -1, 1, 0, heightLimit);
    let textX = letterSize * index;
    let baselineY = p5.height * 0.5;

    for (let layerIndex = 0; layerIndex < numberOfLayers; layerIndex++) {
      let textY =
        baselineY - p5.map(layerIndex, 0, numberOfLayers - 1, 0, waveHeight);

      p5.push();

      const isLastStep = layerIndex === numberOfLayers - 1;

      // colorMode(HSL);

      // fill(map(layerIndex, 0, numberOfLayers - 1, 0, 360), 100, 50)

      if (isLastStep) {
        p5.stroke("white");
        p5.fill("white");
      } else {
        const opacity = p5.map(layerIndex, 0, numberOfLayers - 1, 0.25, 1);

        p5.stroke(`rgba(255, 255, 255, ${opacity})`);
        // stroke('white')
      }

      p5.text(char, textX, textY);

      p5.pop();
    }
  }

  p5.translate((p5.width - phraseSize) / 2, 0);

  phrase.split("").forEach((char, index) => {
    letterStack(char, index, letterSize);
  });

  angle += 0.1;
}

export default { setup, draw };
