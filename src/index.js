import './style.css';
import renderLayout from './layout';
import { renderProjects, renderTodos } from './display';
import {
  createProject, removeProject, createTodo, projectList,
} from './logic';
import { addProject, selectProject } from './ui';

renderLayout();

if (projectList.length === 0) {
  createProject('My First Project');
  // createProject('Groceries');
  // createProject('School');
}

renderProjects();
selectProject();
addProject();

removeProject();

createTodo('Create a Project', 'Type the name of the new project on the left pane and press enter or button', new Date(), 'high', 'My First Project');
createTodo('Create a new Task', 'Click on the add button and fill the form', new Date(), 'high', 'My First Project');
createTodo('Mark todo as done', 'Click on the check box', new Date(), 'high', 'My First Project');
createTodo('Delete todo', 'Click on the trask icon to delete', new Date(), 'medium', 'My First Project');

renderTodos();