import './style.css';
import renderLayout from './domManipulation/layout';
import { renderProjects, renderTodos } from './domManipulation/display';
import { createProject, createTodo, projectList } from './logic';
import { addProject, removeProject } from './ui/ui-projects';
import { addTodos, selectProject } from './ui/ui-todos';

renderLayout();

if (projectList.length === 0) {
  createProject('My First Project');
  if (projectList[0].todoList.length === 0) {
    createTodo('Create a Project', 'Type the name of the new project on the left pane', new Date().toISOString().split('T')[0], 'high', projectList[0]);
    createTodo('Create a new Task', 'Click on the add button and fill the form', new Date().toISOString().split('T')[0], 'high', projectList[0]);
    createTodo('Mark todo as done', 'Click on the check box', new Date().toISOString().split('T')[0], 'high', projectList[0]);
    createTodo('Delete todo', 'Click on the red x icon to delete', new Date().toISOString().split('T')[0], 'medium', projectList[0]);
    createTodo('Edit Todo', 'Click on the element you want to edit and press enter after edit it', new Date().toISOString().split('T')[0], 'low', projectList[0]);
  }
}

renderProjects();
selectProject();
addProject();
renderTodos(projectList[0]);
removeProject();
addTodos();