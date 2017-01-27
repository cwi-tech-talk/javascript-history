'use strict';

module.exports = function () {

    let obj = { original: 'initial' };

    let newPropertyName = 'dynamicallyAddedProperty';
    let newPropertyValue = 'changed';
    Object.defineProperty(obj, newPropertyName, { value:  newPropertyValue });

    let newPropertySymbol = Symbol('newPropertySymbol');
    obj[newPropertySymbol] = 'lastOne';

    console.info('obj.toString(): ', obj);
    console.info('JSON.stringify(obj): ', JSON.stringify(obj));
    console.info('---------------------------------------');

    console.info('Object.getOwnPropertyNames(obj): ', Object.getOwnPropertyNames(obj));
    console.info('Reflect.ownKeys(obj): ', Reflect.ownKeys(obj));
    console.info('---------------------------------------');

    console.info('oldschool');
    Object.getOwnPropertyNames(obj).forEach(key => console.info('value: ', obj[key]));
    console.info('---------------------------------------');

    console.info('nicely');
    Reflect.ownKeys(obj).forEach(key => console.info('value: ', obj[key]));
    console.info('---------------------------------------');
}