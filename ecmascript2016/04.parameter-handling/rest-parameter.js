'use strict';

module.exports = function () {
    function oldschool(name, age) {
        let person = { name: name, age: age };
        var infos = Array.prototype.slice.call(arguments, 2);
        infos.forEach((info, i) => person['info'+(i+1)] = info);
        return person;
    }

    function foo (name, age, ...infos) {
        let person = { name: name, age: age };        
        infos.forEach((info, i) => person['info'+(i+1)] = info);
        return person;
    }

    console.info(oldschool('robson', 28, 'programmer', 'oldschool'));
    console.info(foo('robson', 28, 'programmer', 'nicely'));
}