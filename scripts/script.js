import './helpers/canvasInitialization.js';
import './configs/spriteConfigs.js';
import Game from './classes/Game.js';

var newGame;
window.onload = function() {
    newGame = new Game();
    newGame.initGame();
};
export {newGame};
