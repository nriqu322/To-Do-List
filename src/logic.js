import project from './projects';
import todo from './todo';

const projectList = [];

const createProject = (title) => {
  const newProject = project(title);
  projectList.push(newProject);
};

const createTodo = (title, description, dueDate, priority, project) => {
  const newTodo = todo(title, description, dueDate, priority);
  project.addTodo(newTodo);
};

export { createTodo, createProject, projectList };