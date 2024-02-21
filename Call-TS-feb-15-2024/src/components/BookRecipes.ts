import { Recipe, ICategory, FormType } from './types.ts'
import { createSelect } from './utils.ts'
import Form from './Form.ts'
import Modal from './Modal.ts'
import { category } from './API.ts'


let optionsForSelectCategory = {
  type: 'create',
  defaultValue: 'Select category',
  class: 'select-recipe-by-category'
}

export default class BookRecipeps{
  _idRecipe: number
  constructor(public recipes: Recipe[], public category: ICategory,  public parent?: HTMLDivElement) {
    this._idRecipe = 0
  }

  render(parent: HTMLDivElement): void {
    let selectByCategory = createSelect(Object.keys(category), optionsForSelectCategory)
    selectByCategory.addEventListener('change', (event) => {
      this.recipes = this.searchByCategory((event.target as HTMLSelectElement).value, category)
      console.log(this.recipes)

    })
    parent.append(selectByCategory)
    this.recipes.forEach(recipe => {
      const recipeDiv = document.createElement('div')
      const deleteButton = document.createElement('button')
      deleteButton.textContent = 'Delete receipe'
      const editButton = document.createElement('button')
      editButton.textContent = 'Edit receipe'
      recipeDiv.classList.add('recipe-item')
      recipeDiv.innerHTML = `
        <h2 class='recipe-item-title'>${recipe.title}</h2>
        <p class='recipe-item-ingredients'>${recipe.ingredients.join(', ')}</p>
        <p class='recipe-item-instructions'>${recipe.instructions}</p>
        <p class='recipe-item-category'>${recipe.category}</p>
        <p class='recipe-item-time'>${recipe.time}</p>
        <p class='recipe-item-dificult'>${recipe.dificult}</p>
      `
      deleteButton.addEventListener('click', () => {
        this.deleteRecipe(recipe._id)
        recipeDiv.remove()
      })
      editButton.addEventListener('click', () => {
        const newForm = new Form(undefined, 'edit', recipe)
        const modal = new Modal(document.getElementById('app') as HTMLElement, newForm as any)
        modal.render()
      })
      recipeDiv.append(deleteButton, editButton)
      parent.appendChild(recipeDiv)
    })
  }

  addRecipe(recipe:Recipe): void {
    recipe._id = this._idRecipe
    this._idRecipe++
    this.recipes.push(recipe);
    if(!this.category[recipe.category]){
      this.category[recipe.category]=[]
    } else {
      this.category[recipe.category].push(recipe)
    }
  };


  deleteRecipe(idRecipe: number):void{
  const recipeToDel = this.recipes.find(recipe=>recipe._id === idRecipe);
  if(recipeToDel){
    const index = this.recipes.indexOf(recipeToDel);
    if(index !== -1){
      this.recipes.splice(1, index)
    }
  } else {
    throw new Error('Element not defined')
  }
  }

  searchByTitle(title: string): Recipe[] {
    return this.recipes.filter(recipe => recipe.title.toLowerCase().includes(title.toLowerCase()))
  }

  searchByDifficulty(difficaulty: string): Recipe[]{
      return this.recipes.filter(recipe => recipe.dificult.toLowerCase() === difficaulty.toLowerCase())
  }

  searchBuCoockingTime(time: string): Recipe[] {
      return this.recipes.filter(recipe => recipe.time.toLowerCase() === time.toLowerCase())
  }

  searchByCategory(requestedCategory: string, category: {}): Recipe[] {
   return  category[requestedCategory]
  }
}