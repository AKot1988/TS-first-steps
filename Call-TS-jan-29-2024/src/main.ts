// const STATUS = {
//   ERROR: 'error',
//   SUCSESS: 'success',
//   LOADING: 'loading',
// }

// type Status = keyof typeof STATUS

// enum METHOD {
//   POST = 'POST',
//   GET = 'GET',
//   PUT = 'PUT',
//   DELETE = 'DELETE',
// }
// type  Method = keyof typeof METHOD

// type Options = {
//   method: Method
//   body: any
// }

// function fetcher(url: string, options: Options): [boolean, string, any[]] {
//   let loading: boolean = false
//   let error: string = ''
//   let data: any[] = []
 
//   fetch(url, options)


//   return [loading, error, data]
// }

// function fetcherResoler() {
  
// }


// let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
// let response = await fetch(url);

// fetch('https://jsonplaceholder.typicode.com/posts?exact').then(response => response.json()).then(data => console.log(data))

// let commits = await response.json(); // read response body and parse as JSON

// console.log(commits[1].author.login);

// let promise = new Promise(function(resolve, reject) {
//   // resolve(1);
//   setTimeout(() => resolve(1), 1001);
//   setTimeout(() => reject(2), 1000);

// });

// promise.then(alert, alert);


//-----------------------------------promise example------------------------------------------------------

let promise2 = new Promise(function (resolve, reject) {

  setTimeout(() => resolve(console.log('resolve part is done')), 2000)
  setTimeout(() => reject(new Error("Whoops!")), 3000);
})
promise2
.then(() => console.log('done!', res))
.catch(() => console.log('catch', promise2))
// .finally(() => console.log('finally', promise2))

//-----------------------------------another promise example----------------------------------------------
// const myPromise = new Promise((resolve, reject) => {
//   // Симулюємо асинхронну операцію, яка завершується помилкою
//   setTimeout(() => {
//     const success = true;
//     // const success = false;
    
//     if (success) {
//       // Якщо операція успішна, викликаємо resolve
//       resolve("Дані успішно оброблено");
//     } else {
//       // Якщо виникла помилка, викликаємо reject
//       reject("Виникла помилка при обробці даних");
//     }
//   }, 4000);
// });

// // Використання проміса
// myPromise
//   .then((result) => {
//     console.log("Успішно:", result);
//   })
//   .catch((error) => {
//     console.error("Помилка:", error);
//   });
  








//-----------------------------------another promise example----------------------------------------------
// function delay(ms) {
//   // ваш код
// }

// delay(3000).then(() => alert('виконалось через 3 секунди'));

// let oneMorePromise = new Promise((resolve, reject) => {
//   setTimeout(()=>resolve('виконалось за 3 секунди'), 3000)
// })
// oneMorePromise.then(alert, alert)
















//-----------------------------------another promise example----------------------------------------------
// RED CIRCLE
//створюємо функцію, яка створює коло, а також передаємо в неї функцію колл бек, яка повинна бути тілом промісу, який повертається в результаті роботи функції).
//після виконання showCircle ми виконуємо .then, з аргументом у вигляді функції, яка відмальовує надпись "хуяк" після завершення зростання кола.
const circle = document.getElementsByClassName('circle')[0] as HTMLElement;
const button = document.createElement('button') as HTMLButtonElement;
button.innerHTML = 'show circle';
circle.insertAdjacentElement('beforebegin', button);

function showCircle(coordXcenter: number,
  coordYcenter: number,
  radius:number,
  callback: () => void,
  animationDuration: number){
  const circle = document.getElementsByClassName('circle')[0] as HTMLElement;
  circle.style.width = `${radius*2}px`;
  circle.style.height = `${radius*2}px`;
  circle.style.top = `${coordXcenter}px`;
  circle.style.left = `${coordYcenter}px`;
  circle.style.transition = `all ${animationDuration/1000}s`;
  let promise = new Promise((resolve) => {
    setTimeout(() => {callback(); resolve('done')}, animationDuration)
  })
  return promise
}

const showString = function (string: string, parent: HTMLElement):void {
  parent.children[0]?.remove()
  const p = document.createElement('p');
  p.innerHTML = string;
  p.classList.add('string');
  parent.appendChild(p);
}

button.addEventListener('click', () => {
  showCircle(150, 150, 100, () => showString('хуяк', circle), 2000).then(resolveValue => console.log(resolveValue))
})



//-----------------------------------enum, types, interface examples----------------------------------------------


// -------------------- string enum --------------------
// enum orderStatus {
//   Delivered = 'delivered',
//   Ordered = 'ordered',
//   Shipped= 'shipped',
//   Cancelled = 'cancelled',
// }

// type newTypeOrderStatus = keyof typeof orderStatus // 'Delivered' | 'Ordered' | 'Shipped' | 'Cancelled'
// const orderStatusKey: newTypeOrderStatus = 'Delivered'
// console.log(orderStatusKey) // Delivered ()
// const orderStatusValue = orderStatus.Delivered // 'delivered'
// console.log(typeof(orderStatusValue)) // string
// console.log('its behavior of string enum: ' + orderStatusValue)
// console.log(orderStatus.Delivered)

  
  
//   // -------------------- numeric enum --------------------
// enum orderStatusNumeric {
//   Delivered,
//   Ordered,
//   Shipped,
//   Cancelled, 
// }
// console.log(orderStatusNumeric)

// // orderStatusNumeric.OtherAction = 5 //Add propety to enum like this is forbidden (not possiple)
// // console.log(orderStatusNumeric.otherAction) // 5

// enum secondOrderStatusNumeric {
//   Delivered = '0',
//   Ordered = '1',
//   Shipped = '2',
//   Cancelled = '3', 
// }
// console.log(secondOrderStatusNumeric)
// console.log(secondOrderStatusNumeric['Delivered']) // 0



// type newTypeOrderStatusNumericEnum = keyof typeof orderStatusNumeric // 'Delivered' | 'Ordered' | 'Shipped' | 'Cancelled'
// const statuses = Object.values(orderStatusNumeric)
// console.log(statuses) // [0, 1, 2, 3]

// const moreStatuses = Object.values(orderStatusNumeric)
// console.log(moreStatuses) // [0, 1, 2, 3]

// const StatusByIndex = orderStatusNumeric[0] // 'Delivered'
// console.log('its behavior of numeric enum [0] : ' + StatusByIndex)
// const Status = orderStatusNumeric.Delivered // 0
// console.log('its behavior of numeric enum orderStatusNumeric.Delivered : ' + Status)
// console.log(orderStatusNumeric.Delivered)


// enum Direction {
//   Up = '1',
//   Down = '2',
//   Left = '3',
//   Right = '4',
// }

// console.log(Direction)


// enum Animals {
//   Cat = 'CAT',
//   Dog = 'DOG',
//   Fish = 'FISH',
// }

// const animalStrings: string[] = Object.values(Animals)
// type Animal = keyof typeof Animals // 'Cat' | 'Dog' | 'Fish'
// console.log(animalStrings) // ['CAT', 'DOG', 'FISH']
// console.log(Animals.Cat) // 'CAT'








// const Clothes = {
// 	Tshrit: 'T-SHIRT With long sleeves',
// 	Pents: 'PENTS',
// 	Sweater: 'SWEATER',
// 	Jacket: 'JACKET',
// } as const

// type PostStateType = (typeof Clothes)[keyof typeof Clothes] // 'T-SHIRT' | 'PENTS' | 'SWEATER' | 'JACKET'

// const post: PostStateType = Clothes.Pents

// const post2: PostStateType = 'T-SHIRT With long sleeves'

// ====================================================

// interface IPerson {
// 	name: string
// 	age: number
// 	city: string
// 	address: string
// }

// type IPersonNullable = {
// 	[key in keyof IPerson]: IPerson[key] | null
// }







// enum SizeScreen {
// 	XL = 1280,
// 	L = 1024,
// 	M = 768,
// 	S = 320,
// }

// interface IBody {
// 	color: Theme
// 	width: SizeScreen
// 	height: number
// 	length: number
// 	children: IBody[]
// }