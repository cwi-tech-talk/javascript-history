'use strict';

module.exports = function () {
    function unsafe(v1, v2) {
        return v1 === v2;
    }

    function oldschool(v1, v2) {
        return Math.abs((v1) - v2) < 2.220446049250313e-16;
    }

    function nicely(v1, v2) {
        return Math.abs((v1) - v2) < Number.EPSILON;
    }

    console.info('unsafe: (0.1 + 0.2) equals 0.3 ? ', unsafe((0.1 + 0.2), 0.3));
    console.info('oldschool: (0.1 + 0.2) equals 0.3 ? ', oldschool((0.1 + 0.2), 0.3));
    console.info('nicely: (0.1 + 0.2) equals 0.3 ? ', nicely((0.1 + 0.2), 0.3));
}