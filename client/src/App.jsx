import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './pages/Home/Home'
import Weather from './pages/Weather/Weather'
import ToDo from './pages/ToDo/ToDo'
import './App.css'

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home />,
        },
        {
            path: '/todo',
            element: <ToDo />,
        },
        {
            path: '/weather',
            element: <Weather />,
        },
    ])
    return <RouterProvider router={router} />
}

export default App
