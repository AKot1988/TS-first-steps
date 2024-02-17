export interface Recipe {
  _id?: number
  title:string;
  ingredients:string[];
  instructions:string;
  category: string;
  time:string;
  dificult:string;
}

export interface ICategory {
  [key: string]: Recipe[]
}