let piece;
let lastKeyPressed;
let moviments;
let board;

function setup() {
  createCanvas(BOARD_X * BLOCK_SIZE, BOARD_Y * BLOCK_SIZE);

<<<<<<< HEAD
  piece = new Piece({
    initialShape: SHAPES[4],// random(SHAPES),
    x: width / 2 - BLOCK_SIZE,
    y: 0,
  });
=======
  piece = new Piece(random(MODELS));
>>>>>>> 98c5595... refact: changing how to storage each piece data

  board = new Board({
    width: BOARD_X,
    height: BOARD_Y,
  });

  moviments = {
<<<<<<< HEAD
<<<<<<< HEAD
    ArrowLeft: () => {
=======
    ArrowLeft() {
>>>>>>> df22f14... :hammer: refac: piece sizes
      if (piece.checkSideEdges() != "l") piece.moveHorizontally(-1);
    },
    ArrowRight() {
      if (piece.checkSideEdges() != "r") piece.moveHorizontally();
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

  setInterval(() => {
    piece.gravity();
  }, TIME_INTERVAL * 0.1);
}

function draw() {
  drawBackground();

  piece.show();
  board.show();

  if (piece.checkBottomEdge()) {
    board.addPiece(piece);
    piece = new Piece(random(MODELS));
  }
}

function keyPressed() {
  // if(keyIsDown(lastKeyPressed)) moviments[key]();

  const moviment = moviments[key];

  if (moviment) {
    moviment();
    lastKeyPressed = key;
  }
}

function drawBackground() {
  let [x, y] = [0, 0];

  background(50);

  while (x < width) {
    line(x, 0, x, height);
    x += BLOCK_SIZE;
  }

  while (y < height) {
    line(0, y, width, y);
    y += BLOCK_SIZE;
  }
}
