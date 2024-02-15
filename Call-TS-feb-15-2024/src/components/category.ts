interface Recipe{
  title:string;
  ingredients:string[];
  instructions:string;
  category: string;
  time:string;
  dificult:string;
}

interface ICategory {
  
    [key: string]: Recipe[]
  
}

class BookRecipeps{

    constructor(
      public recipes: Recipe[],
      public category: ICategory
    ) {}
    addCategory(newValue:string):void{
      if (this.category[newValue]){
        console.log('така категорія вже є');
      } else {
        this.category[newValue] = []
      }
     
    }
    deleteCategory(categoryDel:string):void{
        
        
    }
    editCategory(editValue:string, newValue:string):void{
        if(this.category[editValue]){
            this.category[editValue] = newValue
        }
    }

  }
  
  const categories = {
    meat: [{},{}, {} ,{}],
    fish: [],
    firstGood: []
  }