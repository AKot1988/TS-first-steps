// //Створити стрілочну функцію, яка повертає максимальне значення з усіх переданих аргументів.
// //Кількість аргументів може бути довільною. Потрібно повернути найбільше з них.

// // const maxElement = (...args: number[]) => {
// //   return Math.max(...args);
// // };

// // console.log(maxElement(1, 2, 3, 4, 56, 7, 8, 9, 10));

// const secondMaxElementMethod = (...args: number[]) => {
//   let compareBiggestNumber: number = 0;
//   for (let i: number = 0; i + 1; i < args.length) {
//     if (args[i] > compareBiggestNumber) {
//       compareBiggestNumber = args[i];
//     }
//   }
//   return compareBiggestNumber;
// };

// console.log(secondMaxElementMethod(1, 2, 3, 4, 56, 7, 8, 9, 10));

// //З масиву чисел виберіть парні числа та обчисліть їх суму.*/
// // const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const sumEvenNumbers = (args: number[]): number => {
//   const evenNumbers: number[] = args.filter((value) => value % 2 === 0);
//   const evenNumbersSum: number = evenNumbers.reduce(
//     (sum: number, value: number) => sum + value
//   );
//   return evenNumbersSum;
// };

/* TASK - 3
 
У вас є користувацький список userList. Кожен користувач у ньому представлений об'єктом
Кожен користувач має повне ім'я (fullName), дату народження (birthDate) та масив з домашніми тваринами (pets).
Створіть функцію, яка отримує userList як аргумент і виводить в консоль для різних масивів:
1 - користувачі, які мають котів
2 - користувачі, які мають собак
4 - користувачі старше 18 років, які не мають домашніх тварин
*/

interface User {
  fullName: string;
  birthDate: string;
  pets: string[];
}

function showConsole(user: User[], valueToShow: string): void {
  switch (valueToShow) {
    case 'dog':
      console.log('dogs');
    case 'cat':
      console.log('cats');
    case 'older18':
      console.log('users');
  }
}

const userList: User[] = [
  {
    fullName: 'Andy',
    birthDate: '12.10.1994',
    pets: ['cat'],
  },
  {
    fullName: 'Julia',
    birthDate: '21.03.1990',
    pets: ['cat', 'dog'],
  },
  {
    fullName: 'Dima',
    birthDate: '02.12.1992',
    pets: [],
  },
  {
    fullName: 'Vova',
    birthDate: '02.12.2010',
    pets: ['rat', 'dog'],
  },
  {
    fullName: 'Karen',
    birthDate: '26.05.1988',
    pets: [],
  },
];
