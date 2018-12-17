import './helpers/canvasInitialization.js';
import './configs/spriteConfigs.js';
import Game from './classes/Game.js';

window.onload = function() {
    var newGame = new Game();
    newGame.initGame();
};
