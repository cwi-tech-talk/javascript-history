'use strict';

module.exports = function () {
    let name = 'robson';
    let age = '28';

    function oldschool() {
        return 'My name is \'' + name + '\' e eu tenho ' + age + ' anos';
    }

    function nicely() {
        return `My name is '${name}' e eu tenho ${age} anos`
    }

    console.info('oldschool:', oldschool());
    console.info('nicely:', nicely());
}