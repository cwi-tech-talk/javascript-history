'use strict';

module.exports = function () {
    function oldschool() {
        return {
            foo: function() {
                return 'oldschool method property';
            }
        };
    }

    function nicely() {
        return {
            foo() {
                return 'nicely method property';
            }
        };
    }

    console.info('oldschool: ', oldschool().foo());
    console.info('nicely: ', nicely().foo());
}