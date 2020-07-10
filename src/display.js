import project from './projects';

const renderProjects = () => {
  const leftMenu = document.querySelector('.left-menu');
  const projectList = document.createElement('div');
  projectList.classList.add('project-list');
  leftMenu.appendChild(projectList);

  projectList.forEach((proj) => {
    proj = document.createElement('div');
    proj.classList.add('project');
    proj.textContent = project.getTitle;
    projectList.appendChild(proj);
  });
};

export default renderProjects;