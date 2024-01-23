interface Product {
  name: string;
  price: number;
  stock: number;
}


const kysiaShopProducts: Product[] = [
    // Массив, що містить в собі товари (обєкти) що є в магазині
  {
    name: 'Brit care',
    price: 50,
    stock: 70,
  },
  {
    name: 'whiskas',
    price: 40,
    stock: 30,
  },
  {
    name: 'kotyachi sneki',
    price: 100,
    stock: 15,
  },
  {
    name: 'Мяв',
    price: 20,
    stock: 0,
  },
]

let productsOnStorage: object[] = [
  // Массив, що містить в собі товари (обєкти) що є на складі
  {
    name: 'Brit care',
    price: 50,
    stock: 100,
  },
  {
    name: 'whiskas',
    price: 40,
    stock: 25,
  },
  {
    name: 'kotyachi sneki',
    price: 100,
    stock: 45,
  },
  {
    name: 'Мяв',
    price: 20,
    stock: 200,
  },
];
const ProfileMagazine = function()
