const tabsList = document.querySelectorAll('.tab_head-item') as NodeListOf<HTMLElement>;
const tabsContent = document.querySelectorAll('.tab_content') as NodeListOf<HTMLElement>;

const tabsContainer = document.querySelector('.tab_head-container') as HTMLUListElement;


tabsContainer.addEventListener('click', (event: Event) => {
  const target = event.target as HTMLElement;
  if (target.classList.contains('tab_head-text') || target.classList.contains('tab_head-item')) {
    target.classList.add('active');
    tabsContent.forEach((tab) => {
      if(tab.dataset.content === target.dataset.head) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    })
    tabsList.forEach((tab) => {
      if(tab !== target) {
        tab.classList.remove('active');
      }
    })
    
  }
})