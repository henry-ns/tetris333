class Board {
  moviments = {
    [KEY_D]: () => this._hardDrop(),
    [KEY_Q]: () => game.playPause(),
  };

  constructor(sizes) {
    this.sizes = sizes;

<<<<<<< HEAD
    this._initMatrix();
=======
>>>>>>> a4baced... chore: merge changes
    this._nextPiece();
  }

<<<<<<< HEAD
  _initLine() {
    return Array.from({ length: this.sizes.width }).map(() => null);
=======
    this._initMatrix();
>>>>>>> a4baced... chore: merge changes
  }

  _initMatrix() {
    this.matrix = Array.from({ length: this.sizes.height }).map(() =>
      this._initLine()
    );
  }

  _initLine() {
    return Array.from({ length: this.sizes.width }).map(() => null);
  }

  _nextPiece() {
<<<<<<< HEAD
    const model = MODELS[0]; // random(MODELS));
    this.currentPiece = new Piece(model);
    this.phantomPiece = new Piece(model);

    this._fistLineWithoutBlocks = this._findFirstLineWithoutBlocks();
=======
    this.currentPiece = new Piece(game.random(MODELS));
>>>>>>> 6a55371... refact: now the game is a p5 instance
  }

  _addCurrentPiece() {
    this.currentPiece.forBlock(({ block }) => {
      const xIndex = block.x / BLOCK_SIZE;
      const yIndex = block.y / BLOCK_SIZE;

      this.matrix[yIndex][xIndex] = block;
    });

    this._checkCompleteLines();
  }

  _isLineFilled(line) {
    for (let block of line) {
      if (!block) {
        return false;
      }
    }

    return true;
  }

  _findFirstLineWithoutBlocks() {
    const { x, y, height, width } = this.currentPiece;

    const initalLine = y / BLOCK_SIZE + height;
    const initialColumn = x / BLOCK_SIZE;

    for (let yIndex = initalLine; yIndex < this.matrix.length; yIndex += 1) {
      const line = this.matrix[yIndex].slice(
        initialColumn,
        initialColumn + width
      );

      for (let block of line) {
        if (block) {
          return yIndex;
        }
      }
    }

    return this.sizes.height;
  }

  _hardDrop() {
    this.currentPiece.dropTo(this._fistLineWithoutBlocks);

    this._addCurrentPiece();
    this._nextPiece();
  }

  _checkCompleteLines() {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> a4baced... chore: merge changes
    const fullLineIndexes = [];

    this.matrix.forEach((line, index) => {
      if (this._isLineFilled(line)) {
        fullLineIndexes.push(index);
      }
<<<<<<< HEAD
    });

    const { length } = fullLineIndexes;

    if (length) {
      this.matrix.splice(fullLineIndexes[0], length);
      fullLineIndexes.forEach(() => this.matrix.unshift(this._initLine()));

      this.matrix.forEach((line, yIndex) =>
        line.forEach((block, xIndex) => {
          if (block) {
            block.x = xIndex * BLOCK_SIZE;
            block.y = yIndex * BLOCK_SIZE;
          }
        })
      );
    }
=======
    this.matrix.forEach((line) => {
      // check if the line is full of blocks
      // save line index if true
      // re init the line
    });

    // Down blocks for the nummber of removed lines
>>>>>>> 6a55371... refact: now the game is a p5 instance
=======
    });

    const { length } = fullLineIndexes;

    if (length) {
      this.matrix.splice(fullLineIndexes[0], length);
      fullLineIndexes.forEach(() => this.matrix.unshift(this._initLine()));

      this.matrix.forEach((line, yIndex) =>
        line.forEach((block, xIndex) => {
          if (block) {
            block.x = xIndex * BLOCK_SIZE;
            block.y = yIndex * BLOCK_SIZE;
          }
        })
      );
    }
>>>>>>> a4baced... chore: merge changes
  }

  _checkCollision() {
    let isCollide = false;

    this.currentPiece.forBlock(({ block }) => {
      const x = block.x / BLOCK_SIZE;
      const y = block.y / BLOCK_SIZE + 1;

      if (this.matrix[y] && this.matrix[y][x]) {
        isCollide = true;
      }
    });

    return isCollide;
  }

  _drawBackground() {
    let [x, y] = [0, 0];

<<<<<<< HEAD
    background(50);

    while (x < width) {
      line(x, 0, x, height);
      x += BLOCK_SIZE;
    }

    while (y < height) {
      line(0, y, width, y);
=======
    game.background(50);

    while (x < game.width) {
      game.line(x, 0, x, game.height);
      x += BLOCK_SIZE;
    }

    while (y < game.height) {
      game.line(0, y, game.width, y);
>>>>>>> 6a55371... refact: now the game is a p5 instance
      y += BLOCK_SIZE;
    }
  }

<<<<<<< HEAD
<<<<<<< HEAD
  _findFirstLineWithoutBlocks() {
    const { x, y, height, width } = this.currentPiece;

    const initalLine = y / BLOCK_SIZE + height;
    const initialColumn = x / BLOCK_SIZE;

    for (let yIndex = initalLine; yIndex < this.matrix.length; yIndex += 1) {
      const line = this.matrix[yIndex].slice(
        initialColumn,
        initialColumn + width
      );

      for (let block of line) {
        if (block) {
          return yIndex;
        }
      }
    }

    return this.sizes.height;
  }

=======
>>>>>>> beb9a31... :beetle: fix: some bugs by merge conflicts
  _showPhantomPiece() {
    this.currentPiece.forBlock(({ block, lineIndex }) => {
      const x = block.x;
      const y =
        (this._fistLineWithoutBlocks - this.currentPiece.height + lineIndex) *
        BLOCK_SIZE;

      fill(255, 255, 255, 50);
      rect(x, y, BLOCK_SIZE, BLOCK_SIZE);
    });
  }

=======
>>>>>>> 6a55371... refact: now the game is a p5 instance
  show() {
    this._drawBackground();

    this.matrix.forEach((line) => {
      line.forEach((block) => block && block.show());
    });

    this.currentPiece.show();
    this._showPhantomPiece();
  }

  update() {
    this.currentPiece.gravity();

    if (this._checkCollision() || this.currentPiece.checkBottomEdge()) {
      this._addCurrentPiece();
      this._nextPiece();
    }
  }

  movePiece(key) {
    const moviments = {
      ...this.currentPiece.moviments,
      ...this.moviments,
    }

    const moviment = moviments[key];

    if (moviment) {
      moviment();
    }

    this._fistLineWithoutBlocks = this._findFirstLineWithoutBlocks();
    return !!moviment;
  }
}
