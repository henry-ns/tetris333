/* eslint-disable no-param-reassign */
import P5 from 'p5';
import { opacify } from 'polished';

import { ConfigData } from '../../hooks/config';

import { BOARD, BLOCK_SIZE, KEYS, TIME_INTERVAL } from '../../utils/constants';
import sounds from '../../utils/sounds';

import Board from './entities/Board';

import theme from '../../styles/themes';

export interface GameSketch extends P5 {
  destroy: () => void;
}

export type Sketch = (p: GameSketch) => void;

function createSketch(config: ConfigData): Sketch {
  function sketch(p: GameSketch): void {
    let board: Board;

    // let lastKeyPressed: number;

    let isPaused = false;

    let interval: number;

    function pause(): void {
      clearInterval(interval);
      p.noLoop();
    }

    function play(): void {
      if (!board.checkEndGame()) {
        interval = setInterval(() => {
          board.update();
        }, TIME_INTERVAL / (config.difficulty + 1) ** 2);

        p.loop();
      }
    }

    function togglePlayed(): void {
      if (isPaused) {
        play();
      } else {
        pause();
      }

      isPaused = !isPaused;
    }

    function restart(): void {
      const gameOverElement = document.getElementById('game-over');
      gameOverElement?.classList.remove('display');
      // points = 0;

      const sizes = {
        width: BOARD.X,
        height: BOARD.Y,
      };

      board = new Board(p, config, sizes);

      play();
    }

    p.setup = () => {
      p.createCanvas(BOARD.X * BLOCK_SIZE, BOARD.Y * BLOCK_SIZE);

      restart();

      const gameOverBtn = document.querySelector('#game-over button');
      gameOverBtn?.addEventListener('click', restart);
    };

    p.draw = () => {
      board.show();

      if (board.checkEndGame()) {
        const gameOverElement = document.getElementById('game-over');
        gameOverElement?.classList.add('display');

        p.fill(opacify(-0.2, theme.colors.backgroundDark));
        p.rect(0, 0, p.width, p.height);

        pause();

        sounds.endGame.play();
      }
    };

    p.keyPressed = () => {
      if (p.keyCode === KEYS.Q) {
        togglePlayed();
        return;
      }

      if (p.keyCode === p.DOWN_ARROW) {
        board.update();
        return;
      }

      if (!isPaused) {
        board.movePiece(p.keyCode);
        // const moviments = [p.LEFT_ARROW, p.RIGHT_ARROW, p.DOWN_ARROW];

        // const moved = board.movePiece(p.keyCode);

        // if (moved && moviments.includes(p.keyCode)) {
        //   lastKeyPressed = p.keyCode;
        // }
      }
    };

    p.destroy = () => {
      pause();

      p.clear();
      p.remove();
    };
  }

  return sketch;
}

export { createSketch };
