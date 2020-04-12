import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// import "./components/assets/bootstrap/css/bootstrap.min.css";

ReactDOM.render( <
  React.StrictMode >
  <
  App / >
  <
  /React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.register();