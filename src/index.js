import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from './reportWebVitals';
import ErrorPage from "./ErrorPage";
import {createBrowserRouter,RouterProvider,} from "react-router-dom";

import Home from "./home";
import About from "./about";
import Contact from "./contact";

const router = createBrowserRouter([
  { path: "/", element: <Home />  , errorElement: <ErrorPage />},
  { path: "/about", element: <About />,  errorElement: <ErrorPage /> },
  { path: "/contact", element: <Contact />,  errorElement: <ErrorPage /> },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
