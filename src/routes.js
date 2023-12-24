import Home from "./Home";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Resume from "./Resume";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/resume",
        element: <Resume />
      }
    ]
  }
]);
