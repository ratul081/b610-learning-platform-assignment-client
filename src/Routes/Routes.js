import { createBrowserRouter } from "react-router-dom";
import Main from "../Pages/Main/Main";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Register/Register";

export const routes = createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
      },
      {
        path:'/login',
        element: <LogIn></LogIn>
      },
      {
        path:'/register',
        element: <Register></Register>
      }
    ]
  }
])