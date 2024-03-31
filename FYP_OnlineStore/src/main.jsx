import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './Login.jsx'
import CreateAccount from './CreateAccount.jsx';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import './index.css'
import { ErrorPage } from './Pages/ErrorPage.jsx';
import { MainPage } from './Pages/MainPage.jsx';
import { BatchBuy } from './Pages/BatchBuy.jsx';
import { CartPage } from './Pages/CartPage.jsx';

const router = createBrowserRouter(
[
  {path:"/",
  element:<Login/>,
  errorElement:<ErrorPage/>,
  
},
{
  path: "/MainPage",
  element:<MainPage/>,
  errorElement:<ErrorPage/>,
  children:[  
    {
      path:"/MainPage/BatchBuy",
      element:<BatchBuy/>,
    },
    {
      path:"/MainPage/Cart",
      element:<CartPage/>,
    },
    
  ]
}
]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/> 
  {/*<App/>*/}
  </React.StrictMode>,
)
