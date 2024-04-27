import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Movies from "../Pages/Movies/Movies";

export const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/movies',
          element:<Movies/>
        }
      ],
    },
  ]);