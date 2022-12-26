import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import React from "react";
import routeArray from "./Routes";

function App() {
    const router = createBrowserRouter(routeArray)
    return (
        <RouterProvider router={router}/>
        );
}

export default App;
