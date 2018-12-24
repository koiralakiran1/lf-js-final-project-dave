export function convertPositionToIndex(drawPosX, drawPosY) {
    var tileIndX = Math.floor(drawPosX / 32); //drawPosX / singleTileWidth
    var tileIndY = Math.floor(drawPosY / 32); //drawPosY / singleTileHeight
    var arrayIndex = tileIndY * 20 + tileIndX; // tileIndY * tileMapWidth + tileIndX + 1
    return arrayIndex;
}

export function removeValueFromArray(array, value) {
    return array.filter(function(element){
        return element != value;
    });
}

export function formatNumberLength(num, length) {
    var r = "" + num;
    while (r.length < length) {
        r = "0" + r;
    }
    return r;
}