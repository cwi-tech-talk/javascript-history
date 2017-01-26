'use strict';

module.exports = function () {
    (function() {
        let a = Symbol('x');
        let b = Symbol('x');
        console.info(`a === b ? `, a === b);
        console.info(`Symbol('x') === Symbol('x') ? `, Symbol('x') === Symbol('x'));

        let obj = {};
        obj[Symbol('1')] = '1';
        obj[a] = 'a';
        obj[b] = 'b';
        console.info(JSON.stringify(obj));
        console.info(Object.getOwnPropertyNames(obj));
        console.info(Object.getOwnPropertySymbols(obj));

        let globalSymbol = Symbol.for('GlobalSymbol');
        console.info(globalSymbol);
    })();
}