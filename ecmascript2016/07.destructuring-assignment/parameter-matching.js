'use strict';

module.exports = function () {
    function oldschoolAsArray(arr) {
        let x = arr[0];
        let y = arr[1];
        return 'position: [' +  x + ', ' +  y + ']';
    }

    function nicelyAsArray([x, y]) {
        return `position: [${x}, ${y}]`;
    }

    function oldschoolAsObject(obj) {
        let x = obj.x;
        let y = obj.y;
        return 'position: [' +  x + ', ' +  y + ']';
    }

    function nicelyAsObject({ x, y }) {
        return `position: [${x}, ${y}]`;
    }

    function nicelyAsObjectRenaming({ x: posicaoX, y: posicaoY }) {
        return `position: [${posicaoX}, ${posicaoY}]`;
    }

    let positionAsArray = [10, 4];
    console.info('oldschoolAsArray: ', oldschoolAsArray(positionAsArray));
    console.info('nicelyAsArray: ', nicelyAsArray(positionAsArray));
    
    let positionAsObject = { x: 19, y: 98 };
    console.info('oldschoolAsObject: ', oldschoolAsObject(positionAsObject));
    console.info('nicelyAsObject: ', nicelyAsObject(positionAsObject));
    console.info('nicelyAsObjectRenaming: ', nicelyAsObjectRenaming(positionAsObject));
}