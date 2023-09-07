import React from 'react'
import HomePage from './features/page/HomePage'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error404 from './features/errors/Error404';
import DataDeteailsPage from './features/page/DataDeteailsPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <Error404 />,
    children: [
      
    ],
  },
  {
    path: "datas/:dataId",
    element:<DataDeteailsPage/>
  },
]);


const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App