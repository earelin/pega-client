import React from 'react';
import './App.css';
import {Home} from "./pages/Home";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {ProcesoElectoral} from "./pages/ProcesoElectoral";
import {AppBar, Container, CssBaseline, Toolbar, Typography} from "@mui/material";

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
  return <>
    <CssBaseline />
    <AppBar position="static">
      <Container>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            PEGA
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
    <Container>
      <RouterProvider router={router} />
    </Container>
  </>
}

export default App;
