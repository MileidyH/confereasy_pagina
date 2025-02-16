import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Dashboard from './pages/Dashboard'
import Nosotros from './pages/Nosotros'
import Home from './pages/Home'
import Directiva from'./pages/salones/Directiva'
import Entrevista from './pages/salones/Entrevista';
import Capacitacion from './pages/salones/Capacitacion';
import Brain from './pages/salones/Brain';
import Login from './pages/auth/Login';
import Registro from './pages/auth/Registro';
let router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/salas',
    element: <Dashboard />,
    children: [
      {
        path: 'directiva',
        element: <Directiva />
      },
      {
        path: 'entrevista',
        element: <Entrevista />
      },
      {
        path: 'capacitacion',
        element: <Capacitacion />
      },
      {
        path: 'brain',
        element: <Brain />
      }

    ]
  },
  {
    path: '/nosostros',
    element: <Nosotros />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/registro',
    element: <Registro />
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
