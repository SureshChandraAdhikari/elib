import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";

export const router =  createBrowserRouter([
    {
        path:'/login',
        element: <LoginPage/>
    },
    {
        path:'/',
        element: <HomePage/>
    },
    {
        path:"/register", 
        element:<RegisterPage/>
    }
])

