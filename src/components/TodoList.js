const TodoList = () => {
  // create the container for the todo list
  const todoContainer = document.createElement("div");
  todoContainer.id = "todoContainer";

  const todoTitle = document.createElement("h2");
  todoTitle.id = "todoTitle";
  todoTitle.innerText = "List";

  todoContainer.appendChild(todoTitle);

  return todoContainer;
};

export default TodoList;
