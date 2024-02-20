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

export enum FormTypeOptions {
  create = 'create',
  edit = 'edit'

}

export type FormType =  keyof typeof FormTypeOptions