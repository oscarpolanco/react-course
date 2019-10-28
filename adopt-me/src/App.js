import React, { useState } from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import SearchParams from "./SearchParams";
import "regenerator-runtime/runtime";
import Details from "./Details";
import ThemeContext from "./ThemeContext";

// your code is going to be here
const App = () => {
  const themeKook = useState("darkblue");
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeKook}>
        <div>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
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
