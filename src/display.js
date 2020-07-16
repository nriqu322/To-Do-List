import { projectList } from './logic';
// import project from './projects';

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
  console.log(activeProject.innerHTML);
  const titleProject = document.createElement('h2');
  titleProject.classList.add('title-project');
  titleProject.textContent = activeProject.textContent;
  todoContainer.appendChild(titleProject);

  // const todoListCont = document.createElement('div');
  // todoListCont.classList.add('todo-list');
  // todoContainer.appendChild(todoListCont);

  // const todoList = project.getTodoList();

  // todoList.forEach((todo) => {
  //   const [todoTitl, todoDesc, todoDate, todoPriority] = todo;
  //   const todoTitle = document.createElement('div');
  //   todoTitle.classList.add('todo-item');
  //   todoTitle.textContent = todoTitl;
  //   todoListCont.appendChild(todoTitle);
  // });
};

export { renderProjects, renderTodos };