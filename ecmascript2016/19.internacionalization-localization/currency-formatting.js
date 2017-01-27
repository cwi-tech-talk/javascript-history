'use strict';

module.exports = function () {
    var l10nUSD = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
    var l10nGBP = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'GBP' });
    var l10nEUR = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'EUR' });

    console.info('english currency formatting', l10nUSD.format(1234567.89));
    console.info('british currency formatting', l10nGBP.format(1234567.89));
    console.info('europe currency formatting', l10nEUR.format(1234567.89));

    // TODO: pesquisar
}