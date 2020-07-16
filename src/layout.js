// import project from "./projects";
// import createProject from './logic';

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

  const todoContainer = document.createElement('div');
  todoContainer.classList.add('todo-container');
  const todoTitle = document.createElement('div');
  todoTitle.textContent = 'Select a project or create a new one';

  container.appendChild(todoContainer);
  todoContainer.appendChild(todoTitle);

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
  deleteProjectBtn.classList.add('delete-btn', 'btn', 'btn-danger');
  deleteProjectBtn.textContent = 'DELETE';
  leftMenu.appendChild(deleteProjectBtn);
};

export default renderLayout;