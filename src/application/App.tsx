import React from 'react';
import './App.css';
import {Home} from "./pages/Home";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {ProcesoElectoral} from "./pages/ProcesoElectoral";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/proceso-electoral/:id",
    element: <ProcesoElectoral />,
  }
]);

function App() {
  return <RouterProvider router={router} />
}

export default App;
