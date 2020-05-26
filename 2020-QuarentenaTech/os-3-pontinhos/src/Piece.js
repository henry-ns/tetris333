class Piece {
<<<<<<< HEAD
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
=======
  moviments = {
    [game.LEFT_ARROW]: () => {
      this.moveHorizontally(-1);
    },
    [game.RIGHT_ARROW]: () => {
      this.moveHorizontally();
    },
    [game.UP_ARROW]: () => {
      this.rotateClockwise();
    },
    [KEY_A]: () => {
      this.rotateClockwise();
    },
    [KEY_S]: () => {
      this.rotateAntiClockwise();
    },
  };

<<<<<<< HEAD
>>>>>>> fd288d9... :hammer: refac: inset piece into the board
  constructor({ shape, color, ...size }) {
<<<<<<< HEAD
=======
  constructor({ shape, color, ...size } = {}) {
>>>>>>> b321553... :sparkles: feat: show phantom pieace
    this.x = width / 2 - BLOCK_SIZE;
=======
    this.x = game.width / 2 - BLOCK_SIZE;
<<<<<<< HEAD
>>>>>>> 6a55371... refact: now the game is a p5 instance
    this.y = 0;
=======
    this.y = -2 * BLOCK_SIZE;
>>>>>>> 01c85a5... feat: end game check

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

  // TODO: Refactor: use map function
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

  updateBlocksPosition() {
    this.forBlock(({ block, index, lineIndex }) => {
      block.x = this.x + index * BLOCK_SIZE;
      block.y = this.y + lineIndex * BLOCK_SIZE;
    });
  }

  forBlock(callback, onlyNotNull = true) {
    this.blocks.forEach((line, lineIndex) =>
      line.forEach((block, index) => {
        (!onlyNotNull || block) && callback({ block, index, line, lineIndex });
      })
    );
  }

  /**
   * direction = 1  -> right
   * direction = -1 -> left
   */
  moveHorizontally(direction = 1) {
    if (this.checkSideEdges(direction)) {
      return;
    }

    this.x += direction * BLOCK_SIZE;

    this.forBlock(({ block }) => {
      block.moveHorizontally(direction);
<<<<<<< HEAD
      //block.show();
=======
>>>>>>> 521ba44... :sparkles: feat: anticlockwise rotate function
    });
  }

  dropTo(yPosition) {
    const y = (yPosition - this.height) * BLOCK_SIZE;
    
    this.y = y;
    this.updateBlocksPosition();
  }

  gravity() {
    this.y += BLOCK_SIZE;
    this.forBlock(({ block }) => block.gravity());
  }

  rotateClockwise() {
    this.height = [this.width, (this.width = this.height)][0];

    const { length } = this.blocks[0];
    const newMatrix = Array.from({ length }).map(() => []);

    this.forBlock(({ block, index }) => newMatrix[index].unshift(block), false);

    this.blocks = newMatrix;

<<<<<<< HEAD
    this.forBlock(({ block, index, lineIndex }) => {
      block.x = this.x + index * BLOCK_SIZE;
      block.y = this.y + lineIndex * BLOCK_SIZE;
    });
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 79767dd... refact: added the piece width and height to piece class

=======
    this.updateBlocksPosition();
<<<<<<< HEAD
    
>>>>>>> 4d2d27a... :hammer: refact: organizing classes
=======

>>>>>>> 03eef8d... :sparkles: feat: hard drop moviment
    this.checkPieceInBoard();
=======
  }

  // TODO: For refactor later
  rotateAntiClockwise() {
    for (let i = 0; i < 3; i++) {
      this.rotateClockwise();
    }
<<<<<<< HEAD
>>>>>>> 521ba44... :sparkles: feat: anticlockwise rotate function
=======
  }

  show() {
    this.forBlock(({ block }) => block.show());

    game.circle(this.x, this.y, 10);
    game.circle(this.x + this.width * BLOCK_SIZE, this.y, 10);
    game.circle(this.x, this.y + this.height * BLOCK_SIZE, 10);
    game.circle(
      this.x + this.width * BLOCK_SIZE,
      this.y + this.height * BLOCK_SIZE,
      10
    );
  }

<<<<<<< HEAD
  gravity() {
    this.y += BLOCK_SIZE;
    this.forBlock(({ block }) => block.gravity());
>>>>>>> 6a55371... refact: now the game is a p5 instance
  }

=======
>>>>>>> beb9a31... :beetle: fix: some bugs by merge conflicts
  checkSideEdges(direction) {
    const leftEdge = direction === -1 && this.x === 0;

    const rightEdge =
      direction === 1 && this.x + this.width * BLOCK_SIZE === game.width;

    return leftEdge || rightEdge;
  }

  // TODO: For refactor later
  checkPieceInBoard() {
    if (this.x + this.width * BLOCK_SIZE > game.width) {
      this.moveHorizontally(-1);
      if (this.x + this.width * BLOCK_SIZE > game.width) {
        this.moveHorizontally(-1);
        if (this.x + this.width * BLOCK_SIZE > game.width) {
          this.moveHorizontally(-1);
        }
      }
    }
  }

  checkBottomEdge() {
    return this.y + this.height * BLOCK_SIZE === game.height;
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
}
