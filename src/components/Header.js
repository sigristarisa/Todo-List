const Header = () => {
  // create the header
  const header = document.createElement("header");

  //create the title
  const headerTitle = document.createElement("h1");
  headerTitle.id = "headerTitle";
  headerTitle.innerText = "Todo List";

  header.appendChild(headerTitle);

  return header;
};

export default Header;
