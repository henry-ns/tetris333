import P5 from 'p5';

import { KEYS, BLOCK_SIZE } from '../../../utils/constants';

type Shape = number[][];

interface Block {
  pos: P5.Vector;
  color: string;
}

interface CreatePiace {
  shape: Shape;
  color: string;
  width: number;
  height: number;
}

interface Moviments {
  [key: number]: () => void;
}

class Piece {
  color: string;

  shape: Shape;

  width: number;

  height: number;

  blocks: Block[];

  pos: P5.Vector;

  moviments: Moviments;

  constructor(
    private canvas: P5,
    { shape, color, width, height }: CreatePiace,
  ) {
    const x = this.canvas.width / 2 - BLOCK_SIZE;
    const y = /*  -2 or -this.canvas.height *  */ BLOCK_SIZE;

    this.pos = this.canvas.createVector(x, y);

    this.color = color;
    this.shape = shape;

    this.width = width;
    this.height = height;

    this.blocks = this.initBlocks(shape);

    this.moviments = {
      [canvas.DOWN_ARROW]: () => {
        this.gravity();
      },
      [canvas.RIGHT_ARROW]: () => {
        this.rotateClockwise();
      },
      [canvas.LEFT_ARROW]: () => {
        this.rotateAntiClockwise();
      },
    };
  }

  private initBlocks(shape: Shape): Block[] {
    const blocks: Block[] = [];

    shape.forEach((line, yIndex) => {
      line.forEach((item, xIndex) => {
        if (item) {
          const pos = this.canvas.createVector(xIndex, yIndex);

          blocks.push({
            color: this.color,
            pos,
          });
        }
      });
    });

    return blocks;
  }

  checkSideEdges(direction: number): boolean {
    const leftEdge = direction === -1 && this.pos.x === 0;

    const rightEdge =
      direction === 1 &&
      this.pos.x + this.width * BLOCK_SIZE === this.canvas.width;

    return leftEdge || rightEdge;
  }

  // TODO: For refactor later
  checkPieceInBoard(): void {
    while (this.pos.x + this.width * BLOCK_SIZE > this.canvas.width) {
      this.moveHorizontally(-1);
    }
  }

  checkBottomEdge(): boolean {
    return this.pos.y + this.height * BLOCK_SIZE === this.canvas.height;
  }

  rotateClockwise(): void {
    [this.height] = [this.width, (this.width = this.height)];

    // this.blocks.forEach((block) => console.log(block.pos));

    this.blocks.forEach((block) => {
      const x = block.pos.y;
      const y = this.height - 1 - block.pos.x;

      block.pos.set(x, y);

      // block.pos.rotate(Math.PI / 2);
    });
  }

  rotateAntiClockwise(): void {
    [this.width] = [this.height, (this.height = this.width)];

    this.blocks.forEach((block) => {
      const x = this.width - 1 - block.pos.y;
      const y = block.pos.x;

      block.pos.set(x, y);

      // block.pos.rotate((3 * Math.PI) / 2);
    });
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

  dropTo(yPosition: number): void {
    const y = (yPosition - this.height) * BLOCK_SIZE;

    this.pos.y = y;
  }

  gravity(): void {
    this.pos.y += BLOCK_SIZE;
  }

  show(): void {
    this.blocks.forEach((block) => this.showBlock(block));

    const { x, y } = this.pos;

    this.canvas.circle(x, y, 10);
    this.canvas.circle(x + this.width * BLOCK_SIZE, y, 10);
    this.canvas.circle(x, y + this.height * BLOCK_SIZE, 10);
    this.canvas.circle(
      x + this.width * BLOCK_SIZE,
      y + this.height * BLOCK_SIZE,
      10,
    );
  }

  showBlock(block: Block): void {
    const blockPos = P5.Vector.mult(block.pos, BLOCK_SIZE);
    const { x, y } = P5.Vector.add(this.pos, blockPos);

    // const { x, y } = P5.Vector.add(this.pos, block.pos);

    this.canvas.fill(block.color);
    this.canvas.rect(x, y, BLOCK_SIZE, BLOCK_SIZE);
  }
}

export default Piece;
