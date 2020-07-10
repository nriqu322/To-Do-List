const project = (title) => {
  const getTitle = () => title;
  const todoList = [];

  const addTodo = (todo) => {
    todoList.push(todo);
  };

  const removeTodo = (index) => {
    todoList.splice(index, 1);
  };

  const getTodoList = () => todoList;

  return {
    getTitle, addTodo, removeTodo, getTodoList,
  };
};

export default project;