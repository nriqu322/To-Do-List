const Project = (title) => {
  // const getTitle = () => title;
  const todoList = [];

  const id = Date.now().toString();

  const addTodo = (todo) => {
    todoList.push(todo);
  };

  const removeTodo = (index) => {
    todoList.splice(index, 1);
  };

  const getTodoList = () => todoList;

  // const store = () => {
  //   const storageArray = [];
  //   for (let i = 0; i < todoList.length; i += 1) {
  //     storageArray.push([i.title, i.description, i.dueDate, i.priority, i.getDone()])
  //   }
  //   localStorage.setItem(title, JSON.stringify(storageArray));
  // };

  return {
    title, id, addTodo, removeTodo, getTodoList, todoList,
  };
};

export default Project;