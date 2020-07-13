import projectList from './projects';
// import createProject from './logic';

const renderProjects = () => {
  const leftMenu = document.querySelector('.left-menu');
  const projectListCont = document.createElement('div');
  projectListCont.classList.add('project-list');
  leftMenu.appendChild(projectListCont);

  // projectList.forEach((proj) => {
  //   proj = document.createElement('div');
  //   proj.classList.add('project');
  //   proj.textContent = proj.getTitle();
  //   projectListCont.appendChild(proj);
  // });

  for (let i; i < projectList.length; i += 1) {
    const proj = document.createElement('div');
    proj.classList.add('project');
    proj.textContent = projectList[i].title;
    projectListCont.appendChild(proj);
  }
};

export default renderProjects;