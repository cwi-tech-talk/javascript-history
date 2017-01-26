'use strict';

module.exports = function () {

    // function doesntWork() {
    //     function hardProcess(id) {
    //         return new Promise((resolve, reject) => {
    //             if (id % 2) {
    //                 resolve({ id, name: 'key' + id });
    //             }
    //         });
    //     }

    //     function* search(start, end) {
    //         while (start < end) {
    //             // cant return yield inside promise
    //             hardProcess(id).then(v => {
    //                 yield v;
    //             });
    //             start++;
    //         }
    //     }

    //     for (let i of search(1, 15)) {
    //         console.info(i);
    //     }
    // }

    function nicely() {
        function hardProcess(id) {
            if (id % 2) {
                return { id, name: 'key' + id };
            } 
        }

        function* iterate(start, end) {
            while (start < end) {
                let value = hardProcess(start);
                if (value) {
                    yield value;
                }
                start++;
            }
        }

        function search() {
            return {
                from(start) {
                    return {
                        to(end) {
                            return iterate(start, end);
                        }
                    }
                }
            };
        }

        for (let i of search().from(1).to(15)) {
            console.info(i);
        }
    }

    nicely();
}