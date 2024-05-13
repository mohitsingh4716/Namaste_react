const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello Wolrd! from REact"
);
console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

/*
<div id="parent">
    <div> id="child"
        <h1> i'm h1 tag</h1>
        <h2> i'm h2 tag</h2>
    </div>
</div>    
    

*/

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    [React.createElement("h1", {}, "I'm H1 tag"), React.createElement("h2", {}, "I'm H2 tag")]
  )
);

console.log(parent);

const container= ReactDOM.createRoot(document.getElementById("container"));

container.render(parent);


