import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1 id="somthing-important">Search for something</h1>
      <SearchParams />
    </div>
  );
};

render(<App />, document.getElementById("root"));
