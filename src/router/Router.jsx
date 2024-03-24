import { createBrowserRouter } from "react-router-dom";
import Layout from "../Pages/Layout";
import NotFound from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home";
import AboutCoin from "../Pages/AboutCoin/AboutCoin";

export const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: '/:id',
          element: <AboutCoin />,
        },
      ]
    }
])