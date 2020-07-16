import { createProject } from './logic';
import { renderProjects, renderTodos } from './display';

// const STORAGE_SELECT_KEY = 'project.listSelected';
// let projectIdSelected = JSON.parse(localStorage.getItem(STORAGE_SELECT_KEY));
let projectIdSelected;

const selectProject = () => {
  const projectListCont = document.querySelector('.project-list');
  projectListCont.addEventListener('click', (e) => {
    const getProject = document.querySelectorAll('.project');
    getProject.forEach((item) => {
      item.classList.remove('active-project');
    });
    if (e.target.tagName.toLowerCase() === 'li') {
      const { id } = e.target;
      projectIdSelected = e.target.id;
      console.log(projectIdSelected);
      const addClass = document.getElementById(id);
      addClass.classList.add('active-project');
      renderTodos();
    }
    // localStorage.setItem(STORAGE_SELECT_KEY, JSON.stringify(projectIdSelected));
  });
};

const addProject = () => {
  const inputProject = document.getElementById('new-project');
  inputProject.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
      if (inputProject.value !== '') {
        document.querySelector('.project-list').remove();
        createProject(inputProject.value);
        inputProject.value = '';
        renderProjects();
        selectProject();
      }
    }
  });

  const addBtnProject = document.getElementById('add-project-btn');
  addBtnProject.addEventListener('click', () => {
    if (inputProject.value !== '') {
      document.querySelector('.project-list').remove();
      createProject(inputProject.value);
      inputProject.value = '';
      renderProjects();
      selectProject();
    }
  });
};

export { addProject, selectProject };