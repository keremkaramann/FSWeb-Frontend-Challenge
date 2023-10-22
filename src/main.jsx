import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { DarkProvider } from "./context/myContext";
import "./index.css";
import "./i18n";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DarkProvider>
      <App />
    </DarkProvider>
  </React.StrictMode>
);
