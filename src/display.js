import { projectList } from './logic';

const renderProjects = () => {
  const leftMenu = document.querySelector('.left-menu');
  const projectListCont = document.createElement('div');
  projectListCont.classList.add('project-list');
  leftMenu.appendChild(projectListCont);

  projectList.forEach((proj) => {
    const projct = document.createElement('li');
    projct.classList.add('project');
    projct.id = proj.id;
    projct.textContent = proj.title;
    projectListCont.appendChild(projct);
  });
};

const clearElement = (element) => {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
};

const renderTodos = () => {
  const todoItemContainer = document.querySelector('.todo-item-container');
  const newTodoContainer = document.querySelector('.new-todo-container');
  clearElement(todoItemContainer);

  const activeProject = document.querySelector('.active-project');
  const selectedProject = projectList.find(project => project.id === activeProject.id);

  const titleProject = document.createElement('h2');
  titleProject.classList.add('title-project');
  titleProject.textContent = selectedProject.title;
  todoItemContainer.appendChild(titleProject);
  newTodoContainer.style.display = '';
  newTodoContainer.classList.add = 'd-flex';

  const todoListCont = document.createElement('div');
  todoListCont.classList.add('todo-list');
  todoItemContainer.appendChild(todoListCont);

  // const selectedProject = projectList.find(project => project.id === activeProject.id);
  // console.log(activeProject);
  // console.log(selectedProject);
  // console.log(selectedProject.todoList);
  selectedProject.todoList.forEach((todo) => {
    const todoItem = document.createElement('div');
    todoItem.classList.add('todo-item');
    todoListCont.appendChild(todoItem);

    const todoTitle = document.createElement('div');
    todoTitle.classList.add('todo-item-title');
    todoTitle.textContent = todo.title;
    todoItem.appendChild(todoTitle);

    const todoDesc = document.createElement('div');
    todoDesc.classList.add('todo-item-descrip');
    todoDesc.textContent = todo.description;
    todoItem.appendChild(todoDesc);

    const todoDueDate = document.createElement('div');
    todoDueDate.classList.add('todo-item-date');
    todoDueDate.textContent = todo.dueDate;
    todoItem.appendChild(todoDueDate);

    const todoPrior = document.createElement('div');
    todoPrior.classList.add('todo-item-priority');
    todoPrior.textContent = todo.priority;
    todoItem.appendChild(todoPrior);
  });
};

export { renderProjects, renderTodos, clearElement };