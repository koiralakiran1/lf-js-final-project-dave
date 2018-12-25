import { spriteConfigs } from "../configs/spriteConfigs.js";
import SpriteRenderer from "./SpriteRenderer.js";
import { canvasContext } from "../helpers/canvasInitialization.js";



export default function LevelUpScreen() {
    var that = this;
    this.levelUpScreenMapObjArray = [];
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
        that.levelUpScreenLoop();
    };

    this.drawLevelUpScreen = function() {
        that.levelUpScreenMapObjArray.forEach(function(element) {
            element.render();
        });
        that.writeToCanvas();
    };
    this.updateLevelUpScreen = function() {
        // that.levelUpScreenMapObjArray.forEach(function(element) {
        //     if(element.isAnimation) {
        //         element.update();
        //     }
        // });
        //update dave walk
    };
    this.levelUpScreenLoop = function() {
        canvasContext.clearRect(0,0,640,320);
        window.levelUpScreenAnimator = window.requestAnimationFrame(that.levelUpScreenLoop);
        that.updateLevelUpScreen();
        that.drawLevelUpScreen();
    };
    this.writeToCanvas = function() {
        canvasContext.font = '14px CustomFont';
        canvasContext.textAlign = "center";
        canvasContext.fillStyle = "#ffffff";
        canvasContext.fillText("CONGRATULATIONS. LEVEL UP.", 320, 120);
    };
}