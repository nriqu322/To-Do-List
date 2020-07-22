import Project from './projects';
import Todo from './todo';

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

const createTodo = (title, description, dueDate, priority, project) => {
  const newTodo = Todo(title, description, dueDate, priority);
  project.todoList.push(newTodo);
  save();
};

export {
  createTodo, createProject, projectList, save,
};