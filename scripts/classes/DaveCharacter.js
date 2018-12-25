import {spriteConfigs} from '../configs/spriteConfigs.js';
import SpriteRenderer from './SpriteRenderer.js';
import {convertPositionToIndex} from '../helpers/utils.js';
import {removeValueFromArray} from '../helpers/utils.js';
import {newGame} from './StartScreen.js';
import * as constants from '../helpers/constants.js';
import { canvasContext, bottomCanvasContext } from '../helpers/canvasInitialization.js';

export default function DaveCharacter(currentMap, currentMapObjArray) {
    var that = this;
    this.currentMap = currentMap;
    this.currentMapObjArray = currentMapObjArray;
    this.keys = [false, false, false, false];
    this.collisionArr = [];
    this.goingTop = false;
    this.goingBottom = false;
    this.offsetYInc = 0;
    this.rightKeyPressedLast = undefined;

    this.initDaveCharacter = function(initialPosX, initialPosY) {
        if(!initialPosX || !initialPosY) {
            that.tunnelIndex = that.currentMap.findIndex(function(element) {
                return element == constants.BLOCK_TUNNEL_RIGHT || element == constants.BLOCK_TUNNEL_BOTTOM;
            });
            that.daveDrawObject = Object.assign({}, that.currentMapObjArray[that.tunnelIndex]);
            that.daveDrawObject = Object.assign(that.daveDrawObject, spriteConfigs[constants.MAIN_CHARACTER_STILL]);
            if(that.currentMap[that.tunnelIndex] == constants.BLOCK_TUNNEL_RIGHT) {
                that.daveDrawObject.xInc++;
            } else if(that.currentMap[that.tunnelIndex] == constants.BLOCK_TUNNEL_BOTTOM) {
                that.daveDrawObject.yInc++;
            }
            that.daveDrawObject.spriteNumber = constants.MAIN_CHARACTER_STILL;
            that.daveDrawObject.ticksPerFrame = constants.TICK_PER_FRAME;
            // that.daveDrawObject.offsetY = -192;
            // that.daveDrawObject.offsetX = +32;

            that.daveDrawObject = new SpriteRenderer(that.daveDrawObject);
        }
    };

    this.drawDaveCharacter = function() {
        that.daveDrawObject.render();
    };

    this.update = function() {
        that.updateLeft();
        that.updateRight();
        that.updateBottom();
        that.updateTop();
    };

    this.updateLeft = function() {
        if(that.keys[0]) {
            that.rightKeyPressedLast = false;
            that.daveDrawObject = Object.assign(that.daveDrawObject, spriteConfigs[constants.MAIN_CHARACTER_MOVE_BACK]);
            that.daveDrawObject.spriteNumber = constants.MAIN_CHARACTER_MOVE_BACK;
            that.daveDrawObject = new SpriteRenderer(that.daveDrawObject);
            that.daveDrawObject.update();
            if(!that.collisionArr.includes('LEFT_BLOCK_PROB_COLLISION')) {
                that.daveDrawObject.offsetX -= constants.MOVE_OFFSET_INCREMENT;
            }
            // //console.log(that.daveDrawObject);
        }
    };
    this.updateRight = function() {
        if(that.keys[2]) {
            that.rightKeyPressedLast = true;
            that.daveDrawObject = Object.assign(that.daveDrawObject, spriteConfigs[constants.MAIN_CHARACTER_MOVE_FRONT]);
            that.daveDrawObject.spriteNumber = constants.MAIN_CHARACTER_MOVE_FRONT;
            that.daveDrawObject = new SpriteRenderer(that.daveDrawObject);
            that.daveDrawObject.update();
            if(!that.collisionArr.includes('RIGHT_BLOCK_PROB_COLLISION')) {

                that.daveDrawObject.offsetX += constants.MOVE_OFFSET_INCREMENT;
            }
            // //console.log(that.daveDrawObject.frameIndex, that.daveDrawObject.numberOfFrames());
        }
    };
    this.updateTop = function() {
        if(that.keys[1]) {
            //change sprites
            if(that.daveDrawObject.spriteNumber == constants.MAIN_CHARACTER_MOVE_BACK) { //left
                // //console.log('up left');
                that.daveDrawObject = Object.assign(that.daveDrawObject, spriteConfigs[constants.MAIN_CHARACTER_JUMP_BACK]);
                that.daveDrawObject.frameIndex = constants.INITIAL_FRAME_INDEX;
                // //console.log(that.daveDrawObject);
                that.daveDrawObject.spriteNumber = constants.MAIN_CHARACTER_JUMP_BACK;
                that.daveDrawObject = new SpriteRenderer(that.daveDrawObject);

            } else if(that.daveDrawObject.spriteNumber == constants.MAIN_CHARACTER_MOVE_FRONT) { //right
                // //console.log('up right');
                that.daveDrawObject = Object.assign(that.daveDrawObject, spriteConfigs[constants.MAIN_CHARACTER_JUMP_FRONT]);
                that.daveDrawObject.frameIndex = constants.INITIAL_FRAME_INDEX;
                // //console.log(that.daveDrawObject);
                that.daveDrawObject.spriteNumber = constants.MAIN_CHARACTER_JUMP_FRONT;
                that.daveDrawObject = new SpriteRenderer(that.daveDrawObject);
            } else if(that.daveDrawObject.spriteNumber == constants.MAIN_CHARACTER_STILL) {
                if(that.rightKeyPressedLast == false ) {
                    // //console.log('up left');
                    that.daveDrawObject = Object.assign(that.daveDrawObject, spriteConfigs[45]);
                    that.daveDrawObject.frameIndex = constants.INITIAL_FRAME_INDEX;
                    // //console.log(that.daveDrawObject);
                    that.daveDrawObject.spriteNumber = constants.MAIN_CHARACTER_JUMP_BACK;
                    that.daveDrawObject = new SpriteRenderer(that.daveDrawObject);
                } else {
                    // //console.log('up right');
                    that.daveDrawObject = Object.assign(that.daveDrawObject, spriteConfigs[constants.MAIN_CHARACTER_JUMP_FRONT]);
                    that.daveDrawObject.frameIndex = constants.INITIAL_FRAME_INDEX;
                    // //console.log(that.daveDrawObject);
                    that.daveDrawObject.spriteNumber = constants.MAIN_CHARACTER_JUMP_FRONT;
                    that.daveDrawObject = new SpriteRenderer(that.daveDrawObject);
                }
            }

            if(!that.collisionArr.includes('TOP_BLOCK_PROB_COLLISION')) {
                that.goingTop = true;
                that.daveDrawObject.offsetY -= constants.MOVE_OFFSET_INCREMENT;
                that.offsetYInc += constants.MOVE_OFFSET_INCREMENT;
                if(that.offsetYInc % constants.MAX_JUMP_HEIGHT == 0) {
                    that.keys[1] =false;
                    that.goingTop = false;
                    that.goingBottom = true;
                }
            } else {
                that.goingTop = false;
                that.keys[1] = false;
            }
        }
    };
    this.updateBottom = function() {
        //change sprite
        if(!that.collisionArr.includes('BOTTOM_BLOCK_PROB_COLLISION') && !that.goingTop) {
            that.goingBottom = true;
            if(that.daveDrawObject.spriteNumber == constants.MAIN_CHARACTER_MOVE_BACK) { //left
                // //console.log('up left');
                that.daveDrawObject = Object.assign(that.daveDrawObject, spriteConfigs[constants.MAIN_CHARACTER_JUMP_BACK]);
                that.daveDrawObject.frameIndex = constants.INITIAL_FRAME_INDEX;
                // //console.log(that.daveDrawObject);
                that.daveDrawObject.spriteNumber = constants.MAIN_CHARACTER_JUMP_BACK;
                that.daveDrawObject = new SpriteRenderer(that.daveDrawObject);

            } else if(that.daveDrawObject.spriteNumber == constants.MAIN_CHARACTER_MOVE_FRONT || that.daveDrawObject.spriteNumber == constants.MAIN_CHARACTER_STILL) { //right
                // //console.log('up right');
                that.daveDrawObject = Object.assign(that.daveDrawObject, spriteConfigs[44]);
                that.daveDrawObject.frameIndex = constants.INITIAL_FRAME_INDEX;
                // //console.log(that.daveDrawObject);
                that.daveDrawObject.spriteNumber = constants.MAIN_CHARACTER_JUMP_FRONT;
                that.daveDrawObject = new SpriteRenderer(that.daveDrawObject);

            }
            // //console.log('going bot');
            that.daveDrawObject.offsetY += constants.MOVE_OFFSET_INCREMENT;
        }
        if(that.collisionArr.includes('BOTTOM_BLOCK_PROB_COLLISION')) {
            that.goingBottom = false;
            that.goingTop = false;
            that.offsetYInc = constants.INITIAL_OFFSETY;
            if(that.daveDrawObject.spriteNumber == constants.MAIN_CHARACTER_JUMP_BACK || that.daveDrawObject.spriteNumber == constants.MAIN_CHARACTER_JUMP_FRONT) {
                that.daveDrawObject = Object.assign(that.daveDrawObject, spriteConfigs[constants.MAIN_CHARACTER_STILL]);
                that.daveDrawObject.spriteNumber = constants.MAIN_CHARACTER_STILL;
                that.daveDrawObject = new SpriteRenderer(that.daveDrawObject);
            }
        }
    };

    this.detectDaveCollision = function() {
        //drawPosX()+width falls in next index. So drawPosX()+width-1 used. Similar for height
        var daveIndex = convertPositionToIndex(that.daveDrawObject.drawPosX(), that.daveDrawObject.drawPosY());
        var daveIndexAfterW = convertPositionToIndex(that.daveDrawObject.drawPosX()+that.daveDrawObject.drawWidth-1,
                                                        that.daveDrawObject.drawPosY());
        var daveIndexAfterH = convertPositionToIndex(that.daveDrawObject.drawPosX(),
                                                 that.daveDrawObject.drawPosY()+that.daveDrawObject.drawHeight-1);
        var daveIndexAfterWH = convertPositionToIndex(that.daveDrawObject.drawPosX()+that.daveDrawObject.drawWidth-1,
                                                    that.daveDrawObject.drawPosY()+that.daveDrawObject.drawHeight-1);

        // //console.log(daveIndex, daveIndexAfterW, daveIndexAfterH, daveIndexAfterWH);

        that.checkProbableBlockCollisionLeft(daveIndex, daveIndexAfterH, daveIndexAfterW, daveIndexAfterWH);
        that.checkProbableBlockCollisionRight(daveIndex, daveIndexAfterH, daveIndexAfterW, daveIndexAfterWH);
        that.checkProbableBlockCollisionTop(daveIndex, daveIndexAfterH, daveIndexAfterW, daveIndexAfterWH);
        that.checkProbableBlockCollisionBottom(daveIndex, daveIndexAfterH, daveIndexAfterW, daveIndexAfterWH);

        that.checkNonBlockingCollisionLeft(daveIndex,daveIndexAfterH, daveIndexAfterW, daveIndexAfterWH);
        that.checkNonBlockingCollisionRight(daveIndex,daveIndexAfterH, daveIndexAfterW, daveIndexAfterWH);
        that.checkNonBlockingCollisionTop(daveIndex,daveIndexAfterH, daveIndexAfterW, daveIndexAfterWH);
        that.checkNonBlockingCollisionBottom(daveIndex,daveIndexAfterH, daveIndexAfterW, daveIndexAfterWH);
    };

    this.checkProbableBlockCollisionLeft = function(daveIndex, daveIndexAfterH, daveIndexAfterW, daveIndexAfterWH) {
        if(that.checkBlockingCollisionCases(daveIndexAfterW-1) || that.checkBlockingCollisionCases(daveIndexAfterWH-1)) {
            if(!that.collisionArr.includes('LEFT_BLOCK_PROB_COLLISION')) {
                that.collisionArr.push('LEFT_BLOCK_PROB_COLLISION');
            }
        } else if(that.collisionArr.includes('LEFT_BLOCK_PROB_COLLISION')) {
            that.collisionArr = removeValueFromArray(that.collisionArr, 'LEFT_BLOCK_PROB_COLLISION');
        }
    };
    this.checkProbableBlockCollisionRight = function(daveIndex, daveIndexAfterH, daveIndexAfterW, daveIndexAfterWH) {
        if(that.checkBlockingCollisionCases(daveIndex+1) || that.checkBlockingCollisionCases(daveIndexAfterH+1)) {
            if(!that.collisionArr.includes('RIGHT_BLOCK_PROB_COLLISION')) {
                that.collisionArr.push('RIGHT_BLOCK_PROB_COLLISION');
            }
        } else if(that.collisionArr.includes('RIGHT_BLOCK_PROB_COLLISION')) {
            that.collisionArr = removeValueFromArray(that.collisionArr, 'RIGHT_BLOCK_PROB_COLLISION');
        }
    };
    this.checkProbableBlockCollisionTop = function(daveIndex, daveIndexAfterH, daveIndexAfterW, daveIndexAfterWH) {
        if(that.checkBlockingCollisionCases(daveIndexAfterH-constants.CANVAS_MAX_X_TILE_INDEX) || that.checkBlockingCollisionCases(daveIndexAfterWH-constants.CANVAS_MAX_X_TILE_INDEX)) {
            if(!that.collisionArr.includes('TOP_BLOCK_PROB_COLLISION')) {
                that.collisionArr.push('TOP_BLOCK_PROB_COLLISION');
            }
        } else if(that.collisionArr.includes('TOP_BLOCK_PROB_COLLISION')) {
            that.collisionArr = removeValueFromArray(that.collisionArr, 'TOP_BLOCK_PROB_COLLISION');
        }
    };
    this.checkProbableBlockCollisionBottom = function(daveIndex, daveIndexAfterH, daveIndexAfterW, daveIndexAfterWH) {
        if(that.checkBlockingCollisionCases(daveIndex+constants.CANVAS_MAX_X_TILE_INDEX) || that.checkBlockingCollisionCases(daveIndexAfterW+constants.CANVAS_MAX_X_TILE_INDEX)) {
            if(!that.collisionArr.includes('BOTTOM_BLOCK_PROB_COLLISION')) {
                that.collisionArr.push('BOTTOM_BLOCK_PROB_COLLISION');
            }
        } else if(that.collisionArr.includes('BOTTOM_BLOCK_PROB_COLLISION')) {
            that.collisionArr = removeValueFromArray(that.collisionArr, 'BOTTOM_BLOCK_PROB_COLLISION');
        }
    };

    this.checkNonBlockingCollisionLeft = function(daveIndex, daveIndexAfterH, daveIndexAfterW, daveIndexAfterWH) {
        that.checkNonBlockingCollisionCases(daveIndex);
        that.checkNonBlockingCollisionCases(daveIndexAfterH);
    };
    this.checkNonBlockingCollisionRight = function(daveIndex, daveIndexAfterH, daveIndexAfterW, daveIndexAfterWH) {
        that.checkNonBlockingCollisionCases(daveIndexAfterW);
        that.checkNonBlockingCollisionCases(daveIndexAfterWH);
    };
    this.checkNonBlockingCollisionTop = function(daveIndex, daveIndexAfterH, daveIndexAfterW, daveIndexAfterWH) {
        that.checkNonBlockingCollisionCases(daveIndex);
        that.checkNonBlockingCollisionCases(daveIndexAfterW);
    };
    this.checkNonBlockingCollisionBottom = function(daveIndex, daveIndexAfterH, daveIndexAfterW, daveIndexAfterWH) {
        that.checkNonBlockingCollisionCases(daveIndexAfterH);
        that.checkNonBlockingCollisionCases(daveIndexAfterWH);
    };


    this.checkBlockingCollisionCases = function(someIndex) {
        switch(that.currentMapObjArray[someIndex].spriteNumber) {
            case constants.BLOCK_RED_BRICK:
            case constants.BLOCK_BLUE_BRICK:
            case constants.BLOCK_GREYBROWN_PATTERN:
            case constants.BLOCK_REDBROWN_PATTERN:
            case constants.BLOCK_SKYBLUE_WATERY:
            case constants.BLOCK_TUNNEL_RIGHT:
            case constants.BLOCK_TUNNEL_BOTTOM:
            case constants.BLOCK_PINK_BLOCK:
            case 9:
            case constants.BLOCK_SILVER_STEEL: {
                return true;
            }
            case constants.EXTRA_DOOR: { //Door Collision
                if(newGame.consumed.lampKey) {
                    bottomCanvasContext.clearRect(0,0,constants.CANVAS_FULL_WIDTH,constants.SCOREBOARD_CANVAS_FULL_HEIGHT);
                    canvasContext.clearRect(0,0,constants.CANVAS_FULL_WIDTH,constants.CANVAS_FULL_HEIGHT);
                    window.removeEventListener("keydown", that.keyDownEventListener, false);
                    window.removeEventListener("keyup", that.keyUpEventListener, false);
                    newGame.levelUpScreen.initLevelUpScreen();
                    window.cancelAnimationFrame(window.animator);
                }
                return true;
            }
        }
    };
    this.checkNonBlockingCollisionCases = function(someIndex) {
        switch(that.currentMapObjArray[someIndex].spriteNumber) {
            case 11: {
                newGame.consumed.skyBlueDiamondGem.consumedCount++;
                newGame.score += newGame.consumed.skyBlueDiamondGem.value;
                newGame.currentMapObjArray[someIndex] = Object.assign(newGame.currentMapObjArray[someIndex], spriteConfigs[0]);
                newGame.currentMapObjArray[someIndex].spriteNumber = 0;
                newGame.currentMapObjArray[someIndex].frameIndex = 0;
                //console.log(newGame.consumed, newGame.score);
                break;
            }
            case 12: {
                newGame.consumed.redDiamondGem.consumedCount++;
                newGame.score += newGame.consumed.redDiamondGem.value;
                newGame.currentMapObjArray[someIndex] = Object.assign(newGame.currentMapObjArray[someIndex], spriteConfigs[0]);
                newGame.currentMapObjArray[someIndex].spriteNumber = 0;
                newGame.currentMapObjArray[someIndex].frameIndex = 0;
                //console.log(newGame.consumed, newGame.score);
                break;
            }
            case 13: {
                newGame.consumed.pinkSphere.consumedCount++;
                newGame.score += newGame.consumed.pinkSphere.value;
                newGame.currentMapObjArray[someIndex] = Object.assign(newGame.currentMapObjArray[someIndex], spriteConfigs[0]);
                newGame.currentMapObjArray[someIndex].spriteNumber = 0;
                newGame.currentMapObjArray[someIndex].frameIndex = 0;
                //console.log(newGame.consumed, newGame.score);
                break;
            }
            case 14: {
                newGame.consumed.gun = true;
                newGame.currentMapObjArray[someIndex] = Object.assign(newGame.currentMapObjArray[someIndex], spriteConfigs[0]);
                newGame.currentMapObjArray[someIndex].spriteNumber = 0;
                newGame.currentMapObjArray[someIndex].frameIndex = 0;
                //console.log(newGame.consumed, newGame.score);
                break;
            }
            case 15: {
                newGame.consumed.redYellowRing.consumedCount++;
                newGame.score += newGame.consumed.redYellowRing.value;
                newGame.currentMapObjArray[someIndex] = Object.assign(newGame.currentMapObjArray[someIndex], spriteConfigs[0]);
                newGame.currentMapObjArray[someIndex].spriteNumber = 0;
                newGame.currentMapObjArray[someIndex].frameIndex = 0;
                //console.log(newGame.consumed, newGame.score);
                break;
            }
            case 16: {
                newGame.consumed.greenGreyWand.consumedCount++;
                newGame.score += newGame.consumed.greenGreyWand.value;
                newGame.currentMapObjArray[someIndex] = Object.assign(newGame.currentMapObjArray[someIndex], spriteConfigs[0]);
                newGame.currentMapObjArray[someIndex].spriteNumber = 0;
                newGame.currentMapObjArray[someIndex].frameIndex = 0;
                //console.log(newGame.consumed, newGame.score);
                break;
            }
            case 17: {
                newGame.consumed.redYellowCrown.consumedCount++;
                newGame.score += newGame.consumed.redYellowCrown.value;
                newGame.currentMapObjArray[someIndex] = Object.assign(newGame.currentMapObjArray[someIndex], spriteConfigs[0]);
                newGame.currentMapObjArray[someIndex].spriteNumber = 0;
                newGame.currentMapObjArray[someIndex].frameIndex = 0;
                //console.log(newGame.consumed, newGame.score);
                break;
            }
            case 18: {
                newGame.consumed.lampKey = true;
                newGame.currentMapObjArray[someIndex] = Object.assign(newGame.currentMapObjArray[someIndex], spriteConfigs[0]);
                newGame.currentMapObjArray[someIndex].spriteNumber = 0;
                newGame.currentMapObjArray[someIndex].frameIndex = 0;
                //console.log(newGame.consumed, newGame.score);
                break;
            }
            case 19: {
                newGame.consumed.jetPack = true;
                newGame.currentMapObjArray[someIndex] = Object.assign(newGame.currentMapObjArray[someIndex], spriteConfigs[0]);
                newGame.currentMapObjArray[someIndex].spriteNumber = 0;
                newGame.currentMapObjArray[someIndex].frameIndex = 0;
                //console.log(newGame.consumed, newGame.score);
                break;
            }
            // case 20: {
            //     newGame.currentMapObjArray[someIndex] = Object.assign(newGame.currentMapObjArray[someIndex], spriteConfigs[0]);
            //     newGame.currentMapObjArray[someIndex].spriteNumber = 0;
            //     newGame.currentMapObjArray[someIndex].frameIndex = 0;
            //     break;
            // }
            case 21:
            case 22:
            case 23: {
                that.daveDrawObject = Object.assign(that.daveDrawObject, spriteConfigs[26]);
                that.daveDrawObject.frameIndex = 0;
                // //console.log(that.daveDrawObject);
                that.daveDrawObject.spriteNumber = 26;
                that.daveDrawObject = new SpriteRenderer(that.daveDrawObject);
                // that.daveDrawObject.update();
                window.cancelAnimationFrame(window.animator);
                window.removeEventListener("keydown", that.keyDownEventListener, false);
                window.removeEventListener("keyup", that.keyUpEventListener, false);
                break;
            }
        }
    };

    this.keyDownEventListener = function(event) {
        if(event.keyCode == 37) { //Left
            that.keys[0] = true;
        }
        if(event.keyCode == 39) { //Right
            that.keys[2] = true;
        }
        if(event.keyCode == 38 && !that.goingBottom && !that.goingTop) { //top
            that.keys[1] = true;
        }
    };
    this.keyUpEventListener = function(event) {
        if(event.keyCode == 37) { //Left
            that.keys[0] = false;
        }
        if(event.keyCode == 39) { //Right
            that.keys[2] = false;
        }
    };
}