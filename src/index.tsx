import React from "react";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { setupStore } from "./store/store";
import { BrowserRouter } from "react-router-dom";

import ReactDOM from "react-dom/client";

// import { store } from "./store/rootReducer";

const store = setupStore();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
