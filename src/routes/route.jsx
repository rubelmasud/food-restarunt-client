import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../Layouts/Home/HomeLayout";
import ErrorPage from "../Sheard/ErrorPage/ErrorPage";
import HomePage from "../Pages/HomePage/HomePage";
import BlogPage from "../Pages/BlogPage/BlogPage";

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
                path: '/blog',
                element: <BlogPage></BlogPage>
            }
        ]
    }
])


export default router;