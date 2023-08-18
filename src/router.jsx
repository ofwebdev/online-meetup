import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Page404 from "./page/Page404";
import Room from "./page/Room";

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
    path: "/room/:roomID",
    element: <Room />,
  },
]);
