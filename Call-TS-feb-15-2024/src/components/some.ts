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
 * 1. зберігатись інформація про рецепти(просто масив об'єктів з рецептами)
 * 2. зберігатись інформація про категорії(тобто об'єкт з категоріями, де властивістю є масив об'єктів з рецептами)
 * 3. методи для додавання рецептів, видалення рецептів, редагування рецептів
 * 4. методи для додавання категорій, видалення категорій, редагування категорій
 * 5. методи для пошуку рецептів по назві, категорії, складності, часу приготування
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

export interface Recipe {
	_id?: number
	title: string
	ingredients: string[]
	instructions: string
	category: string
	time: string
	dificult: string
}

interface ICategory {
	[key: string]: Recipe[]
}

import './style.css'
// import { setupCounter } from './components/Form.ts'

class BookRecipeps {
	_idRecipe: number
	constructor(public recipes: Recipe[], public category: ICategory) {
		this._idRecipe = 0
	}
	addRecipe(recipe: Recipe): void {
		recipe._id = this._idRecipe
		this._idRecipe++
		this.recipes.push(recipe)
		if (!this.category[recipe.category]) {
			this.category[recipe.category] = []
		} else {
			this.category[recipe.category].push(recipe)
		}
	}

	deleteRecipe(idRecipe: number): void {
		const recipeToDel = this.recipes.find(recipe => recipe._id === idRecipe)
		if (recipeToDel) {
			const index = this.recipes.indexOf(recipeToDel)
			if (index !== -1) {
				this.recipes.splice(1, index)
			}
		} else {
			throw new Error('Element not defined')
		}
	}

	editRecipe(idRecipe: number, paramsKey: keyof Recipe, newValue: unknown): void {
		const recipeToEdit: Recipe | undefined = this.recipes?.find(recipe => recipe._id === idRecipe)
		if (recipeToEdit) {
			if (typeof newValue === 'string' && typeof recipeToEdit[paramsKey] === 'string') {
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

	searchByDifficulty(difficaulty: string): Recipe[] {
		return this.recipes.filter(recipe => recipe.dificult.toLowerCase() === difficaulty.toLowerCase())
	}

	searchBuCoockingTime(time: string): Recipe[] {
		return this.recipes.filter(recipe => recipe.time.toLowerCase() === time.toLowerCase())
	}

	searchByCategory(category: string): Recipe[] {
		return this.recipes.filter(recipe => recipe.category.toLowerCase() === category.toLowerCase())
	}
}

// const category = {
//   meat: [{},{}, {} ,{}],
//   fish: [],
//   firstGood: []
// }

const field = {
	type: 'text',
	name: 'title',
	placeholder: 'title',
}

const input = document.createElement('input') as HTMLInputElement

for (let key in field) {
	input[key] = field[key]
}

interface Test {
	name: string
	age: number[]
	load: string
}

const test = (obj: Test, keyObj: keyof Test, newVal: unknown) => {
	if (typeof newVal === 'string') {
		(obj[keyObj] as string) = newVal
	}
    if(Array.isArray(newVal)) {
        (obj[keyObj] as number[]) = newVal
    }
}
