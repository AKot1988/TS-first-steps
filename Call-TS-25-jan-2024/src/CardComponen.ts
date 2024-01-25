import { Clothes } from './types';

export const CardComponent = (data: Clothes[], parent): void => {
  const self = document.createElement('div');
  const elements = {
    name: document.createElement('p'),
    price: document.createElement('p'),
    size: document.createElement('p'),
    count: document.createElement('p'),
  };

  elements.name.innerHTML = data.name;
  elements.price.innerHTML = data.price;
  elements.size.innerHTML = data.size;
  elements.count.innerHTML = `Залишок на складі + ${data.count}`;

  self.append(elements.name, elements.price, elements.size, elements.count);
  parent.append(self);
};
