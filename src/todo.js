const Todo = (title, description, dueDate, priority) => {
  // const getTitle = () => title;
  // const getDescription = () => description;
  // const getDueDate = () => dueDate;
  // const getPriority = () => priority;
  const isCheked = false;

  return {
    title, description, dueDate, priority, isCheked,
  };
};

export default Todo;