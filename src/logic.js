import Project from './projects';
// import todo from './todo';

const STORAGE_KEY = 'project.list';
const projectList = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(projectList));
}

const createProject = (title) => {
  const newProject = Project(title);
  projectList.push(newProject);
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
        save();
      }
    }
  });
};

// const createTodo = (title, description, dueDate, priority, project) => {
//   const newTodo = todo(title, description, dueDate, priority);
//   project.addTodo(newTodo);
// };

export {
  /* createTodo, */ createProject, projectList, removeProject,
};