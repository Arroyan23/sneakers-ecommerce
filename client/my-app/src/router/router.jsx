import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "../pages/login";
import { HomePage } from "../pages/homepage";
import { NavBar } from "../layout/nav";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/homepage",
    element: <NavBar />,
    children: [
      {
        path: "/homepage",
        element: <HomePage />,  
      },
    ],
  },
]);
