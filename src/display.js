import { projectList } from './logic';

const renderProjects = () => {
  const leftMenu = document.querySelector('.left-menu');
  const projectListCont = document.createElement('div');
  projectListCont.classList.add('project-list');
  leftMenu.appendChild(projectListCont);

  projectList.forEach((proj) => {
    const project = document.createElement('div');
    project.classList.add('project');
    project.textContent = proj.title;
    projectListCont.appendChild(project);
  });
};

export default renderProjects;