'use strict';

module.exports = function () {
    function foo() { return 'outside'; }
    console.info('outside foo: ', foo());


    {
        function foo() { return 'inside'; }
        console.info('inside foo: ', foo());
    }

    console.info('outside foo: ', foo());
}