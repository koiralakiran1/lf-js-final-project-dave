import {canvasContext} from '../helpers/canvasInitialization.js';

export default function Map() {
    this.level1MapArray = [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3,
        1,13, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,12, 1, 3,
        1, 0, 0,11, 0, 0, 0,11, 0, 0, 0,18, 0, 0, 0,11, 0, 0, 1, 3,
        1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 3,
        1,11, 0, 0, 0,11, 0, 0, 0,11, 0, 0, 0,22, 0, 0, 0,11, 1, 3,
        1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 3,
        1,11, 0, 0, 0, 0, 0,11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 3,
        1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 3,
        1,33, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,32, 0, 0, 0, 0, 0, 1, 3,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3,
    ];

    this.drawMap = function(mapArray) {
        mapArray.forEach(function(element) {
            element.render();
        });
    };
    this.updateMap = function(mapArray) {
        mapArray.forEach(function(element) {
            if(element.isAnimation) {
                element.update();
            }
        });
    };
}