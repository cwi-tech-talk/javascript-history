'use strict';

module.exports = function () {
    function oldschool(nb) {
        function isSafeInteger(n) {
            return (
                typeof n === 'number'
                && Math.round(n) === n
                && -(Math.pow(2, 53) - 1) <= n
                && n <= (Math.pow(2, 53) - 1)
            );
        }
        return isSafeInteger(nb);
    }

    function nicely(nb) {
        return Number.isSafeInteger(nb);
    }

    console.info('oldschool isSafeInteger(1998): ', oldschool(1998));
    console.info('oldschool isSafeInteger(9007199254740992): ', oldschool(9007199254740992));
    console.info('nicely isSafeInteger(1998): ', nicely(1998));
    console.info('nicely isSafeInteger(9007199254740992): ', nicely(9007199254740992));
}