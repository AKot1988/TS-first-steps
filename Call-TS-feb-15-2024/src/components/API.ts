import { Recipe, ICategory } from './types';
export let recipeArray: Recipe[] = [
  {
    title: 'title',
    ingredients: ['ing1', 'ing2'],
    instructions: 'instructions',
    category: 'Салати',
    time: 'time',
    dificult: 'dificult',
    _id: 0
  },
  {
    title: 'title',
    ingredients: ['ing1', 'ing2'],
    instructions: 'instructions',
    category: 'Супи',
    time: 'time',
    dificult: 'dificult',
    _id: 1
  },
  {
    title: 'title',
    ingredients: ['ing1', 'ing2'],
    instructions: 'instructions',
    category: 'Гарніри',
    time: 'time',
    dificult: 'dificult',
    _id: 2
  },
  {
    title: 'title',
    ingredients: ['ing1', 'ing2'],
    instructions: 'instructions',
    category: 'Десерти',
    time: 'time',
    dificult: 'dificult',
    _id: 3
  }

];

export let category: ICategory = {
  Салати: [
    {
      title: 'title6809570',
      ingredients: ['ing1', 'ing2'],
      instructions: 'instructions',
      category: 'Салати',
      time: 'time',
      dificult: 'dificult',
      _id: 0
    },
    {
      title: 'title869',
      ingredients: ['ing1', 'ing2'],
      instructions: 'instructions',
      category: 'Салати',
      time: 'time',
      dificult: 'dificult',
      _id: 1
    }
  ],
  Супи: [
    {
      title: 'title6890970',
      ingredients: ['ing1', 'ing2'],
      instructions: 'instructions',
      category: 'Супи',
      time: 'time',
      dificult: 'dificult',
      _id: 3
    },
    {
      title: 'title436578',
      ingredients: ['ing1', 'ing2'],
      instructions: 'instructions',
      category: 'Супи',
      time: 'time',
      dificult: 'dificult',
      _id: 6
    }
  ],
  Гарніри: [
    {
      title: 'title4367',
      ingredients: ['ing1', 'ing2'],
      instructions: 'instructions',
      category: 'Гарніри',
      time: 'time',
      dificult: 'dificult',
      _id: 57
    },
    {
      title: 'title4367',
      ingredients: ['ing1', 'ing2'],
      instructions: 'instructions',
      category: 'Гарніри',
      time: 'time',
      dificult: 'dificult',
      _id: 432
    }
  ],
  Десерти: [
    {
      title: 'title234',
      ingredients: ['ing1', 'ing2'],
      instructions: 'instructions',
      category: 'Десерти',
      time: 'time',
      dificult: 'dificult',
      _id: 30
    },
    {
      title: 'title2314435',
      ingredients: ['ing1', 'ing2'],
      instructions: 'instructions',
      category: 'Десерти',
      time: 'time',
      dificult: 'dificult',
      _id: 89
    }
  ]
}