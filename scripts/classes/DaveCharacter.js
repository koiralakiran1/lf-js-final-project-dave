import {spriteConfigs} from '../configs/spriteConfigs.js';
import SpriteRenderer from './SpriteRenderer.js';
import {convertPositionToIndex} from '../helpers/utils.js';
import {removeValueFromArray} from '../helpers/utils.js';
import {newGame} from '../script.js';

export default function DaveCharacter(currentMap, currentMapObjArray) {
    var that = this;
    this.currentMap = currentMap;
    this.currentMapObjArray = currentMapObjArray;
    this.keys = [false, false, false, false];
    this.collisionArr = [];

    this.goingTop = false;
    this.goingBottom = false;
    this.offsetYInc = 0;
    this.rightKeyPressedLast = false;
    this.consumed = {
        skyBlueDiamondGem: 0,
        redDiamondGem: 0,
        pinkSphere: 0,
        gun: false,
        redYellowRing: 0,
        greenGreyWand: 0,
        redYellowCrown: 0,
        lampKey: false,
        jetPack: false
    };


    this.initDaveCharacter = function() {
        that.tunnelIndex = that.currentMap.findIndex(function(element) {
            return element == 33 || element == 34;
        });
        that.daveDrawObject = Object.assign({}, that.currentMapObjArray[that.tunnelIndex]);
        that.daveDrawObject = Object.assign(that.daveDrawObject, spriteConfigs[41]);
        if(that.currentMap[that.tunnelIndex] == 33) {
            that.daveDrawObject.xInc++;
        } else if(that.currentMap[that.tunnelIndex] == 34) {
            that.daveDrawObject.yInc++;
        }
        that.daveDrawObject.spriteNumber = 41;
        that.daveDrawObject.ticksPerFrame = 5;
        // that.daveDrawObject.offsetY = -192;
        // that.daveDrawObject.offsetX = +32;

        that.daveDrawObject = new SpriteRenderer(that.daveDrawObject);
    };

    this.drawDaveCharacter = function() {
        that.daveDrawObject.render();
    };
    this.checkConsumableCollision = function(someIndex) {
        switch(that.currentMapObjArray[someIndex].spriteNumber) {
            case 11: case 12: case 13: case 14: case 15: case 16: case 17:
            case 18: case 19: case 20: {
                newGame.currentMapObjArray[someIndex] = Object.assign(newGame.currentMapObjArray[someIndex], spriteConfigs[0]);
                newGame.currentMapObjArray[someIndex].spriteNumber = 0;
                newGame.currentMapObjArray[someIndex].frameIndex = 0;
                break;
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

        // check left
        if(that.currentMapObjArray[daveIndexAfterW-1].spriteNumber != 0 ||
            that.currentMapObjArray[daveIndexAfterWH-1].spriteNumber != 0) { //left

            if(that.currentMapObjArray[daveIndexAfterW-1].spriteNumber != 0) {
                that.checkConsumableCollision(daveIndexAfterW-1);
                // console.log('consume');
            }
            if(that.currentMapObjArray[daveIndexAfterWH-1].spriteNumber != 0) {
                that.checkConsumableCollision(daveIndexAfterWH-1);
            }
            if(!that.collisionArr.includes('LEFT_BLOCK_COLLISION')) {
                that.collisionArr.push('LEFT_BLOCK_COLLISION');
            }
        } else if(that.collisionArr.includes('LEFT_BLOCK_COLLISION')) {
            that.collisionArr = removeValueFromArray(that.collisionArr, 'LEFT_BLOCK_COLLISION');
        }

        // check right
        if(that.currentMapObjArray[daveIndex+1].spriteNumber != 0 ||
            that.currentMapObjArray[daveIndexAfterH+1].spriteNumber != 0) {//right

            if(that.currentMapObjArray[daveIndex+1].spriteNumber != 0) {
                that.checkConsumableCollision(daveIndex+1);
                // console.log('consume');
            }
            if(that.currentMapObjArray[daveIndexAfterH+1].spriteNumber != 0) {
                that.checkConsumableCollision(daveIndexAfterH+1);
            }

            if(!that.collisionArr.includes('RIGHT_BLOCK_COLLISION')) {
                that.collisionArr.push('RIGHT_BLOCK_COLLISION');
            }
        } else if(that.collisionArr.includes('RIGHT_BLOCK_COLLISION')) {
            that.collisionArr = removeValueFromArray(that.collisionArr, 'RIGHT_BLOCK_COLLISION');
        }

        // check top
        if(that.currentMapObjArray[daveIndexAfterH-20].spriteNumber != 0 ||
            that.currentMapObjArray[daveIndexAfterWH-20].spriteNumber != 0) {

            if(that.currentMapObjArray[daveIndexAfterH-20].spriteNumber != 0) {
                that.checkConsumableCollision(daveIndexAfterH-20);
                // console.log('consume');
            }
            if(that.currentMapObjArray[daveIndexAfterWH-20].spriteNumber != 0) {
                that.checkConsumableCollision(daveIndexAfterWH-20);
            }

            if(!that.collisionArr.includes('TOP_BLOCK_COLLISION')) {
                that.collisionArr.push('TOP_BLOCK_COLLISION');
            }
        } else if(that.collisionArr.includes('TOP_BLOCK_COLLISION')) {
            that.collisionArr = removeValueFromArray(that.collisionArr, 'TOP_BLOCK_COLLISION');
        }

        //check bottom
        if(that.currentMapObjArray[daveIndex+20].spriteNumber != 0 ||
            that.currentMapObjArray[daveIndexAfterW+20].spriteNumber != 0) {

            if(that.currentMapObjArray[daveIndex+20].spriteNumber != 0) {
                that.checkConsumableCollision(daveIndex+20);
                // console.log('consume');
            }
            if(that.currentMapObjArray[daveIndexAfterW+20].spriteNumber != 0) {
                that.checkConsumableCollision(daveIndexAfterW+20);
            }
            if(!that.collisionArr.includes('BOTTOM_BLOCK_COLLISION')) {
                that.collisionArr.push('BOTTOM_BLOCK_COLLISION');
            }
        } else if(that.collisionArr.includes('BOTTOM_BLOCK_COLLISION')) {
            that.collisionArr = removeValueFromArray(that.collisionArr, 'BOTTOM_BLOCK_COLLISION');
        }
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
            if(!that.collisionArr.includes('LEFT_BLOCK_COLLISION')) {
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
            if(!that.collisionArr.includes('RIGHT_BLOCK_COLLISION')) {

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
                if(that.rightKeyPressedLast) {
                    // console.log('up right');
                    that.daveDrawObject = Object.assign(that.daveDrawObject, spriteConfigs[44]);
                    that.daveDrawObject.frameIndex = 0;
                    // console.log(that.daveDrawObject);
                    that.daveDrawObject.spriteNumber = 44;
                    that.daveDrawObject = new SpriteRenderer(that.daveDrawObject);
                } else {
                    // console.log('up left');
                    that.daveDrawObject = Object.assign(that.daveDrawObject, spriteConfigs[45]);
                    that.daveDrawObject.frameIndex = 0;
                    // console.log(that.daveDrawObject);
                    that.daveDrawObject.spriteNumber = 45;
                    that.daveDrawObject = new SpriteRenderer(that.daveDrawObject);
                }
            }

            if(!that.collisionArr.includes('TOP_BLOCK_COLLISION')) {
                that.goingTop = true;
                that.daveDrawObject.offsetY -= 2;
                that.offsetYInc += 2;
                if(that.offsetYInc % 70 == 0) {
                    that.keys[1] =false;
                    that.goingTop = false;
                }
            } else {
                that.goingTop = false;
                that.keys[1] = false;
            }
        }
    };
    this.updateBottom = function() {
        //change sprite
        if(!that.collisionArr.includes('BOTTOM_BLOCK_COLLISION') && !that.goingTop) {
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
        if(that.collisionArr.includes('BOTTOM_BLOCK_COLLISION')) {
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