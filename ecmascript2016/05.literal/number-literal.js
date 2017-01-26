'use strict';

module.exports = function () {
    let value = 503;

    function oldschoolBinary() {
        return parseInt('111110111', 2);
    }

    function nicelyBinary() {
        return 0b111110111;
    }

    function oldschoolOctal() {
        return parseInt('767', 8);
    }

    function nicelyOctal() {
        return 0o767;
    }

    console.info('oldschoolBinary: ', oldschoolBinary());
    console.info('nicelyBinary:', nicelyBinary());
    console.info('oldschoolOctal: ', oldschoolOctal());
    console.info('nicelyOctal:', nicelyOctal());
}