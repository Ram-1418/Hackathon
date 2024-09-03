import React from "react";
import Footer from "./components/Footer";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login";

function Layout() {
  const location = useLocation();
  const isDashboard = location.pathname.includes("/dashboard"); // Check if the current route is /dashboard
  const isLogin = location.pathname.includes("/login");
  if (isLogin || isDashboard) {
    return <>{isLogin ? <Login /> : <Dashboard />}</>;
  } else {
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    );
  }
}

export default Layout;
