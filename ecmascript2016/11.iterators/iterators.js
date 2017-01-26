'use strict';

module.exports = function () {

    /*
    interface Iterable {
        [System.iterator]() : Iterator;
    }

    interface Iterator {
        next() : IteratorResult;
        return?(value? : any) : IteratorResult;
    }
    
    interface IteratorResult {
        value: any;
        done: boolean;
    }
    */

    function getNodeChain() {
        let nodes = Array(5).fill({ key: 'v'}).map((n, i) => ({ id: i, key: n.key + i }));
        nodes.forEach(node => node.next = nodes.find(n => n.id === node.id + 1));
        return nodes;
    }

    function chainOf(node) {
        let current = node;
        return {
            [Symbol.iterator]() {
                return {
                    next() {
                        let local = current;
                        current = current ? current.next : undefined;
                        return {
                            done: !local,
                            value: local
                        }
                    }
                };
            }
        };
    };

    let first = getNodeChain()[0];
    
    for (let node of chainOf(first)) {
        for (let letter of node.key) {
            console.info(` ${letter} `);
        }
        console.info('---');
    }
}