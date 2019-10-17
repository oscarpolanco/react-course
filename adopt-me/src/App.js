import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

// your code is going to be here
const App = () => {
  return React.createElement("div", { id: "test" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese"
    }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "Bird",
      breed: "Cocktiel"
    }),
    React.createElement(Pet, {
      name: "Doink",
      animal: "Cat",
      breed: "Mixed"
    })
  ]);
};

render(React.createElement(App), document.getElementById("root"));
