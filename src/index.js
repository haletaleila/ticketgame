import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppRouter from "./Router";
import { Provider } from "react-redux";
import { store } from "./contexts/store";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
