import React from "react";
import { Link } from "react-router-dom"

const Navi = () => {
  return (
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

      {/* <!-- Topbar Navbar --> */}
      <ul className="navbar-nav ml-auto">

        {/* <!-- Nav Item - User Information --> */}
        <li className="nav-item dropdown no-arrow">
          <Link
            className="nav-link dropdown-toggle"
            to="#"
            id="userDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span className="mr-2 d-none d-lg-inline text-gray-600 small">
              Admin
            </span>
            <img
              className="img-profile rounded-circle"
              src="img/undraw_profile.svg" alt=""
            />
          </Link>
          {/* <!-- Dropdown - User Information --> */}
          <div
            className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
            aria-labelledby="userDropdown"
          >
            <Link
              className="dropdown-item"
              to="/login"
              data-toggle="modal"
              data-target="#logoutModal"
            >
              <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
              Logout
            </Link>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navi;
