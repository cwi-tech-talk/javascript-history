'use strict';

module.exports = function () {
    function foo (name = 'joao', value = 5) {
        console.info('name: ' + name + ' | value: ' + value);
    }

    foo();
    foo('maria');
    foo('maria', 15);
}