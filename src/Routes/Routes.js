import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Register/Register";
import FullCourseDetails from "../Pages/Courses/FullCourseDetails/FullCourseDetails";
import Category from "../Pages/Courses/Category/Category";
import Courses from "../Pages/Courses/Courses";
import Course from "../Pages/Courses/Course/Course";
import PrivateRoute from "./Private Routes/PrivateRoute";
import TermAndCondition from "../Pages/Others/TermAndCondition/TermAndCondition";
import CheckOut from "../Pages/Share/CheckOut/CheckOut";


export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=> fetch('http://localhost:5000/home')
      },
      {
        path: '/login',
        element: <LogIn></LogIn>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/courses',
        element: <Courses></Courses>,
        children: [
          {
            path: '/courses',
            element: <Course></Course>,
            loader: () => fetch("http://localhost:5000/courses/"),
          }
          ,
          {
            path: '/courses/category/:id',
            element: <Category></Category>,
            loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`),
          },
        ]
      },
      {
        path: '/courses/:id',
        element: <PrivateRoute><FullCourseDetails></FullCourseDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`)
      },
      {
        path: '/terms_and_conditions',
        element: <TermAndCondition></TermAndCondition>,
      },
      {
        path: '/check_out/:id',
        element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/check_out/${params.id}`)
      }
      ,
      {
        path: "*",
        element: <div>Error</div>
      }
    ],
  }
])