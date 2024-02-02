import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

/*
Написати функціонал імітації складу магазину продуктів.

Product - базовий обʼєкт, який містить властивості:
id
name
price
category
description: GMO, Gluten
count
expiredDate: date format dd.mm.yyyy

Написати функцію, яка приймає масив продуктів і виводить на екран тільки ті продукти, які є свіжими.
Написати функцію, яка приймає масив продуктів і сортує їх за ціною в порядку зростання.
Написати функцію, яка буде з масиву продуктів робити один обʼєкт в якому ключи будуть категорії продуктів, а значення - масив продуктів цієї категорії.
Написати функцію, яка має перевіряти чи відповідає кожний продукт 2-м критеріям:
'with out GMO'
'with out Gluten'
*/

// enum Category {
//   Fruits,
//   Vegetables,
//   Meat,
//   Milk,
//   Bread,
//   Water,
// }

//create type Product:-------------------------------------------------------------------------------------
type Product = {
  id: number,
  name: string,
  price: number,
  category: string,
  description: string,
  count: number,
  expiredDate: string,
}

//create function notExpiredProducts:-----------------------------------------------------------------------

const notExpiredProducts = function(products: Product[]): void {
  const checkProducts: Product[] = []
  products.forEach((product: Product) => {

    let dateFormatvlidation: string = ''
    const dateSlicedArray: string[] = product.expiredDate.split('.')
    const newDateExpiration: string[] = []
    newDateExpiration.push(dateSlicedArray[2])
    newDateExpiration.push(dateSlicedArray[0])
    newDateExpiration.push(dateSlicedArray[1])
    dateFormatvlidation = newDateExpiration.join('.')
    console.log(dateFormatvlidation)

    let prodExpiredTime: number = new Date(dateFormatvlidation).getTime()
    let presentTime: number = new Date().getTime()
    if(prodExpiredTime > presentTime) {
      checkProducts.push(product)
    } else {
      console.log(product.name + ' is Expired product')
    }
  })

  console.log('this products is good: ')
  console.log(checkProducts)
}


//create function sortProductsByPriseIncrease:---------------------------------------------------------------
const sortProductsByPriseIncrease = function(products: Product[]): void {
  products.sort((a: Product, b: Product) => {
    return a.price - b.price
  })

  console.log(products)
}

//create function checkComposition:-------------------------------------------------------------------------
const checkComposition = function(products: Product[]): void {
  let regExpGMO: RegExp = /GMO/
  let regExpGluten: RegExp = /Gluten/
  products.forEach((product: Product) => {
    let checkGMO: boolean = regExpGMO.test(product.description)
    let checkGluten: boolean = regExpGluten.test(product.description)
    if(checkGMO) {
      console.log(product.name + ' has GMO')
    }
    if(checkGluten) {
      console.log(product.name + ' has Gluten')
    }
  })
}


//create function productGroopedByCategory:-----------------------------------------------------------------

//1)
//створюємо обєкт та насипаємо його властивостями з динамічними ключами від TS

let OrderedlistByCategory: {
  [key: string]: Product[]
} = {}
type OrderedlistByCategory = {
  [key: string]: Product[]
}

//2)
const productGroopedByCategory = function(products: Product[]): OrderedlistByCategory {
  let OrderedlistByCategory: {
    [key: string]: Product[]
  } = {}
  products.forEach((product) => {
    if(OrderedlistByCategory[product.category]) {
      OrderedlistByCategory[product.category].push(product)
    } else {
      OrderedlistByCategory[product.category] = [product]
    }
  })
  return OrderedlistByCategory
}

const products: object[] = [
  {
      id: 1,
      name: 'Apple',
      price: 20,
      category: 'Fruits',
      description: 'Green apple',
      count: 10,
      expiredDate: '01.01.2024',
  },
  {
      id: 2,
      name: 'Potato',
      price: 10,
      category: 'Vegetables',
      description: 'Potato',
      count: 20,
      expiredDate: '01.02.2024',
  },
  {
      id: 3,
      name: 'Tomato',
      price: 15,
      category: 'Vegetables',
      description: 'Tomato',
      count: 20,
      expiredDate: '02.02.2024',
  },
  {
      id: 4,
      name: 'Milk',
      price: 30,
      category: 'Milk',
      description:
          'Milk Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum facere odio itaque! Sapiente quod aperiam, velit exercitationem, iusto fuga explicabo ratione esse nihil quasi doloribus hic a fugiat repellat perferendis.',
      count: 20,
      expiredDate: '02.02.2023',
  },
  {
    id: 5,
    name: 'Bread',
    price: 10,
    category: 'Bread',
    description:
        'Bread Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum facere odio itaque! Sapiente quod aperiam, velit exercitationem, iusto fuga GMO explicabo ratione esse nihil quasi doloribus hic a fugiat repellat perferendis.',
    count: 20,
    expiredDate: '02.02.2024',
},
{
    id: 6,
    name: 'Meat',
    price: 100,
    category: 'Meat',
    description:
        'Meat Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum facere odio itaque! Sapiente quod aperiam, velit exercitationem, iusto fuga explicabo ratione Gluten esse nihil quasi doloribus hic a fugiat repellat perferendis.',
    count: 20,
    expiredDate: '02.10.2024',
},
{
    id: 7,
    name: 'Orange',
    price: 20,
    category: 'Fruits',
    description:
        'Green apple Lorem ipsum, dolor sit amet GMO consectetur adipisicing elit. Cum facere odio itaque! Sapiente quod aperiam, velit exercitationem, iusto fuga explicabo ratione esse nihil quasi doloribus hic a fugiat repellat perferendis.',
    count: 10,
    expiredDate: '02.02.2024',
},
{
    id: 8,
    name: 'Cucumber',
    price: 10,
    category: 'Vegetables',
    description: 'Cucumber',
    count: 20,
    expiredDate: '02.02.2024',
},
{
    id: 9,
    name: 'Coca-Cola',
    price: 15,
    category: 'Water',
    description: 'Coca-Cola 1L',
    count: 20,
    expiredDate: '28.01.2024',
},
{
    id: 10,
    name: 'Yuorhurt',
    price: 30,
    category: 'Milk',
    description: 'Yuorhurt 1L',
    count: 20,
    expiredDate: '02.02.2024',
}
] 


sortProductsByPriseIncrease(products as Product[]) 
notExpiredProducts(products as Product[])
checkComposition(products as Product[])
console.log(productGroopedByCategory(products as Product[]))