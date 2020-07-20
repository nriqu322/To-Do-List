import { createProject, createTodo, projectList } from './logic';
import { renderProjects, renderTodos } from './display';

let targetedProject;

const selectProject = () => {
  const projectListCont = document.querySelector('.project-list');

  projectListCont.addEventListener('click', (e) => {
    const getProject = document.querySelectorAll('.project');
    getProject.forEach((item) => {
      item.classList.remove('active-project');
    });
    if (e.target.tagName.toLowerCase() === 'li') {
      const { id } = e.target;
      const addClass = document.getElementById(id);
      addClass.classList.add('active-project');
      targetedProject = projectList.find(project => project.id === id);
      renderTodos(targetedProject);
    }
  });
};

const addTodos = () => {
  const inputTodoTitle = document.querySelector('.todo-input-title');
  const inputTodoDesc = document.querySelector('.todo-input-descrip');
  const inputTodoDueDate = document.querySelector('.todo-input-date');
  const inputTodoPriority = document.querySelector('.todo-input-priority');

  document.addEventListener('click', (e) => {
    if (e.target && e.target.id === 'add-todo-btn') {
      if (inputTodoTitle.value !== '') {
        createTodo(
          inputTodoTitle.value,
          inputTodoDesc.value,
          inputTodoDueDate.value,
          inputTodoPriority.value,
          targetedProject,
        );
        inputTodoTitle.value = '';
        inputTodoDesc.value = '';
        inputTodoDueDate.value = '';
        inputTodoPriority.value = 'Low';
        renderTodos(targetedProject);
      }
    }
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

export {
  addProject, selectProject, addTodos,
};