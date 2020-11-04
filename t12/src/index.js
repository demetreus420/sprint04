import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import HelloReact from "./HelloReact";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
    <React.StrictMode>
        <HelloReact />
    </React.StrictMode>,
    document.getElementById("root")
);

reportWebVitals();
