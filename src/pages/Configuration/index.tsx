import React, { FormEvent, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';

import Uifx from 'uifx';

import Layout from '../../components/Layout';

import { useConfig } from '../../hooks/config';

import soundPieceMovement from '../../assets/sounds/pieceMovement.wav';

import { Container, SubmitButton } from './styles';

const Configuration: React.FC = () => {
  const {
    config,
    toggleGrid,
    toggleSoundsOn,
    setSoundsVolume,
    togglePhantomPiece,
    increseDifficulty,
    decreseDifficulty,
    saveConfig,
  } = useConfig();

  const history = useHistory();

  const [updateVolumeSound] = useState(
    new Uifx(soundPieceMovement, { volume: config.sounds.volume }),
  );

  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();

    saveConfig();

    history.push('/');
  }

  function handleVolumeChange(
    event: React.ChangeEvent<HTMLInputElement>,
  ): void {
    setSoundsVolume(+event.target.value);
  }

  function handlePlayVolumeTest(): void {
    updateVolumeSound.play(config.sounds.volume);
  }

  return (
    <Layout>
      <Container>
        <h1>Configuração</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="difficulty">
            Dificuldade inicial
            <div>
              <button type="button" onClick={decreseDifficulty}>
                <FaChevronLeft />
              </button>
              <input
                readOnly
                type="text"
                id="difficulty"
                value={config.formattedDifficulty}
              />
              <button type="button" onClick={increseDifficulty}>
                <FaChevronRight />
              </button>
            </div>
          </label>

          <label htmlFor="phantomPiece">
            Peça fantasma
            <input
              type="checkbox"
              id="phantomPiece"
              checked={config.phantomPieceEnabled}
              onChange={togglePhantomPiece}
            />
            <span />
          </label>

          <label htmlFor="grid">
            Grid
            <input
              type="checkbox"
              id="grid"
              checked={config.gridEnabled}
              onChange={toggleGrid}
            />
            <span />
          </label>

          <label htmlFor="Sounds-on">
            Sounds
            <input
              type="checkbox"
              id="Sounds-on"
              checked={config.sounds.on}
              onChange={toggleSoundsOn}
            />
            <span />
          </label>

          <label htmlFor="sound-volume">
            Sound volume
            <input
              type="range"
              min="0"
              max="100"
              id="sound-volume"
              value={config.sounds.volume * 100}
              checked={config.sounds.on}
              onChange={handleVolumeChange}
              onMouseUp={handlePlayVolumeTest}
            />
          </label>

          <SubmitButton>Salvar</SubmitButton>
        </form>
      </Container>
    </Layout>
  );
};

export default Configuration;
