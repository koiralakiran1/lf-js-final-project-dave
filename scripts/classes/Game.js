import Map from './Map.js';
import {spriteConfigs} from '../configs/spriteConfigs.js';
import SpriteRenderer from './SpriteRenderer.js';
import DaveCharacter from './DaveCharacter.js';
import {canvasContext} from '../helpers/canvasInitialization.js';

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
            
            //add canvas draw parameter
            currentSpriteConfig.drawWidth = 32;
            currentSpriteConfig.drawHeight = 32;
            currentSpriteConfig.xInc = x;
            currentSpriteConfig.yInc = y;
            currentSpriteConfig.spriteNumber = this.currentMap[i];
            currentSpriteConfig.offsetX = 0;
            currentSpriteConfig.offsetY = 0;
            
            currentSpriteConfig.drawPosX = function () {
                return this.drawWidth * this.xInc + this.offsetX;
            };
            currentSpriteConfig.drawPosY = function () {
                return this.drawHeight * this.yInc + this.offsetY;
            };
            

            currentSpriteConfig.frameIndex = 0;
            currentSpriteConfig.tickCount = 0;
            currentSpriteConfig.ticksPerFrame = 10;
            currentSpriteConfig.numberOfFrames = currentSpriteConfig.maxIndexX - currentSpriteConfig.indexX + 1;
            
            //get the renderer object
            var spriteRenderer = new SpriteRenderer(currentSpriteConfig);
            this.currentMapObjArray.push(spriteRenderer);

            x++;
            if ((i + 1) % 20 == 0) {
                x = 0;
                y++;
            }
        }
        console.log(this.currentMapObjArray);
    };    

    this.initGame = function () {
        this.createMapObjArray();
        this.daveCharacter.initDaveCharacter(that.currentMap, that.currentMapObjArray);
        this.mainGameLoop();
    };
    this.mainGameLoop = function() {
        canvasContext.clearRect(0, 0, 640, 320);
        that.update();
        that.draw();
        requestAnimationFrame(that.mainGameLoop);
    };
    this.update = function() {
        that.map.updateMap(that.currentMapObjArray);
    };
    this.draw = function() {
        that.map.drawMap(that.currentMapObjArray);
        that.daveCharacter.drawDaveCharacter();
    };
}