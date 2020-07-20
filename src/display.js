import { projectList, editTodo, deleteTodo } from './logic';

const renderProjects = () => {
  const leftMenu = document.querySelector('.left-menu');
  const projectListCont = document.createElement('div');
  projectListCont.classList.add('project-list');
  leftMenu.appendChild(projectListCont);

  projectList.forEach((proj) => {
    const projct = document.createElement('li');
    projct.classList.add('project');
    projct.id = proj.id;
    projct.textContent = proj.title;
    projectListCont.appendChild(projct);
  });
};

const clearElement = (element) => {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
};

const renderTodos = (targetedProject) => {
  const todoItemContainer = document.querySelector('.todo-item-container');
  const newTodoContainer = document.querySelector('.new-todo-container');
  clearElement(todoItemContainer);

  const titleProject = document.createElement('h2');
  titleProject.classList.add('title-project');
  titleProject.textContent = targetedProject.title;
  todoItemContainer.appendChild(titleProject);
  newTodoContainer.style.display = '';
  newTodoContainer.classList.add = 'd-flex';

  const todoListCont = document.createElement('div');
  todoListCont.classList.add('todo-list', 'd-flex', 'flex-column');
  todoItemContainer.appendChild(todoListCont);

  let cnt = 0;
  targetedProject.todoList.forEach((todo) => {
    const todoItem = document.createElement('div');
    const todoItemLine = document.createElement('div');
    const todoItemLeft = document.createElement('div');
    const todoItemRight = document.createElement('div');

    todoItem.id = `todo-item-${cnt}`;
    todoItem.classList.add('todo-item', 'd-flex', 'flex-column', 'px-2', 'py-3');
    todoItemLine.classList.add('d-flex', 'justify-content-between', 'align-items-center');
    todoItemLeft.classList.add('todo-item-left', 'd-flex', 'align-items-center');
    todoItemLeft.id = `todo-item-left-${cnt}`;
    todoItemRight.classList.add('todo-item-right', 'd-flex', 'align-items-center');
    todoItemRight.id = `todo-item-right-${cnt}`;
    todoListCont.appendChild(todoItem);
    todoItem.appendChild(todoItemLine);
    todoItemLine.appendChild(todoItemLeft);
    todoItemLine.appendChild(todoItemRight);

    const inputCheck = document.createElement('input');
    inputCheck.setAttribute('type', 'checkbox');
    todoItemLeft.appendChild(inputCheck);

    const todoTitle = document.createElement('div');
    todoTitle.classList.add('todo-item-title', 'font-weight-bold', 'ml-2');
    todoTitle.id = `todo-item-title-${cnt}`;
    todoTitle.textContent = todo.title;
    todoItemLeft.appendChild(todoTitle);

    const todoDesc = document.createElement('div');
    todoDesc.classList.add('todo-item-descrip', 'font-italic', 'col-12', 'ml-1');
    todoDesc.id = `todo-item-descrip-${cnt}`;
    todoDesc.textContent = todo.description;
    todoItem.appendChild(todoDesc);

    const todoPrior = document.createElement('div');
    todoPrior.classList.add('todo-item-priority', 'px-2', 'mx-2');
    todoPrior.id = `todo-item-priority-${cnt}`;
    todoPrior.textContent = todo.priority;
    todoPrior.classList.remove('high', 'medium', 'low');
    if (todoPrior.textContent.toLowerCase() === 'high') {
      todoPrior.classList.add('high');
    } else if (todoPrior.textContent.toLowerCase() === 'medium') {
      todoPrior.classList.add('medium');
    } else {
      todoPrior.classList.add('low');
    }
    todoItemRight.appendChild(todoPrior);

    inputCheck.addEventListener('click', () => {
      if (inputCheck.checked) {
        todoTitle.style.textDecoration = 'line-through';
        todoItem.style.backgroundColor = 'rgb(233, 233, 233)';
        todoItem.style.color = 'gray';
        todoPrior.classList.add('bg-secondary');
      } else {
        todoTitle.style.textDecoration = 'none';
        todoItem.style.backgroundColor = '#fff';
        todoItem.style.color = 'black';
        todoPrior.classList.remove('bg-secondary');
      }
    });

    const todoDueDate = document.createElement('div');
    todoDueDate.classList.add('todo-item-date');
    todoDueDate.id = `todo-item-date-${cnt}`;
    todoDueDate.textContent = todo.dueDate;
    todoItemRight.appendChild(todoDueDate);

    editTodo(targetedProject, cnt);

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('btn', 'btn-danger', 'py-0', 'mx-2');
    deleteBtn.id = `delete-btn-${cnt}`;
    deleteBtn.textContent = 'x';
    todoItemRight.appendChild(deleteBtn);

    deleteTodo(targetedProject, cnt);

    cnt += 1;
  });
};

export { renderProjects, renderTodos, clearElement };