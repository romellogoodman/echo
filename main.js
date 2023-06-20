import "./style.css";

import accordian from "./echo/accordian";
import accordianLetters from "./echo/accordian-letters";
import bounce from "./echo/bounce";
// TODO: Refactor and add
// import loop from "./echo/loop";
import wave from "./echo/wave";

// Taken From: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
const shuffleArray = (array) => {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

let can;
let layers = 75;
let publicSans;
let canvasScale = 1;
let sketchIndex = 0;
let sketches = shuffleArray([accordian, accordianLetters, bounce, wave]);
const defaultFontSize = 64 * 3;

new p5((sketch) => {
  sketch.preload = () => {
    publicSans = sketch.loadFont("./public-sans/PublicSans-BoldItalic.ttf");
  };

  sketch.setup = () => {
    const canvasEl = document.querySelector("#canvas-wrapper");

    can = sketch.createCanvas(canvasEl.clientWidth, canvasEl.clientHeight);
    can.parent(canvasEl);

    sketch.frameRate(30);
    sketch.textFont(publicSans);
    sketch.textAlign(sketch.CENTER, sketch.CENTER);
    sketch.textStyle(sketch.BOLDITALIC);
    sketch.strokeWeight(5);

    if (sketches[sketchIndex].setup) sketches[sketchIndex].setup(sketch);
  };

  sketch.draw = () => {
    sketch.textSize(defaultFontSize * canvasScale);

    sketches[sketchIndex].draw(sketch, { canvasScale, layers });
  };

  sketch.mousePressed = () => {
    sketchIndex = (sketchIndex + 1) % sketches.length;

    if (sketches[sketchIndex].setup) sketches[sketchIndex].setup(sketch);
  };

  sketch.windowResized = () => {
    const canvasEl = document.querySelector("#canvas-wrapper");

    if (canvasEl.clientWidth < 600) {
      canvasScale = 0.5;
    } else {
      canvasScale = 1;
    }

    sketch.resizeCanvas(canvasEl.clientWidth, canvasEl.clientHeight);
  };
});
