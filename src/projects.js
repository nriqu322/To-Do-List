const project = (title) => {
  const getTitle = () => title;

  const addTodo = (todo) => {
    project.push(todo);
  };

  const removeTodo = (index) => {
    project.splice(index, 1);
  };
}