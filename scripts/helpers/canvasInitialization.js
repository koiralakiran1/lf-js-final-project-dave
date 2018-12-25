import * as constants from './constants.js';

var canvas = document.getElementById('canvas');
var canvasContext = canvas.getContext('2d');

var topScoreCanvas = document.getElementById('top_score_canvas');
var topScoreCanvasContext = topScoreCanvas.getContext('2d');

var bottomCanvas = document.getElementById('bottom_canvas');
var bottomCanvasContext = bottomCanvas.getContext('2d');

var gameDiv = document.getElementById('game_div');

canvasContext.canvas.width = constants.CANVAS_FULL_WIDTH;
canvasContext.canvas.height = constants.CANVAS_FULL_HEIGHT;
canvas.style.margin = 'auto';
canvas.style.display = 'block';

topScoreCanvasContext.canvas.height = 96;
topScoreCanvasContext.canvas.width = constants.CANVAS_FULL_WIDTH;
topScoreCanvas.style.display = 'block';
topScoreCanvas.style.margin = 'auto';

bottomCanvasContext.canvas.height = 96;
bottomCanvasContext.canvas.width = constants.CANVAS_FULL_WIDTH;
bottomCanvas.style.display = 'block';
bottomCanvas.style.margin = 'auto';


gameDiv.style.width = canvasContext.canvas.width + 64 + 'px';
gameDiv.style.height = canvasContext.canvas.height + 96 + 96 + 'px';
gameDiv.style.backgroundColor = 'black';
gameDiv.style.margin = 'auto';

export {canvasContext, topScoreCanvasContext, bottomCanvasContext};