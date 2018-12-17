import Map from './Map.js';
import {spriteConfigs} from '../configs/spriteConfigs.js';
import SpriteRenderer from './SpriteRenderer.js';
import DaveCharacter from './DaveCharacter.js';

export default function Game() {
    var that = this;

    this.map = new Map();
    this.daveCharacter = new DaveCharacter();
    this.currentMap = this.map.level1MapArray; //Array
    this.currentMapObjArray = [];
    
    this.createMapObjArray = function () {
        for (var i = 0, x = 0, y = 0; i < this.currentMap.length; i++) {
            //get the associated sprite option
            var currentSpriteConfig = Object.assign({}, spriteConfigs[this.currentMap[i]]);
            // currentSpriteConfig.isAnimation = spriteConfigs[this.currentMap[i]].isAnimation;
            // currentSpriteConfig.imageSource = spriteConfigs[this.currentMap[i]].imageSource;
            // currentSpriteConfig.indexX = spriteConfigs[this.currentMap[i]].indexX;
            // currentSpriteConfig.indexY = spriteConfigs[this.currentMap[i]].indexY;
            // currentSpriteConfig.maxIndexX = spriteConfigs[this.currentMap[i]].maxIndexX;
            // currentSpriteConfig.singleWidth = spriteConfigs[this.currentMap[i]].singleWidth;
            // currentSpriteConfig.singleHeight = spriteConfigs[this.currentMap[i]].singleHeight;
            // currentSpriteConfig.spritePosX = spriteConfigs[this.currentMap[i]].spritePosX;
            // currentSpriteConfig.spritePosY = spriteConfigs[this.currentMap[i]].spritePosY;
            
            //add canvas draw parameter
            currentSpriteConfig.drawWidth = 32;
            currentSpriteConfig.drawHeight = 32;
            currentSpriteConfig.xInc = x;
            currentSpriteConfig.yInc = y;
            currentSpriteConfig.spriteNumber = this.currentMap[i];
            
            currentSpriteConfig.drawPosX = function () {
                return this.drawWidth * this.xInc;
            };
            currentSpriteConfig.drawPosY = function () {
                return this.drawHeight * this.yInc;
            };

            currentSpriteConfig.frameIndex = 0;
            currentSpriteConfig.tickCount = 0;
            currentSpriteConfig.ticksPerFrame = 20;
            currentSpriteConfig.numberOfFrames = currentSpriteConfig.maxIndexX + 1;
            
            // console.log(currentSpriteConfig);
            
            //get the renderer object
            var spriteRenderer = new SpriteRenderer(currentSpriteConfig);
            this.currentMapObjArray.push(spriteRenderer.getOptionsObject());

            x++;
            if ((i + 1) % 20 == 0) {
                x = 0;
                y++;
            }
        }
        // console.log(this.currentMapObjArray);
    };    
    this.initGame = function () {
        this.createMapObjArray();
        // this.initDaveCharacter();
        this.mainGameLoop();
    };
    this.mainGameLoop = function() {
        that.update();
        that.draw();
        requestAnimationFrame(that.mainGameLoop);
    };
    this.update = function() {
        that.map.updateMap(that.currentMapObjArray);
    };
    this.draw = function() {
        that.map.drawMap(that.currentMapObjArray);
    };
    // this.initDaveCharacter = function() {
    //     var tunnelIndex = this.currentMap.findIndex(function(element) {
    //         return element == 33 || element == 34;
    //     });
    //     var daveDrawObject = Object.assign({},this.currentMapObjArray[tunnelIndex]);
    //     if(this.currentMap[tunnelIndex] == 33) {
    //         daveDrawObject.xInc = daveDrawObject.xInc + 1;
    //     } else if(this.currentMap[tunnelIndex] == 34) {
    //         daveDrawObject.yInc = daveDrawObject.yInc + 1;
    //     }
    // };

}