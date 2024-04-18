import React from "react";
import ReactDOM from "react-dom/client"

//React Element 

// const heading = React.createElement(
//     "h1",
//     {id:"heading"},
//     "Maharaj ji"
// );

// const jsxheading = <h1 id="heading"> Master's Love</h1>

const Title = () => (
    <h1 className="head" tabIndex="5">
        React JavaScript
    </h1>
);
// All title calling is same, we can use any one of them.

const HeadingComponent = () => (
    <div id="container">
        
        <Title/>
        <Title></Title>
        {Title()}
        <h1 className = "heading">React Functional Component</h1>
    </div>
);

// console.log(jsxheading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);