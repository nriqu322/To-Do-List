const renderLayout = () => {
  const content = document.querySelector('#content');
  const header = document.createElement('header');
  const titlePage = document.createElement('h1');

  content.appendChild(header);
  header.appendChild(titlePage);

  titlePage.textContent = 'ToDo APP';

  const container = document.createElement('div');
  container.classList.add('main-container', 'd-flex');
  content.appendChild(container);

  const leftMenu = document.createElement('div');
  leftMenu.classList.add('left-menu');
  const leftTitle = document.createElement('h2');
  leftTitle.textContent = 'Projects';

  container.appendChild(leftMenu);
  leftMenu.appendChild(leftTitle);

  const todoContent = document.createElement('div');
  todoContent.classList.add('todo-content');
  const todoTitle = document.createElement('h2');
  todoTitle.textContent = 'Project Selected';

  container.appendChild(todoContent);
  todoContent.appendChild(todoTitle);
};

export default renderLayout;