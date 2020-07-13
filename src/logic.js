import { project, projectList } from './projects';

// const createTodo = (project) => {

// };

const createProject = (title) => {
  const newProject = project(title);
  projectList.push(newProject);
};

export default createProject;