'use strict';

module.exports = function () {
    function oldschool(p1, v1, p2, v2) {
        var obj = {};
        obj[p1] = v1;
        obj[p2] = v2;
        return obj;
    }

    function nicely(p1, v1, p2, v2) {
        return { [p1]: v1, [p2]: v2 };
    }

    console.info('oldschool: ', oldschool('x', 1, 'y', 2));
    console.info('nicely: ', nicely('x', 1, 'y', 2));
}