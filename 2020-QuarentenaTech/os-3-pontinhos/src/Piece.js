class Piece {
<<<<<<< HEAD
<<<<<<< HEAD
  constructor({ x = width / 2, y = 0, initialShape, color } = {}) {
    this.x = x;
=======
  constructor({
    x = width / 2,
    y = 0,
    shape,
    color,
    pieceWidth,
    pieceHeight,
  } = {}) {
    this.x = x - BLOCK_SIZE;
>>>>>>> 79767dd... refact: added the piece width and height to piece class
    this.y = y;

    this.pieceWidth = pieceWidth;
    this.pieceHeight = pieceHeight;
=======
  constructor({ shape, color, ...size }) {
    this.x = width / 2 - BLOCK_SIZE;
    this.y = 0;

    this.width = size.width;
    this.height = size.height;
>>>>>>> df22f14... :hammer: refac: piece sizes

    this.color = color || this._randomColor();
<<<<<<< HEAD
    this.blocks = this._initBlocks(initialShape);

    this.size = 4;
=======
    this.blocks = this._initBlocks(shape);
>>>>>>> 521ba44... :sparkles: feat: anticlockwise rotate function
  }

  _randomColor() {
    function decToHex() {
      return Math.floor(random(255)).toString(16);
    }

    return `#${decToHex()}${decToHex()}${decToHex()}`;
  }

  _initBlocks(model) {
    const blocks = [];

    model.forEach((line, yIndex) => {
      const blockLine = [];

      line.forEach((item, xIndex) => {
        const block = item
          ? new Block({
              x: this.x + xIndex * BLOCK_SIZE,
              y: this.y + yIndex * BLOCK_SIZE,
              color: this.color,
            })
          : null;

        blockLine.push(block);
      });

      blocks.push(blockLine);
    });

    return blocks;
  }

  forBlock(callback, onlyNotNull = true) {
    this.blocks.forEach((line, lineIndex) =>
      line.forEach((block, index) => {
        (!onlyNotNull || block) && callback({ block, index, line, lineIndex });
      })
    );
  }

  moveHorizontally(direction = 1) {
    this.x += direction * BLOCK_SIZE;

    this.forBlock(({ block }) => {
      block.moveHorizontally(direction);
<<<<<<< HEAD
      //block.show();
=======
>>>>>>> 521ba44... :sparkles: feat: anticlockwise rotate function
    });
  }

  rotateClockwise() {
    this.height = [this.width, (this.width = this.height)][0];

    const { length } = this.blocks[0];
    const newMatrix = Array.from({ length }).map(() => []);

    this.forBlock(
      ({ block, index }) => newMatrix[index].unshift(block),
      false
    );

    this.blocks = newMatrix;

    this.forBlock(({ block, index, lineIndex }) => {
      block.x = this.x + index * BLOCK_SIZE;
      block.y = this.y + lineIndex * BLOCK_SIZE;
    });
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 79767dd... refact: added the piece width and height to piece class

    this.checkPieceInBoard();
=======
  }

  rotateAntiClockwise() {
    for (let i = 0; i < 3; i++) {
      this.rotateClockwise();
    }
>>>>>>> 521ba44... :sparkles: feat: anticlockwise rotate function
  }

  show() {
    this.forBlock(({ block }) => block.show());

    circle(this.x, this.y, 10);
    circle(this.x + this.width * BLOCK_SIZE, this.y, 10);
    circle(this.x, this.y + this.height * BLOCK_SIZE, 10);
    circle(
      this.x + this.width * BLOCK_SIZE,
      this.y + this.height * BLOCK_SIZE,
      10
    );
  }

  gravity() {
    this.y += BLOCK_SIZE;
    this.forBlock(({ block }) => block.gravity());
  }

  checkSideEdges() {
    if (this.x == 0) {
      //console.log("LEFT EDGE", this.x);
      return "l";
    }
    if (this.x + this.width * BLOCK_SIZE == width) {
      //console.log("RIGHT EDGE", this.x);
      return "r";
    }
  }

  checkPieceInBoard() {
    console.log(this.x + this.width * BLOCK_SIZE);

    if (this.x + this.width * BLOCK_SIZE > width) {
      this.moveHorizontally(-1);
      if (this.x + this.width * BLOCK_SIZE > width) {
        this.moveHorizontally(-1);
        if (this.x + this.width * BLOCK_SIZE > width) {
          this.moveHorizontally(-1);
        }
      }
    }
  }

  checkBottomEdge() {
    return this.y + this.height * BLOCK_SIZE === height;
  }
}
