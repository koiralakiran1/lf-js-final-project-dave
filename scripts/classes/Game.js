import Map from './Map.js';
import {spriteConfigs} from '../configs/spriteConfigs.js';
import SpriteRenderer from './SpriteRenderer.js';
import DaveCharacter from './DaveCharacter.js';
import {canvasContext, bottomCanvasContext} from '../helpers/canvasInitialization.js';
import DisplayBoard from './DisplayBoard.js';
import LevelUpScreen from './LevelUpScreen.js';

export default function Game() {
    var that = this;
    this.map = new Map();
    this.currentMap = this.map.level1MapArray; //Array
    this.currentMapObjArray = [];
    this.daveCharacter = new DaveCharacter(that.currentMap, that.currentMapObjArray);
    this.displayBoard = new DisplayBoard();
    this.levelUpScreen = new LevelUpScreen();
    this.score = 0;
    this.numberOfLivesLeft = 3;
    this.currentLevel = 1;
    this.consumed = {
        skyBlueDiamondGem: { //11
            value: 100,
            consumedCount: 0
        },
        redDiamondGem: { //12
            value: 150,
            consumedCount: 0
        },
        pinkSphere: { //13
            value: 50,
            consumedCount: 0
        },
        gun: false, //14
        redYellowRing: {//15
            value: 200,
            consumedCount: 0
        },
        greenGreyWand: {//16
            value: 300,
            consumedCount: 0
        },
        redYellowCrown: {//17
            value: 350,
            consumedCount: 0
        },
        lampKey: false,//18
        jetPack: false//19
    };

    this.createMapObjArray = function (mapArray) {
        for (var i = 0, x = 0, y = 0; i < mapArray.length; i++) {
            //get the associated sprite option
            var currentSpriteConfig = Object.assign({}, spriteConfigs[mapArray[i]]);

            //add canvas draw parameter
            currentSpriteConfig.drawWidth = 32;
            currentSpriteConfig.drawHeight = 32;
            currentSpriteConfig.xInc = x;
            currentSpriteConfig.yInc = y;
            currentSpriteConfig.spriteNumber = this.currentMap[i];
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
            this.currentMapObjArray.push(spriteRenderer);

            x++;
            if ((i + 1) % 20 == 0) {
                x = 0;
                y++;
            }
        }
    };

    this.initGame = function () {
        this.createMapObjArray(that.currentMap);
        this.daveCharacter.initDaveCharacter();
        window.addEventListener("keydown", that.daveCharacter.keyDownEventListener, false);
        window.addEventListener("keyup", that.daveCharacter.keyUpEventListener, false);
        this.mainGameLoop();
    };
    this.mainGameLoop = function() {
        canvasContext.clearRect(0, 0, 640, 320);
        window.animator = window.requestAnimationFrame(that.mainGameLoop);
        that.displayBoard.displayTopScoreBoard(that.score, that.currentLevel, that.numberOfLivesLeft);
        bottomCanvasContext.clearRect(0,0, 640, 96);
        if(that.consumed.lampKey) {
            that.displayBoard.updateBottomCanvas();
        }
        that.draw();
        that.detectCollision();
        that.update();
    };
    this.update = function() {
        that.map.updateMap(that.currentMapObjArray);
        that.daveCharacter.update();
    };
    this.draw = function() {
        that.map.drawMap(that.currentMapObjArray);
        that.daveCharacter.drawDaveCharacter();
    };
    this.detectCollision = function () {
        that.daveCharacter.detectDaveCollision();
    };
}