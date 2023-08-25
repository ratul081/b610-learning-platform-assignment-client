import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Home from "../../Pages/Home/Home";
import LogIn from "../../Pages/LogIn/LogIn/LogIn";
import Register from "../../Pages/LogIn/Register/Register";
import FullCourseDetails from "../../Pages/Courses/FullCourseDetails/FullCourseDetails";
import Category from "../../Pages/Courses/Category/Category";
import Courses from "../../Pages/Courses/Courses/Courses";
import Course from "../../Pages/Courses/Course/Course";
import PrivateRoute from "../Private Routes/PrivateRoute";
import TermAndCondition from "../../Pages/Others/TermAndCondition/TermAndCondition";
import CheckOut from "../../Pages/Share/CheckOut/CheckOut";
import ErrorPage from "../../Pages/Share/ErrorPage/ErrorPage";
import PasswordForget from "../../Pages/Others/PasswordForget/PasswordForget";
import Blog from "../../Pages/Others/Blog/Blog";
import FAQ from "../../Pages/Others/FAQ/FAQ";
import Profile from "../../Pages/Profile/Profile";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch(
            "https://b610-learning-platform-assignment-server-ratul-44.vercel.app/home"
          ),
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
        children: [
          {
            path: "/courses",
            element: <Course></Course>,
            loader: () =>
              fetch(
                "https://b610-learning-platform-assignment-server-ratul-44.vercel.app/courses/"
              ),
          },
          {
            path: "/courses/category/:id",
            element: <Category></Category>,
            loader: ({ params }) =>
              fetch(
                `https://b610-learning-platform-assignment-server-ratul-44.vercel.app/category/${params.id}`
              ),
          },
        ],
      },
      {
        path: "/courses/:id",
        element: (
          <PrivateRoute>
            <FullCourseDetails></FullCourseDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://b610-learning-platform-assignment-server-ratul-44.vercel.app/courses/${params.id}`
          ),
      },
      {
        path: "/terms_and_conditions",
        element: <TermAndCondition></TermAndCondition>,
      },
      {
        path: "/check_out/:id",
        element: (
          <PrivateRoute>
            <CheckOut></CheckOut>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://b610-learning-platform-assignment-server-ratul-44.vercel.app/check_out/${params.id}`
          ),
      },
      {
        path: "/password_reset",
        element: <PasswordForget></PasswordForget>,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/faq",
        element: <FAQ></FAQ>,
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
]);
