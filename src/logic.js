import Project from './projects';
import Todo from './todo';
import { renderTodos } from './display';

const STORAGE_KEY = 'project.list';
const projectList = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(projectList));
}

const createProject = (title) => {
  const newProject = Project(title);
  projectList.push(newProject);
  save();
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

const createTodo = (title, description, dueDate, priority, project) => {
  const newTodo = Todo(title, description, dueDate, priority);
  project.addTodo(newTodo);
};

export {
  createTodo, createProject, projectList, removeProject,
};