import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import "react-app-polyfill/ie9";
import "react-app-polyfill/stable";

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
