import {createBrowserRouter, Navigate} from "react-router-dom";
import Notfound from "./views/Notfound.jsx";
import Signup from "./views/Signup.jsx";
import Users from "./views/Users.jsx";
import Login from "./views/Login.jsx";
import DefaultLayout from "./components/DefaultLayout.jsx";
import GuesstLayout from "./components/GuesstLayout.jsx";
import Dashboard from "./views/Dashboard.jsx";
import UserForm from "./views/UserForm";


const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children : [
            {
                path: "/",
                element: <Navigate to="/users" />
              },
            {
                path: "/dashboard",
                element: <Dashboard />
              },
              {
                path: "/users",
                element: <Users />
              },
              {
                path: '/users/new',
                element: <UserForm key="userCreate" />
              },
              {
                path: '/users/:id',
                element: <UserForm key="userUpdate" />
              }
        ]
      },
      {
        path: "/",
        element: <GuesstLayout />,
        children:[
            {
                path: "/login",
                element: <Login />
              },
              {
                path: "/signup",
                element: <Signup />
              },
        ]
      },
  
    {
      path: "*",
      element: <Notfound />
    },
  ]);

export default router;