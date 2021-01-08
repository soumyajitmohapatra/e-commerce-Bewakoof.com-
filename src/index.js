import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import reducer, { initialState } from "./context/Reducer";
import { State } from "./context/State";

ReactDOM.render(
  <React.StrictMode>
    <State initialState={initialState} reducer={reducer}>
      <App />
    </State>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
