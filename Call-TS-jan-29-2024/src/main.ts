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

  setTimeout(() => resolve(console.log('resolve part is done')), 1000)
  setTimeout(() => reject(new Error("Whoops!")), 2000);
})
promise2
.then(() => console.log('done!', promise2))
.catch(() => console.log('catch', promise2))
.finally(() => console.log('finally', promise2))

//-----------------------------------another promise example----------------------------------------------
const myPromise = new Promise((resolve, reject) => {
  // Симулюємо асинхронну операцію, яка завершується помилкою
  setTimeout(() => {
    const success = true;
    // const success = false;
    
    if (success) {
      // Якщо операція успішна, викликаємо resolve
      resolve("Дані успішно оброблено");
    } else {
      // Якщо виникла помилка, викликаємо reject
      reject("Виникла помилка при обробці даних");
    }
  }, 1000);
});

// Використання проміса
myPromise
  .then((result) => {
    console.log("Успішно:", result);
  })
  .catch((error) => {
    console.error("Помилка:", error);
  });

  //-----------------------------------another promise example----------------------------------------------