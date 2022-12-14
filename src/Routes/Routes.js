import Blogs from "../Pages/Blogs/Blogs";
import CategoryDetails from "../Pages/CategoryDetails/CategoryDetails";
import AllUsers from "../Pages/Dashboard/Admin/AllUsers";
import ShowReport from "../Pages/Dashboard/Admin/ShowReport";
import DashBoard from "../Pages/Dashboard/DashBoard";
import AddProduct from "../Pages/Dashboard/Seller/AddProduct";
import MyBuyers from "../Pages/Dashboard/Seller/MyBuyers";
import MyProduct from "../Pages/Dashboard/Seller/MyProduct";
import MyOrders from "../Pages/Dashboard/User/MyOrders";
import MyWishList from "../Pages/Dashboard/User/MyWishList";
import Payment from "../Pages/Dashboard/User/Payment/Payment";
import Login from "../Shared/Login/Login";
import SignUp from "../Shared/SignUp/SignUp";
import AdminRoute from "./AdminRoute/AdminRoute";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import SellerRoute from "./SellerRoute/SellerRoute";


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
            path: '/blogs',
            element:<Blogs></Blogs>
        },
    
            {
            path: '/category/:id',
            element:<PrivateRoute><CategoryDetails></CategoryDetails></PrivateRoute>,
            loader: ({params})=>fetch(`https://server-assignment-12.vercel.app/mobiles/${params.id}`)
        },
    
    
    ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
            path: '/dashboard',
            element: <PrivateRoute><MyOrders></MyOrders></PrivateRoute>
        },
        {
            path: '/dashboard/payment/:id',
            element:<PrivateRoute><Payment></Payment></PrivateRoute>, 
            loader: ({params})=>fetch(`https://server-assignment-12.vercel.app/bookings/${params.id}`)
        },
            {
            path: '/dashboard/wishlist',
            element: <PrivateRoute><MyWishList></MyWishList></PrivateRoute>
        },
            {
            path: '/dashboard/users',
            element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
            {
            path: '/dashboard/report',
            element: <AdminRoute><ShowReport></ShowReport></AdminRoute>
        },
            {
            path: '/dashboard/addProduct',
            element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
        },
            {
            path: '/dashboard/myProduct',
            element: <SellerRoute><MyProduct></MyProduct></SellerRoute>
        }
    
    ]
    }
])



export default router