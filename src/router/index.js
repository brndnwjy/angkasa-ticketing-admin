import React, { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Login from "../views/auth/login";
import Home from "../views";
import FlightList from "../views/flight/list";
import AirlineList from "../views/airline/list";
import BookingList from "../views/booking/list";
import UserList from "../views/user/list";
import FlightDetail from "../views/flight/detail";
import AirlineDetail from "../views/airline/detail";
import BookingDetail from "../views/booking/detail";
import UserDetail from "../views/user/detail";
import InsertAirline from "../views/airline/insert";
import InsertFlight from "../views/flight/insert";
import EditAirline from "../views/airline/edit";
import EditFlight from "../views/flight/edit";

const ScrollToTop = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children;
};

// const Auth = ({ children }) => {
//   const token = localStorage.getItem("token");
//   if (!token) {
//     swal({
//       title: "Denied!",
//       text: `Access Denied, Please Login!`,
//       icon: "error",
//     });
//     return <Navigate to="/login" replace />;
//   }
//   return children;
// };

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route path="/" element={<Home />} />

          <Route path="/user" element={<UserList />} />
          <Route path="/user/:id" element={<UserDetail />} />

          <Route path="/airline" element={<AirlineList />} />
          <Route path="/airline/:id" element={<AirlineDetail />} />
          <Route path="/airline/new" element={<InsertAirline />} />
          <Route path="/airline/edit/:id" element={<EditAirline />} />

          <Route path="/flight" element={<FlightList />} />
          <Route path="/flight/:id" element={<FlightDetail />} />
          <Route path="/flight/new" element={<InsertFlight />} />
          <Route path="/flight/edit/:id" element={<EditFlight />} />

          <Route path="/booking" element={<BookingList />} />
          <Route path="/booking/:id" element={<BookingDetail />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default Router;
