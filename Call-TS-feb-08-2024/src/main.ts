
// -----------------------------------------------------Task 1-----------------------------------------------------
/* Описати клас який буде описувати сутність InputElement
* тобто класс інпута має мати методи які будуть відповідати за
* валідацію введених даних
* тобто валідація на пустоту, та на довжину
* методи handleBlur, handleFoucus, handleChange
* та безпосередньо створення самого елемента, з потрібним набором атрибутів
- type
- placeholder?
- value?
- name
- required?
- minLength?
- maxLength?
*/
type ElementParams = {
  type: string;
  className?: string;
  placeholder?: string;
  value?: string;
  name: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
}

class InputElement {
  self: HTMLInputElement;
  errorMessage: HTMLElement;

  constructor(public element: ElementParams) {
    this.self = document.createElement('input');
    this.errorMessage = document.createElement('p')
  }

  render(parent: HTMLElement) {
    for (let key in this.element) {
      (this.self as any)[key] = this.element[key as keyof typeof this.element];
    }
    this.errorMessage.classList.add('error-message')

    this.self.addEventListener('keyup', () => this.handleChange())
    this.self.addEventListener('blur', () => this.handleBlur())
    this.self.addEventListener('focus', () => this.handleFocus())
    


    parent.insertAdjacentElement('afterbegin', this.self)
  }


  handleChange() {
      if(this.element.minLength && this.self.value.length < this.element.minLength) {
        this.errorMessage.remove()
        this.errorMessage.textContent = 'too short value'
        this.self.insertAdjacentElement('afterend', this.errorMessage)
      } else if(this.element.maxLength && this.self.value.length === this.element.maxLength) {
        this.errorMessage.remove()
        this.errorMessage.textContent = 'entered max length'
        this.self.insertAdjacentElement('afterend', this.errorMessage)
      } else {this.errorMessage.remove()}
  }

  handleBlur() {
    if(this.element.required && !this.self.value ||  this.element.minLength && this.self.value.length < this.element.minLength) {
      this.self.style.border = '2px solid red'
      this.self.style.borderRadius = '5px'
    } else {this.self.style.border = '2px solid green'
    this.self.style.borderRadius = '5px'
    }
  }

  handleFocus() {
    this.self.style.border = '5px solid teal'
    this.self.style.borderRadius = '5px'
  }
}

const newInput = new InputElement({
  type: 'text',
  className: 'input',
  placeholder: 'enter something',
  name: 'input',
  required: true,
  minLength: 3,
  maxLength: 15,
}).render(document.getElementById('app') as HTMLElement)



// -----------------------------------------------------Task 2-----------------------------------------------------
/* Описати клас який буде описувати сутність FormElement
* тобто класс форми має мати методи які будуть відповідати за
- збір значень з всіх інпутів
- відправку форми
* та безпосередньо створення самого елемента, з потрібним набором атрибутів
- className
- id?
- action?
*/

// type ElementParams = {
//   type: string;
//   classes?: string;
//   placeholder?: string;
//   value?: string;
//   name: string;
//   required?: boolean;
//   minLength?: number;
//   maxLength?: number;
// }

const inputParamsforForm: ElementParams[] = [
  {
    type: 'text',
    className: 'input__name',
    placeholder: 'enter your name',
    name: 'input__name',
    required: true,
    minLength: 3,
    maxLength: 15,
  },
  {
    type: 'text',
    className: 'input__surname',
    placeholder: 'enter your surname',
    name: 'input__surname',
    required: true,
    minLength: 3,
    maxLength: 15,
  },
  {
    type: 'text',
    className: 'input__email',
    placeholder: 'enter email',
    name: 'input__email',
    required: true,
    minLength: 3,
    maxLength: 20,
  }
]

type FormParams = {
  className: string;
  id?: string;
  action?: string;
}

class FormElement {
  data: any;
  form: HTMLFormElement;
  submitButton: HTMLButtonElement;
  header: HTMLHeadingElement;
  constructor (
    public formParams: FormParams,
    public inputs: ElementParams[],
    public formHeader?: string
    )
  {
    this.data = {
      name: '',
      surname: '',
      email: ''
    }
    this.header = document.createElement('h1');
    this.formHeader = formHeader;
    this.form = document.createElement('form');
    this.submitButton = document.createElement('button');
  }

  render(parent: HTMLDivElement) {
    this.submitButton.type = 'submit';
    this.submitButton.textContent = 'send data';
    for(let key in this.formParams) {
      (this.form as any)[key] = this.formParams[key as keyof typeof this.formParams];
    }
    this.inputs.forEach(inputParams => { new InputElement(inputParams).render(this.form)})
    this.submitButton.addEventListener('click', (e) => {
      e.preventDefault()
      this.handleSubmit(e)
    this.fetcher()})
      if(this.formHeader) {
        this.header.innerHTML = this.formHeader
        this.form.insertAdjacentElement('afterbegin', this.header)
      }
    this.form.append(this.submitButton)
    parent.append(this.form)
  }

    handleSubmit(e: Event){
      e.preventDefault,
      console.log('form submitted')
      const formData = new FormData(this.form)
      // const data = Object.fromEntries(formData)   //отак порадив копайлот {input__email: 'Gogi', input__surname: 'Gogettini', input__name: 'Gogettini@g.net'}

      // А отак я робив у проєкті раніше
      this.data = {
        name: formData.get('input__name'),
        surname: formData.get('input__surname'),
        email: formData.get('input__email')
      }
      console.log(this.data) // тут є перевагою, що ключі я кридумую сам {name: "gogi", surname: "gogi", email: "gogi"}
    }

    fetcher() {
      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(this.data),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      .then((response) => response.json())
      .then((json) => console.log(json));
    }

}

const newForm = new FormElement({className: 'form',id: 'form', action: 'submit'}, inputParamsforForm, "Fill the form").render(document.getElementById('app') as HTMLDivElement)