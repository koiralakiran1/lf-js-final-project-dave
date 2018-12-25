import { spriteConfigs } from "../configs/spriteConfigs.js";
import SpriteRenderer from "./SpriteRenderer.js";
import { canvasContext } from "../helpers/canvasInitialization.js";
import * as constants from "../helpers/constants.js";



export default function LevelUpScreen() {
    var that = this;
    this.levelUpScreenMapObjArray = [];
    this.daveAnimateObject = {};
    this.levelUpScreenMap = [
         0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
         0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
         0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
         0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
         2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
        32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
         2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
         0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
         0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
         0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ];
    this.createLevelUpMapObjArray = function(mapArray) {
        for (var i = 0, x = 0, y = 0; i < mapArray.length; i++) {
            //get the associated sprite option
            var currentSpriteConfig = Object.assign({}, spriteConfigs[mapArray[i]]);

            //add canvas draw parameter
            currentSpriteConfig.drawWidth = constants.CANVAS_DRAW_WIDTH;
            currentSpriteConfig.drawHeight = constants.CANVAS_DRAW_HEIGHT;
            currentSpriteConfig.xInc = x;
            currentSpriteConfig.yInc = y;
            currentSpriteConfig.spriteNumber = mapArray[i];
            currentSpriteConfig.offsetX = constants.INITIAL_OFFSETX;
            currentSpriteConfig.offsetY = constants.INITIAL_OFFSETY;

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
            that.levelUpScreenMapObjArray.push(spriteRenderer);

            x++;
            if ((i + 1) % 20 == 0) {
                x = 0;
                y++;
            }
        }
    };

    this.initLevelUpScreen = function() {
        that.createLevelUpMapObjArray(that.levelUpScreenMap);
        that.initLevelUpDave();
        that.levelUpScreenLoop();
    };
    this.initLevelUpDave = function() {
        that.daveAnimateObject = spriteConfigs[42];
        that.daveAnimateObject.xInc = 1;
        that.daveAnimateObject.yInc = 5;
        that.daveAnimateObject.drawWidth = 32;
        that.daveAnimateObject.drawHeight = 32;
        that.daveAnimateObject.offsetX = 0;
        that.daveAnimateObject.offsetY = 0;
        that.daveAnimateObject.frameIndex = 0;
        that.daveAnimateObject.tickCount = 0;
        that.daveAnimateObject.ticksPerFrame = 10;
        that.daveAnimateObject.numberOfFrames = function() {
            return this.maxIndexX - this.indexX + 1;
        };
        that.daveAnimateObject.initialDrawPosX = function() {
            return this.drawWidth * this.xInc;
        };
        that.daveAnimateObject.initialDrawPosY = function() {
            return this.drawHeight * this.yInc;
        }
        that.daveAnimateObject.drawPosX = function () {
            return this.drawWidth * this.xInc + this.offsetX;
        };
        that.daveAnimateObject.drawPosY = function () {
            return this.drawHeight * this.yInc + this.offsetY;
        };
        that.daveAnimateObject = new SpriteRenderer(that.daveAnimateObject);
    };

    this.drawLevelUpScreen = function() {
        that.levelUpScreenMapObjArray.forEach(function(element) {
            element.render();
        });
        that.writeToCanvas();
        that.daveAnimateObject.render();
    };
    this.updateLevelUpScreen = function() {
        // that.levelUpScreenMapObjArray.forEach(function(element) {
        //     if(element.isAnimation) {
        //         element.update();
        //     }
        // });
        that.updateLevelUpDave();
    };
    this.levelUpScreenLoop = function() {
        canvasContext.clearRect(0,0,640,320);
        window.levelUpScreenAnimator = window.requestAnimationFrame(that.levelUpScreenLoop);
        that.drawLevelUpScreen();
        that.updateLevelUpScreen();
    };
    this.writeToCanvas = function() {
        canvasContext.font = '14px CustomFont';
        canvasContext.textAlign = "center";
        canvasContext.fillStyle = "#ffffff";
        canvasContext.fillText("CONGRATULATIONS. LEVEL UP.", 320, 120);
    };
    this.updateLevelUpDave = function() {
        if(that.daveAnimateObject.drawPosX() >= 640-32) {
            window.cancelAnimationFrame(window.startScreenAnimator);
            window.cancelAnimationFrame(window.levelUpScreenAnimator);
            window.cancelAnimationFrame(window.animator);
            window.location.reload(false);
        } else {
            that.daveAnimateObject.offsetX += 2;
            that.daveAnimateObject.update();
        }
    };
}