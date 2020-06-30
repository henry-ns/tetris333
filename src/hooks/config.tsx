import React, { createContext, useContext, useState, useMemo } from 'react';

interface SoundsConfig {
  volume: number;
  on: boolean;
}

export interface ConfigData {
  difficulty: number;
  formattedDifficulty: string;
  gridEnabled: boolean;
  phantomPieceEnabled: boolean;
  sounds: SoundsConfig;
}

interface Config {
  config: ConfigData;
  setSoundsVolume(volume: number): void;
  toggleSoundsOn(): void;
  togglePhantomPiece(): void;
  toggleGrid(): void;
  increseDifficulty(): void;
  decreseDifficulty(): void;
  saveConfig(): void;
}

const DIFFICULTY = ['Facíl', 'Médio', 'Díficil'];

const ConfigContext = createContext<Config>({} as Config);

const ConfigProvider: React.FC = ({ children }) => {
  const [difficulty, setDifficulty] = useState<number>(() => {
    const response = localStorage.getItem('@tetris333:config:difficulty');
    return response ? JSON.parse(response) : 1;
  });

  const [phantomPieceEnabled, setPhantomPieceEnabled] = useState<boolean>(
    () => {
      const response = localStorage.getItem('@tetris333:config:phantomPiece');
      return response ? JSON.parse(response) : true;
    },
  );

  const [gridEnabled, setGridEnabled] = useState<boolean>(() => {
    const response = localStorage.getItem('@tetris333:config:grid');
    return response ? JSON.parse(response) : false;
  });

  const [soundsConfig, setSoundsConfig] = useState<SoundsConfig>(() => {
    const response = localStorage.getItem('@tetris333:config:music');

    return response
      ? JSON.parse(response)
      : {
          volume: 0.4,
          on: true,
        };
  });

  const formattedDifficulty = useMemo(() => DIFFICULTY[difficulty], [
    difficulty,
  ]);

  function togglePhantomPiece(): void {
    setPhantomPieceEnabled(!phantomPieceEnabled);
  }

  function toggleGrid(): void {
    setGridEnabled(!gridEnabled);
  }

  function toggleSoundsOn(): void {
    setSoundsConfig(({ on, volume }) => ({
      on: !on,
      volume,
    }));
  }

  function setSoundsVolume(volume: number): void {
    setSoundsConfig(({ on }) => ({
      on,
      volume: volume / 100,
    }));
  }

  function increseDifficulty(): void {
    if (difficulty < 2) {
      setDifficulty(difficulty + 1);
    }
  }

  function decreseDifficulty(): void {
    if (difficulty > 0) {
      setDifficulty(difficulty - 1);
    }
  }

  function saveConfig(): void {
    localStorage.setItem('@tetris333:config:grid', JSON.stringify(gridEnabled));

    localStorage.setItem(
      '@tetris333:config:difficulty',
      JSON.stringify(difficulty),
    );

    localStorage.setItem(
      '@tetris333:config:phantomPiece',
      JSON.stringify(phantomPieceEnabled),
    );

    localStorage.setItem(
      '@tetris333:config:music',
      JSON.stringify(soundsConfig),
    );
  }

  return (
    <ConfigContext.Provider
      value={{
        config: {
          difficulty,
          formattedDifficulty,
          gridEnabled,
          phantomPieceEnabled,
          sounds: soundsConfig,
        },
        toggleGrid,
        toggleSoundsOn,
        togglePhantomPiece,
        setSoundsVolume,
        increseDifficulty,
        decreseDifficulty,
        saveConfig,
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
};

function useConfig(): Config {
  const context = useContext(ConfigContext);

  if (!context) {
    throw new Error('useConfig must be used within an ConfigProvider');
  }

  return context;
}

export { useConfig, ConfigProvider };
