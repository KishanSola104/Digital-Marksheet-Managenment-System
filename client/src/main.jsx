import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import AuthProvider from "./context/AuthContext";

import { SchoolProvider } from "./context/SchoolContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <SchoolProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </SchoolProvider>
    </BrowserRouter>
  </React.StrictMode>
);