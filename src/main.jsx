import React from "react";
import ReactDOM from "react-dom/client";
import { store } from "./store";
import { Provider } from "react-redux";
import "./index.css";
// import CounterApp from "./CounterApp";
import PokeApp from "./PokeApp";

// import TodoAppRTK from "./TodoAppRTK";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <CounterApp /> */}
      <PokeApp />
      {/* <TodoAppRTK /> */}
    </Provider>
  </React.StrictMode>
);
