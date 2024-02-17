

export function createSelect(data: string[], options: {[key: string]: string}): HTMLSelectElement{
  const select = document.createElement('select')
  select.setAttribute('name', options.name);
  select.setAttribute('class', options.class);

  let generatedInnerHTML = `<option disabled selected>${options.defaultValue}</option>`
  data.forEach((element) => {
    generatedInnerHTML = generatedInnerHTML + `<option value="${element}">${element}</option>`
    // const option = document.createElement('option')
    // option.value = element
    // option.textContent = element
    // select.appendChild(option)
  })
  select.innerHTML = generatedInnerHTML
  return select
}