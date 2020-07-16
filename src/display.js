import { projectList } from './logic';
import Project from './projects';

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
  const todoContainer = document.querySelector('.todo-container');
  clearElement(todoContainer);
  const activeProject = document.querySelector('.active-project');
  // console.log(activeProject.id);
  // console.log(activeProject.textContent);
  const titleProject = document.createElement('h2');
  titleProject.classList.add('title-project');
  titleProject.textContent = activeProject.textContent;
  todoContainer.appendChild(titleProject);

  const todoListCont = document.createElement('div');
  todoListCont.classList.add('todo-list');
  todoContainer.appendChild(todoListCont);

  const selectedProject = projectList.find(project => project.id === activeProject.id);
  console.log(selectedProject);

  selectedProject.todoList.forEach((todo) => {
    const [todoTitl, todoDescrip, todoDate, todoPriority] = todo;

    const todoTitle = document.createElement('div');
    todoTitle.classList.add('todo-item-title');
    todoTitle.textContent = todoTitl;
    todoListCont.appendChild(todoTitle);

    const todoDesc = document.createElement('div');
    todoDesc.classList.add('todo-item-descrip');
    todoDesc.textContent = todoDescrip;
    todoListCont.appendChild(todoDescrip);

    const todoDueDate = document.createElement('div');
    todoDueDate.classList.add('todo-item-date');
    todoDueDate.textContent = todoDate;
    todoListCont.appendChild(todoDate);

    const todoPrior = document.createElement('div');
    todoPrior.classList.add('todo-item-priority');
    todoPrior.textContent = todoPriority;
    todoListCont.appendChild(todoPriority);
  });
};

export { renderProjects, renderTodos, clearElement };