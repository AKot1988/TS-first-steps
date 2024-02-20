

export function createSelect(data: string[], options: {[key: string]: string}, recipeToEdit?: Recipe): HTMLSelectElement{
  const select = document.createElement('select')
  const selectedItem = recipeToEdit?.category
  select.setAttribute('name', options.name);
  select.setAttribute('class', options.class);

  let generatedInnerHTML = ''
  if(options.type === 'edit') {
    data.forEach((element) => {
      if(element == selectedItem){
        generatedInnerHTML += `<option value="${element}" selected>${element}</option>`
      } else {
        generatedInnerHTML += `<option value="${element}">${element}</option>`
      }
      console.log(generatedInnerHTML)
      return generatedInnerHTML
    })
  } else if(options.type === 'create') {
    generatedInnerHTML += `<option disabled selected>${options.defaultValue}</option>`
    data.forEach((element) => {
      generatedInnerHTML += `<option value="${element}">${element}</option>`
      return generatedInnerHTML
    })
  }
  select.innerHTML = generatedInnerHTML
  return select
}