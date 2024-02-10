import './style.css'
// -------------------------------------Task #1 from javascript info -------------------------------------
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




// -------------------------------------Task #2 according Andre -------------------------------------

type Options = {
  method: string,
  body: any

}

class Form {
  form: HTMLFormElement;
  input: HTMLInputElement;
  button: HTMLButtonElement;
  parent?: HTMLElement;

  constructor() {
    this.form = document.createElement('form');
    this.input = document.createElement('input');
    this.button = document.createElement('button');
  }



  render(parent: HTMLElement) {
    this.form.classList.add('form');
    this.input.classList.add('form__input');
    this.button.classList.add('form__button');

    this.input.placeholder = 'Enter entity of pictures';
    this.button.innerHTML = 'Go blyat!';
    this.button.addEventListener('click', (event) => {
      event.preventDefault();
      this.fetcher('https://jsonplaceholder.typicode.com/posts', {method: 'GET', body: null});
    })
    newForm.fetcher('https://jsonplaceholder.typicode.com/posts',{method: 'GET', body: null});

    this.parent = parent;
    this.form.append(this.input, this.button);

    // this.fetcher('https://jsonplaceholder.typicode.com/posts', {method: 'GET', body: null});

    this.parent.append(this.form);
  }

  async fetcher(url: string, options: Options = {method: 'GET', body: null}) {
    debugger
      if(this.input.value) {
      // this.button.addEventListener('click', (event) => {
      //   event.preventDefault();
        // const requestQuantity: Number = Number(this.input.value);
        for( let i = 1; i <= Number(this.input.value); i++) {
          const response = await fetch(url, options)
          console.log(i);
          console.log(response);

        }
      // })
    }
  }

  
}

const newForm = new Form();
newForm.render(document.body);
// newForm.fetcher('https://jsonplaceholder.typicode.com/posts',{method: 'GET', body: null});


// const fetcher = function (method?: string = "GET, url: string): any {})



// -------------------------------------Examples from call-------------------------------------
// interface User {
// 	age: string
// 	gogi: boolean | number
// 	[key: string]: number | string | boolean
// }

// const input = document.getElementById('field') as HTMLInputElement
// const link = document.querySelector('.link_facebook') as HTMLAnchorElement
// const linkList = document.querySelectorAll('.link') as NodeListOf<HTMLAnchorElement>
// const form = document.querySelector('.music_form') as HTMLFormElement

// const buttonSearch = document.querySelector('.search') as HTMLElement
// const text = document.querySelector('p') as HTMLElement

// console.log(text)
// console.log(input.value)
// console.log(link.href)

// input.addEventListener('keyup', event => {
// 	const target = event.target as HTMLInputElement
// 	console.log(target.value)
// })

// buttonSearch.addEventListener('click', event => {
// 	event.preventDefault()
// })

// type IData = {
// 	userId: number
// 	id: number
// 	title: string
// 	body: string
// }

// async function fetchData(): Promise<IData[]> {
// 	const response = await fetch('https://jsonplaceholder.typicode.com/posts')

// 	const data = await response.json()

// 	return data
// }

// const a: string = 'a'