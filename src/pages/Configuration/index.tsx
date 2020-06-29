import React, { FormEvent } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';

import Layout from '../../components/Layout';

import { useConfig } from '../../hooks/config';

import { Container, SubmitButton } from './styles';

const Configuration: React.FC = () => {
  const {
    config,
    toggleGrid,
    toggleMusicOn,
    togglePhantomPiece,
    increseDifficulty,
    decreseDifficulty,
    saveConfig,
  } = useConfig();

  const history = useHistory();

  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();

    saveConfig();

    history.push('/');
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

          <label htmlFor="music-on">
            Music
            <input
              type="checkbox"
              id="music-on"
              checked={config.music.on}
              onChange={toggleMusicOn}
            />
            <span />
          </label>

          <SubmitButton>Salvar</SubmitButton>
        </form>
      </Container>
    </Layout>
  );
};

export default Configuration;
