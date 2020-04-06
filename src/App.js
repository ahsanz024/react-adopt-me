import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Luna" type="Dog" />
      <Pet name="Jerry" type="Cat" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
