import React from "react";
import Footer from "./components/Footer";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login";
import { NavigateProvider } from "./contexts/navigate";

function Layout() {
  const navigate = useNavigate();
  const location = useLocation();
  const isDashboard = location.pathname.includes("/dashboard"); // Check if the current route is /dashboard
  const isLogin = location.pathname.includes("/login");
  if (isLogin || isDashboard) {
    return <NavigateProvider value={{navigate}}>{isLogin ? <Login /> : <Dashboard />}</NavigateProvider>;
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
