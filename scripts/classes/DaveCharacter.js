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

        that.checkConsumableCollisionLeft(daveIndex,daveIndexAfterH, daveIndexAfterW, daveIndexAfterWH);
        that.checkConsumableCollisionRight(daveIndex,daveIndexAfterH, daveIndexAfterW, daveIndexAfterWH);
        that.checkConsumableCollisionTop(daveIndex,daveIndexAfterH, daveIndexAfterW, daveIndexAfterWH);
        that.checkConsumableCollisionBottom(daveIndex,daveIndexAfterH, daveIndexAfterW, daveIndexAfterWH);

        that.checkKillersCollisionLeft(daveIndex,daveIndexAfterH, daveIndexAfterW, daveIndexAfterWH);
        that.checkKillersCollisionRight(daveIndex,daveIndexAfterH, daveIndexAfterW, daveIndexAfterWH);
        that.checkKillersCollisionTop(daveIndex,daveIndexAfterH, daveIndexAfterW, daveIndexAfterWH);
        that.checkKillersCollisionBottom(daveIndex,daveIndexAfterH, daveIndexAfterW, daveIndexAfterWH);

    };

    this.checkProbableBlockCollisionLeft = function(daveIndex, daveIndexAfterH, daveIndexAfterW, daveIndexAfterWH) {
        if((that.currentMapObjArray[daveIndexAfterW-1].spriteNumber >= 1 && that.currentMapObjArray[daveIndexAfterW-1].spriteNumber <=10) ||
            (that.currentMapObjArray[daveIndexAfterWH-1].spriteNumber >= 1 && that.currentMapObjArray[daveIndexAfterWH-1].spriteNumber <=10)) {
                if(!that.collisionArr.includes('LEFT_BLOCK_PROB_COLLISION')) {
                    that.collisionArr.push('LEFT_BLOCK_PROB_COLLISION');
                }
        } else if(that.collisionArr.includes('LEFT_BLOCK_PROB_COLLISION')) {
            that.collisionArr = removeValueFromArray(that.collisionArr, 'LEFT_BLOCK_PROB_COLLISION');
        }
    };
    this.checkProbableBlockCollisionRight = function(daveIndex, daveIndexAfterH, daveIndexAfterW, daveIndexAfterWH) {
        if((that.currentMapObjArray[daveIndex+1].spriteNumber >= 1 && that.currentMapObjArray[daveIndex+1].spriteNumber <=10) ||
            (that.currentMapObjArray[daveIndexAfterH+1].spriteNumber >= 1 && that.currentMapObjArray[daveIndexAfterH+1].spriteNumber <=10)) {
                if(!that.collisionArr.includes('RIGHT_BLOCK_PROB_COLLISION')) {
                    that.collisionArr.push('RIGHT_BLOCK_PROB_COLLISION');
                }
        } else if(that.collisionArr.includes('RIGHT_BLOCK_PROB_COLLISION')) {
            that.collisionArr = removeValueFromArray(that.collisionArr, 'RIGHT_BLOCK_PROB_COLLISION');
        }
    };
    this.checkProbableBlockCollisionTop = function(daveIndex, daveIndexAfterH, daveIndexAfterW, daveIndexAfterWH) {
        if((that.currentMapObjArray[daveIndexAfterH-20].spriteNumber >= 1 && that.currentMapObjArray[daveIndexAfterH-20].spriteNumber <=10) ||
            (that.currentMapObjArray[daveIndexAfterWH-20].spriteNumber >= 1 && that.currentMapObjArray[daveIndexAfterWH-20].spriteNumber <=10)) {
                if(!that.collisionArr.includes('TOP_BLOCK_PROB_COLLISION')) {
                    that.collisionArr.push('TOP_BLOCK_PROB_COLLISION');
                }
        } else if(that.collisionArr.includes('TOP_BLOCK_PROB_COLLISION')) {
            that.collisionArr = removeValueFromArray(that.collisionArr, 'TOP_BLOCK_PROB_COLLISION');
        }
    };
    this.checkProbableBlockCollisionBottom = function(daveIndex, daveIndexAfterH, daveIndexAfterW, daveIndexAfterWH) {
        if((that.currentMapObjArray[daveIndex+20].spriteNumber >= 1 && that.currentMapObjArray[daveIndex+20].spriteNumber <=10) ||
            (that.currentMapObjArray[daveIndexAfterW+20].spriteNumber >= 1 && that.currentMapObjArray[daveIndexAfterW+20].spriteNumber <=10)) {
                if(!that.collisionArr.includes('BOTTOM_BLOCK_PROB_COLLISION')) {
                    that.collisionArr.push('BOTTOM_BLOCK_PROB_COLLISION');
                }
        } else if(that.collisionArr.includes('BOTTOM_BLOCK_PROB_COLLISION')) {
            that.collisionArr = removeValueFromArray(that.collisionArr, 'BOTTOM_BLOCK_PROB_COLLISION');
        }
    };


    this.checkConsumableCollisionLeft = function(daveIndex, daveIndexAfterH, daveIndexAfterW, daveIndexAfterWH) {
        if((that.currentMapObjArray[daveIndex].spriteNumber >= 11 && that.currentMapObjArray[daveIndex].spriteNumber <=20)) {
            //consumable collision left
            newGame.currentMapObjArray[daveIndex] = Object.assign(newGame.currentMapObjArray[daveIndex], spriteConfigs[0]);
            newGame.currentMapObjArray[daveIndex].spriteNumber = 0;
            newGame.currentMapObjArray[daveIndex].frameIndex = 0;
        }
        if((that.currentMapObjArray[daveIndexAfterH].spriteNumber >= 11 && that.currentMapObjArray[daveIndexAfterH].spriteNumber <=20)) {
            newGame.currentMapObjArray[daveIndexAfterH] = Object.assign(newGame.currentMapObjArray[daveIndexAfterH], spriteConfigs[0]);
            newGame.currentMapObjArray[daveIndexAfterH].spriteNumber = 0;
            newGame.currentMapObjArray[daveIndexAfterH].frameIndex = 0;
        }
    };
    this.checkConsumableCollisionRight = function(daveIndex, daveIndexAfterH, daveIndexAfterW, daveIndexAfterWH) {
        if((that.currentMapObjArray[daveIndexAfterW].spriteNumber >= 11 && that.currentMapObjArray[daveIndexAfterW].spriteNumber <=20)) {
                // consumable collision right
            newGame.currentMapObjArray[daveIndexAfterW] = Object.assign(newGame.currentMapObjArray[daveIndexAfterW], spriteConfigs[0]);
            newGame.currentMapObjArray[daveIndexAfterW].spriteNumber = 0;
            newGame.currentMapObjArray[daveIndexAfterW].frameIndex = 0;
        }
        if((that.currentMapObjArray[daveIndexAfterWH].spriteNumber >= 11 && that.currentMapObjArray[daveIndexAfterWH].spriteNumber <=20)) {
            newGame.currentMapObjArray[daveIndexAfterWH] = Object.assign(newGame.currentMapObjArray[daveIndexAfterWH], spriteConfigs[0]);
            newGame.currentMapObjArray[daveIndexAfterWH].spriteNumber = 0;
            newGame.currentMapObjArray[daveIndexAfterWH].frameIndex = 0;
        }
    };
    this.checkConsumableCollisionTop = function(daveIndex, daveIndexAfterH, daveIndexAfterW, daveIndexAfterWH) {
        if((that.currentMapObjArray[daveIndex].spriteNumber >= 11 && that.currentMapObjArray[daveIndex].spriteNumber <=20)) {
            // consumable collision top
            newGame.currentMapObjArray[daveIndex] = Object.assign(newGame.currentMapObjArray[daveIndex], spriteConfigs[0]);
            newGame.currentMapObjArray[daveIndex].spriteNumber = 0;
            newGame.currentMapObjArray[daveIndex].frameIndex = 0;
        }
        if((that.currentMapObjArray[daveIndexAfterW].spriteNumber >= 11 && that.currentMapObjArray[daveIndexAfterW].spriteNumber <=20)) {
            newGame.currentMapObjArray[daveIndexAfterW] = Object.assign(newGame.currentMapObjArray[daveIndexAfterW], spriteConfigs[0]);
            newGame.currentMapObjArray[daveIndexAfterW].spriteNumber = 0;
            newGame.currentMapObjArray[daveIndexAfterW].frameIndex = 0;
        }
    };
    this.checkConsumableCollisionBottom = function(daveIndex, daveIndexAfterH, daveIndexAfterW, daveIndexAfterWH) {
        if((that.currentMapObjArray[daveIndexAfterH].spriteNumber >= 11 && that.currentMapObjArray[daveIndexAfterH].spriteNumber <= 20)) {
            // consumable collision bottom
            newGame.currentMapObjArray[daveIndexAfterH] = Object.assign(newGame.currentMapObjArray[daveIndexAfterH], spriteConfigs[0]);
            newGame.currentMapObjArray[daveIndexAfterH].spriteNumber = 0;
            newGame.currentMapObjArray[daveIndexAfterH].frameIndex = 0;
        }
        if((that.currentMapObjArray[daveIndexAfterWH].spriteNumber >= 11 && that.currentMapObjArray[daveIndexAfterWH].spriteNumber <= 20)) {
            newGame.currentMapObjArray[daveIndexAfterWH] = Object.assign(newGame.currentMapObjArray[daveIndexAfterWH], spriteConfigs[0]);
            newGame.currentMapObjArray[daveIndexAfterWH].spriteNumber = 0;
            newGame.currentMapObjArray[daveIndexAfterWH].frameIndex = 0;
        }
    };

    this.checkKillersCollisionLeft = function(daveIndex, daveIndexAfterH, daveIndexAfterW, daveIndexAfterWH) {
        if((that.currentMapObjArray[daveIndex].spriteNumber >= 21 && that.currentMapObjArray[daveIndex].spriteNumber <=23)) {
            //consumable collision left
            that.daveDrawObject = Object.assign(that.daveDrawObject, spriteConfigs[26]);
            that.daveDrawObject.frameIndex = 0;
            // console.log(that.daveDrawObject);
            that.daveDrawObject.spriteNumber = 26;
            that.daveDrawObject = new SpriteRenderer(that.daveDrawObject);
        }
        if((that.currentMapObjArray[daveIndexAfterH].spriteNumber >= 21 && that.currentMapObjArray[daveIndexAfterH].spriteNumber <=23)) {
            that.daveDrawObject = Object.assign(that.daveDrawObject, spriteConfigs[26]);
            that.daveDrawObject.frameIndex = 0;
            // console.log(that.daveDrawObject);
            that.daveDrawObject.spriteNumber = 26;
            that.daveDrawObject = new SpriteRenderer(that.daveDrawObject);
        }
    };
    this.checkKillersCollisionRight = function(daveIndex, daveIndexAfterH, daveIndexAfterW, daveIndexAfterWH) {
        if((that.currentMapObjArray[daveIndexAfterW].spriteNumber >= 21 && that.currentMapObjArray[daveIndexAfterW].spriteNumber <=23)) {
            // consumable collision right
            that.daveDrawObject = Object.assign(that.daveDrawObject, spriteConfigs[26]);
            that.daveDrawObject.frameIndex = 0;
            // console.log(that.daveDrawObject);
            that.daveDrawObject.spriteNumber = 26;
            that.daveDrawObject = new SpriteRenderer(that.daveDrawObject);
        }
        if((that.currentMapObjArray[daveIndexAfterWH].spriteNumber >= 21 && that.currentMapObjArray[daveIndexAfterWH].spriteNumber <=23)) {
            that.daveDrawObject = Object.assign(that.daveDrawObject, spriteConfigs[26]);
            that.daveDrawObject.frameIndex = 0;
            // console.log(that.daveDrawObject);
            that.daveDrawObject.spriteNumber = 26;
            that.daveDrawObject = new SpriteRenderer(that.daveDrawObject);
        }
    };
    this.checkKillersCollisionTop = function(daveIndex, daveIndexAfterH, daveIndexAfterW, daveIndexAfterWH) {
        if((that.currentMapObjArray[daveIndex].spriteNumber >= 21 && that.currentMapObjArray[daveIndex].spriteNumber <=23)) {
            // consumable collision top
            that.daveDrawObject = Object.assign(that.daveDrawObject, spriteConfigs[26]);
            that.daveDrawObject.frameIndex = 0;
            // console.log(that.daveDrawObject);
            that.daveDrawObject.spriteNumber = 26;
            that.daveDrawObject = new SpriteRenderer(that.daveDrawObject);
        }
        if((that.currentMapObjArray[daveIndexAfterW].spriteNumber >= 21 && that.currentMapObjArray[daveIndexAfterW].spriteNumber <=23)) {
            that.daveDrawObject = Object.assign(that.daveDrawObject, spriteConfigs[26]);
            that.daveDrawObject.frameIndex = 0;
            // console.log(that.daveDrawObject);
            that.daveDrawObject.spriteNumber = 26;
            that.daveDrawObject = new SpriteRenderer(that.daveDrawObject);
        }
    };
    this.checkKillersCollisionBottom = function(daveIndex, daveIndexAfterH, daveIndexAfterW, daveIndexAfterWH) {
        if((that.currentMapObjArray[daveIndexAfterH].spriteNumber >= 21 && that.currentMapObjArray[daveIndexAfterH] <= 23)) {
            // consumable collision bottom
            that.daveDrawObject = Object.assign(that.daveDrawObject, spriteConfigs[26]);
            that.daveDrawObject.frameIndex = 0;
            // console.log(that.daveDrawObject);
            that.daveDrawObject.spriteNumber = 26;
            that.daveDrawObject = new SpriteRenderer(that.daveDrawObject);
        }
        if((that.currentMapObjArray[daveIndexAfterWH].spriteNumber >= 21 && that.currentMapObjArray[daveIndexAfterWH].spriteNumber <= 23)) {
            that.daveDrawObject = Object.assign(that.daveDrawObject, spriteConfigs[26]);
            that.daveDrawObject.frameIndex = 0;
            // console.log(that.daveDrawObject);
            that.daveDrawObject.spriteNumber = 26;
            that.daveDrawObject = new SpriteRenderer(that.daveDrawObject);
        }
    };

    // this.checkConsumableCollision = function(someIndex) {
    //     switch(that.currentMapObjArray[someIndex].spriteNumber) {
    //         case 11: case 12: case 13: case 14: case 15: case 16: case 17:
    //         case 18: case 19: case 20: {
    //             newGame.currentMapObjArray[someIndex] = Object.assign(newGame.currentMapObjArray[someIndex], spriteConfigs[0]);
    //             newGame.currentMapObjArray[someIndex].spriteNumber = 0;
    //             newGame.currentMapObjArray[someIndex].frameIndex = 0;
    //             break;
    //         }
    //         case 21: case 22: case 23: case 24: case 25: case 26: case 27:
    //         case 28: case 29: case 30: {
    //             that.daveDrawObject = Object.assign(that.daveDrawObject, spriteConfigs[26]);
    //             that.daveDrawObject.frameIndex = 0;
    //             // console.log(that.daveDrawObject);
    //             that.daveDrawObject.spriteNumber = 26;
    //             that.daveDrawObject = new SpriteRenderer(that.daveDrawObject);
    //         }
    //     }
    // };

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