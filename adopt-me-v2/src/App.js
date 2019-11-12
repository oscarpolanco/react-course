import React, { useState } from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import SearchParams from "./SearchParams";
import Details from "./Details";
import ThemeContext from "./ThemeContext";
import NavBar from "./NavBar";
import "regenerator-runtime/runtime";

// your code is going to be here
const App = () => {
  const themeKook = useState("peru");
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeKook}>
        <div>
          <NavBar />
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
