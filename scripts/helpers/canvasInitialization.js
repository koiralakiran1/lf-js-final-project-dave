var canvas = document.getElementById('canvas');
var canvasContext = canvas.getContext('2d');

canvasContext.canvas.width = 640; //1280
canvasContext.canvas.height = 320; //640

canvas.style.border = '2px solid red';
canvas.style.margin = '20px auto';
canvas.style.display = 'block';

export {canvasContext};