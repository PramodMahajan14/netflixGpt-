import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "./SignIn";
import Browse from "./Browse";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
]);
const Body = () => {
  return <RouterProvider router={appRouter} />;
};

export default Body;
