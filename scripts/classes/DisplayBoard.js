import {topScoreCanvasContext} from '../helpers/canvasInitialization.js';
import {spriteConfigs, gttdConfigs, ddImageConfigs} from '../configs/spriteConfigs.js';
import {formatNumberLength} from '../helpers/utils.js';
import {bottomCanvasContext} from '../helpers/canvasInitialization.js';
import * as constants from '../helpers/constants.js';

export default function DisplayBoard() {

    this.displayTopScoreBoard = function(score, level, numberOfLivesLeft) {
        // formatNumberLength(number, formatLength);
        var formattedScore = formatNumberLength(score, 5);
        var firstDigit = formattedScore[0];
        var secondDigit = formattedScore[1];
        var thirdDigit = formattedScore[2];
        var fourthDigit = formattedScore[3];
        var fifthDigit = formattedScore[4];

        var formattedLevel = formatNumberLength(level, 2);
        var firstDigitOfLevel = formattedLevel[0];
        var secondDigitOfLevel = formattedLevel[1];
        var scoreBoardLetterIndex = 0;

        topScoreCanvasContext.clearRect(0,0,constants.CANVAS_FULL_WIDTH,constants.SCOREBOARD_CANVAS_FULL_HEIGHT);

        //SCORE: 0000
        topScoreCanvasContext.drawImage(
            spriteConfigs[constants.LETTER_S].imageSource,
            spriteConfigs[constants.LETTER_S].spritePosX(),
            spriteConfigs[constants.LETTER_S].spritePosY(),
            spriteConfigs[constants.LETTER_S].singleWidth,
            spriteConfigs[constants.LETTER_S].singleHeight,
            constants.SCOREBOARD_LETTER_WIDTH * scoreBoardLetterIndex + constants.SCOREBOARD_LETTER_SPACING * scoreBoardLetterIndex,
            constants.TOP_SCOREBOARD_MARGIN_TOP,
            constants.SCOREBOARD_LETTER_WIDTH, constants.SCOREBOARD_LETTER_HEIGHT
        );
        scoreBoardLetterIndex++;
        topScoreCanvasContext.drawImage(
            spriteConfigs[constants.LETTER_C].imageSource,
            spriteConfigs[constants.LETTER_C].spritePosX(),
            spriteConfigs[constants.LETTER_C].spritePosY(),
            spriteConfigs[constants.LETTER_C].singleWidth,
            spriteConfigs[constants.LETTER_C].singleHeight,
            constants.SCOREBOARD_LETTER_WIDTH * scoreBoardLetterIndex + constants.SCOREBOARD_LETTER_SPACING * scoreBoardLetterIndex,
            constants.TOP_SCOREBOARD_MARGIN_TOP,
            constants.SCOREBOARD_LETTER_WIDTH, constants.SCOREBOARD_LETTER_HEIGHT
        );
        scoreBoardLetterIndex++;
        topScoreCanvasContext.drawImage(
            spriteConfigs[constants.LETTER_O].imageSource,
            spriteConfigs[constants.LETTER_O].spritePosX(),
            spriteConfigs[constants.LETTER_O].spritePosY(),
            spriteConfigs[constants.LETTER_O].singleWidth,
            spriteConfigs[constants.LETTER_O].singleHeight,
            constants.SCOREBOARD_LETTER_WIDTH * scoreBoardLetterIndex + constants.SCOREBOARD_LETTER_SPACING * scoreBoardLetterIndex,
            constants.TOP_SCOREBOARD_MARGIN_TOP,
            constants.SCOREBOARD_LETTER_WIDTH, constants.SCOREBOARD_LETTER_HEIGHT
        );
        scoreBoardLetterIndex++;
        topScoreCanvasContext.drawImage(
            spriteConfigs[constants.LETTER_R].imageSource,
            spriteConfigs[constants.LETTER_R].spritePosX(),
            spriteConfigs[constants.LETTER_R].spritePosY(),
            spriteConfigs[constants.LETTER_R].singleWidth,
            spriteConfigs[constants.LETTER_R].singleHeight,
            constants.SCOREBOARD_LETTER_WIDTH * scoreBoardLetterIndex + constants.SCOREBOARD_LETTER_SPACING * scoreBoardLetterIndex,
            constants.TOP_SCOREBOARD_MARGIN_TOP,
            constants.SCOREBOARD_LETTER_WIDTH, constants.SCOREBOARD_LETTER_HEIGHT
        );
        scoreBoardLetterIndex++;
        topScoreCanvasContext.drawImage(
            spriteConfigs[constants.LETTER_E].imageSource,
            spriteConfigs[constants.LETTER_E].spritePosX(),
            spriteConfigs[constants.LETTER_E].spritePosY(),
            spriteConfigs[constants.LETTER_E].singleWidth,
            spriteConfigs[constants.LETTER_E].singleHeight,
            constants.SCOREBOARD_LETTER_WIDTH * scoreBoardLetterIndex + constants.SCOREBOARD_LETTER_SPACING * scoreBoardLetterIndex,
            constants.TOP_SCOREBOARD_MARGIN_TOP,
            constants.SCOREBOARD_LETTER_WIDTH, constants.SCOREBOARD_LETTER_HEIGHT
        );
        scoreBoardLetterIndex++;
        topScoreCanvasContext.drawImage(
            spriteConfigs[constants.LETTER_COLON].imageSource,
            spriteConfigs[constants.LETTER_COLON].spritePosX(),
            spriteConfigs[constants.LETTER_COLON].spritePosY(),
            spriteConfigs[constants.LETTER_COLON].singleWidth,
            spriteConfigs[constants.LETTER_COLON].singleHeight,
            constants.SCOREBOARD_LETTER_WIDTH * scoreBoardLetterIndex + constants.SCOREBOARD_LETTER_SPACING * scoreBoardLetterIndex,
            constants.TOP_SCOREBOARD_MARGIN_TOP,
            constants.SCOREBOARD_LETTER_WIDTH, constants.SCOREBOARD_LETTER_HEIGHT
        );
        scoreBoardLetterIndex++;
        topScoreCanvasContext.drawImage(
            spriteConfigs[constants.DIGIT_0+parseInt(firstDigit)].imageSource,
            spriteConfigs[constants.DIGIT_0+parseInt(firstDigit)].spritePosX(),
            spriteConfigs[constants.DIGIT_0+parseInt(firstDigit)].spritePosY(),
            spriteConfigs[constants.DIGIT_0+parseInt(firstDigit)].singleWidth,
            spriteConfigs[constants.DIGIT_0+parseInt(firstDigit)].singleHeight,
            constants.SCOREBOARD_LETTER_WIDTH * scoreBoardLetterIndex + constants.SCOREBOARD_LETTER_SPACING * scoreBoardLetterIndex,
            constants.TOP_SCOREBOARD_MARGIN_TOP,
            constants.SCOREBOARD_LETTER_WIDTH, constants.SCOREBOARD_LETTER_HEIGHT
        );
        scoreBoardLetterIndex++;
        topScoreCanvasContext.drawImage(
            spriteConfigs[constants.DIGIT_0+parseInt(secondDigit)].imageSource,
            spriteConfigs[constants.DIGIT_0+parseInt(secondDigit)].spritePosX(),
            spriteConfigs[constants.DIGIT_0+parseInt(secondDigit)].spritePosY(),
            spriteConfigs[constants.DIGIT_0+parseInt(secondDigit)].singleWidth,
            spriteConfigs[constants.DIGIT_0+parseInt(secondDigit)].singleHeight,
            constants.SCOREBOARD_LETTER_WIDTH * scoreBoardLetterIndex + constants.SCOREBOARD_LETTER_SPACING * scoreBoardLetterIndex,
            constants.TOP_SCOREBOARD_MARGIN_TOP,
            constants.SCOREBOARD_LETTER_WIDTH, constants.SCOREBOARD_LETTER_HEIGHT
        );
        scoreBoardLetterIndex++;
        topScoreCanvasContext.drawImage(
            spriteConfigs[constants.DIGIT_0+parseInt(thirdDigit)].imageSource,
            spriteConfigs[constants.DIGIT_0+parseInt(thirdDigit)].spritePosX(),
            spriteConfigs[constants.DIGIT_0+parseInt(thirdDigit)].spritePosY(),
            spriteConfigs[constants.DIGIT_0+parseInt(thirdDigit)].singleWidth,
            spriteConfigs[constants.DIGIT_0+parseInt(thirdDigit)].singleHeight,
            constants.SCOREBOARD_LETTER_WIDTH * scoreBoardLetterIndex + constants.SCOREBOARD_LETTER_SPACING * scoreBoardLetterIndex,
            constants.TOP_SCOREBOARD_MARGIN_TOP,
            constants.SCOREBOARD_LETTER_WIDTH, constants.SCOREBOARD_LETTER_HEIGHT
        );
        scoreBoardLetterIndex++;
        topScoreCanvasContext.drawImage(
            spriteConfigs[constants.DIGIT_0+parseInt(fourthDigit)].imageSource,
            spriteConfigs[constants.DIGIT_0+parseInt(fourthDigit)].spritePosX(),
            spriteConfigs[constants.DIGIT_0+parseInt(fourthDigit)].spritePosY(),
            spriteConfigs[constants.DIGIT_0+parseInt(fourthDigit)].singleWidth,
            spriteConfigs[constants.DIGIT_0+parseInt(fourthDigit)].singleHeight,
            constants.SCOREBOARD_LETTER_WIDTH * scoreBoardLetterIndex + constants.SCOREBOARD_LETTER_SPACING * scoreBoardLetterIndex,
            constants.TOP_SCOREBOARD_MARGIN_TOP,
            constants.SCOREBOARD_LETTER_WIDTH, constants.SCOREBOARD_LETTER_HEIGHT
        );
        scoreBoardLetterIndex++;
        topScoreCanvasContext.drawImage(
            spriteConfigs[constants.DIGIT_0+parseInt(fifthDigit)].imageSource,
            spriteConfigs[constants.DIGIT_0+parseInt(fifthDigit)].spritePosX(),
            spriteConfigs[constants.DIGIT_0+parseInt(fifthDigit)].spritePosY(),
            spriteConfigs[constants.DIGIT_0+parseInt(fifthDigit)].singleWidth,
            spriteConfigs[constants.DIGIT_0+parseInt(fifthDigit)].singleHeight,
            constants.SCOREBOARD_LETTER_WIDTH * scoreBoardLetterIndex + constants.SCOREBOARD_LETTER_SPACING * scoreBoardLetterIndex,
            constants.TOP_SCOREBOARD_MARGIN_TOP,
            constants.SCOREBOARD_LETTER_WIDTH, constants.SCOREBOARD_LETTER_HEIGHT
        );
        scoreBoardLetterIndex++;
        scoreBoardLetterIndex++;
        //LEVEL: 01
        topScoreCanvasContext.drawImage(
            spriteConfigs[constants.LETTER_L].imageSource,
            spriteConfigs[constants.LETTER_L].spritePosX(),
            spriteConfigs[constants.LETTER_L].spritePosY(),
            spriteConfigs[constants.LETTER_L].singleWidth,
            spriteConfigs[constants.LETTER_L].singleHeight,
            constants.SCOREBOARD_LETTER_WIDTH * scoreBoardLetterIndex + constants.SCOREBOARD_LETTER_SPACING * scoreBoardLetterIndex,
            constants.TOP_SCOREBOARD_MARGIN_TOP,
            constants.SCOREBOARD_LETTER_WIDTH, constants.SCOREBOARD_LETTER_HEIGHT
        );
        scoreBoardLetterIndex++;
        topScoreCanvasContext.drawImage(
            spriteConfigs[constants.LETTER_E].imageSource,
            spriteConfigs[constants.LETTER_E].spritePosX(),
            spriteConfigs[constants.LETTER_E].spritePosY(),
            spriteConfigs[constants.LETTER_E].singleWidth,
            spriteConfigs[constants.LETTER_E].singleHeight,
            constants.SCOREBOARD_LETTER_WIDTH * scoreBoardLetterIndex + constants.SCOREBOARD_LETTER_SPACING * scoreBoardLetterIndex,
            constants.TOP_SCOREBOARD_MARGIN_TOP,
            constants.SCOREBOARD_LETTER_WIDTH, constants.SCOREBOARD_LETTER_HEIGHT
        );
        scoreBoardLetterIndex++;
        topScoreCanvasContext.drawImage(
            spriteConfigs[constants.LETTER_V].imageSource,
            spriteConfigs[constants.LETTER_V].spritePosX(),
            spriteConfigs[constants.LETTER_V].spritePosY(),
            spriteConfigs[constants.LETTER_V].singleWidth,
            spriteConfigs[constants.LETTER_V].singleHeight,
            constants.SCOREBOARD_LETTER_WIDTH * scoreBoardLetterIndex + constants.SCOREBOARD_LETTER_SPACING * scoreBoardLetterIndex,
            constants.TOP_SCOREBOARD_MARGIN_TOP,
            constants.SCOREBOARD_LETTER_WIDTH, constants.SCOREBOARD_LETTER_HEIGHT
        );
        scoreBoardLetterIndex++;
        topScoreCanvasContext.drawImage(
            spriteConfigs[constants.LETTER_E].imageSource,
            spriteConfigs[constants.LETTER_E].spritePosX(),
            spriteConfigs[constants.LETTER_E].spritePosY(),
            spriteConfigs[constants.LETTER_E].singleWidth,
            spriteConfigs[constants.LETTER_E].singleHeight,
            constants.SCOREBOARD_LETTER_WIDTH * scoreBoardLetterIndex + constants.SCOREBOARD_LETTER_SPACING * scoreBoardLetterIndex,
            constants.TOP_SCOREBOARD_MARGIN_TOP,
            constants.SCOREBOARD_LETTER_WIDTH, constants.SCOREBOARD_LETTER_HEIGHT
        );
        scoreBoardLetterIndex++;
        topScoreCanvasContext.drawImage(
            spriteConfigs[constants.LETTER_L].imageSource,
            spriteConfigs[constants.LETTER_L].spritePosX(),
            spriteConfigs[constants.LETTER_L].spritePosY(),
            spriteConfigs[constants.LETTER_L].singleWidth,
            spriteConfigs[constants.LETTER_L].singleHeight,
            constants.SCOREBOARD_LETTER_WIDTH * scoreBoardLetterIndex + constants.SCOREBOARD_LETTER_SPACING * scoreBoardLetterIndex,
            constants.TOP_SCOREBOARD_MARGIN_TOP,
            constants.SCOREBOARD_LETTER_WIDTH, constants.SCOREBOARD_LETTER_HEIGHT
        );
        scoreBoardLetterIndex++;
        topScoreCanvasContext.drawImage(
            spriteConfigs[constants.LETTER_COLON].imageSource,
            spriteConfigs[constants.LETTER_COLON].spritePosX(),
            spriteConfigs[constants.LETTER_COLON].spritePosY(),
            spriteConfigs[constants.LETTER_COLON].singleWidth,
            spriteConfigs[constants.LETTER_COLON].singleHeight,
            constants.SCOREBOARD_LETTER_WIDTH * scoreBoardLetterIndex + constants.SCOREBOARD_LETTER_SPACING * scoreBoardLetterIndex,
            constants.TOP_SCOREBOARD_MARGIN_TOP,
            constants.SCOREBOARD_LETTER_WIDTH, constants.SCOREBOARD_LETTER_HEIGHT
        );
        scoreBoardLetterIndex++;
        topScoreCanvasContext.drawImage(
            spriteConfigs[constants.DIGIT_0+parseInt(firstDigitOfLevel)].imageSource,
            spriteConfigs[constants.DIGIT_0+parseInt(firstDigitOfLevel)].spritePosX(),
            spriteConfigs[constants.DIGIT_0+parseInt(firstDigitOfLevel)].spritePosY(),
            spriteConfigs[constants.DIGIT_0+parseInt(firstDigitOfLevel)].singleWidth,
            spriteConfigs[constants.DIGIT_0+parseInt(firstDigitOfLevel)].singleHeight,
            constants.SCOREBOARD_LETTER_WIDTH * scoreBoardLetterIndex + constants.SCOREBOARD_LETTER_SPACING * scoreBoardLetterIndex,
            constants.TOP_SCOREBOARD_MARGIN_TOP,
            constants.SCOREBOARD_LETTER_WIDTH, constants.SCOREBOARD_LETTER_HEIGHT
        );
        scoreBoardLetterIndex++;
        topScoreCanvasContext.drawImage(
            spriteConfigs[constants.DIGIT_0+parseInt(secondDigitOfLevel)].imageSource,
            spriteConfigs[constants.DIGIT_0+parseInt(secondDigitOfLevel)].spritePosX(),
            spriteConfigs[constants.DIGIT_0+parseInt(secondDigitOfLevel)].spritePosY(),
            spriteConfigs[constants.DIGIT_0+parseInt(secondDigitOfLevel)].singleWidth,
            spriteConfigs[constants.DIGIT_0+parseInt(secondDigitOfLevel)].singleHeight,
            constants.SCOREBOARD_LETTER_WIDTH * scoreBoardLetterIndex + constants.SCOREBOARD_LETTER_SPACING * scoreBoardLetterIndex,
            constants.TOP_SCOREBOARD_MARGIN_TOP,
            constants.SCOREBOARD_LETTER_WIDTH, constants.SCOREBOARD_LETTER_HEIGHT
        );
        scoreBoardLetterIndex++;
        scoreBoardLetterIndex++;
        //DAVES: 123
        topScoreCanvasContext.drawImage(
            spriteConfigs[constants.LETTER_D].imageSource,
            spriteConfigs[constants.LETTER_D].spritePosX(),
            spriteConfigs[constants.LETTER_D].spritePosY(),
            spriteConfigs[constants.LETTER_D].singleWidth,
            spriteConfigs[constants.LETTER_D].singleHeight,
            constants.SCOREBOARD_LETTER_WIDTH * scoreBoardLetterIndex + constants.SCOREBOARD_LETTER_SPACING * scoreBoardLetterIndex,
            constants.TOP_SCOREBOARD_MARGIN_TOP,
            constants.SCOREBOARD_LETTER_WIDTH, constants.SCOREBOARD_LETTER_HEIGHT
        );
        scoreBoardLetterIndex++;
        topScoreCanvasContext.drawImage(
            spriteConfigs[constants.LETTER_A].imageSource,
            spriteConfigs[constants.LETTER_A].spritePosX(),
            spriteConfigs[constants.LETTER_A].spritePosY(),
            spriteConfigs[constants.LETTER_A].singleWidth,
            spriteConfigs[constants.LETTER_A].singleHeight,
            constants.SCOREBOARD_LETTER_WIDTH * scoreBoardLetterIndex + constants.SCOREBOARD_LETTER_SPACING * scoreBoardLetterIndex,
            constants.TOP_SCOREBOARD_MARGIN_TOP,
            constants.SCOREBOARD_LETTER_WIDTH, constants.SCOREBOARD_LETTER_HEIGHT
        );
        scoreBoardLetterIndex++;
        topScoreCanvasContext.drawImage(
            spriteConfigs[constants.LETTER_V].imageSource,
            spriteConfigs[constants.LETTER_V].spritePosX(),
            spriteConfigs[constants.LETTER_V].spritePosY(),
            spriteConfigs[constants.LETTER_V].singleWidth,
            spriteConfigs[constants.LETTER_V].singleHeight,
            constants.SCOREBOARD_LETTER_WIDTH * scoreBoardLetterIndex + constants.SCOREBOARD_LETTER_SPACING * scoreBoardLetterIndex,
            constants.TOP_SCOREBOARD_MARGIN_TOP,
            constants.SCOREBOARD_LETTER_WIDTH, constants.SCOREBOARD_LETTER_HEIGHT
        );
        scoreBoardLetterIndex++;
        topScoreCanvasContext.drawImage(
            spriteConfigs[constants.LETTER_E].imageSource,
            spriteConfigs[constants.LETTER_E].spritePosX(),
            spriteConfigs[constants.LETTER_E].spritePosY(),
            spriteConfigs[constants.LETTER_E].singleWidth,
            spriteConfigs[constants.LETTER_E].singleHeight,
            constants.SCOREBOARD_LETTER_WIDTH * scoreBoardLetterIndex + constants.SCOREBOARD_LETTER_SPACING * scoreBoardLetterIndex,
            constants.TOP_SCOREBOARD_MARGIN_TOP,
            constants.SCOREBOARD_LETTER_WIDTH, constants.SCOREBOARD_LETTER_HEIGHT
        );
        scoreBoardLetterIndex++;
        topScoreCanvasContext.drawImage(
            spriteConfigs[constants.LETTER_S].imageSource,
            spriteConfigs[constants.LETTER_S].spritePosX(),
            spriteConfigs[constants.LETTER_S].spritePosY(),
            spriteConfigs[constants.LETTER_S].singleWidth,
            spriteConfigs[constants.LETTER_S].singleHeight,
            constants.SCOREBOARD_LETTER_WIDTH * scoreBoardLetterIndex + constants.SCOREBOARD_LETTER_SPACING * scoreBoardLetterIndex,
            constants.TOP_SCOREBOARD_MARGIN_TOP,
            constants.SCOREBOARD_LETTER_WIDTH, constants.SCOREBOARD_LETTER_HEIGHT
        );
        scoreBoardLetterIndex++;
        topScoreCanvasContext.drawImage(
            spriteConfigs[constants.LETTER_COLON].imageSource,
            spriteConfigs[constants.LETTER_COLON].spritePosX(),
            spriteConfigs[constants.LETTER_COLON].spritePosY(),
            spriteConfigs[constants.LETTER_COLON].singleWidth,
            spriteConfigs[constants.LETTER_COLON].singleHeight,
            constants.SCOREBOARD_LETTER_WIDTH * scoreBoardLetterIndex + constants.SCOREBOARD_LETTER_SPACING * scoreBoardLetterIndex,
            constants.TOP_SCOREBOARD_MARGIN_TOP,
            constants.SCOREBOARD_LETTER_WIDTH, constants.SCOREBOARD_LETTER_HEIGHT
        );
        scoreBoardLetterIndex++;
        scoreBoardLetterIndex++;

        for(var i = 0; i < numberOfLivesLeft; i++) {
            topScoreCanvasContext.drawImage(
                spriteConfigs[constants.EXTRA_LIFE].imageSource,
                spriteConfigs[constants.EXTRA_LIFE].spritePosX(),
                spriteConfigs[constants.EXTRA_LIFE].spritePosY(),
                spriteConfigs[constants.EXTRA_LIFE].singleWidth,
                spriteConfigs[constants.EXTRA_LIFE].singleHeight,
                constants.SCOREBOARD_LETTER_WIDTH * scoreBoardLetterIndex + constants.SCOREBOARD_LETTER_SPACING * scoreBoardLetterIndex,
                constants.TOP_SCOREBOARD_MARGIN_TOP,
                constants.SCOREBOARD_LIFE_WIDTH, constants.SCOREBOARD_LIFE_HEIGHT
            );
            scoreBoardLetterIndex++;
            scoreBoardLetterIndex++;
        }
    };

    this.updateBottomCanvas = function() {
        bottomCanvasContext.clearRect(0,0,canvas.CANVAS_FULL_WIDTH, canvas.SCOREBOARD_CANVAS_FULL_HEIGHT);
        //draw GO THRU THE DOOR IMAGE
        bottomCanvasContext.drawImage(
            gttdConfigs.imageSource,
            gttdConfigs.spritePosX(), gttdConfigs.spritePosY(),
            gttdConfigs.singleWidth, gttdConfigs.singleHeight,
            constants.BOTTOM_CANVAS_MARGIN_LEFT, constants.BOTTOM_CANVAS_MARGIN_TOP, gttdConfigs.singleWidth, gttdConfigs.singleHeight);
    };
}