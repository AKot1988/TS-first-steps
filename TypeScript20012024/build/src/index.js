"use strict";
// import secondPart from './components/secondPart';
const cat = function (name) {
    return `Hello ${name}`;
};
console.log(cat('Kysia'));
//-------------------------homework Arrays---------------------------
const arr1 = [6, 1, 3, 5, 6, 7, 8, 9];
const arr2 = [2, 4, 6, 8, 10];
const fillByNumbersMethod = function (arrayLength, value) {
    const newArray = [];
    newArray.length = arrayLength;
    for (let i = 0; i < newArray.length; i++) {
        newArray[i] = value;
    }
    return newArray;
};
console.log(fillByNumbersMethod(5, 7));
const reverseArray = function (array) {
    const newArray = [];
    newArray.length = array.length;
    for (let i = 0; i < newArray.length; i++) {
        newArray[i] = array[array.length - 1 - i];
    }
    return newArray;
};
console.log(reverseArray([1, 'буй!', 3, 'жмих', 5, 6, 7, 8, 9, 10]));
// console.log(secondPart(arr1, arr2));
//# sourceMappingURL=index.js.map