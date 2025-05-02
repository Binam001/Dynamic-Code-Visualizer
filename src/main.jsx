import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import Home from './pages/Home.jsx'
import CodeEditor from './pages/CodeEditor.jsx'
import AboutUs from './pages/AboutUs.jsx'
import RootLayout from './RootLayout.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />, // Use Layout as the wrapper
    children: [
      { path: '/', element: <App /> },
      // { path: '/home', element: <Home /> },
      { path: '/codeEditor', element: <CodeEditor /> },
      { path: '/aboutUs', element: <AboutUs /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
