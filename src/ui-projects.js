import {
  createProject, projectList, save,
} from './logic';
import { renderProjects } from './display';
import { selectProject } from './ui-todos';

const addProject = () => {
  const inputProject = document.getElementById('new-project');
  inputProject.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
      if (inputProject.value !== '') {
        document.querySelector('.project-list').remove();
        createProject(inputProject.value);
        inputProject.value = '';
        renderProjects();
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

const removeProject = () => {
  const getDeleteBtn = document.querySelector('.delete-btn');
  getDeleteBtn.addEventListener('click', () => {
    const deleteProject = document.querySelector('.active-project');
    deleteProject.remove();
    for (let i = 0; i < projectList.length; i += 1) {
      if (projectList[i].title === deleteProject.textContent) {
        projectList.splice(i, 1);
        const todoItemContainer = document.querySelector('.todo-item-container');
        while (todoItemContainer.firstChild) {
          todoItemContainer.removeChild(todoItemContainer.firstChild);
        }
        const newTodoContainer = document.querySelector('.new-todo-container');
        newTodoContainer.style.display = 'none';
        save();
      }
    }
  });
};

export { addProject, removeProject };