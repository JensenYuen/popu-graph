import React from 'react';
import HomePage from './pages/HomePage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const App = () => {
  const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/popu-graph",
    element: <HomePage />
  }
]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
