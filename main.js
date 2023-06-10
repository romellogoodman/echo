import "./style.css";

import accordian from "./echo/accordian";

let can;

function setup(p5) {
  const canvasEl = document.querySelector("#canvas-wrapper");

  can = p5.createCanvas(canvasEl.clientWidth, canvasEl.clientHeight);
  can.parent(canvasEl);

  console.log(canvasEl);
}

let sketchIndex = 0;
const sketches = ["red", "blue", "yellow", "black"];

function draw(p5) {
  // p5.background("pink");

  const numberOfLayers = sketches.length;

  for (let bgIndex = 0; bgIndex < 10; bgIndex++) {
    // const bgWidth =
    //   p5.width - p5.map(bgIndex, 0, numberOfLayers, p5.width * 0.1, p5.width);
    // const bgHeight =
    //   p5.height -
    //   p5.map(bgIndex, 0, numberOfLayers, p5.height * 0.9, p5.height);
    // const c1 = sketchIndex % 2 === 0 ? "white" : "black";
    // const c2 = sketchIndex % 2 === 0 ? "black" : "white";
    // p5.fill(bgIndex % 2 === 0 ? c1 : c2);
    // p5.rect(0, 0, bgWidth, bgHeight);
  }

  // p5.fill(sketches[sketchIndex]);

  // p5.ellipse(p5.mouseX, p5.mouseY, 80, 80);

  accordian(p5);
}

new p5((sketch) => {
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
