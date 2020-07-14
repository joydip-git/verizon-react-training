// (function () {
//     function add(x, y) {
//         return (x + y);
//     }
// })();
//IIFE (IIFY)

function add(x, y) {
    return (x + y);
}

function subtract(x, y) {
    return (x - y);
}

console.log(module.exports)
module.exports = {
    addFn: add,
    subFn: subtract
}

console.log(module)

