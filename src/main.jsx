import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom';

import { Game, Start } from './components';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
                <Route index={true} path="/" element={<Start />} />
                <Route path="/game" element={<Game />} />
        </Route>
    )
);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
