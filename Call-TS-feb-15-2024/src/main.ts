import './style.css'
import Form from './components/Form.ts'
import Modal from './components/Modal.ts'
import { Recipe, ICategory } from './types.ts'
import BookRecipeps from './components/BookRecipes.ts'
import { recipeArray } from './components/API.ts'


const newRecipeButton = document.querySelector('.addNewRecipe') as HTMLButtonElement
newRecipeButton.addEventListener('click', () => {
  const newForm = new Form()
  const modal = new Modal(document.getElementById('app') as HTMLElement, newForm as any)
  modal.render()
})

const newBookRecipes = new BookRecipeps(recipeArray, {}, document.getElementById('app') as HTMLDivElement)
newBookRecipes.render(document.querySelector('.bookRecipesContainer') as HTMLDivElement)


/* TASk
 * Стоврити книгу рецептів
 * Тобто є готова форма для введення рецепту, де є поля:
 * - Назва рецепту
 * - Інгредієнти(на кожен інгредієнт окреме поле)
 * - Інструкції(textarea)
 * - Категорія(можна зрообити базовим select з можливістю вибору)
 * - Час приготування
 * - Складність
 * Ваша задача створити сутність книги рецептів, де буде:
 * 
 * 1. зберігатись інформація про рецепти(просто масив об'єктів з рецептами)
 * 
 * 2. зберігатись інформація про категорії(тобто об'єкт з категоріями, де властивістю є масив об'єктів з рецептами)
 * 
 * 3. методи для додавання рецептів, видалення рецептів, редагування рецептів
 * 
 * 4. методи для додавання категорій, видалення категорій, редагування категорій
 * 
 * 5. методи для пошуку рецептів по назві, категорії, складності, часу приготування
 * 
 */

// task responsability
// - Anton : create html form and create object for recipes
// - Natasha : part 2,4
// - Vycheslav : part 1,3
// - Roman : part 5  

// const recipes:Recipe = {
//   title: 'title',
//   ingredients: ['ing1', 'ing2'],
//   instructions: 'instructions',
//   category: 
// }

