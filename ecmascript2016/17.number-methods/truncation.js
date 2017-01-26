'use strict';

module.exports = function () {
    function oldschool(nb) {
        function truncate(v) {
            return (v < 0 ? Math.ceil(v) : Math.floor(v));
        }
        return truncate(nb);
    }

    function nicely(nb) {
        return Math.trunc(nb);
    }

    console.info('oldschool truncate: (28.8) ', oldschool(28.8));
    console.info('oldschool truncate: (0.1) ', oldschool(0.1));
    console.info('oldschool truncate: (-0.1) ', oldschool(-0.1));
    console.info('nicely truncate: (28.8)', nicely(28.8));
    console.info('nicely truncate: (0.1) ', nicely(0.1));
    console.info('nicely truncate: (-0.1) ', nicely(-0.1));
}