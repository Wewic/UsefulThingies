import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ChooseFood from './ChooseFood';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "choosefood",
    element: <ChooseFood />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);