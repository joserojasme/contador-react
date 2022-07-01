import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Contador from "./pages/contador";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Contador />
  </React.StrictMode>
);
