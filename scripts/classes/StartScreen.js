import { canvasContext, topScoreCanvasContext } from "../helpers/canvasInitialization.js";
import Game from "./Game.js";
import {spriteConfigs, ddImageConfigs} from '../configs/spriteConfigs.js';
import SpriteRenderer from './SpriteRenderer.js';

var newGame;
export default function StartScreen() {
    var that = this;
    this.startMapObjArray = [];
    this.startScreenMap = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 3, 0, 3, 3, 3, 3, 0, 3, 0, 3, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 3, 0, 3,17, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 3, 0, 3, 0, 0, 3, 3, 3, 0, 3, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 3, 0, 3, 0, 0, 0, 0, 0,17, 3, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 3, 0, 3,21, 3, 3, 3, 0, 0, 3, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3,21, 3, 0, 0, 0, 0, 0,
    ];
    this.spaceKeyPressed = false;
    this.createStartMapObjArray = function(mapArray) {
        for (var i = 0, x = 0, y = 0; i < mapArray.length; i++) {
            //get the associated sprite option
            var currentSpriteConfig = Object.assign({}, spriteConfigs[mapArray[i]]);

            //add canvas draw parameter
            currentSpriteConfig.drawWidth = 32;
            currentSpriteConfig.drawHeight = 32;
            currentSpriteConfig.xInc = x;
            currentSpriteConfig.yInc = y;
            currentSpriteConfig.spriteNumber = mapArray[i];
            currentSpriteConfig.offsetX = 0;
            currentSpriteConfig.offsetY = 0;

            currentSpriteConfig.initialDrawPosX = function() {
                return this.drawWidth * this.xInc;
            };
            currentSpriteConfig.initialDrawPosY = function() {
                return this.drawHeight * this.yInc;
            }
            currentSpriteConfig.drawPosX = function () {
                return this.drawWidth * this.xInc + this.offsetX;
            };
            currentSpriteConfig.drawPosY = function () {
                return this.drawHeight * this.yInc + this.offsetY;
            };

            currentSpriteConfig.frameIndex = 0;
            currentSpriteConfig.tickCount = 0;
            currentSpriteConfig.ticksPerFrame = 10;
            currentSpriteConfig.numberOfFrames = function() {
                return this.maxIndexX - this.indexX + 1;
            };
            //get the renderer object
            var spriteRenderer = new SpriteRenderer(currentSpriteConfig);
            this.startMapObjArray.push(spriteRenderer);

            x++;
            if ((i + 1) % 20 == 0) {
                x = 0;
                y++;
            }
        }
    };
    this.initStartScreen = function() {
        this.createStartMapObjArray(that.startScreenMap);
        window.addEventListener('keypress', that.spaceKeyPressedEventListener, false);
        this.startScreenLoop();
    };
    this.drawStartScreen = function() {
        that.startMapObjArray.forEach(function(element) {
            element.render();
        });
        that.drawDangerousDaveImage();
    };
    this.updateStartScreen = function() {
        that.startMapObjArray.forEach(function(element) {
            if(element.isAnimation) {
                element.update();
            }
        });
    };
    this.startScreenLoop = function() {
        canvasContext.clearRect(0,0,640,320);
        window.startScreenAnimator = window.requestAnimationFrame(that.startScreenLoop);
        that.updateStartScreen();
        that.drawStartScreen();
    };
    that.spaceKeyPressedEventListener = function(event) {
        if(event.key === ' ') { //keyCode 0 for other than arrow keys. so using .key
            //start game -> level1
            that.spaceKeyPressed = true;
            window.cancelAnimationFrame(window.startScreenAnimator);
            window.removeEventListener('keypress', that.spaceKeyPressedEventListener, false);
            newGame = new Game();
            newGame.initGame();
        }
    };
    that.drawDangerousDaveImage = function() {
        // console.log('dang');
        ddImageConfigs.animate();
        ddImageConfigs.render(topScoreCanvasContext,160, 0, 320, 96);
    };
}
export {newGame};