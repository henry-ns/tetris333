<p align="center">
  <a href="https://tetris333.netlify.app/">
    <img alt="Logo" src="public/logo512.png" width="100" />
  </a>
</p>
<h1 align="center">
  Tetris 333
</h1>

<p align="center">
  <a href="https://github.com/henry-ns/desafio333/graphs/commit-activity" alt="Maintenance">
    <img src="https://img.shields.io/badge/Maintained%3F-yes-1EAE72.svg" />
  </a>

  <a href="https://tetris333.netlify.app/" alt="Website tetris333.netlify.app">
    <img src="https://img.shields.io/website-up-down-1EAE72-red/https/tetris333.netlify.app" />
  </a>

  <!-- License -->
  <a href="./LICENSE" alt="License: MIT">
    <img src="https://img.shields.io/badge/License-MIT-1EAE72.svg" />
  </a>

  <!-- codefactor -->
  <a href="https://www.codefactor.io/repository/github/henry-ns/desafio333" alt="CodeFactor">
    <img src="https://www.codefactor.io/repository/github/henry-ns/desafio333/badge" />
  </a>

  <br/>
  <!-- if your app is a website deployed on Netlify -->
  <a href="https://app.netlify.com/sites/tetris333/deploys" alt="Netlify Status">
    <img src="https://api.netlify.com/api/v1/badges/a8174029-82b6-416e-9a20-ba1fb2d2e3dd/deploy-status" />
  </a>
  <!-- Social -->
  <a href="https://github.com/henry-ns/desafio333/stargazers">
    <img alt="GitHub stars" src="https://img.shields.io/github/stars/henry-ns/desafio333?style=social">
  </a>
</p>

<!-- summary -->
<p align="center">
  <a href="#clipboard-descrição">Descrição</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#sparkles-funcionalidades">Funcionalidades</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-o-que-tem-dentro">O que tem dentro</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

---

<p align="center">
  <a href="https://tetris333.netlify.app/">Click aqui para testar</a>
</p>

---
## :construction_worker: Maintainers
- **Henrique** - @henry-ns
- **Felipe**  - @felipefbs

## :clipboard: Descrição

:tada: Finalmente, após inumeras xicaras de café, terminamos a v1.0 do nosso jogo de Tetris para a #QuarentenaTech.  Optamos por fazer para web pois ficaria mais fácil de testar e compartilhar com qualquer pessoa.

Utilizamos a biblioteca [p5.js](https://p5js.org) pela influência do [Daniel Shiffman](https://github.com/shiffman) e seu canal [Coding Train](https://www.youtube.com/user/shiffman). Por não ser uma lib feita para desenvolver jogos nós tivemos muitos empecilhos em especial para detectar colisões, o que apenas garantiu mais aprendizado para os membros da equipe. Após ler este [artigo](https://dev.to/christiankastner/integrating-p5-js-with-react-i0d) decidimos usar o React para toda a interface off-game.

:bulb: Ainda queremos continuar evoluindo nosso jogo depois do desafio, qualquer sugestão que tiver, só comentar aqui em baixo :arrow_down:, ficaramos muito felizes com qualquer feadback :)

<!-- Nós pretendemos criar um site contendo diversos jogos arcades classicos. -->

## :sparkles: Funcionalidades

- Ao entrar no [site](https://tetris333.netlify.app/) você vai encontrar um menu com três botões:
  - **Jogar**: levará você para o jogo do Tetris.
  - **Configurações**: onde você poderá configurar a dificuldade, habilitar o grid e a peça fantasma. Toda a configuração é salva no _local storage_ do seu navegador.
  - **Ajuda**: aqui você encontrará informações sobre como jogar o jogo.

### :fire: Requisitos escolhidos

  - [x] Implementação de Sons e Cores
  - [x] Previsão de próxima peça
  - [x] Escolha entre pelo menos 3 dificuldades
  - [x] Contabilização de Pontos e Game Over
  - [x] Poder habilitar Peça Fantasma


#### :construction: Ainda tem alguns bugs :bug: e estamos tentanto concerta-los, se encontrar algum, por favor, comenta ai em baixo :arrow_down: ficaramos muito gratos.

## 🧐 O que tem dentro?

### :label: Linguagem
- [TypeScript](https://www.typescriptlang.org/)

### :computer: Tecnologias

- [p5.js](https://p5js.org)
- [ReactJS](https://reactjs.org/)

### :art: Ferramentas de Linter
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [EditorConfig](https://editorconfig.org/)

### :loud_sound: Efeitos Sonoros

Todos os efeitos sonoros foram tirados do site [freesound](https://freesound.org/).

### :package:  Pacotes

| Função               | Biblioteca                                              |
| -------------------- | ------------------------------------------------------- |
| Fonte                | [V323](https://fonts.google.com/specimen/VT323)         |
| Icones               | [React Icons](https://react-icons.netlify.com/#/)       |
| CSS in JS            | [Styled Compoments](https://www.styled-components.com/) |
| Manipulação de cores | [Polished](https://polished.js.org/)                    |
| Play de áudio        | [uifx](https://github.com/wle8300/uifx)                 |

:bulb: **Para mais detalhes, veja o `package.json`.**

:bulb: **Segue o [link](https://www.figma.com/file/L3sSkpTpFBcSdmmk7mr7J1/tetris?node-id=0%3A1) para o projeto no `Figma`.**

## 🎓 Mais sobre p5.js

Caso queira conhecer mais sobre a biblioteca gráfica que usamos no projeto só dar uma olhada no [site do p5.js](https://p5js.org). Lá tem toda documentação e ajuda sobre como programar usando o p5.js.

Tem também o [Coding Train](https://www.youtube.com/user/shiffman) um canal do youtube que ensina muita coisa de programação e faz uns projetos muito legais usando o p5.js.

## :memo: Licença

Este projeto está sobre a licença MIT. Veja o arquivo [LICENSE] (LICENSE) para mais detalhes.
