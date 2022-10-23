import React, { useEffect } from "react";
import swal from "sweetalert";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";

import Login from "../views/auth/login"
import TestPage from "../views/testing"

const ScrollToTop = ({children}) => {
    const {pathname} = useLocation();
  
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [pathname])
  
    return children
  }
  
  const Auth = ({ children }) => {
    const token = localStorage.getItem("token");
    if (!token) {
      swal({
        title: "Denied!",
        text: `Access Denied, Please Login!`,
        icon: "error",
    });  
      return <Navigate to="/login" replace />;
    } 
      return children;
  };
  
  const Router = () => {
    return (
      <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<TestPage />} />
          {/* <Route path="/:id" element={<Auth><Detail /></Auth>} />   */}
          {/* <Route path="/" element={<Home />} /> */}
        </Routes>
        </ScrollToTop>
      </BrowserRouter>
    );
  };
  
  export default Router;