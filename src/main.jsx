import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { HospitalProvider } from "./Context/HospitalContext.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <HospitalProvider>
        <App />
      </HospitalProvider>
    </BrowserRouter>
  </React.StrictMode>
);