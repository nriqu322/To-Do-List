const project = (title) => {
  // const getTitle = () => title;
  const todoList = [];

  const id = () => Date.now().toString();

  const addTodo = (todo) => {
    todoList.push(todo);
  };

  const removeTodo = (index) => {
    todoList.splice(index, 1);
  };

  const getTodoList = () => todoList;

  return {
    title, id, addTodo, removeTodo, getTodoList,
  };
};

export default project;