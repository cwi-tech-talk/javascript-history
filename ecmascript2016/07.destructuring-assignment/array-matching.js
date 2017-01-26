'use strict';

module.exports = function () {
    function oldschool(arr) {
        return { 
            name: arr[0],
            age: arr[1],
            genre: arr[2]
        };
    }

    function nicely(arr) {
        let [name, age, genre] = arr;
        return {  name, age, genre };
    }

    function oldschoolSwap(arr) {
        let a = arr[0];
        let b = arr[1];
        let tmp = a;
        a = b;
        b = tmp;
        return [a, b];
    }

    function nicelySwap(arr) {
        let [a, b] = arr;
        return [b, a];
    }

    console.info('oldschool: ', oldschool(['robsonrosa', 28, 'M']));
    console.info('nicely: ', nicely(['robsonrosa', 28, 'M']));

    console.info('oldschool swap: ', oldschoolSwap(['x', 'y']));
    console.info('nicely swap: ', nicelySwap(['x', 'y']));
}