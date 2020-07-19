import Project from './projects';
import Todo from './todo';

const STORAGE_KEY = 'project.list';
const projectList = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(projectList));
}

const createProject = (title) => {
  const newProject = Project(title);
  projectList.push(newProject);
  // if (projectList.length > 1) {
  //   document.getElementsByClassName('project').lasChild.classList = 'active-project';
  // }
  save();
};

const removeProject = () => {
  const getDeleteBtn = document.querySelector('.delete-btn');
  getDeleteBtn.addEventListener('click', () => {
    const deleteProject = document.querySelector('.active-project');
    deleteProject.remove();
    for (let i = 0; i < projectList.length; i += 1) {
      if (projectList[i].title === deleteProject.textContent) {
        projectList.splice(i, 1);
        const todoItemContainer = document.querySelector('.todo-item-container');
        while (todoItemContainer.firstChild) {
          todoItemContainer.removeChild(todoItemContainer.firstChild);
        }
        const newTodoContainer = document.querySelector('.new-todo-container');
        newTodoContainer.style.display = 'none';
        save();
      }
    }
  });
};

const createTodo = (title, description, dueDate, priority, project) => {
  const newTodo = Todo(title, description, dueDate, priority);
  project.addTodo(newTodo);
  save();
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
  createTodo, createProject, projectList, removeProject, editTodo,
};