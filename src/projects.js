const project = (title) => {
  const getTitle = () => title;
  const projectList = [];

  const addTodo = (todo) => {
    projectList.push(todo);
  };

  const removeTodo = (index) => {
    projectList.splice(index, 1);
  };

  return {
    getTitle, addTodo, removeTodo,
  };
};

export default project;