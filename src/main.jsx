import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import Contact from './components/Contact.jsx'
import Myprojects from './components/Myprojects.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        path: '/',
        element: <Home />
      },
      {
        path: '/Myprojects',
        element: <Myprojects />
      },
      {
        path: '/Contact',
        element: <Contact />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
