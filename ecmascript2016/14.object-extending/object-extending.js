'use strict';

module.exports = function () {
    function oldschool() {
        var target = { a: 0 };
        var source1 = { b: 1, c: 2 };
        var source2 = { c: 3, d: 4 };
        Object.keys(source1).forEach(function (k) {
            target[k] = source1[k];
        });
        Object.keys(source2).forEach(function (k) {
            target[k] = source2[k];
        });
        return target;
    }

    function nicely() {
        let target = { a: 0 };
        let source1 = { b: 1, c: 2 };
        let source2 = { c: 3, d: 4 };
        Object.assign(target, source1, source2)
        return target;
    }

    function config(config) {
        let defaultConfig = { c: 3, d: 4 };
        return Object.assign({}, defaultConfig, config)
    }

    console.info('oldschool: ', oldschool());
    console.info('nicely: ', nicely());
    console.info('apply config: ', config({ a: 9, b: 9, c: 9}));
}