import {spriteConfigs} from '../configs/spriteConfigs.js';
import SpriteRenderer from './SpriteRenderer.js';
import {convertPositionToIndex} from '../helpers/utils.js';
import {removeValueFromArray} from '../helpers/utils.js';

export default function DaveCharacter(currentMap, currentMapObjArray) {
    var that = this;
    this.currentMap = currentMap;
    this.currentMapObjArray = currentMapObjArray;
    this.keys = [false, false, false, false];
    this.collisionArr = [];
    this.upHandled = false;


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
        that.daveDrawObject = new SpriteRenderer(that.daveDrawObject);
    };

    this.drawDaveCharacter = function() {
        that.daveDrawObject.render();
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
            // if(that.daveDrawObject.drawPosX() <= that.currentMapObjArray[daveIndex-1].drawPosX() + that.currentMapObjArray[daveIndex-1].drawWidth) {

            // }
            if(!that.collisionArr.includes('LEFT_PROB_COLLISION')) {
                that.collisionArr.push('LEFT_PROB_COLLISION');
            }
        } else if(that.collisionArr.includes('LEFT_PROB_COLLISION')) {
            that.collisionArr = removeValueFromArray(that.collisionArr, 'LEFT_PROB_COLLISION');
        }

        // check right
        if(that.currentMapObjArray[daveIndex+1].spriteNumber != 0 ||
            that.currentMapObjArray[daveIndexAfterH+1].spriteNumber != 0) {//right
            // if(that.daveDrawObject.drawPosX() + that.daveDrawObject.drawWidth >= that.currentMapObjArray[daveIndex+1].drawPosX() + 2) {

            // }
            if(!that.collisionArr.includes('RIGHT_PROB_COLLISION')) {
                that.collisionArr.push('RIGHT_PROB_COLLISION');
            }
        } else if(that.collisionArr.includes('RIGHT_PROB_COLLISION')) {
            that.collisionArr = removeValueFromArray(that.collisionArr, 'RIGHT_PROB_COLLISION');
        }

        // check top
        if(that.currentMapObjArray[daveIndexAfterH-20].spriteNumber != 0 ||
            that.currentMapObjArray[daveIndexAfterWH-20].spriteNumber != 0) {
            if(!that.collisionArr.includes('TOP_PROB_COLLISION')) {
                that.collisionArr.push('TOP_PROB_COLLISION');
            }
        } else if(that.collisionArr.includes('TOP_PROB_COLLISION')) {
            that.collisionArr = removeValueFromArray(that.collisionArr, 'TOP_PROB_COLLISION');
        }

        //check bottom
        if(that.currentMapObjArray[daveIndex+20].spriteNumber != 0 ||
            that.currentMapObjArray[daveIndexAfterW+20].spriteNumber != 0) {
            if(!that.collisionArr.includes('BOTTOM_PROB_COLLISION')) {
                that.collisionArr.push('BOTTOM_PROB_COLLISION');
            }
        } else if(that.collisionArr.includes('BOTTOM_PROB_COLLISION')) {
            that.collisionArr = removeValueFromArray(that.collisionArr, 'BOTTOM_PROB_COLLISION');
        }
    };
    this.update = function() {
        that.updateLeft();
        that.updateRight();
        that.updateTop();
        that.updateBottom();
    };


    this.updateLeft = function() {
        if(that.keys[0]) {
            that.daveDrawObject = Object.assign(that.daveDrawObject, spriteConfigs[43]);
            that.daveDrawObject.spriteNumber = 43;
            that.daveDrawObject = new SpriteRenderer(that.daveDrawObject);
            that.daveDrawObject.update();
            if(!that.collisionArr.includes('LEFT_PROB_COLLISION')) {
                that.daveDrawObject.offsetX -= 2;
            }
            // console.log(that.daveDrawObject);
        }
    };
    this.updateRight = function() {
        if(that.keys[2]) {
            that.daveDrawObject = Object.assign(that.daveDrawObject, spriteConfigs[42]);
            that.daveDrawObject.spriteNumber = 42;
            that.daveDrawObject = new SpriteRenderer(that.daveDrawObject);
            that.daveDrawObject.update();
            if(!that.collisionArr.includes('RIGHT_PROB_COLLISION')) {

                that.daveDrawObject.offsetX += 2;
            }
            // console.log(that.daveDrawObject.frameIndex, that.daveDrawObject.numberOfFrames());
        }
    };
    this.updateTop = function() {
        if(that.keys[1]) {
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
            if(!that.collisionArr.includes('TOP_PROB_COLLISION')) {
                if(that.daveDrawObject.offsetY >= 64) {
                    that.updateBottom();
                } else {
                    that.daveDrawObject.offsetY -=2;
                    that.upHandled = false;
                }
            }
        }
    };
    this.updateBottom = function() {
        if(!that.collisionArr.includes('BOTTOM_PROB_COLLISION')) {
            that.daveDrawObject.offsetY += 2;
            that.upHandled = true;
        }
    };
    window.addEventListener("keydown", function(event) {
        if(event.keyCode == 37) { //Left
            that.keys[0] = true;
        }
        if(event.keyCode == 39) { //Right
            that.keys[2] = true;
        }
        if(event.keyCode == 38) { //top
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