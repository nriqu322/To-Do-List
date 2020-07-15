import { projectList } from './logic';
import project from './projects';

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

const renderTodos = () => {
  const todoContainer = document.querySelector('.todo-container');
  const todoListCont = document.createElement('div');
  todoListCont.classList.add('todo-list');
  todoContainer.appendChild(todoListCont);

  const todoList = project.getTodoList();

  todoList.forEach((todo) => {
    const [todoTitl, todoDesc, todoDate, todoPriority] = todo;
    const todoTitle = document.createElement('div');
    todoTitle.classList.add('todo-item');
    todoTitle.textContent = todoTitl;
    todoListCont.appendChild(todoTitle);
  });
};

export { renderProjects, renderTodos };