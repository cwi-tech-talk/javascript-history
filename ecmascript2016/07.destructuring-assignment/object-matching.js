'use strict';

module.exports = function () {
    function oldschool(obj) {
        let name = obj.name;
        let age = obj.age;
        let genre = obj.genre;
        let music = obj.taste.music;
        return 'name: ' + name + ' | age: ' + age + ' | genre: ' + genre + ' | music: ' + music;
    }

    function nicely(obj) {
        let { name, age, genre, taste: { music } } = obj;
        return `name: ${name} | age: ${age} | genre: ${genre} | music: ${music}`;
    }

    let person = {
        name: 'robsonrosa',
        age: 28,
        genre: 'M',
        taste: {  music: 'rock' } // remove 'taste' and you will get an error (undefined access) in both cases
    };

    console.info('oldschool: ', oldschool(person));
    console.info('nicely: ', nicely(person));
}