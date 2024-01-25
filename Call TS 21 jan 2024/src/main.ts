// ------------------------------Task 1--------------------------------------------
//Створити стрілочну функцію, яка повертає максимальне значення з усіх переданих аргументів.
// //Кількість аргументів може бути довільною. Потрібно повернути найбільше з них.

// var1
// const maxElement = (...args: number[]) => {
//   return Math.max(...args);
// };

// console.log(maxElement(1, 2, 3, 4, 56, 7, 8, 9, 10));

// var2
// const secondMaxElementMethod = (args: number[]) => {
//   let compareBiggestNumber: number = 0;
//   for (let i: number = 0; i + 1; i < args.length) {
//     if (args[i] > compareBiggestNumber) {
//       compareBiggestNumber = args[i];
//     }
//   }
//   return compareBiggestNumber;
// };
// console.log(secondMaxElementMethod(1, 2, 3, 4, 56, 7, 8, 9, 10));

// ------------------------------Task 2--------------------------------------------
// З масиву чисел виберіть парні числа та обчисліть їх суму.*/
// const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const sumEvenNumbers = (...args: number[]): number => {
//   const evenNumbers: number[] = args.filter((value) => value % 2 === 0);
//   const evenNumbersSum: number = evenNumbers.reduce(
//     (sum: number, value: number) => sum + value
//   );
//   return evenNumbersSum;
// };
// console.log(sumEvenNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// ------------------------------Task 3--------------------------------------------
// У вас є користувацький список userList. Кожен користувач у ньому представлений об'єктом
// Кожен користувач має повне ім'я (fullName), дату народження (birthDate) та масив з домашніми тваринами (pets).
// Створіть функцію, яка отримує userList як аргумент і виводить в консоль для різних масивів:
// 1 - користувачі, які мають котів
// 2 - користувачі, які мають собак
// 4 - користувачі старше 18 років, які не мають домашніх тварин

interface User {
  fullName: string;
  birthDate: string;
  pets: string[];
}

function showConsole(user: User[], valueToShow: string): void {
  switch (valueToShow) {
    case 'dog':
      let usersWithDog: User[] = user.filter((user) =>
        user.pets.includes('dog')
      );
      console.log(usersWithDog);
      break;
    case 'cat':
      let usersWithCat: User[] = user.filter((user) =>
        user.pets.includes('cat')
      );
      console.log(usersWithCat);
      break;
    case 'older18':
      let usersOlder18: User[] = user.filter((user) => {
        let userAgeInSeconds: number = new Date(user.birthDate).getTime();
        let currentTimeInSeconds: number = new Date().getTime();
        let userAgeInYears: number =
          (currentTimeInSeconds - userAgeInSeconds) / 31536000000;
        if (userAgeInYears > 18 && user.pets.length === 0) {
          console.log(user);
          return user;
        }
      });
      console.log(usersOlder18);
      break;
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
    birthDate: '12.31.2008',
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
    fullName: 'Anton',
    birthDate: '05.26.1988',
    pets: [],
  },
];

showConsole(userList, 'older18');
