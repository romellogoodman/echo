import "./style.css";

import accordian from "./echo/accordian";

let can;
let publicSans;

function preload(p5) {
  publicSans = p5.loadFont("./public-sans/PublicSans-BoldItalic.ttf");
}

function setup(p5) {
  const canvasEl = document.querySelector("#canvas-wrapper");

  can = p5.createCanvas(canvasEl.clientWidth, canvasEl.clientHeight);
  can.parent(canvasEl);

  p5.textFont(publicSans);
  accordian.setup(p5);
}

let sketchIndex = 0;
const sketches = ["red", "blue", "yellow", "black"];

function draw(p5) {
  accordian.draw(p5);
}

new p5((sketch) => {
  sketch.preload = () => {
    preload(sketch);
  };

  sketch.setup = () => {
    setup(sketch);
  };

  sketch.draw = () => {
    draw(sketch);
  };

  sketch.mouseClicked = () => {
    sketchIndex = (sketchIndex + 1) % sketches.length;
  };

  sketch.windowResized = () => {
    const canvasEl = document.querySelector("#canvas-wrapper");

    sketch.resizeCanvas(canvasEl.clientWidth, canvasEl.clientHeight);
  };
});
