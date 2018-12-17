import {spriteConfigs} from '../configs/spriteConfigs.js';
import SpriteRenderer from './SpriteRenderer.js';

export default function DaveCharacter() {
    var that = this;

    this.initDaveCharacter = function(currentMap, currentMapObjArray) {
        that.tunnelIndex = currentMap.findIndex(function(element) {
            return element == 33 || element == 34;
        });
        that.daveDrawObject = Object.assign({}, currentMapObjArray[that.tunnelIndex]);
        that.daveDrawObject = Object.assign(that.daveDrawObject, spriteConfigs[42]);
        if(currentMap[that.tunnelIndex] == 33) {
            that.daveDrawObject.xInc = that.daveDrawObject.xInc + 1;
        } else if(currentMap[tunnelIndex] == 34) {
            that.daveDrawObject.yInc = that.daveDrawObject.yInc + 1;
        }
        that.daveDrawObject.spriteNumber = 41;
        // that.daveDrawObject.ticksPerFrame = 20;
        that.daveDrawObject.numberOfFrames = that.daveDrawObject.maxIndexX + 1;
        that.daveDrawObject = new SpriteRenderer(that.daveDrawObject); 
        console.log(that.daveDrawObject);
    };
    
    this.drawDaveCharacter = function() {
        that.daveDrawObject.render();
    };
    this.updateDaveCharacter = function() {
        if(that.daveDrawObject.isAnimation) {
            that.daveDrawObject.update();
        }
    };
}