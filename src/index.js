import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CarForm from './Routes/CarForm/CarForm';
import Sobre from './Routes/Sobre/Sobre';
import Home from './Routes/Home/Home';
import NotFound from './Routes/NotFound/NotFound';
import CarList from './Routes/CarList/CarList';

const router = createBrowserRouter([
  {
    path: "/", 
    element:<App/>,
    errorElement: <NotFound/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/AdicionarCarro",
        element: <CarForm/>
      },
      {
        path: "/Carros",
        element: <CarList/>
      },
      {
        path:"/Sobre",
        element: <Sobre/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
