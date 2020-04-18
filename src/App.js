import React, { useState } from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";
import { Router, Link } from "@reach/router";
import Details from "./Details";
import ThemeContext from "./ThemeContext";

const App = () => {
  // We usually call hooks as `const [color, setColor] = useState("darkblue")`
  // We're currently just grabbing the whole thing
  const themeHook = useState("darkblue");

  return (
    // With this, we can provide the `theme` context to the entire application,
    // without having to explicity pass it anywhere.
    // We have the ThemeContext.Consumer in SearchParams
    // We can anything (even an object) with multiple props to the Context
    <ThemeContext.Provider value={themeHook}>
      <div>
        <header>
          <Link to="/">Adopt Me</Link>
        </header>
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

render(<App />, document.getElementById("root"));
