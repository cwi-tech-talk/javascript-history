'use strict';

module.exports = function () {
    function oldschool(nb) {
        function sign(v) {
            return ((v === 0 || isNaN(v)) ? v : (v > 0 ? 1 : -1));
        }
        return sign(nb);
    }

    function nicely(nb) {
        return Math.sign(nb);
    }

    console.info('oldschool sign: (10) ', oldschool(10));
    console.info('oldschool sign: (0) ', oldschool(0));
    console.info('oldschool sign: (-10) ', oldschool(-10));
    console.info('nicely sign: (10)', nicely(10));
    console.info('nicely sign: (0) ', nicely(0));
    console.info('nicely sign: (-10) ', nicely(-10));
}