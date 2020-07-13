import './style.css';
import renderLayout from './layout';
import renderProjects from './display';
import { createProject } from './logic';

renderLayout();
createProject('Home');
createProject('Groceries');
createProject('School');
renderProjects();