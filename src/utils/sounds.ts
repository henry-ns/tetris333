import Uifx from 'uifx';

import soundEndGame from '../assets/sounds/endGame.wav';
import soundLineComplete from '../assets/sounds/lineComplete.wav';
import soundPieceColision from '../assets/sounds/pieceColision.wav';
import soundPieceMovement from '../assets/sounds/pieceMovement.wav';

export interface Sounds {
  pieceColision: Uifx;
  pieceMovement: Uifx;
  lineComplete: Uifx;
  endGame: Uifx;
}

function createSounds(config = { volume: 0.3 }): Sounds {
  const endGame = new Uifx(soundEndGame, config);
  const lineComplete = new Uifx(soundLineComplete, config);
  const pieceColision = new Uifx(soundPieceColision, config);

  const pieceMovementVolume = config.volume - 0.2;
  const pieceMovement = new Uifx(soundPieceMovement, {
    volume: pieceMovementVolume > 0 ? pieceMovementVolume : config.volume,
  });

  return {
    pieceColision,
    pieceMovement,
    lineComplete,
    endGame,
  };
}

export default createSounds;
