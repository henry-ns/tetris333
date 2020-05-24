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

    console.log("pause time");
  };

  p.play = function () {
    interval = setInterval(() => {
>>>>>>> a4baced... chore: merge changes
      board.update();
    }, TIME_INTERVAL);
<<<<<<< HEAD
=======
    p.loop();

    console.log("play time");
    return interval;
>>>>>>> 236d410... feat: off game menu
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

function sideBar(p) {
  let buttonWidth = 200;
  let buttonHeight = 100;

  let state = 0;

  p.setup = function () {
    p.createCanvas(MENU_X, MENU_Y);

    playButton = new Clickable({
      x: MENU_X / 2 - buttonWidth / 2,
      y: MENU_Y / 2 - buttonHeight / 2 - 125 + 100,
      text: "Jogar",
      textSize: 48,
    });
    settingsButton = new Clickable({
      x: MENU_X / 2 - buttonWidth / 2,
      y: MENU_Y / 2 - buttonHeight / 2 + 100,
      text: "Configurações",
      textSize: 29,
    });
    helpButton = new Clickable({
      x: MENU_X / 2 - buttonWidth / 2,
      y: MENU_Y / 2 - buttonHeight / 2 + 125 + 100,
      text: "Ajuda",
      textSize: 48,
    });
    returnButton = new Clickable({
      x: 20,
      y: 20,
      width: 50,
      height: 30,
      text: "Return",
    });

    playButton.onPress = function () {
      setTimeout(() => {
        state = 1;
        console.log("Game Start");
      }, 0);
    };
    settingsButton.onPress = function () {
      state = 2;
      console.log("Configurações");
    };
    helpButton.onPress = function () {
      state = 3;
      console.log("Ajuda");
    };

    returnButton.onPress = function () {
      state = 0;
    };

    //In game menu infobox
    difficultyBox = new infoBox({
      x: p.width / 2 - (p.width * 0.8) / 2,
      y: 100,
      text1: "Difficulty",
      text2: "Hard",
    });

    levelBox = new infoBox({
      x: p.width / 2 - (p.width * 0.8) / 2,
      y: 100 + 100,
      text1: "Nivel",
      text2: "2",
    });

    pointBox = new infoBox({
      x: p.width / 2 - (p.width * 0.8) / 2,
      y: 100 + 200,
      text1: "Points",
      text2: "100000000000000000000",
    });
  };

  p.draw = function () {
    p.background(42);

    //Off game menu state
    if (state === 0) {
      playButton.draw();
      settingsButton.draw();
      helpButton.draw();
    }
    //In game state
    if (state === 1) {
      //Game starts

      // Show difficulty
      difficultyBox.show();

      //Show level
      levelBox.show();

      //Show points
      pointBox.show();

      ///Show next piece

      returnButton.draw();
    }
    //Configurations state
    if (state === 2) {
      returnButton.draw();
    }
    //Help state
    if (state === 3) {
      returnButton.draw();
    }
  };
}

let menu = new p5(sideBar);
let game = new p5(gameSketch);
