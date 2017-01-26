'use strict';

module.exports = function () {
    function nicely() {
        let stock = new Map();
        stock.set('coffee', 0);
        stock.set('beer', 35);
        stock.set('water', 2);
        stock.set('coffee', 50);

        console.info(`size should be 3: `, stock.size);
        console.info('coffee should be 50:', stock.get('coffee'));
        console.info(`products should be [coffee(50), beer(35), water(2)]:`);
        for (let [product, quantity] of stock.entries()) {
            console.info(`There are ${quantity} units of ${product}`);
        }
    }

    nicely();
}