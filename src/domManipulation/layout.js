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
  leftMenu.classList.add('left-menu', 'pt-3', 'px-2');
  const leftTitle = document.createElement('h2');
  leftTitle.textContent = 'Projects';

  container.appendChild(leftMenu);
  leftMenu.appendChild(leftTitle);

  const newProjectCont = document.createElement('div');
  newProjectCont.classList.add('new-project-container', 'd-flex');
  leftMenu.appendChild(newProjectCont);

  const newProject = document.createElement('input');
  newProject.classList.add('new-project', 'form-control');
  newProject.id = 'new-project';
  newProject.setAttribute('type', 'text');
  newProject.placeholder = 'Add New Project';
  newProjectCont.appendChild(newProject);

  const addProjectBtn = document.createElement('button');
  addProjectBtn.classList.add('add-project-btn', 'btn-success', 'px-3');
  addProjectBtn.id = 'add-project-btn';
  addProjectBtn.textContent = '+';
  newProjectCont.appendChild(addProjectBtn);

  const deleteProjectBtn = document.createElement('button');
  deleteProjectBtn.classList.add('delete-btn', 'btn', 'btn-danger', 'py-0', 'my-2');
  deleteProjectBtn.textContent = 'Delete';
  leftMenu.appendChild(deleteProjectBtn);

  const todoContainer = document.createElement('div');
  todoContainer.classList.add('todo-container', 'pl-3', 'pt-3');
  const todoItemCont = document.createElement('div');
  todoItemCont.classList.add('todo-item-container');

  container.appendChild(todoContainer);
  todoContainer.appendChild(todoItemCont);

  const newTodoCont = document.createElement('div');
  newTodoCont.classList.add('new-todo-container');
  newTodoCont.style.display = 'none';
  todoContainer.appendChild(newTodoCont);

  const newTodo = document.createElement('form');
  newTodo.classList.add('new-todo', 'form-group', 'd-flex', 'mx-auto', 'p-3');
  const todoItemTitle = document.createElement('input');
  todoItemTitle.classList.add('todo-input-title', 'form-control');
  todoItemTitle.id = 'todo-item-title';
  todoItemTitle.setAttribute('type', 'text');
  todoItemTitle.placeholder = 'New todo...';
  todoItemTitle.required = true;
  newTodo.appendChild(todoItemTitle);

  const todoItemDescription = document.createElement('input');
  todoItemDescription.classList.add('todo-input-descrip', 'form-control');
  todoItemDescription.placeholder = 'Add description...';
  todoItemDescription.required = true;
  newTodo.appendChild(todoItemDescription);

  const todoItemDueDate = document.createElement('input');
  todoItemDueDate.setAttribute('type', 'date');
  todoItemDueDate.classList.add('todo-input-date', 'form-control');
  todoItemDueDate.required = true;
  newTodo.appendChild(todoItemDueDate);

  const todoItemPriority = document.createElement('select');
  todoItemPriority.classList.add('todo-input-priority', 'form-control');
  const optionOne = document.createElement('option');
  optionOne.textContent = 'Low';
  todoItemPriority.appendChild(optionOne);
  const optionTwo = document.createElement('option');
  optionTwo.textContent = 'Medium';
  todoItemPriority.appendChild(optionTwo);
  const optionThree = document.createElement('option');
  optionThree.textContent = 'High';
  todoItemPriority.appendChild(optionThree);
  newTodo.appendChild(todoItemPriority);

  newTodoCont.appendChild(newTodo);

  const addTodoBtn = document.createElement('input');
  addTodoBtn.setAttribute('type', 'submit');
  addTodoBtn.classList.add('add-todo-btn', 'btn-success', 'px-3');
  addTodoBtn.id = 'add-todo-btn';
  // addTodoBtn.value = 'Add';
  newTodo.appendChild(addTodoBtn);
};

export default renderLayout;