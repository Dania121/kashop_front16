import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from "./layout/MainLayout";
import Products from "./pages/products/Products";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Cart from "./pages/cart/Cart";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
        {
            index:true,
            element:<Home/>
        },
        {
            path:"products",
            element:<Products/>
        },
        {
            path:"cart",
            element:<Cart/>
        },
        {
            path:"login",
            element:<Login/>
        },
        {
            path:"register",
            element:<Register/>
        }
    ]
  },
]);
export default router;