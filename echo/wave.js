function draw(p5, input = {}) {
  p5.background("#1b1b1b");
  p5.stroke("#ffffff");
  p5.fill("#1b1b1b");

  const numberOfLayers = input.layers || 75;
  const numberOfWaves = 0.75;

  for (let index = 0; index < numberOfLayers; index++) {
    const fromColor = p5.color("#ffffff");
    const toColor = p5.color("#1b1b1b");
    const percent = p5.map(index, 0, numberOfLayers - 1, 0, 1);
    const layerColor = p5.lerpColor(fromColor, toColor, percent);

    p5.fill(layerColor);

    // compute the x position
    const posX = p5.map(
      index,
      0,
      numberOfLayers - 1,
      p5.width * -0.1,
      p5.width * 0.55
    );

    // compute the y position along the wave
    const waveHeight = p5.height * 0.075;
    const stackOffset = p5.map(
      index,
      0,
      numberOfLayers - 1,
      0,
      p5.TWO_PI * numberOfWaves
    );
    const angle = Math.sin(p5.frameCount * 0.08 + stackOffset);
    const posY =
      p5.map(angle, -1, 1, -waveHeight * 2, waveHeight) + p5.height / 2;

    p5.text("echo", posX, posY);
  }
}

export default { draw };
