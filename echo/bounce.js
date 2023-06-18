let list = [];
// bounds of the phrase
const boundsX = 430;
const boundsY = 180;
// Starting position of shape
let posX, posY;
// Speed of the shape
let speedX = 3;
let speedY = 3;
// Left or Right
let dirX = 1;
// Top to Bottom
let dirY = 1;

const addToList = (list, limit, item) => {
  const listLength = list.length;

  if (listLength > limit) {
    list.splice(0, listLength - limit);
  }

  if (listLength === limit - 1) {
    list.shift();
  }

  list.push(item);
};

const setup = (p5) => {
  posX = p5.width / 2;
  posY = p5.height / 2;

  dirX = Math.random() * 10 > 5 ? 1 : -1;
  dirY = Math.random() * 10 > 5 ? 1 : -1;

  list = [];
};

const draw = (p5, input = {}) => {
  p5.background("#1b1b1b");
  p5.stroke("#ffffff");
  p5.fill("#1b1b1b");

  const numberOfLayers = input.layers || 75;

  list.forEach((item) => {
    if (!item) return;

    // Note: For debugging boundsX and boundsY
    // p5.rect(item.x - boundsX / 2, item.y - boundsY / 2, boundsX, boundsY);
    p5.text("echo", item.x, item.y);
  });

  addToList(list, numberOfLayers, { x: posX, y: posY });

  // Update the position of the shape
  posX = posX + speedX * dirX;
  posY = posY + speedY * dirY;

  // If the shape exceeds the boundaries of the screen reverse its direction by multiplying by -1
  if (posX > p5.width - boundsX / 2 || posX < boundsX / 2) dirX *= -1;
  if (posY > p5.height - boundsY / 2 || posY < boundsY / 2) dirY *= -1;
};

export default { setup, draw };
