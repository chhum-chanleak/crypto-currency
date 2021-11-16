import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import store from "./app/store";
//components
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
//styles
import "antd/dist/antd.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
