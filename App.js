// let element = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Welcome to react!!"
// );
// root.render(element);

// console.log(element);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Welcome to react!!"),
    React.createElement("p", {}, "this is a paragraph"),
  ]),

  React.createElement(
    "div",
    { id: "secondParent" },
    React.createElement(
      "p",
      {},
      "this is parent paragraph under second parent div"
    )
  ),
]);

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
