/* TASK
 
Написати невеличкий функціонал роботи звичайного магазину одягу.
Тобто, у нас є склад товарів, де ми маємо приняти товар і розклеїти на них ціну.
Та перевірити чи вся розмірна сітка є в наявності.
Якщо товару немає, то вивести повідомлення про те, що товару немає.
Для розмірної сітки використати enum.
Також, додати можливість зміні ціни на товар при умові, що буде SALE. а не звичайна акція.
Вивести на екран в довільному вигляді інформацію про товари, які є в наявності і з проставленою ціною.
Якщо товару немає, то вивести повідомлення про те, що товару немає.
Список товарів які можуть продаватися:
Футболка - T-shirt
Штани - Pents
Світшот - Sweater
Розмірна сітка:
S
M
L
XL
Також описати типи для змінних які вказані нижче.
*/

// enum Size {
//   S = 'S',
//   M = 'M',
//   L = 'L',
//   XL = 'XL',
// }

// interface Clothes {
//   _id: number;
//   name: string;
//   price: number | null;
//   size: Size;
//   count: number;
// }

// type PriceMark = {
//   _id: number;
//   price: number;
// }
import { Size, Clothes, PriceMark } from './types';

const newClothes: Clothes[] = [
  {
    _id: 883355,
    name: 'T-shirt',
    price: null,
    size: 'S',
    count: 10,
  },
  {
    _id: 883356,
    name: 'T-shirt',
    price: null,
    size: 'M',
    count: 10,
  },
  {
    _id: 883357,
    name: 'T-shirt',
    price: null,
    size: 'L',
    count: 0,
  },
  {
    _id: 883358,
    name: 'T-shirt',
    price: null,
    size: 'XL',
    count: 10,
  },
  {
    _id: 883359,
    name: 'T-shirt',
    price: null,
    size: 'XXL',
    count: 10,
  },
  {
    _id: 883366,
    name: 'Pents',
    price: null,
    size: 'S',
    count: 2,
  },
  {
    _id: 883366,
    name: 'Pents',
    price: null,
    size: 'M',
    count: 6,
  },
  {
    _id: 883367,
    name: 'Pents',
    price: null,
    size: 'L',
    count: 10,
  },
  {
    _id: 883368,
    name: 'Pents',
    price: null,
    size: 'XL',
    count: 0,
  },
  {
    _id: 883310,
    name: 'Sweater',
    price: null,
    size: 'S',
    count: 10,
  },
  {
    _id: 883311,
    name: 'Sweater',
    price: null,
    size: 'M',
    count: 10,
  },
  {
    _id: 883312,
    name: 'Sweater',
    price: null,
    size: 'L',
    count: 1,
  },
  {
    _id: 883313,
    name: 'Sweater',
    price: null,
    size: 'XL',
    count: 10,
  },
];
const priceMark: PriceMark[] = [
  {
    _id: 883355,
    price: 100,
  },
  {
    _id: 883356,
    price: 100,
  },
  {
    _id: 883357,
    price: 130,
  },
  {
    _id: 883358,
    price: 100,
  },
  {
    _id: 883366,
    price: 120,
  },
  {
    _id: 883366,
    price: 100,
  },
  {
    _id: 883367,
    price: 100,
  },
  {
    _id: 883368,
    price: 150,
  },
  {
    _id: 883310,
    price: 100,
  },
  {
    _id: 883311,
    price: 100,
  },
  {
    _id: 883312,
    price: 120,
  },
  {
    _id: 883313,
    price: 200,
  },
];

function stickPrice(clothes: Clothes[], marks: PriceMark[]): Closethes[] {
  let price: number = marks.forEach(singlePrice => {marks.price});
}
