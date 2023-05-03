import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/Home/HomeLayout";
import ErrorPage from "../Sheard/ErrorPage/ErrorPage";
import HomePage from "../Pages/HomePage/HomePage";
import BlogPage from "../Pages/BlogPage/BlogPage";
import LoginLayout from "../Layouts/LoginLayout/LoginLayout";
import LoginPage from "../Pages/LoginPage/LoginPage";
import RegisterPage from "../Pages/RegisterPage/RegisterPage";
import ChefDetails from "../Components/ChefDetails";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <HomePage></HomePage>
            },
            {
                path: '/singleChef/:id',
                element: <PrivateRoute><ChefDetails></ChefDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://server-rubelmasud.vercel.app/allChefData/${params.id}`)
            },
            {
                path: '/blog',
                element: <BlogPage></BlogPage>
            }
        ]
    },
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: 'login',
                element: <LoginPage></LoginPage>
            },
            {
                path: 'register',
                element: <RegisterPage></RegisterPage>
            }
        ]
    }
])


export default router;