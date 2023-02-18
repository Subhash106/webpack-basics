import _ from "lodash";
import "./css/style.css";
import logo from "./images/instagram_logo_2000.png";
import printMe from "./print";

function component() {
  const button = document.createElement("button");
  const element = document.createElement("div");

  element.innerHTML = _.join(["Hello", "Webpack", ""]);
  element.classList.add("hello");

  // create image element
  const image = new Image();
  image.src = logo;
  image.classList.add("logo");
  element.appendChild(image);

  button.innerHTML = "Click me and check the console";
  button.onclick = printMe;
  element.appendChild(button);

  return element;
}

document.body.appendChild(component());
