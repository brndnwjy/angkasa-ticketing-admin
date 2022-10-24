import React from "react";
import { Link } from "react-router-dom";
import logowhite from "../../../assets/logowhite.svg";

const Sidebar = () => {
  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      {/* <!-- Sidebar - Brand --> */}
      <Link
        className="sidebar-brand d-flex align-items-center justify-content-center"
        to="/"
      >
        <img src={logowhite} alt="logo" />
        <div className="sidebar-brand-text mx-3">Angkasa</div>
      </Link>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider my-0" />

      {/* <!-- Nav Item - Dashboard --> */}
      <li className="nav-item active">
        <Link className="nav-link" to="/">
          <i className="fas fa-fw fa-home"></i>
          <span>Home</span>
        </Link>
      </li>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider" />

      {/* <!-- Heading --> */}
      <div className="sidebar-heading">Manage</div>

      {/* <!-- Nav Item - Airlines --> */}
      <li className="nav-item">
        <Link className="nav-link" to="/airline">
          <i className="fas fa-fw fa-plane"></i>
          <span>Airlines</span>
        </Link>
      </li>

      {/* <!-- Nav Item - Flights --> */}
      <li className="nav-item">
        <Link className="nav-link" to="/flight">
          <i className="fas fa-fw fa-plane-departure"></i>
          <span>Flights</span>
        </Link>
      </li>

      {/* <!-- Nav Item - Bookings --> */}
      <li className="nav-item">
        <Link className="nav-link" to="/booking">
          <i className="fas fa-fw fa-chart-area"></i>
          <span>Bookings</span>
        </Link>
      </li>

      {/* <!-- Nav Item - Users --> */}
      <li className="nav-item">
        <Link className="nav-link" to="/user">
          <i className="fas fa-fw fa-users"></i>
          <span>Users</span>
        </Link>
      </li>
    </ul>
  );
};

export default Sidebar;
