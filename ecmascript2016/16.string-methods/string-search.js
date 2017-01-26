'use strict';

module.exports = function () {
    function oldschool(name, start, end, part) {
        console.info(`'${name}' starts with '${start}'? `, name.indexOf(start) === 0);
        console.info(`'${name}' starts with '${end}'? `, name.indexOf(end) === 0);
        console.info(`'${name}' ends with '${start}'? `, name.indexOf(start) === (name.length - start.length));
        console.info(`'${name}' ends with '${end}'? `, name.indexOf(end) === (name.length - end.length));
        console.info(`'${name}' contains '${part}'? `, name.indexOf(part) > 0);
        console.info(`'${name}' contains 'xxxxx'? `, name.indexOf('xxxxx') > 0);
    }

    function nicely(name, start, end, part) {
        console.info(`'${name}' starts with '${start}'? `, name.startsWith(start));
        console.info(`'${name}' starts with '${end}'? `, name.startsWith(end));
        console.info(`'${name}' ends with '${start}'? `, name.endsWith(start));
        console.info(`'${name}' ends with '${end}'? `, name.endsWith(end));
        console.info(`'${name}' contains '${part}'? `, name.includes(part));
        console.info(`'${name}' contains 'xxxxx'? `, name.includes('xxxxx'));
    }

    console.info('oldschool: ');
    oldschool('robsonrosa', 'robson', 'rosa', 'nro');
    console.info('--------------------------------  ');
    console.info('nicely: ')
    nicely('robsonrosa', 'robson', 'rosa', 'nro');
}