'use strict';

module.exports = function () {
    function oldschool(x, y) {
        return { x: x, y: y };
    }

    function nicely(x, y) {
        return { x, y };
    }

    console.info('oldschool: ', oldschool(1, 2));
    console.info('nicely: ', nicely(1, 2));
}