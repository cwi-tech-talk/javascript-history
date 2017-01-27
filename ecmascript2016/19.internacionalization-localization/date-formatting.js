'use strict';

module.exports = function () {
    var l10nEN = new Intl.DateTimeFormat('en-US');
    var l10nDE = new Intl.DateTimeFormat('de-DE');
    var l10nBR = new Intl.DateTimeFormat('pt-BR');

    console.info('english date formatting', l10nEN.format(new Date('2015-01-02')));
    console.info('german date formatting', l10nDE.format(new Date('2015-01-02')));
    console.info('brazilian date formatting', l10nBR.format(new Date('2015-01-02')));

    // TODO: pesquisar pt-BR
}