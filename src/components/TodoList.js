import TodoForm from "./TodoForm";

const TodoList = () => {
  // create the container for the todo list
  const todoContainer = document.createElement("div");
  todoContainer.id = "todoContainer";

  //todo title
  const todoTitle = document.createElement("h2");
  todoTitle.id = "todoTitle";
  todoTitle.innerText = "List";

  //add todo button
  const addTodoButton = document.createElement("button");
  addTodoButton.id = "addTodoButton";
  addTodoButton.innerText = " + Add";

  addTodoButton.addEventListener("click", openInputForm);

  // create todo list
  const todoListArr = [];

  todoContainer.appendChild(todoTitle);
  todoTitle.appendChild(TodoForm());
  todoContainer.appendChild(addTodoButton);

  return todoContainer;
};

// function to open the input form
const openInputForm = () => {
  const todoForm = document.getElementById("todoForm");

  if (todoForm.style.display === "none") {
    todoForm.style.display = "block";
  } else {
    todoForm.style.display = "none";
  }
};

export default TodoList;
