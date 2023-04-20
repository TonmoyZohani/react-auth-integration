import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Main from "./layout/Main";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Orders from "./components/Orders";
import Profile from "./components/Profile";
import PrivateRoute from "./routes/PrivateRoute";
import AuthProviders from "./providers/AuthProviders";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/orders",
        element: (
          <PrivateRoute>
            <Orders />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProviders>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </AuthProviders>
);
