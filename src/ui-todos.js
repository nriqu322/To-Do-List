import { createTodo, projectList, save } from './logic';
// eslint-disable-next-line import/no-cycle
import { renderTodos } from './display';

let targetedProject;

const selectProject = () => {
  const projectListCont = document.querySelector('.project-list');

  projectListCont.addEventListener('click', (e) => {
    const getProject = document.querySelectorAll('.project');
    getProject.forEach((item) => {
      item.classList.remove('active-project');
    });
    if (e.target.tagName.toLowerCase() === 'li') {
      const projectId = e.target.id;
      const addClass = document.getElementById(projectId);
      addClass.classList.add('active-project');
      targetedProject = projectList.find(project => project.id === projectId);
      renderTodos(targetedProject);
    }
  });
};

const addTodos = () => {
  const inputTodoTitle = document.querySelector('.todo-input-title');
  const inputTodoDesc = document.querySelector('.todo-input-descrip');
  const inputTodoDueDate = document.querySelector('.todo-input-date');
  const inputTodoPriority = document.querySelector('.todo-input-priority');

  document.addEventListener('click', (e) => {
    if (e.target && e.target.id === 'add-todo-btn') {
      if (inputTodoTitle.value !== '' && inputTodoDesc.value !== '' && inputTodoDueDate.value !== '') {
        createTodo(
          inputTodoTitle.value,
          inputTodoDesc.value,
          inputTodoDueDate.value,
          inputTodoPriority.value,
          targetedProject,
        );
        inputTodoTitle.value = '';
        inputTodoDesc.value = '';
        inputTodoDueDate.value = '';
        inputTodoPriority.value = 'Low';
        renderTodos(targetedProject);
      }
    }
  });
};

const deleteTodo = (id) => {
  const deleteBtn = document.getElementById(`delete-btn-${id}`);
  const todoItem = document.getElementById(`todo-item-${id}`);
  deleteBtn.addEventListener('click', () => {
    todoItem.remove();
    targetedProject.todoList.splice(id, 1);
    save();
  });
};

const editTodo = (id) => {
  const todoTitle = document.getElementById(`todo-item-title-${id}`);
  todoTitle.addEventListener('click', () => {
    const todoItemLeft = document.getElementById(`todo-item-left-${id}`);
    const todoEditTitle = document.createElement('input');
    todoEditTitle.classList.add('edit-todo-title');
    todoEditTitle.value = todoTitle.textContent;
    todoTitle.textContent = '';
    todoItemLeft.appendChild(todoEditTitle);
    todoEditTitle.addEventListener('keydown', (e) => {
      if (e.keyCode === 13) {
        if (todoEditTitle.value !== '') {
          todoTitle.textContent = todoEditTitle.value;
          todoEditTitle.remove();
          save();
        }
      }
    });
  });

  const todoDesc = document.getElementById(`todo-item-descrip-${id}`);
  todoDesc.addEventListener('click', () => {
    const todoItem = document.getElementById(`todo-item-${id}`);
    const todoEditDesc = document.createElement('input');
    todoEditDesc.classList.add('edit-todo-title');
    todoEditDesc.value = todoDesc.textContent;
    todoDesc.textContent = '';
    todoItem.appendChild(todoEditDesc);
    todoEditDesc.addEventListener('keydown', (e) => {
      if (e.keyCode === 13) {
        if (todoEditDesc.value !== '') {
          todoDesc.textContent = todoEditDesc.value;
          todoEditDesc.remove();
          save();
        }
      }
    });
  });

  const todoPrior = document.getElementById(`todo-item-priority-${id}`);
  todoPrior.addEventListener('click', () => {
    const todoEditPrior = document.createElement('select');
    const optionOne = document.createElement('option');
    optionOne.textContent = 'Low';
    todoEditPrior.appendChild(optionOne);
    const optionTwo = document.createElement('option');
    optionTwo.textContent = 'Medium';
    todoEditPrior.appendChild(optionTwo);
    const optionThree = document.createElement('option');
    optionThree.textContent = 'High';
    todoEditPrior.appendChild(optionThree);
    todoEditPrior.classList.add('edit-todo-priority');
    todoEditPrior.value = todoPrior.textContent;
    todoPrior.textContent = '';
    todoPrior.after(todoEditPrior);
    todoEditPrior.addEventListener('keydown', (e) => {
      if (e.keyCode === 13) {
        if (todoEditPrior.value !== '') {
          todoPrior.textContent = todoEditPrior.value;
          todoPrior.classList.remove('high', 'medium', 'low');
          if (todoPrior.textContent.toLowerCase() === 'high') {
            todoPrior.classList.add('high');
          } else if (todoPrior.textContent.toLowerCase() === 'medium') {
            todoPrior.classList.add('medium');
          } else {
            todoPrior.classList.add('low');
          }
          todoEditPrior.remove();
          save();
        }
      }
    });
  });

  const todoDueDate = document.getElementById(`todo-item-date-${id}`);
  todoDueDate.addEventListener('click', () => {
    const todoEditDueDate = document.createElement('input');
    todoEditDueDate.setAttribute('type', 'date');
    todoEditDueDate.classList.add('edit-todo-date');
    todoEditDueDate.value = todoDueDate.textContent;
    todoDueDate.textContent = '';
    todoDueDate.after(todoEditDueDate);
    todoEditDueDate.addEventListener('keydown', (e) => {
      if (e.keyCode === 13) {
        if (todoEditDueDate.value !== '') {
          todoDueDate.textContent = todoEditDueDate.value;
          todoEditDueDate.remove();
          save();
        }
      }
    });
  });
};

export {
  addTodos, deleteTodo, editTodo, selectProject,
};