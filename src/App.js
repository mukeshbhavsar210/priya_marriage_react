import React from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Welcome from './components/Welcome';
import Guests from './components/Guests';
import Contact from './components/Contact';
import Root from "./Root";
import Users from "./components/Users";
import Footer from "./Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Welcome />, },
      { path: "/guest", element: <Guests />, },
      { path: "/contact", element: <Contact />, },
      { path: "/users", element: <Users />, }
    ],    
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}