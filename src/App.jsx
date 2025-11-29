import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Signin from './pages/Signin';
import Login from './pages/Login';
import RootLayout from './pages/RootLayout';
import Home from './pages/Home';
import AllProduct from './pages/AllProduct';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';


const router = createBrowserRouter([
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/",
    element: <RootLayout />,
    children: [{
      index: true,
      element: <Home />,
    },
    {
      path: "/home",
      element: <Home />
    },
    {
      path: "/allproduct",
      element: <AllProduct />
    },
    {
      path: "/productdetails",
      element: <ProductDetails />
    },
    {
      path: "/cart",
      element: <Cart />
    },

    ]
  }
]);
function App() {



  return (
    <>

      <RouterProvider router={router} />
    </>
  )
}

export default App
