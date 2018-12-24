import {spriteConfigs} from '../configs/spriteConfigs.js';
import SpriteRenderer from './SpriteRenderer.js';
import {convertPositionToIndex} from '../helpers/utils.js';
import {removeValueFromArray} from '../helpers/utils.js';
import {newGame} from '../script.js';
import * as constants from '../helpers/constants.js';

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

    this.initDaveCharacter = function() {
        that.tunnelIndex = that.currentMap.findIndex(function(element) {
            return element == 6 || element == 7;
        });
        that.daveDrawObject = Object.assign({}, that.currentMapObjArray[that.tunnelIndex]);
        that.daveDrawObject = Object.assign(that.daveDrawObject, spriteConfigs[constants.MAIN_CHARACTER_STILL]);
        if(that.currentMap[that.tunnelIndex] == 6) {
            that.daveDrawObject.xInc++;
        } else if(that.currentMap[that.tunnelIndex] == 7) {
            that.daveDrawObject.yInc++;
        }
        that.daveDrawObject.spriteNumber = constants.MAIN_CHARACTER_STILL;
        that.daveDrawObject.ticksPerFrame = 5;
        // that.daveDrawObject.offsetY = -192;
        // that.daveDrawObject.offsetX = +32;

        that.daveDrawObject = new SpriteRenderer(that.daveDrawObject);
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
            that.daveDrawObject = Object.assign(that.daveDrawObject, spriteConfigs[43]);
            that.daveDrawObject.spriteNumber = 43;
            that.daveDrawObject = new SpriteRenderer(that.daveDrawObject);
            that.daveDrawObject.update();
            if(!that.collisionArr.includes('LEFT_BLOCK_PROB_COLLISION')) {
                that.daveDrawObject.offsetX -= 2;
            }
            // console.log(that.daveDrawObject);
        }
    };
    this.updateRight = function() {
        if(that.keys[2]) {
            that.rightKeyPressedLast = true;
            that.daveDrawObject = Object.assign(that.daveDrawObject, spriteConfigs[42]);
            that.daveDrawObject.spriteNumber = 42;
            that.daveDrawObject = new SpriteRenderer(that.daveDrawObject);
            that.daveDrawObject.update();
            if(!that.collisionArr.includes('RIGHT_BLOCK_PROB_COLLISION')) {

                that.daveDrawObject.offsetX += 2;
            }
            // console.log(that.daveDrawObject.frameIndex, that.daveDrawObject.numberOfFrames());
        }
    };
    this.updateTop = function() {
        if(that.keys[1]) {
            //change sprites
            if(that.daveDrawObject.spriteNumber == 43) { //left
                // console.log('up left');
                that.daveDrawObject = Object.assign(that.daveDrawObject, spriteConfigs[45]);
                that.daveDrawObject.frameIndex = 0;
                // console.log(that.daveDrawObject);
                that.daveDrawObject.spriteNumber = 45;
                that.daveDrawObject = new SpriteRenderer(that.daveDrawObject);

            } else if(that.daveDrawObject.spriteNumber == 42) { //right
                // console.log('up right');
                that.daveDrawObject = Object.assign(that.daveDrawObject, spriteConfigs[44]);
                that.daveDrawObject.frameIndex = 0;
                // console.log(that.daveDrawObject);
                that.daveDrawObject.spriteNumber = 44;
                that.daveDrawObject = new SpriteRenderer(that.daveDrawObject);
            } else if(that.daveDrawObject.spriteNumber == 41) {
                if(that.rightKeyPressedLast == false ) {
                    // console.log('up left');
                    that.daveDrawObject = Object.assign(that.daveDrawObject, spriteConfigs[45]);
                    that.daveDrawObject.frameIndex = 0;
                    // console.log(that.daveDrawObject);
                    that.daveDrawObject.spriteNumber = 45;
                    that.daveDrawObject = new SpriteRenderer(that.daveDrawObject);
                } else {
                    // console.log('up right');
                    that.daveDrawObject = Object.assign(that.daveDrawObject, spriteConfigs[44]);
                    that.daveDrawObject.frameIndex = 0;
                    // console.log(that.daveDrawObject);
                    that.daveDrawObject.spriteNumber = 44;
                    that.daveDrawObject = new SpriteRenderer(that.daveDrawObject);
                }
            }

            if(!that.collisionArr.includes('TOP_BLOCK_PROB_COLLISION')) {
                that.goingTop = true;
                that.daveDrawObject.offsetY -= 2;
                that.offsetYInc += 2;
                if(that.offsetYInc % 70 == 0) {
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
            if(that.daveDrawObject.spriteNumber == 43) { //left
                // console.log('up left');
                that.daveDrawObject = Object.assign(that.daveDrawObject, spriteConfigs[45]);
                that.daveDrawObject.frameIndex = 0;
                // console.log(that.daveDrawObject);
                that.daveDrawObject.spriteNumber = 45;
                that.daveDrawObject = new SpriteRenderer(that.daveDrawObject);

            } else if(that.daveDrawObject.spriteNumber == 42 || that.daveDrawObject.spriteNumber == 41) { //right
                // console.log('up right');
                that.daveDrawObject = Object.assign(that.daveDrawObject, spriteConfigs[44]);
                that.daveDrawObject.frameIndex = 0;
                // console.log(that.daveDrawObject);
                that.daveDrawObject.spriteNumber = 44;
                that.daveDrawObject = new SpriteRenderer(that.daveDrawObject);

            }
            // console.log('going bot');
            that.daveDrawObject.offsetY += 2;
        }
        if(that.collisionArr.includes('BOTTOM_BLOCK_PROB_COLLISION')) {
            that.goingBottom = false;
            that.goingTop = false;
            that.offsetYInc = 0;
            if(that.daveDrawObject.spriteNumber == 45 || that.daveDrawObject.spriteNumber == 44) {
                that.daveDrawObject = Object.assign(that.daveDrawObject, spriteConfigs[41]);
                that.daveDrawObject.spriteNumber = 41;
                that.daveDrawObject = new SpriteRenderer(that.daveDrawObject);
            }
        }
    };

    this.detectDaveCollision = function() {

        var daveIndex = convertPositionToIndex(that.daveDrawObject.drawPosX(), that.daveDrawObject.drawPosY());
        var daveIndexAfterW = convertPositionToIndex(that.daveDrawObject.drawPosX()+that.daveDrawObject.drawWidth-1,
                                                        that.daveDrawObject.drawPosY());
        var daveIndexAfterH = convertPositionToIndex(that.daveDrawObject.drawPosX(),
                                                 that.daveDrawObject.drawPosY()+that.daveDrawObject.drawHeight-1);
        var daveIndexAfterWH = convertPositionToIndex(that.daveDrawObject.drawPosX()+that.daveDrawObject.drawWidth-1,
                                                    that.daveDrawObject.drawPosY()+that.daveDrawObject.drawHeight-1);

        // console.log(daveIndex, daveIndexAfterW, daveIndexAfterH, daveIndexAfterWH);

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
        if(that.checkBlockingCollisionCases(daveIndexAfterH-20) || that.checkBlockingCollisionCases(daveIndexAfterWH-20)) {
            if(!that.collisionArr.includes('TOP_BLOCK_PROB_COLLISION')) {
                that.collisionArr.push('TOP_BLOCK_PROB_COLLISION');
            }
        } else if(that.collisionArr.includes('TOP_BLOCK_PROB_COLLISION')) {
            that.collisionArr = removeValueFromArray(that.collisionArr, 'TOP_BLOCK_PROB_COLLISION');
        }
    };
    this.checkProbableBlockCollisionBottom = function(daveIndex, daveIndexAfterH, daveIndexAfterW, daveIndexAfterWH) {
        if(that.checkBlockingCollisionCases(daveIndex+20) || that.checkBlockingCollisionCases(daveIndexAfterW+20)) {
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
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10: {
                return true;
            }
            case 32: { //Door Collision
                if(newGame.consumed.lampKey) {
                    console.log('go through the door');
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
                console.log(newGame.consumed, newGame.score);
                break;
            }
            case 12: {
                newGame.consumed.redDiamondGem.consumedCount++;
                newGame.score += newGame.consumed.redDiamondGem.value;
                newGame.currentMapObjArray[someIndex] = Object.assign(newGame.currentMapObjArray[someIndex], spriteConfigs[0]);
                newGame.currentMapObjArray[someIndex].spriteNumber = 0;
                newGame.currentMapObjArray[someIndex].frameIndex = 0;
                console.log(newGame.consumed, newGame.score);
                break;
            }
            case 13: {
                newGame.consumed.pinkSphere.consumedCount++;
                newGame.score += newGame.consumed.pinkSphere.value;
                newGame.currentMapObjArray[someIndex] = Object.assign(newGame.currentMapObjArray[someIndex], spriteConfigs[0]);
                newGame.currentMapObjArray[someIndex].spriteNumber = 0;
                newGame.currentMapObjArray[someIndex].frameIndex = 0;
                console.log(newGame.consumed, newGame.score);
                break;
            }
            case 14: {
                newGame.consumed.gun = true;
                newGame.currentMapObjArray[someIndex] = Object.assign(newGame.currentMapObjArray[someIndex], spriteConfigs[0]);
                newGame.currentMapObjArray[someIndex].spriteNumber = 0;
                newGame.currentMapObjArray[someIndex].frameIndex = 0;
                console.log(newGame.consumed, newGame.score);
                break;
            }
            case 15: {
                newGame.consumed.redYellowRing.consumedCount++;
                newGame.score += newGame.consumed.redYellowRing.value;
                newGame.currentMapObjArray[someIndex] = Object.assign(newGame.currentMapObjArray[someIndex], spriteConfigs[0]);
                newGame.currentMapObjArray[someIndex].spriteNumber = 0;
                newGame.currentMapObjArray[someIndex].frameIndex = 0;
                console.log(newGame.consumed, newGame.score);
                break;
            }
            case 16: {
                newGame.consumed.greenGreyWand.consumedCount++;
                newGame.score += newGame.consumed.greenGreyWand.value;
                newGame.currentMapObjArray[someIndex] = Object.assign(newGame.currentMapObjArray[someIndex], spriteConfigs[0]);
                newGame.currentMapObjArray[someIndex].spriteNumber = 0;
                newGame.currentMapObjArray[someIndex].frameIndex = 0;
                console.log(newGame.consumed, newGame.score);
                break;
            }
            case 17: {
                newGame.consumed.redYellowCrown.consumedCount++;
                newGame.score += newGame.consumed.redYellowCrown.value;
                newGame.currentMapObjArray[someIndex] = Object.assign(newGame.currentMapObjArray[someIndex], spriteConfigs[0]);
                newGame.currentMapObjArray[someIndex].spriteNumber = 0;
                newGame.currentMapObjArray[someIndex].frameIndex = 0;
                console.log(newGame.consumed, newGame.score);
                break;
            }
            case 18: {
                newGame.consumed.lampKey = true;
                newGame.currentMapObjArray[someIndex] = Object.assign(newGame.currentMapObjArray[someIndex], spriteConfigs[0]);
                newGame.currentMapObjArray[someIndex].spriteNumber = 0;
                newGame.currentMapObjArray[someIndex].frameIndex = 0;
                console.log(newGame.consumed, newGame.score);
                break;
            }
            case 19: {
                newGame.consumed.jetPack = true;
                newGame.currentMapObjArray[someIndex] = Object.assign(newGame.currentMapObjArray[someIndex], spriteConfigs[0]);
                newGame.currentMapObjArray[someIndex].spriteNumber = 0;
                newGame.currentMapObjArray[someIndex].frameIndex = 0;
                console.log(newGame.consumed, newGame.score);
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
                // console.log(that.daveDrawObject);
                that.daveDrawObject.spriteNumber = 26;
                that.daveDrawObject = new SpriteRenderer(that.daveDrawObject);
                // that.daveDrawObject.update();
                break;
            }
        }
    };
    window.addEventListener("keydown", function(event) {
        if(event.keyCode == 37) { //Left
            that.keys[0] = true;
        }
        if(event.keyCode == 39) { //Right
            that.keys[2] = true;
        }
        if(event.keyCode == 38 && !that.goingBottom && !that.goingTop) { //top
            that.keys[1] = true;
        }
    }, false);
    window.addEventListener("keyup", function(event) {
        if(event.keyCode == 37) { //Left
            that.keys[0] = false;
        }
        if(event.keyCode == 39) { //Right
            that.keys[2] = false;
        }
    }, false);

}