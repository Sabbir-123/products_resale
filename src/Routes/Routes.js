import CategoryDetails from "../Pages/CategoryDetails/CategoryDetails";
import Login from "../Shared/Login/Login";
import SignUp from "../Shared/SignUp/SignUp";


const { createBrowserRouter } = require("react-router-dom");
const { default: ErrorPage } = require("../Components/ErrorPage/ErrorPage");
const { default: Main } = require("../Main/Main");
const { default: Home } = require("../Pages/Home/Home");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
            path: '/',
            element: <Home></Home>
        },
            {
            path: '/login',
            element:<Login></Login>
        },
            {
            path: '/register',
            element:<SignUp></SignUp>
        },
    
            {
            path: '/category/:id',
            element:<CategoryDetails></CategoryDetails>,
            loader: ({params})=>fetch(`http://localhost:8000/mobiles/${params.id}`)
        },
    
    
    ]
    }
])



export default router