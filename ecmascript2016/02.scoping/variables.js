'use strict';

module.exports = function () {
    let letA = '1';
    var varA = '1';
    console.info('letA original: ', letA);
    console.info('varA original: ', varA);

    {
        let letA = '2';
        var varA = '2';
        console.info('letA redeclarado em outro escopo: ', letA);
        console.info('varA redeclarado em outro escopo: ', varA);
    }

    console.info('letA de fora se mantém inalterado: ', letA);
    console.info('varA de fora foi modificado: ', varA);
}