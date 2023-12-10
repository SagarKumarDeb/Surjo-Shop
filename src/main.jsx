import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Layout/Home.jsx';
import Shop from './components/Shop/Shop.jsx';
import Orders from './components/Orders/Orders.jsx';
import Login from './components/Login/Login.jsx';
import Inventory from './components/Inventory/Inventory.jsx';

const router = createBrowserRouter([{
 
  path: '/',
  element: <Home></Home>,
  children:[{
            path:'/',
            element: <Shop></Shop>},

            {path: 'Orders',
            element: <Orders></Orders>},

            {path: 'Login',
            element: <Login></Login>},

            {path: 'inventory',
            element: <Inventory></Inventory>},
            
  ]

}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

