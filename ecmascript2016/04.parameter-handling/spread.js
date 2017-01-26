'use strict';

module.exports = function () {
    let initial = [1, 2, 3, 4];
    let final = [5, 6, 7, 8];

    function oldschool() {
        return initial.concat(final);
    }

    function nicely() {
        return [...initial, ...final];
    }

    function nicelyStringSplit() {
        return [...'foo'];
    }   

    console.info('oldschool', oldschool());
    console.info('nicely', nicely());
    console.info('nicelyStringSplit', nicelyStringSplit());
}