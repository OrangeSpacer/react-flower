
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import './styles/index.scss'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>
  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <RouterProvider router={router}/>
);
