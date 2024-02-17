// import './Modal.scss';

export default class Modal {
  isOpened: boolean;
  contentHolder: HTMLDivElement;
  elements: {
    wrapper: HTMLDivElement;
    contentHolder: HTMLDivElement;
  }
  constructor(public parent: HTMLElement, public ContentComponent: any) {
    this.isOpened = false;
    this.contentHolder = document.createElement('div');
    this.elements = {
      wrapper: document.createElement('div'),
      contentHolder: document.createElement('div'),
    };

  }

  render () {
    this.elements.wrapper.classList.add('modal__wrapper');
    this.elements.contentHolder.classList.add('modal__content-holder');

    this.elements.wrapper.onclick = (event) => {
      if (event.target === this.elements.wrapper) {
        this.close();
      }
    };
    this.elements.wrapper.append(this.elements.contentHolder);
    this.ContentComponent.render(this.elements.contentHolder as HTMLElement);
    this.parent.append(this.elements.wrapper);
    this.isOpened = true;
  }

  close () {
    this.elements.wrapper.replaceChildren();
    this.elements.contentHolder.replaceChildren();
    this.isOpened = false;
    this.elements.wrapper.remove();
  }
}