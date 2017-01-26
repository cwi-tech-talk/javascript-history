'use strict';

module.exports = function () {
    let numbers = [1, 2, 3, 4, 5];
    
    function oldschol() {
        return numbers.filter(function(n) {
            return n % 2;
        });
    }

    function inline() {
        return numbers.filter(n => n % 2);
    }

    function statement() {
        return numbers.filter(n => {
            return n % 2;
        });
    }

    function multiple() {
        return numbers.filter((n, i) => i % 2);
    }

    function object() {
        return numbers.map((n, i) => ({ valor: n, index: i }));
    }

    console.info('oldschol arrow function', oldschol());
    console.info('inline arrow function', inline());
    console.info('statement arrow function', statement());
    console.info('multiple arrow function', multiple());
    console.info('object arrow function', object());
}