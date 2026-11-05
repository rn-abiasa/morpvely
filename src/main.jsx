import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";

import Layout from "./components/Layout";
import Cover from "./pages/cover";
import Showcase from "./pages/showcase";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Cover /> },
      { path: "/showcase", element: <Showcase /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
