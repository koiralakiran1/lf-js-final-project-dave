import {topScoreCanvasContext} from '../helpers/canvasInitialization.js';
import {bottomCanvasContext} from '../helpers/canvasInitialization.js';
import {spriteConfigs} from '../configs/spriteConfigs.js';

export default function ScoreBoard(score, level, keyRetrieved) {
    this.score = score;
    this.level = level;
    this.keyRetrieved = keyRetrieved;


    this.initScoreBoard = function() {
        topScoreCanvasContext.clearRect(0,0,640,64);

        topScoreCanvasContext.drawImage(
            spriteConfigs[84].imageSource,
            spriteConfigs[84].spritePosX(),
            spriteConfigs[84].spritePosY(),
            spriteConfigs[84].singleWidth,
            spriteConfigs[84].singleHeight,
            0,
            16,
            16,32
        );
        topScoreCanvasContext.drawImage(
            spriteConfigs[72].imageSource,
            spriteConfigs[72].spritePosX(),
            spriteConfigs[72].spritePosY(),
            spriteConfigs[72].singleWidth,
            spriteConfigs[72].singleHeight,
            16+5,
            16,
            16,32
        );
        topScoreCanvasContext.drawImage(
            spriteConfigs[80].imageSource,
            spriteConfigs[80].spritePosX(),
            spriteConfigs[80].spritePosY(),
            spriteConfigs[80].singleWidth,
            spriteConfigs[80].singleHeight,
            16*2+5*2,
            16,
            16,32
        );
        topScoreCanvasContext.drawImage(
            spriteConfigs[83].imageSource,
            spriteConfigs[83].spritePosX(),
            spriteConfigs[83].spritePosY(),
            spriteConfigs[83].singleWidth,
            spriteConfigs[83].singleHeight,
            16*3+5*3,
            16,
            16,32
        );
        topScoreCanvasContext.drawImage(
            spriteConfigs[74].imageSource,
            spriteConfigs[74].spritePosX(),
            spriteConfigs[74].spritePosY(),
            spriteConfigs[74].singleWidth,
            spriteConfigs[74].singleHeight,
            16*4+5*4,
            16,
            16,32
        );
        topScoreCanvasContext.drawImage(
            spriteConfigs[88].imageSource,
            spriteConfigs[88].spritePosX(),
            spriteConfigs[88].spritePosY(),
            spriteConfigs[88].singleWidth,
            spriteConfigs[88].singleHeight,
            16*5+5*5,
            16,
            16,32
        );
        topScoreCanvasContext.drawImage(
            spriteConfigs[90].imageSource,
            spriteConfigs[90].spritePosX(),
            spriteConfigs[90].spritePosY(),
            spriteConfigs[90].singleWidth,
            spriteConfigs[90].singleHeight,
            16*6+5*6,
            16,
            16,32
        );
        topScoreCanvasContext.drawImage(
            spriteConfigs[90].imageSource,
            spriteConfigs[90].spritePosX(),
            spriteConfigs[90].spritePosY(),
            spriteConfigs[90].singleWidth,
            spriteConfigs[90].singleHeight,
            16*7+5*7,
            16,
            16,32
        );
        topScoreCanvasContext.drawImage(
            spriteConfigs[90].imageSource,
            spriteConfigs[90].spritePosX(),
            spriteConfigs[90].spritePosY(),
            spriteConfigs[90].singleWidth,
            spriteConfigs[90].singleHeight,
            16*8+5*8,
            16,
            16,32
        );
        topScoreCanvasContext.drawImage(
            spriteConfigs[90].imageSource,
            spriteConfigs[90].spritePosX(),
            spriteConfigs[90].spritePosY(),
            spriteConfigs[90].singleWidth,
            spriteConfigs[90].singleHeight,
            16*9+5*9,
            16,
            16,32
        );
        topScoreCanvasContext.drawImage(
            spriteConfigs[90].imageSource,
            spriteConfigs[90].spritePosX(),
            spriteConfigs[90].spritePosY(),
            spriteConfigs[90].singleWidth,
            spriteConfigs[90].singleHeight,
            16*10+5*10,
            16,
            16,32
        );

    };
}