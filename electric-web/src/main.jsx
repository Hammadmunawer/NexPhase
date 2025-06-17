import * as React from 'react';
import { createRoot } from 'react-dom/client'; // ✅ Import createRoot from correct package
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Services from './pages/Services';
import Careers from './pages/Careers';
import Projects from './pages/Projects';
import ApplyForm from './components/ApplyForm.jsx';

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'services', element: <Services /> },
      { path: 'projects', element: <Projects /> },
      { path: 'careers', element: <Careers /> },
      { path: 'apply-form', element: <ApplyForm /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
