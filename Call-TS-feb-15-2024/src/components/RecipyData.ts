import { Recipe } from '../main.ts'


const form = document.querySelector('form') as HTMLFormElement
// form.addEventListener('submit', (event) => {
//   event.preventDefault()
//     const data: Recipe = recipeData()
//     console.log(data)
//   console.log(recipeData())
// })
form.addEventListener('submit', recipeData)

export default function recipeData(event: any):Recipe {
  event.preventDefault()
  const formData = new FormData(form);


  console.log(formData.get('ingredients'));
  // let ingredientsAray: string[] = formData.get('ingredients')?.split(', ')


  const data: Recipe = {
    title: formData.get('title') as string,
    ingredients: [],
    instructions: formData.get('instructions') as string,
    category: formData.get('category') as string,
    time: formData.get('time') as string,
    dificult: formData.get('dificult') as string
  }
  return data
}