import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Page404 from "./page/Page404";
import Login from "./page/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "*",
    element: <Page404 />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
