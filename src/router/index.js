import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import Login from "../pages/Login";

export const publicRoutes =[
    {path: '/about', element:About},
    {path: '/posts', element:Posts},
    {path: '/posts/:id', element:PostIdPage},
    {path: '*', element:Posts}
]

export const privateRoutes =[
    {path: '/login', element:Login},
    {path: '*', element:Login}
]