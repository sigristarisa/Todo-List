import Header from "./Header";

const Home = () => {
  const body = document.getElementById("body");

  body.appendChild(Header());

  return body;
};

export default Home;
