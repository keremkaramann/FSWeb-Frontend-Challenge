import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { DarkProvider } from "./context/mycontext.jsx";
import "./index.css";
import "./i18n";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DarkProvider>
      <ToastContainer />
      <App />
    </DarkProvider>
  </React.StrictMode>
);
