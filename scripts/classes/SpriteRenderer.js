import {canvasContext} from '../helpers/canvasInitialization.js';

export default function SpriteRenderer(options) {
    var that = Object.assign(this, options);
    that.render = function() {
        canvasContext.drawImage(
            that.imageSource,
            that.spritePosX(),
            that.spritePosY(),
            that.singleWidth,
            that.singleHeight,
            that.drawPosX(),
            that.drawPosY(),
            that.drawWidth,
            that.drawHeight
        );  
    };
    if(that.isAnimation) {
        that.render = function() {
            canvasContext.drawImage(
                that.imageSource,
                that.singleWidth*that.frameIndex + that.spritePosX(),
                that.spritePosY(),
                that.singleWidth,
                that.singleHeight,
                that.drawPosX(),
                that.drawPosY(),
                that.drawWidth,
                that.drawHeight
            );
        };
        that.update = function() {
            // console.log('updated');
            that.tickCount++;
            if(that.tickCount >= that.ticksPerFrame) {
                that.tickCount = 0;
                that.frameIndex++;
                if(that.frameIndex >= that.numberOfFrames()-1) {
                    that.frameIndex = 0;
                } 
            }
        };
    }
    return that;
}