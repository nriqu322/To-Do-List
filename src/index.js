import './style.css';
import renderLayout from './layout';
import renderProjects from './display';
import { createProject } from './logic';
import addProject from './ui';

renderLayout();

createProject('Home');
createProject('Groceries');
createProject('School');

addProject();
renderProjects();

// const addProject = () => {
//   const addBtnProject = document.getElementById('add-project-btn');
//   const inputProject = document.getElementById('new-project');
//   addBtnProject.addEventListener('click', () => {
//     if (inputProject.value !== '') {
//       document.querySelector('.project-list').remove();
//       createProject(inputProject.value);
//       inputProject.value = '';
//       renderProjects();
//     }
//   });
// };

