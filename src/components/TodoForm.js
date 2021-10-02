const TodoForm = () => {
  // create the form for the todos
  const todoForm = document.createElement("form");
  body.appendChild(todoForm);

  // create a container for the inputs
  const todoInputContainer = document.createElement("div");
  todoInputContainer.id = "todoInputContainer";

  // create the inputs
  const todoInputArr = [
    ["todo", "text"],
    ["description", "text"],
    ["date", "date"],
  ];

  todoInputArr.forEach((input) => {
    const todoInput = document.createElement("input");
    todoInput.id = input[0];
    todoInput.type = input[1];
    todoInputContainer.appendChild(todoInput);
  });

  // create the priority
  const priorityArr = ["--Please choose an option--", "low", "medium", "high"];
  const priority = document.createElement("select");

  priorityArr.forEach((level) => {
    const option = document.createElement("option");
    option.value = level;
    option.innerText = level;
    priority.appendChild(option);
  });

  // create the submit button
  const submitButton = document.createElement("button");
  submitButton.innerText = "Submit";

  todoInputContainer.appendChild(priority);
  todoInputContainer.appendChild(submitButton);
  todoForm.appendChild(todoInputContainer);

  return todoForm;
};

export default TodoForm;
