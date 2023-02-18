import _ from "lodash";
import "./style.css";
import logo from "./images/instagram_logo_2000.png";

function component() {
  const element = document.createElement("div");

  element.innerHTML = _.join(["Hello", "Webpack", ""]);
  element.classList.add("hello");

  // create image element
  const image = new Image();
  image.src = logo;
  image.classList.add("logo");
  element.appendChild(image);

  return element;
}

document.body.appendChild(component());
