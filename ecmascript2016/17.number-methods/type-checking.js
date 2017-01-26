'use strict';

module.exports = function () {
    function oldschoolIsNaN(nb) {
        function isNaN(n) {
            return n !== n;
        }
        return isNaN(nb);
    }

    function oldschoolIsFinite(nb) {
        function isFinite(n) {
            return (typeof n === "number" && !isNaN(n) && n !== Infinity && n !== -Infinity);
        }
        return isFinite(nb);
    }

    function nicelyIsNaN(nb) {
        return Number.isNaN(nb);
    }

    function nicelyIsFinity(nb) {
        return Number.isFinite(nb);
    }

    console.info('oldschoolIsNaN (10): ', oldschoolIsNaN(10));
    console.info('oldschoolIsNaN (NaN): ', oldschoolIsNaN(NaN));
    console.info('oldschoolIsFinite (4): ', oldschoolIsFinite(4));
    console.info('oldschoolIsFinite (Infinity): ', oldschoolIsFinite(Infinity));
    console.info('oldschoolIsFinite (-Infinity): ', oldschoolIsFinite(-Infinity));

    console.info('nicelyIsNaN (10): ', nicelyIsNaN(10));
    console.info('nicelyIsNaN (NaN): ', nicelyIsNaN(NaN));
    console.info('nicelyIsFinity (4): ', nicelyIsFinity(4));
    console.info('nicelyIsFinity (Infinity): ', nicelyIsFinity(Infinity));
    console.info('nicelyIsFinity (-Infinity): ', nicelyIsFinity(-Infinity));
}