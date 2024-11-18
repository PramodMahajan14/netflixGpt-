import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "./SignIn";
import Browse from "./Browse";
import ProtectedRoute from "../context/ProtectedRoute";
import SearchhMovies from "./SearchMovies";

import { AuthProvider } from "../context/AuthContext";
import PublicRoute from "../context/PublicRoute";

import Home from "./Home";

import TvsAndMovieSk from "./shimmrui/TvsAndMovieSk";
import Movies from "./TvShowsAndMovies/Movies";
import MyList from "./MyList.js/MyList";
const TvshowsPage = React.lazy(() => import("./TvShowsAndMovies/Tvshow"));
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
            element: (
              <Suspense fallback={<TvsAndMovieSk />}>
                <TvshowsPage />
                {/* <TvsAndMovieSk /> */}
              </Suspense>
            ),
          },
          {
            path: "movies",
            element: (
              <Suspense fallback={<TvsAndMovieSk />}>
                <Movies />
              </Suspense>
            ),
          },
          {
            path: "search",
            element: <SearchhMovies />,
          },
          {
            path: "mylist",
            element: <MyList />,
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
