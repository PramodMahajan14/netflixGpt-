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

// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <PublicRoute />,
//     children: [
//       {
//         path: "",
//         element: <SignIn />,
//       },
//     ],
//   },
//   {
//     path: "/browse",
//     element: <ProtectedRoute />,
//     children: [
//       {
//         element: <Browse />,
//         children: [
//           {
//             path: "",
//             index: true,
//             element: <Home />,
//           },
//           {
//             path: "search",
//             element: <SearchhMovies />,
//           },
//           {
//             path: "moviedetail/:MovieId",
//             element: <h1>hgj</h1>,
//           },
//         ],
//       },
//     ],
//   },
//   {
//     path: "*",
//     element: <h1>404 - Page Not Found</h1>,
//   },
// ]);

const Body = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public route for sign-in */}
          <Route element={<PublicRoute />}>
            <Route path="/" element={<SignIn />} />
          </Route>

          {/* Protected route for authenticated pages */}
          <Route element={<ProtectedRoute />}>
            <Route path="/browse" element={<Browse />}>
              <Route index element={<Home />} />
              <Route path="search" element={<SearchhMovies />} />
              <Route
                path="moviedetail/:MovieId"
                element={<h1>Movie Details</h1>}
              />
            </Route>
          </Route>

          {/* 404 fallback route */}
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default Body;
