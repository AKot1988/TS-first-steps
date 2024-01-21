"use strict";
//Створити стрілочну функцію, яка повертає максимальне значення з усіх переданих аргументів.
//Кількість аргументів може бути довільною. Потрібно повернути найбільше з них.
// const maxElement = (...args: number[]) => {
//   return Math.max(...args);
// };
// console.log(maxElement(1, 2, 3, 4, 56, 7, 8, 9, 10));
var secondMaxElementMethod = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var compareBiggestNumber = 0;
    for (var i = 0; i + 1; i < args.length) {
        if (args[i] > compareBiggestNumber) {
            compareBiggestNumber = args[i];
        }
    }
    return compareBiggestNumber;
};
console.log(secondMaxElementMethod(1, 2, 3, 4, 56, 7, 8, 9, 10));
//# sourceMappingURL=index.js.map