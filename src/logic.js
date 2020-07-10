const { default: project } = require("./projects");

const createTodo = (project) => {

};

const projectList = [];

const createProject = (title) => {
  const project = project(title);
  projectList.push(project);
};
