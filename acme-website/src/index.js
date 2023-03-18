import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import MinerWarehouse from './pages/miner-wh';

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "minerwarehouse",
      element: <MinerWarehouse />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);