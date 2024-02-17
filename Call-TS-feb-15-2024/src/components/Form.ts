import { Recipe } from '../main';
import { createSelect } from './utils'

const selectOptions = {
  name: 'category',
  class: 'form-recipe-category',
  defaultValue: 'Оберіть категорію'
}

let selectCategoryList = [
  'Салати',
  'Супи',
  'Десерти',
  'Гарніри',
  'Другі страви',
  'Закуски',
  'Напої'
]


export default class Form {
  form: HTMLFormElement;
  elements: {
    nameInput: HTMLInputElement;
    ingredientsInput: HTMLInputElement;
    instructionsInput: HTMLInputElement;
    dificultiNPUT: HTMLInputElement;
    categorySelect: HTMLSelectElement;
    timeInput: HTMLInputElement;
  }
  button: HTMLButtonElement;

  categoryActionContainer: HTMLDivElement;
  addCategoryButton: HTMLButtonElement;
  deleteCategoryButton: HTMLButtonElement;
  editCategoryButton: HTMLButtonElement;

  constructor(public parent?: HTMLElement) {
    this.form = document.createElement('form') as HTMLFormElement
    this.elements = {
      nameInput: document.createElement('input') as HTMLInputElement,
      ingredientsInput: document.createElement('input') as HTMLInputElement,
      instructionsInput: document.createElement('input') as HTMLInputElement,
      dificultiNPUT: document.createElement('input') as HTMLInputElement,
      categorySelect: createSelect(selectCategoryList, selectOptions) as HTMLSelectElement,
      timeInput: document.createElement('input') as HTMLInputElement,
    }
    this.button = document.createElement('button') as HTMLButtonElement

    this.categoryActionContainer = document.createElement('div') as HTMLDivElement
    this.addCategoryButton = document.createElement('button') as HTMLButtonElement
    this.deleteCategoryButton = document.createElement('button') as HTMLButtonElement
    this.editCategoryButton = document.createElement('button') as HTMLButtonElement
  }

  render(parent: HTMLElement) {
    this.parent = parent
    this.form.classList.add('form-recipes')

    this.elements.nameInput.classList.add('form-recipe-title')
    this.elements.nameInput.setAttribute('type', 'text')
    this.elements.nameInput.setAttribute('name', 'title')
    this.elements.nameInput.setAttribute('placeholder', 'Назва рецепту')


    this.elements.ingredientsInput.classList.add('form-recipe-ingredients')
    this.elements.ingredientsInput.setAttribute('type', 'text')
    this.elements.ingredientsInput.setAttribute('name', 'ingredients')
    this.elements.ingredientsInput.setAttribute('placeholder', 'Інгредієнти')


    this.elements.instructionsInput.classList.add('form-recipe-instructions')
    this.elements.instructionsInput.setAttribute('type', 'text')
    this.elements.instructionsInput.setAttribute('name', 'instructions')
    this.elements.instructionsInput.setAttribute('placeholder', 'Інструкції')


    this.elements.dificultiNPUT.classList.add('form-recipe-dificulty')
    this.elements.dificultiNPUT.setAttribute('type', 'text')
    this.elements.dificultiNPUT.setAttribute('name', 'dificult')
    this.elements.dificultiNPUT.setAttribute('placeholder', 'Складність приготування')


    this.elements.timeInput.classList.add('form-recipe-estimatedTime')
    this.elements.timeInput.setAttribute('type', 'text')
    this.elements.timeInput.setAttribute('name', 'time')
    this.elements.timeInput.setAttribute('placeholder', 'Час приготування')

    this.button.classList.add('submit-button')
    this.button.textContent = 'Додати рецепт'
    // let that = this
    // this.button.addEventListener('click', that.submitHandler)
    this.button.onclick = this.submitHandler

    this.categoryActionContainer.classList.add('category-action-container')
    this.addCategoryButton.classList.add('add-category-button')
    this.addCategoryButton.textContent = 'Додати категорію'
    this.deleteCategoryButton.classList.add('delete-category-button')
    this.deleteCategoryButton.textContent = 'Видалити категорію'
    this.editCategoryButton.classList.add('edit-category-button')
    this.editCategoryButton.textContent = 'Редагувати категорію'

    this.categoryActionContainer.append(this.addCategoryButton, this.deleteCategoryButton, this.editCategoryButton)

    this.form.append(this.elements.nameInput,
      this.elements.ingredientsInput,
      this.elements.instructionsInput,
      this.elements.dificultiNPUT,
      this.elements.categorySelect,
      this.elements.timeInput,
      this.button,
      this.categoryActionContainer
    )

    this.parent?.appendChild(this.form)
  }

  getFormData(): FormData {
    return new FormData(this.form)
  }

  submitHandler(event: Event) {
    console.log(this)
    event.preventDefault()
    const formData = new FormData(this.form)
    const ingridientsArray: string[] = formData.get('ingredients')?.split(', ')
    const data: Recipe = {
      title: formData.get('title') as string,
      ingredients: ingridientsArray as string[],
      instructions: formData.get('instructions') as string,
      category: formData.get('category') as string,
      time: formData.get('time') as string,
      dificult: formData.get('dificult') as string
    }
    console.log(data)
    this.form.replaceChildren()
    document.querySelector('.modal__wrapper')?.remove()
  }
}