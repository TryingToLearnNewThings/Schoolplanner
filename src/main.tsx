import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import React from 'react'
import './index.css'

import MainPage from './pages/MainPage.tsx'
import STedit from './pages/ST-Edit.tsx'
import HAedit from './pages/HA-Edit.tsx'
import TEedit from './pages/TE-Edit.tsx'
import NotFoundPage from './components/NotFoundPage/NotFoundPage.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '/',
        element: <MainPage />
      },
    ]
  },
  {
    path: '/ha-edit',
    element: <HAedit />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/st-edit',
    element: <STedit />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/te-edit',
    element: <TEedit />,
    errorElement: <NotFoundPage />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
