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
Також описати типи для змінних, вказати їх у types.js
*/

import { Size, Clothes, PriceMark } from './types';
import { CardComponent } from './CardComponent';

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
    price: 70,
  },
  {
    _id: 883356,
    price: 90,
  },
  {
    _id: 883357,
    price: 130,
  },
  {
    _id: 883358,
    price: 65,
  },
  {
    _id: 883366,
    price: 135,
  },
  {
    _id: 883366,
    price: 95,
  },
  {
    _id: 883367,
    price: 115,
  },
  {
    _id: 883368,
    price: 178,
  },
  {
    _id: 883310,
    price: 205,
  },
  {
    _id: 883311,
    price: 105,
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

let fillPrices = function(goodsArray: Clothes[], priceValues: PriceMark[]): Clothes[]{
  let goodsWithPrice: Clothes[] = [];
  priceValues.forEach((value) => {
    let item = goodsArray.find((good) => {
      if(good._id === value._id) {
        good.price = value.price;
        return good
      }
    })
    // debugger
      if(item !== undefined) {
        goodsWithPrice.push(item)
      } else {
        console.log("store doesn't have item with " + value._id + 'ID`s')
      }
  })
  return goodsWithPrice;
}

const pricedClothes: Clothes[] = fillPrices(newClothes, priceMark);

console.log(newClothes);
console.log(pricedClothes)

CardComponent(pricedClothes, document.getElementById('app'))


// enum OrderStatus {
//   Created,
//   Paid,
//   Shipped,
//   Delivered,
// }
// const statuses = Object.keys(OrderStatus);
// console.log(statuses); // ['0', '1', '2', '3', 'Created', 'Paid', 'Shipped', 'Delivered']


enum OrderStatus {
  Created = '0',
  Paid = '1',
  Shipped = '2',
  Delivered = '3',
}
const statuses = Object.keys(OrderStatus);
console.log(statuses); // ['Created', 'Paid', 'Shipped', 'Delivered']