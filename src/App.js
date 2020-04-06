const Pet = ({ name, type }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, type),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, { name: "Fluffy", type: "Dog" }),
    React.createElement(Pet, { name: "Tommy", type: "Dog" }),
    React.createElement(Pet, { name: "Tim", type: "Cat" }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
