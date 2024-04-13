import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { Router,BrowserRouter,RouterProvider,useLocation } from 'react-router-dom'
import Login from './Login.jsx'
import Routing from './Routing.jsx'





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routing/>
  </BrowserRouter>
  </React.StrictMode>,
)
