import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "./SignIn";
import Browse from "./Browse";
import ProtectedRoute from "../context/ProtectedRoute";
import SearchhMovies from "./SearchMovies";

import { AuthProvider } from "../context/AuthContext";
import PublicRoute from "../context/PublicRoute";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import Home from "./Home";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <PublicRoute />,
      children: [
        {
          path: "/",
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
              path: "search",
              element: <SearchhMovies />,
            },
            {
              path: "moviedetail/:MovieId",
            },
          ],
        },
      ],
    },
  ]);

  return (
    <AuthProvider>
      <RouterProvider router={appRouter} />
    </AuthProvider>
  );
};

export default Body;
