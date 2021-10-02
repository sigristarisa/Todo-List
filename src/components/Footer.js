const Footer = () => {
  // create the footer
  const footer = document.createElement("footer");

  //create the copyright
  const copyright = document.createElement("p");
  copyright.id = "copyright";
  copyright.innerText = "Copyright © 2021";

  footer.appendChild(copyright);

  return footer;
};

export default Footer;
