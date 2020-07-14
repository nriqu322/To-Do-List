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

  // const projectList = document.createElement('div');
  // projectList.classList.add('project-list');
  // const newProject = project('project1');
  // const newProject2 = project('project2');
  // projectList.textContent = project.projectList;

  const todoContent = document.createElement('div');
  todoContent.classList.add('todo-content');
  const todoTitle = document.createElement('h2');
  todoTitle.textContent = 'Project Selected';

  container.appendChild(todoContent);
  todoContent.appendChild(todoTitle);

  const newProjectCont = document.createElement('div');
  newProjectCont.classList.add('new-project-container');
  leftMenu.appendChild(newProjectCont);

  const newProject = document.createElement('input');
  newProject.classList.add('new-project', 'form-control');
  newProject.id = 'new-project';
  newProject.setAttribute('type', 'text');
  newProject.placeholder = 'Add New Project';
  newProjectCont.appendChild(newProject);
};

export default renderLayout;