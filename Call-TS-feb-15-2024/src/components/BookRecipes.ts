import { Recipe, ICategory } from './types.ts'
import Form from './Form.ts'
import Modal from './Modal.ts'

export default class BookRecipeps{
  _idRecipe: number
  constructor(public recipes: Recipe[], public category: ICategory,  public parent?: HTMLDivElement) {
    this._idRecipe = 0
  }

  render(parent: HTMLDivElement): void {
    this.recipes.forEach(recipe => {
      const recipeDiv = document.createElement('div')
      const deleteButton = document.createElement('button')
      deleteButton.textContent = 'Delete receipe'
      const addButton = document.createElement('button')
      addButton.textContent = 'New receipe'
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
      addButton.addEventListener('click', () => {
        const newForm = new Form()
        const modal = new Modal(document.getElementById('app') as HTMLElement, newForm as any)
        modal.render()
      })
      recipeDiv.append(deleteButton, addButton)
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


  editRecipe(idRecipe: number, paramsKey: keyof Recipe, newValue: string):void{
    const recipeToEdit: Recipe | undefined = this.recipes?.find(recipe=>recipe._id === idRecipe);
    if(recipeToEdit){

      if(typeof newValue === 'string') {
        // recipeToEdit[paramsKey as keyof typeof recipeToEdit] = newValue 
       console.log(recipeToEdit[paramsKey])
       recipeToEdit[paramsKey] = newValue
      }
      // if(Array.isArray(newValue)) {
      //   (recipeToEdit as any)[paramsKey] = [...recipeToEdit[paramsKey], newValue]
      // }
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

  searchByCategory(category: string): Recipe[] {
  return this.recipes.filter(recipe => recipe.category.toLowerCase() === category.toLowerCase())
  }
}