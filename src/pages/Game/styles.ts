import styled from 'styled-components';

import { rem, shade } from 'polished';

import MainContainer from '../../styles/Container';

export const Container = styled(MainContainer)`
  display: flex;
  justify-content: space-between;

  margin: auto;
  max-width: 900px;

  section:first-of-type {
    position: relative;
  }

  section:last-of-type {
    width: 100%;
    max-width: 300px;
    margin-left: 64px;

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;

      strong {
        color: ${({ theme }) => theme.colors.secondaryText};
        font-size: ${rem('48px')};
      }
    }

    div + div {
      margin-top: 40px;
    }
  }
`;

export const NextPiece = styled.div`
  flex-direction: column;
  align-items: flex-start;

  h2 {
    margin: 0 auto 16px 0;
  }

  div {
    display: flex;

    background: ${({ theme }) => theme.colors.backgroundDark};

    width: 100%;
    height: 100px;

    img {
      margin: auto;
    }
  }
`;

export const GameOver = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  opacity: 0;
  pointer-events: none;

  position: absolute;
  user-select: none;

  text-align: center;
  font-size: ${rem('60px')};
  letter-spacing: 0.2rem;

  width: 100%;
  left: 50%;
  top: 50%;

  transform: translate(-50%, -50%);

  button {
    cursor: pointer;
    background: ${({ theme }) => theme.colors.active};
    transition: transform 0.3s, background 0.3s;

    letter-spacing: 0.2rem;
    font-size: ${rem('24px')};
    text-transform: uppercase;

    border: 0;
    border-radius: 2px;
    padding: 16px;
    margin-top: 24px;

    &:hover {
      background: ${({ theme }) => shade(0.2, theme.colors.active)};
    }

    &:active {
      background: ${({ theme }) => theme.colors.active};
      transform: scale(0.95) translateZ(0);
    }
  }
`;
