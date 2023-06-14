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

const number = 20;
const list = [];
const sizeX = 320;
const sizeY = 80;
// Starting position of shape
let posX, posY;
// Speed of the shape
let speedX = 3;
let speedY = 3;
// Left or Right
let dirX = 1;
// Top to Bottom
let dirY = 1;

const draw = (p5) => {
  p5.background("#1b1b1b");
  p5.stroke("#ffffff");
  p5.fill("#1b1b1b");

  list.forEach((item) => {
    if (!item) return;

    // TODO: for debugging sizeX and sizeY
    // p5.rect(item.x - sizeX / 2, item.y - sizeY / 2, sizeX, sizeY);
    p5.text("echo", item.x, item.y);
  });

  addToList(list, number, { x: posX, y: posY });

  if (!posX || !posY) {
    posX = p5.width / 2;
    posY = p5.height / 2;
  }

  // Update the position of the shape
  posX = posX + speedX * dirX;
  posY = posY + speedY * dirY;

  // Test to see if the shape exceeds the boundaries of the screen
  // If it does, reverse its direction by multiplying by -1
  if (posX > p5.width - sizeX / 2 || posX < sizeX / 2) dirX *= -1;
  if (posY > p5.height - sizeY / 2 || posY < sizeY / 2) dirY *= -1;
};

export default { draw };
