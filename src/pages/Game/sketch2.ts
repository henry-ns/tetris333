/* eslint-disable no-param-reassign */
import P5 from 'p5';

import { ConfigData } from '../../hooks/config';
import { BOARD, BLOCK_SIZE, MODELS } from '../../utils/constants';
import Piece from './entities/Piece';

export type Sketch = (p: P5) => void;

function createSketch(config: ConfigData): Sketch {
  function sketch(p: P5): void {
    let piece: Piece;

    p.setup = () => {
      p.createCanvas(BOARD.X * BLOCK_SIZE, BOARD.Y * BLOCK_SIZE);

      piece = new Piece(p, MODELS[1]);
    };

    p.draw = () => {
      p.background(50);

      piece.show();
    };

    p.keyPressed = () => {
      const moviment = piece.moviments[p.keyCode];

      if (moviment) {
        moviment();
      }
    };
  }

  return sketch;
}

export { createSketch };
