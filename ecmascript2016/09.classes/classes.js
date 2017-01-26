'use strict';

module.exports = function () {

    class Position {
        constructor(x, y) {
            this._x = x;
            this._y = y;
        }

        set x(x) { this._x = x }
        get x() { return this.x; }
        set y(y) { this._y = y }
        get y() { return this.y; }

        toString() {
            return `[${this._x}, ${this._y}]`;
        }
    }

    class Animal {
        constructor(name, position) {
            this.name = name;
            this.position = position;

            // an abstract method approach (not natively supported yet)
            if (this.moveTo === undefined) {
                throw new TypeError("Cannot construct Animal instances directly");
            }
        }

        move(type, movement, target) {
            console.info(`The ${type} '${this.name}' is ${movement} from ${this.position} to ${target}`);
            this.position = target;
        }
    }

    class Dog extends Animal {
        static TYPE() { return 'dog' };

        moveTo(target) {
            super.move(Dog.TYPE(), 'walking', target);
        }
    }

    class Bird extends Animal {
        static TYPE() { return 'bird' };

        moveTo(target) {
            super.move(Bird.TYPE(), 'flying', target);
        }
    }

    let bob = new Dog('bob', new Position(0, 0));
    let til = new Bird('til', new Position(0, 5));

    bob.moveTo(new Position(2, 0));
    til.moveTo(new Position(3, 5));
    bob.moveTo(new Position(5, 0));
    til.moveTo(new Position(6, 4));

    let animal = new Animal('joe', new Position(0, 0));
}