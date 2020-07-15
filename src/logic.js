import project from './projects';
import todo from './todo';

const STORAGE_KEY = 'todo-list';
const projectList = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

const createProject = (title) => {
  const newProject = project(title);
  projectList.push(newProject);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(projectList));
};

const createTodo = (title, description, dueDate, priority, project) => {
  const newTodo = todo(title, description, dueDate, priority);
  project.addTodo(newTodo);
};

export { createTodo, createProject, projectList };