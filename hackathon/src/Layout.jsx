import React from 'react'
import Header from './components/Navbar'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

function Layout() {
  return (
    <>
    <Navbar/>
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout