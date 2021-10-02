import NaviBar from "./NaviBar";
import TodoList from "./TodoList";

const Main = () => {
  const main = document.createElement("main");

  main.appendChild(NaviBar());
  main.appendChild(TodoList());

  return main;
};

export default Main;
