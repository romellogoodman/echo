import "./style.css";

import accordian from "./echo/accordian";
import accordianLetters from "./echo/accordian-letters";
import bounce from "./echo/bounce";
import loop from "./echo/loop";
import wave from "./echo/wave";

let can;
let publicSans;
let sketchIndex = 2;
const sketches = [accordian, accordianLetters, bounce, loop, wave];

new p5((sketch) => {
  sketch.preload = (a) => {
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
    sketch.textSize(64 * 3);
    sketch.strokeWeight(5);

    if (sketches[sketchIndex].setup) sketches[sketchIndex].setup(sketch);
  };

  sketch.draw = () => {
    sketches[sketchIndex].draw(sketch);
  };

  sketch.mouseClicked = () => {
    sketchIndex = (sketchIndex + 1) % sketches.length;

    if (sketches[sketchIndex].setup) sketches[sketchIndex].setup(sketch);
  };

  sketch.windowResized = () => {
    const canvasEl = document.querySelector("#canvas-wrapper");

    sketch.resizeCanvas(canvasEl.clientWidth, canvasEl.clientHeight);
  };
});
