'use strict';

module.exports = function () {
    function oldschool(arr, el) {
        var found = arr.filter(e => e === el);
        if (found.length > 0) {
            return found[0];
        }
        return null;
    }

    function nicely(arr, el) {
        return arr.find(e => e === el);
    }

    let numbers = [1, 2, 3, 4, 5];
    console.info('oldschool: ', oldschool(numbers, 3));
    console.info('nicely: ', nicely(numbers, 3));
}