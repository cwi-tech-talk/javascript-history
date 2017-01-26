'use strict';

module.exports = function () {
    function oldschool(text, nb) {
        return Array(nb + 1).join(text);
    }

    function nicely(text, nb) {
        return text.repeat(nb);
    }

    console.info('oldschool: ', oldschool('x', 45));
    console.info('nicely: ', nicely('x', 45));
}