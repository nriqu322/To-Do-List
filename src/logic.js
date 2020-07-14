import project from './projects';

// const createTodo = (project) => {

// };
const projectList = [];

const createProject = (title) => {
  const newProject = project(title);
  projectList.push(newProject);
};

export { createProject, projectList };