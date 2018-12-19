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
        that.daveDrawObject = new SpriteRenderer(that.daveDrawObject);
    };

    this.drawDaveCharacter = function() {
        that.daveDrawObject.render();
    };
    this.detectDaveCollision = function() {
        //bottom left/right ma ni check collision
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
                that.collisionArr.push('TOP__PROB_COLLISION');
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
        console.log(that.collisionArr);
    };
    this.update = function() {
        that.updateLeft();
        that.updateRight();
        that.updateTop();
    };


    this.updateLeft = function() {
        if(that.keys[0]) {

            that.daveDrawObject = Object.assign(that.daveDrawObject, spriteConfigs[43]);
            that.daveDrawObject.spriteNumber = 43;
            that.daveDrawObject = new SpriteRenderer(that.daveDrawObject);

            that.daveDrawObject.frameIndex++;
            if(!that.collisionArr.includes('LEFT_PROB_COLLISION')) {
                that.daveDrawObject.offsetX -= 2;
            }
            if(that.daveDrawObject.frameIndex >= that.daveDrawObject.numberOfFrames()) {
                that.daveDrawObject.frameIndex = 0;
            }
        }
    };
    this.updateRight = function() {
        if(that.keys[2]) {
            that.daveDrawObject = Object.assign(that.daveDrawObject, spriteConfigs[42]);
            that.daveDrawObject.spriteNumber = 42;
            that.daveDrawObject = new SpriteRenderer(that.daveDrawObject);

            that.daveDrawObject.frameIndex++;
            if(!that.collisionArr.includes('RIGHT_PROB_COLLISION')) {
                that.daveDrawObject.offsetX += 2;
            }
            if (that.daveDrawObject.frameIndex >= that.daveDrawObject.numberOfFrames()) {
                that.daveDrawObject.frameIndex = 0;
            }
        }
    };
    this.updateTop = function() {
        if(that.keys[1]) {
            if (that.daveDrawObject.spriteNumber == 43) { //BACK
                console.log('up left');
                that.daveDrawObject = Object.assign(that.daveDrawObject, spriteConfigs[45]);
                that.daveDrawObject.spriteNumber = 45;
            } else if(that.daveDrawObject.spriteNumber == 42 || that.daveDrawObject.spriteNumber == 41) { //Right or no moved
                console.log('up right');
                that.daveDrawObject = Object.assign(that.daveDrawObject, spriteConfigs[44]);
                that.daveDrawObject.spriteNumber = 44;
            }
            that.daveDrawObject = new SpriteRenderer(that.daveDrawObject);
            // if(!that.collisionArr.includes('TOP_COLLISION')) {
            //     that.daveDrawObject.offsetY -= 2;
            // }
            // if((that.daveDrawObject.offsetY * -1) % 64 == 0 && that.daveDrawObject.offsetY != 0) {
            //     // console.log('over');
            //     that.keys[1] = false;
            //     // that.daveCharacter.daveDrawObject.offsetY = 0;
            // }
        }
    };






    window.addEventListener("keypress", function(event) {
        if(event.keyCode == 38) {
            that.keys[1] = true;
        }
    });

    window.addEventListener("keydown", function(event) {
        if(event.keyCode == 37) { //Left
            // that.updateLeft();
            that.keys[0] = true;
        }
        if(event.keyCode == 39) { //Right
            // that.updateRight();
            that.keys[2] = true;
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