let phrase = "echo";

const draw = (p5, input = {}) => {
  p5.translate(p5.width / 2, p5.height / 2);
  p5.background("#1b1b1b");

  const numberOfLayers = input.layers || 75;
  const maxHeight = p5.height * 0.4;
  const angle = p5.frameCount * 0.075;

  for (let letter = 0; letter < phrase.length; letter++) {
    const letterHeight = p5.map(p5.sin(angle + letter), -1, 1, 0, maxHeight);
    const letterX = p5.map(letter, 0, phrase.length, -100, 200);

    for (let layer = 0; layer < numberOfLayers; layer++) {
      p5.push();

      const layerHeight = p5.map(layer, 0, numberOfLayers - 1, 0, letterHeight);

      // Fill in the last layer
      if (layer === numberOfLayers - 1) {
        p5.stroke("#ffffff");
        p5.fill("#ffffff");
      } else {
        const opacity = p5.map(layer, 0, numberOfLayers, 0.1, 0.5);

        p5.stroke(`rgba(255, 255, 255, ${opacity})`);
      }

      p5.text(phrase.charAt(letter), letterX, 0 - layerHeight);

      p5.pop();
    }
  }
};

export default { draw };
