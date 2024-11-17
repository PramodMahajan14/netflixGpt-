import React from "react";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import SignIn from "./SignIn";
import Browse from "./Browse";
import ProtectedRoute from "../context/ProtectedRoute";
import SearchhMovies from "./SearchMovies";

import { AuthProvider } from "../context/AuthContext";
import PublicRoute from "../context/PublicRoute";

import Home from "./Home";
import Tvshow from "./TvShow/Tvshow";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <PublicRoute />,
    children: [
      {
        index: true,
        element: <SignIn />,
      },
    ],
  },
  {
    path: "/browse",
    element: <ProtectedRoute />,
    children: [
      {
        path: "/browse",
        element: <Browse />,
        children: [
          {
            path: "",

            element: <Home />,
          },
          {
            path: "tvshow",
            element: <Tvshow />,
          },
          {
            path: "search",
            element: <SearchhMovies />,
          },
          {
            path: "moviedetail/:MovieId",
            element: <h1>hgj</h1>,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <h1>404 - Page Not Found</h1>,
  },
]);

const Body = () => {
  return (
    <AuthProvider>
      <RouterProvider router={appRouter} />
    </AuthProvider>
  );
};

export default Body;
