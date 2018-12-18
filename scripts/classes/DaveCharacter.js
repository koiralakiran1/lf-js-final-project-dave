import {spriteConfigs} from '../configs/spriteConfigs.js';
import SpriteRenderer from './SpriteRenderer.js';

export default function DaveCharacter() {
    var that = this;

    this.initDaveCharacter = function(currentMap, currentMapObjArray) {
        that.tunnelIndex = currentMap.findIndex(function(element) {
            return element == 33 || element == 34;
        });
        that.daveDrawObject = Object.assign({}, currentMapObjArray[that.tunnelIndex]);
        that.daveDrawObject = Object.assign(that.daveDrawObject, spriteConfigs[41]);
        if(currentMap[that.tunnelIndex] == 33) {
            that.daveDrawObject.xInc = that.daveDrawObject.xInc + 1;
        } else if(currentMap[that.tunnelIndex] == 34) {
            that.daveDrawObject.yInc = that.daveDrawObject.yInc + 1;
        }
        that.daveDrawObject.spriteNumber = 41;
        // that.daveDrawObject.ticksPerFrame = 20;
        that.daveDrawObject.numberOfFrames = that.daveDrawObject.maxIndexX + 1;
        that.daveDrawObject = new SpriteRenderer(that.daveDrawObject); 
    };
    
    this.drawDaveCharacter = function() {
        that.daveDrawObject.render();
    };
    this.updateDaveCharacter = function() {
        
    };
    window.addEventListener("keypress", function(event) {
        if(event.keyCode == 37) { //Left
            that.daveDrawObject = Object.assign(that.daveDrawObject, spriteConfigs[43]);
            that.daveDrawObject.spriteNumber = 43;
            that.daveDrawObject.numberOfFrames = that.daveDrawObject.maxIndexX - that.daveDrawObject.indexX + 1;
            that.daveDrawObject = new SpriteRenderer(that.daveDrawObject);

            that.daveDrawObject.frameIndex++;
            that.daveDrawObject.offsetX -= 5;
            if(that.daveDrawObject.frameIndex >= that.daveDrawObject.numberOfFrames) {
                that.daveDrawObject.frameIndex = 0;
            }
            that.daveDrawObject.render();
        } 
        if(event.keyCode == 38) { //Top
            if (that.daveDrawObject.spriteNumber == 43) { //left
                this.console.log('up left');
                that.daveDrawObject = Object.assign(that.daveDrawObject, spriteConfigs[45]);
                that.daveDrawObject.spriteNumber = 45;
            } else { //Right or no moved
                this.console.log('up right');                
                that.daveDrawObject = Object.assign(that.daveDrawObject, spriteConfigs[44]);
                that.daveDrawObject.spriteNumber = 44;
            }
            that.daveDrawObject = new SpriteRenderer(that.daveDrawObject);
            that.daveDrawObject.render();  
        } 
        if(event.keyCode == 39) { //Right
            that.daveDrawObject = Object.assign(that.daveDrawObject, spriteConfigs[42]);
            that.daveDrawObject.spriteNumber = 42;
            that.daveDrawObject.numberOfFrames = that.daveDrawObject.maxIndexX - that.daveDrawObject.indexX + 1;
            that.daveDrawObject = new SpriteRenderer(that.daveDrawObject);

            that.daveDrawObject.frameIndex++;
            that.daveDrawObject.offsetX += 5;
            if(that.daveDrawObject.frameIndex >= that.daveDrawObject.numberOfFrames) {
                that.daveDrawObject.frameIndex = 0;
            }
            that.daveDrawObject.render();
        } 
        
        if(event.keyCode == 40) { //Down

        }
    }, false);
}