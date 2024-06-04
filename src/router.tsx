import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import DashBoardLayout from "./layout/DashBoardLayout";
import BooksPage from "./pages/BooksPage";

export const router =  createBrowserRouter([
    {
        path:'dashboard',
        element: <DashBoardLayout/>,
        children: [
            {
                path:'home',
                element: <HomePage/>,
            },
            {
                path:"books",
                element:<BooksPage/>
            },
        ]
    },
    {
        path:'/login',
        element: <LoginPage/>
    },
   
    {
        path:"/register", 
        element:<RegisterPage/>
    }
])

