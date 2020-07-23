const Todo = (title, description, dueDate, priority) => {
  const id = Date.now().toString();
  const isCheked = false;

  return {
    title, description, dueDate, priority, id, isCheked,
  };
};

export default Todo;