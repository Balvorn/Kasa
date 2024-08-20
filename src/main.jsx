import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.scss";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import About from "./routes/about";
import Annonce, { loader as housingLoader } from "./routes/annonce";
import Index, { loader as housingsLoader } from "./routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: housingsLoader,
      },

      {
        path: "about",
        element: <About />,
      },
      {
        path: "annonce/:annonceId",
        element: <Annonce />,
        loader: housingLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);