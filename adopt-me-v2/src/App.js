import React, { useState, lazy, Suspense } from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import ThemeContext from "./ThemeContext";
import "regenerator-runtime/runtime";

const Details = lazy(() => import("./Details"));
const SearchParams = lazy(() => import("./SearchParams"));

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
          <Suspense fallback={<h1>loading route...</h1>}>
            <Router>
              <SearchParams path="/" />
              <Details path="/details/:id" />
            </Router>
          </Suspense>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

export default App;
