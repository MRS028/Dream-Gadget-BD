import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root";
import Home from "./Components/Home/Home";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import DashBoard from "./Components/Dashboard/DashBoard";
import Statistics from "./Components/Statistic/Statistics";
import ProductDetails from "./Components/Product Details/ProductDetails";
import UserReview from "./Components/Review/UserReview";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/dashboard",
        element: <DashBoard></DashBoard>,
        loader: ()=> fetch('/public/allgadgets.json'),
        
        
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/review",
        element: <UserReview></UserReview>,
      },
      {
        path: "/product/:productId",
        element: <ProductDetails />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
