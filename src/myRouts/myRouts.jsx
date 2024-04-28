import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Movies from "../Pages/Movies/Movies";
import MovieDetails from "../Pages/MovieDetails/MovieDetails";
import Cart from "../Pages/Cart/Cart";

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
        },
        {
          path: '/movieDetails/:id',
          element:<MovieDetails/>
        },
        {
          path: '/cart',
          element: <Cart/>
        }
      ],
    },
  ]);