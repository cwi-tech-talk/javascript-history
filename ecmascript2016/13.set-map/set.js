'use strict';

module.exports = function () {
    function nicely() {
        let names = new Set();
        names.add('robson').add('joao').add('robson').add('maria');
        console.info(`size should be 3: `, names.size);
        console.info('maria should exists:', names.has('maria'));
        console.info(`names should be in this order [robson, joao, maria]:`);
        for (let name of names.values()) {
            console.info(' > ' + name);
        }
    }

    nicely();
}