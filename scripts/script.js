import './helpers/canvasInitialization.js';
import './configs/spriteConfigs.js';
import StartScreen from './classes/StartScreen.js';

var newStartScreen;
window.onload = function() {
    newStartScreen = new StartScreen();
    newStartScreen.initStartScreen();
};
export {newStartScreen};
