import project from './projects';
import todo from './todo';

const createTodo = (title, description, dueDate, priority, project) => {
  const newTodo = todo(title, description, dueDate, priority);
  project.addTodo(newTodo);
};

const projectList = [];

const createProject = (title) => {
  const newProject = project(title);
  projectList.push(newProject);
};

export { createTodo, createProject, projectList };