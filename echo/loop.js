// ???
const maxFrames = 1000;
const numbEchos = 15;
const list = new Array(numbEchos).fill(null);

function addEcho(x, y) {
  if (list.length === numbEchos) list.shift();

  const pos = {
    x,
    y,
  };

  list.push(pos);
}

function draw(p5) {
  p5.background("#1b1b1b");
  p5.stroke("#ffffff");
  p5.fill("#1b1b1b");

  // Glitch the frames
  if (p5.frameCount % (maxFrames / 2 + numbEchos) < maxFrames / 2) {
    // Cut frames in half
    if (p5.frameCount % 2 === 0) {
      // sin(frequency) * amplitude
      let x = p5.sin(p5.frameCount / 25) * 100;
      let y = p5.cos(p5.frameCount / 50) * 200;

      addEcho(p5.width / 2 + x, p5.height / 2 + y);
    }
  } else {
    list.shift();
  }

  list.forEach((item, index) => {
    if (!item) return;

    p5.text("echo", item.x, item.y);
  });
}

export default { draw };
