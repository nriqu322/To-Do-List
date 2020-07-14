// const projectList = [];

const project = (title) => {
  // const getTitle = () => title;
  const todoList = [];

  const addTodo = (todo) => {
    todoList.push(todo);
  };

  const removeTodo = (index) => {
    todoList.splice(index, 1);
  };

  const getTodoList = () => todoList;

  return {
    title, addTodo, removeTodo, getTodoList,
  };
};

export default project;

// class Project {
//   constructor(title) {
//     this.title = title;
//     this.todoList = [];
//   }

//   addTodo(todo) {
//     this.todoList.push(todo);
//   }

//   removeTodo(index) {
//     this.todoList.splice(index, 1);
//   }
// }