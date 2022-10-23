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
      <a
        className="sidebar-brand d-flex align-items-center justify-content-center"
        href="index.html"
      >
        <img src={logowhite} alt="logo" />
        <div className="sidebar-brand-text mx-3">Angkasa</div>
      </a>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider my-0" />

      {/* <!-- Nav Item - Dashboard --> */}
      <li className="nav-item active">
        <Link className="nav-link" to="index.html">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </Link>
      </li>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider" />

      {/* <!-- Heading --> */}
      <div className="sidebar-heading">Manage</div>

      {/* <!-- Nav Item - Airlines --> */}
      <li className="nav-item">
        <Link className="nav-link" to="charts.html">
          <i className="fas fa-fw fa-plane"></i>
          <span>Airlines</span>
        </Link>
      </li>

      {/* <!-- Nav Item - Flights --> */}
      <li className="nav-item">
        <Link className="nav-link" to="tables.html">
          <i className="fas fa-fw fa-plane-departure"></i>
          <span>Flights</span>
        </Link>
      </li>

      {/* <!-- Nav Item - Bookings --> */}
      <li className="nav-item">
        <Link className="nav-link" to="tables.html">
          <i className="fas fa-fw fa-chart-area"></i>
          <span>Bookings</span>
        </Link>
      </li>

      {/* <!-- Nav Item - Users --> */}
      <li className="nav-item">
        <a className="nav-link" href="tables.html">
          <i className="fas fa-fw fa-users"></i>
          <span>Users</span>
        </a>
      </li>
    </ul>
  );
};

export default Sidebar;
