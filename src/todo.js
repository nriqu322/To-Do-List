const todo = (title, description, dueDate, priority) => {
  // let isCheked = false;

  const getTitle = () => title;
  const getDescription = () => description;
  const getDueDate = () => dueDate;
  const getPriority = () => priority;

  return {
    getTitle, getDescription, getDueDate, getPriority,
  };
}