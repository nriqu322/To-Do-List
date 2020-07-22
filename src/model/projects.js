const Project = (title) => {
  const todoList = [];
  const id = Date.now().toString();

  return {
    title, id, todoList,
  };
};

export default Project;