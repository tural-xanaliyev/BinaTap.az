import React from 'react'
import HomePage from './features/page/home/HomePage'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error404 from './features/errors/Error404';
import DataDeteailsPage from './features/page/detalPage/DataDeteailsPage';
import DarkMode from './DarkMode';
import NavBar from './features/components/navbar/NavBar';

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
]);


const App = () => {
  return (
   <>
    <RouterProvider router={router}/>
   </>
  )
}

export default App