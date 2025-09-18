import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Outlet } from 'react-router-dom';
import Rbx from './routes/Rbx.tsx';
import Projects from './routes/Projects.tsx'
import Navbar from './components/Navbar.tsx';
import App from './App.tsx'

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <h1>Página Fora do Ar</h1>,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/projetos",
        element: <Projects />,
      },
    ],
  },
  {
    path: '/roblox',
    element: <Rbx/>
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
