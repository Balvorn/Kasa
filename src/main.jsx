import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import About from "./routes/about";
import Annonce from "./routes/annonce";
import Index from "./routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement :<ErrorPage/>,
    children: [
      { 
        index: true,
        element: <Index />,
      },
      
      {
        path: "about",
        element: <About />,
      },
      {
        path: "annonce/:annonceId",
        element: <Annonce />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);