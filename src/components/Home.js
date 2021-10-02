import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

const Home = () => {
  const body = document.getElementById("body");

  body.appendChild(Header());
  body.appendChild(Main());
  body.appendChild(Footer());

  return body;
};

export default Home;
