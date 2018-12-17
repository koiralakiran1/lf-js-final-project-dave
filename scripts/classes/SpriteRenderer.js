import {canvasContext} from '../helpers/canvasInitialization.js';

export default function SpriteRenderer(options) {
    this.thisOptions = options;
    var that = this;

    this.thisOptions.render = function() {
        canvasContext.drawImage(
            that.thisOptions.imageSource,
            that.thisOptions.spritePosX(),
            that.thisOptions.spritePosY(),
            that.thisOptions.singleWidth,
            that.thisOptions.singleHeight,
            that.thisOptions.drawPosX(),
            that.thisOptions.drawPosY(),
            that.thisOptions.drawWidth,
            that.thisOptions.drawHeight
        );  
    };
    if(this.thisOptions.isAnimation) {
        this.thisOptions.render = function() {
            canvasContext.drawImage(
                that.thisOptions.imageSource,
                that.thisOptions.singleWidth*that.thisOptions.frameIndex + that.thisOptions.spritePosX(),
                that.thisOptions.spritePosY(),
                that.thisOptions.singleWidth,
                that.thisOptions.singleHeight,
                that.thisOptions.drawPosX(),
                that.thisOptions.drawPosY(),
                that.thisOptions.drawWidth,
                that.thisOptions.drawHeight
            );
        };
        this.thisOptions.update = function() {
            // console.log('updated');
            that.thisOptions.tickCount++;
            if(that.thisOptions.tickCount >= that.thisOptions.ticksPerFrame) {
                that.thisOptions.tickCount = 0;
                that.thisOptions.frameIndex++;
                if(that.thisOptions.frameIndex >= that.thisOptions.numberOfFrames-1) {
                    that.thisOptions.frameIndex = 0;
                } 
            }
        };
    }

    this.getOptionsObject = function() {
        return this.thisOptions;
    };
}