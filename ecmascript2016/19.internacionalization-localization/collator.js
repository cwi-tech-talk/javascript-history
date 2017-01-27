'use strict';

module.exports = function () {
    // in Brazil, "ä" sorts after "z"
    // in Swedish, "ä" sorts after "z"
    // in German,  "ä" sorts with "a"
    var list = ["ä", "a", "z"];

    var l10nDE = new Intl.Collator("de");
    var l10nSV = new Intl.Collator("sv");
    var l10nBR = new Intl.Collator("br");

    console.info('german sorting: ', list.sort(l10nDE.compare));
    console.info('swedish sorting: ', list.sort(l10nSV.compare));
    console.info('brazilian sorting: ', list.sort(l10nBR.compare));
}