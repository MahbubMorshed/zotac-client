import React from "react";
import { Link, Outlet } from "react-router-dom";

const DashBoard = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        <h2 className="text-2xl font-bold text-secondary">
          Welcome to your Dashboard
        </h2>
        <Outlet />
        {/* <label
          htmlFor="dashboard-sidebar"
          className="btn btn-primary drawer-button lg:hidden"
        >
          abc
        </label> */}
      </div>

      <div className="drawer-side">
        <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-60 bg-secondary text-neutral">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link to="/dashboard">My Orders</Link>
          </li>
          <li>
            <Link to="/dashboard/addReview">My Review</Link>
          </li>
          <li>
            <Link to="/dashboard/myProfile">My Profile</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
