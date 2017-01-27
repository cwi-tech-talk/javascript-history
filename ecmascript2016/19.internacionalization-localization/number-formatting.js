'use strict';

module.exports = function () {
    var l10nEN = new Intl.NumberFormat('en-US');
    var l10nDE = new Intl.NumberFormat('de-DE');
    var l10nBR = new Intl.NumberFormat('pt-BR');

    console.info('english number formatting', l10nEN.format(1234567.89));
    console.info('german number formatting', l10nDE.format(1234567.89));
    console.info('brazilian number formatting', l10nBR.format(1234567.89));

    // TODO: pesquisar pt-BR
}