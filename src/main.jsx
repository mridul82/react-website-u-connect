import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Login from './components/Login/Login.jsx';
import About from './components/Pages/About.jsx';
import Contact from './components/Pages/Contact.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,    
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/contact',
    element: <Contact />
  }
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
