import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Root, {loader as rootLoader} from './routes/root';
import ErrorPage from './error-page';
import Contact from './routes/contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,  // elemento raiz
    errorElement: <ErrorPage />, // elemento ooops! error generico
    loader: rootLoader,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
