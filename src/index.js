import './style.css';
import renderLayout from './layout';
import { renderProjects, renderTodos } from './display';
import {
  createProject, removeProject, createTodo, projectList,
} from './logic';
import { addProject, selectProject, addTodos } from './ui';

renderLayout();

if (projectList.length === 0) {
  createProject('My First Project');
}

renderProjects();
selectProject();
addProject();

removeProject();

createTodo('Create a Project', 'Type the name of the new project on the left pane', new Date().toISOString().split('T')[0], 'high', projectList[0]);
createTodo('Create a new Task', 'Click on the add button and fill the form', new Date().toISOString().split('T')[0], 'high', projectList[0]);
createTodo('Mark todo as done', 'Click on the check box', new Date().toISOString().split('T')[0], 'high', projectList[0]);
createTodo('Delete todo', 'Click on the trask icon to delete', new Date().toISOString().split('T')[0], 'medium', projectList[0]);


renderTodos();
addTodos();