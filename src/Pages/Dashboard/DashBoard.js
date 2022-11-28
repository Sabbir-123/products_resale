import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import useAdmin from "../../useHooks/useAdmin";
import useSeller from "../../useHooks/useSeller";

const DashBoard = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] =useAdmin(user?.email)
  const [isSeller] = useSeller(user?.email)
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-end">
        <input id="dashboard" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            {!isSeller && 
           <>
            <li>
            <Link to={"/dashboard"}>My Orders</Link>
          </li>
            <li>
            <Link to={"/dashboard/wishlist"}>My Wishlist</Link>
          </li>
           </>
            }
            {
                isAdmin && 
              <>
                <li>
                <Link to={"/dashboard/users"}>All Users</Link>
              </li>
              </>
            }
            {
                isSeller && 
              <>
                <li>
                <Link to={"/dashboard/addProduct"}>Add Product</Link>
              </li>
                <li>
                <Link to={"/dashboard/myProduct"}>My Product</Link>
              </li>
                <li>
                <Link to={"/dashboard/myBuyers"}>My Buyers</Link>
              </li>
              </>
            }
          </ul>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default DashBoard;
