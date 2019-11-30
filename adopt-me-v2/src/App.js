import React, { useState } from "react";
import { Router, Link } from "@reach/router";
import ThemeContext from "./ThemeContext";
import SearchParams from "./SearchParams";
import Details from "./Details";
import "regenerator-runtime/runtime";

// your code is going to be here
const App = () => {
  const themeKook = useState("peru");
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

export default App;
