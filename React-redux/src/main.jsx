import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react";
import store from "./app/store.js";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode store={store}>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
);
