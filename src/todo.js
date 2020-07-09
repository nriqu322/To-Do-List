const todo = (title, description, dueDate, priority) => {
  const getTitle = () => title;
  const getDescription = () => description;
  const getDueDate = () => dueDate;
  const getPriority = () => priority;
  let isCheked = false;

  return {
    getTitle, getDescription, getDueDate, getPriority, isCheked,
  };
};

export default todo;