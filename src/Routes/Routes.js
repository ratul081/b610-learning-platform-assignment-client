import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Register/Register";
import FullCourseDetails from "../Pages/Courses/FullCourseDetails/FullCourseDetails";
import Category from "../Pages/Courses/Category/Category";
import Courses from "../Pages/Courses/Courses";
import Course from "../Pages/Courses/Course/Course";


export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
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
            loader: ()=> fetch("http://localhost:5000/courses/"),
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
        element: <FullCourseDetails></FullCourseDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`)
      }
    ]
  }
])