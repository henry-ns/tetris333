<<<<<<< HEAD
let board;
let lastKeyPressed;
let interval;
=======
let gameSketch = function (p) {
  let board;
  let lastKeyPressed;
<<<<<<< HEAD
>>>>>>> 6a55371... refact: now the game is a p5 instance
=======
  let pauseLock = false;
  let interval;
>>>>>>> a4baced... chore: merge changes

  p.setup = function () {
    p.createCanvas(BOARD_X * BLOCK_SIZE, BOARD_Y * BLOCK_SIZE);

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  piece = new Piece({
    initialShape: SHAPES[4],// random(SHAPES),
    x: width / 2 - BLOCK_SIZE,
    y: 0,
  });
=======
  piece = new Piece(random(MODELS));
>>>>>>> 98c5595... refact: changing how to storage each piece data

=======
>>>>>>> fd288d9... :hammer: refac: inset piece into the board
  board = new Board({
    width: BOARD_X,
    height: BOARD_Y,
  });

<<<<<<< HEAD
<<<<<<< HEAD
  moviments = {
<<<<<<< HEAD
<<<<<<< HEAD
    ArrowLeft: () => {
=======
    ArrowLeft() {
<<<<<<< HEAD
>>>>>>> df22f14... :hammer: refac: piece sizes
      if (piece.checkSideEdges() != "l") piece.moveHorizontally(-1);
=======
      piece.moveHorizontally(-1);
>>>>>>> f31dded... :hammer: refac: check side edges on piece
    },
    ArrowRight() {
      piece.moveHorizontally();
    },
    ArrowUp() {
      piece.rotateClockwise();
    },
    a() {
      piece.rotateClockwise();
    },
    s() {
      piece.rotateAntiClockwise();
    },
<<<<<<< HEAD
    s: () => {},
=======
    ArrowLeft() {
      piece.moveHorizontally(-1);
    },
    ArrowRight() {
      piece.moveHorizontally();
    },
    a() {
      piece.rotateClockwise();
    },
    s() {
      piece.rotateAntiClockwise();
    },
>>>>>>> 521ba44... :sparkles: feat: anticlockwise rotate function
=======
>>>>>>> 6ac88e5... fix: fixing issue due the merge
  };

=======
>>>>>>> fd288d9... :hammer: refac: inset piece into the board
  setInterval(() => {
=======
  interval = setInterval(() => {
>>>>>>> 15b6376... :sparkles: feat: check complete lines
    board.update();
  }, TIME_INTERVAL * 1);
}

function stop() {
  clearInterval(interval);
}
=======
    board = new Board({
      width: BOARD_X,
      height: BOARD_Y,
    });

<<<<<<< HEAD
    setInterval(() => {
=======
    p.playPause();
  };

  p.playPause = function () {
    if (pauseLock) {
      p.play();
      pauseLock = false;
    } else {
      p.pause(interval);
      pauseLock = true;
    }
  };

  p.pause = function (interval) {
    clearInterval(interval);
    p.noLoop();
  };

  p.play = function () {
    interval = setInterval(() => {
>>>>>>> a4baced... chore: merge changes
      board.update();
    }, TIME_INTERVAL);
  };
>>>>>>> 6a55371... refact: now the game is a p5 instance

  p.draw = function () {
    board.show();
  };

  p.keyPressed = function () {
    // if(keyIsDown(lastKeyPressed)) moviments[key]();

    const moved = board.movePiece(p.key);

    if (moved) {
      lastKeyPressed = p.key;
    }
  };
};

let game = new p5(gameSketch);
