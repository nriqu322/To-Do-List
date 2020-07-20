const Todo = (title, description, dueDate, priority) => {
  // const getTitle = () => title;
  // const getDescription = () => description;
  // const getDueDate = () => dueDate;
  // const getPriority = () => priority;
  const id = Date.now().toString();
  let isCheked = false;
  const changeCheked = () => {
    isCheked = !isCheked;
  };

  return {
    title, description, dueDate, priority, id, isCheked, changeCheked,
  };
};

export default Todo;