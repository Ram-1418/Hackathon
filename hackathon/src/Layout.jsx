import React from 'react'
import Footer from './components/Footer'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard';
import Login from './components/Login';

function Layout() {
  const location = useLocation();
  const isDashboard = location.pathname === '/dashboard'; // Check if the current route is /dashboard
  const isLogin = location.pathname.includes("/login")
  return (
    <>
   {!(isDashboard || isLogin) && <Navbar />} {/* Render Navbar only if not on Dashboard */}
      {!(isDashboard || isLogin) && <Outlet />} {/* Render Outlet only if not on Dashboard */}
      {isDashboard && <Dashboard />} 
      {isLogin && <Login />} 
      {!(isDashboard || isLogin) && <Footer />} 
    </>
  )
}

export default Layout