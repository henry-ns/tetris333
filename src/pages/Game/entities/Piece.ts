import P5 from 'p5';
import { opacify } from 'polished';

import { KEYS, BLOCK_SIZE, BOARD } from '../../../utils/constants';

type Shape = number[][];

export interface Block {
  pos: P5.Vector;
  color: string;
}

export interface Moviments {
  [key: number]: () => void;
}

interface CreatePiace {
  blocks?: Block[];
  shape: Shape;
  color: string;
  width: number;
  height: number;
}

class Piece {
  color: string;

  width: number;

  height: number;

  blocks: Block[];

  pos: P5.Vector;

  moviments: Moviments;

  constructor(
    private canvas: P5,
    { blocks, shape, color, width, height }: CreatePiace,
  ) {
    const x = this.canvas.width / 2 - BLOCK_SIZE;
    const y = -height * BLOCK_SIZE;

    this.color = color;

    this.width = width;
    this.height = height;

    this.pos = this.canvas.createVector(x, y);
    this.blocks = blocks || this.initBlocks(shape);

    this.moviments = {
      [this.canvas.LEFT_ARROW]: () => this.moveHorizontally(-1),
      [this.canvas.RIGHT_ARROW]: () => this.moveHorizontally(),
      [this.canvas.UP_ARROW]: () => this.rotateClockwise(),
      [this.canvas.DOWN_ARROW]: () => this.gravity(),

      [KEYS.A]: () => this.rotateClockwise(),
      [KEYS.S]: () => this.rotateAntiClockwise(),
    };
  }

  private initBlocks(shape: Shape): Block[] {
    const blocks: Block[] = [];

    shape.forEach((line, yIndex) => {
      line.forEach((item, xIndex) => {
        if (item) {
          const pos = this.canvas.createVector(xIndex, yIndex);

          blocks.push({ color: this.color, pos });
        }
      });
    });

    return blocks;
  }

  createPhantomCopy(): Piece {
    const color = opacify(-0.7, this.color);
    const blocks = this.blocks.map(({ pos }) => ({ color, pos }));

    const piece = new Piece(this.canvas, {
      color,
      blocks,
      shape: [[]],
      height: this.height,
      width: this.width,
    });

    piece.pos.set(this.pos);

    return piece;
  }

  checkSideEdges(direction: number): boolean {
    const leftEdge = direction === -1 && this.pos.x === 0;

    const rightEdge =
      direction === 1 &&
      this.pos.x + this.width * BLOCK_SIZE === this.canvas.width;

    return leftEdge || rightEdge;
  }

  checkPieceInBoard(): void {
    const offLimitSize = BOARD.X - this.pos.x / BLOCK_SIZE - this.width;

    if (offLimitSize > 0) return;

    this.moveHorizontally(offLimitSize);
  }

  checkBottomEdge(): boolean {
    return this.pos.y + this.height * BLOCK_SIZE === this.canvas.height;
  }

  rotateClockwise(): void {
    [this.height] = [this.width, (this.width = this.height)];

    this.blocks.forEach((block) => {
      const x = block.pos.y;
      const y = this.height - 1 - block.pos.x;

      block.pos.set(x, y);
    });

    this.checkPieceInBoard();
  }

  rotateAntiClockwise(): void {
    [this.width] = [this.height, (this.height = this.width)];

    this.blocks.forEach((block) => {
      const x = this.width - 1 - block.pos.y;
      const y = block.pos.x;

      block.pos.set(x, y);
    });

    this.checkPieceInBoard();
  }

  /**
   * direction = 1  -> right
   * direction = -1 -> left
   */
  moveHorizontally(direction = 1): void {
    if (this.checkSideEdges(direction)) {
      return;
    }

    this.pos.x += direction * BLOCK_SIZE;
  }

  gravity(): void {
    this.pos.y += BLOCK_SIZE;
  }

  show(): void {
    this.blocks.forEach((block) => this.showBlock(block));

    // const { x, y } = this.pos;

    // this.canvas.circle(x, y, 10);
    // this.canvas.circle(x + this.width * BLOCK_SIZE, y, 10);
    // this.canvas.circle(x, y + this.height * BLOCK_SIZE, 10);
    // this.canvas.circle(
    //   x + this.width * BLOCK_SIZE,
    //   y + this.height * BLOCK_SIZE,
    //   10,
    // );
  }

  showBlock(block: Block): void {
    const { x, y } = P5.Vector.mult(block.pos, BLOCK_SIZE).add(this.pos);

    this.canvas.fill(block.color);
    this.canvas.rect(x, y, BLOCK_SIZE, BLOCK_SIZE);
  }
}

export default Piece;
