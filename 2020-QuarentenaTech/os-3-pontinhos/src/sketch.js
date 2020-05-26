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

  p.setup = () => {
    p.createCanvas(BOARD_X * BLOCK_SIZE, BOARD_Y * BLOCK_SIZE);
    p.points = 0;

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

    // setInterval(() => {
    //   if (keyIsDown(lastKeyPressed)) {
    //     board.movePiece(lastKeyPressed);
    //   }
    // }, TIME_INTERVAL * 0.2);
  };

  p.playPause = () => {
    if (pauseLock) {
      p.play();
      pauseLock = false;
    } else {
      p.pause(interval);
      pauseLock = true;
    }
  };

  p.pause = (interval) => {
    clearInterval(interval);
    p.noLoop();
  };

  p.play = () => {
<<<<<<< HEAD
    interval = setInterval(() => {
>>>>>>> a4baced... chore: merge changes
      board.update();
    }, TIME_INTERVAL);
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

>>>>>>> beb9a31... :beetle: fix: some bugs by merge conflicts
    p.loop();

    return interval;
>>>>>>> 236d410... feat: off game menu
=======
    if (!board.checkEndGame()) {
      interval = setInterval(() => {
        board.update();
      }, TIME_INTERVAL * 0.2);

      p.loop();

      return interval;
    }
>>>>>>> 01c85a5... feat: end game check
  };
>>>>>>> 6a55371... refact: now the game is a p5 instance

  p.draw = () => {
    board.show();
    if (board.checkEndGame()) {
      p.playPause();
    }
    //console.log(board.nextPiece.blocks);
    //console.log(p.points);
  };

  p.keyPressed = () => {
    if (!pauseLock || p.keyCode === KEY_Q) {
      const moviments = [p.LEFT_ARROW, p.RIGHT_ARROW, p.DOWN_ARROW];

      const moved = board.movePiece(p.keyCode);
      // console.log(p.keyCode);

      if (moved && moviments.includes(p.keyCode)) {
        lastKeyPressed = p.keyCode;
      }
    }
  };
};

function sideBar(p) {
  let buttonWidth = 200;
  let buttonHeight = 100;

  let state = 0;

  let difficulty = "fácil";
  let grid = true;
  let ghostPiece = true;

  p.setup = () => {
    p.createCanvas(MENU_X, MENU_Y);

    playButton = new Clickable({
      x: MENU_X / 2 - buttonWidth / 2,
      y: MENU_Y / 2 - buttonHeight / 2 - 125 + 100,
      textColor: "#ffff",
      textSize: 48,
      text: "Jogar",
      color: "#2a2a2a",
      strokeWeight: 0,
    });
    settingsButton = new Clickable({
      x: MENU_X / 2 - buttonWidth / 2,
      y: MENU_Y / 2 - buttonHeight / 2 + 100,
      textColor: "#ffff",
      textSize: 29,
      text: "Configurações",
      color: "#2a2a2a",
      strokeWeight: 0,
    });
    helpButton = new Clickable({
      x: MENU_X / 2 - buttonWidth / 2,
      y: MENU_Y / 2 - buttonHeight / 2 + 125 + 100,
      textColor: "#ffff",
      textSize: 48,
      text: "Ajuda",
      color: "#2a2a2a",
      strokeWeight: 0,
    });
    returnButton = new Clickable({
      x: 20,
      y: 20,
      width: 50,
      height: 30,
      color: "#D2D2D2",
      text: "Return",
      strokeWeight: 0,
    });

    playButton.onPress = () => {
      setTimeout(() => {
        state = 1;
        console.log("Game Start");
      }, 0);
    };
    settingsButton.onPress = () => {
      state = 2;
      console.log("Configurações");
    };
    helpButton.onPress = () => {
      state = 3;
      console.log("Ajuda");
    };

    returnButton.onPress = () => {
      state = 0;
    };

    // In game menu infobox
    difficultyBox = new infoBox({
      x: p.width / 2 - (p.width * 0.8) / 2,
      y: 400,
      text1: "Difficulty",
      text2: "Hard",
    });

    levelBox = new infoBox({
      x: p.width / 2 - (p.width * 0.8) / 2,
      y: 400 + 100,
      text1: "Nivel",
      text2: "2",
    });

    pointBox = new infoBox({
      x: p.width / 2 - (p.width * 0.8) / 2,
      y: 400 + 200,
      text1: "Points",
      text2: `${game.points}`,
    });

    // Config menu buttons
    changeDifficultyButton = new Clickable({
      x: MENU_X / 2 - (buttonWidth * 0.8) / 2,
      y: MENU_Y / 2 - buttonHeight / 2 - 55,
      width: buttonWidth * 0.8,
      height: buttonHeight / 2,
      text: `Dificuldade: ${difficulty}`,
      textSize: 16,
    });
    changeDifficultyButton.onPress = () => {
      console.log(difficulty);
      if (difficulty === "fácil") {
        difficulty = "médio";
        changeDifficultyButton.text = `Dificuldade: ${difficulty}`;
      } else if (difficulty === "médio") {
        difficulty = "difícil";
        changeDifficultyButton.text = `Dificuldade: ${difficulty}`;
      } else if (difficulty === "difícil") {
        difficulty = "fácil";
        changeDifficultyButton.text = `Dificuldade: ${difficulty}`;
      }
    };

    changeGhostPieceButton = new Clickable({
      x: MENU_X / 2 - (buttonWidth * 0.8) / 2,
      y: MENU_Y / 2 - buttonHeight / 2,
      width: buttonWidth * 0.8,
      height: buttonHeight / 2,
      text: `GhostPiece: ${ghostPiece ? "on" : "off"}`,
      textSize: 16,
    });
    changeGhostPieceButton.onPress = () => {
      if (ghostPiece) {
        ghostPiece = false;
        changeGhostPieceButton.text = `GhostPiece: ${
          ghostPiece ? "on" : "off"
        }`;
      } else {
        ghostPiece = true;
        changeGhostPieceButton.text = `GhostPiece: ${
          ghostPiece ? "on" : "off"
        }`;
      }
    };

    changeGridButton = new Clickable({
      x: MENU_X / 2 - (buttonWidth * 0.8) / 2,
      y: MENU_Y / 2 - buttonHeight / 2 + 55,
      width: buttonWidth * 0.8,
      height: buttonHeight / 2,
      text: `Grid: ${grid ? "on" : "off"}`,
      textSize: 16,
    });
    changeGridButton.onPress = () => {
      if (grid) {
        grid = false;
        changeGridButton.text = `Grid: ${grid ? "on" : "off"}`;
      } else {
        grid = true;
        changeGridButton.text = `Grid: ${grid ? "on" : "off"}`;
      }
    };

    // Help menu
    movementBox = new infoBox({
      x: p.width / 2 - (p.width * 0.8) / 2,
      y: 100,
      text1: "Teclas de Movimento",
      text2: "Pressione as setas esquerda e direita para movimentar a peça.",
    });
    rotationBox = new infoBox({
      x: p.width / 2 - (p.width * 0.8) / 2,
      y: 200,
      text1: "Rotacionar a peça",
      text2: `Pressione 'a', 's' ou seta pra cima para movimentar a peça`,
    });
    pauseBox = new infoBox({
      x: p.width / 2 - (p.width * 0.8) / 2,
      y: 300,
      text1: "Play and Pause",
      text2: `Pressione 'q' para pausar ou despausar o jogo`,
    });

    piece = new Piece(p.random(MODELS));
  };

  p.draw = () => {
    p.background(42);

    // Off game menu state
    if (state === 0) {
      playButton.draw();
      settingsButton.draw();
      helpButton.draw();
    }
    // In game state
    if (state === 1) {
      // Game starts

      // Show next piece

      p.fill(210);
      p.rect(p.width / 2 - (p.width * 0.8) / 2, 100, p.width * 0.8, 200);

      //  Show difficulty
      difficultyBox.show();

      // Show level
      levelBox.show();

      // Show points
      pointBox.show();

      returnButton.draw();
    }
    // Configurations state
    if (state === 2) {
      // change difficulty
      changeDifficultyButton.draw();

      // turn on/off ghost piece
      changeGhostPieceButton.draw();

      // turn on/off grid
      changeGridButton.draw();

      returnButton.draw();
    }
    // Help state
    if (state === 3) {
      movementBox.show();
      rotationBox.show();
      pauseBox.show();

      returnButton.draw();
    }
  };
}

//let menu = new p5(sideBar);
let game = new p5(gameSketch);
