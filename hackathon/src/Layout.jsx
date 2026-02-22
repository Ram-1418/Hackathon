import React from "react";
import Footer from "./components/Footer";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login";
import { NavigateProvider } from "./contexts/navigate";
import DoctorAuth  from "./components/DoctorAuth";

function Layout() {
  const navigate = useNavigate();
  const location = useLocation();

  const isDashboard = location.pathname.startsWith("/dashboard");
  const isLogin = location.pathname === "/login";
  const isDoctorLogin = location.pathname === "/doctor/login";

  if (isLogin) {
    return (
      <NavigateProvider value={{ navigate }}>
        <Login />
      </NavigateProvider>
    );
  }

  if (isDoctorLogin) {
    return (
      <NavigateProvider value={{ navigate }}>
        <DoctorAuth />
      </NavigateProvider>
    );
  }

  if (isDashboard) {
    return (
      <NavigateProvider value={{ navigate }}>
        <Dashboard />
      </NavigateProvider>
    );
  }

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
