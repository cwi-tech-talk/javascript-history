'use strict';

module.exports = function () {

    let target = {
        title: "I am the 'title' property in the target object",
        description: "I am the 'description' property in the target object",
    }

    let proxy = new Proxy(target, {
        get(receiver, propertyName) {
            console.info('trying to access property: ', propertyName);
            return propertyName in receiver ? receiver[propertyName] : `This is a fake property called '${propertyName}'`;
        }
    })

    console.info('---------------------------------------');
    console.info('proxy.title: ', proxy.title);
    console.info('---------------------------------------');
    console.info('proxy.description: ', proxy.description);
    console.info('---------------------------------------');
    console.info('proxy.name: ', proxy.name);
    console.info('---------------------------------------');
    console.info('proxy.fullname: ', proxy.fullname);
    console.info('---------------------------------------');
}