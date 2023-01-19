import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
// const name = "saifee";

// // when we need to pass expresion into the jsx syntan then forst  like above name and put it inside curly braces {} then pass it into the jsx element
// const myVar = (
//   <>
//     <h1>Hellow this is in JSX {name}</h1>
//     <h1>Hellow this is in JSX {name}</h1>
//   </>
// );

// const name = "raju";
// const sayHi = true;
// const mySc = (
//   <>
//     <h1>Hellow this is in JSX {name}</h1>
//     <h1>{{ sayHi } ? "Hi" : "Bye"}</h1>
//   </>
// );
// const name = "raju";
// const sayHi = false;
// let subheading = "";
// if (sayHi) {
//   subheading = "Hi";
// } else {
//   subheading = "Bye";
// }

// const mySc = (
//   <>
//     <h1>Hellow this is in JSX {name}</h1>
//     <h1>{subheading}</h1>
//   </>
// );

// root.render(mySc);

// function myClock() {
//   root.render(
//     <div>
//       <p style={{ fontSize: "2rem" }}>{new Date().toLocaleTimeString()}</p>
//       <h1>My Store</h1>
//     </div>
//   );
//   setTimeout(myClock, 1000);
// }

// myClock();

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// <React.StrictMode>
//   <App />;
// </React.StrictMode>;

// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
