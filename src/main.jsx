import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// React router dom
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import AuthProvider from "./provider/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
