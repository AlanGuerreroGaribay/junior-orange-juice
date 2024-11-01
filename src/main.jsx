import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/home/App";
import "./index.css";
import RouterPagesProvider from "./router/RouterPagesProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterPagesProvider />
  </React.StrictMode>
);
