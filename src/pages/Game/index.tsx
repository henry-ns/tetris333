import React, { useRef, useEffect, useState } from 'react';

import P5 from 'p5';

import Layout from '../../components/Layout';

import { useConfig } from '../../hooks/config';

import { createSketch } from './sketch';

import SubTitle from '../../styles/SubTitle';
import { Container, NextPiece, GameOver } from './styles';

const Game: React.FC = () => {
  const { config } = useConfig();

  const [game, setGame] = useState<P5>();
  const boardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (boardRef.current) {
      const sketch = createSketch(config);

      setGame(new P5(sketch, boardRef.current));
    }
  }, [config]);

  function resetGame(): void {
    game?.setup();
  }

  return (
    <Layout>
      <Container>
        <section ref={boardRef}>
          <GameOver id="gameOverText">
            <span>Game Over</span>
            <button type="button" onClick={resetGame}>
              play again
            </button>
          </GameOver>
        </section>

        <section>
          <NextPiece>
            <SubTitle>Próxima peça</SubTitle>
            <div>
              <img alt="next piece" id="nextPiece" />
            </div>
          </NextPiece>
          {/* <div>
            <SubTitle>Nivel</SubTitle>
            <strong id="level" />
          </div> */}
          <div>
            <SubTitle>Pontos</SubTitle>
            <strong id="points" />
          </div>
        </section>
      </Container>
    </Layout>
  );
};

export default Game;
