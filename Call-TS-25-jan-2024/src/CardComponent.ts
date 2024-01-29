import { Clothes } from './types';
import './styles.scss';

export const CardComponent = function (
  data: Clothes[],
  parent: HTMLElement | null
): void {
  data.forEach((good) => {
    const self = document.createElement('div');
    const elements = {
      name: document.createElement('p'),
      price: document.createElement('p'),
      size: document.createElement('p'),
      count: document.createElement('p'),
    };
    self.className = 'good';
    elements.name.className = 'good__name';
    elements.price.className = 'good__price';
    elements.size.className = 'good__size';
    elements.count.className = 'good__count';

    elements.name.innerHTML = good.name;
    elements.price.innerHTML = good.price.toString() + ' гривень';
    elements.size.innerHTML = 'розмір ' + good.size;
    elements.count.innerHTML = `Залишок ` + good.count + ' штук';

    self.append(elements.name, elements.price, elements.size, elements.count);
    parent.append(self);
  });
};
