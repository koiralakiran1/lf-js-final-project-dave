import {topScoreCanvasContext} from '../helpers/canvasInitialization.js';
import {spriteConfigs} from '../configs/spriteConfigs.js';
import {formatNumberLength} from '../helpers/utils.js';
import {bottomCanvasContext} from '../helpers/canvasInitialization.js';

export default function DisplayBoard() {
    const LETTER_SPACING = 3;

    this.displayTopScoreBoard = function(score, level, numberOfLivesLeft) {
        var formattedScore = formatNumberLength(score, 5);
        var firstDigit = formattedScore[0];
        var secondDigit = formattedScore[1];
        var thirdDigit = formattedScore[2];
        var fourthDigit = formattedScore[3];
        var fifthDigit = formattedScore[4];

        var formattedLevel = formatNumberLength(level, 2);
        var firstDigitOfLevel = formattedLevel[0];
        var secondDigitOfLevel = formattedLevel[1];

        topScoreCanvasContext.clearRect(0,0,640,64);

        //SCORE: 0000
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
            16 + LETTER_SPACING,
            16,
            16,32
        );
        topScoreCanvasContext.drawImage(
            spriteConfigs[81].imageSource,
            spriteConfigs[81].spritePosX(),
            spriteConfigs[81].spritePosY(),
            spriteConfigs[81].singleWidth,
            spriteConfigs[81].singleHeight,
            16*2 + LETTER_SPACING*2,
            16,
            16,32
        );
        topScoreCanvasContext.drawImage(
            spriteConfigs[83].imageSource,
            spriteConfigs[83].spritePosX(),
            spriteConfigs[83].spritePosY(),
            spriteConfigs[83].singleWidth,
            spriteConfigs[83].singleHeight,
            16*3 + LETTER_SPACING*3,
            16,
            16,32
        );
        topScoreCanvasContext.drawImage(
            spriteConfigs[74].imageSource,
            spriteConfigs[74].spritePosX(),
            spriteConfigs[74].spritePosY(),
            spriteConfigs[74].singleWidth,
            spriteConfigs[74].singleHeight,
            16*4 + LETTER_SPACING*4,
            16,
            16,32
        );
        topScoreCanvasContext.drawImage(
            spriteConfigs[88].imageSource,
            spriteConfigs[88].spritePosX(),
            spriteConfigs[88].spritePosY(),
            spriteConfigs[88].singleWidth,
            spriteConfigs[88].singleHeight,
            16*5 + LETTER_SPACING*5,
            16,
            16,32
        );
        topScoreCanvasContext.drawImage(
            spriteConfigs[90+parseInt(firstDigit)].imageSource,
            spriteConfigs[90+parseInt(firstDigit)].spritePosX(),
            spriteConfigs[90+parseInt(firstDigit)].spritePosY(),
            spriteConfigs[90+parseInt(firstDigit)].singleWidth,
            spriteConfigs[90+parseInt(firstDigit)].singleHeight,
            16*6 + LETTER_SPACING*6,
            16,
            16,32
        );
        topScoreCanvasContext.drawImage(
            spriteConfigs[90+parseInt(secondDigit)].imageSource,
            spriteConfigs[90+parseInt(secondDigit)].spritePosX(),
            spriteConfigs[90+parseInt(secondDigit)].spritePosY(),
            spriteConfigs[90+parseInt(secondDigit)].singleWidth,
            spriteConfigs[90+parseInt(secondDigit)].singleHeight,
            16*7 + LETTER_SPACING*7,
            16,
            16,32
        );
        topScoreCanvasContext.drawImage(
            spriteConfigs[90+parseInt(thirdDigit)].imageSource,
            spriteConfigs[90+parseInt(thirdDigit)].spritePosX(),
            spriteConfigs[90+parseInt(thirdDigit)].spritePosY(),
            spriteConfigs[90+parseInt(thirdDigit)].singleWidth,
            spriteConfigs[90+parseInt(thirdDigit)].singleHeight,
            16*8 + LETTER_SPACING*8,
            16,
            16,32
        );
        topScoreCanvasContext.drawImage(
            spriteConfigs[90+parseInt(fourthDigit)].imageSource,
            spriteConfigs[90+parseInt(fourthDigit)].spritePosX(),
            spriteConfigs[90+parseInt(fourthDigit)].spritePosY(),
            spriteConfigs[90+parseInt(fourthDigit)].singleWidth,
            spriteConfigs[90+parseInt(fourthDigit)].singleHeight,
            16*9 + LETTER_SPACING*9,
            16,
            16,32
        );
        topScoreCanvasContext.drawImage(
            spriteConfigs[90+parseInt(fifthDigit)].imageSource,
            spriteConfigs[90+parseInt(fifthDigit)].spritePosX(),
            spriteConfigs[90+parseInt(fifthDigit)].spritePosY(),
            spriteConfigs[90+parseInt(fifthDigit)].singleWidth,
            spriteConfigs[90+parseInt(fifthDigit)].singleHeight,
            16*10 + LETTER_SPACING*10,
            16,
            16,32
        );
        //LEVEL: 01
        topScoreCanvasContext.drawImage(
            spriteConfigs[79].imageSource,
            spriteConfigs[79].spritePosX(),
            spriteConfigs[79].spritePosY(),
            spriteConfigs[79].singleWidth,
            spriteConfigs[79].singleHeight,
            16*12 + LETTER_SPACING*12,
            16,
            16,32
        );
        topScoreCanvasContext.drawImage(
            spriteConfigs[74].imageSource,
            spriteConfigs[74].spritePosX(),
            spriteConfigs[74].spritePosY(),
            spriteConfigs[74].singleWidth,
            spriteConfigs[74].singleHeight,
            16*13 + LETTER_SPACING*13,
            16,
            16,32
        );
        topScoreCanvasContext.drawImage(
            spriteConfigs[87].imageSource,
            spriteConfigs[87].spritePosX(),
            spriteConfigs[87].spritePosY(),
            spriteConfigs[87].singleWidth,
            spriteConfigs[87].singleHeight,
            16*14 + LETTER_SPACING*14,
            16,
            16,32
        );
        topScoreCanvasContext.drawImage(
            spriteConfigs[74].imageSource,
            spriteConfigs[74].spritePosX(),
            spriteConfigs[74].spritePosY(),
            spriteConfigs[74].singleWidth,
            spriteConfigs[74].singleHeight,
            16*15 + LETTER_SPACING*15,
            16,
            16,32
        );
        topScoreCanvasContext.drawImage(
            spriteConfigs[79].imageSource,
            spriteConfigs[79].spritePosX(),
            spriteConfigs[79].spritePosY(),
            spriteConfigs[79].singleWidth,
            spriteConfigs[79].singleHeight,
            16*16 + LETTER_SPACING*16,
            16,
            16,32
        );
        topScoreCanvasContext.drawImage(
            spriteConfigs[88].imageSource,
            spriteConfigs[88].spritePosX(),
            spriteConfigs[88].spritePosY(),
            spriteConfigs[88].singleWidth,
            spriteConfigs[88].singleHeight,
            16*17 + LETTER_SPACING*17,
            16,
            16,32
        );
        topScoreCanvasContext.drawImage(
            spriteConfigs[90+parseInt(firstDigitOfLevel)].imageSource,
            spriteConfigs[90+parseInt(firstDigitOfLevel)].spritePosX(),
            spriteConfigs[90+parseInt(firstDigitOfLevel)].spritePosY(),
            spriteConfigs[90+parseInt(firstDigitOfLevel)].singleWidth,
            spriteConfigs[90+parseInt(firstDigitOfLevel)].singleHeight,
            16*18 + LETTER_SPACING*18,
            16,
            16,32
        );
        topScoreCanvasContext.drawImage(
            spriteConfigs[90+parseInt(secondDigitOfLevel)].imageSource,
            spriteConfigs[90+parseInt(secondDigitOfLevel)].spritePosX(),
            spriteConfigs[90+parseInt(secondDigitOfLevel)].spritePosY(),
            spriteConfigs[90+parseInt(secondDigitOfLevel)].singleWidth,
            spriteConfigs[90+parseInt(secondDigitOfLevel)].singleHeight,
            16*19 + LETTER_SPACING*19,
            16,
            16,32
        );

        //DAVES: 123
        topScoreCanvasContext.drawImage(
            spriteConfigs[73].imageSource,
            spriteConfigs[73].spritePosX(),
            spriteConfigs[73].spritePosY(),
            spriteConfigs[73].singleWidth,
            spriteConfigs[73].singleHeight,
            16*21 + LETTER_SPACING*21,
            16,
            16,32
        );
        topScoreCanvasContext.drawImage(
            spriteConfigs[71].imageSource,
            spriteConfigs[71].spritePosX(),
            spriteConfigs[71].spritePosY(),
            spriteConfigs[71].singleWidth,
            spriteConfigs[71].singleHeight,
            16*22 + LETTER_SPACING*22,
            16,
            16,32
        );
        topScoreCanvasContext.drawImage(
            spriteConfigs[87].imageSource,
            spriteConfigs[87].spritePosX(),
            spriteConfigs[87].spritePosY(),
            spriteConfigs[87].singleWidth,
            spriteConfigs[87].singleHeight,
            16*23 + LETTER_SPACING*23,
            16,
            16,32
        );
        topScoreCanvasContext.drawImage(
            spriteConfigs[74].imageSource,
            spriteConfigs[74].spritePosX(),
            spriteConfigs[74].spritePosY(),
            spriteConfigs[74].singleWidth,
            spriteConfigs[74].singleHeight,
            16*24 + LETTER_SPACING*24,
            16,
            16,32
        );
        topScoreCanvasContext.drawImage(
            spriteConfigs[84].imageSource,
            spriteConfigs[84].spritePosX(),
            spriteConfigs[84].spritePosY(),
            spriteConfigs[84].singleWidth,
            spriteConfigs[84].singleHeight,
            16*25 + LETTER_SPACING*25,
            16,
            16,32
        );
        topScoreCanvasContext.drawImage(
            spriteConfigs[88].imageSource,
            spriteConfigs[88].spritePosX(),
            spriteConfigs[88].spritePosY(),
            spriteConfigs[88].singleWidth,
            spriteConfigs[88].singleHeight,
            16*26 + LETTER_SPACING*26,
            16,
            16,32
        );
        for(var i = 0; i < numberOfLivesLeft; i++) {
            topScoreCanvasContext.drawImage(
                spriteConfigs[31].imageSource,
                spriteConfigs[31].spritePosX(),
                spriteConfigs[31].spritePosY(),
                spriteConfigs[31].singleWidth,
                spriteConfigs[31].singleHeight,
                16 * 27 + 32 * i + LETTER_SPACING * (27+i+1),
                16,
                32, 32
            );
        }
    };

    this.updateBottomCanvas = function() {
        bottomCanvasContext.clearRect(0,0,640,64);
        //draw GO THRU THE DOOR IMAGE
        bottomCanvasContext.drawImage(
            spriteConfigs[84].imageSource,
            spriteConfigs[84].spritePosX(),
            spriteConfigs[84].spritePosY(),
            spriteConfigs[84].singleWidth,
            spriteConfigs[84].singleHeight,
            0,
            16,
            16,32
        );
    };
}