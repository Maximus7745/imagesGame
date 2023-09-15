const AppRoute = {
  Initial: 'initial',
  Game: 'game',
  Results: 'results',
};
const GAME_TYPES = [
  { type: 'cats', label: 'Котики' },
  { type: 'flowers', label: 'Цветочки' },
  { type: 'cars', label: 'Машины' },
];

const TIMEOUT = 900;
const RANDOMIZED = false;

export {TIMEOUT, GAME_TYPES, AppRoute, RANDOMIZED};