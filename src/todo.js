const Todo = (title, description, dueDate, priority) => {
  // const getTitle = () => title;
  // const getDescription = () => description;
  // const getDueDate = () => dueDate;
  // const getPriority = () => priority;
  const id = Date.now().toString();
  const isCheked = false;

  return {
    title, description, dueDate, priority, id, isCheked,
  };
};

export default Todo;