import React from 'react'
import HomePage from './features/page/home/HomePage'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error404 from './features/errors/Error404';
import DataDeteailsPage from './features/page/detalPage/DataDeteailsPage';
import AddProdact from './features/page/addProdact/AddProdact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <Error404 />,
  },
  {
    path: "datas/:dataId",
    element:<DataDeteailsPage/>
  },
  {
    path:"add-prodact",
    element:<AddProdact/>
  }
]);


const App = () => {
  return (
   <>
    <RouterProvider router={router}/>
   </>
  )
}

export default App