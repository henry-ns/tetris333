const BOARD_X = 10;
const BOARD_Y = 20;

const BLOCK_SIZE = 40;
const TIME_INTERVAL = 1000;

<<<<<<< HEAD
const SHAPES = [
  [
    [1, 1, 1, 1],
  ],
  [
    [1, 0, 0],
=======
const I_MODEL = {
  shape: [[1, 1, 1, 1]],
  color: "#00ADEE",
  width: 4,
  height: 1,
};

const J_MODEL = {
  shape: [
<<<<<<< HEAD
    [0, 0, 1],
>>>>>>> 98c5595... refact: changing how to storage each piece data
=======
>>>>>>> ac264a2... :bulb: chore: add colors
    [1, 1, 1],
    [1, 0, 0],
    //[0, 0, 0],
  ],
  color: "#F6921E",
  width: 3,
  height: 2,
};

const L_MODEL = {
  shape: [
    [1, 1, 1],
    [0, 0, 1],
    //[0, 0, 0],
  ],
<<<<<<< HEAD
<<<<<<< HEAD
  [
=======
  color: "#FFFF",
=======
  color: "#1B75BB",
>>>>>>> ac264a2... :bulb: chore: add colors
  width: 3,
  height: 2,
};

const O_MODEL = {
  shape: [
>>>>>>> 98c5595... refact: changing how to storage each piece data
    [1, 1],
    [1, 1],
  ],
  color: "#FFF100",
  width: 2,
  height: 2,
};

const S_MODEL = {
  shape: [
    [0, 1, 1],
    [1, 1, 0],
    //[0, 0, 0],
  ],
  color: "#8BC53F",
  width: 3,
  height: 2,
};

const Z_MODEL = {
  shape: [
    [1, 1, 0],
    [0, 1, 1],
    //[0, 0, 0],
  ],
  color: "#EC1C24",
  width: 3,
  height: 2,
};

const T_MODEL = {
  shape: [
    [1, 1, 1],
    [0, 1, 0],
    //[0, 0, 0],
  ],
  color: "#652D90",
  width: 3,
  height: 2,
};

const MODELS = [I_MODEL, J_MODEL, L_MODEL, O_MODEL, S_MODEL, Z_MODEL, T_MODEL];
